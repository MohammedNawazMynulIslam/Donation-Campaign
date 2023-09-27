import { useLoaderData } from "react-router-dom";
import DonationsCards from "../Components/DonationsCards/DonationsCards";
import Banner from "../Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const donationCards = useLoaderData();
  console.log(donationCards);

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchCard = e.target.elements.search.value;
    setSearch(searchCard);
  };

  const filterCategory = donationCards.filter((card) =>
    card.category.includes(search)
  );

  return (
    <div>
      <div className="container mx-auto relative -mt-44">
        <img
          src="https://i.ibb.co/gFdt8Qm/Rectangle-4281.png"
          style={{ opacity: 0.1 }}
          alt="Background"
        />
      </div>
      <div className="relative -mt-[500px]">
        <Banner handleSubmit={handleSubmit}></Banner>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[300px] gap-6 container mx-auto">
          {(search !== "" ? filterCategory : donationCards).map((card) => (
            <DonationsCards key={card.id} donationCard={card}></DonationsCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
