import { Recycle, Leaf, Users, Globe, Mail, Instagram, Code } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f0ead2]">
      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="bg-[#adc178] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Recycle className="w-10 h-10 text-[#6c584c]" />
          </div>
          <h2 className="text-4xl font-bold text-[#6c584c] mb-4">About Us</h2>
          <p className="text-[#a98467] text-lg max-w-2xl mx-auto">
            The Zero Waste Bulletin is an initiative by the International Urban Sustainability 
            Student Corps (IUSSC) at UCLA, a student-run environmental think tank dedicated to 
            building a more sustainable campus community through education, action, and connection.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6 border-t-4 border-[#adc178]">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-6 h-6 text-[#adc178]" />
            <h3 className="text-xl font-bold text-[#6c584c]">Our Mission</h3>
          </div>
          <p className="text-[#a98467] leading-relaxed">
            We believe that small, collective actions lead to a big environmental impact. 
            Our mission is to become experts regarding relevant and critical environmental 
            issues — ranging from the rise of AI to the benefits of Green Spaces in cities — 
            and apply our knowledge to the local LA community through actionable, palpable change.
          </p>
        </div>

        {/* Behind the Website */}
        <div className="bg-[#dde5b6] rounded-2xl shadow-md p-8 mb-6 border-t-4 border-[#6c584c]">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-[#6c584c]" />
            <h3 className="text-xl font-bold text-[#6c584c]">Behind the Website</h3>
          </div>
          <p className="text-[#6c584c] leading-relaxed">
            The Zero Waste Bulletin is an IUSSC initiative focused on eliminating waste on 
            UCLA's campus through a comprehensive search tool that can assist students in the 
            proper disposal of their waste. The search feature allows easy identification on 
            how to sort dishware in addition to an events bulletin board that acts as a central 
            hub for all things environment at UCLA. In collaboration with other sustainability 
            clubs at UCLA, we hope this bulletin serves as a resource to find sustainable events, 
            education, and community opportunities for the UCLA community.
          </p>
        </div>

        {/* Credits */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6 border-t-4 border-[#a98467]">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-[#a98467]" />
            <h3 className="text-xl font-bold text-[#6c584c]">Credits</h3>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a98467] mb-2">
                Zero Waste & Reusables Division Leads
              </p>
              <p className="text-[#6c584c] font-medium">Sofia Barreras, Dion Lymuel</p>
            </div>

            <div className="border-t border-[#dde5b6] pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a98467] mb-2">
                Zero Waste & Reusables Division Researchers
              </p>
              <p className="text-[#6c584c]">
                Jasmin Desruisseau, Amando Loi, Ansul Adhikari, Kevin Yang, Zoe Ivatt, Seira Honda
              </p>
            </div>

            <div className="border-t border-[#dde5b6] pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a98467] mb-2">
                Website Development & Execution
              </p>
              <div className="flex items-center gap-2 text-[#6c584c] font-medium">
                <Code className="w-4 h-4 text-[#adc178]" />
                Annmarie Jessil
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#6c584c] rounded-2xl shadow-md p-8 text-[#f0ead2]">
          <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://iusscatucla7.wixsite.com/website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#adc178] text-[#6c584c] px-6 py-3 rounded-lg font-medium hover:bg-[#9bb066] transition-colors"
            >
              <Globe className="w-5 h-5" />
              Visit IUSSC Website
            </a>
            
              <a href="mailto:iussc@ucla.edu"
              className="flex items-center gap-3 bg-[#a98467] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8a6d55] transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="https://www.instagram.com/ucla_iussc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-[#dde5b6] text-[#dde5b6] px-6 py-3 rounded-lg font-medium hover:bg-[#a98467] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>

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