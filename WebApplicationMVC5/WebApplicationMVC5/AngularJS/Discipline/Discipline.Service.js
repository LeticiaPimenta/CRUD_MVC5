/**
  * File: Discipline.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

disciplineApp.service('disciplineService', function ($http) {

    this.getAllDisciplines = function () {
        return $http.get("/Discipline/GetDisciplines");
    }
})