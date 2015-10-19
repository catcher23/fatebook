class Human < ActiveRecord::Base
  validates :image_url, presence: true
  has_many :notes
  has_many :trackers, through: :tracks, source: :user
end
