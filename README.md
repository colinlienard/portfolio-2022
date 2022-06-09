# Get a new Spotify refresh token

## Request user authorization

Go to the following url:

```bash
https://accounts.spotify.com/authorize?client_id=<client_id>&response_type=code&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-top-read
```

You will be redirected to `localhost` width a code in the url params.

## Request access and refresh tokens

Encode the following in base64 using [this website](https://www.base64encode.org/):

```
<client_id>:<client_secret>
```

Then run the following in a terminal with the encoded string and the code:

```bash
curl -H "Authorization: Basic <encoded>" -d grant_type=authorization_code -d code=<code> -d redirect_uri=http://localhost:3000/ https://accounts.spotify.com/api/token
```

You will get a response with a refresh token. Save it in an environment variable. It will never expire.