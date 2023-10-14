/**
  * File: Grade.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'gradeCtrl' which will control the modules
  * 'grade'
  * Author: Leticia Pimenta
  */

gradeApp.controller('gradeCtrl', function ($scope, gradeService) {

    loadingGrade();

    function loadingGrade() {
        var listingGrades = gradeService.getAllGrades();

        listingGrades.then(function (d) {
            $scope.Grades = d.data;
        },
            function () {
                alert("An error occurred while trying to list all grades!");
            });
    }
});