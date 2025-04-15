// Load environment variables
require('dotenv').config();

// Dynamic import node-fetch (karena ESM)
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
  const code = new URLSearchParams(event.queryStringParameters).get('code');

  const CLIENT_ID = '1359776558939639910';
  const CLIENT_SECRET = '2VI65jzTBio2ZV8xAIR47NlF1kZb7rlM';
  const REDIRECT_URI = 'https://kriptoid.netlify.app/.netlify/functions/auth-callback';
  const SERVER_ID = '1333476344213930094';

  const ALLOWED_ROLE_IDS = [
    '1335411985713729606',
    '1355916575873568878',
    '1343931430639501312',
    '1360553808727380038',
    '1339093986413117502',
    '1336010335294853150'
  ];

  try {
    // 1. Tukar code dengan access token
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
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

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return { statusCode: 401, body: "Access token tidak ditemukan" };
    }

    // 2. Ambil info user
    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const user = await userRes.json();
    const userId = user.id;

    // 3. Ambil data member (dari bot yang di-host)
    const memberResponse = await fetch('https://kriptoid-bot-hosted.vercel.app/api/get-member-roles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        serverId: SERVER_ID
      })
    });

    const member = await memberResponse.json();

    // DEBUG
    console.log('=== DISCORD MEMBER DATA ===');
    console.log('User ID:', userId);
    console.log('Full Member Response:', JSON.stringify(member, null, 2));

    const userRoles = member.roles || [];

    const hasAccess = userRoles.some(role => ALLOWED_ROLE_IDS.includes(role));

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
        body: `Akses ditolak. Role kamu: ${JSON.stringify(userRoles)}`
      };
    }

  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: `Terjadi kesalahan: ${err.message}`
    };
  }
};
