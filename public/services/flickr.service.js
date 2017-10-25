angular.module('bookgallery').
factory('flickr',[function() { 	
    return {
      	fetchPhotos : function(callback) {
			var flickr = new Flickr({
			  	api_key: "db60ad49f54026b1ad4dd75c22a4d906",
			  	secret: "5cedc8f25ad88782"
			});	
	      	flickr.photos.search({
			  	text: "red+panda",
			  	per_page:"25",
			  	page:"1"
				}, function(err, result) {
					if(err) { throw new Error(err); }					
				  	callback(result);
			})
       
    	}
    }
 }]);