json.extract! favorite, :id, :game_place_id, :player_id
json.game_place favorite.game_place
ratingArr = favorite.game_place.reviews.map { |rev| rev.overall_rating }
json.gp_avatar url_for(favorite.game_place.avatar)
json.gp_rating (ratingArr.sum).round(1)
json.gp_length_rat favorite.game_place.reviews.length
json.city favorite.game_place.city.name