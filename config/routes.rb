Rails.application.routes.draw do
  get 'static_pages/index'

  get 'static_pages/create'

  root to: 'static_pages#root'

end
