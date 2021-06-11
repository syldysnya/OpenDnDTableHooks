class EditNullReservation < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reservations, :game_start, false
    change_column_null :reservations, :game_date, false

  end
end
