class Api::GamePlacesController < ApplicationController

    def index
        if filter_params
            @game_places = GamePlace.all

            if filter_params[:location]
                @game_places = GamePlace.where(:city_id => filter_params[:location])
            end

            if filter_params[:name]
                names = GamePlace.pluck(:name).select {|gp| gp.downcase.include?(filter_params[:name])}
                cities = City.pluck(:name).select {|gp| gp.downcase.include?(filter_params[:name].downcase)}
                
                if names.length > 0 
                    @game_places = @game_places.where("lower(name) LIKE lower(?)", "%#{filter_params[:name]}%")
                end

                if cities.length > 0
                    game_places = []
                    @game_places = @game_places.each do |gp|
                        cities.each do |city|
                            if gp.city.name == city
                                game_places << gp
                            end
                        end
                    end
                    @game_places = game_places
                end

            end

            if filter_params[:rating] > '0'
                game_places = []

                @game_places.each do |gp|
                    rat_reviews = gp.reviews.pluck(:overall_rating)
                    avg = rat_reviews.sum / rat_reviews.length
                    if avg >= filter_params[:rating].to_i
                        game_places << gp
                    end
                end

                @game_places = game_places
            end

        else
            @game_places = GamePlace.all.limit(15)
        end
    end 

    def rating

        game_places = []

        if current_player
            GamePlace.joins(:reviews).each { |gp| game_places << gp if gp.city.area == current_player.city.area}
        else
            game_places = GamePlace.joins(:reviews)
        end
        
        @game_places = game_places.each_with_index do |gp1, i|
            return gp1 if i == game_places.length 
            gp2 = game_places[i + 1]
            total1 = gp1.reviews.pluck(:overall_rating)
            total1 = total1.sum / total1.length

            total2 = gp2.reviews.pluck(:overall_rating)
            total2 = total2.sum / total2.length

            if total1 < total2
                game_places
            end
        end

        @game_places = @game_places[0..14]
        
        # if current_player
        #     @game_places = GamePlace.where(city_id: current_player.city_id).sort { |gp1, gp2| gp1.reviews.average(:overall_rating) <=> gp2.reviews.average(:overall_rating) }
        # else
        #     @game_places = GamePlace.all.sort { |gp1, gp2| gp1.reviews.average(:overall_rating) <=> gp2.reviews.average(:overall_rating) }
        # end
    end

    def default
        @game_places = []
        
        if current_player
            GamePlace.all.limit(15).each { |gp| @game_places << gp if gp.city.area == current_player.city.area}
        else
            @game_places = GamePlace.all.limit(15)
        end
    end

    def show
        @game_place = GamePlace.find(params[:id])
    end

    def filter_params
        if (params[:filter])
            params.require(:filter).permit(:rating, :name, :location => [])
        end
    end

end
