class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user
    
    def current_user
        @current_user ||= Player.find_by(session_token: session[:session_token])
        return @current_user if @current_user
    end

    def login!(player)
        session[:session_token] = user.session_token
    end

    def logout! 
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

end
