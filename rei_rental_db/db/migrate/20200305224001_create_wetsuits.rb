class CreateWetsuits < ActiveRecord::Migration[5.2]
  def change
    create_table :wetsuits do |t|
      t.column :brand, :string
      t.column :size, :string 
    end
  end
end
