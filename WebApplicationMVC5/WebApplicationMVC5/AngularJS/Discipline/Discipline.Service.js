/**
  * File: Discipline.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

courseApp.service('disciplineService', function ($http) {

    this.getAllDisciplines = function () {
        return $http.get("/Discipline/GetDisciplines");
    }

    //Method responsible for Add Discipline: CREATE
    this.addDiscipline = function (discipline) {

        var request = $http({
            method: 'post',
            url: '/Discipline/addDiscipline',
            data: discipline
        });

        return request;
    }

    //Method responsible for Updating Discipline By Id: Update
    this.updateDiscipline = function (discipline) {

        var requestUpdated = $http({
            method: 'post',
            url: '/Discipline/UpdateDiscipline',
            data: discipline
        });
        return requestUpdated;
    }

    //Method responsible for Deleting Discipline By Id: Delete
    this.deleteDiscipline = function (UpdatedDisciplineId) {

        return $http.post('/Discipline/DeleteDiscipline/' + UpdatedDisciplineId);
    }
})