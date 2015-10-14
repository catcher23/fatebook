ActiveRecord::Base.transaction do
  human = {
    "1"=>{
      "fname"=>"Arjen",
      "lname"=>"Robben",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "2"=>{
      "fname"=>"Thomas",
      "lname"=>"Anderson",
      "email"=>"tanderson@email.com",
      "birthdate"=>"13 September 1971",
      "address"=>"Capital City USA",
      "phone"=>"20 39 20312044",
      "screenname"=>"NeoAnderson",
    },
  }
  human = human.map do |num, stats|
    if num.length == 1
      num = "00#{num}"
    elsif num.length == 2
      num = "0#{num}"
    end

    stats["image_url"] = "/assets/profile_pics/#{num}.png"
    stats
  end

    Human.create!(human.shuffle)

end
