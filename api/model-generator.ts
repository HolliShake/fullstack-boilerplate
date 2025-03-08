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
        dto_set: `${outputPath}/dto/${kebabCaseName}/${kebabCaseName}.set.ts`,
        dto_get: `${outputPath}/dto/${kebabCaseName}/${kebabCaseName}.get.ts`,
        model: `${outputPath}/models/${kebabCaseName}.model.ts`,
        controller: `${outputPath}/controllers/${kebabCaseName}.controller.ts`,
        service: `${outputPath}/services/${kebabCaseName}.service.ts`
    };

    try {
        const templateFiles = {
            dto_set: path.resolve(__dirname, 'templates/dto.set.template.txt'),
            dto_get: path.resolve(__dirname, 'templates/dto.get.template.txt'),
            model: path.resolve(__dirname, 'templates/model.template.txt'),
            controller: path.resolve(__dirname, 'templates/controller.template.txt'),
            service: path.resolve(__dirname, 'templates/service.template.txt')
        };

        const [dtoSetTemplate, dtoGetTemplate, modelTemplate, controllerTemplate, serviceTemplate] = await Promise.all([
            fs.readFile(templateFiles.dto_set, 'utf-8'),
            fs.readFile(templateFiles.dto_get, 'utf-8'),
            fs.readFile(templateFiles.model, 'utf-8'),
            fs.readFile(templateFiles.controller, 'utf-8'),
            fs.readFile(templateFiles.service, 'utf-8')
        ]);

        const formatFields = (isDto) =>
            fields.split(',').map(f => {
                const [name, type] = f.trim().split(':');
                return isDto ? `  @ApiProperty()\n  ${name}: ${type};` : `  ${name}: ${type};`;
            }).join('\n\n');

        const replacements = {
            '{{ModelName}}': pascalCaseName,
            '{{NormalizedName}}': camelCaseName,
            '{{KebabName}}': kebabCaseName,
            '{{fieldsDto}}': formatFields(true),
            '{{fieldsModel}}': formatFields(false)
        };

        const replacePlaceholders = (template) =>
            Object.entries(replacements).reduce((content, [key, value]) =>
                content.replace(new RegExp(key, 'g'), value), template);

        await fs.ensureDir(path.dirname(filePaths.dto_set));
        await fs.ensureDir(path.dirname(filePaths.dto_get));
        await fs.ensureDir(path.dirname(filePaths.model));
        await fs.ensureDir(path.dirname(filePaths.controller));
        await fs.ensureDir(path.dirname(filePaths.service));

        await Promise.all([
            fs.writeFile(filePaths.dto_set, replacePlaceholders(dtoSetTemplate)),
            fs.writeFile(filePaths.dto_get, replacePlaceholders(dtoGetTemplate)),
            fs.writeFile(filePaths.model, replacePlaceholders(modelTemplate)),
            fs.writeFile(filePaths.controller, replacePlaceholders(controllerTemplate)),
            fs.writeFile(filePaths.service, replacePlaceholders(serviceTemplate))
        ]);

        console.log(`✅ Successfully generated DTO, Model, Controller, and Service for '${pascalCaseName}'!`);
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

main().catch(console.error);
