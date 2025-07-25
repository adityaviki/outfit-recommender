"use client";

import { useState, useEffect } from "react";
import WeatherHeader from "@/components/WeatherHeader";
import WeatherSearch from "@/components/WeatherSearch";
import SearchHistory from "@/components/SearchHistory";
import WeatherCurrent from "@/components/WeatherCurrent";
import OutfitRecommendation from "@/components/OutfitRecommendation";
import WeatherForecast from "@/components/WeatherForecast";
import { ForecastData, WeatherData } from "@/types/weather";

const fetchWeatherData = async (endpoint: string, city: string) => {
	const url = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${encodeURIComponent(
		city
	)}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(
			`${endpoint === "weather" ? "City" : "Forecast"} not found`
		);
	}
	return response.json();
};

export default function Home() {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [forecast, setForecast] = useState<ForecastData | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [city, setCity] = useState<string>("");
	const [history, setHistory] = useState<string[]>([]);

	// Load search history from localStorage on mount
	useEffect(() => {
		const stored = localStorage.getItem("weather_search_history");
		if (stored) {
			setHistory(JSON.parse(stored));
		}
	}, []);

	// Save search history to localStorage when it changes
	useEffect(() => {
		localStorage.setItem("weather_search_history", JSON.stringify(history));
	}, [history]);

	const handleSearch = async (searchCity: string) => {
		setLoading(true);
		setError(null);
		setWeather(null);
		setForecast(null);
		setCity(searchCity);

		try {
			// Fetch both weather and forecast in parallel
			const [weatherData, forecastData] = await Promise.all([
				fetchWeatherData("weather", searchCity),
				fetchWeatherData("forecast", searchCity),
			]);

			setWeather(weatherData);
			setForecast(forecastData);

			// Update search history (no duplicates, most recent first)
			setHistory((prev) => {
				const filtered = prev.filter(
					(c) => c.toLowerCase() !== searchCity.toLowerCase()
				);
				return [searchCity, ...filtered].slice(0, 10);
			});
		} catch (err: unknown) {
			const errorMessage =
				err instanceof Error
					? err.message
					: "Failed to fetch weather data";
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	const handleHistoryClick = (searchCity: string) => {
		handleSearch(searchCity);
	};

	return (
		<div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
			<div className="layout-container flex h-full grow flex-col">
				<WeatherHeader />
				<main className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-8">
					<div className="layout-content-container flex flex-col max-w-4xl w-full">
						<div className="flex flex-col gap-8">
							<WeatherSearch
								onSearch={handleSearch}
								loading={loading}
								error={error}
							/>
							{history.length > 0 && (
								<SearchHistory
									history={history}
									onHistoryClick={handleHistoryClick}
								/>
							)}
							{!weather && !loading && (
								<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
									<p className="text-lg font-medium">
										Search for a city to see the weather.
									</p>
								</div>
							)}
							{weather && !error && (
								<div
									key={city}
									className="animate-fade-in flex flex-col gap-8"
								>
									<WeatherCurrent
										weather={weather}
										loading={loading}
										error={error}
										city={city}
									/>
									<OutfitRecommendation
										weather={weather}
										loading={loading}
										error={error}
									/>
									<WeatherForecast
										forecast={forecast}
										loading={loading}
										error={error}
									/>
								</div>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
