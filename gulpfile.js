const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// Paths
const paths = {
  scss: "./scss/**/*.scss",
  css: "./css"
};

// Compile SCSS to CSS (Without Minification)
function compileSCSS() {
  return gulp
    .src(paths.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()])) // Removed cssnano()
    .pipe(gulp.dest(paths.css));
}

// Watch SCSS for changes
function watchFiles() {
  gulp.watch(paths.scss, compileSCSS);
}

// Default Task
exports.default = gulp.series(compileSCSS, watchFiles);
