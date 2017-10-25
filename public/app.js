var app = angular.module('bookgallery',['ngRoute','ngResource']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/gallery',{
			templateUrl : 'views/gallery.view.html',
			controller: 'GalleryController'
		})
		.otherwise({redirectTo:'/gallery'});
}]);