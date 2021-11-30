import { CapacitorConfig } from '@capacitor/cli';
import { environment } from './src/environments/environment.dev';
const config: CapacitorConfig = {
  appId: 'com.tempus.app',
  appName: 'tempus',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: environment.google.serverClientId,
      forceCodeForRefreshToken: true,
    },
  }
};

export default config;
