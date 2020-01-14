const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const merge = require('merge2');

const Builder = require('gulp-bem-bundle-builder');
const bundlerFs = require('gulp-bem-bundler-fs');

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssEach = require('postcss-each');
const postcssFor = require('postcss-for');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssCalc = require('postcss-calc');
const postcssNested = require('postcss-nested');
const postcssUrl = require('postcss-url');
const postcssReporter = require('postcss-reporter');
const rebemCss = require('rebem-css');
const gulpOneOf = require('gulp-one-of');

const builder = Builder({
    levels: ['blocks']
});

gulp.task('build', function() {
    return bundlerFs('pages/style')
        .pipe(builder({
            css: bundle =>
                bundle.src('css')
                    .pipe(gulpOneOf())
                    .pipe(postcss([
                        postcssImport(),
                        postcssEach,
                        postcssFor,
                        postcssSimpleVars(),
                        postcssCalc(),
                        postcssNested,
                        rebemCss,
                        postcssUrl({ url: 'rebase' }),
                        autoprefixer(),
                        postcssReporter()
                    ]))
                    .pipe(concat(bundle.name + '.css')),
            js: bundle =>
                bundle.src('js')
                    .pipe(concat('script.js'))
        }))
        .pipe(gulp.dest('build'))
        .pipe(debug());
});

gulp.task('default', gulp.series('build'));

gulp.task('watch', function() {
    gulp.watch('blocks/*.css', gulp.series('build'));
});