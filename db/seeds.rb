ActiveRecord::Base.transaction do
  human = {
    "1"=>{
      "fname"=>"Arjen Robben",
      "lname"=>"Arjen Robben",
      "email"=>"Arjen Robben",
      "birthdate"=>"Arjen Robben",
      "address"=>"Arjen Robben",
      "phone"=>"Arjen Robben",
      "screenname"=>"Arjen Robben",
    },
    "2"=>{
      "fname"=>"Neo",
      "lname"=>"Neo",
      "email"=>"Neo",
      "birthdate"=>"Neo",
      "address"=>"Neo",
      "phone"=>"Neo",
      "screenname"=>"Neo",
    },
  }
  human = human.map do |num, stats|
    if num.length == 1
      num = "00#{num}"
    elsif num.length == 2
      num = "0#{num}"
    end

    stats["image_url"] = "/assets/profile_pics/#{num}.jpg"
    stats
  end

    Human.create!(human.shuffle)

end
