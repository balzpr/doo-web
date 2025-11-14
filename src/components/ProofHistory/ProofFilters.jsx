import React from "react";
import {PROOF_TYPES} from "../../utils/proofData";

const ProofFilters = ({selectedTypes, toggleTypeFilter, searchQuery, setSearchQuery, clearFilters, totalProofs, filteredCount}) => {
  return (
    <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            placeholder="Search by Proof ID or Hash..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
          />
        </div>
      </div>

      {/* Type Filters */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by Type:</p>
        <div className="flex flex-wrap gap-2">
          {Object.values(PROOF_TYPES).map((type) => (
            <button
              key={type.id}
              onClick={() => toggleTypeFilter(type.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors duration-200 ${
                selectedTypes.includes(type.id)
                  ? `bg-${type.color}-100 dark:bg-${type.color}-900/30 border-${type.color}-300 dark:border-${type.color}-700 text-${type.color}-700 dark:text-${type.color}-300`
                  : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
              <span>{type.icon}</span>
              <span className="text-sm font-medium">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results & Clear */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredCount} of {totalProofs} proofs
        </div>
        {(selectedTypes.length > 0 || searchQuery) && (
          <button onClick={clearFilters} className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
};

export default ProofFilters;
