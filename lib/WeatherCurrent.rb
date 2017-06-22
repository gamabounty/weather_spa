class WeatherCurrent
  include HTTParty
  format :json
  base_uri 'api.wunderground.com'

  attr_accessor :temp, :logo

  def initialize(response)
    @temp = response['current_observation']['temp_c']
    @logo = response['current_observation']['icon_url']
  end

  # this method uses httparty to make a get request on the Wunderground API
  def self.get_current(city)
    response = get("/api/#{ENV["wunderground_key"]}/conditions/q/France/#{city}.json")
    if response.success?
      new(response)
    else
      raise response.response
    end
  end
end