import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="flex h-[100vh] flex-col">
            <HomeHeader/>
            <main className="flex grow justify-center">
               <div className="flex flex-col px-5 mt-44 items-center w-full">
                 <img className="w-[172px] md:w-[272px] mb-8" src={Logo}/>
                 <SearchInput/>
                 <div className="flex gap-2 mt-8 text-[#3c4043]">
                    <button className="h-9 px-4 border text-sm rounded-md bg-[#f8f9fa] border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                        Google Search
                    </button>
                    <button className="h-9 px-4 border text-sm rounded-md bg-[#f8f9fa] border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                        I'm Feeling Lucky
                    </button>
                 </div>
                </div> 
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
