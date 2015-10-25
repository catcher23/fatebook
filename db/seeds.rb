
ActiveRecord::Base.transaction do
require 'ffaker'
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
      image_url: "http://flathash.com/" + (name),
      lat: olat,
      lng: olng,
      dlat: dlat,
      dlng: dlng
    }
    )

  end

  def range (max,min)
      rand * (max-min) + min
  end
end
