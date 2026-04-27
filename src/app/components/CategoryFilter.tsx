import { Recycle, Droplet, Zap, Leaf, Trash2, Apple } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Posts', icon: Leaf },
  { id: 'recycling', label: 'Recycling', icon: Recycle },
  { id: 'composting', label: 'Composting', icon: Apple },
  { id: 'reduction', label: 'Waste Reduction', icon: Trash2 },
  { id: 'water', label: 'Water Conservation', icon: Droplet },
  { id: 'energy', label: 'Energy Saving', icon: Zap },
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl mb-4 text-[#6c584c]">Filter by Category</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${isSelected 
                  ? 'bg-[#adc178] text-[#6c584c] shadow-md scale-105' 
                  : 'bg-white text-[#6c584c] hover:bg-[#dde5b6] border-2 border-[#dde5b6]'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
