class AddHumanNametoNotes < ActiveRecord::Migration
  def change
    add_column :notes, :fname, :string
    add_column :notes, :lname, :string
    add_column :notes, :human_image_url, :string
  end
end
