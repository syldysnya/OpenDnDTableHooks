class City < ApplicationRecord 

    validates :name, presence: true
    validates :state, presence: true, uniqueness: true
    
end