import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Documentation = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      id: "getting-started",
      name: "Getting Started",
      icon: "🚀",
      articles: [
        {id: 1, title: "Introduction to MrProve", description: "Learn about zero-knowledge proofs and trustless verification"},
        {id: 2, title: "Creating Your Account", description: "Step-by-step guide to setting up your MrProve account"},
        {id: 3, title: "First Verification", description: "How to perform your first trustless verification"},
        {id: 4, title: "Security Best Practices", description: "Keep your account and data secure"},
      ],
    },
    {
      id: "verification",
      name: "Verification",
      icon: "🔍",
      articles: [
        {id: 5, title: "Transaction Verification", description: "Verify blockchain transactions with zero-knowledge proofs"},
        {id: 6, title: "Identity Verification", description: "KYC and identity verification processes"},
        {id: 7, title: "Smart Contract Audits", description: "Verify smart contract integrity and security"},
        {id: 8, title: "Batch Verification", description: "Verify multiple transactions simultaneously"},
      ],
    },
    {
      id: "api",
      name: "API Reference",
      icon: "⚡",
      articles: [
        {id: 9, title: "REST API Overview", description: "Complete REST API documentation"},
        {id: 10, title: "Authentication", description: "API keys and authentication methods"},
        {id: 11, title: "Webhooks", description: "Setting up and managing webhooks"},
        {id: 12, title: "Rate Limits", description: "Understanding API rate limits and quotas"},
      ],
    },
    {
      id: "integration",
      name: "Integration Guides",
      icon: "🔧",
      articles: [
        {id: 13, title: "React Integration", description: "Integrate MrProve into your React application"},
        {id: 14, title: "Node.js SDK", description: "Using our Node.js SDK for server-side integration"},
        {id: 15, title: "Mobile Apps", description: "Integration guide for iOS and Android apps"},
        {id: 16, title: "Web3 Integration", description: "Integrate with Ethereum and other blockchain networks"},
      ],
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting",
      icon: "🐛",
      articles: [
        {id: 17, title: "Common Issues", description: "Solutions to frequently encountered problems"},
        {id: 18, title: "Error Codes", description: "Complete list of error codes and their meanings"},
        {id: 19, title: "Performance Tips", description: "Optimize your verification performance"},
        {id: 20, title: "Debugging", description: "Debugging tools and techniques"},
      ],
    },
  ];

  const popularArticles = [
    {id: 1, title: "Quick Start Guide", category: "getting-started", views: "2.4k"},
    {id: 2, title: "API Authentication", category: "api", views: "1.8k"},
    {id: 3, title: "Troubleshooting Common Errors", category: "troubleshooting", views: "1.5k"},
    {id: 4, title: "Security Best Practices", category: "getting-started", views: "1.2k"},
  ];

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  const filteredArticles = currentCategory?.articles.filter(
    (article) => article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Documentation</h1>
          <p className="text-gray-600 dark:text-gray-400">Guides, tutorials, and API references for MrProve</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <button
            onClick={() => window.open("https://docs.mrprove.com", "_blank")}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            External Docs
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Categories */}
        <div className="lg:col-span-1 space-y-6">
          {/* Categories */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id ? "bg-blue-500 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}>
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium text-left flex-1">{category.name}</span>
                  <span className="text-sm opacity-70">({category.articles.length})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular Articles</h3>
            <div className="space-y-3">
              {popularArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => {
                    const category = categories.find((cat) => cat.articles.some((a) => a.id === article.id));
                    if (category) {
                      setActiveCategory(category.id);
                      // Navigate ke article yang spesifik
                      navigate(`/dashboard/documentation/article/${article.id}`);
                    }
                  }}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">{article.title}</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{article.category.replace("-", " ")}</span>
                    <span className="text-xs text-gray-400">{article.views} views</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Category Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-primary">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{currentCategory?.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentCategory?.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{currentCategory?.articles.length} articles in this category</p>
                </div>
              </div>
            </div>

            {/* Articles List */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredArticles?.map((article) => (
                <div
                  key={article.id}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                  onClick={() => navigate(`/dashboard/documentation/article/${article.id}`)}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-500 hover:text-blue-600 font-medium">Read article →</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">5 min read</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {(!filteredArticles || filteredArticles.length === 0) && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{searchQuery ? "Try a different search term" : "No articles available in this category"}</p>
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-blue-500 hover:text-blue-600 font-medium">
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Support Card */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white mt-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-purple-100">Can't find what you're looking for? Our support team is here to help.</p>
              </div>
              <div className="mt-4 lg:mt-0 flex space-x-3">
                <button onClick={() => navigate("/dashboard/support")} className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200">
                  Contact Support
                </button>
                <button
                  onClick={() => window.open("/dashboard/documentation/article/1", "_blank")}
                  className="px-4 py-2 bg-white text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200 font-semibold">
                  Full Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
