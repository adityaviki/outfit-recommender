export interface WeatherData {
	name: string;
	state?: string;
	dt: number;
	main: {
		temp: number;
		feels_like: number;
		humidity: number;
		temp_max: number;
		temp_min: number;
	};
	weather: Array<{
		main: string;
		description: string;
		icon: string;
	}>;
	wind: {
		speed: number;
		deg: number;
	};
	sys: {
		country: string;
	};
}

export interface ForecastData {
	list: Array<{
		dt: number;
		main: {
			temp: number;
			temp_max: number;
			temp_min: number;
			humidity: number;
		};
		weather: Array<{
			main: string;
			description: string;
			icon: string;
		}>;
	}>;
}

export interface OutfitData {
	title: string;
	desc: string;
	img: string;
	accessory: string | null;
}
