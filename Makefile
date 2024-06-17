install:
	npm ci

link:
	sudo npm link

publish:
	npm publish --dry-

gendiff:
	node bin/gendiff -h

json:
	node bin/gendiff __fixtured__/filePath1.json __fixtured__/filePath2.json

yaml:
	node bin/gendiff __fixtured__/filePath1.yaml __fixtured__/filePath2.yaml

compare:
	node bin/gendiff __fixtured__/filePath3.json __fixtured__/filePath4.json

nested:
	node bin/gendiff __fixtured__/filePath3.yaml __fixtured__/filePath4.yaml

plain:
	node bin/gendiff --format plain __fixtured__/filePath3.json __fixtured__/filePath4.json

format:
	node bin/gendiff --format json __fixtured__/filePath3.json __fixtured__/filePath4.json

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npm run test:coverage
