import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import svgr from "vite-plugin-svgr";


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
        svgr(),
    ],
})
