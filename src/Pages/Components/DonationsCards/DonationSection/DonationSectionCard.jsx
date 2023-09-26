const DonationSectionCard = ({ card }) => {
  const {
    id,
    picture,
    category,
    description,
    category_bg,
    card_bg,
    text_button_bg,
    price,
  } = card;
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="card card-side w-[648px] h-[250px]" style={cardStyle}>
        <figure>
          <img src={picture} />
        </figure>
        <div className="card-body">
          <small>
            <span className="" style={titleStyle}>
              {category}{" "}
            </span>
          </small>
          <h2 className="card-title">{description}</h2>
          <p className="" style={textColor}>
            ${price}
          </p>

          <button
            className="btn text-white w-[141px] h-[40px] px-[9px] py-[16px]"
            style={cardStyle}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationSectionCard;
