class EditResRes < ActiveRecord::Migration[5.2]
    def change
      add_column :reservations, :res_year, :string, null: false
      add_column :reservations, :gmt, :string, null: false
      change_column :reviews, :overall_rating, :float, null: false
    end
end
