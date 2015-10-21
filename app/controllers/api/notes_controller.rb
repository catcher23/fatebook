class Api::NotesController < ApplicationController
  def create
    note = Note.new(note_params)
    humans = Human.all
    users = User.all
    if note.save
      render json: humans, include: :notes
    else
      render json: note, status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :human_id, :user_id, :username, :user_image_url)
  end
end
