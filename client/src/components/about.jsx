import firstImage from '../assets/globe.png';
import secondImage from '../assets/forklift.png';

const About = () => {
    return ( 
        <section className="bg-[#F4F3F3] flex flex-col justify-center items-center  text-white h-screen">
            <div className="h-1/3 w-full flex flex-row bg-[#F4F3F3] justify-center items-center">
            <img src={firstImage} alt="logo" className="w-60 mr-28" />
            <p className="text-black container text-justify text-align-left space-x-16 w-1/3  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque veritatis, distinctio dolor dignissimos aliquid voluptatum magnam dolore temporibus inventore consequuntur necessitatibus, alias, ullam sapiente tenetur vero! Libero, perferendis in!
            </p>
            </div>
            <div className="h-1/3 w-full   bg-white flex flex-col justify-center items-center">
                <h1 className="text-black">hello</h1>
            </div>
            <div className=" h-1/3 w-full   bg-[#F4F3F3] flex flex-row justify-center items-center">
            <p className="text-black container text-justify text-align-left space-x-16 w-1/3  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque veritatis, distinctio dolor dignissimos aliquid voluptatum magnam dolore temporibus inventore consequuntur necessitatibus, alias, ullam sapiente tenetur vero! Libero, perferendis in!
            </p>
            <img src={secondImage} alt="logo" className="w-60 ml-28" />
            </div>
        </section>
     );
}
 
export default About;