class WetsuitsController < ApplicationController

  def index
    brand = params[:brand]
    @wetsuits = Wetsuit.search(brand)
    json_response(@wetsuits)
  end


  def show
    @wetsuit = Wetsuit.find(params[:id])
    json_response(@wetsuit)
  end

  def create
    @wetsuit = Wetsuit.create!(wetsuit_params)
    json_response(@wetsuit)
  end

  def update
    @wetsuit = Wetsuit.find(params[:id])
    if @wetsuit.update!(wetsuit_params)
      render status: 200, json: {
        message: "This wetsuit has been updated successfully."
      }
    end
  end

  def destroy
    @wetsuit = Wetsuit.find(params[:id])
    @wetsuit.destroy
  end

  private
  def json_response(object, status = :ok)
    render json: object, status: status
  end
  def wetsuit_params
    params.permit(:brand, :size, :availability)
  end
end
