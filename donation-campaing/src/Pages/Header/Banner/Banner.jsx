const Banner = ({ handleSubmit }) => {
  return (
    <div className="mt-32 ">
      <h1 className="text-center text-2xl md:mt-64 lg:text-5xl font-bold color-[#0B0B0B] mb-10">
        I Grow By Helping People In Need
      </h1>

      <div className="lg:text-center ">
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            className="w-[200px] lg:w-[400px] h-12 rounded-lg px-5 border border-[#DEDEDE] mb-2 md:mb-0"
            type="text"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="md:w-[100px] lg:w-[110px] h-12 bg-[#FF444A] text-white rounded-r-lg text-center"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
