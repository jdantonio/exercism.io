module Hamming
  class << self
    def compute(first, second)
      raise ArgumentError if first.length() != second.length()

      first.chars.zip(second.chars).reduce(0) do |diff, pair|
        pair.first == pair.last ? diff : diff + 1
      end
    end
  end
end

module BookKeeping
  VERSION = 3
end
