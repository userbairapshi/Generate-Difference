install:
	npm ci

link:
	sudo npm link

publish:
	npm publish --dry-

gendiff:
	node bin/gendiff.js -h

compare:
	node bin/gendiff.js filePath1.json filePath2.json

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npm run test:coverage
