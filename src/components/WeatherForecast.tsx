import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudIcon from "@mui/icons-material/Cloud";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { ForecastData } from "@/types/weather";

interface WeatherForecastProps {
	forecast: ForecastData | null;
	loading?: boolean;
	error?: string | null;
}

const getIcon = (main: string) => {
	switch (main.toLowerCase()) {
		case "clear":
			return (
				<WbSunnyIcon
					style={{
						fontSize: 32,
						color: "#facc15",
						margin: "0.5rem 0",
					}}
				/>
			);
		case "rain":
			return (
				<WaterDropIcon
					style={{
						fontSize: 32,
						color: "#38bdf8",
						margin: "0.5rem 0",
					}}
				/>
			);
		case "clouds":
			return (
				<CloudIcon
					style={{
						fontSize: 32,
						color: "#94a3b8",
						margin: "0.5rem 0",
					}}
				/>
			);
		case "thunderstorm":
			return (
				<ThunderstormIcon
					style={{
						fontSize: 32,
						color: "#38bdf8",
						margin: "0.5rem 0",
					}}
				/>
			);
		case "drizzle":
			return (
				<FilterDramaIcon
					style={{
						fontSize: 32,
						color: "#94a3b8",
						margin: "0.5rem 0",
					}}
				/>
			);
		default:
			return (
				<CloudIcon
					style={{
						fontSize: 32,
						color: "#94a3b8",
						margin: "0.5rem 0",
					}}
				/>
			);
	}
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({
	forecast,
	loading,
	error,
}) => {
	if (loading) {
		return (
			<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
				<p className="text-lg font-medium">Loading forecast...</p>
			</div>
		);
	}
	if (error) {
		return (
			<div className="bg-red-100 border border-red-300 text-red-700 rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
				<p className="text-lg font-medium">{error}</p>
			</div>
		);
	}
	if (!forecast || !forecast.list) {
		return (
			<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
				<p className="text-lg font-medium">
					Search for a city to see the forecast.
				</p>
			</div>
		);
	}

	const daily: { [date: string]: ForecastData["list"] } = {};

	// Group forecast items by date
	forecast.list.forEach((item) => {
		// YYYY-MM-DD format
		const date = new Date(item.dt * 1000).toISOString().slice(0, 10);
		if (!daily[date]) daily[date] = [];
		daily[date].push(item);
	});

	const days = Object.keys(daily).slice(0, 5);

	return (
		<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300">
			<h2 className="text-[var(--text-primary)] text-2xl font-bold tracking-tight mb-4">
				5-Day Forecast
			</h2>
			<div className="flex gap-4 overflow-x-auto pb-4">
				{days.map((date) => {
					const items = daily[date];
					// Use the item at noon if possible, else the first
					const dayItem =
						items.find(
							(i) => new Date(i.dt * 1000).getHours() === 12
						) || items[0];
					const main = dayItem.weather[0]?.main || "Clouds";
					const tempMax = Math.round(
						Math.max(...items.map((i) => i.main.temp_max))
					);
					const tempMin = Math.round(
						Math.min(...items.map((i) => i.main.temp_min))
					);
					const dayName = new Date(date).toLocaleDateString(
						undefined,
						{ weekday: "short" }
					);
					const dateStr = new Date(date).toLocaleDateString(
						undefined,
						{ month: "short", day: "numeric" }
					);
					return (
						<div
							key={date}
							className="flex flex-col items-center justify-center p-4 rounded-xl bg-[var(--card-item-bg)] flex-shrink-0 w-32 text-center transition-colors duration-300"
						>
							<p className="text-[var(--text-primary)] text-lg font-bold">
								{dayName}
							</p>
							<p className="text-[var(--text-secondary)] text-sm">
								{dateStr}
							</p>
							{getIcon(main)}
							<p className="text-[var(--text-primary)] font-bold">
								{tempMax}°
								<span className="text-[var(--text-secondary)] font-medium">
									/{tempMin}°
								</span>
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WeatherForecast;
