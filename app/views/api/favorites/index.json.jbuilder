
@favorites.each do |favorite|
    json.set! favorite.id do 
        json.extract! favorite, :game_place_id, :player_id
    end
end