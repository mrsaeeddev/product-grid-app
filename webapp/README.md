# How to run the web app

To run the web app, first run `npm start` at root of project to start the nodejs server. Then in another shell instance run `npm start` after `cd /webapp`. 

# Completed features

I have completed sorting of products based on size, price and date properties.
- Products are displayed in a grid and grid is responsive.
- Products list is reloaded when user selects a new property to filter products using 3 buttons at the top.
- Products faces are sized according to `size` property in the API response.
- Price field has been formatted through a concatenation with `$` symbol.
- Dates have been converted to `X` days ago form as mentioned.
- Infinite scrolling has been implemented
- Initial loader and loader for infinite scrolling both have been implemented
- Message has been showed at the end of catalogue

# Incomplete features

- Ads feature : I have showed an ad after every 10 products. The reason for this is that I am getting 10 products per page. So, I would prefer to change the API if there's a need to show 20 products. 

# Structure

I have used React alongside hooks and context API. For smaller projects, context API seems more clear to me. For bigger projects I prefer Redux. 