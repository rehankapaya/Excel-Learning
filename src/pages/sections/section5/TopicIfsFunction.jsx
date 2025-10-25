import React, { useState } from "react";

export default function TopicIfsFunction() {
  const [studentScore, setStudentScore] = useState(85);
  const [employeeSalary, setEmployeeSalary] = useState(65000);
  const [employeeExperience, setEmployeeExperience] = useState(3);
  const [productSales, setProductSales] = useState(15000);
  const [productReturns, setProductReturns] = useState(2);

  // IFS functions reference
  const ifsFunctions = [
    { 
      function: "IFS", 
      syntax: "=IFS(condition1, value1, condition2, value2, ...)", 
      description: "Checks multiple conditions and returns the value for the first TRUE condition",
      example: "=IFS(A1>90, \"A\", A1>80, \"B\", A1>70, \"C\", TRUE, \"F\")" 
    },
    { 
      function: "Nested IF", 
      syntax: "=IF(condition1, value1, IF(condition2, value2, value3))", 
      description: "Traditional approach - multiple IF functions nested together",
      example: "=IF(A1>90, \"A\", IF(A1>80, \"B\", IF(A1>70, \"C\", \"F\")))" 
    },
    { 
      function: "SWITCH", 
      syntax: "=SWITCH(expression, value1, result1, [default])", 
      description: "Alternative for exact matches (Excel 2016+)",
      example: "=SWITCH(A1, 1, \"Low\", 2, \"Medium\", 3, \"High\", \"Unknown\")" 
    },
  ];

  // Student grading system using IFS
  const calculateStudentGrade = (score) => {
    if (score >= 97) return "A+";
    if (score >= 93) return "A";
    if (score >= 90) return "A-";
    if (score >= 87) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 77) return "C+";
    if (score >= 73) return "C";
    if (score >= 70) return "C-";
    if (score >= 67) return "D+";
    if (score >= 63) return "D";
    if (score >= 60) return "D-";
    return "F";
  };

  const getGradeColor = (grade) => {
    if (grade.includes("A")) return "text-green-600";
    if (grade.includes("B")) return "text-blue-600";
    if (grade.includes("C")) return "text-yellow-600";
    if (grade.includes("D")) return "text-orange-600";
    return "text-red-600";
  };

  // Employee bonus calculation using IFS
  const calculateEmployeeBonus = (salary, experience) => {
    // Base bonus based on salary
    let bonusPercentage = 0;
    
    if (salary >= 100000) bonusPercentage = 15;
    else if (salary >= 80000) bonusPercentage = 12;
    else if (salary >= 60000) bonusPercentage = 10;
    else if (salary >= 40000) bonusPercentage = 8;
    else bonusPercentage = 5;

    // Experience multiplier
    let experienceMultiplier = 1;
    if (experience >= 10) experienceMultiplier = 1.5;
    else if (experience >= 5) experienceMultiplier = 1.3;
    else if (experience >= 3) experienceMultiplier = 1.2;
    else if (experience >= 1) experienceMultiplier = 1.1;

    const baseBonus = salary * (bonusPercentage / 100);
    const totalBonus = baseBonus * experienceMultiplier;

    return {
      bonusPercentage,
      experienceMultiplier,
      baseBonus,
      totalBonus,
      performance: experience >= 5 ? "Senior" : experience >= 3 ? "Mid-Level" : "Junior"
    };
  };

  // Product performance rating using IFS
  const calculateProductPerformance = (sales, returns) => {
    let salesRating, returnsRating, overallRating;

    // Sales performance rating
    if (sales >= 20000) salesRating = "Excellent";
    else if (sales >= 15000) salesRating = "Very Good";
    else if (sales >= 10000) salesRating = "Good";
    else if (sales >= 5000) salesRating = "Average";
    else salesRating = "Poor";

    // Returns performance rating
    if (returns === 0) returnsRating = "Excellent";
    else if (returns <= 2) returnsRating = "Very Good";
    else if (returns <= 5) returnsRating = "Good";
    else if (returns <= 10) returnsRating = "Average";
    else returnsRating = "Poor";

    // Overall rating based on both factors
    if (salesRating === "Excellent" && returnsRating === "Excellent") overallRating = "Outstanding";
    else if ((salesRating === "Excellent" || salesRating === "Very Good") && returnsRating === "Very Good") overallRating = "Excellent";
    else if ((salesRating === "Good" || salesRating === "Very Good") && (returnsRating === "Good" || returnsRating === "Very Good")) overallRating = "Good";
    else if (salesRating === "Poor" || returnsRating === "Poor") overallRating = "Needs Improvement";
    else overallRating = "Average";

    return { salesRating, returnsRating, overallRating };
  };

  const studentGrade = calculateStudentGrade(studentScore);
  const bonusData = calculateEmployeeBonus(employeeSalary, employeeExperience);
  const productPerformance = calculateProductPerformance(productSales, productReturns);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        IFS Function in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The IFS function is a powerful logical function that simplifies complex conditional logic by 
        allowing you to test multiple conditions in a single, readable formula. It eliminates the need 
        for nested IF functions and makes your formulas easier to write, read, and maintain.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          Instead of complex nested IF: <code>=IF(A1{">"}=90, "A", IF(A1{">"}=80, "B", IF(A1{">"}=70, "C", IF(A1{">"}=60, "D", "F"))))</code><br/>
          Use clean IFS: <code>=IFS(A1{">"}=90, "A", A1{">"}=80, "B", A1{">"}=70, "C", A1{">"}=60, "D", TRUE, "F")</code>
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 IFS and Alternative Functions Reference
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
              {ifsFunctions.map((func, idx) => (
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

      {/* IFS vs Nested IF Comparison */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 IFS vs Nested IF Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ IFS Advantages</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Cleaner, more readable formulas</li>
              <li>Easier to write and maintain</li>
              <li>No complex nesting required</li>
              <li>Fewer parentheses to manage</li>
              <li>Better error handling</li>
              <li>More intuitive structure</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">🔄 When to Use Each</h4>
            <ul className="list-disc pl-5 space-y-1 text-orange-600">
              <li>Multiple conditions: IFS (Excel 2019+)</li>
              <li>Simple true/false: IF</li>
              <li>Older Excel versions: Nested IF</li>
              <li>Exact value matching: SWITCH</li>
              <li>Complex logic with AND/OR: IFS</li>
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
            <strong>Student Grading System:</strong> Create a comprehensive grading system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses IFS to assign letter grades based on score ranges</li>
              <li>Handles all grade levels from A+ to F</li>
              <li>Provides clear, readable grade calculations</li>
              <li>Demonstrates IFS superiority over nested IF</li>
            </ul>
          </li>
          <li>
            <strong>Employee Bonus Calculator:</strong> Build a bonus calculation system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses IFS for multiple salary tier calculations</li>
              <li>Combines salary and experience factors</li>
              <li>Calculates performance-based bonuses</li>
              <li>Shows complex conditional logic simplification</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Student Score:
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={studentScore}
            onChange={(e) => setStudentScore(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold mt-2">{studentScore}%</div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Employee Salary:
          </label>
          <input
            type="range"
            min="30000"
            max="150000"
            step="5000"
            value={employeeSalary}
            onChange={(e) => setEmployeeSalary(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold mt-2">${employeeSalary.toLocaleString()}</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Employee Experience:
          </label>
          <input
            type="range"
            min="0"
            max="15"
            value={employeeExperience}
            onChange={(e) => setEmployeeExperience(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold mt-2">{employeeExperience} years</div>
        </div>
      </div>

      {/* Additional Product Performance Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Product Sales ($):
          </label>
          <input
            type="range"
            min="0"
            max="30000"
            step="1000"
            value={productSales}
            onChange={(e) => setProductSales(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold mt-2">${productSales.toLocaleString()}</div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#217346] mb-2">
            Product Returns:
          </label>
          <input
            type="range"
            min="0"
            max="20"
            value={productReturns}
            onChange={(e) => setProductReturns(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-semibold mt-2">{productReturns} returns</div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Student Grading Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Grading System with IFS
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how IFS simplifies complex grade calculations compared to traditional nested IF functions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Grade Scale Reference */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Grade Scale</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Score Range</th>
                      <th className="px-3 py-2 border">Grade</th>
                      <th className="px-3 py-2 border">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { range: "97-100", grade: "A+", performance: "Outstanding" },
                      { range: "93-96", grade: "A", performance: "Excellent" },
                      { range: "90-92", grade: "A-", performance: "Excellent" },
                      { range: "87-89", grade: "B+", performance: "Very Good" },
                      { range: "83-86", grade: "B", performance: "Good" },
                      { range: "80-82", grade: "B-", performance: "Good" },
                      { range: "77-79", grade: "C+", performance: "Satisfactory" },
                      { range: "73-76", grade: "C", performance: "Average" },
                      { range: "70-72", grade: "C-", performance: "Average" },
                      { range: "67-69", grade: "D+", performance: "Below Average" },
                      { range: "63-66", grade: "D", performance: "Poor" },
                      { range: "60-62", grade: "D-", performance: "Poor" },
                      { range: "0-59", grade: "F", performance: "Failing" },
                    ].map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                        <td className="px-3 py-2 border">{item.range}%</td>
                        <td className={`px-3 py-2 border font-semibold ${getGradeColor(item.grade)}`}>
                          {item.grade}
                        </td>
                        <td className="px-3 py-2 border">{item.performance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* IFS Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Grade Calculation Results</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{studentScore}%</div>
                  <div className="text-sm text-blue-800">Student Score</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded text-white">
                  <div className="text-sm mb-1">Assigned Grade</div>
                  <div className={`text-4xl font-bold ${getGradeColor(studentGrade)}`}>
                    {studentGrade}
                  </div>
                  <div className="text-sm mt-1 opacity-90">
                    {studentGrade.includes("A") ? "Excellent Work!" : 
                     studentGrade.includes("B") ? "Good Performance" :
                     studentGrade.includes("C") ? "Satisfactory" :
                     studentGrade.includes("D") ? "Needs Improvement" : "Please Retake"}
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel IFS Formula:</strong>
                    <div className="mt-1">
                      =IFS(B2{">"}=97, "A+", B2{">"}=93, "A", B2{">"}=90, "A-", B2{">"}=87, "B+", 
                      B2{">"}=83, "B", B2{">"}=80, "B-", B2{">"}=77, "C+", B2{">"}=73, "C", 
                      B2{">"}=70, "C-", B2{">"}=67, "D+", B2{">"}=63, "D", B2{">"}=60, "D-", TRUE, "F")
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-red-50 rounded border border-red-200">
                  <div className="text-xs font-mono text-red-700">
                    <strong>Equivalent Nested IF (Complex!):</strong>
                    <div className="mt-1">
                      =IF(B2{">"}=97, "A+", IF(B2{">"}=93, "A", IF(B2{">"}=90, "A-", 
                      IF(B2{">"}=87, "B+", IF(B2{">"}=83, "B", IF(B2{">"}=80, "B-", 
                      IF(B2{">"}=77, "C+", IF(B2{">"}=73, "C", IF(B2{">"}=70, "C-", 
                      IF(B2{">"}=67, "D+", IF(B2{">"}=63, "D", IF(B2{">"}=60, "D-", "F"))))))))))))
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Bonus Calculator Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Bonus Calculator with IFS
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how IFS can handle complex bonus calculations based on multiple salary tiers and experience levels.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Bonus Structure */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Bonus Structure</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Salary Tiers</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>$100,000+</span>
                      <span className="font-semibold text-green-600">15% bonus</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$80,000 - $99,999</span>
                      <span className="font-semibold text-green-600">12% bonus</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$60,000 - $79,999</span>
                      <span className="font-semibold text-blue-600">10% bonus</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$40,000 - $59,999</span>
                      <span className="font-semibold text-yellow-600">8% bonus</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Below $40,000</span>
                      <span className="font-semibold text-orange-600">5% bonus</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Experience Multipliers</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>10+ years</span>
                      <span className="font-semibold text-green-600">1.5x multiplier</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5-9 years</span>
                      <span className="font-semibold text-blue-600">1.3x multiplier</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3-4 years</span>
                      <span className="font-semibold text-yellow-600">1.2x multiplier</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1-2 years</span>
                      <span className="font-semibold text-orange-600">1.1x multiplier</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Less than 1 year</span>
                      <span className="font-semibold text-red-600">1.0x multiplier</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bonus Calculation Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Bonus Calculation Results</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-blue-800 font-semibold">Base Salary</div>
                    <div className="text-xl font-bold text-blue-900">
                      ${employeeSalary.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="text-green-800 font-semibold">Experience</div>
                    <div className="text-xl font-bold text-green-900">
                      {employeeExperience} years
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded text-white">
                  <div className="text-sm mb-1">Total Bonus</div>
                  <div className="text-3xl font-bold">
                    ${Math.round(bonusData.totalBonus).toLocaleString()}
                  </div>
                  <div className="text-sm mt-1 opacity-90">
                    {bonusData.bonusPercentage}% base × {bonusData.experienceMultiplier}x multiplier
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-yellow-50 rounded">
                    <div className="font-semibold text-yellow-700">Base Bonus</div>
                    <div className="text-lg font-bold text-yellow-800">
                      ${Math.round(bonusData.baseBonus).toLocaleString()}
                    </div>
                    <div className="text-xs text-yellow-600">
                      {bonusData.bonusPercentage}% of salary
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded">
                    <div className="font-semibold text-purple-700">Performance Level</div>
                    <div className="text-lg font-bold text-purple-800">
                      {bonusData.performance}
                    </div>
                    <div className="text-xs text-purple-600">
                      Based on experience
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel IFS Formulas:</strong>
                    <div className="mt-1">
                      Bonus %: =IFS(B2{">"}=100000, 15, B2{">"}=80000, 12, B2{">"}=60000, 10, B2{">"}=40000, 8, TRUE, 5)
                    </div>
                    <div>
                      Multiplier: =IFS(C2{">"}=10, 1.5, C2{">"}=5, 1.3, C2{">"}=3, 1.2, C2{">"}=1, 1.1, TRUE, 1)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Performance Rating Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Product Performance Rating with IFS
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates using IFS for multi-dimensional performance ratings based on sales and returns data.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Criteria */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Performance Rating Criteria</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-green-700 mb-2">Sales Performance</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>$20,000+</span>
                      <span className="font-semibold text-green-600">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$15,000 - $19,999</span>
                      <span className="font-semibold text-blue-600">Very Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$10,000 - $14,999</span>
                      <span className="font-semibold text-yellow-600">Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$5,000 - $9,999</span>
                      <span className="font-semibold text-orange-600">Average</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Below $5,000</span>
                      <span className="font-semibold text-red-600">Poor</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-gray-200">
                  <h5 className="font-semibold text-red-700 mb-2">Returns Performance</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>0 returns</span>
                      <span className="font-semibold text-green-600">Excellent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1-2 returns</span>
                      <span className="font-semibold text-blue-600">Very Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3-5 returns</span>
                      <span className="font-semibold text-yellow-600">Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span>6-10 returns</span>
                      <span className="font-semibold text-orange-600">Average</span>
                    </div>
                    <div className="flex justify-between">
                      <span>11+ returns</span>
                      <span className="font-semibold text-red-600">Poor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Performance Rating Results</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="text-green-800 font-semibold">Sales</div>
                    <div className="text-xl font-bold text-green-900">
                      ${productSales.toLocaleString()}
                    </div>
                    <div className={`text-sm font-semibold ${
                      productPerformance.salesRating === "Excellent" ? "text-green-600" :
                      productPerformance.salesRating === "Very Good" ? "text-blue-600" :
                      productPerformance.salesRating === "Good" ? "text-yellow-600" :
                      productPerformance.salesRating === "Average" ? "text-orange-600" : "text-red-600"
                    }`}>
                      {productPerformance.salesRating}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded">
                    <div className="text-red-800 font-semibold">Returns</div>
                    <div className="text-xl font-bold text-red-900">
                      {productReturns}
                    </div>
                    <div className={`text-sm font-semibold ${
                      productPerformance.returnsRating === "Excellent" ? "text-green-600" :
                      productPerformance.returnsRating === "Very Good" ? "text-blue-600" :
                      productPerformance.returnsRating === "Good" ? "text-yellow-600" :
                      productPerformance.returnsRating === "Average" ? "text-orange-600" : "text-red-600"
                    }`}>
                      {productPerformance.returnsRating}
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded text-white">
                  <div className="text-sm mb-1">Overall Performance</div>
                  <div className="text-3xl font-bold">
                    {productPerformance.overallRating}
                  </div>
                  <div className="text-sm mt-1 opacity-90">
                    Combined sales and returns rating
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel IFS Formulas:</strong>
                    <div className="mt-1">
                      Sales Rating: =IFS(B2{">"}=20000, "Excellent", B2{">"}=15000, "Very Good", 
                      B2{">"}=10000, "Good", B2{">"}=5000, "Average", TRUE, "Poor")
                    </div>
                    <div>
                      Returns Rating: =IFS(C2=0, "Excellent", C2{">"}=2, "Very Good", 
                      C2{">"}=5, "Good", C2{">"}=10, "Average", TRUE, "Poor")
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for IFS Function</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>Always include a final TRUE condition as a catch-all for unmatched cases</li>
          <li>Order conditions from most specific to most general</li>
          <li>Use with AND/OR functions for complex conditional logic</li>
          <li>IFS stops at the first TRUE condition, so sequence matters</li>
          <li>Combine with other functions like VLOOKUP for advanced scenarios</li>
          <li>Use named ranges to make IFS formulas more readable</li>
          <li>Test all possible scenarios to ensure your conditions cover all cases</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with IFS function exercises already set up. 
          Practice clean conditional logic, compare with nested IF, and master this modern Excel function.
        </p>
        <div className="space-y-3">
          <a
            href="/ifs_grading_system.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Grading System
          </a>
          <a
            href="/ifs_bonus_calculator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Bonus Calculator
          </a>
        </div>
      </div>
    </div>
  );
}