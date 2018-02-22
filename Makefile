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

.PHONY: migration
migration:
	@while [ -z "$$MIGRATION_NAME" ]; do \
		read -r -p "Enter Migration Name: " MIGRATION_NAME; \
	done ; \
	 npx knex migrate:make "$$MIGRATION_NAME"

.PHONY: seed
seed:
	node api/database/seed.js