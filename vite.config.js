import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// ⚠️ Không cần @tailwindcss/vite (chỉ dùng khi Tailwind v4)
export default defineConfig({
  plugins: [vue()],
})
