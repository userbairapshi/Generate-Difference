publish:
	npm publish --dry-run

link:
	npm link

gendiff -h:
	node bin/gendiff.js -h

eslint:
	npx eslint .

test:
	npx jest