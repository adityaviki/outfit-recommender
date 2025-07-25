interface OutfitRecommendationProps {
	weather: any;
	loading?: boolean;
	error?: string | null;
}

const getOutfit = (weather: any) => {
	if (!weather)
		return {
			title: "-",
			desc: "Search for a city to get recommendations.",
			img: "",
			accessory: null,
		};
	const temp = weather.main?.temp;
	const condition = weather.weather[0]?.main?.toLowerCase() || "";
	let accessory = null;

	if (condition === "clear") {
		accessory = "Sunglasses recommended";
	} else if (
		condition === "rain" ||
		condition === "thunderstorm" ||
		condition === "drizzle"
	) {
		accessory = "Umbrella recommended";
	} else if (condition === "snow") {
		accessory = "Wear gloves and a warm hat";
	}

	if (temp < 5)
		return {
			title: "Heavy Coat & Scarf",
			desc: "Stay warm in the cold.",
			img: "/outfit-images/coat-and-scarf.png",
			accessory,
		};
	if (temp < 15)
		return {
			title: "Light Jacket & Jeans",
			desc: "Perfect for a cool, cloudy day.",
			img: "/outfit-images/jacket-and-jeans.png",
			accessory,
		};
	if (temp < 25)
		return {
			title: "T-shirt & Pants",
			desc: "Comfortable for mild weather.",
			img: "/outfit-images/tshirt-and-pants.png",
			accessory,
		};
	return {
		title: "Shorts & T-shirt",
		desc: "Stay cool in the heat.",
		img: "/outfit-images/tshirt-and-shorts.png",
		accessory,
	};
};

const OutfitRecommendation: React.FC<OutfitRecommendationProps> = ({
	weather,
	loading,
	error,
}) => {
	if (loading) {
		return (
			<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300 text-center">
				<p className="text-lg font-medium">Loading recommendation...</p>
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
	const outfit = getOutfit(weather);
	return (
		<div className="bg-[var(--card-background-color)] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300">
			<h2 className="text-[var(--text-primary)] text-2xl font-bold tracking-tight mb-4">
				Outfit Recommendation
			</h2>
			<div className="flex flex-col md:flex-row items-center gap-6">
				<div className="flex-1">
					<p className="text-[var(--text-primary)] text-xl font-bold">
						{outfit.title}
					</p>
					<p className="text-[var(--text-secondary)] mt-1">
						{outfit.desc}
					</p>
					{outfit.accessory && (
						<p className="text-[var(--primary-color)] mt-2 font-medium">
							{outfit.accessory}
						</p>
					)}
				</div>
				{outfit.img && (
					<div className="w-full md:w-1/3 flex items-center justify-center h-48 bg-center bg-no-repeat bg-cover rounded-xl p-2">
						<img
							src={outfit.img}
							alt={outfit.title}
							className="max-h-full max-w-full object-contain rounded-xl"
							style={{ aspectRatio: "1/1" }}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default OutfitRecommendation;
