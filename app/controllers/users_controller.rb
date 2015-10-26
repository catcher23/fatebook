class UsersController < ApplicationController
  def new
    @user = User.new

    render :new
  end

  def create
    @user = User.new(user_params)
    @user.image_url = "http://www.robohash.com/#{@user.username}"
    if @user.save
      login(@user)
      redirect_to "/#/users/#{current_user.id}"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_session_url
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :session_token, :image_url)
  end
end
