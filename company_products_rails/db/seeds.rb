# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = Company.create(name: 'Apple')
s = Company.create(name: 'Samsung')
m = Company.create(name: 'Microsoft')

['ipod', 'macbook', 'iphone'].each do |prod|
  Product.create(name: prod, company: a)
end

['Galaxy', 'Speaker', 'Turntable'].each do |prod|
  Product.create(name: prod, company: s)
end
['Windows', 'PC', 'surface'].each do |prod|
  Product.create(name: prod, company: m)
end
