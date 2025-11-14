import React, {useState} from "react";
import Modal from "../../components/Modal/Modal";

const History = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dateRange, setDateRange] = useState("7d");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    {
      id: 1,
      type: "trade",
      action: "Buy",
      asset: "ETH",
      amount: "0.5",
      price: "$1,625.00",
      total: "$812.50",
      status: "Completed",
      timestamp: "2024-01-15 14:30:25",
      txHash: "0x1a2b3c4d5e6f7890abcdef1234567890",
      from: "0x1234...5678",
      to: "0xabcd...efgh",
      fee: "$12.50",
    },
    {
      id: 2,
      type: "verify",
      action: "Verification",
      asset: "KYC",
      amount: "1",
      price: "Free",
      total: "$0.00",
      status: "Verified",
      timestamp: "2024-01-15 13:15:42",
      txHash: "0x7g8h9i0j1k2l3456mnop7890qrstuv",
      from: "User Wallet",
      to: "Verification System",
      fee: "$0.00",
    },
    {
      id: 3,
      type: "burn",
      action: "Token Burn",
      asset: "MRP",
      amount: "100",
      price: "$125.50",
      total: "$12,550.00",
      status: "Completed",
      timestamp: "2024-01-14 16:20:18",
      txHash: "0x3m4n5o6p7q8r9012stuv3456wxyzab",
      from: "User Wallet",
      to: "Burn Address",
      fee: "$5.00",
    },
    {
      id: 4,
      type: "trade",
      action: "Sell",
      asset: "BTC",
      amount: "0.1",
      price: "$42,800.00",
      total: "$4,280.00",
      status: "Failed",
      timestamp: "2024-01-14 11:45:33",
      txHash: "0x9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4",
      from: "User Wallet",
      to: "Exchange",
      fee: "$42.80",
    },
    {
      id: 5,
      type: "trade",
      action: "Buy",
      asset: "SOL",
      amount: "25",
      price: "$102.30",
      total: "$2,557.50",
      status: "Completed",
      timestamp: "2024-01-13 09:20:15",
      txHash: "0x5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0",
      from: "0x5678...9012",
      to: "User Wallet",
      fee: "$7.50",
    },
  ];

  const filters = [
    {id: "all", label: "All", count: transactions.length},
    {id: "trade", label: "Trades", count: transactions.filter((t) => t.type === "trade").length},
    {id: "verify", label: "Verifications", count: transactions.filter((t) => t.type === "verify").length},
    {id: "burn", label: "Burns", count: transactions.filter((t) => t.type === "burn").length},
  ];

  const dateRanges = [
    {id: "24h", label: "24 Hours"},
    {id: "7d", label: "7 Days"},
    {id: "30d", label: "30 Days"},
    {id: "90d", label: "90 Days"},
  ];

  const filteredTransactions = transactions.filter((transaction) => activeFilter === "all" || transaction.type === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500 bg-green-500/10";
      case "Verified":
        return "text-blue-500 bg-blue-500/10";
      case "Pending":
        return "text-yellow-500 bg-yellow-500/10";
      case "Failed":
        return "text-red-500 bg-red-500/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "trade":
        return "💰";
      case "verify":
        return "🔍";
      case "burn":
        return "🔥";
      default:
        return "📄";
    }
  };

  // TransactionRow dengan layout flex yang proper
  const TransactionRow = ({transaction}) => (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
      {/* Mobile View */}
      <div className="lg:hidden space-y-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <span className="text-lg">{getTypeIcon(transaction.type)}</span>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {transaction.action} {transaction.asset}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {transaction.amount} {transaction.asset}
              </div>
            </div>
          </div>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>{transaction.status}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <div className="text-gray-500 dark:text-gray-400">Total</div>
            <div className="font-semibold text-gray-900 dark:text-white">{transaction.total}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400">Date</div>
            <div className="text-gray-900 dark:text-white">{new Date(transaction.timestamp).toLocaleDateString()}</div>
          </div>
        </div>

        <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-mono truncate max-w-[120px]">{transaction.txHash}</div>
          <button onClick={() => setSelectedTransaction(transaction)} className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
            Details
          </button>
        </div>
      </div>

      {/* Desktop View - Flex Layout */}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-6 text-sm">
        {/* Type & Icon */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <span className="text-lg flex-shrink-0">{getTypeIcon(transaction.type)}</span>
          <span className="font-medium text-gray-900 dark:text-white truncate">{transaction.action}</span>
        </div>

        {/* Asset */}
        <div className="flex-1 min-w-0">
          <span className="font-medium text-gray-900 dark:text-white truncate">{transaction.asset}</span>
        </div>

        {/* Amount */}
        <div className="flex-1 min-w-0">
          <span className="text-gray-900 dark:text-white truncate">{transaction.amount}</span>
        </div>

        {/* Total Value */}
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-gray-900 dark:text-white truncate">{transaction.total}</span>
        </div>

        {/* Status */}
        <div className="flex-1 min-w-0">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>{transaction.status}</span>
        </div>

        {/* Date */}
        <div className="flex-1 min-w-0">
          <div className="text-gray-500 dark:text-gray-400 truncate">{new Date(transaction.timestamp).toLocaleDateString()}</div>
          <div className="text-xs text-gray-400 dark:text-gray-500 truncate">{new Date(transaction.timestamp).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</div>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0">
          <button onClick={() => setSelectedTransaction(transaction)} className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  // Table Header dengan flex layout
  const TableHeader = () => (
    <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-6 px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-primary text-sm font-semibold text-gray-700 dark:text-gray-300">
      <div className="flex-1 min-w-0">Type</div>
      <div className="flex-1 min-w-0">Asset</div>
      <div className="flex-1 min-w-0">Amount</div>
      <div className="flex-1 min-w-0">Total Value</div>
      <div className="flex-1 min-w-0">Status</div>
      <div className="flex-1 min-w-0">Date</div>
      <div className="flex-shrink-0">Actions</div>
    </div>
  );

  const TransactionDetailModal = () => {
    if (!selectedTransaction) return null;

    return (
      <Modal isOpen={!!selectedTransaction} onClose={() => setSelectedTransaction(null)} size="md">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Transaction Details</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
                <p className="text-gray-900 dark:text-white">{selectedTransaction.action}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Asset</label>
                <p className="text-gray-900 dark:text-white">{selectedTransaction.asset}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Amount</label>
                <p className="text-gray-900 dark:text-white">{selectedTransaction.amount}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Total Value</label>
                <p className="text-gray-900 dark:text-white">{selectedTransaction.total}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Transaction Hash</label>
              <p className="font-mono text-gray-900 dark:text-white break-all">{selectedTransaction.txHash}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">From</label>
                <p className="font-mono text-gray-900 dark:text-white break-all">{selectedTransaction.from}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">To</label>
                <p className="font-mono text-gray-900 dark:text-white break-all">{selectedTransaction.to}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedTransaction.status)}`}>{selectedTransaction.status}</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fee</label>
                <p className="text-gray-900 dark:text-white">{selectedTransaction.fee}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Timestamp</label>
              <p className="text-gray-900 dark:text-white">{selectedTransaction.timestamp}</p>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button
              onClick={() => setSelectedTransaction(null)}
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              Close
            </button>
            <button className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">View on Explorer</button>
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">History</h1>
          <p className="text-gray-600 dark:text-gray-400">View your complete transaction history and verification records</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Volume</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">$17,642.50</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          {/* Type Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}>
                {filter.label}
                <span className="ml-2 text-xs opacity-80">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* Date Range */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">Period:</span>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
              {dateRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Table Header */}
        <TableHeader />

        {/* Table Body */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </div>

        {/* Table Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-primary">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredTransactions.length} of {transactions.length} transactions
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">Previous</button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {label: "Total Trades", value: "24", change: "+12%", color: "blue"},
          {label: "Successful Verifications", value: "18", change: "+8%", color: "green"},
          {label: "Token Burns", value: "5", change: "+25%", color: "orange"},
          {label: "Success Rate", value: "94.7%", change: "+2.1%", color: "purple"},
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stat.label}</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
            <div className={`text-sm ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{stat.change} from last period</div>
          </div>
        ))}
      </div>

      <TransactionDetailModal />
    </div>
  );
};

export default History;
