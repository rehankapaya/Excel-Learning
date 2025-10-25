import React, { useState } from "react";

export default function TopicSumProduct() {

  const [array1, setArray1] = useState([2, 3, 4]);
  const [array2, setArray2] = useState([5, 6, 7]);
  const [array3, setArray3] = useState([1, 2, 3]);
  const [weights, setWeights] = useState([0.5, 0.3, 0.2]);
  const [quantity, setQuantity] = useState([10, 20, 15]);
  const [price, setPrice] = useState([25, 30, 40]);
  const [discount, setDiscount] = useState([0.1, 0.15, 0.05]);

  // SUMPRODUCT functions reference
  const sumproductFunctions = [
    { 
      function: "SUMPRODUCT", 
      syntax: "=SUMPRODUCT(array1, [array2], [array3], ...)", 
      description: "Returns the sum of the products of corresponding ranges or arrays",
      example: "=SUMPRODUCT(A1:A3, B1:B3)" 
    },
    { 
      function: "SUM", 
      syntax: "=SUM(number1, [number2], ...)", 
      description: "Adds all numbers in a range of cells",
      example: "=SUM(A1:A10)" 
    },
    { 
      function: "PRODUCT", 
      syntax: "=PRODUCT(number1, [number2], ...)", 
      description: "Multiplies all numbers given as arguments",
      example: "=PRODUCT(A1, B1)" 
    },
    { 
      function: "MMULT", 
      syntax: "=MMULT(array1, array2)", 
      description: "Returns the matrix product of two arrays",
      example: "=MMULT(A1:B2, C1:D2)" 
    },
  ];

  // Common SUMPRODUCT applications
  const sumproductApplications = [
    { 
      application: "Weighted Average", 
      formula: "=SUMPRODUCT(weights, values)/SUM(weights)",
      description: "Calculate weighted average where each value has different importance"
    },
    { 
      application: "Conditional Sum", 
      formula: "=SUMPRODUCT((range1=criteria)*range2)",
      description: "Sum values based on multiple conditions without array formulas"
    },
    { 
      application: "Cross Tabulation", 
      formula: "=SUMPRODUCT((range1=criteria1)*(range2=criteria2)*values)",
      description: "Create cross-tabulated summaries from raw data"
    },
    { 
      application: "Array Multiplication", 
      formula: "=SUMPRODUCT(array1, array2, array3)",
      description: "Multiply corresponding elements across multiple arrays"
    },
  ];

  // Sample datasets for examples
  const salesData = [
    { region: "North", product: "A", sales: 100, units: 10, price: 25 },
    { region: "North", product: "B", sales: 150, units: 15, price: 30 },
    { region: "South", product: "A", sales: 200, units: 20, price: 25 },
    { region: "South", product: "B", sales: 120, units: 12, price: 30 },
    { region: "East", product: "A", sales: 180, units: 18, price: 25 },
    { region: "East", product: "B", sales: 90, units: 9, price: 30 },
  ];

  const studentGrades = [
    { student: "John", test1: 85, test2: 90, test3: 78, weight1: 0.3, weight2: 0.4, weight3: 0.3 },
    { student: "Sarah", test1: 92, test2: 88, test3: 95, weight1: 0.3, weight2: 0.4, weight3: 0.3 },
    { student: "Mike", test1: 78, test2: 85, test3: 82, weight1: 0.3, weight2: 0.4, weight3: 0.3 },
  ];

  const inventoryData = [
    { item: "Widget A", quantity: 100, cost: 15.50, markup: 1.4 },
    { item: "Widget B", quantity: 75, cost: 22.00, markup: 1.5 },
    { item: "Widget C", quantity: 50, cost: 18.75, markup: 1.6 },
  ];

  // Basic SUMPRODUCT calculations
  const basicSumProduct = array1.reduce((sum, val, idx) => sum + val * array2[idx], 0);
  const manualCalculation = array1.map((val, idx) => val * array2[idx]).join(" + ") + " = " + basicSumProduct;

  // Triple array SUMPRODUCT
  const tripleSumProduct = array1.reduce((sum, val, idx) => sum + val * array2[idx] * array3[idx], 0);
  const tripleManual = array1.map((val, idx) => `${val} × ${array2[idx]} × ${array3[idx]}`).join(" + ") + " = " + tripleSumProduct;

  // Weighted average calculation
  const weightedSum = weights.reduce((sum, weight, idx) => sum + weight * array1[idx], 0);
  const weightTotal = weights.reduce((sum, weight) => sum + weight, 0);
  const weightedAverage = weightedSum / weightTotal;

  // Revenue calculation
  const totalRevenue = quantity.reduce((sum, qty, idx) => sum + qty * price[idx], 0);
  const discountedRevenue = quantity.reduce((sum, qty, idx) => sum + qty * price[idx] * (1 - discount[idx]), 0);

  // Conditional calculations using SUMPRODUCT simulation
  const northRegionSales = salesData
    .filter(item => item.region === "North")
    .reduce((sum, item) => sum + item.sales, 0);

  const productASales = salesData
    .filter(item => item.product === "A")
    .reduce((sum, item) => sum + item.sales, 0);

  const northProductASales = salesData
    .filter(item => item.region === "North" && item.product === "A")
    .reduce((sum, item) => sum + item.sales, 0);

  // Inventory value calculation
  const totalInventoryValue = inventoryData.reduce((sum, item) => 
    sum + (item.quantity * item.cost * item.markup), 0);

  // Student weighted grades
  const johnWeightedGrade = studentGrades[0].test1 * studentGrades[0].weight1 + 
                           studentGrades[0].test2 * studentGrades[0].weight2 + 
                           studentGrades[0].test3 * studentGrades[0].weight3;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        SUMPRODUCT Function in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The SUMPRODUCT function is one of Excel's most powerful and versatile functions. 
        It multiplies corresponding components in given arrays and returns the sum of those products. 
        Beyond simple array multiplication, SUMPRODUCT can handle complex conditional calculations, 
        weighted averages, and cross-tabulations without requiring array formulas.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Applications
        </h3>
        <p className="text-gray-700">
          • Calculate total revenue: <code>=SUMPRODUCT(quantity, price)</code><br/>
          • Compute weighted averages: <code>=SUMPRODUCT(weights, scores)/SUM(weights)</code><br/>
          • Conditional sums: <code>=SUMPRODUCT((region="North")*(product="A")*sales)</code><br/>
          • Inventory valuation: <code>=SUMPRODUCT(quantity, cost, markup)</code>
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Mathematical Functions Reference
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
              {sumproductFunctions.map((func, idx) => (
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

      {/* Common SUMPRODUCT Applications */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🚀 Common SUMPRODUCT Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {sumproductApplications.map((app, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-blue-200">
              <div className="font-semibold text-blue-600 text-center mb-2">{app.application}</div>
              <div className="font-mono text-xs text-center mb-2 bg-gray-100 p-2 rounded">{app.formula}</div>
              <div className="text-blue-700 text-xs text-center">{app.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SUMPRODUCT vs Manual Comparison */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 SUMPRODUCT vs Manual Calculation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">❌ Manual Approach</h4>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              <li>Requires helper columns</li>
              <li>More complex formulas</li>
              <li>Harder to maintain</li>
              <li>Prone to errors</li>
              <li>Difficult to audit</li>
              <li>Limited to simple cases</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ With SUMPRODUCT</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Single formula solution</li>
              <li>Clean and concise</li>
              <li>Easy to maintain</li>
              <li>Fewer errors</li>
              <li>Easy to audit</li>
              <li>Handles complex scenarios</li>
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
            <strong>Array Multiplication and Summation:</strong> Master the core functionality:
            <ul className="list-disc pl-6 mt-2">
              <li>Multiply corresponding elements across arrays</li>
              <li>Sum the products in a single operation</li>
              <li>Handle arrays of different dimensions carefully</li>
              <li>Understand array alignment requirements</li>
            </ul>
          </li>
          <li>
            <strong>Weighted Calculations:</strong> Build sophisticated averaging systems:
            <ul className="list-disc pl-6 mt-2">
              <li>Calculate weighted averages for grades</li>
              <li>Compute weighted scores for rankings</li>
              <li>Handle percentage-based weighting</li>
              <li>Create custom scoring systems</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Array Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">🔢 Array Operations</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Array 1: [2, 3, 4]
              </label>
              <input
                type="text"
                value={array1.join(", ")}
                onChange={(e) => setArray1(e.target.value.split(",").map(Number))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="Enter numbers separated by commas"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Array 2: [5, 6, 7]
              </label>
              <input
                type="text"
                value={array2.join(", ")}
                onChange={(e) => setArray2(e.target.value.split(",").map(Number))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="Enter numbers separated by commas"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Array 3: [1, 2, 3]
              </label>
              <input
                type="text"
                value={array3.join(", ")}
                onChange={(e) => setArray3(e.target.value.split(",").map(Number))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="Enter numbers separated by commas"
              />
            </div>
          </div>
        </div>

        {/* Weighted Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">⚖️ Weighted Calculations</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Weights: [0.5, 0.3, 0.2]
              </label>
              <input
                type="text"
                value={weights.join(", ")}
                onChange={(e) => setWeights(e.target.value.split(",").map(Number))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="Enter weights separated by commas"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Quantities:
                </label>
                <input
                  type="text"
                  value={quantity.join(", ")}
                  onChange={(e) => setQuantity(e.target.value.split(",").map(Number))}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                  placeholder="10, 20, 15"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Prices:
                </label>
                <input
                  type="text"
                  value={price.join(", ")}
                  onChange={(e) => setPrice(e.target.value.split(",").map(Number))}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                  placeholder="25, 30, 40"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Discounts (%):
              </label>
              <input
                type="text"
                value={discount.join(", ")}
                onChange={(e) => setDiscount(e.target.value.split(",").map(Number))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="0.1, 0.15, 0.05"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Basic SUMPRODUCT Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Basic SUMPRODUCT Operation
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates the fundamental SUMPRODUCT operation: multiplying corresponding 
            elements of arrays and summing the results.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Arrays Display */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Input Arrays</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Array 1</div>
                  <div className="flex space-x-2 justify-center">
                    {array1.map((num, idx) => (
                      <div key={idx} className="w-12 h-12 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center font-mono font-bold">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Array 2</div>
                  <div className="flex space-x-2 justify-center">
                    {array2.map((num, idx) => (
                      <div key={idx} className="w-12 h-12 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center font-mono font-bold">
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Calculation Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">SUMPRODUCT Calculation</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200 text-center">
                  <div className="text-2xl font-mono font-bold text-blue-800">
                    {basicSumProduct}
                  </div>
                  <div className="text-sm text-blue-600">SUMPRODUCT Result</div>
                </div>
                
                <div className="p-3 bg-gray-100 rounded">
                  <div className="text-sm font-mono text-center">
                    {manualCalculation}
                  </div>
                  <div className="text-xs text-gray-600 text-center mt-1">Step-by-step calculation</div>
                </div>

                <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                  <div className="text-xs font-mono">
                    <strong>Excel Formula:</strong> =SUMPRODUCT({array1.join(",")}, {array2.join(",")})
                  </div>
                </div>

                {/* Triple Array Example */}
                <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-sm text-purple-800 mb-2">Three Arrays SUMPRODUCT</div>
                  <div className="text-lg font-bold text-purple-600 text-center mb-2">{tripleSumProduct}</div>
                  <div className="text-xs font-mono text-center bg-white p-2 rounded">
                    {tripleManual}
                  </div>
                  <div className="text-xs text-purple-600 text-center mt-1">
                    Formula: =SUMPRODUCT({array1.join(",")}, {array2.join(",")}, {array3.join(",")})
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weighted Average Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Weighted Average Calculation
          </h3>
          <p className="text-gray-700 mb-4">
            SUMPRODUCT is perfect for calculating weighted averages where different values 
            have different levels of importance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Student Grades Example */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">📊 Student Weighted Grades</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-3 py-2 border">Student</th>
                      <th className="px-3 py-2 border">Test 1 (30%)</th>
                      <th className="px-3 py-2 border">Test 2 (40%)</th>
                      <th className="px-3 py-2 border">Test 3 (30%)</th>
                      <th className="px-3 py-2 border">Weighted Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentGrades.map((student, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 border font-semibold">{student.student}</td>
                        <td className="px-3 py-2 border">{student.test1}</td>
                        <td className="px-3 py-2 border">{student.test2}</td>
                        <td className="px-3 py-2 border">{student.test3}</td>
                        <td className="px-3 py-2 border font-bold text-blue-600">
                          {(student.test1 * student.weight1 + student.test2 * student.weight2 + student.test3 * student.weight3).toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-2 bg-green-50 rounded border border-green-200">
                <div className="text-xs font-mono">
                  <strong>Excel Formula for John:</strong><br/>
                  =SUMPRODUCT(B2:D2, $B$5:$D$5)
                </div>
              </div>
            </div>

            {/* Custom Weighted Average */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">⚖️ Custom Weighted Average</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded border border-blue-200">
                    <div className="text-lg font-bold text-blue-600">{weightedAverage.toFixed(2)}</div>
                    <div className="text-xs text-blue-800">Weighted Average</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <div className="text-lg font-bold text-green-600">
                      {(array1.reduce((a, b) => a + b, 0) / array1.length).toFixed(2)}
                    </div>
                    <div className="text-xs text-green-800">Simple Average</div>
                  </div>
                </div>

                <div className="p-3 bg-gray-100 rounded">
                  <div className="text-xs font-mono text-center">
                    SUMPRODUCT({array1.join(",")}, {weights.join(",")}) / SUM({weights.join(",")})
                  </div>
                </div>

                <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                  <div className="text-xs">
                    <strong>Calculation:</strong><br/>
                    Values: [{array1.join(", ")}]<br/>
                    Weights: [{weights.join(", ")}]<br/>
                    Weighted Sum: {weightedSum}<br/>
                    Total Weight: {weightTotal}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Applications */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Business Applications
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Revenue Calculation */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">💰 Revenue Calculations</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded border border-blue-200">
                    <div className="text-xl font-bold text-blue-600">${totalRevenue}</div>
                    <div className="text-sm text-blue-800">Total Revenue</div>
                    <div className="text-xs text-blue-600 mt-1">
                      SUMPRODUCT(quantity, price)
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-xl font-bold text-green-600">${discountedRevenue.toFixed(2)}</div>
                    <div className="text-sm text-green-800">Discounted Revenue</div>
                    <div className="text-xs text-green-600 mt-1">
                      SUMPRODUCT(quantity, price, 1-discount)
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs">
                    <strong>Input Data:</strong><br/>
                    Quantities: [{quantity.join(", ")}]<br/>
                    Prices: [{price.join(", ")}]<br/>
                    Discounts: [{discount.join(", ")}]
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Valuation */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">📦 Inventory Valuation</h4>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-3 py-2 border">Item</th>
                      <th className="px-3 py-2 border">Quantity</th>
                      <th className="px-3 py-2 border">Cost</th>
                      <th className="px-3 py-2 border">Markup</th>
                      <th className="px-3 py-2 border">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 border">{item.item}</td>
                        <td className="px-3 py-2 border">{item.quantity}</td>
                        <td className="px-3 py-2 border">${item.cost}</td>
                        <td className="px-3 py-2 border">{item.markup}</td>
                        <td className="px-3 py-2 border font-semibold">
                          ${(item.quantity * item.cost * item.markup).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                <div className="text-lg font-bold text-purple-600">${totalInventoryValue.toFixed(2)}</div>
                <div className="text-sm text-purple-800">Total Inventory Value</div>
                <div className="text-xs text-purple-600 mt-1">
                  SUMPRODUCT(quantity, cost, markup)
                </div>
              </div>
            </div>
          </div>

          {/* Conditional Summation */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">🔍 Conditional Summation</h4>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-3 py-2 border">Region</th>
                    <th className="px-3 py-2 border">Product</th>
                    <th className="px-3 py-2 border">Sales</th>
                    <th className="px-3 py-2 border">Units</th>
                    <th className="px-3 py-2 border">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-3 py-2 border">{item.region}</td>
                      <td className="px-3 py-2 border">{item.product}</td>
                      <td className="px-3 py-2 border">${item.sales}</td>
                      <td className="px-3 py-2 border">{item.units}</td>
                      <td className="px-3 py-2 border">${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-3 bg-blue-50 rounded border border-blue-200">
                <div className="text-lg font-bold text-blue-600">${northRegionSales}</div>
                <div className="text-xs text-blue-800">North Region Sales</div>
                <div className="text-xs text-blue-600 mt-1">
                  =SUMPRODUCT((region="North")*sales)
                </div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                <div className="text-lg font-bold text-green-600">${productASales}</div>
                <div className="text-xs text-green-800">Product A Sales</div>
                <div className="text-xs text-green-600 mt-1">
                  =SUMPRODUCT((product="A")*sales)
                </div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                <div className="text-lg font-bold text-purple-600">${northProductASales}</div>
                <div className="text-xs text-purple-800">North + Product A</div>
                <div className="text-xs text-purple-600 mt-1">
                  =SUMPRODUCT((region="North")*(product="A")*sales)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced SUMPRODUCT Patterns */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            🚀 Advanced SUMPRODUCT Patterns
          </h3>
          <p className="text-gray-700 mb-4">
            These patterns demonstrate sophisticated uses of SUMPRODUCT for complex business scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Multiple Conditions */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🔍 Multiple Conditional Sum</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-mono text-xs">
                    =SUMPRODUCT((Region="North")*(Product="A")*(Month="January")*Sales)
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Sum sales for specific region, product, and month combination
                </div>
              </div>
            </div>

            {/* Weighted Scoring */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">⚖️ Multi-Dimensional Weighting</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded">
                  <div className="font-mono text-xs">
                    =SUMPRODUCT(Weights, Criteria1, Criteria2, Values)
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Complex scoring systems with multiple weighted criteria
                </div>
              </div>
            </div>

            {/* Array Operations */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🧮 Mathematical Operations</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-purple-50 rounded">
                  <div className="font-mono text-xs">
                    =SUMPRODUCT((Data&gt;Threshold)*1)
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Count how many values exceed a threshold
                </div>
              </div>
            </div>

            {/* Cross Tabulation */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">📊 Cross Tabulation</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-yellow-50 rounded">
                  <div className="font-mono text-xs">
                    =SUMPRODUCT((Region=Regions)*(Product=Products)*Sales)
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Create summary tables from detailed transaction data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for SUMPRODUCT</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>All arrays must be the same size - SUMPRODUCT will return #VALUE! error if sizes differ</li>
          <li>Use double unary (-- ) to convert TRUE/FALSE to 1/0 in conditional arrays</li>
          <li>SUMPRODUCT ignores text values and treats them as 0</li>
          <li>For large datasets, SUMPRODUCT can be slower than SUMIFS - test performance</li>
          <li>Use named ranges to make SUMPRODUCT formulas more readable</li>
          <li>Combine with other functions like --(ISNUMBER()) for advanced filtering</li>
          <li>Remember that SUMPRODUCT can handle up to 255 array arguments</li>
          <li>Use Ctrl+Shift+Enter for array formulas in older Excel versions</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with SUMPRODUCT function exercises already set up. 
          Practice array operations, weighted calculations, and conditional summation.
        </p>
        <div className="space-y-3">
          <a
            href="/sumproduct_basic_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Basic SUMPRODUCT Exercises
          </a>
          <a
            href="/sumproduct_advanced_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Advanced SUMPRODUCT Exercises
          </a>
        </div>
      </div>
    </div>
  );
}