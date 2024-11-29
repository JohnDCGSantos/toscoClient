import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  svgr({
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // Modificando para aceitar `ref`
              removeViewBox: false,
            },
          },
        },
      ],
    },
    // Habilitar o forwardRef nos componentes
    icon: true,
    svgProps: {
      ref: 'ref', // Isso permite que a ref seja passada corretamente
    },
  }),],
})
