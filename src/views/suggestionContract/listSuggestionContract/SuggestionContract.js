import React from "react";
import TableSuggestionContract from "./sections/TableSuggestionContract";
import HeaderSuggestionContract from "./sections/HeaderSuggectionContract";
import BasicSkeleton from "components/Skeleton/BasicSkeleton";
import { useSelector } from "react-redux";

const SuggestionContract = () => {
  const stateRedux = useSelector((state) => state.listSC);
  const trackRedux = useSelector((state) => state.listTrack);

  return (
    <React.Fragment>
      <HeaderSuggestionContract />
      {trackRedux.response != null && (
        <TableSuggestionContract listSC={trackRedux.response} />
      )}
      {trackRedux.response == null && <BasicSkeleton />}
    </React.Fragment>
  );
};

export default React.memo(SuggestionContract);
