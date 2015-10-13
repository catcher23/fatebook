Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get 'static_pages/index'

  get 'static_pages/create'

  root to: 'static_pages#root'

end
