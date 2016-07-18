class LikesController < ApplicationController

  def create
    like = Like.new(company_id: params[:company_id])
    if like.save
      head :ok
    else
      head "500"
    end
  end
end
