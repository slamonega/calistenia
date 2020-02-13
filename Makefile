
all: build run

build:
	npm run build

run:
	go run server.go :8080

