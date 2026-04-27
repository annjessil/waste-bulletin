import { Recycle, Leaf, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <h1 className="text-3xl font-bold">Zero Waste Bulletin</h1>
              <p className="text-[#dde5b6] text-sm mt-1">An IUSSC Initiative</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/about"
              className="flex items-center gap-2 text-sm hover:text-[#adc178] transition-colors"
            >
              <Recycle className="w-5 h-5 text-[#adc178]" />
              <span>About Us</span>
            </Link>
            <a
              href="https://iusscatucla7.wixsite.com/website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[#dde5b6] transition-colors"
            >
              <Leaf className="w-5 h-5 text-[#dde5b6]" />
              <span>IUSSC</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}