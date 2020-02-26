package main

import src "github.com/tkuehn1/Studienarbeit_src"

func main() {
	go src.Tcp_server()
	go src.Web_start()
	//src.Gpio()
}
