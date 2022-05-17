import { Col, Row } from "reactstrap";
import VerticalLayout from "src/@core/layouts/VerticalLayout";
import StatisticCard from "components/Card/StatisticCard";
import WelcomeCard from "components/Card/WelcomeCard";
import ReviewBPMCard from "components/Card/ReviewBPMCard";

const Home = (props) => {
  const {trackDatas, artistDatas} = props;

  return (
    <VerticalLayout>
      <Row>
        <Col lg="3">
          <WelcomeCard />
        </Col>
        <Col>
          <StatisticCard cols="1" datas={artistDatas}/>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="8" xl="9">
          <ReviewBPMCard datas={trackDatas}/>
        </Col>
      </Row>
    </VerticalLayout>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const { res } = context;

  const responseTopArtist = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=5&api_key=d9721bceacaa63110cb6f3a0b2eb5543&format=json`
  );
  const dataArtist = await responseTopArtist.json();
  const artistDatas = dataArtist.artists.artist;
  
  const responseTrack = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=3&api_key=d9721bceacaa63110cb6f3a0b2eb5543&format=json`
  );
  const dataTracks = await responseTrack.json();
  const trackDatas = dataTracks.tracks.track;

  return {
    props: {
      trackDatas: trackDatas,
      artistDatas: artistDatas,
    },
  };
}
