// see https://developers.google.com/youtube/v3/docs/channels/list#part
var endpoint = 'channels';
var fields = ['brandingSettings','contentDetails','contentDetails','id','localizations','snippet','statistics','status','topicDetails'];

function getSchema(request) {
  return YouTubeCore.getSchema(request, getFields(), endpoint, fields);
}

function getData(request) {

  // Create schema for requested fields
  var requestedFields = getRequestedFields(request);

  // Get rows
  var rows = fetchDataFromAPI(requestedFields, request);

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}

function getRequestedFields(request) {
  return YouTubeCore.getRequestedFields(request, getFields());
}

function getConfig(request) {
  return YouTubeCore.getConfig();
}
