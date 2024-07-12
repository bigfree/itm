import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    generates: {
        // './src/generated/pokeApi/': {
        //     schema: './pokeApi.graphql',
        //     documents: ['src/graphql/pokeapi/**/*.{ts, tsx}'],
        //     preset: 'client',
        //     plugins: [],
        //     config: {
        //         useTypeImports: true,
        //     },
        //     presetConfig: {
        //         gqlTagName: 'gql',
        //         fragmentMasking: false,
        //     },
        // },
        './src/generated/itm/': {
            schema: './itm-gql.graphql',
            documents: ['src/graphql/itm/**/*.{ts, tsx}'],
            preset: 'client',
            plugins: [],
            config: {
                useTypeImports: true,
            },
            presetConfig: {
                gqlTagName: 'gql',
                fragmentMasking: false,
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;