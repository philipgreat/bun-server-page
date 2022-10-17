all:
	ls
build:
	bun bun src/comp.js 
docker:
	docker build --no-cache -f docker/Dockerfile -t doublechaintech/bun  .
