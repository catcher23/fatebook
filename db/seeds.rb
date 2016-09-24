ActiveRecord::Base.transaction do
require 'ffaker'

User.create!(
 {
  username: 'danny',
  password: 'qwerty',
  image_url: "http://robohash.org/danny?bgset=any",
  title: 'Admin',
  division: 'Governance',
}
)

User.create!(
 {
  username: 'Guest',
  password: 'password',
  image_url: "http://robohash.org/Guest?bgset=any",
  title: 'Guest',
  division: 'Demonstration',
}
)

usernames = []
50.times do

  while true
    username = Faker::Lorem.word.capitalize
    if !usernames.include?(username)
      usernames << username
      break
    end
  end

if username.length > 14
  username = username.slice(0,14)
end

  User.create!(
   {
    username: username,
    password: 'password',
    image_url: "http://robohash.org/" + (username)+ '?bgset=any',
    title: Faker::Name.title,
    division: Faker::Company.buzzword.capitalize + ' Group',
  }
  )

end

  100.times do
    flag = true
    while flag == true
      flag = false
      fname = Faker::Name.first_name
      if fname.last == 'a' ||
        fname[-2..-1] == 'ie' ||
        fname.last == 'y' ||
        fname.last == 'e' ||
        fname.last == 'i' ||
        fname[-2..-1] == 'in' ||
        fname[-2..-1] == 'en' ||
        fname[-2..-1] == 'on' ||
        fname[-2..-1] == 'an' ||
        fname[-2..-1] == 'yn' ||
        fname[-2..-1] == 'ah' ||
        fname[-2..-1] == 'et' ||
        fname[-2..-1] == 'th'
        flag = true
      end
    end
    lname = Faker::Name.last_name
    if fname.length > 6
      fname = fname.slice(0,6)
    end
    if lname.length > 7
      lname = lname.slice(0,7)
    end
    name = fname + lname
    address = "#{Faker::Address.street_address}, #{Faker::Address.city}, #{Faker::Address.state}"
    def range (min, max)
      rand * (max-min) + min
    end
    olat = range(37.7, 37.782);
    olng = range(-122.5, -122.38);
    dlat = range(37.7, 37.782);
    dlng = range(-122.5, -122.38);
    Human.create!(
     {
      fname: fname,
      lname: lname,
      email: Faker::Internet.free_email(name),
      birthdate: Faker::Date.between(35200.days.ago, 10800.days.ago),
      address: address,
      phone: Faker::PhoneNumber.cell_phone,
      screenname: Faker::Internet.user_name(name),
      image_url: "http://flathash.com/" + (name) +'?bgset=any',
      lat: olat,
      lng: olng,
      dlat: dlat,
      dlng: dlng,
    }
    )

  end
4.times do
  User.all.each do |user|
    human = Human.all.sample
    if !user.trackees.include?(human)
      user.trackees <<  human
    end
  end
end
150.times do
human = Human.all.sample
user = User.all.sample
words = [Faker::Hacker.adjective, Faker::Hacker.noun, Faker::Hacker.verb, Faker::Hacker.ingverb]
words2 = [Faker::Hacker.adjective, Faker::Hacker.noun, Faker::Hacker.verb, Faker::Hacker.ingverb]
word = words.sample.capitalize
word2 = words2.sample

Note.create!(
 {
  title: "#{word} #{word2}",
  body: Faker::Hacker.say_something_smart.capitalize,
  human_id: human.id,
  user_id: user.id,
  user_image_url: user.image_url,
  human_image_url: human.image_url,
  fname: human.fname,
  lname: human.lname,
  username: user.username,
  created_at: Faker::Time.between(DateTime.now - 50, DateTime.now),
}
)


end

  50.times do
  human = Human.all.sample
  user = User.all.sample
  word = Faker::Company.buzzword
  word2 = Faker::Company.buzzword
    Note.create!(
     {
      title: "#{word} #{word2}",
      body: Faker::Company.bs,
      human_id: human.id,
      user_id: user.id,
      user_image_url: user.image_url,
      human_image_url: human.image_url,
      fname: human.fname,
      lname: human.lname,
      username: user.username
    }
    )
  end
  def range (max,min)
      rand * (max-min) + min
  end
end
