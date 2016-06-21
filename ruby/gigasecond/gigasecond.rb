require 'date'

module Gigasecond

  GIGASECOND = 10**9

  class << self
    def from(date)
      Time.at(date.to_time.to_i + GIGASECOND).utc
    end
  end
end

module BookKeeping
  VERSION = 3
end
