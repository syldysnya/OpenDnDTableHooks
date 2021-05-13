class GamePlace < ApplicationRecord

    validates :name, 
            :open_hour,
            :close_hour,
            :address,
            :phone_num,
            :latitude,
            :longitude,
            :description,
            presence: true

    has_many :dnd_campaigns
    has_many :reservations
    has_many :favorites

    belongs_to :city

end