class Api::HumansController < ApplicationController
  def create
    @human = Human.new(human_params)

    if @human.save
      render :show
    else
      render json: @human.errors.full_messages, status: 422
    end
  end

  def destroy
    @human = Human.find(params[:id])
    @human.destroy
    render :show
  end

  def index
    @human = Human.all
  end

  def show
    @human = Human.find(params[:id])
  end

  private

  def human_params
    params.require(:human).permit(
      :id, :fname, :lname, :email, :birthdate, :address, :phone, :screenname, :image_url
    )
  end
end
