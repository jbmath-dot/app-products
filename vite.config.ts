import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : GitHub Pages 하위 주소(/저장소이름/)에서도 그대로 열리게 합니다.
export default defineConfig({
  base: './',
  plugins: [react()],
})
