import React, {useState} from "react";
import {PROOF_TYPES, PROOF_STATUS} from "../../utils/proofData";

const ProofCard = ({proof}) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const type = PROOF_TYPES[proof.type] || {
    id: "unknown",
    name: "Unknown",
    icon: "❓",
    color: "gray",
  };

  const status = Object.values(PROOF_STATUS).find((s) => s.text === proof.status) || {
    text: "Unknown",
    icon: "❓",
    color: "gray",
  };

  const getStatusColor = (statusText) => {
    switch (statusText) {
      case "Pending":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
      case "Verified":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800";
      case "Burned":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800";
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-800";
    }
  };

  const getTypeGradient = (color) => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-cyan-500";
      case "green":
        return "from-green-500 to-emerald-500";
      case "purple":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const formatDate = (timestamp) => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) return "Yesterday";
      if (diffDays < 7) return `${diffDays} days ago`;
      return date.toLocaleDateString();
    } catch (error) {
      return "Unknown date";
    }
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(`${type} copied!`);
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  const shareProof = async (platform) => {
    const shareText = `Check out this zero-knowledge proof: ${proof.proofId}\n\nVerified by MrProve - Trustless verification powered by mathematics.`;
    const shareUrl = `https://mrprove.com/proof/${proof.proofId}`;

    if (platform === "twitter") {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(twitterUrl, "_blank");
    } else if (platform === "linkedin") {
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      window.open(linkedinUrl, "_blank");
    } else if (platform === "whatsapp") {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
      window.open(whatsappUrl, "_blank");
    } else if (platform === "telegram") {
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
      window.open(telegramUrl, "_blank");
    }

    setShowShareModal(false);
  };

  const ShareModal = () => {
    if (!showShareModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Share Proof</h3>
            <button
              onClick={() => setShowShareModal(false)}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
              ✕
            </button>
          </div>

          {/* Proof Info */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${getTypeGradient(type.color)} rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm">{type.icon}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{type.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{proof.proofId}</p>
              </div>
            </div>
            <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proof.status)}`}>
              <span>{status.icon}</span>
              <span>{proof.status}</span>
            </div>
          </div>

          {/* Copy Section */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Proof ID</p>
            <div className="flex space-x-2">
              <input
                type="text"
                value={proof.proofId}
                readOnly
                className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm font-mono"
              />
              <button
                onClick={() => copyToClipboard(proof.proofId, "Proof ID")}
                className="px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium">
                Copy
              </button>
            </div>
            {copySuccess && <p className="text-green-600 dark:text-green-400 text-xs mt-2 text-center animate-pulse">✅ {copySuccess}</p>}
          </div>

          {/* Share Platforms */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Share on:</p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => shareProof("twitter")}
                className="flex items-center justify-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl transition-colors duration-200">
                <span className="text-blue-500 text-lg">🐦</span>
                <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Twitter</span>
              </button>

              <button
                onClick={() => shareProof("linkedin")}
                className="flex items-center justify-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl transition-colors duration-200">
                <span className="text-blue-500 text-lg">💼</span>
                <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">LinkedIn</span>
              </button>

              <button
                onClick={() => shareProof("whatsapp")}
                className="flex items-center justify-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl transition-colors duration-200">
                <span className="text-green-500 text-lg">💚</span>
                <span className="text-green-700 dark:text-green-300 text-sm font-medium">WhatsApp</span>
              </button>

              <button
                onClick={() => shareProof("telegram")}
                className="flex items-center justify-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl transition-colors duration-200">
                <span className="text-blue-500 text-lg">📱</span>
                <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">Telegram</span>
              </button>
            </div>
          </div>

          {/* Share via Native Share API */}
          {navigator.share && (
            <button
              onClick={async () => {
                try {
                  await navigator.share({
                    title: `Proof ${proof.proofId}`,
                    text: `Check out this zero-knowledge proof from MrProve`,
                    url: `https://mrprove.com/proof/${proof.proofId}`,
                  });
                } catch (err) {
                  console.log("Error sharing:", err);
                }
                setShowShareModal(false);
              }}
              className="w-full mt-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
              Share via Device
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${getTypeGradient(type.color)} rounded-full flex items-center justify-center`}>
              <span className="text-white text-lg">{type.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{type.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(proof.timestamp)}</p>
            </div>
          </div>

          <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(proof.status)}`}>
            {status.icon} {proof.status}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Proof ID</p>
            <p className="font-mono text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">{proof.proofId || "N/A"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Transaction Hash</p>
            <p className="font-mono text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">{proof.hash || "N/A"}</p>
          </div>

          {proof.amount && (
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Amount</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{proof.amount}</p>
            </div>
          )}

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Description</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{proof.details || "No description available"}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex-1 text-center py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 text-sm font-medium">
            View Details
          </button>
          <button
            onClick={handleShare}
            className="flex-1 text-center py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 text-sm font-medium">
            Share Proof
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal />
    </>
  );
};

export default ProofCard;
