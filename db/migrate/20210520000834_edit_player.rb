class EditPlayer < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :dname, :string
    add_column :reservations, :plphone, :string
    add_column :reservations, :email, :string
  end
end
