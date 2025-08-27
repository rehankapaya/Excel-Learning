import React from "react";

export default function TopicIntroExcel() {
  // Solved Example Data (same as the Excel we generated earlier)
  const solvedData = [
    { product: "Apples", quantity: 10, price: 50, total: 500 },
    { product: "Bananas", quantity: 8, price: 30, total: 240 },
    { product: "Oranges", quantity: 15, price: 40, total: 600 },
    { product: "Mangoes", quantity: 12, price: 60, total: 720 },
    { product: "Grapes", quantity: 20, price: 45, total: 900 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        Introduction to MS Office and MS Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Microsoft Excel is a powerful spreadsheet tool that allows you to store,
        organize, and analyze data. It is part of the Microsoft Office suite and
        is widely used in businesses, education, and personal tasks. Excel works
        in a grid of rows and columns where you can enter numbers, text, and
        formulas to perform calculations and create reports.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          Imagine you run a small shop. You can use Excel to keep track of your
          daily sales. Each row represents a product, and columns represent the
          product name, quantity sold, price, and total sales. By entering a
          formula like <code>=B2*C2</code>, you can automatically calculate the
          total sales for each product. This saves time and reduces errors
          compared to manual calculation.
        </p>
      </div>

      {/* Practice Examples */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📝 Practice Examples
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>
            Open a blank Excel sheet and create a table with 3 columns:{" "}
            <strong>Product Name</strong>, <strong>Quantity</strong>, and{" "}
            <strong>Price</strong>. Enter 5 products of your choice and fill in
            random quantities and prices.
          </li>
          <li>
            Add a fourth column called <strong>Total</strong>. Use a formula (
            <code>=Quantity*Price</code>) to calculate the total cost for each
            product. Try changing the quantity and see how Excel updates the
            total automatically.
          </li>
        </ol>
      </div>

      {/* Solved Example Table */}
      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Solved Example
        </h3>
        <p className="text-gray-700 mb-4">
          Below is the solved version of the practice exercise. Notice how the{" "}
          <code>Total</code> column is calculated using the formula{" "}
          <code>=Quantity*Price</code>.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#217346] text-white">
              <tr>
                <th className="px-4 py-2 border">Product Name</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {solvedData.map((row, idx) => (
                <tr key={idx} className="odd:bg-white even:bg-gray-100">
                  <td className="px-4 py-2 border">{row.product}</td>
                  <td className="px-4 py-2 border">{row.quantity}</td>
                  <td className="px-4 py-2 border">Rs {row.price}</td>
                  <td className="px-4 py-2 border font-semibold text-[#217346]">
                    Rs {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-semibold text-[#25a56a] my-3">
          ✅ Download Solved Example
        </h3>
        <p className="text-gray-700 mb-3">
          We’ve already solved the above exercise and prepared an Excel file for
          you. You can download and open it to see how formulas like{" "}
          <code>=B2*C2</code> are applied to calculate totals automatically.
        </p>
        <a
          href="/excel_practice_example.xlsx"
          download
          className="inline-block bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition"
        >
          📂 Download Solved Example
        </a>
      </div>
    </div>
  );
}
