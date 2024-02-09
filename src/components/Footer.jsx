import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return (
        <div className="#f2f2f2">
            <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0]">
                <span className="leading-none text-[15px] text-[#70767a]">
                    Bharat
                </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]">
                <div className="flex justify-center">
                    {quickLinks.map((menu,index) => (
                           <span key={index} className="text-[12px] md:text-[14px] text-[#70757a] p-[10px] md:p-[15px] leading-none">
                            {menu}
                           </span>
                    ))}
                </div>
                <div className="flex justify-center">
                    { settingMenu.map((menu,index) => ( 
                        <span key={index} className="text-[12px] md:text-[14px] text-[#70757a] leading-none p-[10px] md:p-[15px]">
                            {menu}
                        </span>
                    ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;
