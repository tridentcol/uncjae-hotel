import React, { useState } from 'react';
import VideoSectionManager from '../components/VideoSectionManager';
// Importación dinámica del video usando URL
import mainVideo from '../assets/videos/main-video.mp4';
import captivatingMomentsVideo from '../assets/videos/captivating-moments.mp4';
import luxuriousAccommodationsVideo from '../assets/videos/luxurious-accommodations.mp4';
import personalizedAttentionVideo from '../assets/videos/personalized-attention.mp4';
import premiumServicesVideo from '../assets/videos/premium-services.mp4';


const MainPage = ({ isDark, toggleDark, setLanguage }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Welcome to Jaelen Hotel",
      description: "Experience luxury redefined in the heart of sophistication",
      video: mainVideo,
      href: "/",
      toggleDark,
      setLanguage
    },
    {
      title: "Luxurious Accommodations",
      description: "Discover our collection of meticulously designed rooms and suites, where every detail has been carefully curated to provide an unparalleled experience of comfort and elegance. Each space is a perfect blend of modern luxury and timeless sophistication.",
      video: luxuriousAccommodationsVideo,
      href: "/places"
    },
    {
      title: "Premium Services",
      description: "Indulge in our world-class amenities, from rejuvenating spa treatments to exquisite dining experiences. Our dedicated staff ensures every moment of your stay exceeds expectations, offering personalized service that anticipates your every need.",
      video: premiumServicesVideo,
      href: "/services"
    },
    {
      title: "Captivating Moments",
      description: "Step into a world of visual elegance through our carefully curated gallery. Experience the beauty of our spaces, the warmth of our hospitality, and the attention to detail that makes every stay memorable. Let our images inspire your next luxury getaway.",
      video: captivatingMomentsVideo,
      href: "/gallery"
    },
    {
      title: "Personalized Attention",
      description: "Our concierge team is available 24/7 to ensure your stay is nothing short of exceptional. From arranging private transportation to securing exclusive reservations, we're here to transform your wishes into unforgettable experiences.",
      video: personalizedAttentionVideo,
      href: "/contact"
    }
  ];

  return (
    <div className="w-full bg-luxury-cream dark:bg-luxury-brown transition-colors duration-300">
      <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-hide">
        <VideoSectionManager
          sections={sections}
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        />
      </div>
    </div>
  );
};

export default MainPage;