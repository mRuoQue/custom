module.exports = {
	lintOnSave: false,
	devServer: {
		open:true,
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:3000', 
				ws: true, 
				changeOrigin: true, 
				pathRewrite: {
					'^/api': '/'
				}

			}
		}

	}
}
