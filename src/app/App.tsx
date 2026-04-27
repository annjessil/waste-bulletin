import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { CategoryFilter } from '@/app/components/CategoryFilter';
import { BulletinCard } from '@/app/components/BulletinCard';
import { SearchPage } from '@/app/pages/SearchPage';
import { Plus, Search } from 'lucide-react';

interface BulletinPost {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  color: string;
}

const bulletinPosts: BulletinPost[] = [
  {
    id: 1,
    title: "New Recycling Program Launch",
    description: "Our community is launching an enhanced recycling program starting next month. Now accepting glass, plastics #1-7, cardboard, and paper. Let's work together to reduce landfill waste!",
    category: "Recycling",
    author: "Emma Green",
    date: "Feb 1, 2026",
    image: "https://images.unsplash.com/photo-1758547343136-19d27f9cb57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjB3YXN0ZSUyMGJpbnN8ZW58MXx8fHwxNzcwMDI0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#f0ead2"
  },
  {
    id: 2,
    title: "Composting Workshop This Saturday",
    description: "Join us for a hands-on workshop about home composting! Learn how to turn your kitchen scraps into nutrient-rich soil. Free compost bins for attendees. Register at the community center.",
    category: "Composting",
    author: "Marcus Chen",
    date: "Jan 30, 2026",
    image: "https://images.unsplash.com/photo-1592484773536-263bf52e81fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb3N0aW5nJTIwb3JnYW5pYyUyMHdhc3RlfGVufDF8fHx8MTc2OTk2ODcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#dde5b6"
  },
  {
    id: 3,
    title: "Reduce Single-Use Plastics",
    description: "Small changes make a big difference! Bring reusable bags to the grocery store, use a refillable water bottle, and say no to plastic straws. Together we can reduce plastic waste by 50%.",
    category: "Waste Reduction",
    author: "Sarah Wilson",
    date: "Jan 28, 2026",
    color: "#ffffff"
  },
  {
    id: 4,
    title: "Community Garden Expansion",
    description: "We're expanding our community garden and need volunteers! Growing your own food reduces packaging waste and transportation emissions. Plus, you get fresh, organic produce!",
    category: "Waste Reduction",
    author: "David Park",
    date: "Jan 27, 2026",
    image: "https://images.unsplash.com/photo-1598813960856-a83fa955c0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwc3VzdGFpbmFiaWxpdHklMjBuYXR1cmV8ZW58MXx8fHwxNzcwMDI0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#f0ead2"
  },
  {
    id: 5,
    title: "Water Conservation Tips",
    description: "Fix leaky faucets, take shorter showers, and collect rainwater for plants. These simple steps can save thousands of gallons per year. Every drop counts in our drought-prone region!",
    category: "Water Conservation",
    author: "Lisa Rodriguez",
    date: "Jan 25, 2026",
    color: "#dde5b6"
  },
  {
    id: 6,
    title: "Energy Audit Sign-Up",
    description: "Free home energy audits available this month! Discover where you're losing energy and get recommendations for improvements. Reduce your carbon footprint and save on utility bills.",
    category: "Energy Saving",
    author: "Tom Anderson",
    date: "Jan 24, 2026",
    color: "#ffffff"
  },
  {
    id: 7,
    title: "E-Waste Collection Event",
    description: "Properly dispose of old electronics on Feb 15th at the community center parking lot. We accept computers, phones, batteries, and more. Keep toxic materials out of landfills!",
    category: "Recycling",
    author: "Jessica Lee",
    date: "Jan 22, 2026",
    color: "#f0ead2"
  },
  {
    id: 8,
    title: "Upcycled Art Exhibition",
    description: "See amazing art created from recycled materials! The exhibition showcases how waste can become beautiful creations. Opening reception Friday evening with refreshments.",
    category: "Recycling",
    author: "Alex Martinez",
    date: "Jan 20, 2026",
    image: "https://images.unsplash.com/photo-1762353549350-b5dad5394714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xlZCUyMG1hdGVyaWFscyUyMGFydHxlbnwxfHx8fDE3NzAwMjQwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#dde5b6"
  },
  {
    id: 9,
    title: "Food Waste Challenge",
    description: "Join our 30-day food waste reduction challenge! Meal plan, use leftovers creatively, and compost scraps. Participants have reduced food waste by an average of 40%!",
    category: "Composting",
    author: "Nina Patel",
    date: "Jan 18, 2026",
    color: "#ffffff"
  }
];

function NavBar() {
  const location = useLocation();
  const isSearch = location.pathname === '/search';
  const isBulletin = location.pathname === '/' || location.pathname === '/bulletin';

  return (
    <nav className="bg-[#6c584c] border-b border-[#a98467]">
      <div className="max-w-7xl mx-auto px-4 flex gap-2 py-2">
        <Link
          to="/"
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isBulletin
              ? 'bg-[#adc178] text-[#6c584c]'
              : 'text-[#dde5b6] hover:bg-[#a98467] hover:text-[#f0ead2]'
          }`}
        >
          Bulletin
        </Link>
        <Link
          to="/search"
          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
            isSearch
              ? 'bg-[#adc178] text-[#6c584c]'
              : 'text-[#dde5b6] hover:bg-[#a98467] hover:text-[#f0ead2]'
          }`}
        >
          <Search className="w-4 h-4" />
          Waste Sorter
        </Link>
      </div>
    </nav>
  );
}

function BulletinPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all'
    ? bulletinPosts
    : bulletinPosts.filter(post =>
        post.category.toLowerCase().replace(/\s+/g, '') === selectedCategory.replace(/\s+/g, '')
      );

  return (
    <div className="min-h-screen bg-[#f0ead2]">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#6c584c] mb-2">Community Bulletin Board</h2>
            <p className="text-[#a98467]">Share tips, events, and sustainability initiatives</p>
          </div>
          <button className="bg-[#adc178] hover:bg-[#9bb066] text-[#6c584c] px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all hover:scale-105">
            <Plus className="w-5 h-5" />
            <span className="font-medium">New Post</span>
          </button>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BulletinCard
              key={post.id}
              title={post.title}
              description={post.description}
              category={post.category}
              author={post.author}
              date={post.date}
              image={post.image}
              color={post.color}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#a98467] text-lg">No posts found in this category.</p>
          </div>
        )}
      </main>

      <footer className="bg-[#6c584c] text-[#f0ead2] py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">Together we can make a difference in our community</p>
          <p className="text-[#dde5b6] text-sm">Waste Bulletin &copy; 2026 - Sustainability for All</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<BulletinPage />} />
        <Route path="/bulletin" element={<BulletinPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
