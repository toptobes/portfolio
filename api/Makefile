TAG ?= portfolio-api

.PHONY: image
image: 
	stack build
	cp -r $(shell stack path --local-install-root)/bin ./app-exe-bin
	docker build -t $(TAG) .
	rm -rf ./app-exe-bin
