import "./SearchResult.css";

const modeColors = {
  recycle: "bg-[#D5FAFF]",
  compost: "bg-[#A18276]",
  landfill: "bg-[#4B6858]",
};

export const SearchResult = ({ result }) => {
  const modeClass = modeColors[result.mode.toLowerCase()] || "bg-gray-200";

  return (
    <div className={`search-result ${modeClass} p-6 rounded-2xl shadow-lg mb-5 transition-all duration-300 hover:shadow-xl hover:scale-105`}>
      <div className="user-info">
        <div className="user-details">
          <div className="user-specific">
            <h1 className="text-2xl font-bold">{result.object}</h1>
            <p><strong>Location: </strong>{result.location}</p>
            <p><strong>Mode: </strong>{result.mode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
