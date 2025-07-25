# 🌤️ Weather Outfit Recommender

A modern, responsive web application that provides weather information and personalized outfit recommendations based on current weather conditions. Built with Next.js, TypeScript, and Material-UI.

![Weather Outfit Recommender](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Material-UI](https://img.shields.io/badge/Material--UI-7.2.0-blue?style=for-the-badge&logo=mui)

## ✨ Features

### 🌡️ Weather Information

-   **Current Weather**: Real-time temperature, humidity, wind speed, and weather conditions
-   **7-Day Forecast**: Extended weather predictions with daily high/low temperatures
-   **Weather Icons**: Visual representation of weather conditions (sunny, rainy, cloudy, etc.)
-   **Location Details**: City, state, and country information

### 👕 Outfit Recommendations

-   **Smart Recommendations**: Outfit suggestions based on temperature and weather conditions
-   **Temperature-Based Logic**:
    -   **Below 5°C**: Heavy coat and scarf for cold weather
    -   **5-15°C**: Light jacket and jeans for cool weather
    -   **15-25°C**: T-shirt and pants for mild weather
    -   **Above 25°C**: Shorts and T-shirt for hot weather
-   **Weather-Specific Accessories**:
    -   Sunglasses for clear weather
    -   Umbrella for rain/thunderstorm
    -   Gloves and warm hat for snow

### 🔍 Search & History

-   **City Search**: Search for any city worldwide
-   **Search History**: Automatic storage of recent searches (up to 10 cities)
-   **Quick Access**: Click on history items to quickly view weather for previously searched cities
-   **Local Storage**: Search history persists across browser sessions

### 🎨 Modern UI/UX

-   **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
-   **Dark/Light Theme**: Automatic theme switching based on system preferences
-   **Smooth Animations**: Fade-in effects and smooth transitions
-   **Material Design**: Clean, modern interface using Material-UI components
-   **Optimized Images**: Next.js Image optimization for better performance

## 🚀 Getting Started

### Prerequisites

-   Node.js 18.0 or higher
-   npm or yarn package manager
-   OpenWeatherMap API key

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/weather-outfit-recommender.git
    cd weather-outfit-recommender
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory:

    ```env
    NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key_here
    ```

    **How to get an OpenWeatherMap API key:**

    1. Visit [OpenWeatherMap](https://openweathermap.org/)
    2. Sign up for a free account
    3. Go to your API keys section
    4. Copy your API key and paste it in the `.env.local` file

4. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
weather-outfit-recommender/
├── src/
│   ├── app/
│   │   └── page.tsx              # Main application page
│   ├── components/
│   │   ├── WeatherHeader.tsx     # Application header
│   │   ├── WeatherSearch.tsx     # City search component
│   │   ├── WeatherCurrent.tsx    # Current weather display
│   │   ├── WeatherForecast.tsx   # 7-day forecast
│   │   ├── OutfitRecommendation.tsx # Outfit suggestions
│   │   └── SearchHistory.tsx     # Search history component
│   ├── types/
│   |   └── weather.ts            # TypeScript type definitions
|   └── context/
|       └── ThemeContext.tsx      # Global theme state
├── public/
│   └── outfit-images/            # Outfit recommendation images
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Available Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Build the application for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint for code quality checks

## 🎯 How to Use

1. **Search for a City**

    - Enter a city name in the search bar
    - Press Enter or click the search button
    - The app will fetch current weather and forecast data

2. **View Weather Information**

    - Current temperature and weather conditions
    - Wind speed, humidity, and "feels like" temperature
    - 7-day forecast with daily high/low temperatures

3. **Get Outfit Recommendations**

    - Based on current temperature and weather conditions
    - Includes accessory suggestions (sunglasses, umbrella, etc.)
    - Visual outfit images for different weather scenarios

4. **Access Search History**
    - Click on any city in your search history
    - Quickly view weather for previously searched locations
    - History is automatically saved and persists across sessions

## 🎨 Technologies Used

-   **Frontend Framework**: Next.js 15.4.4
-   **Language**: TypeScript 5.0
-   **UI Library**: React 19.1.0
-   **Component Library**: Material-UI 7.2.0
-   **Styling**: Tailwind CSS 4.0
-   **Weather API**: OpenWeatherMap API
-   **Build Tool**: Turbopack (for development)

## 🔧 Configuration

### Environment Variables

| Variable                          | Description                 | Required |
| --------------------------------- | --------------------------- | -------- |
| `NEXT_PUBLIC_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key | Yes      |

### API Endpoints Used

-   **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
-   **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

## 🙏 Acknowledgments

-   [OpenWeatherMap](https://openweathermap.org/) for providing weather data
-   [Material-UI](https://mui.com/) for the component library
-   [Next.js](https://nextjs.org/) for the React framework
-   [Tailwind CSS](https://tailwindcss.com/) for styling utilities
