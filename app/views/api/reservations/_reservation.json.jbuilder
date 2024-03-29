json.extract! reservation, :id, :game_date, :game_start, :players_num, :dnd_campaign_id, :game_place_id,
                            :player_id, :confirmation_num, :add_info, :canceled, :plphone, :email, :res_year,
                            :gmt, :date_info
                            
json.gpAvatar url_for(reservation.game_place.avatar)
json.gpName reservation.game_place.name
json.reviews reservation.reviews
