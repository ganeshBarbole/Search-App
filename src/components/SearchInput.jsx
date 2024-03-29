import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    
    const {query} = useParams()
    const[searchQuery , setSearchQuery] = useState(query || "")
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if(event.key == "Enter" && searchQuery.length > 0){
            navigate(`/${searchQuery}/${1}`)
        }
    }

    return (
        <div 
         id="searchBox" 
         className="h-[46px] w-full md:w-[584px] gap-3 rounded-3xl px-4 flex items-center border border-[#dfe1e5]
                     hover:bg-white hover:border-0 hover:shadow-c focus-within:border-0 focus-within:shadow-c">
            <AiOutlineSearch size={18} color="#9aa0a6"/>
            <input 
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                autoFocus
                className="grow outline-0 text-black/[0.87]"
            />
            <div className="flex items-center gap-3">
                {searchQuery && (
                    <IoMdClose
                          size={24} 
                          color="#70757a"
                          className="cursor-pointer"
                          onClick={()=>setSearchQuery("")}
                    />
                )}
                <img className="h-9 w-9 cursor-pointer" src={MicIcon}/>
                <img className="h-9 w-9 cursor-pointer" src={ImageIcon}/>
            </div>
         </div>
    );
};

export default SearchInput;
