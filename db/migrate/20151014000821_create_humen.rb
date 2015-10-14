class CreateHumen < ActiveRecord::Migration
  def change
    create_table :humen do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :phone, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.string :screenname
      t.string :birthdate, null: false

      t.timestamps null: false
    end
  end
end
