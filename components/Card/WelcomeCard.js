import { Music } from "react-feather";
import Avatar from "src/@core/components/avatar";
import { Card, CardBody } from "reactstrap";

const WelcomeCard = () => {
  return (
    <Card className="card-congratulations">
      <CardBody className="profileIcon">
        <Avatar
          icon={<Music size={28} />}
          className="shadow"
          color="primary"
          size="xl"
        />
        <div className="text-left">
          <h5 className="mb-1 text-white">Welcome To Last FM</h5>
          <h1 className="text-white">Nathasia Florentina</h1>
        </div>
      </CardBody>
    </Card>
  );
};

export default WelcomeCard;
