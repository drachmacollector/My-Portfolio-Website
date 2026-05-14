const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// We encode the Client ID and Secret to base64, which Spotify requires for authentication
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

// Helper function to get a fresh Access Token using your permanent Refresh Token
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token as string,
    }).toString(),
  });

  return response.json();
};

export const handler = async () => {
  try {
    const { access_token } = await getAccessToken();

    // First, check if you are currently listening to anything
    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    // If status is 204, nothing is playing. If it's > 400, there's an error.
    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      
      // Fallback: Fetch your most recently played track instead
      const recentlyPlayedResponse = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      
      const recentData = await recentlyPlayedResponse.json();
      const track = recentData.items[0].track;
      
      return {
        statusCode: 200,
        body: JSON.stringify({
          isPlaying: false,
          title: track.name,
          artist: track.artists.map((_artist: any) => _artist.name).join(', '),
          albumImageUrl: track.album.images[0].url,
          songUrl: track.external_urls.spotify,
        }),
      };
    }

    // If something is currently playing, parse that data
    const song = await nowPlayingResponse.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return {
      statusCode: 200,
      body: JSON.stringify({
        isPlaying,
        title,
        artist,
        albumImageUrl,
        songUrl,
      }),
    };
  } catch (error) {
    console.error('Spotify API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Spotify data' }),
    };
  }
};