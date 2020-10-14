
all: build run

build:
	npm run build

run: server
	./server :8080

server: server.go
	go build -o server server.go

publish:
	@echo "Cleaning up..."
	rm -rf public dist
	git worktree prune
	rm -rf .git/worktrees/public
	@echo "Checking out gh-pages branch and rebuilding..."
	git worktree add -B gh-pages public origin/gh-pages
	rm -rf public/*
	ln -s public dist
	npm run build
	@echo "Committing to gh-pages branch..."
	cd public && git add -A && git commit -m "Release to gh-pages"
