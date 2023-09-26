import logo from "../../assets/image/Logo.png";

const Logo = () => {
  return (
    <div>
      <img
        className="w-[100px] md:w-[150px] lg:w-[200px]"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
