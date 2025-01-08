# MERN Stack Template

### 1. Install dependencies:

Go to the `server` folder, and run `install`.

```
cd ./server
npm i
```

Go to the `client` folder, and run `install`.

```
cd ./client
npm i
```

### 2. Prepare MongoDB:

Prepare your MongoDB database (using [Atlas](https://www.mongodb.com/cloud/atlas),
or [Community](<https://github.com/benelferink/mern-template/wiki/Install-MongoDB-Community-Server-(MacOS)>)). Then configure your database within `server/src/constants/index.js` (or `server/src/.env`), by configuring the `MONGO_URI` variable.

### 3. Start applications:

Go to the `server` folder, and run `dev`.

```
cd ./server
npm run dev
```

Go to the `client` folder, and run `dev`.

```
cd ./client
npm run dev
```

