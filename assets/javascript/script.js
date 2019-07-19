//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
//fq=source:("The New York Times")
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=animals&api-key=d7GAhlX34Aala8VFlo2pjAppXv8PbR3I

// ON CLICK NEEDS TO WRAP ALL THIS

var apiKey = "d7GAhlX34Aala8VFlo2pjAppXv8PbR3I";
//pull the search term
var searchTerm = "animals";
// pull the start year
var sYear = "2012" + "0101";
//pull the end year
var eYear = "2012" + "1231";
var userAmount = 6;

var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm +
  "&facet_fields=source&facet=true&begin_date=" +
  sYear +
  "&end_date=" +
  eYear +
  "&api-key=" +
  apiKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(dataset) {
  var numRecords = dataset.response.docs.length;
  var articleArray = [];
  for (i = 0; i < userAmount; i++) {
    article = dataset.response.docs[i];
  }
  console.log(response);
  console.log(numRecords);
});
