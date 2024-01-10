import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// let obj = {
//   name:"ARUN",
//   AGE:23,

// }

// const {name,AGE} = obj

// console.log(name);