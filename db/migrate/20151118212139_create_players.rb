class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.integer :score

      t.timestamps null: false
    end
  end
end
