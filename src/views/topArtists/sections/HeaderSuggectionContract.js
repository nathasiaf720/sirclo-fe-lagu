import React from "react";
import Breadcrumbs from "components/custom/BreadcrumbCustom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UtilitySuggestionContract from './UtilitySuggestionContract';

const MySwal = withReactContent(Swal);

const HeaderSuggestionContract = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Chart"
        breadCrumbParent=""
        breadCrumbActive="Top Artists"
      />
      <UtilitySuggestionContract />
    </React.Fragment>
  );
};

export default React.memo(HeaderSuggestionContract);
