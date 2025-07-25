interface SearchHistoryProps {
	history: string[];
	onHistoryClick: (city: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
	history,
	onHistoryClick,
}) => {
	if (!history.length) return null;
	return (
		<div>
			<h2 className="text-[var(--text-primary)] text-2xl font-bold tracking-tight px-2 pb-4">
				Search History
			</h2>
			<div className="flex gap-3 overflow-x-auto pb-2">
				{history.map((city) => (
					<button
						key={city}
						className="flex cursor-pointer h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--card-background-color)] hover:bg-[var(--primary-color)] hover:text-white dark:hover:text-white transition-colors shadow-sm px-4"
						onClick={() => onHistoryClick(city)}
					>
						<p className="text-sm font-medium">{city}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default SearchHistory;
