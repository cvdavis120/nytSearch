//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
//fq=source:("The New York Times")
var searchTerm = "animals";
var apiKey = "d7GAhlX34Aala8VFlo2pjAppXv8PbR3I";
var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm +
  "&fq=source:('The New York Times')&api-key=" +
  apiKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
