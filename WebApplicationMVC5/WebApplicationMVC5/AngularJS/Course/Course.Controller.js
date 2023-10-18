/**
  * File: Course.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'coursesCtrl' which will control the modules
  * 'course'
  * Author: Leticia Pimenta
  */

courseApp.controller('courseCtrl', function ($scope, courseService) {

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

    //Method responsible for adding each property of a New course:
    $scope.AddCourse = function () {
        console.log("Chamou AddCourse");
        var course = {
            couseId: $scope.Course_Id,
            courseName: $scope.Course_Name
        };

        var addInfos = courseService.AddCourse(course);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadingCourses();
                alert("Course Added Successfully!");

                $scope.clearData();
            } else { alert("Course not Added!"); }
        },
            function () {
                alert("An error occurred while trying to add a New Course!");
            });
    }

    //Clear the fields after inserting data into db:
    $scope.clearData = function () {
        $scope.couseId = "";
        $scope.couseName = "";
    }

    //Method responsible for updating Course by Id:
    $scope.updateCoursebyId = function (course) {

        $scope.UpdateCourseId = course.courseId;
        $scope.UpdateCourseName = course.courseName;

    }

    //Method responsible for rescuing data for deletion from the Course:
    $scope.deleteCourseById = function (course) {
        $scope.UpdateCourseId = course.courseId;
        $scope.UpdateCourseName = course.courseName;
    }

    //Method responsible for updating Course data:
    $scope.updateCourse = function () {
        var course = {
            couseId: $scope.UpdateCourseId,
            courseName: $scope.UpdateCourseName
        };
        var updateInfos = courseService.updateCourse(course);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                loadingCourses();
                alert("Course Updated Successfully!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Course not updated");
            }
        },
            function () {
                alert("An error occurred when trying to update the Course!");
            });
    }

    //Method responsible for Clearing Data after Updating Course:
    $scope.clearUpdatedData = function () {
        $scope.UpdateCourseId = '';
        $scope.UpdateCourseName = '';
    }

    //Method responsible for deleting the Course by Id:
    $scope.deleteCourse = function (UpdateCourseId) {

        var deleteInfos = courseService.deleteCourse($scope.UpdateCourseId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadingCourses();

                alert("Course Deleted Successfully!");
            }
            else {
                alert("Course not excluded!");
            }
        });
    }
});