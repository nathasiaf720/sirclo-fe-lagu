import React, { useState, useEffect, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import classNames from "classnames";
import Proptypes from "prop-types";

const WrapperCustomScrollbar = (props) => {
  const { onCurrentPosition } = props;

  const vertTrackWidthChosen = "16px"; // Original is 6px
  const horzTrackHeightChosen = "16px"; // Original is 6px

  const [isSelectable, setIsSelectable] = useState(true);
  const [isScrollable, setIsScrollable] = useState(false);

  const scrollbars = useRef();

  const [init, setInit] = useState(false);

  useEffect(() => {
    const values = scrollbars.current.getValues();
    if (values?.scrollHeight > values?.clientHeight) setIsScrollable(true);
  }, [init]);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <Scrollbars
      ref={scrollbars}
      hideTracksWhenNotNeeded={false}
      onScrollStart={() => setIsSelectable(false)}
      onScrollStop={() => setIsSelectable(true)}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{ height: 20, width: 20 }}
          className="bg-danger rounded-circle"
        ></div>
      )}
      onScroll={() => {
        // console.log("onScroll:", value);
      }}
      onScrollFrame={() => {
        // console.log("onScrollFrame:", value);
      }}
      onUpdate={(value) => {
        const currentPosition =
          ((value.clientWidth + value.scrollLeft) / value.scrollWidth) * 100;
        onCurrentPosition(currentPosition);
      }}
      renderThumbHorizontal={() => (
        <div
          style={{ height: 20, width: 20 }}
          className="bg-danger rounded-circle"
        ></div>
      )}
      autoHide={false}
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight
      autoHeightMin={400}
      autoHeightMax={400}
      thumbMinSize={30}
      universal={true}
      renderView={({ style, ...props }) => {
        return (
          <div
            className={classNames("", {
              "pr-4": isScrollable,
            })}
            style={style}
            {...props}
          />
        );
      }}
      renderTrackHorizontal={({ style, ...props }) => {
        return (
          <div
            {...props}
            className=""
            style={{ ...style, height: horzTrackHeightChosen }}
          />
        );
      }}
      renderTrackVertical={({ style, ...props }) => {
        return (
          <div
            {...props}
            className=""
            style={{ ...style, width: vertTrackWidthChosen }}
          />
        );
      }}
    >
      <div
        className={classNames("", {
          "pointer-events-none": !isSelectable,
        })}
      >
        {props.children}
      </div>
    </Scrollbars>
  );
};

export default WrapperCustomScrollbar;

// ** PropTypes
WrapperCustomScrollbar.propTypes = {
  onCurrentPosition: Proptypes.func.isRequired,
};
