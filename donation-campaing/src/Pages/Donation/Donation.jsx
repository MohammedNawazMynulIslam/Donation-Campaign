import { useEffect, useState } from "react";
import DonationSectionCard from "../Components/DonationsCards/DonationSection/DonationSectionCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const [ShowMore, setShowMore] = useState(false);

  useEffect(() => {
    const donatedCard = JSON.parse(localStorage.getItem("donation"));
    if (donatedCard) setDonation(donatedCard);
    else {
      setNoDataFound("No Data Found");
    }
  }, []);

  return (
    <div>
      {noDataFound ? (
        <p className="h-[50vh] flex justify-center items-center">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {ShowMore
              ? donation.map((card) => (
                  <DonationSectionCard
                    key={card.id}
                    card={card}
                  ></DonationSectionCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((card) => (
                    <DonationSectionCard
                      key={card.id}
                      card={card}
                    ></DonationSectionCard>
                  ))}
          </div>
        </div>
      )}
      <div className="text-center mt-5">
        {donation.length > 4 && (
          <button
            onClick={() => setShowMore(!ShowMore)}
            className="btn btn-accent text-white"
          >
            {ShowMore ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
