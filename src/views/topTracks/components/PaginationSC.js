import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { actionSetFilterListSC } from "store/actions/suggestionContract/listSC";
import { searchFilterListSC } from "store/middlewares/searchFilterListSC";
import { actionSetFilterListTrack } from "store/actions/listTrack";
import { searchFilterListTrack } from "store/middlewares/searchTracks";

const PaginateSC = () => {
  const listSC = useSelector((state) => state.listSC.response);
  const listTrack = useSelector((state) => state.listTrack.response);
  const trackFilter = useSelector((state) => state.listTrack.filter);
  const stateFilter = useSelector((state) => state.listSC.filter);
  const dispatch = useDispatch();
  console.log(trackFilter)
  return (
    <Row className="mb-2 mt-3 justify-content-between align-items-center">
      <Col className="mb-2 mb-md-0" sm="12" md="5">
        <p
          className="mb-0 text-center text-md-left"
          style={{ color: "#b9b9c3" }}
        >
          Showing {((trackFilter?.page ?? 1) - 1) * 5 + 1} to{" "}
          {trackFilter.perPage} of{" "}
          {trackFilter?.totalData ?? 0} entries
        </p>
      </Col>
      <Col sm="12" md="5">
        <ReactPaginate
          onPageChange={(value) => {
            dispatch(
              actionSetFilterListTrack({
                totalShow: trackFilter?.perPage ?? "10",
                keyword: trackFilter?.keyword ?? "",
                page: (value.selected + 1).toString(),
                page: trackFilter?.page ?? "1",
                totalData: trackFilter?.total ?? "0",
                totalPage: trackFilter?.totalPages ?? "1",
                perPage: trackFilter?.perPage ?? "0",
              })
            );

            dispatch(
              searchFilterListTrack(
                trackFilter?.keyword ?? "",
                (value.selected + 1).toString()
              )
            );
          }}
          pageCount={trackFilter?.totalPage ?? 1}
          nextLabel={""}
          breakLabel={"..."}
          activeClassName={"active"}
          pageClassName={"page-item"}
          previousLabel={""}
          nextLinkClassName={"page-link"}
          nextClassName={"page-item next-item"}
          previousClassName={"page-item prev-item"}
          previousLinkClassName={"page-link"}
          pageLinkClassName={"page-link"}
          forcePage={0}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName={
            "pagination react-paginate m-0 justify-content-center justify-content-lg-end"
          }
        />
      </Col>
    </Row>
  );
};

export default PaginateSC;
