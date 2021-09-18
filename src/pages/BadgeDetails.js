import React from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}
//Lo declaramos asi por que solo presentara informacion, no necesitamos ningún cambio del estado
function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(10);

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {props.badge.firstName} {props.badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              email={props.badge.email}
              twitter={props.badge.twitter}
              jobTitle={props.badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase count: {count}
                </button>
                <Link
                  to={`/badges/${props.badge.id}/edit`}
                  className="btn btn-primary mb-4"
                >
                  Edit
                </Link>
              </div>
            </div>
            <button onClick={props.onOpenModal} className="btn btn-danger">
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
