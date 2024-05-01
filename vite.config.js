import react from '@vitejs/plugin-react-swc';
import fsExtra from 'fs-extra';
import path from 'node:path';
import { defineConfig } from 'vite';
import packageJson from './package.json';

const EXCLUDE_OPTIMIZE_DEPENDECIES = ['@capacitor/android', '@capacitor/ios', '@fontsource/nunito'];

export default defineConfig((env) => {
    const isProduction = env.mode === 'production';
    // const isProduction = false;

    return {
        build: {
            chunkSizeWarningLimit: 1000,
            commonjsOptions: {
                ignoreDynamicRequires: true,
                requireReturnsDefault: true,
            },
            modulePreload: false,
            outDir: 'www',
            rollupOptions: {
                output: {
                    compact: true,
                    generatedCode: {
                        constBindings: true,
                        objectShorthand: true,
                    },
                    indent: false,
                    minifyInternalExports: true,
                },
                strictDeprecations: true,
                treeshake: {
                    propertyReadSideEffects: false,
                },
            },
            sourcemap: !isProduction,
        },
        esbuild: {
            legalComments: 'none',
            minifyIdentifiers: true,
            minifyWhitespace: true,
            minifySyntax: true,
            target: 'es2022',
            treeShaking: true,
        },
        optimizeDeps: {
            include: Object.keys(packageJson.dependencies).filter((dependency) => !EXCLUDE_OPTIMIZE_DEPENDECIES.includes(dependency)),
        },
        plugins: [
            {
                name: '-capacitor:copy',
                apply: 'serve',
                configureServer(server) {
                    setTimeout(() => {
                        const localIP = server.resolvedUrls.network.find((networkURL) => {
                            const url = new URL(networkURL);

                            return !url.hostname.startsWith('100.64.0.');
                        });

                        if (localIP === undefined) {
                            console.log();
                            console.log('Capacitor Live Reload unvailable');
                            console.log('    Please ensure your device is connected to a network');
                            console.log();

                            return;
                        }

                        fsExtra.mkdirpSync('www');
                        fsExtra.writeFileSync(path.join('www', 'capacitor-live-reload-url'), localIP);

                        import('node:child_process').then(async (childProcess) => {
                            const module = await import('node:module').then((m) => m.default);

                            childProcess.execFileSync(module.createRequire(import.meta.url).resolve(path.join('.bin', 'capacitor')), ['copy'], {
                                encoding: 'utf-8',
                            });
                        });
                    }, 100);
                },
            },
            react(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['.js', '.jsx', '.mjs', '.json'],
        },
        server: {
            host: true,
        },
    };
});
