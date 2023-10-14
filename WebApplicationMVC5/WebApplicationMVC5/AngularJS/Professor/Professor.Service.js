/**
  * File: Professor.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

professorApp.service('professorService', function ($http) {

    this.getAllProfessors = function () {
        return $http.get("/Professor/GetProfessors");
    }
})