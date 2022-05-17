import Card from "reactstrap/lib/Card";
import { TabContent, TabPane, Table } from "reactstrap";
import React, { useState, useEffect } from "react";
import WrapperCustomScrollbar from "components/custom/WrapperCustomScrollbar";
import CustomScrollbar from "components/custom/CustomScrollbar";

const TableSuggestionContract = (props) => {
  const { listSC } = props;
  console.log(listSC)
  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="overflow-hidden mt-2" style={{ height: 400, width: "100%" }}>
        <div style={{ height: 400, width: "100%" }}>
          <WrapperCustomScrollbar
            onCurrentPosition={(value) => {
              setCurrentPos(value);
            }}
            thumbSize={30}
          >
            <TabContent
              style={{ width: 1500 }}
              className="py-50 mt-2"
              activeTab={"1"}
            >
              <TabPane style={{ width: 1500 }} tabId="1">
                <Card
                  className="pt-0"
                  style={{ border: "1px solid #d8d6de", width: 1500 }}
                >
                  <Table
                    style={{ width: 1500 }}
                    className="table border-bottom"
                  >
                    <thead>
                      <tr>
                        <th className="text-center px-2 align-middle py-2">
                          RANK
                        </th>
                        <th className="text-center px-2 align-middle py-2">
                          PEEK
                        </th>
                        <th className="text-center align-middle py-2">
                          NAME
                        </th>
                        <th className="text-center align-middle py-2">
                          ARTIST
                        </th>
                        <th className="text-center align-middle py-2">LISTENER</th>
                        <th className="text-center align-middle py-2">
                          MBID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listSC.length && listSC.map((item, index) => {
                        return (
                          <tr key={item.id}>
                            <td style={{ textAlign: "center" }}>
                              {index + 1}
                            </td>
                            <td style={{ textAlign: "center" }}>
                            <img
                              src="https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"
                              alt='avatarImg'
                              height={32}
                              width={32}
                            />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <a href={item.url}>
                              {item.name}
                              </a>
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {item.artist.name || item.artist}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {item.listeners}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {item.mbid}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card>
              </TabPane>
            </TabContent>
          </WrapperCustomScrollbar>
        </div>
      </div>
      <CustomScrollbar currentPos={currentPos} />
      {/* <PaginateSC /> */}
    </React.Fragment>
  );
};

export default React.memo(TableSuggestionContract);
