class EditReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :canceled, :boolean, null: false, default: false
  end
end
