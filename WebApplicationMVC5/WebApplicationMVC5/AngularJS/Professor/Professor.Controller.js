/**
  * File: Professor.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'professorCtrl' which will control the modules
  * 'professor'
  * Author: Leticia Pimenta
  */

professorApp.controller('professorCtrl', function ($scope, professorService) {

    loadingProfessor();

    function loadingProfessor() {
        var listingProfessors = professorService.getAllProfessors();

        listingProfessors.then(function (d) {
            $scope.Professors = d.data;
        },
            function () {
                alert("An error occurred while trying to list all professors!");
            });
    }
});