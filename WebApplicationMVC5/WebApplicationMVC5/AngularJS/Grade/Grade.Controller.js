/**
  * File: Grade.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'gradeCtrl' which will control the modules
  * 'grade'
  * Author: Leticia Pimenta
  */

courseApp.controller('gradeCtrl', function ($scope, gradeService) {

    loadingGrades();

    function loadingGrades() {
        var listingGrades = gradeService.getAllGrades();

        listingGrades.then(function (d) {
            $scope.Grades = d.data;
        },
            function () {
                alert("An error occurred while trying to list all grades!");
            });
    }

    //Method responsible for adding each property of a New Grade:
    $scope.AddGrade = function () {

        var grade = {
            gradeId: $scope.gradeId,
            gradeName: $scope.name
        };

        var addInfos = gradeService.AddGrade(grade);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadingGrades();
                alert("Grade Added Successfully!");

                $scope.clearData();
            } else { alert("Grade not Added!"); }
        },
            function () {
                alert("An error occurred while trying to add a New Grade!");
            });
    }

    //Clear the fields after inserting data into db:
    $scope.clearData = function () {
        $scope.gradeId = "";
        $scope.gradeName = "";
    }

    //Method responsible for updating Grade by Id:
    $scope.updateGradebyId = function (grade) {

        $scope.UpdateGradeId = grade.gradeId;
        $scope.UpdateGradeName = grade.gradeName;

    }

    //Method responsible for rescuing data for deletion from the Grade:
    $scope.deleteGradeById = function (grade) {
        $scope.UpdateGradeId = grade.gradeId;
        $scope.UpdateGradeName = grade.gradeName;
    }

    //Method responsible for updating Grade data:
    $scope.updateGrade = function () {
        var grade = {
            gradeId: $scope.UpdateGradeId,
            gradeName: $scope.UpdateGradeName
        };
        var updateInfos = gradeService.updateGrade(grade);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                loadingGrades();
                alert("Grade Updated Successfully!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Grade not updated");
            }
        },
            function () {
                alert("An error occurred when trying to update the Grade!");
            });
    }

    //Method responsible for Clearing Data after Updating Grade:
    $scope.clearUpdatedData = function () {
        $scope.UpdateGradeId = '';
        $scope.UpdateGradeName = '';
    }

    //Method responsible for deleting the Grade by Id:
    $scope.deleteGrade = function (UpdateGradeId) {

        var deleteInfos = gradeService.deleteGrade($scope.UpdateGradeId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadingGrades();

                alert("Grade Deleted Successfully!");
            }
            else {
                alert("Grade not excluded!");
            }
        });
    }
});