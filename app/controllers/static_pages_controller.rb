class StaticPagesController < ApplicationController
  before_action :require_user
  def root
    if logged_in?
      logout
    end
  end
end
