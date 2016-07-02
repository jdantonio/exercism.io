-module(hello_world).

-export([
         greet/0,
         greet/1
        ]).

greet() ->
  "Hello, World!".

% I've changed the test file to support this
% variation of the greet function.
greet("") ->
  greet();
greet(Name) ->
  "Hello, " ++ Name ++ "!".
