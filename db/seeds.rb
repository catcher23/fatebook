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
    "3"=>{
      "fname"=>"Andres",
      "lname"=>"Iniesta",
      "email"=>"ainiesta@email.com",
      "birthdate"=>"11 May 1984",
      "address"=>"Calle Andres Iniesta, 2 Fuentealbilla (Albacete) 02260 Spain",
      "phone"=>"+29 19 62934322",
      "screenname"=>"AIniesta8",
    },
    "4"=>{
      "fname"=>"Sergio",
      "lname"=>"Aguero",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "5"=>{
      "fname"=>"Alexis",
      "lname"=>"Sanchez",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "6"=>{
      "fname"=>"Arturo",
      "lname"=>"Vidal",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "7"=>{
      "fname"=>"Lionel",
      "lname"=>"Messi",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "8"=>{
      "fname"=>"Carlos",
      "lname"=>"Tevez",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "9"=>{
      "fname"=>"Cristiano",
      "lname"=>"Ronaldo",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "10"=>{
      "fname"=>"Anthony",
      "lname"=>"Martial",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "11"=>{
      "fname"=>"Wayne",
      "lname"=>"Rooney",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
    },
    "12"=>{
      "fname"=>"Robert",
      "lname"=>"Lewandowski",
      "email"=>"arobben@email.com",
      "birthdate"=>"23 January 1984",
      "address"=>"Werner-Heisenberg-Allee 25, 80939 München, Germany",
      "phone"=>"+49 89 69931222",
      "screenname"=>"ARobben10",
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
