package main

import (
	"fmt"
	src "github.com/tkuehn1/Studienarbeit_src"
	"time"
)

func main() {

	go src.Tcp_server()
	go src.Web_start()
	for {
		fmt.Println("test")
		time.Sleep(time.Second)
	}
	//src.Gpio()
}
