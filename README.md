# Perch

Perch is an open, collaborative and changing product to help online news readers feel in control of their information consumption, and to provide tools to help readers better assess news.

Currently the project displays trending news in the United States. Readers can view the descriptions of the news articles as well as follow links to view the full articles. Readers can also search for keywords and articles containing the keywords can be viewed.

To Do:
Add user accounts so that readers can bookmark articles, compare articles, or block certain topics.


![Perch Screenshot](PerchScreenshot.png)

### Installing

```
git clone https://github.com/how-i-can/news
cd news/server
npm install
npm install firebase

cd ../client
npm install
npm install -g nodemon
```

### Configuring

Go to https://newsapi.org and register for an API key. While one does exist in the .env file, it is strongly encouraged to have your own.

Create .env file within `server/` directory if doesn't exist

```
touch .env
```

Add NEWS API key in the .env file

```
NEWS_API_KEY=yourkey
```

### Launching

Start server using the CLI from the directory: `news/server`
```
cd ../server
npm start
```

Navigate to http://localhost:3000/ from a web browser to confirm the server is running. You should see {"message": "working"}.

Launch client using the CLI from the directory: `news/client`
```
cd ../client
npm start
```

A browser should load to http://localhost:4000/ where the news app will be loaded.


## Built With

- [Express](https://expressjs.com/en/starter/installing.html) - The web framework for Node.js
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [create-react-app](https://github.com/facebook/create-react-app) - Set up a modern web app by running one command.
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [News API](https://newsapi.org/) - News API is a simple HTTP REST API for searching and retrieving live articles from all over the web

## License

Licensed under the Apache License, Version 2.0 (the "License");
You may view a copy of the License at the [LICENSE.md](LICENSE.md) file

Copyright 2019 How I Can

## Acknowledgments
This project was built during a How I can cohort. Come check out [How I Can](http://howican.tech/)
for more details.

Please view our [Wiki](https://github.com/how-i-can/news/wiki) for documentation on the cohort and the AGILE-like process.


