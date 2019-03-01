const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const gcmq = require('gulp-group-css-media-queries');


let config = {
	src: './src',
	css: {
		src:'/precss/**/*.scss',
		dest: '/css'
	}
};
function build(){
	return gulp.src(config.src + config.css.src)

	//SASS
	.pipe(sass().on('error', sass.logError))
	//Autoprefixer
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	//Group media-queries
	.pipe(gcmq())

	.pipe(gulp.dest('./src/css'))
	.pipe(browserSync.stream())
	//rename
	.pipe(rename({suffix: '.min'}))
	//cleanCSS
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest(config.src + config.css.dest))
	//browserSync
 	.pipe(browserSync.stream())
}

function watch(){

	browserSync.init({
        server: {
            baseDir: config.src
        }
    })
	
	gulp.watch(config.src + config.css.src, build); 
	gulp.watch("./src/*.html").on('change', browserSync.reload);
}

gulp.task('build', build);
gulp.task('watch', watch);
