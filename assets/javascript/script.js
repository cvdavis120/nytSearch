//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
//fq=source:("The New York Times")
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=animals&api-key=d7GAhlX34Aala8VFlo2pjAppXv8PbR3I

// ON CLICK NEEDS TO WRAP ALL THIS

var apiKey = "d7GAhlX34Aala8VFlo2pjAppXv8PbR3I";
var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
  searchTerm +
  "&api-key=" +
  apiKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(dataset) {
  var numRecords = dataset.response.docs.length;
  var searchTerm = "animals";

  var sYear = "2005";
  var eYear = "2010";
  console.log(response);
  console.log(numRecords);
});
