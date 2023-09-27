import { PieChart, Pie, Cell, Legend } from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistic = () => {
  const donationData = useLoaderData();
  const donationDataLength = donationData.length;

  const donatedCard = JSON.parse(localStorage.getItem("donation")) || [];
  const donatedCardLength = donatedCard.length;

  const totalDonations = donationDataLength;
  const yourDonations = donatedCardLength;
  const otherDonations = totalDonations - yourDonations;

  const pieChartData = [
    { name: "Your Donation", value: yourDonations },
    { name: "Total Donation", value: otherDonations },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const formatPercent = (value) => `${(value * 100).toFixed(2)}%`;

  return (
    <div>
      <PieChart width={500} height={500}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#8884d8"
          label={({ percent }) => `${name}  ${formatPercent(percent)}`}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistic;
