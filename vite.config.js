const path = require("path");

module.exports = {
    alias: {
        // 路径映射必须以/开头和结尾
        "/com/": path.resolve(__dirname, "src/components"),
        "/views/": path.resolve(__dirname, "src/views"),
    },
    proxy: {
        '/api': {
            target: 'http://foreverheart.top',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
};
