import React, { useState } from "react";

export default function TopicIfError() {

  const [productId, setProductId] = useState("P1001");
  const [divisionNumerator, setDivisionNumerator] = useState(100);
  const [divisionDenominator, setDivisionDenominator] = useState(25);
  const [employeeId, setEmployeeId] = useState("E001");
  const [lookupValue, setLookupValue] = useState("North");

  // IFERROR functions reference
  const iferrorFunctions = [
    { 
      function: "IFERROR", 
      syntax: "=IFERROR(value, value_if_error)", 
      description: "Returns a custom result when a formula generates an error, otherwise returns the formula result",
      example: "=IFERROR(A1/B1, \"Division by zero\")" 
    },
    { 
      function: "IFNA", 
      syntax: "=IFNA(value, value_if_na)", 
      description: "Returns a custom result only for #N/A errors, otherwise returns the formula result",
      example: "=IFNA(VLOOKUP(A1,B:C,2,FALSE), \"Not found\")" 
    },
    { 
      function: "ISERROR", 
      syntax: "=ISERROR(value)", 
      description: "Returns TRUE if the value is any error value (#N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, #NULL!)",
      example: "=ISERROR(A1/B1)" 
    },
  ];

  // Common Excel errors and their causes
  const excelErrors = [
    { error: "#DIV/0!", cause: "Division by zero", example: "=10/0" },
    { error: "#N/A", cause: "Value not available", example: "=VLOOKUP(\"X\",A:B,2,FALSE)" },
    { error: "#NAME?", cause: "Unrecognized text in formula", example: "=SUMM(A1:A10)" },
    { error: "#NULL!", cause: "Intersection operator used incorrectly", example: "=A1:A10 B1:B10" },
    { error: "#NUM!", cause: "Invalid numeric values", example: "=SQRT(-1)" },
    { error: "#REF!", cause: "Invalid cell reference", example: "=A1 (after deleting column A)" },
    { error: "#VALUE!", cause: "Wrong type of argument", example: "=\"Text\"+5" },
  ];

  // Product database for VLOOKUP example
  const productDatabase = [
    { productId: "P1001", productName: "Wireless Mouse", category: "Electronics", price: 29.99, stock: 45 },
    { productId: "P1002", productName: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 23 },
    { productId: "P1003", productName: "Office Chair", category: "Furniture", price: 199.99, stock: 12 },
    { productId: "P1004", productName: "Desk Lamp", category: "Furniture", price: 45.50, stock: 34 },
  ];

  // Sales data for division example
  const salesData = [
    { region: "North", sales: 12500, target: 10000, performance: 1.25 },
    { region: "South", sales: 8500, target: 12000, performance: 0.71 },
    { region: "East", sales: 0, target: 8000, performance: 0 },
    { region: "West", sales: 11200, target: 11000, performance: 1.02 },
  ];

  // Employee directory
  const employeeDirectory = [
    { employeeId: "E001", name: "John Smith", department: "Sales", salary: 65000 },
    { employeeId: "E002", name: "Sarah Johnson", department: "Marketing", salary: 58000 },
    { employeeId: "E003", name: "Mike Chen", department: "IT", salary: 75000 },
  ];

  // Find product using VLOOKUP simulation (with potential #N/A error)
  const foundProduct = productDatabase.find(product => product.productId === productId);
  const vlookupResult = foundProduct ? foundProduct.productName : "#N/A";
  const vlookupWithIFERROR = foundProduct ? foundProduct.productName : "Product not found";

  // Division calculation (with potential #DIV/0! error)
  const divisionResult = divisionDenominator !== 0 ? divisionNumerator / divisionDenominator : "#DIV/0!";
  const divisionWithIFERROR = divisionDenominator !== 0 ? divisionNumerator / divisionDenominator : "Cannot divide by zero";

  // Find employee (with potential #N/A error)
  const foundEmployee = employeeDirectory.find(emp => emp.employeeId === employeeId);
  const employeeLookupResult = foundEmployee ? foundEmployee.name : "#N/A";
  const employeeLookupWithIFERROR = foundEmployee ? foundEmployee.name : "Employee not found";

  // Region performance calculation
  const regionData = salesData.find(region => region.region === lookupValue);
  const performanceResult = regionData ? (regionData.sales / regionData.target) : "#N/A";
  const performanceWithIFERROR = regionData ? (regionData.sales / regionData.target) : "Region not found";

  // Complex formula with multiple potential errors
  const complexFormula = () => {
    try {
      const product = productDatabase.find(p => p.productId === productId);
      if (!product) return "#N/A";
      return (product.price * 1.1).toFixed(2); // 10% price increase
    } catch (error) {
      return "#VALUE!";
    }
  };

  const complexWithIFERROR = () => {
    try {
      const product = productDatabase.find(p => p.productId === productId);
      if (!product) return "#N/A";
      return (product.price * 1.1).toFixed(2);
    } catch (error) {
      return "Calculation error";
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        IFERROR Function in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The IFERROR function is essential for creating robust, user-friendly Excel spreadsheets. 
        It catches errors from formulas and returns a custom value you specify, preventing error 
        messages from propagating through your worksheets and making your spreadsheets more 
        professional and easier to use.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          Instead of showing #N/A errors: <code>=VLOOKUP(A1,B:C,2,FALSE)</code><br/>
          Use IFERROR for clean results: <code>=IFERROR(VLOOKUP(A1,B:C,2,FALSE), \"Not found\")</code><br/>
          Instead of #DIV/0! errors: <code>=A1/B1</code><br/>
          Use IFERROR: <code>=IFERROR(A1/B1, \"Check inputs\")</code>
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Error Handling Functions Reference
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
              {iferrorFunctions.map((func, idx) => (
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

      {/* Common Excel Errors */}
      <div className="mb-6 bg-red-50 p-4 rounded border border-red-200">
        <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Common Excel Errors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {excelErrors.map((error, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-red-200">
              <div className="font-mono font-bold text-red-600 text-center mb-1">{error.error}</div>
              <div className="text-red-700 text-xs text-center">{error.cause}</div>
              <div className="font-mono text-gray-600 text-xs text-center mt-1">{error.example}</div>
            </div>
          ))}
        </div>
      </div>

      {/* IFERROR vs Without IFERROR Comparison */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 IFERROR vs No Error Handling</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">❌ Without IFERROR</h4>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              <li>Shows ugly error codes to users</li>
              <li>Errors propagate through dependent formulas</li>
              <li>Difficult to identify actual data issues</li>
              <li>Unprofessional appearance</li>
              <li>Can break downstream calculations</li>
              <li>Confusing for end-users</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ With IFERROR</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Clean, user-friendly messages</li>
              <li>Prevents error propagation</li>
              <li>Clear indication of data issues</li>
              <li>Professional appearance</li>
              <li>Robust spreadsheet design</li>
              <li>Better user experience</li>
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
            <strong>Product Lookup with Error Handling:</strong> Create robust lookup systems that:
            <ul className="list-disc pl-6 mt-2">
              <li>Handle #N/A errors from VLOOKUP/XLOOKUP</li>
              <li>Provide meaningful error messages</li>
              <li>Prevent error propagation in dashboards</li>
              <li>Maintain clean data presentation</li>
            </ul>
          </li>
          <li>
            <strong>Division and Calculation Error Handling:</strong> Build calculation systems that:
            <ul className="list-disc pl-6 mt-2">
              <li>Handle #DIV/0! errors from division operations</li>
              <li>Manage #VALUE! errors from type mismatches</li>
              <li>Provide fallback values for calculations</li>
              <li>Create bulletproof financial models</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lookup Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">🔍 Lookup Operations</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Product ID:
              </label>
              <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="P1001">P1001 - Wireless Mouse</option>
                <option value="P1002">P1002 - Mechanical Keyboard</option>
                <option value="P1003">P1003 - Office Chair</option>
                <option value="P1004">P1004 - Desk Lamp</option>
                <option value="P9999">P9999 - Non-existent Product</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Employee ID:
              </label>
              <select
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="E001">E001 - John Smith</option>
                <option value="E002">E002 - Sarah Johnson</option>
                <option value="E003">E003 - Mike Chen</option>
                <option value="E999">E999 - Non-existent Employee</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculation Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">🧮 Calculation Operations</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Numerator:
                </label>
                <input
                  type="number"
                  value={divisionNumerator}
                  onChange={(e) => setDivisionNumerator(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Denominator:
                </label>
                <input
                  type="number"
                  value={divisionDenominator}
                  onChange={(e) => setDivisionDenominator(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Region for Performance:
              </label>
              <select
                value={lookupValue}
                onChange={(e) => setLookupValue(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="Central">Central (Non-existent)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Product Lookup Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Product Lookup with Error Handling
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how IFERROR handles #N/A errors from lookup operations 
            and provides user-friendly alternatives.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Product Database */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Product Database</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Product ID</th>
                      <th className="px-3 py-2 border">Product Name</th>
                      <th className="px-3 py-2 border">Category</th>
                      <th className="px-3 py-2 border">Price</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lookup Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Lookup Operation Results</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Looking up: <strong>{productId}</strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                    <div className="text-lg font-bold text-red-600">{vlookupResult}</div>
                    <div className="text-sm text-red-800">Without IFERROR</div>
                    <div className="text-xs text-red-600 mt-1">Raw VLOOKUP Result</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-lg font-bold text-green-600">{vlookupWithIFERROR}</div>
                    <div className="text-sm text-green-800">With IFERROR</div>
                    <div className="text-xs text-green-600 mt-1">Clean Result</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      Without IFERROR: =VLOOKUP("{productId}", A2:D5, 2, FALSE)
                    </div>
                    <div>
                      With IFERROR: =IFERROR(VLOOKUP("{productId}", A2:D5, 2, FALSE), "Product not found")
                    </div>
                  </div>
                </div>

                {/* Employee Lookup */}
                <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-sm text-purple-800 mb-2">Employee Lookup: {employeeId}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-red-600 font-semibold">{employeeLookupResult}</div>
                      <div className="text-xs text-gray-600">Raw result</div>
                    </div>
                    <div>
                      <div className="text-green-600 font-semibold">{employeeLookupWithIFERROR}</div>
                      <div className="text-xs text-gray-600">With IFERROR</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Division and Calculation Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Division and Calculation Error Handling
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how IFERROR handles #DIV/0! and other calculation errors, 
            providing meaningful feedback instead of error codes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Division Operation */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Division Operation</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded border border-blue-200">
                  <div className="text-2xl font-mono text-blue-800">
                    {divisionNumerator} ÷ {divisionDenominator}
                  </div>
                  <div className="text-sm text-blue-600 mt-1">Calculation</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                    <div className="text-xl font-bold text-red-600">
                      {divisionResult}
                    </div>
                    <div className="text-sm text-red-800">Without IFERROR</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-xl font-bold text-green-600">
                      {divisionWithIFERROR}
                    </div>
                    <div className="text-sm text-green-800">With IFERROR</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      Without IFERROR: ={divisionNumerator}/{divisionDenominator}
                    </div>
                    <div>
                      With IFERROR: =IFERROR({divisionNumerator}/{divisionDenominator}, "Cannot divide by zero")
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Complex Formula */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Complex Formula with Error Handling</h4>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-sm text-purple-800">
                    Calculate 10% price increase for: <strong>{productId}</strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                    <div className="text-lg font-bold text-red-600">
                      {complexFormula()}
                    </div>
                    <div className="text-sm text-red-800">Without IFERROR</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-lg font-bold text-green-600">
                      {complexWithIFERROR()}
                    </div>
                    <div className="text-sm text-green-800">With IFERROR</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formula with IFERROR:</strong>
                    <div className="mt-1">
                      =IFERROR(VLOOKUP("{productId}",A2:D5,4,FALSE)*1.1, "Invalid product")
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Performance Example */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📊 Sales Performance Calculation</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Data */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Sales Data</h5>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-3 py-2 border">Region</th>
                        <th className="px-3 py-2 border">Sales</th>
                        <th className="px-3 py-2 border">Target</th>
                        <th className="px-3 py-2 border">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((region, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-3 py-2 border">{region.region}</td>
                          <td className="px-3 py-2 border">${region.sales.toLocaleString()}</td>
                          <td className="px-3 py-2 border">${region.target.toLocaleString()}</td>
                          <td className="px-3 py-2 border">{region.performance.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Performance Calculation */}
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Performance Lookup: {lookupValue}</h5>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                      <div className="text-xl font-bold text-red-600">
                        {performanceResult}
                      </div>
                      <div className="text-sm text-red-800">Without IFERROR</div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                      <div className="text-xl font-bold text-green-600">
                        {performanceWithIFERROR}
                      </div>
                      <div className="text-sm text-green-800">With IFERROR</div>
                    </div>
                  </div>

                  <div className="p-2 bg-gray-50 rounded">
                    <div className="text-xs font-mono">
                      <strong>Excel Formulas:</strong>
                      <div className="mt-1">
                        Without: =VLOOKUP("{lookupValue}",A2:D5,3,FALSE)/VLOOKUP("{lookupValue}",A2:D5,4,FALSE)
                      </div>
                      <div>
                        With: =IFERROR(VLOOKUP("{lookupValue}",A2:D5,3,FALSE)/VLOOKUP("{lookupValue}",A2:D5,4,FALSE), "Region not found")
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced IFERROR Patterns */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            🚀 Advanced IFERROR Patterns
          </h3>
          <p className="text-gray-700 mb-4">
            These patterns demonstrate sophisticated uses of IFERROR for complex scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nested Lookups */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🔄 Nested Lookups with Fallback</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-mono text-xs">
                    =IFERROR(VLOOKUP(A1, PrimaryTable, 2, FALSE),<br/>
                    IFERROR(VLOOKUP(A1, BackupTable, 2, FALSE),<br/>
                    "Not found in any table"))
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Try primary lookup first, fall back to secondary lookup if first fails
                </div>
              </div>
            </div>

            {/* Complex Calculations */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🧮 Complex Calculation Safety</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded">
                  <div className="font-mono text-xs">
                    =IFERROR((Revenue-Cost)/Revenue,<br/>
                    IF(Cost=0, "Infinite", "Check inputs"))
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Profit margin calculation with multiple error checks
                </div>
              </div>
            </div>

            {/* Data Validation */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">✅ Data Validation Chain</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-purple-50 rounded">
                  <div className="font-mono text-xs">
                    =IFERROR(VALUE(A1),<br/>
                    IFERROR(DATEVALUE(A1),<br/>
                    "Invalid number or date"))
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Try to parse as number, then as date, finally show error
                </div>
              </div>
            </div>

            {/* Dashboard Metrics */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">📈 Dashboard Metrics</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-yellow-50 rounded">
                  <div className="font-mono text-xs">
                    =IFERROR(SUMIFS(Sales,Region,A1)/SUMIFS(Target,Region,A1),<br/>
                    "No data for region")
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Performance metrics that handle missing regional data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for IFERROR</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>Use meaningful error messages that help users understand what went wrong</li>
          <li>Consider using IFNA instead of IFERROR when you only want to catch #N/A errors specifically</li>
          <li>Nest IFERROR functions for multiple fallback options</li>
          <li>Combine with other error-checking functions: ISERROR, ISNA, ISBLANK</li>
          <li>Use empty string ("") as value_if_error when you want to show nothing for errors</li>
          <li>Be careful with IFERROR in financial models - it can hide legitimate calculation errors</li>
          <li>For critical calculations, consider logging errors instead of hiding them completely</li>
          <li>Use named ranges with IFERROR to make formulas more readable</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with IFERROR function exercises already set up. 
          Practice error handling in lookups, calculations, and complex formulas.
        </p>
        <div className="space-y-3">
          <a
            href="/iferror_lookup_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Lookup Error Handling
          </a>
          <a
            href="/iferror_calculation_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Calculation Error Handling
          </a>
        </div>
      </div>
    </div>
  );
}