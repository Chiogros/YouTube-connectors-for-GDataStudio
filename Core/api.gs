function fetchDataFromAPI(request, endpoint, fields) {

  // will contains all fetched rows
  var parsedResponses = new Array();

  try {

    // Fetch data
    var response = connect(endpoint, fields, request);
    parsedResponses = JSON.parse(response);
    
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error fetching data from API. ' + e)
      .setText('There was an error communicating with YouTube. Try again later.')
      .throwException();
  }

  return parsedResponses.items[0];
  /*
  JSON response looks:
  {
    kind: ...
    etag: ...
    pageInfo: ...
    items: [
      0: {
        // useful channel data
      }
    ]
  }
  */
}
