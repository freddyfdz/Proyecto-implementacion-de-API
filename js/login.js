<<<<<<< HEAD
//se declara el ngRoute para poder darle vida al ng-view declarado en el index
var login = angular.module("login", ['ngRoute']); 
=======
var login = angular.module("login", ['ngRoute']);
>>>>>>> 5f325cf81eaa90ea3a26b6d18393b39fca8e244b
  //definimos las rutas 
login.config(function($routeProvider)
{
	$routeProvider
<<<<<<< HEAD
	  //.when('/', {
          //templateUrl: 'login.html',
          //controller: 'ctrlogin'
  //})

=======
>>>>>>> 5f325cf81eaa90ea3a26b6d18393b39fca8e244b
		.when('/', {
		templateUrl: 'login.html',
		controller: 'ctrlogin'
		})
		
<<<<<<< HEAD
		//.when('/', {
		//templateUrl: 'datos.html',
		//controller: 'ctrdatos'
		//})

=======
		.when('/login', {
		templateUrl: 'login.html',
		controller: 'ctrlogin'
		})
		
>>>>>>> 5f325cf81eaa90ea3a26b6d18393b39fca8e244b
		.otherwise({
		redirectTo: '/'
		});
})
		login.controller('ctrlogin', function($scope) 
			{
			console.log("cargue el template de login")
			})
<<<<<<< HEAD
		//login.controller('ctrdata', function($scope) 
			//{
			//console.log("cargue el template de data")
			//})

//utilizo la herramienta $htpp para poder realizar nuestra conexion con la api y traer asi los datos con el Json haciendo uso para ello del metodo POST 
		login.controller("appController", function ($scope, $http) 
			{
				$scope.login = function ()
				{
		$http.post("http://api-a.vime.com.co/login/?username="+$scope.username+"&password="+$scope.password).success(function (data) 
			{
			$scope.datos = data;
				localStorage.setItem('cookie', $scope.data.cookie)
				localStorage.setItem('user_id', $scope.data.user_id)
				});
			}
})

		login.controller("appController", function ($scope, $http) 
			{
			cookie = localStorage.getItem('cookie');
			Id = localStorage.getItem('Id');

			$http.get("http://api-a.vime.com.co/login/update/?user_id="+Id+"user_id"+"&cookie"+cookie).success(function (data) 
				{
			   	$scope.datos = data;
			   	});
			});
=======
		
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
>>>>>>> 5f325cf81eaa90ea3a26b6d18393b39fca8e244b
