import { Calendar, User, Tag, Pin } from 'lucide-react';

interface BulletinCardProps {
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  color: string;
}

export function BulletinCard({ title, description, category, author, date, image, color }: BulletinCardProps) {
  return (
    <div 
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:rotate-1"
      style={{ 
        backgroundColor: color,
        borderTop: `8px solid ${color === '#f0ead2' ? '#adc178' : '#6c584c'}`
      }}
    >
      <div className="absolute -top-2 -right-2 z-10">
        <Pin className="w-8 h-8 text-[#a98467] transform rotate-45" fill="#a98467" />
      </div>
      
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#adc178] text-[#6c584c] px-3 py-1 rounded-full text-sm flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span>{category}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-[#6c584c] mb-3">{title}</h3>
        <p className="text-[#6c584c] mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-[#a98467] pt-4 border-t-2 border-[#dde5b6]">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
