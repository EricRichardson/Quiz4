class CompanySerializer < ActiveModel::Serializer
  attributes :name, :products

  has_many :products
end
