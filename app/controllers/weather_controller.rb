require 'WeatherForecast'

class WeatherController < ActionController::Base
	protect_from_forgery with: :exception

	def get_weather
	  if params[:city] && params[:date]
	    @weather = WeatherForecast.get_weather(params[:date], params[:city])
	  else
	  	@weather = WeatherForecast.get_weather("20170601", "Paris")
	  end
	  render 'application/test'
	end
end