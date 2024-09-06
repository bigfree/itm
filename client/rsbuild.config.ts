import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
    plugins: [
        pluginReact({
            swcReactOptions: {
                importSource: '@emotion/react',
            },
        }),
        pluginImageCompress(),
    ],
    tools: {
        swc: {
            jsc: {
                experimental: {
                    plugins: [['@swc/plugin-emotion', {}]],
                },
            },
        },
        rspack(config, { appendPlugins }) {
            if ('true' === process.env.RSDOCTOR) {
                appendPlugins(
                    new RsdoctorRspackPlugin({
                        port: 4133,
                    }),
                );
            }
        },
    },
    performance: {
        chunkSplit: {
            strategy: 'split-by-experience',
        },
    },
    output: {
        polyfill: 'usage',
    },
    server: {
        port: 3000,
    },
});
