env https_proxy=http://192.168.2.250:1087 git pull
docker build --no-cache -f docker/Dockerfile -t doublechaintech/general-report-saas  .
docker rm -f general-report-saas
docker run -d --name general-report-saas -p 3000:3000 doublechaintech/general-report-saas



