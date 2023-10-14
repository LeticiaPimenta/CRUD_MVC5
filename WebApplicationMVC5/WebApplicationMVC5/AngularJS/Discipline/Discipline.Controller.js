/**
  * File: Discipline.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'disciplineCtrl' which will control the modules
  * 'discipline'
  * Author: Leticia Pimenta
  */

disciplineApp.controller('disciplineCtrl', function ($scope, disciplineService) {

    loadingDiscipline();

    function loadingDiscipline() {
        var listingDisciplines = disciplineService.getAllDisciplines();

        listingDisciplines.then(function (d) {
            $scope.Disciplines = d.data;
        },
            function () {
                alert("An error occurred while trying to list all disciplines!");
            });
    }
});