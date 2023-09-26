import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationSection = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const selectedCards = useLoaderData();

  useEffect(() => {
    const findCard = selectedCards?.find((Carded) => Carded.id === id);
    setCard(findCard);
  }, [id, selectedCards]);

  return <div> </div>;
};

export default DonationSection;
