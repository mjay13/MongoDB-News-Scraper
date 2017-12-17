# News Article Scraper

### Overview
This is a web app that lets users view and leave comments on the latest news utelizing MongoDB. It uses mongoose and cheerio npm packages to scrape the news from other sites.

- - -

### Deployment
This application is deployed to Heroku, view [here] (google.com). 

- - -

### Functionality
Whenever a user visits the site, the app scrapes stories from a news outlset and displays them for the user. Each scraped article is saved to the application database, but with a check so that there are no duplicates. When the articles are scraped, the headline, a summary, and the url shown. Users are able to leave comments on the articles displayed and revisit them later as the comments are saved to the database as well and associated with their respective articles. Users are also able to delete those comments left on articles and all stored comments are visible to every user.

- - -

### Technologies
This app uses the following npm packages:
* express
* express-handlebars
* mongoose
* body-parser
* cheerio
* request