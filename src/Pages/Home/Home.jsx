import { useLoaderData } from "react-router-dom";
import DonationsCards from "../Components/DonationsCards/DonationsCards";

const Home = () => {
  const donationCards = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-24 gap-6 container mx-auto">
      {donationCards.map((donationCard) => (
        <DonationsCards
          key={donationCard.id}
          donationCard={donationCard}
        ></DonationsCards>
      ))}
    </div>
  );
};

export default Home;
