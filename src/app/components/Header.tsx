import { Recycle, Leaf, Trash2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#6c584c] text-[#f0ead2] py-6 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#adc178] p-3 rounded-full">
              <Recycle className="w-8 h-8 text-[#6c584c]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Waste Bulletin</h1>
              <p className="text-[#dde5b6] text-sm mt-1">Community Sustainability Hub</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Leaf className="w-5 h-5 text-[#adc178]" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Trash2 className="w-5 h-5 text-[#dde5b6]" />
              <span>Waste Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
