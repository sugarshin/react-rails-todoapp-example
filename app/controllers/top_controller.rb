class TopController < ApplicationController
  def index
    @todos = Todo.select(:id, :title, :completed, :created_at).all
  end
end
