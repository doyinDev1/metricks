import axios from 'axios';
import { useQuery } from 'react-query';
import { Config } from '../Config/Config';

// Handle all API fetch here

// FETCH GITHUB API
export const FetchGitHub = (page) => {
	const FetchGitHubStats = async () => {
		try {
			const { data } = await axios.get(`${Config.url.API_URL}&page=${page}`);
			return data;
		} catch (error) {
			return {
				errorRes:
					error.response && error.response.data.message
						? error.response.data.message
						: "error message",
			};
		}
	};

	const { status, data, isFetching, error } = useQuery(
		['gitHubStats', page],
		() => FetchGitHubStats(),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	);
	return { status, data, isFetching, error };
}