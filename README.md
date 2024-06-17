### Hexlet tests and linter status:
[![Actions Status](https://github.com/userbairapshi/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/userbairapshi/frontend-project-46/actions) [![CI](https://github.com/userbairapshi/frontend-project-46/actions/workflows/eslnt-test-check.yml/badge.svg)](https://github.com/userbairapshi/frontend-project-46/actions/workflows/eslnt-test-check.yml) [![Test Coverage](https://api.codeclimate.com/v1/badges/daf44fed5c00cdacf56f/test_coverage)](https://codeclimate.com/github/userbairapshi/frontend-project-46/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/daf44fed5c00cdacf56f/maintainability)](https://codeclimate.com/github/userbairapshi/frontend-project-46/maintainability)

# Вычислитель отличий / Generate Difference

Проект "Вычислитель Отличий" — это утилита командной строки, предназначенная для поиска различий в конфигурационных файлах. Программа анализирует два файла и выводит отличия между ними в удобном для восприятия виде. Поддерживаемые форматы файлов включают JSON, Stylish и Plain.

## Основные особенности:

Поддержка различных форматов: Утилита может сравнивать файлы в форматах JSON, YAML.
Генерация отчетов в нескольких форматах: Результаты сравнения могут быть представлены в виде "stylish" (по умолчанию), "plain" и "json".

## Работа с документацией.

- [commander](https://www.npmjs.com/package/commander)
- [lodash](https://lodash.com)
- [jest](https://jestjs.io/ru/)
- [js-yaml](https://www.npmjs.com/package/js-yaml)


## Визуализация процесса: 

Аскинемы демонстрируют работу утилиты в реальном времени, позволяя пользователю наглядно увидеть процесс сравнения и результаты.


# Аскинемы:
- Аскинемы — это записи сессий терминала, которые демонстрируют использование программы в динамике. В данном проекте аскинемы показывают, как утилита обрабатывает файлы различных форматов и выводит результаты в выбранном формате отчета.

## Пример использования:

gendiff -h

[![asciicast](https://asciinema.org/a/WrS2oANiXgdcwuGyOp4ufybrP.svg)](https://asciinema.org/a/WrS2oANiXgdcwuGyOp4ufybrP)

gendiff __fixtured__/filePath1.json __fixtured__/filePath2.json

[![asciicast](https://asciinema.org/a/sSz28AvCkLpuoFZxzriDe01uD.svg)](https://asciinema.org/a/sSz28AvCkLpuoFZxzriDe01uD)

gendiff __fixtured__/filePath1.yaml __fixtured__/filePath2.yaml

[![asciicast](https://asciinema.org/a/RA37E4jyODFxrzjnM6vijkMdc.svg)](https://asciinema.org/a/RA37E4jyODFxrzjnM6vijkMdc)

gendiff __fixtured__/filePath3.json __fixtured__/filePath4.json

[![asciicast](https://asciinema.org/a/nr2Pan68zXLqwC3MuuUVErJlz.svg)](https://asciinema.org/a/nr2Pan68zXLqwC3MuuUVErJlz)

gendiff __fixtured__/filePath3.yaml __fixtured__/filePath4.yaml

[![asciicast](https://asciinema.org/a/OLxD8j4TK6S1ymPiOG9Svmbo2.svg)](https://asciinema.org/a/OLxD8j4TK6S1ymPiOG9Svmbo2)

gendiff --format plain __fixtured__/filePath3.json __fixtured__/filePath4.json

[![asciicast](https://asciinema.org/a/6UYYnCE4Z2c9bTqs5STOwMPru.svg)](https://asciinema.org/a/6UYYnCE4Z2c9bTqs5STOwMPru)

gendiff --format json __fixtured__/filePath3.json __fixtured__/filePath4.json

[![asciicast](https://asciinema.org/a/ChEKxlVFaKN5TFQH3hRQvcWKy.svg)](https://asciinema.org/a/ChEKxlVFaKN5TFQH3hRQvcWKy)

## Выводы:
Проект "Вычислитель Отличий" представляет собой мощный инструмент для разработчиков и системных администраторов, позволяющий эффективно находить и анализировать изменения в конфигурационных файлах. Интуитивно понятный интерфейс и возможность визуализации делают его незаменимым помощником в работе с конфигурациями.