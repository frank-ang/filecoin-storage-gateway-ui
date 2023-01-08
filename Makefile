SHELL=/bin/bash
.SILENT:

help:
	echo "Makefile for Filecoin Storage Gateway"

test:
	npm test

start: singularity_start www_start
	echo "starting npm, calling: npm start"
	npm start

stop: www_stop singularity_stop
	echo "stopping react..."
	pkill -f 'node.*react-scripts start' || true
	pkill -f 'node.*start.js' || true


singularity_start:
	singularity prep list >> /dev/null 2>&1 && echo "singularity already started" && exit 0 || echo "singularity not started."
	echo "starting Singularity..."
	nohup singularity daemon >> ./singularity.log.gitignore 2>&1 &

singularity_stop:
	echo "stopping singularity..."
	pkill -f 'node.*singularity' || true
	pkill -f '.*mongod-*' || true

www_start:
	if [[ "$${OSTYPE}" == 'darwin'* ]]; then \
		curl localhost:8081 >> /dev/null 2>&1 && echo "web server already started." && exit 0 || echo "web server not started."; \
		echo "starting nginx on MacOS..."; \
		nginx; \
	fi;

www_stop:
	echo "stopping web server..."
	nginx -s stop >> /dev/null  2>&1 || true

