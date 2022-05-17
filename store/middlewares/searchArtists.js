import axios from "axios";
import ErrorNotification from "components/Alert/ErrorNotification";
import {
    actionSetFilterListArtist,
    actionErrorListArtist,
    actionSetListArtist,
    actionLoadListArtist
} from "store/actions/listArtist";
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

export const searchFilterListArtists = (keyword = "", page = "1") => {
  return async (dispatch, getState) => {
    const oldState = getState().listArtist.filter;
    const keywords = oldState.keyword;
    const pages = oldState.page;
    console.log(oldState)
    try {
      dispatch(actionLoadListArtist());
      {
        keywords != ""
          ? axios({
              method: "get",
              url:
                "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" +
                keywords +
                "&limit=500&api_key=d9721bceacaa63110cb6f3a0b2eb5543&format=json",
            })
              .then(function (response) {
                dispatch(
                  actionSetFilterListArtist({
                    keyword: oldState?.keyword ?? "",
                    page: oldState?.page ?? "1",
                    totalData: oldState?.total ?? "0",
                    totalPage: oldState?.totalPages ?? "1",
                    perPage: oldState?.perPage ?? "0",
                  })
                );
                dispatch(
                  actionSetListArtist(response.data.results.artistmatches.artist)
                );
              })
              .catch(function (error) {
                dispatch(actionErrorListArtist(error.message));
                errorNotification();
              })
          : axios({
              method: "get",
              url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=500&api_key=d9721bceacaa63110cb6f3a0b2eb5543&format=json",
            })
              .then(function (response) {
                dispatch(
                  actionSetFilterListArtist({
                    keyword: oldState?.keyword ?? "",
                    page: pages,
                    totalData: oldState?.total ?? "90",
                    totalPage: oldState?.totalPages ?? "1",
                    perPage: oldState?.perPage ?? "0",
                  })
                );
                dispatch(
                  actionSetListArtist(response.data.artists.artist)
                );
              })
              .catch(function (error) {
                dispatch(actionErrorListArtist(error.message));
                errorNotification();
              });
      }
    } catch (error) {
      dispatch(actionErrorListArtist(error.message));
      errorNotification();
    }
  };
};
