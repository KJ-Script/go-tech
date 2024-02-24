import HomeImg from '../assets/home.png'
import About from "../components/about";


const Home = () => {
  return (
    <>
      <div className="flex flex-row font-sans">
        <div className="flex-1 w-1/2 m-10">
          <h1 className="text-4xl pl-20 mb-4 mt-20 font-bold">
            Go Inventory
          </h1>
          <h2 className="pl-20 pr-20 text-xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            aperiam laboriosam, reprehenderit deserunt.
          </h2>
          <p className="pl-20 pr-20 mt-4 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fugiat officiis enim cupiditate fugit ullam quae, sapiente tempora
            eum ab unde laudantium, placeat mollitia, ad incidunt nihil libero 
            quidem deserunt.
          </p>

          <button className="justify-center ml-20 pl-5 pr-5 text-white hover:text-white p-4  bg-[#F07B52] hover:bg-[#E5563C] rounded-xl mt-10 cursor-pointer duration-300">
            Get Started
          </button>
        </div>
        <div className="flex-2 w-1/2 mt-20">
          <h2>
          <img src={HomeImg} alt="logo" className="ml-8" />
           
          </h2>
        </div>
      </div>
       <div>
          <About />
          </div>
          
    </>
  );
};

export default Home;
