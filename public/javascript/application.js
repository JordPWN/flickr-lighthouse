$(document).ready(function() {

var credentials;

$.ajax({
	method: "GET",
	url: "flickr-creds",
	success: function(data){
		credentials = data;
		newPhoto("lighthouse");
	}
});
	var flickrRoot = "https://api.flickr.com/services/rest/" 

	function newPhoto(tag){

		$.ajax({
			url: flickrRoot,
			data: $.extend({
				method: "flickr.photos.search",
				tags: tag,
				format: "json",
				nojsoncallback: "1",
			}, credentials),
			method: "GET",
			dataType: "json",
			success: function(json){
				var item = json.photos.photo[0];
				var url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
				$("<img>", {src: url}).appendTo(".lighthouse-container");
			}
		});

	}

});
