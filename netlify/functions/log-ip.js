exports.handler = async (event) => {
  // Step 1: Extract IP
  const ips = event.headers['x-forwarded-for']
    ? event.headers['x-forwarded-for'].split(',')
    : [];
  const ip = ips[0]?.trim() || 'IP not found';

  // Step 2: Format timestamp
  const now = new Date();
const timestamp = now.toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
});


  // Step 3: Get geolocation from ipapi
  let location = 'Location not found';
  let org = 'Unknown ISP';

  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    const city = geo.city || '';
    const region = geo.region || '';
    const country = geo.country_name || '';
    org = geo.org || org;

    location = [city, region, country].filter(Boolean).join(', ');
  } catch (err) {
    console.error('Failed to get IP location:', err);
  }

  // Step 4: Send to Discord
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  // const discordWebhookUrl = "https://discord.com/api/webhooks/1383855353707630612/FFv_r8NPkmitCGO6iF8RFIBLykxgkg93He0t_N_gDRsNfGrprsIUsJ4oZi3aCPP360nl";

  await fetch(discordWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `🧠 **New Visitor**
🌐 **IP:** \`${ip}\`
📍 **Location:** ${location}
🏢 **ISP:** ${org}
🕒 **Time:** ${timestamp}`
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ip, location, org }),
  };
};
