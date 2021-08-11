function fetchDataFromAPI(requestedFields, request) {
  var rawRows = YouTubeCore.fetchDataFromAPI(request, endpoint, fields);
  
  return responseToRows(requestedFields, rawRows);
}
