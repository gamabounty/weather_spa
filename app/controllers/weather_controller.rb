require 'WeatherForecast'
require 'WeatherCurrent'

class WeatherController < ActionController::Base
	protect_from_forgery with: :exception

	# This controller uses the getweather method from my WeatherForecast class with the two parameters in the route URL
	def get_weather
	  if params[:city] && params[:date]
	    @weather = WeatherForecast.get_weather(params[:date], params[:city])
	  else
	  	# if the parameters are not defined, a default result is return
	  	@weather = WeatherForecast.get_weather("20170101", "Paris")
	  end
	  # render 'application/test'
	  render json: @weather
	end

	def get_current
	  if params[:city]
	  	@current = WeatherCurrent.get_current(params[:city])
	  else
	  	@current = WeatherCurrent.get_current("Paris")
	  end
	  render json: @current
	end

end