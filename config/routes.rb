Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :players, only: [:show, :create, :update]
    resources :cities, only: [:index, :show]
    resources :game_places, only: [:index, :show]
    post '/game_places/default', to: '/api/game_places#default', as: 'game_places_default'
    post '/game_places/rating', to: '/api/game_places#rating', as: 'game_places_rating'
    post '/game_places/newest', to: '/api/game_places#newest', as: 'game_places_mewest'
    post '/game_places/review', to: '/api/game_places#review', as: 'game_places_review'
    resources :dnd_campaigns, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :update, :destroy]
    resources :favorites, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy] 
  end

end