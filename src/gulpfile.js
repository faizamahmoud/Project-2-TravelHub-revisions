// used for time consuming and repitive tasks
// minification of scripts and styles (removes comments?)
// cache bussing
// testing, linting and optimization
// Gulp pipeline: {File system} -> read files -> modify...modify -> write files -> {dest}

const gulp = require('gulp');
// const concat = require('gulp-concat');

// function css(cb) {
//     return gulp.src('/public/css/*.css')
//     .pipe(concat('styles.css'))
//     .pipe(gulp.dest('public/css/dist/css'));
//   }
  
//   exports.css = css

/*

-- Top Level Functions --
gulp.task - define tasks
gulp.src - Point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes 
 */

// logs message
gulp.task('message', function(){
  return console.log('Gulp is running')
})

// copy all CSS files

gulp.task('copyCSS', function(){
  gulp.src('src/views/*.css')
    .pipe(gulp.dest('dist'))
});