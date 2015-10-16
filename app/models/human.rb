class Human < ActiveRecord::Base
  validates :image_url, presence: true
  has_many :notes
end
