SHELL=/bin/bash
.SILENT:

help:
	@echo "Makefile for Filecoin Storage Gateway"

test:
	@npm test

start: singularity_start www_start
	@npm start

stop: www_stop singularity_stop
	@echo "stopping react..."
	@pkill -f 'node.*react-scripts start' || true
	@pkill -f 'node.*start.js' || true


singularity_start:
	@singularity prep list >> /dev/null 2>&1 && echo "Singularity already started" && exit 0 || echo "Singularity not started."
	@echo "Starting Singularity..."
	nohup singularity daemon >> ./singularity.log.gitignore 2>&1 &

singularity_stop:
	@echo "stopping singularity..."
	pkill -f 'node.*singularity' || true
	pkill -f '.*mongod-*' || true

www_start:
	if [[ "$${OSTYPE}" == 'darwin'* ]]; then \
		curl localhost:8081 >> /dev/null 2>&1 && echo "Web server already started." && exit 0 || echo "Web server not started."; \
		echo "Starting nginx on MacOS..."; \
		nginx; \
	fi;

www_stop:
	@nginx -s stop || true

