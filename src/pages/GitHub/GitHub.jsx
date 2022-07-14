import React, { useState } from "react";
import GitHubCard from "../../components/GitHubCard/GitHubCard";
import { FetchGitHub } from "../../DataFetching/fetch";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";
import classes from "./GitHub.module.css";
const GitHub = () => {
  const [page, setPage] = useState(0);
  const {
    data: userSummaryData,
    status: userSummaryStatus,
    error: userSummaryError,
    isFetching: userSummaryFetching,
  } = FetchGitHub(page);

  return (
    <div>
      <>
        {userSummaryFetching === true ? (
          <CustomSpinner />
        ) : (
          userSummaryData?.items.map((github) => {
            return (
              <>
                <div key={github.name}>
                  <GitHubCard
                    name={github.name}
                    description={github.description}
                    stargazers_count={github.stargazers_count}
                    issues={github.open_issues}
                    owner={github.owner}
                    time={github.created_at}
                  />
                </div>
              </>
            );
          })
        )}
        <div className={classes.PaginatedButton}>
          <PaginationButtons
            lastPage={40}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      </>
    </div>
  );
};

export default GitHub;
