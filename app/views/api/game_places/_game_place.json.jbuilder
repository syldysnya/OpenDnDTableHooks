json.extract! game_place, :id, :name, :address, :phone_num, :latitude, :longitude, :open_hour, :close_hour, :description, :city_id, :dnd_campaign_id
json.photoUrl url_for(game_place.photo)
json.avatarUrl url_for(game_place.avatar)
json.pictureUrls game_place.pictures.map { |file| url_for(file) }
