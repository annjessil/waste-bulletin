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
    title: "Example",
    description: "Our community is launching an enhanced recycling program starting next month. Now accepting glass, plastics #1-7, cardboard, and paper. Let's work together to reduce landfill waste!",
    category: "Recycling",
    author: "Emma Green",
    date: "Feb 1, 2026",
    image: "https://images.unsplash.com/photo-1758547343136-19d27f9cb57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjB3YXN0ZSUyMGJpbnN8ZW58MXx8fHwxNzcwMDI0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#f0ead2"
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    image: "https://images.unsplash.com/photo-1592484773536-263bf52e81fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb3N0aW5nJTIwb3JnYW5pYyUyMHdhc3RlfGVufDF8fHx8MTc2OTk2ODcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#dde5b6"
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    color: "#ffffff"
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    image: "https://images.unsplash.com/photo-1598813960856-a83fa955c0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwc3VzdGFpbmFiaWxpdHklMjBuYXR1cmV8ZW58MXx8fHwxNzcwMDI0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#f0ead2"
  },
  {
    id: 5,
    title: "Title 5",
    description: "Description 5",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    color: "#dde5b6"
  },
  {
    id: 6,
    title: "Title 6",
    description: "Description 6",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    color: "#ffffff"
  },
  {
    id: 7,
    title: "Title 7",
    description: "Description 7",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    color: "#f0ead2"
  },
  {
    id: 8,
    title: "Title 8",
    description: "Description 8",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
    image: "https://images.unsplash.com/photo-1762353549350-b5dad5394714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xlZCUyMG1hdGVyaWFscyUyMGFydHxlbnwxfHx8fDE3NzAwMjQwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#dde5b6"
  },
  {
    id: 9,
    title: "Title 9",
    description: "Description 9",
    category: "Category",
    author: "Author",
    date: "Mon DD, YYYY",
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
            <h2 className="text-2xl font-bold text-[#6c584c] mb-2">Zero Waste Bulletin Board</h2>
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
          <p className="mb-2">International Urban Sustainability Student Corps (IUSSC)</p>
          <p className="text-[#dde5b6] text-sm"> Zero Waste Bulletin &copy; 2026 - IUSSC</p>
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
