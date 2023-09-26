import { useLoaderData } from "react-router-dom";
import DonationsCards from "../Components/DonationsCards/DonationsCards";
import Banner from "../Header/Banner/Banner";

const Home = () => {
  const donationCards = useLoaderData();
  return (
    <div>
      <div>
        <div className="container mx-auto relative -mt-44">
          <img
            src="https://i.ibb.co/gFdt8Qm/Rectangle-4281.png"
            style={{ opacity: 0.1 }}
          />
        </div>
        <div className="relative -mt-[500px]">
          <Banner></Banner>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[300px] gap-6 container mx-auto">
        {donationCards.map((donationCard) => (
          <DonationsCards
            key={donationCard.id}
            donationCard={donationCard}
          ></DonationsCards>
        ))}
      </div>
    </div>
  );
};

export default Home;
