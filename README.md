# bun-server-page



Reference

https://github.com/Bunland/bun-js-render-html/blob/main/server.js


## PDF解决方案解决Linux字体问题


### 找到字体

https://github.com/dolbydu/font

root@lenovo-server:/usr/share/fonts/unicode# cp /home/philip/pdf-test/font/unicode/*  ./

chmod 755 *.*


tM9U4ffA

### 设置到容器


 docker run -rm --name wkhtmltopdf-aas -d  -v /usr/share/fonts:/usr/share/fonts  -p 6606:80 openlabs/docker-wkhtmltopdf-aas


### 测试

curl -X POST -vv -F 'file=@sample.html' http://localhost:6606/ -o  ~/resin-3.1.16/webapps/ROOT/test-file.pdf

https://demo2.doublechaintech.com/test-file.pdf

