import React from "react";
import {useTheme} from "../contexts/ThemeContext";
import {useProofHistory} from "../components/ProofHistory/hooks/useProofHistory";
import ProofHistoryHeader from "../components/ProofHistory/ProofHistoryHeader";
import ProofFilters from "../components/ProofHistory/ProofFilters";
import ProofCard from "../components/ProofHistory/ProofCard";

const ProofHistory = () => {
  const {isDark} = useTheme();
  const {proofs, selectedTypes, searchQuery, setSearchQuery, toggleTypeFilter, clearFilters, isLoading, totalProofs, filteredCount} = useProofHistory();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black" : "bg-gray-50"}`}>
      <ProofHistoryHeader />

      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Proof History</h1>
          <p className="text-gray-600 dark:text-gray-400">Transparent record of all zero-knowledge proofs and transactions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{totalProofs}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Proofs</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">{proofs.filter((p) => p.status === "Verified").length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Verified</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{proofs.filter((p) => p.status === "Burned").length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Burned</div>
          </div>
        </div>

        {/* Filters */}
        <ProofFilters
          selectedTypes={selectedTypes}
          toggleTypeFilter={toggleTypeFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          clearFilters={clearFilters}
          totalProofs={totalProofs}
          filteredCount={filteredCount}
        />

        {/* Proofs List */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading proof history...</p>
          </div>
        ) : proofs.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No proofs found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{searchQuery || selectedTypes.length > 0 ? "Try adjusting your filters or search terms" : "Your proof history will appear here"}</p>
            {(searchQuery || selectedTypes.length > 0) && (
              <button onClick={clearFilters} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {proofs.map((proof) => (
              <ProofCard key={proof.id} proof={proof} />
            ))}
          </div>
        )}

        {/* Info Section - No Gradient */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Transparent & Verifiable</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-lg">🔍</span>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Public Verification</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Anyone can verify the validity of proofs without accessing private data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-lg">🔒</span>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Privacy Preserved</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Your personal information remains encrypted and private</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofHistory;
