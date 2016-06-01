Key:  a5ac61532aa44af79190f041787042b5 
secret:  b4a0eecf06ec544d 


Net::HTTP.get("http://flickr.com/api' params[:path])

CORS

JSONp

Proxy

dotenv

api_key: 'asd',
api_secret: "asdfdsf"


var credentials{
	
	api_key: null,
	api_secret: null
}


$.ajax({
	methid: get,
	url api-creds
	success: function(){
	credentials.api_key = data.api_key
	credentials.secret = data.api_secret
	}
});


get api-creds do
content_type :josn
{
	api_key: ENV['FLICKR_API_KEY'],
	api_secret: "ENV"
}.to_json