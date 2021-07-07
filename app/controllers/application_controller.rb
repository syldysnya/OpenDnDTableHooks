class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_player, :bubble_sort
    
    def current_player
        return nil unless session[:session_token]
        @current_player ||= Player.find_by(session_token: session[:session_token])
    end

    def login!(player)
        session[:session_token] = player.session_token
    end

    def logout! 
        current_player.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        
        !!current_player
    end

    def bubble_sort(array)
        sorted = false
        until sorted
        sorted = true
        
        array.each_with_index do |el, i|
            next if i + 1 == array.length
                j = i + 1
                gp1 = array[i]
                gp2 = array[j]

                total1 = gp1.reviews.pluck(:overall_rating)
                total1 = total1.sum / total1.length

                total2 = gp2.reviews.pluck(:overall_rating)
                total2 = total2.sum / total2.length

                if total1 < total2
                    sorted = false
                    array[i], array[j] = array[j], array[i]
                end
            end
        end

        array
    end

end
