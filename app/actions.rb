# Homepage (Root path)
get '/' do
  erb :index
end

get '/flickr-creds' do
	content_type :json
	{
		auth_token: ENV['FLICKR_API_SECRET'],
		api_key: ENV['FLICKR_API_KEY'],
		api_sig: ENV['FLICKR_API_SIG']
	}.to_json
end