function responseToRows(requestedFields, response) {

  var rows = new Array();

  var fields = requestedFields.asArray();
  
  // Filter for requested fields
  fields.forEach(function (field) {
    
    switch (field.getId()) {
      case 'YouTube_Data_Channels_id':
        rows.push(response.id);
        break;
      case 'YouTube_Data_Channels_title':
        rows.push(response.brandingSettings.channel.title);
        break;
      case 'YouTube_Data_Channels_description':
        rows.push(response.brandingSettings.channel.description);
        break;
      case 'YouTube_Data_Channels_country':
        rows.push(response.brandingSettings.channel.country);
        break;
      case 'YouTube_Data_Channels_viewCount':
        rows.push(response.statistics.viewCount);
        break;
      case 'YouTube_Data_Channels_videoCount':
        rows.push(response.statistics.videoCount);
        break;
      case 'YouTube_Data_Channels_subscriberCount':
        try {
          rows.push(response.statistics.subscriberCount);
        } catch (e) {}
        break;
      default:
        break;
    }
  });

  return rows.map(function(row) {
    return { values: [row] };
  });
  
}
