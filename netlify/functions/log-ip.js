exports.handler = async (event) => {
  // Get the first IP from the x-forwarded-for list
  const ips = event.headers['x-forwarded-for'] ? event.headers['x-forwarded-for'].split(',') : [];
  const ip = ips[0]?.trim() || 'IP not found';
  
  // Cleaner timestamp format: "June 10, 2025 at 1:27 PM"
  const now = new Date();
  const timestamp = now.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const discordWebhookUrl = "https://discord.com/api/webhooks/1381935635496964197/IpuhtBNQCsp-4LE2GOuKsy4hfkwVrfUpPC-PMxjbZDGweTA67Oyxmb3v6ABZPYJUeStU";

  await fetch(discordWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `🧠 New visitor!\n🌐 IP: \`${ip}\`\n🕒 Time: ${timestamp}`
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ip }),
  };
};