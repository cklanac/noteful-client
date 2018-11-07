# Noteful API as NPM Package POC

## Install and Setup

* Install:

`npm install noteful-api`

* Setup:
  * Create `/db` directory
  * In `/db` directory create a `data.json` (or `data.js`) file
  * Populate with data:

```json
[
  {
    "id": 1001,
    "title": "5 life lessons learned from cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 1002,
    "title": "What the government doesn't want you to know about cats",
    "content": "Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl."
  },

...

]
```

* Add NPM script to `package.json`

```json
"scripts": {
    "server": "node server.js",
    "api": "noteful-api"
  }
```

## Run API

* Run the command:

```sh
npm run api
```

* API will run on a PORT in the range 8080-8085