class AddColumnsToNote < ActiveRecord::Migration
  def change
    add_column :notes, :user_image_url, :string
    add_column :notes, :username, :string
  end
end
