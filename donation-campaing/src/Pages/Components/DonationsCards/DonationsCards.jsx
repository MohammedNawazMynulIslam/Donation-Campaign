import swal from "sweetalert";

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
  const handleDonation = () => {
    const addedDonationArray = [];

    const donatedCard = JSON.parse(localStorage.getItem("donation"));

    if (!donatedCard) {
      addedDonationArray.push(donationCard);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));

      swal("You have donated");
    } else {
      const isExits = donatedCard.find(
        (donationCard) => donationCard.id === id
      );
      console.log(isExits);

      addedDonationArray.push(...donatedCard, donationCard);
      localStorage.setItem("donation", JSON.stringify(addedDonationArray));

      swal("You have donated");
    }
  };

  return (
    <div>
      <div
        className="card w-[312px] h-[194px]  card-compact"
        style={cardStyle}
        onClick={handleDonation}
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
    </div>
  );
};

export default DonationsCards;
