ActiveRecord::Base.transaction do
  human = {
    "1"=>{
      "name"=>"Arjen Robben",
    },
    "2"=>{
      "name"=>"Neo",
    },
  }
  human = human.map do |num, stats|
    if num.length == 1
      num = "00#{num}"
    elsif num.length == 2
      num = "0#{num}"
    end

    stats["image_url"] = "/assets/human_snaps/#{num}.jpg"
    stats
  end

end
