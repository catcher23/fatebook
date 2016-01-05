class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :trackee_id, null: false
      t.integer :tracker_id, null: false

      t.timestamps
    end
    add_index :tracks, :trackee_id
    add_index :tracks, :tracker_id
    add_index :tracks, [:trackee_id, :tracker_id], unique: true
  end
end
