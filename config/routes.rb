Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'
  get '/weather/:date/:city', to: 'weather#get_weather'
  get '/conditions/:city', to: 'weather#get_current'
end
