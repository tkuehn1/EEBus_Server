package main

import (
	"fmt"
	src "github.com/tkuehn1/Studienarbeit_src"
)

func main() {
	go src.Tcp_conn()

	src.Tcp_client()

	fmt.Println("hello")
}
