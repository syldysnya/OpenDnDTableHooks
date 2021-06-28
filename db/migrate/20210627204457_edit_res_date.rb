class EditResDate < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :res_year, :string, null: false
    add_column :reservations, :gmt, :string, null: false
  end
end
