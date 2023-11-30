package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	root := "/calistenia/"
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		r.URL.Path = root
		http.Redirect(w, r, r.URL.String(), http.StatusFound)
	})
	fs := http.StripPrefix(root, http.FileServer(http.Dir("./dist")))
	http.HandleFunc(root, func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Service-Worker-Allowed", root)
		fs.ServeHTTP(w, r)
	})
	log.Println("Listening on", os.Args[1])
	log.Fatal(http.ListenAndServe(os.Args[1], nil))
}
