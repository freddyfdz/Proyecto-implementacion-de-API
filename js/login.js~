var login = angular.module("login", ['ngRoute']);
  //definimos las rutas 
login.config(function($routeProvider)
{
	$routeProvider
		.when('/', {
		templateUrl: 'login.html',
		controller: 'ctrlogin'
		})
		
		.when('/login', {
		templateUrl: 'login.html',
		controller: 'ctrlogin'
		})
		
		.otherwise({
		redirectTo: '/'
		});
})
		login.controller('ctrlogin', function($scope) 
			{
			console.log("cargue el template de login")
			})
		
		//con dataResource inyectamos la factoría
		login.controller("appController", function ($scope, $http) 
			{
			$scope.login = function ()
			{
			if (!$scope.username || !$scope.password)
			{
				alert("Uno o mas campos requeridos estan vacios")
			}
			//hacemos uso de $http para obtener los datos del json
			$http.post("http://api-a.vime.com.co/login/?username="+$scope.username+"&password="+$scope.password).success		(function (data) 
				{
			   	$scope.datos = data;
			   	});
		    		//datosResource lo tenemos disponible en la vista gracias a $scope
		    		
		    		}
			})
