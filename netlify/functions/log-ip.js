exports.handler = async (event) => {
  const ip = event.headers['x-forwarded-for'] || 'IP not found';

  console.log("Visitor IP:", ip);

  return {
    statusCode: 200,
    body: JSON.stringify({ ip }),
  };
};
