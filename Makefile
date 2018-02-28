.PHONY: server
server:
	npm run server	

.PHONY: client
client:
	npm run client	

.PHONY: all
all:
	npm run all	

.PHONY: clean-dist
clean-dist:
	rm dist/*	

.PHONY: seed
seed:
	node api/database/seed.js