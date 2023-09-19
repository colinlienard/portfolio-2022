/* eslint-disable consistent-return */
export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  // Get an access token
  const responseToken = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${config.spotifyRefreshToken}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          `${config.spotifyClientId}:${config.spotifyClientSecret}`,
        )}`,
      },
    },
  );

  if (!responseToken.ok) {
    return;
  }
  const { access_token: accessToken } = await responseToken.json();

  // Use the access token to fetch data
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (response.ok) {
    try {
      const { item } = await response.json();
      const track: string = item.name;
      const artist: string = item.artists.reduce(
        (previous: string, current: any) =>
          `${previous ? `${previous}, ` : ''}${current.name}`,
        '',
      );
      const link: string = item.external_urls.spotify;

      return {
        track,
        artist,
        link,
      };
    } catch {
      return null;
    }
  }
});
