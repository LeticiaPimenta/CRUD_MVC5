/**
  * File: Professor.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'professorCtrl' which will control the modules
  * 'professor'
  * Author: Leticia Pimenta
  */

courseApp.controller('professorCtrl', function ($scope, professorService) {

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

    //Method responsible for adding each property of a New Professor:
    $scope.AddProfessor = function () {

        var professor = {
            professorId: $scope.professorId,
            professorName: $scope.name
        };

        var addInfos = professorService.AddProfessor(professor);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadingProfessor();
                alert("Professor Added Successfully!");

                $scope.clearData();
            } else { alert("Professor not Added!"); }
        },
            function () {
                alert("An error occurred while trying to add a New Professor!");
            });
    }

    //Clear the fields after inserting data into db:
    $scope.clearData = function () {
        $scope.professorId = "";
        $scope.professorName = "";
    }

    //Method responsible for updating Professor by Id:
    $scope.updateProfessorbyId = function (professor) {

        $scope.UpdateProfessorId = professor.professorId;
        $scope.UpdateProfessorName = professor.professorName;

    }

    //Method responsible for rescuing data for deletion from the Professor:
    $scope.deleteProfessoryId = function (professor) {
        $scope.UpdateProfessorId = professor.professorId;
        $scope.UpdateProfessorName = professor.professorName;
    }

    //Method responsible for updating Professor data:
    $scope.updateProfessor = function () {
        var professor = {
            professorId: $scope.UpdateProfessorId,
            professorName: $scope.UpdateProfessorName
        };
        var updateInfos = professorService.updateProfessor(professor);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                loadingProfessor();
                alert("Professor Updated Successfully!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Professor not updated");
            }
        },
            function () {
                alert("An error occurred when trying to update the Professor!");
            });
    }

    //Method responsible for Clearing Data after Updating Professor:
    $scope.clearUpdatedData = function () {
        $scope.UpdateProfessorId = '';
        $scope.UpdateProfessorName = '';
    }

    //Method responsible for deleting the Professor by Id:
    $scope.deleteProfessor = function (UpdateProfessorId) {

        var deleteInfos = professorService.deleteProfessor($scope.UpdateProfessorId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadingProfessor();

                alert("Professor Deleted Successfully!");
            }
            else {
                alert("Professor not excluded!");
            }
        });
    }
});