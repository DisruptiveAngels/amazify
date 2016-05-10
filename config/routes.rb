Rails.application.routes.draw do
  get 'log_in' => 'sessions#new', as: :log_in
  get 'log_out' => 'sessions#destroy', as: :log_out

  root 'articles#new'

  get 'articles/approved' => 'articles#approved', as: 'approved_articles'

  post 'articles/approve/:id' => 'articles#approve', as: 'approve_article'
  post 'articles/reject/:id' => 'articles#reject', as: 'reject_article'
  get 'articles/unauthorized' => 'articles#unauthorized', as: 'unauthorized'
  post 'sessions/' => 'sessions#create'

  resources :articles
  resources :categories
end
