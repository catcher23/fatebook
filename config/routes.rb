Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show, :index]
    resources :humans, only: [:show, :index]
    resources :notes, only: [:create, :update, :destroy, :show]
    resources :tracks, only: [:create, :destroy]
  end
    resource  :session, only: [:new, :create, :destroy]
end
