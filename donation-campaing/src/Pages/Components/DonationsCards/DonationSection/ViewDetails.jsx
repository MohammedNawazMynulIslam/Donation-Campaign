const ViewDetails = ({ card }) => {
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
    background: text_button_bg,
  };
  return (
    <div>
      <div className="relative">
        <p>
          <img className="w-[1320px] h-[700px]" src={picture} alt="" />
        </p>
        <button
          className="inline-flex p-5 justify-center items-center gap-2  rounded-md text-white -mt-28 absolute ml-10"
          style={cardStyle}
        >
          Donate ${price}
        </button>
        <div
          className="w-[1320px] h-[130px] bg-black absolute -mt-32"
          style={{ opacity: 0.5 }}
        ></div>
      </div>
      <p className="text-[#0B0B0B] font-bold text-4xl my-12">{category}</p>
      <p>
        There are many things that can be done to ensure that all people have
        access to a good education. Governments can invest in public schools,
        provide financial assistance to students, and make sure that all schools
        have qualified teachers and resources. Families can support their
        children's education by creating a learning environment at home and
        helping them with their schoolwork. Teachers can create a positive and
        supportive learning environment for their students and challenge them to
        reach their full potential.
      </p>
    </div>
  );
};

export default ViewDetails;
