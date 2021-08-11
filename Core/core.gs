var cc = DataStudioApp.createCommunityConnector();

function getSchema(request, rawFields, endpoint, fields) {

  // Check credentials
  checkForValidCredentials(endpoint, fields, request);

  // return fields to retrieve
  var fields = rawFields.build();
  return { schema: fields };
}

function getRequestedFields(request, fields) {

  // Create schema for requested fields
  try {

    requestedFieldIds = request.fields.map(function(field) {
      return field.name;
    });
    
    return fields.forIds(requestedFieldIds);
    
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error requesting fields. ' + e)
      .setText('There was an error requesting fields. File an issue.')
      .throwException();
  }
}

function getConfig() {
  var config = cc.getConfig();
  
  setConfig(config);
  
  config.setDateRangeRequired(false);
  return config.build();
}

function connect(endpoint, fields, request) {
  var url = 'https://www.googleapis.com/youtube/v3/' + endpoint + '?' + 'id=' + request.configParams.channel_ID + '&key=' + request.configParams.api_key + '&part=' + fields.toString();

  // Fetch data
  return UrlFetchApp.fetch(url);
}
