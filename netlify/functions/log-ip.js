exports.handler = async (event) => {
  const ip = event.headers['x-forwarded-for'] || 'IP not found';
  const timestamp = new Date().toISOString();

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
