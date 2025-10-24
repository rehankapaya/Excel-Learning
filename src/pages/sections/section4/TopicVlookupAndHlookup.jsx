import React, { useState } from "react";

export default function TopicVlookupHlookup() {
  const [productId, setProductId] = useState("P1001");
  const [quarter, setQuarter] = useState("Q1");
  const [employeeId, setEmployeeId] = useState("E001");

  // Lookup functions reference
  const lookupFunctions = [
    { 
      function: "VLOOKUP", 
      syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])", 
      description: "Vertical lookup - searches for a value in the first column of a table and returns a value in the same row from a specified column",
      example: "=VLOOKUP(A2, D2:F100, 3, FALSE)" 
    },
    { 
      function: "HLOOKUP", 
      syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])", 
      description: "Horizontal lookup - searches for a value in the first row of a table and returns a value in the same column from a specified row",
      example: "=HLOOKUP(A2, B1:F5, 3, FALSE)" 
    },
    { 
      function: "XLOOKUP", 
      syntax: "=XLOOKUP(lookup_value, lookup_array, return_array)", 
      description: "Modern replacement for VLOOKUP/HLOOKUP (Excel 365) - more flexible and powerful",
      example: "=XLOOKUP(A2, B2:B100, C2:C100)" 
    },
  ];

  // Product database for VLOOKUP example
  const productDatabase = [
    { productId: "P1001", productName: "Wireless Mouse", category: "Electronics", price: 29.99, stock: 45 },
    { productId: "P1002", productName: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 23 },
    { productId: "P1003", productName: "Office Chair", category: "Furniture", price: 199.99, stock: 12 },
    { productId: "P1004", productName: "Desk Lamp", category: "Furniture", price: 45.50, stock: 34 },
    { productId: "P1005", productName: "Laptop Stand", category: "Accessories", price: 35.00, stock: 56 },
    { productId: "P1006", productName: "Monitor 24\"", category: "Electronics", price: 179.99, stock: 18 },
    { productId: "P1007", productName: "Webcam HD", category: "Electronics", price: 59.99, stock: 67 },
  ];

  // Quarterly sales data for HLOOKUP example
  const quarterlySales = {
    headers: ["Product", "Q1", "Q2", "Q3", "Q4", "Total"],
    data: [
      { product: "Wireless Mouse", Q1: 12500, Q2: 14200, Q3: 13800, Q4: 15600, Total: 56100 },
      { product: "Mechanical Keyboard", Q1: 8900, Q2: 11200, Q3: 10500, Q4: 12100, Total: 42700 },
      { product: "Office Chair", Q1: 15300, Q2: 16800, Q3: 16200, Q4: 17500, Total: 65800 },
      { product: "Desk Lamp", Q1: 7200, Q2: 8500, Q3: 7800, Q4: 9200, Total: 32700 },
      { product: "Laptop Stand", Q1: 11200, Q2: 12500, Q3: 13100, Q4: 14200, Total: 51000 },
    ]
  };

  // Employee directory for combined example
  const employeeDirectory = [
    { employeeId: "E001", firstName: "John", lastName: "Smith", department: "Sales", salary: 65000 },
    { employeeId: "E002", firstName: "Sarah", lastName: "Johnson", department: "Marketing", salary: 58000 },
    { employeeId: "E003", firstName: "Mike", lastName: "Chen", department: "IT", salary: 75000 },
    { employeeId: "E004", firstName: "Emily", lastName: "Davis", department: "HR", salary: 52000 },
    { employeeId: "E005", firstName: "David", lastName: "Wilson", department: "Finance", salary: 68000 },
  ];

  // Find product using VLOOKUP simulation
  const foundProduct = productDatabase.find(product => product.productId === productId) || productDatabase[0];

  // Find quarterly sales using HLOOKUP simulation
  const quarterData = quarterlySales.data.find(item => item.product === foundProduct.productName);
  const quarterSales = quarterData ? quarterData[quarter] : 0;

  // Find employee using VLOOKUP simulation
  const foundEmployee = employeeDirectory.find(emp => emp.employeeId === employeeId) || employeeDirectory[0];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        VLOOKUP and HLOOKUP Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        VLOOKUP and HLOOKUP are essential lookup functions that allow you to search for specific 
        data in tables and retrieve corresponding values. VLOOKUP searches vertically down a column, 
        while HLOOKUP searches horizontally across a row. These functions are fundamental for data 
        analysis, report generation, and dynamic data retrieval in Excel.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For product lookups: <code>=VLOOKUP("P1001", A2:D100, 3, FALSE)</code> finds product ID "P1001" 
          in the first column and returns the value from the 3rd column (price). For quarterly reports: 
          <code>=HLOOKUP("Q2", A1:E5, 3, FALSE)</code> finds "Q2" in the first row and returns the value 
          from the 3rd row (sales data).
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Lookup Functions Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#217346] text-white">
              <tr>
                <th className="px-4 py-2 border">Function</th>
                <th className="px-4 py-2 border">Syntax</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Example</th>
              </tr>
            </thead>
            <tbody>
              {lookupFunctions.map((func, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="px-4 py-2 border font-medium">{func.function}</td>
                  <td className="px-4 py-2 border font-mono text-[#217346] text-sm">{func.syntax}</td>
                  <td className="px-4 py-2 border">{func.description}</td>
                  <td className="px-4 py-2 border font-mono text-sm">{func.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VLOOKUP vs HLOOKUP Comparison */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 VLOOKUP vs HLOOKUP Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">VLOOKUP (Vertical Lookup)</h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-600">
              <li>Searches first column of a range</li>
              <li>Returns value from same row, different column</li>
              <li>Use when lookup values are in a column</li>
              <li>Common for product databases, employee directories</li>
              <li>Column index number specifies return column</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">HLOOKUP (Horizontal Lookup)</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Searches first row of a range</li>
              <li>Returns value from same column, different row</li>
              <li>Use when lookup values are in a row</li>
              <li>Common for time-based data, quarterly reports</li>
              <li>Row index number specifies return row</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practice Examples */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📝 Practice Examples
        </h3>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Product Database Lookup System:</strong> Create a product information system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses VLOOKUP to find product details by ID</li>
              <li>Retrieves multiple product attributes (name, category, price, stock)</li>
              <li>Uses HLOOKUP to find quarterly sales data</li>
              <li>Combines lookups for comprehensive product analysis</li>
            </ul>
          </li>
          <li>
            <strong>Employee Directory and Salary Lookup:</strong> Build an employee management system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses VLOOKUP to find employee information by ID</li>
              <li>Retrieves personal and professional details</li>
              <li>Creates dynamic employee profiles</li>
              <li>Demonstrates practical business applications</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Lookup Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Select Product ID (VLOOKUP):
          </label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
          >
            {productDatabase.map(product => (
              <option key={product.productId} value={product.productId}>
                {product.productId} - {product.productName}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Select Quarter (HLOOKUP):
          </label>
          <select
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
          >
            <option value="Q1">Q1 - First Quarter</option>
            <option value="Q2">Q2 - Second Quarter</option>
            <option value="Q3">Q3 - Third Quarter</option>
            <option value="Q4">Q4 - Fourth Quarter</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Select Employee ID (VLOOKUP):
          </label>
          <select
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
          >
            {employeeDirectory.map(emp => (
              <option key={emp.employeeId} value={emp.employeeId}>
                {emp.employeeId} - {emp.firstName} {emp.lastName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Product Database VLOOKUP Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Product Database Lookup System
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use VLOOKUP to retrieve product information from a database 
            and HLOOKUP to find quarterly sales data.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Product Database Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Product Database (VLOOKUP Source)</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Product ID</th>
                      <th className="px-3 py-2 border">Product Name</th>
                      <th className="px-3 py-2 border">Category</th>
                      <th className="px-3 py-2 border">Price</th>
                      <th className="px-3 py-2 border">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productDatabase.map((product, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                          product.productId === productId ? "ring-2 ring-blue-500 bg-blue-50" : ""
                        }`}
                      >
                        <td className="px-3 py-2 border font-mono">{product.productId}</td>
                        <td className="px-3 py-2 border">{product.productName}</td>
                        <td className="px-3 py-2 border">{product.category}</td>
                        <td className="px-3 py-2 border">${product.price}</td>
                        <td className="px-3 py-2 border">{product.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* VLOOKUP Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">VLOOKUP Results</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">Looking up: <strong>{productId}</strong></div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-semibold">Product Name:</div>
                  <div className="text-green-600 font-semibold">{foundProduct.productName}</div>
                  
                  <div className="font-semibold">Category:</div>
                  <div className="text-blue-600">{foundProduct.category}</div>
                  
                  <div className="font-semibold">Price:</div>
                  <div className="text-purple-600 font-semibold">${foundProduct.price}</div>
                  
                  <div className="font-semibold">Stock:</div>
                  <div className={foundProduct.stock > 20 ? "text-green-600" : "text-red-600"}>
                    {foundProduct.stock} units
                  </div>
                </div>

                <div className="mt-4 p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel VLOOKUP Formulas:</strong>
                    <div className="mt-1">Name: =VLOOKUP({productId}, A2:E8, 2, FALSE)</div>
                    <div>Category: =VLOOKUP({productId}, A2:E8, 3, FALSE)</div>
                    <div>Price: =VLOOKUP({productId}, A2:E8, 4, FALSE)</div>
                    <div>Stock: =VLOOKUP({productId}, A2:E8, 5, FALSE)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quarterly Sales HLOOKUP Section */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">Quarterly Sales Data (HLOOKUP Source)</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-[#217346] text-white">
                  <tr>
                    {quarterlySales.headers.map((header, idx) => (
                      <th 
                        key={idx} 
                        className={`px-3 py-2 border ${
                          header === quarter ? "bg-blue-600" : ""
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {quarterlySales.data.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                        row.product === foundProduct.productName ? "ring-2 ring-green-500 bg-green-50" : ""
                      }`}
                    >
                      <td className="px-3 py-2 border font-medium">{row.product}</td>
                      <td className="px-3 py-2 border">${row.Q1.toLocaleString()}</td>
                      <td className="px-3 py-2 border">${row.Q2.toLocaleString()}</td>
                      <td className="px-3 py-2 border">${row.Q3.toLocaleString()}</td>
                      <td className="px-3 py-2 border">${row.Q4.toLocaleString()}</td>
                      <td className="px-3 py-2 border font-semibold text-[#217346]">
                        ${row.Total.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">HLOOKUP Result</h5>
                <div className="text-sm">
                  <div>Product: <strong>{foundProduct.productName}</strong></div>
                  <div>Quarter: <strong>{quarter}</strong></div>
                  <div className="text-lg font-bold text-green-600 mt-1">
                    Sales: ${quarterSales?.toLocaleString() || "0"}
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-xs font-mono">
                  <strong>Excel HLOOKUP Formula:</strong>
                  <div className="mt-1">
                    =HLOOKUP("{quarter}", A1:F6, {quarterlySales.data.findIndex(item => item.product === foundProduct.productName) + 2}, FALSE)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Directory VLOOKUP Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Directory and Salary Lookup
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use VLOOKUP to create an employee information system 
            that retrieves comprehensive employee details based on employee ID.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Employee Directory Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Employee Directory (VLOOKUP Source)</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Employee ID</th>
                      <th className="px-3 py-2 border">First Name</th>
                      <th className="px-3 py-2 border">Last Name</th>
                      <th className="px-3 py-2 border">Department</th>
                      <th className="px-3 py-2 border">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeDirectory.map((employee, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                          employee.employeeId === employeeId ? "ring-2 ring-purple-500 bg-purple-50" : ""
                        }`}
                      >
                        <td className="px-3 py-2 border font-mono">{employee.employeeId}</td>
                        <td className="px-3 py-2 border">{employee.firstName}</td>
                        <td className="px-3 py-2 border">{employee.lastName}</td>
                        <td className="px-3 py-2 border">{employee.department}</td>
                        <td className="px-3 py-2 border">${employee.salary.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* VLOOKUP Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Employee Profile Lookup</h4>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-sm text-purple-800">Looking up: <strong>{employeeId}</strong></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="font-semibold">Full Name:</div>
                  <div className="text-green-600 font-semibold">
                    {foundEmployee.firstName} {foundEmployee.lastName}
                  </div>
                  
                  <div className="font-semibold">Department:</div>
                  <div className="text-blue-600">{foundEmployee.department}</div>
                  
                  <div className="font-semibold">Annual Salary:</div>
                  <div className="text-purple-600 font-semibold">
                    ${foundEmployee.salary.toLocaleString()}
                  </div>
                  
                  <div className="font-semibold">Monthly Salary:</div>
                  <div className="text-green-600">
                    ${Math.round(foundEmployee.salary / 12).toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="text-sm text-yellow-800">
                    <strong>Department Summary:</strong> There are {" "}
                    {employeeDirectory.filter(emp => emp.department === foundEmployee.department).length} {" "}
                    employees in {foundEmployee.department}
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel VLOOKUP Formulas:</strong>
                    <div className="mt-1">Name: =VLOOKUP({employeeId}, A2:E6, 2, FALSE) & " " & VLOOKUP({employeeId}, A2:E6, 3, FALSE)</div>
                    <div>Department: =VLOOKUP({employeeId}, A2:E6, 4, FALSE)</div>
                    <div>Salary: =VLOOKUP({employeeId}, A2:E6, 5, FALSE)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-orange-50 p-4 rounded border border-orange-200">
        <h3 className="text-lg font-semibold text-orange-800 mb-2">💡 Pro Tips for VLOOKUP/HLOOKUP</h3>
        <ul className="list-disc pl-6 text-orange-700 space-y-1">
          <li>Always use FALSE for exact matches (fourth argument) to avoid unexpected results</li>
          <li>VLOOKUP can only look rightward - lookup column must be leftmost in the range</li>
          <li>HLOOKUP can only look downward - lookup row must be topmost in the range</li>
          <li>Use absolute references ($A$1:$E$100) for table_array to prevent errors when copying formulas</li>
          <li>For more flexibility, consider INDEX/MATCH combination or XLOOKUP (Excel 365)</li>
          <li>Handle #N/A errors with IFERROR: =IFERROR(VLOOKUP(...), "Not Found")</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with VLOOKUP and HLOOKUP exercises already set up. 
          You can practice different lookup scenarios, modify the data, and master these 
          essential Excel functions.
        </p>
        <div className="space-y-3">
          <a
            href="/product_lookup_system.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Product Lookup System
          </a>
          <a
            href="/employee_directory_lookup.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Employee Directory Lookup
          </a>
        </div>
      </div>
    </div>
  );
}