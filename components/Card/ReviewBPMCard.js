import { Row, Col } from "reactstrap";
import { useState } from "react";
import { Table } from "reactstrap";
import { ArrowRight } from "react-feather";
import { Card } from "reactstrap";
import Badge from "reactstrap/lib/Badge";
import Link from "next/link";

const ReviewBPM = (datas) => {
  return (
    <Card>
      <Row>
        <Col sm="12" md="8">
          <h4 className="font-weight-bolder m-sm-2 m-md-3">
            Top Tracks of This Week
          </h4>
        </Col>
        <Col sm="12" md="4">
          <Link href="/top_tracks">
            <a>
              <h6 className=" m-sm-3 m-md-3">
                <t className="viewDetailsText">See More</t>{" "}
                <ArrowRight size="18px" />
              </h6>
            </a>
          </Link>
        </Col>
      </Row>
      <Table responsive className="table border-bottom">
        <thead>
          <tr>
            <th className="text-center px-2 align-middle">RANK</th>
            <th className="text-center px-2 align-middle">NAME</th>
            <th className="text-center align-middle">ARTIST</th>
            <th className="text-center align-middle">LISTENERS</th>
          </tr>
        </thead>
        <tbody>
          {datas &&
            datas.datas.map((item, index) => {
              return (
                <>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <Badge
                        color="light-primary"
                        style={{ borderRadius: "18px" }}
                      >
                        Trending {index+1}
                      </Badge>
                    </td>
                    <td style={{ textAlign: "center" }}>{item.name}</td>
                    <td style={{ textAlign: "center" }}>{item.artist.name}</td>
                    <td style={{ textAlign: "center" }}>{item.listeners}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
      <Row className="mx-0 ml-2 mb-2" style={{ marginTop: "67px" }}>
        <Col
          className="d-flex align-items-center justify-content-start mt-1"
          md="7"
          sm="12"
        ></Col>
      </Row>
    </Card>
  );
};

export default ReviewBPM;
