const Banner = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center text-5xl font-bold color-[#0B0B0B]  mb-10">
        I Grow By Helping People In Need
      </h1>
      <div className="text-center">
        <input
          className="w-[400px] h-12 rounded-lg px-5 border border-[#DEDEDE]"
          type="text"
          placeholder="Search here..."
        ></input>
        <button className="w-[110px] h-12 bg-[#FF444A] text-white -ml-10 rounded-r-lg text-center ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
