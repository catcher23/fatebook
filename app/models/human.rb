class Human < ActiveRecord::Base
  validates :image_url, presence: true
end
