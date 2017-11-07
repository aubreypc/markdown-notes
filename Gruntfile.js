module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			bootstrap_server: {
				cwd: "node_modules/bootstrap/dist/",
				src: "**/*",
				dest: "public/",
				expand: true,
			},
			bootstrap_client: {
				cwd: "node_modules/bootstrap/dist/",
				src: "**/*",
				dest: "client/public",
				expand: true,
			},
			katex: {
				cwd: "client/node_modules/katex/dist/",
				src: "**/*",
				dest: "client/public/",
				expand: true,
			},
			twemoji: {
				cwd: "client/node_modules/twemoji/dist/svg",
				src: "*.svg",
				dest: "client/public/svg",
				expand: true,
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);
};
