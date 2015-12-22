Rails.application.routes.draw do
  resources :todos
  root to: 'top#index'
end
