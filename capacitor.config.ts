import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'your_status_app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
