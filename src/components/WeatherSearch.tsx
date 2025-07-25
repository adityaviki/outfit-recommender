"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface WeatherSearchProps {
	onSearch: (city: string) => void;
	loading?: boolean;
	error?: string | null;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({
	onSearch,
	loading,
	error,
}) => {
	const [city, setCity] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (city.trim()) {
			onSearch(city.trim());
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<div className="relative">
				<SearchIcon
					style={{
						fontSize: 24,
						color: "var(--text-secondary)",
						position: "absolute",
						left: "16px",
						top: "50%",
						transform: "translateY(-50%)",
					}}
				/>
				<input
					className="form-input w-full min-w-0 resize-none overflow-hidden rounded-full text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] border-2 border-[var(--border-color)] bg-[var(--card-background-color)] h-14 placeholder:text-[var(--text-secondary)] pl-12 pr-4 text-lg font-medium leading-normal transition-colors duration-300"
					placeholder="Search for a city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					disabled={loading}
				/>
				<button
					type="submit"
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--primary-color)] text-white rounded-full px-4 py-2 font-medium text-sm shadow hover:bg-blue-700 transition-colors"
					disabled={loading || !city.trim()}
				>
					{loading ? "Loading..." : "Search"}
				</button>
			</div>
			{error && <div className="text-red-500 text-sm mt-2">{error}</div>}
		</form>
	);
};

export default WeatherSearch;
