class CompaniesController < ApplicationController

  def index
    respond_to do |format|
      format.html { render @companies }
      format.json {render json: @companies}
    end
  end
end
