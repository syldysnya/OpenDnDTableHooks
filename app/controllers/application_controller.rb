class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_player
    
    def current_player
        @current_player ||= Player.find_by(session_token: session[:session_token])
        return @current_player if @current_player
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

end
