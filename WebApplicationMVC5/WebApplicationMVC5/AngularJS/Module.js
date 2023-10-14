/**
  * File: Module.js
  * Date: 10/14/2023
  * Description: This file will contain the 'Courses' module, which we will use to be able to
  * perform CRUD operations through ng-app in the view part of the application
  * Author: Leticia Piment
  */

var coursesApp;

(function () {

    courseApp = angular.module('courses', []);
    disciplineApp = angular.module('disciplines', []);
    gradeApp = angular.module('grades', []);
    professorApp = angular.module('professors', []);
    studentApp = angular.module('students', []);

})();