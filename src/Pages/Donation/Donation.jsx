import { useEffect, useState } from "react";
import DonationSectionCard from "../Components/DonationsCards/DonationSection/DonationSectionCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");

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
            {donation.map((card) => (
              <DonationSectionCard
                key={card.id}
                card={card}
              ></DonationSectionCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
