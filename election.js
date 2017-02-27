$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData){
    var candidates = responseData.candidates;
    for (var i = 0; i < candidates.length; i++) {
      $('#candidates').append(
        '<h1> Candidate: ',
        '<li> Name: ' + candidates[i].name + '</li>',
        '<li> Votes: ' + candidates[i].votes + '</li>');
    }
  });
});
