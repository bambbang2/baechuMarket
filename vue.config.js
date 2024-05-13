// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   outputDir: '../src/main/resources/static', // Build Directory
// 	devServer: {
// 		proxy: 'http://localhost:8080/login' // Spring Boot Server
// 	}
// })

module.exports = {
  // npm run build 타겟 디렉토리
  outputDir: '../backend/src/main/resources/static',

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },
};
