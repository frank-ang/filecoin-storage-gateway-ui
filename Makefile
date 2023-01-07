SHELL=/bin/bash

help:
	@echo "Makefile for Filecoin Storage Gateway"

test:
	npm test

run: start_singularity
	npm run

singularity_curl:
	curl localhost:7001/preparations

singularity_start:
	@echo "checking singularity daemon status"
	singularity prep list >> /dev/null 2>&1 && echo "already started" && exit 1 || echo $$?
	@echo "singularity not started... starting up..."
	nohup singularity daemon >> ./singularity.log.gitignore 2>&1 &

singularity_stop:
	@echo "stopping singularity..."
	pkill -f 'node.*singularity' || true
	pkill -f '.*mongod-*' || true
