const SearchedImageItemTemplate = ({data}) => {
    return <div className="flex flex-col group py-3 cursor-pointer" onClick={() => window.open(data.image.contextLink)}>
        <div className="rounded-xl h-[100px] md:h-[120px] lg:h-[140px] overflow-hidden group-hover:shadow-c bg-black/[0.03]">
            <img src={data.link} className="h-full w-full object-cover" />
        </div>
        <div className="text-xs pt-2 text-[#70757a]">
            {data.displayLink}
        </div>
        <div className="text-sm truncate group-hover:underline pt-1 text-[#3c4043]">
            {data.title}
        </div>
    </div>;
};

export default SearchedImageItemTemplate;
