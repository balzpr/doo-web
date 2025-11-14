import React, {useState} from "react";
import Modal from "../../components/Modal/Modal";

const Verify = () => {
  const [verificationType, setVerificationType] = useState("transaction");
  const [pendingVerifications, setPendingVerifications] = useState([
    {
      id: 1,
      type: "Transaction",
      hash: "0x1a2b3c4d5e6f...",
      amount: "1.5 ETH",
      status: "Pending",
      timestamp: "2024-01-15 14:30",
      priority: "High",
    },
    {
      id: 2,
      type: "Identity",
      hash: "0x7g8h9i0j1k2l...",
      amount: "KYC Verification",
      status: "Processing",
      timestamp: "2024-01-15 13:15",
      priority: "Medium",
    },
    {
      id: 3,
      type: "Smart Contract",
      hash: "0x3m4n5o6p7q8r...",
      amount: "Contract Audit",
      status: "Pending",
      timestamp: "2024-01-15 12:45",
      priority: "Low",
    },
  ]);
  const [verificationResult, setVerificationResult] = useState(null);
  const [quickVerifyModal, setQuickVerifyModal] = useState(false);
  const [detailModal, setDetailModal] = useState(null);

  const verificationStats = {
    total: 156,
    verified: 142,
    pending: 8,
    failed: 6,
  };

  const handleVerifyNow = (verificationId) => {
    // Simulasi verifikasi
    const verification = pendingVerifications.find((v) => v.id === verificationId);
    setVerificationResult({
      success: true,
      message: `${verification.type} verification completed successfully!`,
      proof: `zkProof_${verification.hash}`,
    });

    // Hapus dari pending
    setPendingVerifications(pendingVerifications.filter((v) => v.id !== verificationId));
  };

  const handleQuickVerify = (type) => {
    setVerificationResult({
      success: true,
      message: `${type} verification completed!`,
      proof: `zkProof_quick_${Date.now()}`,
    });
    setQuickVerifyModal(false);
  };

  const VerificationResultModal = () => {
    if (!verificationResult) return null;

    return (
      <Modal isOpen={!!verificationResult} onClose={() => setVerificationResult(null)} size="sm">
        <div className="p-6 text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${verificationResult.success ? "bg-green-500" : "bg-red-500"}`}>
            <span className="text-white text-2xl">{verificationResult.success ? "✓" : "✗"}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{verificationResult.success ? "Verification Successful!" : "Verification Failed"}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{verificationResult.message}</p>
          {verificationResult.proof && (
            <div className="bg-gray-50 dark:bg-dark-primary rounded-lg p-3 mb-4">
              <p className="text-sm font-mono text-gray-600 dark:text-gray-400 break-all">Proof: {verificationResult.proof}</p>
            </div>
          )}
          <button onClick={() => setVerificationResult(null)} className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold">
            Continue
          </button>
        </div>
      </Modal>
    );
  };

  const DetailModal = () => {
    if (!detailModal) return null;

    return (
      <Modal isOpen={!!detailModal} onClose={() => setDetailModal(null)} size="md">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verification Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                <p className="text-gray-900 dark:text-white">{detailModal.type}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                    detailModal.status === "Verified" ? "bg-green-500 text-white" : detailModal.status === "Processing" ? "bg-blue-500 text-white" : "bg-yellow-500 text-white"
                  }`}>
                  {detailModal.status}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hash/Address</label>
              <p className="font-mono text-gray-900 dark:text-white break-all">{detailModal.hash}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Amount/Details</label>
              <p className="text-gray-900 dark:text-white">{detailModal.amount}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Timestamp</label>
              <p className="text-gray-900 dark:text-white">{detailModal.timestamp}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                  detailModal.priority === "High" ? "bg-red-500 text-white" : detailModal.priority === "Medium" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
                }`}>
                {detailModal.priority}
              </span>
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => setDetailModal(null)}
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              Close
            </button>
            <button
              onClick={() => {
                handleVerifyNow(detailModal.id);
                setDetailModal(null);
              }}
              className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Verify Now
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Verify</h1>
          <p className="text-gray-600 dark:text-gray-400">Verify transactions, identities, and smart contracts with zero-knowledge proofs</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Success Rate</p>
            <p className="text-xl font-bold text-green-500">{((verificationStats.verified / verificationStats.total) * 100).toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Verification Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Verification Type Selector */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">New Verification</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                {id: "transaction", label: "Transaction", icon: "💸", color: "from-green-500 to-emerald-500"},
                {id: "identity", label: "Identity", icon: "🆔", color: "from-blue-500 to-cyan-500"},
                {id: "contract", label: "Smart Contract", icon: "📄", color: "from-purple-500 to-pink-500"},
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setVerificationType(type.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    verificationType === type.id
                      ? `border-transparent bg-gradient-to-r ${type.color} text-white shadow-lg`
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500"
                  }`}>
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="font-semibold">{type.label}</div>
                </button>
              ))}
            </div>

            {/* Verification Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {verificationType === "transaction" ? "Transaction Hash" : verificationType === "identity" ? "Identity Proof" : "Contract Address"}
                </label>
                <input
                  type="text"
                  placeholder={verificationType === "transaction" ? "Enter transaction hash..." : verificationType === "identity" ? "Enter identity proof..." : "Enter contract address..."}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                />
              </div>

              {verificationType === "transaction" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">From Address</label>
                    <input
                      type="text"
                      placeholder="0x..."
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">To Address</label>
                    <input
                      type="text"
                      placeholder="0x..."
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={() =>
                  setVerificationResult({
                    success: true,
                    message: `${verificationType} verification completed successfully!`,
                    proof: `zkProof_${Date.now()}`,
                  })
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Verification
              </button>
            </div>
          </div>

          {/* Verification Statistics */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Verification Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(verificationStats).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-gray-50 dark:bg-dark-primary rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Verifications */}
        <div className="space-y-6">
          {/* Pending List */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Pending Verifications</h3>
              <span className="bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{pendingVerifications.length}</span>
            </div>
            <div className="space-y-4">
              {pendingVerifications.map((verification) => (
                <div key={verification.id} className="p-4 bg-gray-50 dark:bg-dark-primary rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{verification.type}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">{verification.hash}</div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        verification.priority === "High" ? "bg-red-500 text-white" : verification.priority === "Medium" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
                      }`}>
                      {verification.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">{verification.amount}</span>
                    <span className={`font-medium ${verification.status === "Pending" ? "text-yellow-500" : "text-blue-500"}`}>{verification.status}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">{verification.timestamp}</div>
                  <div className="flex space-x-2 mt-3">
                    <button onClick={() => handleVerifyNow(verification.id)} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                      Verify Now
                    </button>
                    <button
                      onClick={() => setDetailModal(verification)}
                      className="px-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Verify */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Quick Verify</h3>
            <p className="text-green-100 mb-4 text-sm">Verify common transactions with one click</p>
            <div className="space-y-3">
              <button onClick={() => handleQuickVerify("Standard Transfer")} className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">
                Standard Transfer
              </button>
              <button onClick={() => handleQuickVerify("Token Swap")} className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">
                Token Swap
              </button>
              <button onClick={() => handleQuickVerify("Contract Call")} className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">
                Contract Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <VerificationResultModal />
      <DetailModal />
    </div>
  );
};

export default Verify;
