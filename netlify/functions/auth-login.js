const querystring = require('querystring');

exports.handler = async function(event, context) {
  const CLIENT_ID = '1359776558939639910'; // ganti dengan client ID Discord kamu
  const REDIRECT_URI = 'https://kriptoid.netlify.app/.netlify/functions/auth-callback';

  const params = querystring.stringify({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'identify guilds',
    prompt: 'consent'
  });

  return {
    statusCode: 302,
    headers: {
      Location: `https://discord.com/oauth2/authorize?${params}`
    },
    body: ''
  };
};
