# CRUD of Projects and Related Tasks :clipboard:

[![code style](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> API Rest that allow make CRUD operations about Projects and its related Tasks.

This application was made with [Node.js][], [Express.js][] and [Sequelize][]. It is designed to work with [PostgreSQL] databases.

## Table of Contents

- [Installation](#installation)
- [Config](#config)
- [Usage](#usage)
  - [Run a local server](#run-a-local-server)

## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Clone the repository:

```bash
git clone https://github.com/santiagorodriguez24/url-shortener.git
```

Install dependencies:

```sh
npm install
```

### Create database

You can find the SQL commands that I use to create and fill the database with initial data into the `db.sql` file found in the `src/sql/` sub-directory.

## Config

Put your database values into the `config.js` file found in the `src/config/` sub-directory.

**config.js:**

```js
export const dbconfig = {
    host: 'localhost',
    user: 'your-db-user',
    password: 'your-password',
    database: 'projects_tasks',
    port: 'your-port'
}
```

## Usage

### Run a local server

Since this code is implemented using ES6 syntax we use Babel to translate it to ES5 code. Babel takes a js file, converts the code in it, and outputs into a new file..

In order to get The built version of this project run on root directory the next command: 

```bash
npm run build
```

Then start the project: 

```bash
npm start
```
