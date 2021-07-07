json.extract! game_place, :id, :name, :address, :phone_num, :latitude, :longitude, :open_hour, :close_hour, :description, :city_id, :dnd_campaign_id
json.avatarUrl url_for(game_place.avatar)
json.reviews game_place.reviews.length
json.reservations game_place.reservations.length
ratingArr = game_place.reviews.map { |rev| rev.overall_rating }

json.length_rat game_place.reviews.length
json.rating (ratingArr.sum).round(1)
