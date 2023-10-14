/**
  * File: Student.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

studentApp.service('studentService', function ($http) {

    this.getAllStudents = function () {
        return $http.get("/Student/GetStudents");
    }
})