import { Link } from "react-router-dom";

const DonationsCards = ({ donationCard }) => {
  const {
    id,
    picture,
    category,
    description,
    category_bg,
    card_bg,
    text_button_bg,
  } = donationCard;
  const cardStyle = {
    background: card_bg,
  };
  const titleStyle = {
    color: category_bg,
  };
  const textColor = {
    color: text_button_bg,
  };

  return (
    <div>
      <Link to={`/donationsection/${id}`}>
        <div
          className="card w-[312px] h-[194px]  card-compact"
          style={cardStyle}
        >
          <figure>
            <img src={picture} />
          </figure>
          <div className="card-body">
            <h2 className="card-title" style={titleStyle}>
              {category}
            </h2>
            <p className="" style={textColor}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCards;
