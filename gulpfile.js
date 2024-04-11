const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass( {
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('.maps'))
        .pipe(gulp.dest('build/styles'))
    }
function funcaoPadrao(callBack) {
    console.log('Executando via gulp')
    callBack();
} 

function dizOi (callBack){
    console.log("ola gulp")
    dizTchau();
    callBack();
}
function dizTchau() {
    console.log("Tchau Gulp");
}
exports.default = funcaoPadrao;
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}