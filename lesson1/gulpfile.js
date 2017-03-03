//引入gulp文件
var gulp         =   require("gulp")
//安装一个服务器环境
var browserSync  =   require("browser-sync").create()
//安装gulp的babel支持
var babel        =   require("gulp-babel")
//添加一个reload命令
var reload       =   browserSync.reload;

gulp.task("js",function(){
	gulp.src('./src/index.js')
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(reload({stream:true}))
})

//打开默认的index文件，启动一个服务
gulp.task("default",function () {
	browserSync.init({
		server:{
			baseDir:'./'
		},
		port:'8080'
	});
	gulp.watch('src/*.js',['js'])
});