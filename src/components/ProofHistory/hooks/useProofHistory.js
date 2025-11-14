import {useState, useEffect} from "react";
import {generateProofData, PROOF_TYPES} from "../../../utils/proofData";

export const useProofHistory = () => {
  const [proofs, setProofs] = useState([]);
  const [filteredProofs, setFilteredProofs] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = generateProofData();
      setProofs(data);
      setFilteredProofs(data);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = proofs;

    // Filter by type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((proof) => selectedTypes.includes(proof.type));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((proof) => proof.proofId.toLowerCase().includes(query) || proof.hash.toLowerCase().includes(query) || proof.details.toLowerCase().includes(query));
    }

    setFilteredProofs(filtered);
  }, [proofs, selectedTypes, searchQuery]);

  const toggleTypeFilter = (type) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  const clearFilters = () => {
    setSelectedTypes([]);
    setSearchQuery("");
  };

  return {
    proofs: filteredProofs,
    selectedTypes,
    searchQuery,
    setSearchQuery,
    toggleTypeFilter,
    clearFilters,
    isLoading,
    totalProofs: proofs.length,
    filteredCount: filteredProofs.length,
  };
};
