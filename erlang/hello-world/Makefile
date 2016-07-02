# https://pdincau.wordpress.com/2010/12/20/how-to-manage-your-erlang-software-with-a-simple-makefile/
# http://stackoverflow.com/questions/18136918/how-to-get-current-relative-directory-of-your-makefile
# http://stackoverflow.com/questions/2057689/how-make-app-knows-default-target-to-build-if-no-target-is-specified

SRC=hello_world
.DEFAULT_GOAL := all
ERL=/usr/local/bin/erl

clean:
	@ rm -rf *.beam ;
	@ rm -rf erl_crush.dump

compile:
	@ $(ERL) -make

test: compile
	@ $(ERL) -noshell -eval "eunit:test($(SRC), [verbose])" -s init stop

all: clean compile test
