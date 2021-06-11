class EditCity < ActiveRecord::Migration[5.2]
  def change
    remove_index :cities, :state
    add_index :cities, :state
  end
end
