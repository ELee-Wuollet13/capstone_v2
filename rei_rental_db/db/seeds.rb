class Seed

  def self.begin
    seed = Seed.new
    seed.generate_wetsuits
  end

  def generate_wetsuits
    20.times do |i|
      wetsuit = Wetsuit.create!(
        brand: Faker::Name.first_name,
        size: Faker::Number.number(digits: 10),
        availability: Faker::Number.number(digits: 1)
      )
      puts "Wetsuit #{i}: Brand #{wetsuit.brand} size #{wetsuit.size} availability #{wetsuit.availability}."
    end
  end
end

Seed.begin
