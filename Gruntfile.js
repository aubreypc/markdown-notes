module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			main: {
				cwd: "node_modules/bootstrap/dist/",
				src: "**/*",
				dest: "public/",
				expand: true,
			},
			client: {
				cwd: "node_modules/bootstrap/dist/",
				src: "**/*",
				dest: "client/public",
				expand: true,
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy']);
};
