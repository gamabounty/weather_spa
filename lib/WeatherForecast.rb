class WeatherForecast
  include HTTParty
  format :json
  base_uri 'api.wunderground.com'

  attr_accessor :maxtemp, :meantemp, :mintemp

  def initialize(response)
    @maxtemp = response['history']['dailysummary'][0]['maxtempm']
    @meantemp = response['history']['dailysummary'][0]['meantempm']
    @mintemp = response['history']['dailysummary'][0]['mintempm']
  end

  # this method uses httparty to make a get request on the Wunderground API
  def self.get_weather(date, city)
    response = get("/api/#{ENV["wunderground_key"]}/history_#{date}/q/France/#{city}.json")
    if response.success?
      new(response)
    else
      raise response.response
    end
  end
end