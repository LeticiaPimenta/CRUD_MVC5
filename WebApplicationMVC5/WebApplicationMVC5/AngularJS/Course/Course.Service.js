/**
  * File: Course.Service.js
  * Date: 10/14/2023
  * Description: file responsible for loading data via $http.get - from MVC Controller
  * (where you will transform the data into Json)
  * Author: Leticia Pimenta
  */

courseApp.service('courseService', function ($http) {

    this.getAllCourses = function () {
        return $http.get("/Course/GetCourse");
    }

    //Método responsável por Adicionar Funcionário: CREATE
    this.adicionarFuncionario = function (funcionario) {

        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarFuncionario',
            data: funcionario
        });

        return request;
    }

    //Método responsável por Atualizar Funcionário Por Id: Update
    this.atualizarFuncionario = function (funcionario) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Funcionario/AtualizarFuncionario',
            data: funcionario
        });
        return requestAtualizado;
    }

    //Método responsável por Excluir Funcionário Por Id: Delete
    this.excluirFuncionario = function (AtualizadoFuncionarioId) {

        return $http.post('/Funcionario/ExcluirFuncionario/' + AtualizadoFuncionarioId);
    }
})