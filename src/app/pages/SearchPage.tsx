import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Package, Recycle, Leaf, Trash2 } from 'lucide-react';

interface WasteItem {
  object: string;
  location: string;
  mode: string;
}

// Mode config: colors and icons matching the figma theme
const modeConfig: Record<string, { bg: string; border: string; badge: string; label: string; icon: React.ComponentType<{ className?: string }> }> = {
  recycle: {
    bg: '#f0ead2',
    border: '#adc178',
    badge: '#adc178',
    label: 'Recycle',
    icon: Recycle,
  },
  compost: {
    bg: '#dde5b6',
    border: '#6c584c',
    badge: '#6c584c',
    label: 'Compost',
    icon: Leaf,
  },
  landfill: {
    bg: '#ffffff',
    border: '#a98467',
    badge: '#a98467',
    label: 'Landfill',
    icon: Trash2,
  },
};

function getModeConfig(mode: string) {
  return modeConfig[mode?.toLowerCase()] ?? {
    bg: '#ffffff',
    border: '#dde5b6',
    badge: '#a98467',
    label: mode,
    icon: Trash2,
  };
}

function SearchResultCard({ result }: { result: WasteItem }) {
  const config = getModeConfig(result.mode);
  const Icon = config.icon;

  return (
    <div
      className="rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 overflow-hidden"
      style={{ backgroundColor: config.bg, borderTop: `4px solid ${config.border}` }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-[#6c584c] leading-tight">{result.object}</h3>
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white shrink-0"
            style={{ backgroundColor: config.badge }}
          >
            <Icon className="w-3 h-3" />
            {config.label}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#a98467]">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>{result.location}</span>
        </div>
      </div>
    </div>
  );
}

export function SearchPage() {
  const [input, setInput] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'Object' | 'Location'>('Object');
  const [allData, setAllData] = useState<WasteItem[]>([]);
  const [results, setResults] = useState<WasteItem[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/waste-bulletin/ucla_waste_data_complete.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch: ' + res.statusText);
        return res.json();
      })
      .then((json) => setAllData(json))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const doSearch = (value: string, status: 'Object' | 'Location') => {
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const filtered = allData.filter((item) => {
      if (status === 'Location') {
        return item.location?.toLowerCase().includes(value.toLowerCase());
      }
      return item.object?.toLowerCase().includes(value.toLowerCase());
    });
    setResults(filtered);
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    doSearch(value, selectedStatus);
  };

  const handleStatusSelect = (status: 'Object' | 'Location') => {
    setSelectedStatus(status);
    setDropdownOpen(false);
    doSearch(input, status);
  };

  const hasSearched = input.trim().length > 0;

  return (
    <div className="min-h-screen bg-[#f0ead2]">
      <main className="max-w-4xl mx-auto px-4 py-8">

        {/* Page header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#6c584c] mb-2">Waste Sorting Search</h2>
          <p className="text-[#a98467]">
            Look up any item or location to find out how to properly sort your waste
          </p>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md border border-[#dde5b6] mb-6">
          <Search className="w-5 h-5 text-[#a98467] shrink-0" />

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium bg-[#adc178] text-[#6c584c] hover:bg-[#9bb066] transition-colors whitespace-nowrap"
            >
              {selectedStatus === 'Object' ? (
                <><Package className="w-3.5 h-3.5" /> Object</>
              ) : (
                <><MapPin className="w-3.5 h-3.5" /> Location</>
              )}
              <span className="ml-1 text-xs">▾</span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-36 bg-white rounded-lg shadow-lg z-50 overflow-hidden border border-[#dde5b6]">
                {(['Object', 'Location'] as const).map((option) => (
                  <div
                    key={option}
                    onClick={() => handleStatusSelect(option)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-colors
                      ${selectedStatus === option
                        ? 'bg-[#adc178] text-[#6c584c] font-medium'
                        : 'text-[#6c584c] hover:bg-[#f0ead2]'
                      }`}
                  >
                    {option === 'Object' ? <Package className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            className="flex-1 bg-transparent border-none outline-none text-[#6c584c] placeholder-[#a98467] text-base"
            placeholder={`Search by ${selectedStatus.toLowerCase()}...`}
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.entries(modeConfig).map(([key, val]) => {
            const Icon = val.icon;
            return (
              <span
                key={key}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: val.badge }}
              >
                <Icon className="w-3 h-3" />
                {val.label}
              </span>
            );
          })}
        </div>

        {/* Results */}
        {hasSearched && results.length > 0 && (
          <>
            <p className="text-sm text-[#a98467] mb-4">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((result, i) => (
                <SearchResultCard key={i} result={result} />
              ))}
            </div>
          </>
        )}

        {hasSearched && results.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#a98467] text-lg">No results found for "{input}".</p>
            <p className="text-[#a98467] text-sm mt-2">Try searching by {selectedStatus === 'Object' ? 'location' : 'object'} instead.</p>
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-[#dde5b6] mx-auto mb-4" />
            <p className="text-[#a98467] text-lg">Start typing to search waste sorting data</p>
          </div>
        )}

      </main>
    </div>
  );
}
