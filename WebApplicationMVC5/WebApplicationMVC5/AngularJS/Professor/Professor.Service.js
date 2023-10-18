/**
  * File: Professor.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

courseApp.service('professorService', function ($http) {

    this.getAllProfessors = function () {
        return $http.get("/Professor/GetProfessors");
    }

    //Method responsible for Add Professor: CREATE
    this.addProfessor = function (professor) {

        var request = $http({
            method: 'post',
            url: '/Professor/addProfessor',
            data: professor
        });

        return request;
    }

    //Method responsible for Updating Professor By Id: Update
    this.updateProfessor = function (professor) {

        var requestUpdated = $http({
            method: 'post',
            url: '/Professor/UpdateProfessor',
            data: professor
        });
        return requestUpdated;
    }

    //Method responsible for Deleting Professor By Id: Delete
    this.deleteProfessor = function (UpdatedProfessorId) {

        return $http.post('/Professor/DeleteProfessor/' + UpdatedProfessorId);
    }
})