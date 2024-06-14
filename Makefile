install:
	npm ci

link:
	sudo npm link

publish:
	npm publish --dry-

gendiff:
	node bin/gendiff.js -h

json:
	node bin/gendiff.js __fixtured__/filePath1.json __fixtured__/filePath2.json

yaml:
	node bin/gendiff.js __fixtured__/filePath1.yaml __fixtured__/filePath2.yaml

compare:
	node bin/gendiff.js __fixtured__/filePath3.json __fixtured__/filePath4.json

nested:
	node bin/gendiff.js __fixtured__/filePath3.yaml __fixtured__/filePath4.yaml

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npm run test:coverage
