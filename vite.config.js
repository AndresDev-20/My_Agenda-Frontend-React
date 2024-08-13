import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Agenda',
        short_name: 'My Agenda',
        description: 'Mi Aplicación PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: './images/logo.png', 
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './images/logo.png', 
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ]
});
