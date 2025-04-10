const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const code = new URLSearchParams(event.queryStringParameters).get('code');

  const CLIENT_ID = '1359776558939639910';
  const CLIENT_SECRET = '2VI65jzTBio2ZV8xAIR47NlF1kZb7rlM';
  const REDIRECT_URI = 'https://kriptoid.netlify.app/.netlify/functions/auth-callback';
  const SERVER_ID = '1333476344213930094';

  const ALLOWED_ROLE_IDS = [
    '1333477313366724732',
    '1343931430639501312',
    '1355916575873568878',
    '1335411985713729606',
    '1339093986413117502',
    '1336010335294853150'
  ];

  try {
    // 1. Exchange code for access token
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI
      })
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Get user info
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const user = await userResponse.json();

    // 3. Get member roles
    const memberResponse = await fetch(`https://discord.com/api/users/@me/guilds/${SERVER_ID}/member`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const member = await memberResponse.json();

    const userRoleIds = member.roles || [];

    // 4. Check if user has at least one allowed role
    const hasAccess = userRoleIds.some(role => ALLOWED_ROLE_IDS.includes(role));

    if (hasAccess) {
      return {
        statusCode: 302,
        headers: {
          Location: '/index.html'
        },
        body: ''
      };
    } else {
      return {
        statusCode: 403,
        body: 'Akses ditolak. Anda tidak memiliki peran yang sesuai di Discord.'
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: `Terjadi kesalahan: ${error.message}`
    };
  }
};
