var myweb = angular.module ("myweb", []);
myweb.controller("Login", function ($scope){
	//funcion Inicio de sesion
	$scope.nombre = "daniela"
	$scope.contrasena = "mono"
	

	$scope.Inicio =function(a,b){
		if (a == $scope.nombre && b == $scope.contrasena) {
			window.open("https://soymatematicas.com/paginas-de-matematicas/") 
		} else {
					swal("Usuario incorrecto o contraseña incorrecto")
				}
		}




});
