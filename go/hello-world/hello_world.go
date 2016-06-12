package hello

import "fmt"

const testVersion = 2

func HelloWorld(friend string) string {
	if friend == "" {
		friend = "World"
	}

	return fmt.Sprintf("Hello, %v!", friend)
}
