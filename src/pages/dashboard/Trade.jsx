import React, {useState} from "react";
import Modal from "../../components/Modal/Modal";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [transferModal, setTransferModal] = useState(false);
  const [burnModal, setBurnModal] = useState(false);
  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [buyModal, setBuyModal] = useState(false);
  const [tradeAmount, setTradeAmount] = useState("");
  const [tradePrice, setTradePrice] = useState("");

  // Data simulasi
  const activeProofs = [
    {
      id: 1,
      type: "Buy",
      asset: "ETH",
      amount: "0.5",
      status: "Pending",
      time: "2 min ago",
      proof: "zkProof_0x1a2b...",
    },
    {
      id: 2,
      type: "Sell",
      asset: "BTC",
      amount: "0.1",
      status: "Verified",
      time: "5 min ago",
      proof: "zkProof_0x3c4d...",
    },
  ];

  const walletBalance = {
    mrprove: "1,250.50",
    eth: "2.5",
    btc: "0.15",
    sol: "50.0",
  };

  const burnStats = {
    totalBurned: "10,250 MRP",
    todayBurned: "250 MRP",
    burnRate: "5.2%",
    valueBurned: "$12,550",
  };

  const quickActions = [
    {
      icon: "📥",
      label: "Deposit",
      action: () => setDepositModal(true),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📤",
      label: "Withdraw",
      action: () => setWithdrawModal(true),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🔄",
      label: "Transfer",
      action: () => setTransferModal(true),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🔥",
      label: "Burn",
      action: () => setBurnModal(true),
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentTransactions = [
    {id: 1, type: "Buy", asset: "ETH", amount: "0.5", value: "$812.50", time: "2 min ago", status: "Completed"},
    {id: 2, type: "Sell", asset: "BTC", amount: "0.1", value: "$4,280.00", time: "1 hour ago", status: "Completed"},
    {id: 3, type: "Transfer", asset: "MRP", amount: "100", value: "$12,550.00", time: "3 hours ago", status: "Pending"},
    {id: 4, type: "Buy", asset: "SOL", amount: "25", value: "$2,557.50", time: "5 hours ago", status: "Completed"},
  ];

  // Simulasi Buy
  const handleBuy = () => {
    if (!tradeAmount || !tradePrice) {
      setBuyModal(true);
      return;
    }

    const newTransaction = {
      id: recentTransactions.length + 1,
      type: "Buy",
      asset: "MRP",
      amount: tradeAmount,
      value: `$${(parseFloat(tradeAmount) * parseFloat(tradePrice)).toFixed(2)}`,
      time: "Just now",
      status: "Processing",
    };

    // Simulasi: Add to recent transactions
    recentTransactions.unshift(newTransaction);

    // Reset form
    setTradeAmount("");
    setTradePrice("");

    // Show success modal
    setBuyModal(true);
  };

  // Modal Components
  const Modal = ({isOpen, onClose, title, children}) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 w-full max-w-md">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
          {children}
        </div>
      </div>
    );
  };

  const ActionModal = ({isOpen, onClose, title, fields, onConfirm, confirmText = "Confirm"}) => (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="p-6">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{field.label}</label>
              <input
                type={field.type}
                value={field.value}
                onChange={field.onChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-gray-900 dark:text-white"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            Cancel
          </button>
          <button onClick={onConfirm} className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );

  const BuySuccessModal = () => (
    <Modal isOpen={buyModal} onClose={() => setBuyModal(false)} size="sm">
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trade Successful!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Your buy order for {tradeAmount} MRP has been placed successfully!</p>
        <button onClick={() => setBuyModal(false)} className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold">
          Continue Trading
        </button>
      </div>
    </Modal>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">Trade</h1>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">${walletBalance.mrprove}</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">$</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Trading Area */}
        <div className="xl:col-span-2 space-y-6">
          {/* Trading Card */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6">
              {["buy", "sell", "swap"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === tab ? "bg-blue-500 text-white shadow-lg" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Trading Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="0.00"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  />
                  <div className="absolute right-3 top-3">
                    <select className="bg-gray-100 dark:bg-gray-700 border-0 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-white">
                      <option>MRP</option>
                      <option>ETH</option>
                      <option>BTC</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price (USD)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={tradePrice}
                  onChange={(e) => setTradePrice(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                />
              </div>

              <div className="bg-gray-50 dark:bg-dark-primary rounded-lg p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Total Cost:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${tradeAmount && tradePrice ? (parseFloat(tradeAmount) * parseFloat(tradePrice)).toFixed(2) : "0.00"}</span>
                </div>
              </div>

              <button
                onClick={handleBuy}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {activeTab === "buy" ? "Buy Now" : activeTab === "sell" ? "Sell Now" : "Swap Tokens"}
              </button>
            </div>
          </div>

          {/* Recent Transactions - Pindah ke atas */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-primary rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === "Buy" ? "bg-green-500" : tx.type === "Sell" ? "bg-red-500" : "bg-blue-500"}`}>
                      <span className="text-white text-sm">{tx.type === "Buy" ? "📈" : tx.type === "Sell" ? "📉" : "🔄"}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {tx.type} {tx.asset}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {tx.amount} {tx.asset}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">{tx.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{tx.time}</div>
                    <div className={`text-xs ${tx.status === "Completed" ? "text-green-500" : "text-yellow-500"}`}>{tx.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Data */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Market Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {symbol: "MRP/USD", price: "$125.50", change: "+2.5%"},
                {symbol: "ETH/USD", price: "$3,250.75", change: "+1.2%"},
                {symbol: "BTC/USD", price: "$42,800.00", change: "-0.8%"},
                {symbol: "SOL/USD", price: "$102.30", change: "+5.2%"},
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-dark-primary rounded-lg">
                  <div className="font-semibold text-gray-900 dark:text-white">{item.symbol}</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{item.price}</div>
                  <div className={`text-sm ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{item.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={`p-4 rounded-xl bg-gradient-to-r ${action.color} text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                  <div className="text-2xl mb-1">{action.icon}</div>
                  <div className="text-sm">{action.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Proofs */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Proofs</h3>
              <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{activeProofs.length}</span>
            </div>
            <div className="space-y-3">
              {activeProofs.map((proof) => (
                <div key={proof.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-primary rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {proof.type} {proof.asset}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {proof.amount} {proof.asset}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">{proof.proof}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${proof.status === "Verified" ? "text-green-500" : proof.status === "Pending" ? "text-yellow-500" : "text-blue-500"}`}>{proof.status}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{proof.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Burn Statistics */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">🔥 Burn Statistics</h3>
            <div className="space-y-3">
              {Object.entries(burnStats).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-orange-100 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wallet Summary */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Balance</h3>
            <div className="space-y-3">
              {Object.entries(walletBalance).map(([currency, balance]) => (
                <div key={currency} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{currency[0]}</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{currency.toUpperCase()}</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{balance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BuySuccessModal />

      <ActionModal
        isOpen={transferModal}
        onClose={() => setTransferModal(false)}
        title="Transfer Funds"
        fields={[
          {
            label: "To Address",
            type: "text",
            value: "",
            onChange: () => {},
            placeholder: "0x...",
          },
          {
            label: "Amount",
            type: "number",
            value: "",
            onChange: () => {},
            placeholder: "0.00",
          },
        ]}
        onConfirm={() => {
          // Simulasi transfer
          recentTransactions.unshift({
            id: recentTransactions.length + 1,
            type: "Transfer",
            asset: "MRP",
            amount: "100",
            value: "$12,550.00",
            time: "Just now",
            status: "Processing",
          });
          setTransferModal(false);
        }}
        confirmText="Transfer"
      />

      <ActionModal
        isOpen={burnModal}
        onClose={() => setBurnModal(false)}
        title="Burn Tokens"
        fields={[
          {
            label: "Amount to Burn",
            type: "number",
            value: "",
            onChange: () => {},
            placeholder: "0.00",
          },
        ]}
        onConfirm={() => {
          // Simulasi burn
          recentTransactions.unshift({
            id: recentTransactions.length + 1,
            type: "Burn",
            asset: "MRP",
            amount: "50",
            value: "$6,275.00",
            time: "Just now",
            status: "Completed",
          });
          setBurnModal(false);
        }}
        confirmText="Burn Tokens"
      />

      <ActionModal
        isOpen={depositModal}
        onClose={() => setDepositModal(false)}
        title="Deposit Funds"
        fields={[
          {
            label: "Amount",
            type: "number",
            value: "",
            onChange: () => {},
            placeholder: "0.00",
          },
        ]}
        onConfirm={() => {
          // Simulasi deposit
          recentTransactions.unshift({
            id: recentTransactions.length + 1,
            type: "Deposit",
            asset: "USD",
            amount: "500",
            value: "$500.00",
            time: "Just now",
            status: "Completed",
          });
          setDepositModal(false);
        }}
        confirmText="Deposit"
      />

      <ActionModal
        isOpen={withdrawModal}
        onClose={() => setWithdrawModal(false)}
        title="Withdraw Funds"
        fields={[
          {
            label: "Amount",
            type: "number",
            value: "",
            onChange: () => {},
            placeholder: "0.00",
          },
        ]}
        onConfirm={() => {
          // Simulasi withdraw
          recentTransactions.unshift({
            id: recentTransactions.length + 1,
            type: "Withdraw",
            asset: "USD",
            amount: "200",
            value: "$200.00",
            time: "Just now",
            status: "Processing",
          });
          setWithdrawModal(false);
        }}
        confirmText="Withdraw"
      />
    </div>
  );
};

export default Trade;
