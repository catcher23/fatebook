class AddTitletoUsers < ActiveRecord::Migration
  def change
      add_column :users, :title, :string
      add_column :users, :division, :string
      
  end
end
