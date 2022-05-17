import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import {
  actionSetFilterListTrack,
  actionErrorListTrack,
  actionSetListTracks,
  actionLoadListTrack,
} from "store/actions/listTrack";
import {
    actionSetFilterListAlbum,
    actionErrorListAlbum,
    actionSetListAlbum,
    actionLoadListAlbum
} from "store/actions/listAlbum";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const errorNotification = () => {
  return MySwal.fire({
    position: "center",
    html: (
      <ErrorNotification
        title={"Error"}
        description={
          "Sistem sedang dalam gangguan, mohon maaf atas ketidaknyamannya"
        }
        onClose={() => MySwal.close()}
        onConfirm={() => MySwal.close()}
      />
    ),
    showDenyButton: false,
    showCancelButton: false,
    showConfirmButton: false,
    padding: "0",
  });
};

export const searchFilterListTrack = (keyword = "", page = "1") => {
  return async (dispatch, getState) => {
    const oldState = getState().listTrack.filter;
    const keywords = oldState.keyword;
    const pages = oldState.page;
    console.log(pages)
    try {
      dispatch(actionLoadListTrack());
      {
        keywords != ""
          ? axios({
              method: "get",
              url:
                "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" +
                keywords +
                "&limit=500&api_key=d9721bceacaa63110cb6f3a0b2eb5543&format=json",
            })
              .then(function (response) {
                dispatch(
                  actionSetFilterListTrack({
                    keyword: oldState?.keyword ?? "",
                    page: oldState?.page ?? "1",
                    totalData: oldState?.total ?? "0",
                    totalPage: oldState?.totalPages ?? "1",
                    perPage: oldState?.perPage ?? "0",
                  })
                );
                dispatch(
                  actionSetListTracks(response.data.results.trackmatches.track)
                );
              })
              .catch(function (error) {
                dispatch(actionErrorListTrack(error.message));
                errorNotification();
              })
          : axios({
              method: "get",
              url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&limit=1000&api_key=d9721bceacaa63110cb6f3a0b2eb5543&format=json",
            })
              .then(function (response) {
                dispatch(
                  actionSetFilterListTrack({
                    keyword: oldState?.keyword ?? "",
                    page: pages,
                    totalData: oldState?.total ?? "90",
                    totalPage: oldState?.totalPages ?? "1",
                    perPage: oldState?.perPage ?? "0",
                  })
                );
                dispatch(
                  actionSetListTracks(response.data.tracks.track)
                );
              })
              .catch(function (error) {
                dispatch(actionErrorListTrack(error.message));
                errorNotification();
              });
      }
    } catch (error) {
      dispatch(actionErrorListTrack(error.message));
      errorNotification();
    }
  };
};
