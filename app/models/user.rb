class User < ActiveRecord::Base
  after_initialize :ensure_token
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 5, allow_nil: true}
  has_many :notes
  has_many(
  :tracks,
  foreign_key: :tracker_id,
  class_name: "Track"
  )

  has_many :trackees, through: :tracks, source: :trackee

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
