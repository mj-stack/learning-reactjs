import { useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <div>
        Fetch done: {fetchStatus.fetchDone}
        Currently fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
