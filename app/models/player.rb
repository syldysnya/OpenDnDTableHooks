class Player < ApplicationRecord

    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 8 }, allow_nil: true

    belongs_to :city

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        
        player = Player.find_by(email: email)
        return nil unless player
        player.is_password?(password) ? player : nil
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= Player.generate_session_token
    end

    def reset_session_token!
        self.session_token = Player.generate_session_token
        self.save
        self.session_token
    end

end