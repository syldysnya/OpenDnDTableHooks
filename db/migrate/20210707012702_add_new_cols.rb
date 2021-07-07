class AddNewCols < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :area, :string, null: false
    add_column :reservations, :date_info, :datetime, null: false
  end
end
