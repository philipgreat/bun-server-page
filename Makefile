all:
	ls
build:
	bun bun src/comp.js 
docker:
	docker build --no-cache -f docker/Dockerfile -t doublechaintech/general-report-saas  .
rundocker:
	docker run -d --name general-report-saas -p 3000:3000 doublechaintech/general-report-saas
run:
	bun run nodemon
dist:
	bun build --compile --target=bun-linux-x64-modern src/pages/index.js --outfile ~/Downloads/lfs-filling-report-service
