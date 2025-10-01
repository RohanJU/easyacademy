import { assets } from "../../assets/assets";
import Searchbar from "./SearchBar";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 
                 px-7 md:px-0 space-y-7 text-center bg-cover bg-center"
      style={{
        background: "linear-gradient(to right,#4b6cb7, #182848)",
      }}
    >
      <h1 className="md:text-4xl text-home-heading-small relative font-bold text-white max-w-3xl mx-auto">
        🎓 EasyAcademy – Education for All. Excellence for Life.
        <br />
        <span className="text-yellow-300">
          Doctors, Engineers, Coders — Every dream begins here.
        </span>
        <img
          src={assets.sketch}
          alt=""
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      <p className="md:block hidden text-white max-w-2xl mx-auto">
        Education is a right, not a privilege.
        <br />
        We’re making it accessible — to every student, everywhere, for free.
      </p>

      <p className="md:hidden text-white max-w-sm mx-auto">
        Education is a right, not a privilege.
        <br />
        We’re making it accessible
      </p>

      {/* 👇 Add margin so it doesn't stick to bottom */}
      <div className="mt-6 mb-30 w-full max-w-xl">
        <Searchbar />
      </div>
    </div>
  );
};

export default Hero;
