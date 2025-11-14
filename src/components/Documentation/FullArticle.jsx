import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useTheme} from "../../contexts/ThemeContext";

const FullArticle = () => {
  const {isDark} = useTheme();
  const {articleId} = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const allArticles = [
    {
      id: 1,
      title: "Introduction to MrProve",
      category: "getting-started",
      description: "Learn about zero-knowledge proofs and trustless verification",
      content: `
# Introduction to MrProve

MrProve is a revolutionary platform that leverages **zero-knowledge proofs** to enable trustless verification in the digital world.

## What are Zero-Knowledge Proofs?

Zero-knowledge proofs allow one party to prove to another party that a statement is true, without revealing any information beyond the validity of the statement itself.

### Key Benefits:
- **Privacy Preservation**: Your data remains confidential
- **Trust Minimization**: No need to trust third parties
- **Efficiency**: Reduced computational overhead
- **Security**: Cryptographic guarantees

## Getting Started

To begin using MrProve, follow these steps:

1. Create your account
2. Generate your first proof
3. Verify transactions
4. Monitor results

## Code Example

\`\`\`javascript
// Generate zero-knowledge proof
const generateProof = async (witness, circuit) => {
  const proof = await snarkjs.groth16.fullProve(
    { witness },
    circuit.wasm,
    circuit.zkey
  );
  return proof;
};
\`\`\`

## Best Practices

- Always verify proofs before accepting transactions
- Keep your cryptographic keys secure
- Regularly update your SDK versions
- Monitor proof generation times

## Conclusion

MrProve provides a robust framework for implementing zero-knowledge proofs in your applications.
`,
      readTime: "8 min read",
      lastUpdated: "2024-01-15",
      author: "MrProve Team",
    },
    {
      id: 2,
      title: "Creating Your Account",
      category: "getting-started",
      description: "Step-by-step guide to setting up your MrProve account",
      content: `
# Creating Your Account

Welcome to MrProve! This guide will walk you through the account creation process.

## Registration Steps

### 1. Visit Our Website
Navigate to MrProve.com and click the "Sign Up" button.

### 2. Provide Basic Information
- Email address
- Strong password
- Full name

### 3. Email Verification
Check your inbox for a verification link and confirm your email address.

### 4. Security Setup
Enable two-factor authentication for enhanced security.

## Account Types

We offer three types of accounts:

1. **Developer Account** - Full API access
2. **Business Account** - Advanced features  
3. **Enterprise Account** - Custom solutions

## Next Steps

After account creation:
- Set up your profile
- Generate API keys
- Explore the dashboard
- Read documentation

## Support

If you encounter any issues, contact our support team.
`,
      readTime: "5 min read",
      lastUpdated: "2024-01-10",
      author: "MrProve Team",
    },
  ];

  useEffect(() => {
    // Simulate API call
    const fetchArticle = () => {
      setLoading(true);
      setTimeout(() => {
        const foundArticle = allArticles.find((a) => a.id === parseInt(articleId));
        setArticle(foundArticle);
        setLoading(false);
      }, 500);
    };

    fetchArticle();
  }, [articleId]);

  const formatContent = (content) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            {line.replace("# ", "")}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-medium text-gray-900 dark:text-white mt-4 mb-2">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("```")) {
        return null; // Skip code block markers
      }
      if (line.startsWith("- **")) {
        return (
          <li key={index} className="flex items-start mt-2">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-700 dark:text-gray-300">{line.replace("- **", "").replace("**", "")}</span>
          </li>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="flex items-start mt-2">
            <span className="text-gray-500 mr-2 mt-1">•</span>
            <span className="text-gray-700 dark:text-gray-300">{line.replace("- ", "")}</span>
          </li>
        );
      }
      if (line.startsWith("1. ")) {
        return (
          <li key={index} className="text-gray-700 dark:text-gray-300 mt-2">
            {line.replace("1. ", "")}
          </li>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      if (line.includes("`")) {
        const parts = line.split("`");
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 mt-3">
            {parts.map((part, i) =>
              i % 2 === 0 ? (
                part
              ) : (
                <code key={i} className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
                  {part}
                </code>
              )
            )}
          </p>
        );
      }
      return (
        <p key={index} className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
            <button onClick={() => navigate("/dashboard/documentation")} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 font-medium">
              Back to Documentation
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/dashboard/documentation")}
          className={`flex items-center space-x-2 mb-8 px-4 py-2 rounded-lg transition-colors duration-200 ${
            isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}>
          <span>←</span>
          <span>Back to Documentation</span>
        </button>

        {/* Article Header */}
        <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">{article.category.replace("-", " ")}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{article.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{article.description}</p>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{article.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: {article.lastUpdated}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
                <span className="text-lg">🔖</span>
              </button>
              <button
                className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
                <span className="text-lg">📤</span>
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{formatContent(article.content)}</div>
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Was this article helpful?</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors duration-200 text-sm font-medium">👍 Yes</button>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors duration-200 text-sm font-medium">👎 No</button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">zero-knowledge</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">verification</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">blockchain</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">security</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => navigate("/dashboard/documentation")}
            className={`px-6 py-3 rounded-xl transition-colors duration-200 font-medium ${
              isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}>
            ← All Articles
          </button>

          <button onClick={() => navigate("/dashboard/support")} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 font-medium">
            Need Help? Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
