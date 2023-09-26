import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ViewDetails from "./ViewDetails";

const DonationSection = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const selectedCards = useLoaderData();

  useEffect(() => {
    const findCard = selectedCards?.find((Carded) => Carded.id === id);
    setCard(findCard);
  }, [id, selectedCards]);
  console.log(card);

  return (
    <div>
      <ViewDetails card={card}></ViewDetails>
    </div>
  );
};

export default DonationSection;
