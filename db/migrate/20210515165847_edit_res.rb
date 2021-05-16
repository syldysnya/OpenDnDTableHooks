class EditRes < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :confirmation_num, :string, null: false
    add_column :reservations, :add_info, :text
  end
end
