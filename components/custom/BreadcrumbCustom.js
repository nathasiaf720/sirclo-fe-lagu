// ** Third Party Components
import Proptypes from "prop-types";
import { Home } from "react-feather";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import React from "react";

const BreadCrumbs = (props) => {
  // ** Props
  const {
    breadCrumbTitle,
    breadCrumbParent,
    breadCrumbParent2,
    breadCrumbParent3,
    breadCrumbActive,
    showTitle = true,
  } = props;

  return (
    <div className="content-header row">
      <div
        style={{ marginLeft: -5 }}
        className="content-header-left col-md-9 col-12 mb-0"
      >
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <Breadcrumb style={{ marginLeft: -8 }}>
              <BreadcrumbItem tag="li">
                <Home size={14} className="text-danger" />
              </BreadcrumbItem>
              <BreadcrumbItem tag="li" className="text-danger">
                {breadCrumbTitle}
              </BreadcrumbItem>
              {breadCrumbParent.length > 0 && (
                <BreadcrumbItem tag="li" className="text-danger">
                  {breadCrumbParent}
                </BreadcrumbItem>
              )}
              {breadCrumbParent2 ? (
                <BreadcrumbItem tag="li" className="text-danger">
                  {breadCrumbParent2}
                </BreadcrumbItem>
              ) : (
                ""
              )}
              {breadCrumbParent3 ? (
                <BreadcrumbItem tag="li" className="text-danger">
                  {breadCrumbParent3}
                </BreadcrumbItem>
              ) : (
                ""
              )}
              <BreadcrumbItem tag="li" active>
                {breadCrumbActive}
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          {showTitle && <h3 className="ml-2 mt-1">{breadCrumbActive}</h3>}
        </div>
      </div>
    </div>
  );
};
export default React.memo(BreadCrumbs);

// ** PropTypes
BreadCrumbs.propTypes = {
  breadCrumbTitle: Proptypes.string.isRequired,
  breadCrumbActive: Proptypes.string.isRequired,
};
