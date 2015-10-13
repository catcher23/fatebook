class SessionsController < ApplicationController

  def create
      user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login(user)
      redirect_to root_url
    else
      flash[:errors] = ["Incorrect Credentials"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
