SRC=leap
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
