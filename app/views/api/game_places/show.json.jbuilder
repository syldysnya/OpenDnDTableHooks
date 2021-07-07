json.partial! 'api/game_places/game_place', game_place: @game_place
json.pictureUrls @game_place.pictures.map { |file| url_for(file) }
json.photoUrl url_for(@game_place.photo)
serviceArr = @game_place.reviews.map { |rev| rev.service_rating }
campArr = @game_place.reviews.map { |rev| rev.campaign_rating }
orgArr = @game_place.reviews.map { |rev| rev.org_rating }
json.serv_rating serviceArr.sum
json.org_rating orgArr.sum
json.camp_rating campArr.sum
arr = @game_place.reviews.map { |rev| [rev.campaign_rating, rev.service_rating, rev.org_rating] }
sorted = arr.flatten.sort
obj = {}
sorted.each do |num|
    if obj[num]
        obj[num] += 1
    else 
        obj[num] = 1
    end
end
json.all_ratings_nums obj
json.all_length sorted.length
fav = @game_place.favorites.select { |fav| fav.player_id == current_player.id }
json.favorites fav[0]