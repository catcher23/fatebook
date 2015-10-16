class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title,      null: false
      t.text :body,         null: false
      t.integer :human_id
      t.integer :user_id

      t.timestamps null: false
    end
    add_index :notes, [:human_id]
  end
end
