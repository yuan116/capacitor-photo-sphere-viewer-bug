import type { CapacitorConfig } from '@capacitor/cli';
import fsExtra from 'fs-extra';
import path from 'node:path';

// https://capacitorjs.com/docs/config
const config: CapacitorConfig = {
    appId: 'com.yuan116.test',
    appName: 'Test',
    server: {
        androidScheme: 'http',
    },
    webDir: 'www',
};

const file = path.join(config.webDir, 'capacitor-live-reload-url');
if (fsExtra.existsSync(file)) {
    const url = fsExtra.readFileSync(file, 'utf-8');

    if (url !== '') {
        config.server.cleartext = true;
        config.server.url = url;
    }
}

export default config;
