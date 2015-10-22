class AddCoordsToHumans < ActiveRecord::Migration
  def change
    add_column :humen, :lat, :float
    add_column :humen, :lng, :float
  end
end
