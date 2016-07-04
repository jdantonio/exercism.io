-module(accumulate).

-export([
         accumulate/2
        ]).

accumulate(Fn, [Head|Tail]) ->
  [Fn(Head)] ++ accumulate(Fn, Tail);
accumulate(_Fn, []) ->
  [].
