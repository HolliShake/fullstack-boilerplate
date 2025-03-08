import * as fs from 'fs-extra';
import inquirer from 'inquirer';
import * as path from 'path';

// Convert entity name to different cases
const toPascalCase = (str: string) => str.replace(/\b\w/g, char => char.toUpperCase()).replace(/-/g, '');
const toCamelCase = (str: string) => str.replace(/-./g, char => char[1].toUpperCase());
const toKebabCase = (str: string) => str.replace(/\s+/g, '-').toLowerCase();

async function main() {
    const { entityName, fields } = await inquirer.prompt([
        { name: 'entityName', message: 'Enter entity name (e.g., user, product-order):', type: 'input' },
        { name: 'fields', message: 'Enter fields (comma-separated, e.g., name:string, age:number):', type: 'input' }
    ]);

    const pascalCaseName = toPascalCase(entityName); // User, ProductOrder
    const camelCaseName = toCamelCase(entityName); // user, productOrder
    const kebabCaseName = toKebabCase(entityName); // user, product-order

    const outputPath = path.resolve(__dirname, './src');

    // Paths for the generated files
    const filePaths = {
        dto: `${outputPath}/dto/${kebabCaseName}/${kebabCaseName}.set.ts`,
        model: `${outputPath}/models/${kebabCaseName}.model.ts`,
        controller: `${outputPath}/controllers/${kebabCaseName}.controller.ts`,
        service: `${outputPath}/services/${kebabCaseName}.service.ts`
    };

    // Check if any of the files already exist
    const existingFiles = await Promise.all(
        Object.values(filePaths).map(async filePath => (await fs.pathExists(filePath)) ? filePath : null)
    );

    const filteredExistingFiles = existingFiles.filter(Boolean);

    if (filteredExistingFiles.length > 0) {
        console.log('❌ Aborting: The following files already exist:');
        filteredExistingFiles.forEach(file => console.log(`   - ${file}`));
        return;
    }

    try {
        // Ensure template files exist before reading
        const templateFiles = {
            dto: path.resolve(__dirname, 'templates/dto.template.txt'),
            model: path.resolve(__dirname, 'templates/model.template.txt'),
            controller: path.resolve(__dirname, 'templates/controller.template.txt'),
            service: path.resolve(__dirname, 'templates/service.template.txt')
        };

        for (const filePath of Object.values(templateFiles)) {
            if (!(await fs.pathExists(filePath))) {
                throw new Error(`Template file not found: ${filePath}`);
            }
        }

        // Read templates asynchronously
        const [dtoTemplate, modelTemplate, controllerTemplate, serviceTemplate] = await Promise.all([
            fs.readFile(templateFiles.dto, 'utf-8'),
            fs.readFile(templateFiles.model, 'utf-8'),
            fs.readFile(templateFiles.controller, 'utf-8'),
            fs.readFile(templateFiles.service, 'utf-8')
        ]);

        // Replace placeholders
        const replacements = {
            '{{ModelName}}': pascalCaseName,
            '{{NormalizedName}}': camelCaseName,
            '{{KebabName}}': kebabCaseName,
            '{{fields}}': fields.split(',').map(f => `  ${f.trim().replace(':', ': ')}`).join(';\n') + ';'
        };

        const replacePlaceholders = (template: string) =>
            Object.entries(replacements).reduce((content, [key, value]) => content.replace(new RegExp(key, 'g'), value), template);

        // Prepare file content
        const dtoContent = replacePlaceholders(dtoTemplate);
        const modelContent = replacePlaceholders(modelTemplate);
        const controllerContent = replacePlaceholders(controllerTemplate);
        const serviceContent = replacePlaceholders(serviceTemplate);

        // Create directories
        await fs.ensureDir(path.dirname(filePaths.dto));
        await fs.ensureDir(path.dirname(filePaths.model));
        await fs.ensureDir(path.dirname(filePaths.controller));
        await fs.ensureDir(path.dirname(filePaths.service));

        // Write files
        await Promise.all([
            fs.writeFile(filePaths.dto, dtoContent),
            fs.writeFile(filePaths.model, modelContent),
            fs.writeFile(filePaths.controller, controllerContent),
            fs.writeFile(filePaths.service, serviceContent)
        ]);

        console.log(`✅ Successfully generated DTO, Model, Controller, and Service for '${pascalCaseName}'!`);
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

main().catch(console.error);
