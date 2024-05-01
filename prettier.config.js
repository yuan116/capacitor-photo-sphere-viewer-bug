/**
 * @typedef {import('prettier-plugin-jsdoc')} JSDocPlugin
 *
 * @typedef {import('prettier-plugin-organize-imports')} OrganizeImportsPlugin
 *
 * @typedef {import('prettier-plugin-packagejson')} PackagejsonPlugin
 *
 * @typedef {import('prettier-plugin-tailwindcss')} TailwindcssPlugin
 */

/** @type {import('prettier').Config} */
export default {
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'lf',
    htmlWhitespaceSensitivity: 'strict',
    jsxSingleQuote: true,
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
    // prettier-plugin-organize-imports and prettier-plugin-jsdoc bugs on plugins ordering
    plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-jsdoc', 'prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
    printWidth: 160,
    proseWrap: 'never',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: true,
    singleAttributePerLine: false,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    useTabs: false,

    // prettier-plugin-jsdoc
    jsdocAddDefaultToDescription: false,

    // prettier-plugin-tailwindcss
    tailwindFunctions: ['clsx'],
};
