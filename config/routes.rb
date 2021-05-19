Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :players, only: [:show, :create, :update]
    resources :cities, only: [:index, :show]
    resources :game_places, only: [:index, :show]
    resources :dnd_campaigns, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :update, :destroy]
    resources :favorites, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

end