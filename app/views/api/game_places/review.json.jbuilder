json.default(@game_places[0..14]) do |gp|
    json.partial! 'api/game_places/game_place', game_place: gp
end