class CompanySerializer < ActiveModel::Serializer
  attributes :name, :products, :id, :likes

  def likes
    Like.where(company: object).count    
  end

  def products
    products = []
    p = Product.where(company: object)
    p.each {|p| products.push(p.name)}
    products
  end
end
