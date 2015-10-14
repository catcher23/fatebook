class AddImgUrlToHumen < ActiveRecord::Migration
  def change
      add_column :humen, :image_url, :string
  end
end
