import React from "react";

export default function TopicArithmeticOperations() {
  // Example data for basic arithmetic operations
  const arithmeticData = [
    { operation: "Addition", example: "5 + 3", result: 8, formula: "=5+3" },
    { operation: "Subtraction", example: "10 - 4", result: 6, formula: "=10-4" },
    { operation: "Multiplication", example: "6 × 7", result: 42, formula: "=6*7" },
    { operation: "Division", example: "20 ÷ 5", result: 4, formula: "=20/5" },
    { operation: "Exponentiation", example: "2³", result: 8, formula: "=2^3" },
  ];

  // Budget example data
  const budgetData = [
    { category: "Income", amount: 5000 },
    { category: "Rent", amount: -1200 },
    { category: "Utilities", amount: -300 },
    { category: "Groceries", amount: -400 },
    { category: "Transportation", amount: -250 },
    { category: "Entertainment", amount: -200 },
    { category: "Savings", amount: -500 },
  ];

  // Calculate total for budget
  const budgetTotal = budgetData.reduce((sum, item) => sum + item.amount, 0);

  // Sales commission example data
  const salesData = [
    { salesperson: "Alice", sales: 12500, commissionRate: 0.08 },
    { salesperson: "Bob", sales: 9800, commissionRate: 0.07 },
    { salesperson: "Charlie", sales: 15300, commissionRate: 0.09 },
    { salesperson: "Diana", sales: 11200, commissionRate: 0.08 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        Arithmetic Operations in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Arithmetic operations are the foundation of Excel calculations. You can perform 
        basic math operations like addition, subtraction, multiplication, and division 
        directly in cells using formulas. Excel follows the standard order of operations 
        (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) 
        when evaluating formulas.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          If you're managing a budget, you can use arithmetic operations to calculate 
          your total income, expenses, and remaining balance. For example, to calculate 
          your monthly savings, you could subtract your total expenses from your income 
          using a formula like <code>=B2-SUM(C2:C6)</code> where B2 contains your income 
          and C2:C6 contains your various expenses.
        </p>
      </div>

      {/* Basic Operations Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Basic Arithmetic Operators
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#217346] text-white">
              <tr>
                <th className="px-4 py-2 border">Operation</th>
                <th className="px-4 py-2 border">Example</th>
                <th className="px-4 py-2 border">Result</th>
                <th className="px-4 py-2 border">Excel Formula</th>
              </tr>
            </thead>
            <tbody>
              {arithmeticData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="px-4 py-2 border font-medium">{row.operation}</td>
                  <td className="px-4 py-2 border">{row.example}</td>
                  <td className="px-4 py-2 border">{row.result}</td>
                  <td className="px-4 py-2 border font-mono text-[#217346]">{row.formula}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Practice Examples */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📝 Practice Examples
        </h3>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Monthly Budget Calculator:</strong> Create a spreadsheet to track your 
            monthly income and expenses. Use arithmetic operations to calculate:
            <ul className="list-disc pl-6 mt-2">
              <li>Total expenses using the SUM function</li>
              <li>Remaining balance after expenses (Income - Total Expenses)</li>
              <li>Percentage of income spent on each category</li>
            </ul>
          </li>
          <li>
            <strong>Sales Commission Calculator:</strong> Create a table for sales staff 
            with their sales amounts and commission rates. Calculate:
            <ul className="list-disc pl-6 mt-2">
              <li>Commission amount for each person (Sales × Commission Rate)</li>
              <li>Total sales across all staff</li>
              <li>Average commission rate</li>
              <li>Highest and lowest commission amounts</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Budget Calculator Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Monthly Budget Calculator Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows a monthly budget with arithmetic operations to calculate 
            totals and remaining balance.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                {budgetData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border">{row.category}</td>
                    <td className={`px-4 py-2 border ${
                      row.amount >= 0 ? "text-green-600" : "text-red-600"
                    }`}>
                      {row.amount >= 0 ? `+${row.amount}` : row.amount}
                    </td>
                  </tr>
                ))}
                {/* Total row */}
                <tr className="bg-[#eef5f1] font-semibold">
                  <td className="px-4 py-2 border">Remaining Balance</td>
                  <td className={`px-4 py-2 border ${
                    budgetTotal >= 0 ? "text-green-600" : "text-red-600"
                  }`}>
                    ${budgetTotal}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Formulas used:</strong> SUM function to calculate total expenses, 
            subtraction to find remaining balance (Income - Total Expenses)
          </p>
        </div>

        {/* Sales Commission Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Commission Calculator Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates arithmetic operations to calculate commissions 
            based on sales amounts and commission rates.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Salesperson</th>
                  <th className="px-4 py-2 border">Sales ($)</th>
                  <th className="px-4 py-2 border">Commission Rate</th>
                  <th className="px-4 py-2 border">Commission ($)</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((row, idx) => {
                  const commission = row.sales * row.commissionRate;
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border">{row.salesperson}</td>
                      <td className="px-4 py-2 border">${row.sales.toLocaleString()}</td>
                      <td className="px-4 py-2 border">{(row.commissionRate * 100).toFixed(1)}%</td>
                      <td className="px-4 py-2 border font-semibold text-[#217346]">
                        ${commission.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
                {/* Summary row */}
                <tr className="bg-[#eef5f1] font-semibold">
                  <td className="px-4 py-2 border" colSpan="3">Total Commission</td>
                  <td className="px-4 py-2 border text-[#217346]">
                    ${salesData.reduce((sum, row) => sum + (row.sales * row.commissionRate), 0).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Formulas used:</strong> Multiplication to calculate commission 
            (Sales × Commission Rate), SUM function to calculate total commission
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the practice exercises already set up. 
          You can explore the formulas, try modifying the values, and see how 
          the calculations update automatically.
        </p>
        <div className="space-y-3">
          <a
            href="/budget_calculator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Budget Calculator Example
          </a>
          <a
            href="/sales_commission_calculator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Commission Calculator Example
          </a>
        </div>
      </div>
    </div>
  );
}