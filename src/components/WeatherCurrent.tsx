import { WeatherData } from "@/types/weather";
import CloudIcon from "@mui/icons-material/Cloud";

interface WeatherCurrentProps {
	weather: WeatherData;
	loading?: boolean;
	error?: string | null;
	city?: string;
}

interface WeatherDetailCardProps {
	label: string;
	value: string;
}

const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({
	label,
	value,
}) => (
	<div className="flex flex-col gap-1 items-center justify-center p-4 rounded-xl bg-[var(--card-item-bg)] transition-colors duration-300">
		<p className="text-[var(--text-secondary)] text-sm font-medium">
			{label}
		</p>
		<p className="text-[var(--text-primary)] text-lg font-bold">{value}</p>
	</div>
);

const WeatherCurrent: React.FC<WeatherCurrentProps> = ({
	weather,
	loading,
	error,
	city,
}) => {
	if (loading) {
		return (
			<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
				<p className="text-lg font-medium">
					Loading current weather...
				</p>
			</div>
		);
	}
	if (error) {
		return null;
	}
	if (!weather) {
		return (
			<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
				<p className="text-lg font-medium">
					{city
						? `No data for "${city}".`
						: "Search for a city to see the weather."}
				</p>
			</div>
		);
	}
	return (
		<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300">
			<div className="flex justify-between items-start mb-6">
				<div>
					<h2 className="text-[var(--text-primary)] tracking-tight text-3xl font-bold">
						{weather.name}
						{weather.state ? `, ${weather.state}` : ""}
						{weather.sys?.country ? `, ${weather.sys.country}` : ""}
					</h2>
					<p className="text-[var(--text-secondary)] text-lg">
						{new Date(weather.dt * 1000).toLocaleString(undefined, {
							weekday: "long",
							hour: "2-digit",
							minute: "2-digit",
						})}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<CloudIcon style={{ fontSize: 40, color: "#facc15" }} />
					<p className="text-[var(--text-primary)] text-6xl font-bold">
						{Math.round(weather.main.temp)}°
					</p>
				</div>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
				<WeatherDetailCard
					label="Condition"
					value={weather.weather[0]?.main || "-"}
				/>
				<WeatherDetailCard
					label="Wind"
					value={`${weather.wind?.speed} km/h`}
				/>
				<WeatherDetailCard
					label="Humidity"
					value={`${weather.main?.humidity}%`}
				/>
				<WeatherDetailCard
					label="Feels like"
					value={`${Math.round(weather.main?.feels_like)}°`}
				/>
			</div>
		</div>
	);
};

export default WeatherCurrent;
