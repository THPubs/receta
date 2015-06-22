# == Schema Information
#
# Table name: recipes
#
#  id           :integer          not null, primary key
#  name         :string
#  instructions :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Recipe < ActiveRecord::Base
end
