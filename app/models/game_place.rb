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
    has_many :reviews

    has_one_attached :photo
    has_one_attached :avatar
    has_many_attached :pictures


    belongs_to :city

end