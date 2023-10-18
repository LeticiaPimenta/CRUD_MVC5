/**
  * File: Course.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

courseApp.service('courseService', function ($http) {

    this.getAllCourses = function () {
        return $http.get("/Course/GetCourse");
    }

    //Method responsible for Add Course: CREATE
    this.addCourse = function(course) {

        var request = $http({
            method: 'post',
            url: '/Course/addCourse',
            data: course
        });

        return request;
    }

    //Method responsible for Updating Course By Id: Update
    this.updateCourse = function (course) {

        var requestUpdated = $http({
            method: 'post',
            url: '/Course/UpdateCourse',
            data: course
        });
        return requestUpdated;
    }

    //Method responsible for Deleting Course By Id: Delete
    this.deleteCourse = function (UpdatedCourseId) {

        return $http.post('/Course/DeleteCourse/' + UpdatedCourseId);
    }
})