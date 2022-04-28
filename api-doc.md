# Hacktiv Heroes API Documentation

&nbsp;

## Endpoints :

You could try to use postman to hit the API and hit "http://localhost:3000/songs/English" or you may change "English" with any input you want.

Change filename example.env to .env

How to run server : type in the terminal "npm i" and then "npm run start"

How to run test : type in terminal "npm run test"

&nbsp;

## Endpoints :

List of available endpoints:

- `GET /songs/:input`

&nbsp;

## 1. GET /songs/:input

Description:

- get songs by input from spotify API

Request:

- params:

```json
{
  "input": "string"
}
```

_Response (200)_

```json
{
  "tracks": {object},
  "playlists": {object}
}
```

_Response (404)_

````json
{
  "msg": "No Input"
}
_Response (500)_

```json
{
  "msg": "Internal Server Error"
}
````
