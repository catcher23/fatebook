Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show]
    resources :human
  end

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

end
