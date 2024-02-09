import { TbGridDots } from "react-icons/tb";


import ProfileRing from "../assets/profile-ring.svg";
import boy from '../assets/boy.png'

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
                <TbGridDots size={20} color="5f6368"/>
            </span>
            <span className="h-10 w-10 flex justify-center items-center relative">
                <img className="absolute" src={ProfileRing} />
                <span className="h-9 w-9 rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src={boy}/>
                </span>
            </span>
        </div>
    );
};

export default ProfileIcon;
