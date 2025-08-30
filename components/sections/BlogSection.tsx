import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with websites in 2024 and beyond.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI Technology",
      image: "bg-gradient-to-br from-gray-800 to-black"
    },
    {
      title: "Quantum Computing Meets Blockchain",
      excerpt: "Discover how quantum computing is set to transform cryptocurrency mining and blockchain security protocols.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Blockchain",
      image: "bg-gradient-to-br from-black to-gray-700"
    },
    {
      title: "Mystical UX: Designing for Consciousness",
      excerpt: "How metaphysical principles and consciousness studies are influencing modern user experience design.",
      author: "Elena Vasquez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "bg-gradient-to-br from-gray-900 to-black"
    },
    {
      title: "Enterprise Software in the Metaverse",
      excerpt: "Building business applications for virtual worlds and the challenges of cross-dimensional data management.",
      author: "James Thompson",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Enterprise",
      image: "bg-gradient-to-br from-black to-gray-800"
    },
    {
      title: "Neural Networks for Predictive Analytics",
      excerpt: "Advanced machine learning techniques for forecasting market trends and business intelligence.",
      author: "Aria Nakamura",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Machine Learning",
      image: "bg-gradient-to-br from-gray-700 to-black"
    },
    {
      title: "The Psychology of Digital Transformation",
      excerpt: "Understanding human behavior patterns in the adoption of emerging technologies and digital solutions.",
      author: "Robert Kim",
      date: "Dec 3, 2024",
      readTime: "4 min read",
      category: "Psychology",
      image: "bg-gradient-to-br from-black to-gray-900"
    }
  ];

  return (
    <section className="py-24 bg-black/20 backdrop-blur-md relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-gray-900/20 to-black/30"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay ahead of the curve with our expert insights on emerging technologies, 
            industry trends, and breakthrough innovations shaping the digital future.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${blogPosts[0].image} rounded-2xl p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] opacity-30"></div>
              <div className="text-center relative z-10">
                <div className="text-white/80 text-sm font-medium mb-4">{blogPosts[0].category}</div>
                <div className="text-4xl font-bold text-white">Featured Article</div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
                {blogPosts[0].category}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 hover:text-black group">
                Read Full Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article 
              key={index}
              className="group bg-white/5 backdrop-blur-sm hover:bg-white transition-all duration-500 rounded-2xl overflow-hidden border border-white/10 hover:border-white"
            >
              <div className={`${post.image} h-48 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:15px_15px] opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-black mb-3 leading-tight transition-colors duration-500">
                  {post.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-600 mb-4 leading-relaxed transition-colors duration-500">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-500">
                    {post.date}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-white group-hover:text-black hover:bg-black/10 group-hover:hover:bg-white/10 p-0 h-auto font-medium group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:!text-black font-semibold px-8 py-6 group"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
