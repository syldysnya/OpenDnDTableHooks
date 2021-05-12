class CreateDndCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :dnd_campaigns do |t|
      t.string :title, null: false
      t.string :adventure_type, null: false
      t.boolean :remote, null: false
      t.boolean :fifth_edition, null: false
      t.text :description, null: false
      t.integer :game_place_id, null: false

      t.index :title
      t.index :adventure_type
      t.index :game_place_id

      t.timestamps
    end
  end
end
