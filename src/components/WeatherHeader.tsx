"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const WeatherHeader = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-color)] px-4 md:px-10 py-4 shadow-sm bg-[var(--card-background-color)] transition-colors duration-300">
			<div className="flex items-center gap-3 text-[var(--text-primary)]">
				<ThermostatIcon
					style={{ color: "var(--primary-color)", fontSize: 32 }}
				/>
				<h1 className="text-[var(--text-primary)] text-2xl font-bold leading-tight tracking-tight">
					Outfit Recommender
				</h1>
			</div>
			<div className="flex flex-1 justify-end items-center gap-4">
				<div className="flex items-center gap-4">
					<button
						className="flex pointer items-center cursor-pointer justify-center rounded-full h-10 w-10 hover:bg-[var(--background-color)] text-[var(--text-secondary)] transition-colors"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
						aria-label="Toggle dark mode"
					>
						{theme === "dark" ? (
							<LightModeIcon style={{ fontSize: 24 }} />
						) : (
							<DarkModeIcon style={{ fontSize: 24 }} />
						)}
					</button>
				</div>
				<div
					className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
					style={{
						backgroundImage:
							"url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3E2lfrJpLTmBHhXkwB-TN0qAjbP8PfB1sSnZGyc-X1bxGf1_QItuv0B4LjG4A852czkjmdqF0u-0AHWhQVFNOpbTxih9j96CGjvgz7J3xv-65qkfao972tw2JoEsTXTp3dxSqzVjkAQah1jcY2SX8ejr4Y3cr8IM3hSZUqdGctUlNqRB9MWNNNws-ZHG1mZ_xLEFYXCjYNCpoAeXJm3PcOdygZnixkXyPFN9LzyLOeXwiFJtbyfA4kmwzhkOs_4b2uhRhHW7tC44E')",
					}}
				></div>
			</div>
		</header>
	);
};

export default WeatherHeader;
