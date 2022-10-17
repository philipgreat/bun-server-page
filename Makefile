all:
	ls
docker:
	docker build --no-cache -f docker/Dockerfile -t doublechaintech/bun  .
