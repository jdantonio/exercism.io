-module(accumulate).

-export([
         accumulate/2
        ]).

accumulate(Fn, Ls) ->
  accumulate(Fn, Ls, []).

accumulate(Fn, [Head|Tail], Accum) ->
  accumulate(Fn, Tail, [Fn(Head)] ++ Accum);
accumulate(_Fn, [], Accum) ->
  lists:reverse(Accum).
