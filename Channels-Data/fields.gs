var cc = DataStudioApp.createCommunityConnector();

function getFields() {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('YouTube_Data_Channels_id')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('YouTube_Data_Channels_title')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('YouTube_Data_Channels_description')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('YouTube_Data_Channels_country')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('YouTube_Data_Channels_viewCount')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('YouTube_Data_Channels_videoCount')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('YouTube_Data_Channels_subscriberCount')
    .setType(types.NUMBER);
  
  return fields;
}
