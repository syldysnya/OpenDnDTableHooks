# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_07_182451) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "state", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "area", null: false
    t.index ["area"], name: "index_cities_on_area"
    t.index ["name"], name: "index_cities_on_name"
  end

  create_table "dnd_campaigns", force: :cascade do |t|
    t.string "title", null: false
    t.string "adventure_type", null: false
    t.boolean "remote", null: false
    t.boolean "fifth_edition", null: false
    t.text "description", null: false
    t.integer "game_place_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_type"], name: "index_dnd_campaigns_on_adventure_type"
    t.index ["game_place_id"], name: "index_dnd_campaigns_on_game_place_id"
    t.index ["title"], name: "index_dnd_campaigns_on_title"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "game_place_id", null: false
    t.integer "player_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_place_id", "player_id"], name: "index_favorites_on_game_place_id_and_player_id", unique: true
    t.index ["game_place_id"], name: "index_favorites_on_game_place_id"
    t.index ["player_id"], name: "index_favorites_on_player_id"
  end

  create_table "game_places", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "phone_num", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "open_hour", null: false
    t.string "close_hour", null: false
    t.string "gmt", null: false
    t.string "wedsite"
    t.text "description", null: false
    t.integer "city_id", null: false
    t.integer "dnd_campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_game_places_on_city_id"
    t.index ["dnd_campaign_id"], name: "index_game_places_on_dnd_campaign_id"
    t.index ["name"], name: "index_game_places_on_name"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "url", null: false
    t.integer "game_place_id"
    t.index ["game_place_id"], name: "index_pictures_on_game_place_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "city_id"
    t.string "dname"
    t.string "phone"
    t.index ["city_id"], name: "index_players_on_city_id"
    t.index ["email"], name: "index_players_on_email", unique: true
    t.index ["session_token"], name: "index_players_on_session_token", unique: true
  end

  create_table "reservations", force: :cascade do |t|
    t.string "game_date", null: false
    t.string "game_start", null: false
    t.integer "players_num", null: false
    t.integer "game_place_id", null: false
    t.integer "player_id", null: false
    t.integer "dnd_campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "confirmation_num", null: false
    t.text "add_info"
    t.boolean "canceled", default: false, null: false
    t.string "plphone"
    t.string "email"
    t.string "res_year", null: false
    t.string "gmt", null: false
    t.datetime "date_info", null: false
    t.index ["dnd_campaign_id"], name: "index_reservations_on_dnd_campaign_id"
    t.index ["game_place_id"], name: "index_reservations_on_game_place_id"
    t.index ["player_id"], name: "index_reservations_on_player_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "description", null: false
    t.integer "campaign_rating", null: false
    t.integer "service_rating", null: false
    t.integer "org_rating", null: false
    t.float "overall_rating", null: false
    t.integer "dnd_campaign_id"
    t.integer "game_place_id", null: false
    t.integer "player_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "reservation_id", null: false
    t.index ["campaign_rating"], name: "index_reviews_on_campaign_rating"
    t.index ["dnd_campaign_id"], name: "index_reviews_on_dnd_campaign_id"
    t.index ["game_place_id"], name: "index_reviews_on_game_place_id"
    t.index ["org_rating"], name: "index_reviews_on_org_rating"
    t.index ["overall_rating"], name: "index_reviews_on_overall_rating"
    t.index ["player_id"], name: "index_reviews_on_player_id"
    t.index ["reservation_id", "player_id"], name: "index_reviews_on_reservation_id_and_player_id", unique: true
    t.index ["service_rating"], name: "index_reviews_on_service_rating"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
