Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show]
    resources :humans
    resources :notes, only: [:create]
  end

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

end
