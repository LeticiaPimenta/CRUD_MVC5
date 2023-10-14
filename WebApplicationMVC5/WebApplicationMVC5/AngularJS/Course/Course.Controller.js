/**
  * File: Course.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'coursesCtrl' which will control the modules
  * 'course'
  * Author: Leticia Pimenta
  */

coursesApp.controller('courseCtrl', function ($scope, courseService) {

    loadingCourses();

    function loadingCourses() {
        var listingCourses = courseService.getAllCourses();

        listingCourses.then(function (d) {
            $scope.Courses = d.data;
        },
            function () {
                alert("An error occurred while trying to list all courses!");
            });
    }
});