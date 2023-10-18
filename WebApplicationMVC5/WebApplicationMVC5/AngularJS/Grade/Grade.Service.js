/**
  * File: Grade.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
 **/

courseApp.service('gradeService', function ($http) {

    this.getAllGrades = function () {
        return $http.get("/Grade/GetGrades");
    }

    //Method responsible for Add Grade: CREATE
    this.addGrade = function (grade) {

        var request = $http({
            method: 'post',
            url: '/Grade/addGrade',
            data: grade
        });

        return request;
    }

    //Method responsible for Updating Grade By Id: Update
    this.updateGrade = function (grade) {

        var requestUpdated = $http({
            method: 'post',
            url: '/Grade/UpdateGrade',
            data: grade
        });
        return requestUpdated;
    }

    //Method responsible for Deleting Grade By Id: Delete
    this.deleteGrade = function (UpdatedGradeId) {

        return $http.post('/Grade/DeleteGrade/' + UpdatedGradeId);
    }
})