import React from "react";
import { X } from "react-feather";
import Avatar from "src/@core/components/avatar";
import WrapperCustomScrollbar from "components/custom/WrapperCustomScrollbar";

const ViewComments = () => {
  return (
    <React.Fragment>
      <div
        style={{ top: -300 }}
        className="bg-white position-absolute rounded col-10 col-md-12 p-0 m-0"
      >
        <div
          style={{ height: 28, width: 28, top: -14, right: -14 }}
          className="bg-white rounded d-flex justify-content-center align-items-center position-absolute"
        >
          <X className="text-muted" size={18} />
        </div>
        <div className="w-100 d-flex justify-content-start py-1 px-2 bg-success rounded">
          <span className="text-white">Comment Logs</span>
        </div>
        <div
          style={{ height: 460 }}
          className="d-flex flex-column justify-content-start pl-2 pb-2 pt-2"
        >
          <WrapperCustomScrollbar
            className=""
            onCurrentPosition={() => {}}
            thumbSize={30}
          >
            <div className="row px-1 border-bottom mb-2">
              <div className="col-2">
                <Avatar
                  img="/images/portrait/small/avatar-s-11.jpg"
                  imgHeight="40"
                  imgWidth="40"
                  status="online"
                />
              </div>
              <div className="pl-1 d-flex flex-column justify-content-start align-items-start col-10">
                <div className="">
                  <small className="font-weight-bold">Chad Alexander</small>
                </div>
                <div className="">
                  <small className="">May 24, 2020</small>
                </div>
                <div className="mt-1">
                  <p style={{ fontSize: 12 }} className="text-left">
                    A variation on the question technique above, the
                    multiple-choice question great way to engage your reader.
                  </p>
                </div>
              </div>
            </div>
            <div className="row px-1 border-bottom mb-2">
              <div className="col-2">
                <Avatar
                  img="/images/portrait/small/avatar-s-11.jpg"
                  imgHeight="40"
                  imgWidth="40"
                  status="online"
                />
              </div>
              <div className="pl-1 d-flex flex-column justify-content-start align-items-start col-10">
                <div className="">
                  <small className="font-weight-bold">Chad Alexander</small>
                </div>
                <div className="">
                  <small className="">May 24, 2020</small>
                </div>
                <div className="mt-1">
                  <p style={{ fontSize: 12 }} className="text-left">
                    A variation on the question technique above, the
                    multiple-choice question great way to engage your reader.
                  </p>
                </div>
              </div>
            </div>
            <div className="row px-1 border-bottom mb-2">
              <div className="col-2">
                <Avatar
                  img="/images/portrait/small/avatar-s-11.jpg"
                  imgHeight="40"
                  imgWidth="40"
                  status="online"
                />
              </div>
              <div className="pl-1 d-flex flex-column justify-content-start align-items-start col-10">
                <div className="">
                  <small className="font-weight-bold">Chad Alexander</small>
                </div>
                <div className="">
                  <small className="">May 24, 2020</small>
                </div>
                <div className="mt-1">
                  <p style={{ fontSize: 12 }} className="text-left">
                    A variation on the question technique above, the
                    multiple-choice question great way to engage your reader.
                  </p>
                </div>
              </div>
            </div>
            <div className="row px-1 border-bottom mb-2">
              <div className="col-2">
                <Avatar
                  img="/images/portrait/small/avatar-s-11.jpg"
                  imgHeight="40"
                  imgWidth="40"
                  status="online"
                />
              </div>
              <div className="pl-1 d-flex flex-column justify-content-start align-items-start col-10">
                <div className="">
                  <small className="font-weight-bold">Chad Alexander</small>
                </div>
                <div className="">
                  <small className="">May 24, 2020</small>
                </div>
                <div className="mt-1">
                  <p style={{ fontSize: 12 }} className="text-left">
                    A variation on the question technique above, the
                    multiple-choice question great way to engage your reader.
                  </p>
                </div>
              </div>
            </div>
            <div className="row px-1 border-bottom mb-2">
              <div className="col-2">
                <Avatar
                  img="/images/portrait/small/avatar-s-11.jpg"
                  imgHeight="40"
                  imgWidth="40"
                  status="online"
                />
              </div>
              <div className="pl-1 d-flex flex-column justify-content-start align-items-start col-10">
                <div className="">
                  <small className="font-weight-bold">Chad Alexander</small>
                </div>
                <div className="">
                  <small className="">May 24, 2020</small>
                </div>
                <div className="mt-1">
                  <p style={{ fontSize: 12 }} className="text-left">
                    A variation on the question technique above, the
                    multiple-choice question great way to engage your reader.
                  </p>
                </div>
              </div>
            </div>
          </WrapperCustomScrollbar>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewComments;
