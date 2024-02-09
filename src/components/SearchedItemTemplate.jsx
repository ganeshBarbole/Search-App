

const SearchedItemTemplate = ({data}) => {
    function createMarkup(html) {
        return {__html: html};
      }
    return <div className="flex flex-col py-3 max-w-[700px]">
        <div className="group cursor-pointer" onClick={() => window.open(data.link)}>
            <div className="text-sm truncate text-[#202124]">{data.formattedUrl}</div>
            <div className="group-hover:underline text-xl pt-2 text-[#1a0dab]">{data.title}</div>
        </div>
        <div className="text-sm pt-1 leading-6 text-[#4d5156]" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}/>
    </div>;
};

export default SearchedItemTemplate;
