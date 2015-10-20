class Api::TracksController < ApplicationController
  def create
    track = Track.new(track_params)
    humans = Human.all
    users = User.all
    if track.save
      render json: humans, include: :trackers
    else
      render json: track, status: :unprocessable_entity
    end
  end

  private

  def track_params
    params.require(:track).permit(:tracker_id, :trackee_id)
  end
end
