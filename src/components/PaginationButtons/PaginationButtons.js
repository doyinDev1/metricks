import classes from './PaginationButtons.module.css';

const PaginationButtons = ({ lastPage, currentPage, setPage }) => {
	const generateButtons = () => {
		const start = 1;
		const btnGroups = new Array(lastPage).fill().map((_, index) => start + index);
		return btnGroups;
	};
	return (
		<div className={classes.PaginationContainer}>
			<button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} className={classes.Button}>
				Prev
			</button>
			{generateButtons().map((page, index) => {
				const startIndex = currentPage === 1 ? 0 : currentPage - 1;
				if (index >= startIndex && index <= startIndex + 5) {
					return (
						<button onClick={() => setPage(page)} key={page} className={classes.Button}>
							{page}
						</button>
					);
				}

				if (index > 5 && index < generateButtons().length - 1) return null;

				if (index === generateButtons().length - 1)
					return (
						<button onClick={() => setPage(page)} key={page} className={classes.Button}>
							{page}
						</button>
					);
			})}
			<button onClick={() => setPage(currentPage + 1)} disabled={currentPage === lastPage} className={classes.Button}>
				Next
			</button>
		</div>
	);
};

export default PaginationButtons;
