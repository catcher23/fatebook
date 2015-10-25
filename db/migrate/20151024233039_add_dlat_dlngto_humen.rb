class AddDlatDlngtoHumen < ActiveRecord::Migration
  def change
    add_column :humen, :dlat, :float
    add_column :humen, :dlng, :float
  end
end
