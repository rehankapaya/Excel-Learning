import React, { useState } from "react";

export default function TopicIndexMatch() {
  const [productId, setProductId] = useState("P1001");
  const [employeeName, setEmployeeName] = useState("John Smith");
  const [searchDepartment, setSearchDepartment] = useState("Sales");
  const [searchSalary, setSearchSalary] = useState(60000);

  // INDEX MATCH functions reference
  const indexMatchFunctions = [
    { 
      function: "INDEX", 
      syntax: "=INDEX(array, row_num, [column_num])", 
      description: "Returns the value at a given position in a range or array",
      example: "=INDEX(A1:C10, 3, 2)" 
    },
    { 
      function: "MATCH", 
      syntax: "=MATCH(lookup_value, lookup_array, [match_type])", 
      description: "Returns the position of an item in a range",
      example: "=MATCH(\"John\", A1:A10, 0)" 
    },
    { 
      function: "INDEX + MATCH", 
      syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))", 
      description: "Combined - lookup values in any column and return from any column",
      example: "=INDEX(B1:B10, MATCH(A1, A1:A10, 0))" 
    },
  ];

  // Product database for INDEX MATCH example
  const productDatabase = [
    { productId: "P1001", productName: "Wireless Mouse", category: "Electronics", price: 29.99, stock: 45, supplier: "TechCorp" },
    { productId: "P1002", productName: "Mechanical Keyboard", category: "Electronics", price: 89.99, stock: 23, supplier: "KeyMasters" },
    { productId: "P1003", productName: "Office Chair", category: "Furniture", price: 199.99, stock: 12, supplier: "ComfortCo" },
    { productId: "P1004", productName: "Desk Lamp", category: "Furniture", price: 45.50, stock: 34, supplier: "BrightLights" },
    { productId: "P1005", productName: "Laptop Stand", category: "Accessories", price: 35.00, stock: 56, supplier: "ErgoWorks" },
    { productId: "P1006", productName: "Monitor 24\"", category: "Electronics", price: 179.99, stock: 18, supplier: "DisplayPro" },
    { productId: "P1007", productName: "Webcam HD", category: "Electronics", price: 59.99, stock: 67, supplier: "VisionTech" },
  ];

  // Employee directory for advanced lookup example
  const employeeDirectory = [
    { employeeId: "E001", firstName: "John", lastName: "Smith", department: "Sales", position: "Manager", salary: 65000, hireDate: "2020-03-15" },
    { employeeId: "E002", firstName: "Sarah", lastName: "Johnson", department: "Marketing", position: "Specialist", salary: 58000, hireDate: "2021-08-22" },
    { employeeId: "E003", firstName: "Mike", lastName: "Chen", department: "IT", position: "Developer", salary: 75000, hireDate: "2019-05-10" },
    { employeeId: "E004", firstName: "Emily", lastName: "Davis", department: "HR", position: "Coordinator", salary: 52000, hireDate: "2022-01-30" },
    { employeeId: "E005", firstName: "David", lastName: "Wilson", department: "Finance", position: "Analyst", salary: 68000, hireDate: "2020-11-05" },
    { employeeId: "E006", firstName: "Lisa", lastName: "Brown", department: "Sales", position: "Representative", salary: 55000, hireDate: "2023-02-14" },
    { employeeId: "E007", firstName: "Chris", lastName: "Miller", department: "IT", position: "Admin", salary: 62000, hireDate: "2021-07-19" },
  ];

  // Find product using INDEX MATCH simulation
  const productMatchIndex = productDatabase.findIndex(product => product.productId === productId);
  const foundProduct = productMatchIndex !== -1 ? productDatabase[productMatchIndex] : productDatabase[0];

  // Find employee using INDEX MATCH simulation
  const employeeMatchIndex = employeeDirectory.findIndex(emp => 
    `${emp.firstName} ${emp.lastName}` === employeeName
  );
  const foundEmployee = employeeMatchIndex !== -1 ? employeeDirectory[employeeMatchIndex] : employeeDirectory[0];

  // Two-way lookup: Find employee by department and salary criteria
  const departmentEmployees = employeeDirectory.filter(emp => emp.department === searchDepartment);
  const salaryMatchIndex = departmentEmployees.findIndex(emp => emp.salary >= searchSalary);
  const foundByCriteria = salaryMatchIndex !== -1 ? departmentEmployees[salaryMatchIndex] : null;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        INDEX and MATCH Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        INDEX and MATCH are powerful lookup functions that, when combined, provide more flexibility 
        than VLOOKUP. INDEX returns a value from a specific position in a range, while MATCH finds 
        the position of a lookup value. Together, they can look up values in any column and return 
        values from any column, making them ideal for complex data retrieval tasks.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For flexible lookups: <code>=INDEX(C1:C100, MATCH("ProductX", A1:A100, 0))</code> finds 
          "ProductX" in column A and returns the corresponding value from column C. For two-way lookups: 
          <code>=INDEX(C1:F100, MATCH("Name", A1:A100, 0), MATCH("Department", C1:F1, 0))</code> finds 
          both row and column positions.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 INDEX MATCH Functions Reference
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
              {indexMatchFunctions.map((func, idx) => (
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

      {/* INDEX MATCH vs VLOOKUP Comparison */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 INDEX MATCH vs VLOOKUP Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ INDEX MATCH Advantages</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Can look left or right - lookup column anywhere</li>
              <li>More flexible - insert/delete columns safely</li>
              <li>Faster with large datasets</li>
              <li>Two-way lookups (row and column search)</li>
              <li>Dynamic column references</li>
              <li>Better error handling</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">❌ VLOOKUP Limitations</h4>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              <li>Can only look rightward</li>
              <li>Breaks if columns are inserted/deleted</li>
              <li>Slower with large datasets</li>
              <li>Static column references</li>
              <li>Cannot do two-way lookups easily</li>
              <li>Less flexible for complex scenarios</li>
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
            <strong>Flexible Product Lookup System:</strong> Create an advanced product lookup that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses INDEX MATCH for leftward and rightward lookups</li>
              <li>Retrieves any product attribute regardless of column position</li>
              <li>Demonstrates flexibility over VLOOKUP limitations</li>
              <li>Shows dynamic column referencing</li>
            </ul>
          </li>
          <li>
            <strong>Advanced Employee Search with Two-Way Lookup:</strong> Build a comprehensive employee system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses INDEX MATCH for complex criteria searches</li>
              <li>Performs two-way lookups (row and column search)</li>
              <li>Searches by multiple criteria simultaneously</li>
              <li>Shows superior flexibility for HR databases</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Lookup Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Select Product ID (INDEX MATCH):
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
            Select Employee Name (INDEX MATCH):
          </label>
          <select
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
          >
            {employeeDirectory.map(emp => (
              <option key={emp.employeeId} value={`${emp.firstName} ${emp.lastName}`}>
                {emp.firstName} {emp.lastName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Two-way Lookup Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Search Department:
          </label>
          <select
            value={searchDepartment}
            onChange={(e) => setSearchDepartment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
          >
            {[...new Set(employeeDirectory.map(emp => emp.department))].map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Minimum Salary:
          </label>
          <select
            value={searchSalary}
            onChange={(e) => setSearchSalary(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
          >
            <option value={50000}>$50,000+</option>
            <option value={60000}>$60,000+</option>
            <option value={70000}>$70,000+</option>
            <option value={80000}>$80,000+</option>
          </select>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Product Database INDEX MATCH Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Flexible Product Lookup System
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how INDEX MATCH overcomes VLOOKUP limitations by allowing 
            lookups in any direction and dynamic column referencing.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Product Database Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Product Database</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Supplier</th>
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
                        <td className="px-3 py-2 border">{product.supplier}</td>
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

            {/* INDEX MATCH Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">INDEX MATCH Lookup Results</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">Looking up: <strong>{productId}</strong></div>
                  <div className="text-xs text-blue-600 mt-1">Note: Lookup column (Product ID) is not first!</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-semibold">Supplier:</div>
                  <div className="text-green-600">{foundProduct.supplier}</div>
                  
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
                    <strong>Excel INDEX MATCH Formulas:</strong>
                    <div className="mt-1">Supplier: =INDEX(A2:A8, MATCH({productId}, B2:B8, 0))</div>
                    <div>Name: =INDEX(C2:C8, MATCH({productId}, B2:B8, 0))</div>
                    <div>Category: =INDEX(D2:D8, MATCH({productId}, B2:B8, 0))</div>
                    <div>Price: =INDEX(E2:E8, MATCH({productId}, B2:B8, 0))</div>
                    <div>Stock: =INDEX(F2:F8, MATCH({productId}, B2:B8, 0))</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VLOOKUP Limitation Demonstration */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">🚫 VLOOKUP Limitation Demonstration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-red-50 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">VLOOKUP Cannot Do This:</h5>
                <div className="text-red-600">
                  <div>• Lookup column (Product ID) is column B</div>
                  <div>• Need to return Supplier from column A (leftward)</div>
                  <div>• VLOOKUP only looks rightward from lookup column</div>
                  <div>• Would require rearranging entire dataset</div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">INDEX MATCH Solution:</h5>
                <div className="text-green-600">
                  <div>• Lookup column can be anywhere</div>
                  <div>• Return column can be left or right</div>
                  <div>• No dataset rearrangement needed</div>
                  <div>• More flexible and maintainable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Directory INDEX MATCH Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Advanced Employee Search with Two-Way Lookup
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows advanced INDEX MATCH techniques including two-way lookups 
            and searches based on multiple criteria.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Employee Directory Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Employee Directory</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Employee ID</th>
                      <th className="px-3 py-2 border">First Name</th>
                      <th className="px-3 py-2 border">Last Name</th>
                      <th className="px-3 py-2 border">Department</th>
                      <th className="px-3 py-2 border">Position</th>
                      <th className="px-3 py-2 border">Salary</th>
                      <th className="px-3 py-2 border">Hire Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeDirectory.map((employee, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                          employee.employeeId === foundEmployee.employeeId ? "ring-2 ring-purple-500 bg-purple-50" : ""
                        }`}
                      >
                        <td className="px-3 py-2 border font-mono">{employee.employeeId}</td>
                        <td className="px-3 py-2 border">{employee.firstName}</td>
                        <td className="px-3 py-2 border">{employee.lastName}</td>
                        <td className="px-3 py-2 border">{employee.department}</td>
                        <td className="px-3 py-2 border">{employee.position}</td>
                        <td className="px-3 py-2 border">${employee.salary.toLocaleString()}</td>
                        <td className="px-3 py-2 border">{employee.hireDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* INDEX MATCH Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Employee Lookup Results</h4>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-sm text-purple-800">Looking up: <strong>{employeeName}</strong></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="font-semibold">Employee ID:</div>
                  <div className="text-green-600 font-mono">{foundEmployee.employeeId}</div>
                  
                  <div className="font-semibold">Department:</div>
                  <div className="text-blue-600">{foundEmployee.department}</div>
                  
                  <div className="font-semibold">Position:</div>
                  <div className="text-purple-600">{foundEmployee.position}</div>
                  
                  <div className="font-semibold">Salary:</div>
                  <div className="text-green-600 font-semibold">
                    ${foundEmployee.salary.toLocaleString()}
                  </div>
                  
                  <div className="font-semibold">Hire Date:</div>
                  <div className="text-gray-600">{foundEmployee.hireDate}</div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel INDEX MATCH Formulas:</strong>
                    <div className="mt-1">ID: =INDEX(A2:A8, MATCH("{employeeName}", B2:B8&C2:C8, 0))</div>
                    <div>Dept: =INDEX(D2:D8, MATCH("{employeeName}", B2:B8&C2:C8, 0))</div>
                    <div>Position: =INDEX(E2:E8, MATCH("{employeeName}", B2:B8&C2:C8, 0))</div>
                    <div>Salary: =INDEX(F2:F8, MATCH("{employeeName}", B2:B8&C2:C8, 0))</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Way Lookup Section */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">🔄 Two-Way Lookup: Find by Department and Salary</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="p-3 bg-orange-50 rounded border border-orange-200 mb-4">
                  <div className="text-sm text-orange-800">
                    Searching: <strong>{searchDepartment}</strong> department with salary ≥ <strong>${searchSalary.toLocaleString()}</strong>
                  </div>
                </div>
                
                {foundByCriteria ? (
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-semibold">Found Employee:</div>
                      <div className="text-green-600 font-semibold">
                        {foundByCriteria.firstName} {foundByCriteria.lastName}
                      </div>
                      
                      <div className="font-semibold">Position:</div>
                      <div className="text-blue-600">{foundByCriteria.position}</div>
                      
                      <div className="font-semibold">Salary:</div>
                      <div className="text-purple-600 font-semibold">
                        ${foundByCriteria.salary.toLocaleString()}
                      </div>
                      
                      <div className="font-semibold">Employee ID:</div>
                      <div className="font-mono">{foundByCriteria.employeeId}</div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-red-50 rounded border border-red-200">
                    <div className="text-red-600 font-semibold">
                      No employees found in {searchDepartment} with salary ≥ ${searchSalary.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-gray-50 rounded">
                <div className="text-xs font-mono">
                  <strong>Two-Way Lookup Formula:</strong>
                  <div className="mt-1">
                    =INDEX(A2:G8, MATCH(1, (D2:D8="{searchDepartment}")*(F2:F8{`>=`}{searchSalary}), 0), 1)
                  </div>
                  <div className="mt-2 text-gray-600">
                    This array formula matches both department AND salary criteria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for INDEX MATCH</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>Always use 0 as the third argument in MATCH for exact matches</li>
          <li>Use absolute references for your ranges: $A$1:$A$100</li>
          <li>For multiple criteria, use array formulas: MATCH(1, (A1:A100="X")*(B1:B100="Y"), 0)</li>
          <li>Combine with IFERROR for cleaner results: =IFERROR(INDEX(...MATCH(...)), "Not Found")</li>
          <li>Use named ranges to make formulas more readable</li>
          <li>For horizontal lookups, use MATCH with INDEX columns instead of HLOOKUP</li>
          <li>INDEX MATCH is more efficient than VLOOKUP with large datasets</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with INDEX MATCH exercises already set up. 
          Practice advanced lookups, two-way searches, and master this powerful combination.
        </p>
        <div className="space-y-3">
          <a
            href="/index_match_product_lookup.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Product Lookup System
          </a>
          <a
            href="/index_match_employee_search.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Employee Search System
          </a>
        </div>
      </div>
    </div>
  );
}