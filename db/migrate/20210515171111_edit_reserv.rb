class EditReserv < ActiveRecord::Migration[5.2]
  def change
    change_column :reservations, :game_date, :string, null: false
    change_column :reservations, :game_start, :string, null: false
  end
end
