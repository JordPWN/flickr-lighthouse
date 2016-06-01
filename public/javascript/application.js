$(document).ready(function() {

	// var credentials;
	var counter = 0;
	var items;
	
	window.setInterval(function(){
		item = items.photo[counter];
		var url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
		// $("<img>", {src: url}).appendTo(".lighthouse-container");
		$(".lighthouse-container").html($("<img>", {src: url}));
  	
		counter++;
	}, 3000);

	$.ajax({
		method: "GET",
		url: "flickr-creds",
		success: function(data){
			var credentials = data;
			newPhoto(credentials, "lighthouse");
		}
	});
	var flickrRoot = "https://api.flickr.com/services/rest/" 

	function newPhoto(credentials, tag){

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
				items = json.photos;
			}
		});

	}

});
