package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	log.Println("Listening on", os.Args[1])
	log.Fatal(http.ListenAndServe(os.Args[1], nil))
}
