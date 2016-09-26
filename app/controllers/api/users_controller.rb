class Api::UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    @user.image_url = "http://www.robohash.org/#{@user.username}"
    if @user.save
      login(@user)
      redirect_to "/#/users/#{current_user.id}"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_session_url
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :session_token, :image_url, :title, :division)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :show
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(
      :id, :username
    )
  end
end
