gendiff:
	node bin/gendiff.js -h

compare:
	node bin/gendiff.js filePath1.json filePath2.json

lint:
	npx eslint .

test:
	npx jest
