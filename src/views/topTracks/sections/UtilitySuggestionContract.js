import React, { useState } from "react";
import { Row, Col, Spinner } from "reactstrap";
import { Input, Label, CustomInput, Button } from "reactstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { searchFilterListTrack } from "store/middlewares/searchTracks";
import { actionSetFilterListTrack } from "store/actions/listTrack";

const MySwal = withReactContent(Swal);

const UtilitySuggestionContract = () => {
  const trackFilter = useSelector((state) => state.listTrack.filter);
  const dispatch = useDispatch();

  const searchListSC = () => {
    dispatch(
      searchFilterListTrack(
        trackFilter?.keyword ?? "",
        trackFilter?.page ?? "1"
      )
    );
  };

  return (
    <React.Fragment>
      <Row>
        <Col xl="6" md="6" sm="6">
          <Row>
            <Col xl="6" md="6" sm="6">
              <Input
                className="search-table2"
                type="text"
                name="search"
                id="search-invoice"
                placeholder="Search for track"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    searchListSC();
                  }
                }}
                onChange={(e) => {
                  dispatch(
                    actionSetFilterListTrack({
                      totalShow: "10",
                      keyword: e.target.value,
                      page: trackFilter?.page ?? "1",
                      totalData: trackFilter?.total ?? "0",
                      totalPage: trackFilter?.totalPages ?? "1",
                      perPage: trackFilter?.perPage ?? "0",
                    })
                  );
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default React.memo(UtilitySuggestionContract);
