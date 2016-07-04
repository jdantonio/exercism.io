% To run tests:
% erl -make
% erl -noshell -eval "eunit:test(leap, [verbose])" -s init stop
%

-module(leap_tests).

-include_lib("eunit/include/eunit.hrl").

leap_year_test() ->
  ?assert(leap:leap_year(1996)).

non_leap_year_test() ->
  ?assertNot(leap:leap_year(1997)).

century_test() ->
  ?assertNot(leap:leap_year(1900)).

fourth_century_test() ->
  ?assert(leap:leap_year(2400)).

% These tests were taken from the JavaScript version
% because I wanted more test cases.

is_not_very_common_test() ->
  ?assertNot(leap:leap_year(2015)).

is_introduced_every_4_years_to_adjust_about_a_day_test() ->
  ?assert(leap:leap_year(2016)).

is_skipped_every_100_years_to_remove_an_extra_day_test() ->
  ?assertNot(leap:leap_year(1900)).

is_reintroduced_every_400_years_to_adjust_another_day_test() ->
  ?assert(leap:leap_year(2000)).

is_not_a_leap_year_test() ->
  ?assertNot(leap:leap_year(1978)).

is_a_common_leap_year_test() ->
  ?assert(leap:leap_year(1992)).

is_skipped_every_100_years_test() ->
  ?assertNot(leap:leap_year(2100)).

is_reintroduced_every_400_years_test() ->
  ?assert(leap:leap_year(2400)).
