//se declara el ngRoute para poder darle vida al ng-view declarado en el index
var login = angular.module("login", ['ngRoute']); 
  //definimos las rutas 
login.config(function($routeProvider)
{
	$routeProvider
	.when('/login', {
	controller: "loginController",
	templateUrl: 'login.html'
	})

	.when('/datos', {
	templateUrl: 'datos.html',
	controller: 'ctrdatos'
	})
	
	.when('/estado', {
	templateUrl: 'estado.html',
	controller: 'estadoController'
	})
	
	.when('/mensajes', {
	templateUrl: 'mensajes.html',
	controller: 'mensajesController'
	})
	
	.otherwise({
	redirectTo: '/login'
	});
})
