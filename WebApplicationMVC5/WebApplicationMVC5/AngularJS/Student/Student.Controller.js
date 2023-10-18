/**
  * File: Student.Controller.js
  * Date: 10/14/2023
  * Description: This file will contain the code for 'studentCtrl' which will control the modules
  * 'student'
  * Author: Leticia Pimenta
  */

courseApp.controller('studentCtrl', function ($scope, studentService) {

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

    //Method responsible for adding each property of a New Student:
    $scope.AddStudent = function () {

        var student = {
            studentId: $scope.studentId,
            studentName: $scope.name
        };

        var addInfos = studentService.AddStudent(student);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                loadingStudent();
                alert("Student Added Successfully!");

                $scope.clearData();
            } else { alert("Student not Added!"); }
        },
            function () {
                alert("An error occurred while trying to add a New Student!");
            });
    }

    //Clear the fields after inserting data into db:
    $scope.clearData = function () {
        $scope.studentId = "";
        $scope.studentName = "";
    }

    //Method responsible for updating Student by Id:
    $scope.updateStudentbyId = function (student) {

        $scope.UpdateStudentId = student.studentId;
        $scope.UpdateStudentName = student.studentName;

    }

    //Method responsible for rescuing data for deletion from the Student:
    $scope.deleteStudentById = function (student) {
        $scope.UpdateStudentId = student.studentId;
        $scope.UpdateStudentName = student.studentName;
    }

    //Method responsible for updating Student data:
    $scope.updateStudent = function () {
        var student = {
            studentId: $scope.UpdateStudentId,
            studentName: $scope.UpdateStudentName
        };
        var updateInfos = studentService.updateStudent(student);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                loadingStudent();
                alert("Student Updated Successfully!");
                $scope.clearUpdatedData();
            }
            else {
                alert("Student not updated");
            }
        },
            function () {
                alert("An error occurred when trying to update the Student!");
            });
    }

    //Method responsible for Clearing Data after Updating Student:
    $scope.clearUpdatedData = function () {
        $scope.UpdateStudentId = '';
        $scope.UpdateStudentName = '';
    }

    //Method responsible for deleting the Student by Id:
    $scope.deleteStudent = function (UpdateStudentId) {

        var deleteInfos = studentService.deleteStudent($scope.UpdateStudentId);
        deleteInfos.then(function (d) {

            if (d.data.success === true) {
                loadingStudent();

                alert("Student Deleted Successfully!");
            }
            else {
                alert("Student not excluded!");
            }
        });
    }
});