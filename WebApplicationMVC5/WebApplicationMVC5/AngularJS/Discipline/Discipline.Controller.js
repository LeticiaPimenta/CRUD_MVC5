/**
  * File: Discipline.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'disciplineCtrl' which will control the modules
  * 'discipline'
  * Author: Leticia Pimenta
  */

courseApp.controller('disciplineCtrl', function ($scope, disciplineService) {

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

    //Method responsible for adding each property of a New Discipline:
    $scope.AddDiscipline = function () {

        var discipline = {
            disciplineId: $scope.DisciplineId,
            disciplineName: $scope.Discipline_Name,
            Professor_ID: $scope.Professor_ID
        };

        var addInfos = disciplineService.AddDiscipline(discipline);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadingDiscipline();
                alert("Discipline Added Successfully!");

                $scope.clearData();
            } else { alert("Discipline not Added!"); }
        },
            function () {
                alert("An error occurred while trying to add a New Discipline!");
            });
    }

    //Clear the fields after inserting data into db:
    $scope.clearData = function () {
        $scope.disciplineId = "";
        $scope.disciplineName = "";
    }

    //Method responsible for updating Discipline by Id:
    $scope.updateDisciplinebyId = function (discipline) {

        $scope.UpdateDisciplineId = discipline.disciplineId;
        $scope.UpdateDisciplineName = discipline.disciplineName;

    }

    //Method responsible for rescuing data for deletion from the Discipline:
    $scope.deleteDisciplineById = function (discipline) {
        $scope.UpdateDisciplineId = discipline.disciplineId;
        $scope.UpdateDisciplineName = discipline.disciplineName;
    }

    //Method responsible for updating Discipline data:
    $scope.updateDiscipline = function () {
        var discipline = {
            disciplineId: $scope.UpdateDisciplineId,
            disciplineName: $scope.UpdateDisciplineName
        };
        var updateInfos = disciplineService.updateDiscipline(discipline);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                loadingDiscipline();
                alert("Discipline Updated Successfully!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Discipline not updated");
            }
        },
            function () {
                alert("An error occurred when trying to update the Discipline!");
            });
    }

    //Method responsible for Clearing Data after Updating Discipline:
    $scope.clearUpdatedData = function () {
        $scope.UpdateDisciplineId = '';
        $scope.UpdateDisciplineName = '';
    }

    //Method responsible for deleting the Discipline by Id:
    $scope.deleteDiscipline = function (UpdateDisciplineId) {

        var deleteInfos = disciplineService.deleteDiscipline($scope.UpdateDisciplineId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadingDiscipline();

                alert("Discipline Deleted Successfully!");
            }
            else {
                alert("Discipline not excluded!");
            }
        });
    }
});