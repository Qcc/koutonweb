npm i pm2 -g
npm i pm2-windows-service -g
安装服务：pm2-service-install -n myservice （安装后在windows服务中多了一个myservice的服务）##卸载pm2-service-uninstall
 设置环境变量：PM2_SERVICE_SCRIPTS = PM2的配置文件
 windows服务中重新启动myservice服务