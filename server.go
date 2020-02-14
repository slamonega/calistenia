package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("."))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Service-Worker-Allowed", "/")
		fs.ServeHTTP(w, r)
	})
	log.Println("Listening on", os.Args[1])
	log.Fatal(http.ListenAndServe(os.Args[1], nil))
}
