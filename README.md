## CineSeek - API Explorer (Movies Database App)

## Overview

The MoviesDatabase API (RapidAPI) provides access to a rich dataset of movies, TV shows, actors, and related information. It shows developers to search and retrieve detailed metadata about films, cast memebers, genres, releasee dates, and streaming availability. It is perfect for entertainment apps, dashboards or recommendation systems.

## Version

Api version: V1
Base URL: https://moviesdatabase.p.rapidapi.com

## Available Endpoints

| Endpoint                       | Method | Description                                                                          |
| ------------------------------ | ------ | ------------------------------------------------------------------------------------ |
| `/titles`                      | `GET`  | Retrieves a list of movie titles with optional filters (genres, release year, etc.). |
| `/titles/search/title/{title}` | `GET ` | Searches for a movie or TV show by its title.                                        |
| `/titles/{id}`                 | `GET ` | Fetches detailed information for a specific movie or show by ID.                     |
| `/titles/random`               | `GET`  | Returns a random movie or show from the database.                                    |
| `/actors `                     | `GET`  | Lists actors and their associated filmography.                                       |
| `/genres`                      | `GET ` | Retrieves all available genres.                                                      |
| `/tiles/series/{id}/episodes`  | `GET`  | Lists episodes for a given TV series ID.                                             |

## Request and Response Format

# Request Example

GET https://moviesdatabase.p.rapidapi.com/titles/search/title/inception
Headers:
"x-rapidapi-key": "YOUR_RAPIDAPI_KEY"
"x-rapidapi-host": "moviesdatabase.p.rapidapi.com"

# Response Example

{
"results": [
{
"id": "tt1375666",
"titleText": {
"text": "Inception"
},
"releaseYear": {
"year": 2010
},
"primaryImage": {
"url": "https://image.tmdb.org/t/p/original/inception.jpg"
}
}
]
}

## Authentication

All API requests must include authetication headers provided by RapidAPI. Reister on RapidAPI and subscribe to the MOviesDatabase API to obtain your key.

**Required Headers:**
| Header | Description|
|--------|------------|
| `x-rapidapi-key` | Your unique RapidAPI key |
| `x-rapidapi-host` | The host for the MoviesDatabase API (`moviesdatabase.p.rapidapi.com`) |
| `Content-Type` | (Optional) `Use application/json` for POST requests |

**Example in Javascript:**

const options = {
method: 'GET',
headers: {
'x-rapidapi-key': process.env.NEXT_PUBLIC_MOVIES_API_KEY,
'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
}
};

const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles/random', options);
const data = await response.json();
console.log(data);

## Error Handling

| Status Code                 | Meaning                         | How to Handle                      |
| --------------------------- | ------------------------------- | ---------------------------------- |
| `400 Bad Request`           | Invalid or missing parameters   | Double-check query or endpoint     |
| `401 Unauthorized`          | Missing or invalid API key      | Verify your RapidAPI credentials   |
| `404 Not Found`             | Movie or endpoint doesn’t exist | Ensure correct title or ID         |
| `429 Too Many Requests`     | Rate limit exceeded             | Wait and retry after a short delay |
| `500 Internal Server Error` | Problem on API server           | Retry or contact RapidAPI support  |

**Code Example:**

if (!response.ok) {
throw new Error(`API request failed with status ${response.status}`);
}

## Usage Limits and Best Practices

- Rate Limits: Each RapidAPI plan includes a maximum number of requests per minute/month. Check your subscription tier on RapidAPI.

- Caching: Cache movie responses locally to reduce repetitive calls.

- Error Retries: Use exponential backoff for temporary failures (429 or 500).

- API Key Security: Store keys in .env.local and never commit them to GitHub.

NEXT_PUBLIC_MOVIES_API_KEY=your_api_key_here

- Filtering: Use query parameters like genre=Action&year=2024 to optimize responses.
