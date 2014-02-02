var gulp = require("gulp");
gulp.task("build", function () {
    var browserify = require('gulp-browserify');
    gulp.src("src/app.js", {read: false})
        .pipe(browserify({
            "debug": true
        }))
        .pipe(gulp.dest("./app/"));
});

gulp.task("server", function () {
    var connect = require("connect");
    connect().use(connect.static(__dirname)).listen(8989);
    console.log("Open: http://localhost:8989/")
});

gulp.task("watch", ["build", "server"], function () {
    gulp.watch("src/**/*.js", ["build"]);
});
