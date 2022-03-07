import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResultsStart } from "../../../lib/redux/search/search.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchResultsStart({ filters: {} }));
  }, []);
  return (
    <>
      <h2>DASHBOARD</h2> <div>30% of Approvals</div>
    </>
  );
};

export default HomePage;
