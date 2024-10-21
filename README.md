# Elemental | Weather App

Elemental is a weather app that gets the current user's location and shows the weather information for that location. It also allows users to search for weather information by city name. It uses the OpenWeather API to retrieve weather data and the Tolgee API to provide translations.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)

## Features

- Text Translation
- Weather Information
- Search by City Name
- Responsive Design

## Demo

You can view a live demo of Elemental [here](https://vercel.live/link/elemental-ten.vercel.app)

## Screenshots

![Weather App Screenshot](https://github.com/user-attachments/assets/6030830a-ab59-407e-ae1a-cde012179360)

## Technologies

- [Vite.js](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Tolgee](https://tolgee.io)
- [Openweather API](https://openweathermap.org/api)

## Getting Started

To get started with the project, run the following commands in your terminal:

1. Clone the repository

```bash
git clone https://github.com/AJBrownson/elemental.git
cd elemental
```

2. Install the dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
VITE_APP_TOLGEE_API_URL=https://app.tolgee.io
VITE_APP_TOLGEE_API_KEY=your-api-key
WEATHER_API_KEY=your-api-key
```

> You can get your Tolgee API key by going to [Tolgee](https://app.tolgee.io)

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app

5. To host on Netlify or Vercel, run the following command:

```bash
npm i -D @tolgee/cli

npx tolgee login <your-tolgee-api-key>

npx tolgee --project-id <your-project-id-number> pull --path public/i18n
```

Add the following code to your main.tsx file:

```typescript
const tolgee = Tolgee()
  .use(DevTools())
  .use(BackendFetch()) // add this particular line
  .use(FormatSimple())
  .init({
    language: "en",

    // for development
    apiUrl: process.env.VITE_APP_TOLGEE_API_URL,
    apiKey: process.env.VITE_APP_TOLGEE_API_KEY,
  });
```

Now you can go ahead and deploy your app to Netlify or Vercel.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

If you have any questions, feel free to reach out to me at [Anietie Brownson](https://x.com/TechieAnni).
