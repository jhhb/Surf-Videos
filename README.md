### Tested Dependency Versions
* `node` at `9.6.1`
* `npm` at `5.6.0`

### Running the app
* `cd Surf-Videos/`
* `npm install && npm run start`

### Design
* I went with this design for the index page (several cards in the same row) because there
was going to be a lot of white space otherwise. I did think that there could be a way to show the
video card index *and* the detail page on the same page, but I stopped exploring that avenue after
I figured I probably didn't have enough time to do the detail page.

* This is a little bit of a tangent, but I decided to go with InfiniteScroll because if I were going to
do pagination, I would really want the pagination to work like it usually does in SPAs where changing pages
changes the query params, and you can bookmark a URL and the state will be loaded into the page from the query params.
I did consider pagination (which is an experience I greatly prefer to infinite scrolling) but thought if I were going
to do it, I should really do it right, which is a bigger time investment than I can budget currently, alas.

* Happy to discuss any design questions / comments by email or github issues

# Browse/Search Surf Videos

you can use whatever frameworks you’d like. we use React here at drift and have found create-react-app to be a great way to get started. 

To get started just fork this repo and get hacking, try to commit often, the goal of this exercise is to see your thought process during development.

docs: ```https://developers.google.com/youtube/v3/getting-started```

apikey: ```AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo (or generate your own in the google api console)```

sample request:
```
https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&q=surf 
```

## Min Requirements
  - have a home page that lists and either paginates or infinite scrolls surf videos
  - allow videos to be opened in a new page to play
  - allow search within the category (ex: q = surf + query)
  - show description/title/thumbnail per video on home page

## Extra credit
  - show comments on video detail page
  - show videos from same author on detail page
  - allow for sorting and advanced filtering on home page
  - make it sexy
  - go crazy with available end points :)
  
