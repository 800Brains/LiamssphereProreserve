import React, { useState, useEffect } from 'react';

const GoogleReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      name: "Nils van der Aart",
      image: "/api/placeholder/60/60",
      text: "Gleem did an amazing job. I threw a party on a Friday night and the whole place was disgusting afterwards. Gleem came in and cleaned the whole place perfectly! Will definitely use gleem again next time.",
      verified: true
    },
    {
      name: "Angela Martin",
      image: "/api/placeholder/60/60", 
      text: "Really excellent cleaning service. Elspeth and the team are always quick to respond and are flexible with dates and times when required. We've had Tanit clean our home for the last few months and she's a fantastic cleaner, with a very high standard which I appreciate!",
      verified: true
    },
    {
      name: "Andy Paterson-Jones",
      image: "/api/placeholder/60/60",
      text: "I have been using Gleem for a year now. It is always a great feeling to have a spick and span home on a Gleem day! Great work.",
      verified: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold text-[#6b4d9e] text-center mb-16">
        Happy Customers Reviews
      </h1>
      
      <div className="relative">
        <div className="flex justify-around items-start gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`w-1/3 bg-white p-6 rounded-lg shadow-lg transition-all duration-500 transform
                ${index === currentSlide ? 'scale-105 opacity-100' : 'scale-95 opacity-50'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-[#6b4d9e]">{review.name}</h3>
                  <div className="flex items-center gap-2">
                    <img
                      src="/api/placeholder/100/24"
                      alt="Google Reviews"
                      className="h-6"
                    />
                    {review.verified && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentSlide ? 'bg-[#6b4d9e]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;

let slideIndex = 0;

        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");

            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }    // Reset to first slide

            // Show the current slide
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000);  // Change slide every 2 seconds
        }

        showSlides();  // Start the slideshow



 