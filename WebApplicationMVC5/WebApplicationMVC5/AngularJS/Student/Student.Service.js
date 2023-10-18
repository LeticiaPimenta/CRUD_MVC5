/**
  * File: Student.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

courseApp.service('studentService', function ($http) {

    this.getAllStudents = function () {
        return $http.get("/Student/GetStudents");
    }

    //Method responsible for Add Student: CREATE
    this.addStudent = function (student) {

        var request = $http({
            method: 'post',
            url: '/Student/addStudent',
            data: student
        });

        return request;
    }

    //Method responsible for Updating Student By Id: Update
    this.updateStudent = function (student) {

        var requestUpdated = $http({
            method: 'post',
            url: '/Student/UpdateStudent',
            data: student
        });
        return requestUpdated;
    }

    //Method responsible for Deleting Student By Id: Delete
    this.deleteStudent = function (UpdatedStudentId) {

        return $http.post('/Student/DeleteStudent/' + UpdatedStudentId);
    }
})