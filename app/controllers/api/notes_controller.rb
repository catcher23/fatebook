class Api::NotesController < ApplicationController
  def create
    note = Note.new(note_params)
    humans = Human.includes(:notes).all
    users = User.includes(:notes).all
    if note.save
      render json: users, include: :notes
      render json: humans, include: :notes
    else
      render json: note, status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.require(:note).permit(:human_image_url, :fname, :lname, :title, :body, :human_id, :user_id, :username, :user_image_url, :created_at)
  end
end
