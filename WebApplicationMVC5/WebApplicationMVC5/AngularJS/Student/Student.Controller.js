/**
  * File: Student.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'studentCtrl' which will control the modules
  * 'student'
  * Author: Leticia Pimenta
  */

studentApp.controller('studentCtrl', function ($scope, studentService) {

    loadingStudent();

    function loadingStudent() {
        var listingStudents = studentService.getAllStudents();

        listingStudents.then(function (d) {
            $scope.Students = d.data;
        },
            function () {
                alert("An error occurred while trying to list all students!");
            });
    }
});