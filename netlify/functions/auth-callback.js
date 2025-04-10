// Wajib di paling atas untuk load .env dulu
require('dotenv').config();

// Gunakan import dinamis untuk fetch karena node-fetch versi ESM
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function(event, context) {
  const code = new URLSearchParams(event.queryStringParameters).get('code');

  const CLIENT_ID = '1359776558939639910';
  const CLIENT_SECRET = '2VI65jzTBio2ZV8xAIR47NlF1kZb7rlM';
  const REDIRECT_URI = 'https://kriptoid.netlify.app/.netlify/functions/auth-callback';
  const SERVER_ID = '1333476344213930094';
  const BOT_TOKEN = process.env.BOT_TOKEN;

  const ALLOWED_ROLE_IDS = [
    '1333477313366724732',
    '1343931430639501312',
    '1355916575873568878',
    '1335411985713729606',
    '1339093986413117502',
    '1336010335294853150'
  ];

  try {
    // 1. Tukar code dengan access token
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

    if (!accessToken) {
      return {
        statusCode: 401,
        body: "Access token tidak ditemukan"
      };
    }

    // 2. Ambil info user (ID)
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const user = await userResponse.json();

    const userId = user.id;

    // 3. Ambil data member dari server (pakai bot)
    const memberResponse = await fetch(`https://discord.com/api/guilds/${SERVER_ID}/members/${userId}`, {
      headers: { Authorization: `Bot ${BOT_TOKEN}` }
    });

    const member = await memberResponse.json();
    const userRoleIds = member.roles || [];

    const hasAccess = userRoleIds.some(role => ALLOWED_ROLE_IDS.includes(role));

    if (hasAccess) {
      return {
        statusCode: 302,
        headers: {
          'Location': '/',
          'Set-Cookie': `discord_token=${accessToken}; Path=/; HttpOnly; SameSite=Lax`,
          'Access-Control-Allow-Origin': '*'
        },
        body: ''
      };
    } else {
      return {
        statusCode: 403,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: 'Akses ditolak. Anda tidak memiliki role yang dibutuhkan.'
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: `Terjadi kesalahan: ${error.message}`
    };
  }
};
