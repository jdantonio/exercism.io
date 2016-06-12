class HelloWorld
  class << self
    def hello(friend = 'World')
      "Hello, #{friend}!"
    end
  end
end
