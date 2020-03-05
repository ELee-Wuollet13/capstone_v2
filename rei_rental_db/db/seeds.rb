class Seed

  def self.begin
    seed = Seed.new
    seed.generate_wetsuits
  end

  def generate_wetsuits
    20.times do |i|
      wetsuit = Wetsuit.create!(
        brand: Faker::FunnyName.name,
        size: Faker::Number.number(digits: 10)
      )
      puts "Wetsuit #{i}: Author is #{wetsuit.brand} and quotation is '#{wetsuit.size}'."
    end
  end
end

Seed.begin
