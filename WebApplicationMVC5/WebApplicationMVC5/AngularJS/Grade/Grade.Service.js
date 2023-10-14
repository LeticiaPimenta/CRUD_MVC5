/**
  * File: Grade.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

gradeApp.service('gradeService', function ($http) {

    this.getAllGrades = function () {
        return $http.get("/Grade/GetGrades");
    }
})