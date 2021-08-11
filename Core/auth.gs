function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
}

function isAdminUser() {
  return true;
}

function checkForValidCredentials(endpoint, fields, request) {

  var response = connect(endpoint, fields, request);

  if (response.getResponseCode() == 200) {
    return true;
  }
    
  if (response.getResponseCode() == 403) {
    cc.newUserError()
    .setText('API key not valid.')
    .throwException();
  }

  cc.newUserError()
    .setText('Credentials are not valids.')
    .throwException();
}
