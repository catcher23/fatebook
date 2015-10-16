class Api::NotesController < ApplicationController
  def create
    note = Note.new(note_params)
    human = Human.find(note.human_id)

    if note.save
      render json: human, include: :notes
    else
      render json: note, status: :unprocessable_entity
    end
  end
  
  private

  def note_params
    params.require(:note).permit(:title, :body, :human_id, :user_id)
  end
end
