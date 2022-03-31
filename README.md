# YouTube connectors for GDataStudio
Google Data Studio connectors to fetch data from YouTube Data API.

## Connectors organization
There is a main connector called `Core`: it retrieves and handles data to bring it properly for GDS and it sets the authentication method.
Children connectors (like Channels-data) use Core functions and also use specific functions for their API endpoint.

## How to use them on GDS

### Setup Core connector
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it
4. Go to project settings
5. Check `Display appsscript.json manifest file`
6. Take note about Script ID (useful for children connectors)
7. Go back to code window
8. Create files and set code for Core connector

### Setup child connector
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it
4. Go to project settings
5. Check `Display appsscript.json manifest file`
7. Go back to code window
8. Create files and set code for the child connector
9. In `appsscript.json`, change `Dependencies` > `Libraries` > `LibraryID` to the Core script ID you took note
10. Deploy it (easiest by going through `Use old editor` button > `Publish` > `Publish from manifest file`)

### Use connectors in GDS
1. Go to [Google Data Studio](https://datastudio.google.com)
2. Create > Data source
3. Search for your deployed child connector
4. Fill credentials
5. Now you can import it in your GDS reports

## Get access token
1. Check [this video](https://www.youtube.com/embed/DvjnoTJe9NM?start=407&end=576)
2. Use API key to fill your connector credentials

## How to create a new YouTube connector
First, copy Channels-data connector as template.

You can find the documentation [here](https://developers.google.com/youtube/v3/docs).

Then you have 4 things to change:
1. Change `endpoint` global var to the GET method you want.
```javascript
// core.gs
var endpoint = 'channels';
```
2. Change `fields` array items: fields can be found in each endpoint list page > Parameters section > `part` required parameter.
```javascript
// core.gs
var fields = ['brandingSettings','contentDetails','contentDetails','id', ...];
```

3. Put fetchable fields from API
```javascript
// fields.gs
function getFields(request) {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('YouTube_Data_Channels_id')
    .setType(types.TEXT); // BOOLEAN, TEXT, ...
    
  fields.newDimension()
    .setId('Users-followers_field_example')
    .setType(types.TEXT); // BOOLEAN, NUMBER, ...
  
  // put all fetchable fields
  
  return fields;
}
```
4. Handle each data row
```javascript
// dataHandler.gs
function responseToRows(requestedFields, response) {

  var rows = new Array();

  var fields = requestedFields.asArray();
  
  // Filter for requested fields
  fields.forEach(function (field) {
    
    switch (field.getId()) {
      case 'YouTube_Data_Channels_field_example':
        rows.push(response.field_example);
        break;
      default:
        break;
    }
  });

  return rows.map(function(row) {
    return { values: [row] };
  });
  
}
```
