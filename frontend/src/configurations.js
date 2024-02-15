export const configuration = {
  authority: "http://localhost:5001",
  client_id: "js",
  redirect_uri: "http://localhost:3000/callback",
  response_type: "code",
  scope: "openid profile api1",
  post_logout_redirect_uri: "http://localhost:3000",
};
