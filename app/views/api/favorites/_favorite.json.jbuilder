json.extract! favorite, :id, :game_place_id, :player_id
json.gamePlace favorite.game_place
json.gpAvatar url_for(favorite.game_place.avatar)
json.city favorite.game_place.city.name