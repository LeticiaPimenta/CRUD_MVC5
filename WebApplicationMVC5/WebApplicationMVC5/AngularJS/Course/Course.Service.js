/**
  * File: Course.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

coursesApp.service('courseService', function ($http) {

    this.getAllCourses = function () {
        return $http.get("/Course/GetCourse");
    }
})