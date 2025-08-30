import { Star, Quote } from "lucide-react";

export function ReviewSection() {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      avatar: "SC",
      rating: 5,
      review: "Their AI solutions transformed our entire business model. The mystical service approach brought insights we never imagined possible.",
      company: "Fortune 500 Technology Company"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, CryptoVentures",
      avatar: "MR",
      rating: 5,
      review: "The crypto learning platform and trading bots generated 300% ROI in the first quarter. Absolutely revolutionary technology.",
      company: "Leading Blockchain Investment Firm"
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Research Director",
      avatar: "EV",
      rating: 5,
      review: "The quantum computing integration and consciousness AI exceeded all expectations. This is the future of digital transformation.",
      company: "Advanced Research Institute"
    },
    {
      name: "James Thompson",
      role: "CEO, Digital Dynamics",
      avatar: "JT",
      rating: 5,
      review: "From website development to enterprise software, every solution delivered was flawless. Their support team is phenomenal.",
      company: "Global Digital Agency"
    },
    {
      name: "Aria Nakamura",
      role: "Innovation Lead",
      avatar: "AN",
      rating: 5,
      review: "The mystical service opened new dimensions in our product development. Truly next-generation thinking and execution.",
      company: "Emerging Tech Startup"
    },
    {
      name: "Robert Kim",
      role: "VP Engineering",
      avatar: "RK",
      rating: 5,
      review: "Their AI learning platform upskilled our entire team. The performance improvements were immediate and substantial.",
      company: "Enterprise Software Company"
    }
  ];

  return (
    <section className="py-24 bg-black/20 backdrop-blur-md relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-gray-800/20 to-black/30"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Client
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover why industry leaders trust us with their most critical digital transformations 
            and breakthrough innovations.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm hover:bg-white transition-all duration-500 rounded-2xl border border-white/10 hover:border-white relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-500">
                <Quote className="w-8 h-8" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white group-hover:fill-black group-hover:text-black transition-colors duration-500" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-gray-200 group-hover:text-gray-700 mb-8 leading-relaxed transition-colors duration-500 text-lg">
                "{review.review}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-500">
                  <span className="text-black group-hover:text-white font-bold transition-colors duration-500">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-black transition-colors duration-500">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-gray-600 transition-colors duration-500">
                    {review.role}
                  </div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors duration-500">
                    {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-300 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1,200+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300 text-sm">5-Star Reviews</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
