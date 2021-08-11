function setConfig(config) {
  
  config.newInfo()
    .setId('instructions')
    .setText('');
  
  config.newTextInput()
    .setId('api_key')
    .setName('Enter API key')
    .setHelpText('https://www.youtube.com/embed/DvjnoTJe9NM?start=407&end=576')
    .setPlaceholder('API key');

  config.newTextInput()
    .setId('channel_ID')
    .setName('Enter channel\'s ID')
    .setHelpText('https://commentpicker.com/youtube-channel-id.php')
    .setPlaceholder('Channel\'s ID');
  
  return config;
}

