angular.module('bookgallery')
.controller('GalleryController',['$scope','flickr',function($scope,flickr){
    $scope.layout = 'grid';
    $scope.photos = [];

    flickr.fetchPhotos(function(data) {    	
      	$scope.photos = data.photos.photo;
      	console.log($scope.photos);
    });

    $scope.formURL = function(p,flag=false) {
    	if(!flag)
        	return "http://farm"+p.farm+".static.flickr.com/"+p.server+"/"+p.id+"_"+p.secret+".jpg" ;
        else
        	return "http://farm"+p.farm+".static.flickr.com/"+p.server+"/"+p.id+"_"+p.secret+"_s.jpg" ;
    };
}]);