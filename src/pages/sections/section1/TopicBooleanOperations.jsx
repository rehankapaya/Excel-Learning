import React from "react";

export default function TopicBooleanOperations() {
  // Boolean operators reference
  const booleanOperators = [
    { operator: "Equal to", symbol: "=", example: "A1 = B1", description: "Returns TRUE if values are equal" },
    { operator: "Not equal to", symbol: "<>", example: "A1 <> B1", description: "Returns TRUE if values are not equal" },
    { operator: "Greater than", symbol: ">", example: "A1 > B1", description: "Returns TRUE if first value is greater" },
    { operator: "Less than", symbol: "<", example: "A1 < B1", description: "Returns TRUE if first value is smaller" },
    { operator: "Greater than or equal to", symbol: ">=", example: "A1 >= B1", description: "Returns TRUE if first value is greater or equal" },
    { operator: "Less than or equal to", symbol: "<=", example: "A1 <= B1", description: "Returns TRUE if first value is smaller or equal" },
    { operator: "AND", symbol: "AND()", example: "AND(A1>10, B1<5)", description: "Returns TRUE if all conditions are TRUE" },
    { operator: "OR", symbol: "OR()", example: "OR(A1>10, B1<5)", description: "Returns TRUE if any condition is TRUE" },
    { operator: "NOT", symbol: "NOT()", example: "NOT(A1>10)", description: "Returns the opposite logical value" },
  ];

  // Student grades example data
  const studentData = [
    { name: "Alice", math: 85, science: 92, english: 78, attendance: 95 },
    { name: "Bob", math: 72, science: 68, english: 81, attendance: 88 },
    { name: "Charlie", math: 93, science: 89, english: 95, attendance: 76 },
    { name: "Diana", math: 65, science: 71, english: 62, attendance: 92 },
    { name: "Ethan", math: 88, science: 84, english: 90, attendance: 98 },
  ];

  // Product inventory example data
  const inventoryData = [
    { product: "Laptop", category: "Electronics", price: 899, stock: 15, reorderLevel: 10 },
    { product: "Desk Chair", category: "Furniture", price: 199, stock: 8, reorderLevel: 5 },
    { product: "Monitor", category: "Electronics", price: 349, stock: 12, reorderLevel: 8 },
    { product: "Notebook", category: "Stationery", price: 12, stock: 3, reorderLevel: 15 },
    { product: "Headphones", category: "Electronics", price: 129, stock: 22, reorderLevel: 12 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        Boolean Operations in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Boolean operations in Excel allow you to perform logical tests and comparisons 
        between values. These operations return either TRUE or FALSE based on whether 
        the specified condition is met. Boolean logic is fundamental for decision-making 
        in formulas, conditional formatting, data validation, and filtering.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          If you're managing student grades, you can use Boolean operations to 
          automatically determine who passes or fails based on multiple criteria. 
          For example, you might create a formula like <code>{`=AND(AVERAGE(B2:D2)>=70, E2>=80)`}</code> 
          to check if a student has an average grade of 70 or higher AND attendance 
          of 80% or more. This would return TRUE for passing students and FALSE for those who fail.
        </p>
      </div>

      {/* Boolean Operators Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Boolean Operators Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#217346] text-white">
              <tr>
                <th className="px-4 py-2 border">Operator</th>
                <th className="px-4 py-2 border">Symbol</th>
                <th className="px-4 py-2 border">Example</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {booleanOperators.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="px-4 py-2 border font-medium">{row.operator}</td>
                  <td className="px-4 py-2 border font-mono text-[#217346]">{row.symbol}</td>
                  <td className="px-4 py-2 border font-mono">{row.example}</td>
                  <td className="px-4 py-2 border">{row.description}</td>
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
            <strong>Student Pass/Fail Evaluation:</strong> Create a spreadsheet to evaluate 
            student performance based on multiple criteria:
            <ul className="list-disc pl-6 mt-2">
              <li>Check if average grade is 70 or higher</li>
              <li>Verify attendance is at least 80%</li>
              <li>Ensure no single subject grade is below 60</li>
              <li>Return "PASS" if all conditions are met, "FAIL" otherwise</li>
            </ul>
          </li>
          <li>
            <strong>Inventory Management System:</strong> Create a product inventory table 
            with Boolean operations to:
            <ul className="list-disc pl-6 mt-2">
              <li>Identify items that need reordering (stock ≤ reorder level)</li>
              <li>Flag high-value electronics (Electronics category AND price ≥ 300)</li>
              <li>Highlight items with critically low stock (stock ≤ 5)</li>
              <li>Create a summary of urgent reorder needs</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Student Evaluation Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Pass/Fail Evaluation Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how Boolean operations can evaluate student performance 
            based on multiple criteria using AND logic.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Math</th>
                  <th className="px-4 py-2 border">Science</th>
                  <th className="px-4 py-2 border">English</th>
                  <th className="px-4 py-2 border">Attendance (%)</th>
                  <th className="px-4 py-2 border">Average</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student, idx) => {
                  const average = (student.math + student.science + student.english) / 3;
                  const hasFailingGrade = student.math < 60 || student.science < 60 || student.english < 60;
                  const passes = average >= 70 && student.attendance >= 80 && !hasFailingGrade;
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{student.name}</td>
                      <td className="px-4 py-2 border">{student.math}</td>
                      <td className="px-4 py-2 border">{student.science}</td>
                      <td className="px-4 py-2 border">{student.english}</td>
                      <td className="px-4 py-2 border">{student.attendance}</td>
                      <td className="px-4 py-2 border">{average.toFixed(1)}</td>
                      <td className={`px-4 py-2 border font-semibold ${
                        passes ? "text-green-600" : "text-red-600"
                      }`}>
                        {passes ? "PASS" : "FAIL"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Formulas used:</strong> AND operator to check multiple conditions, 
            comparison operators to evaluate grades and attendance, 
            AVERAGE function to calculate overall performance
          </p>
        </div>

        {/* Inventory Management Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Inventory Management Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates Boolean operations for inventory management, 
            identifying products that need attention based on multiple criteria.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Product</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Price ($)</th>
                  <th className="px-4 py-2 border">Stock</th>
                  <th className="px-4 py-2 border">Reorder Level</th>
                  <th className="px-4 py-2 border">Needs Reorder</th>
                  <th className="px-4 py-2 border">High-Value Electronic</th>
                  <th className="px-4 py-2 border">Critical Stock</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item, idx) => {
                  const needsReorder = item.stock <= item.reorderLevel;
                  const isHighValueElectronic = item.category === "Electronics" && item.price >= 300;
                  const isCriticalStock = item.stock <= 5;
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{item.product}</td>
                      <td className="px-4 py-2 border">{item.category}</td>
                      <td className="px-4 py-2 border">${item.price}</td>
                      <td className="px-4 py-2 border">{item.stock}</td>
                      <td className="px-4 py-2 border">{item.reorderLevel}</td>
                      <td className={`px-4 py-2 border font-semibold ${
                        needsReorder ? "text-red-600" : "text-green-600"
                      }`}>
                        {needsReorder ? "YES" : "No"}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        isHighValueElectronic ? "text-blue-600" : "text-gray-600"
                      }`}>
                        {isHighValueElectronic ? "YES" : "No"}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        isCriticalStock ? "text-red-600" : "text-gray-600"
                      }`}>
                        {isCriticalStock ? "CRITICAL" : "OK"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Formulas used:</strong> Comparison operators to check stock levels, 
            AND operator to combine multiple conditions, 
            IF statements to return appropriate status messages
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the Boolean operation exercises already set up. 
          You can explore the logical formulas, test different scenarios, and see how 
          Boolean operations work in practical applications.
        </p>
        <div className="space-y-3">
          <a
            href="/student_evaluation.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Evaluation Example
          </a>
          <a
            href="/inventory_management.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Inventory Management Example
          </a>
        </div>
      </div>
    </div>
  );
}