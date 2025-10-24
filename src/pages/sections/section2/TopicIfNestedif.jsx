import React from "react";

export default function TopicIfNestedIf() {
  // IF functions reference
  const ifFunctions = [
    { 
      function: "IF", 
      syntax: "=IF(logical_test, value_if_true, value_if_false)", 
      description: "Performs a logical test and returns one value if true, another if false",
      example: "=IF(A1>50, \"Pass\", \"Fail\")" 
    },
    { 
      function: "NESTED IF", 
      syntax: "=IF(test1, value1, IF(test2, value2, value3))", 
      description: "Multiple IF functions nested together to test multiple conditions",
      example: "=IF(A1>90, \"A\", IF(A1>80, \"B\", \"C\"))" 
    },
    { 
      function: "AND (with IF)", 
      syntax: "=IF(AND(cond1, cond2), value_if_true, value_if_false)", 
      description: "Tests multiple conditions that must all be true",
      example: "=IF(AND(A1>50, B1>50), \"Pass\", \"Fail\")" 
    },
    { 
      function: "OR (with IF)", 
      syntax: "=IF(OR(cond1, cond2), value_if_true, value_if_false)", 
      description: "Tests multiple conditions where at least one must be true",
      example: "=IF(OR(A1>90, B1>90), \"Excellent\", \"Good\")" 
    },
  ];

  // Student grading system example
  const studentData = [
    { name: "Alice", score: 92, attendance: 95 },
    { name: "Bob", score: 78, attendance: 88 },
    { name: "Charlie", score: 85, attendance: 76 },
    { name: "Diana", score: 65, attendance: 92 },
    { name: "Ethan", score: 58, attendance: 98 },
    { name: "Fiona", score: 43, attendance: 85 },
    { name: "George", score: 96, attendance: 74 },
  ];

  // Sales commission example
  const salesData = [
    { salesperson: "John", sales: 12500, experience: "Senior" },
    { salesperson: "Sarah", sales: 8500, experience: "Junior" },
    { salesperson: "Mike", sales: 22000, experience: "Senior" },
    { salesperson: "Emily", sales: 6500, experience: "Junior" },
    { salesperson: "David", sales: 18000, experience: "Senior" },
    { salesperson: "Lisa", sales: 4500, experience: "Trainee" },
    { salesperson: "Tom", sales: 9500, experience: "Junior" },
  ];

  // Calculate grades with IF and NESTED IF
  const studentsWithGrades = studentData.map(student => {
    let grade;
    let status;
    
    // NESTED IF for grade calculation
    if (student.score >= 90) grade = "A";
    else if (student.score >= 80) grade = "B";
    else if (student.score >= 70) grade = "C";
    else if (student.score >= 60) grade = "D";
    else grade = "F";
    
    // IF with AND for status
    if (student.score >= 60 && student.attendance >= 80) {
      status = "Pass";
    } else {
      status = "Fail";
    }
    
    // Additional status with more conditions
    let performance;
    if (student.score >= 90 && student.attendance >= 90) {
      performance = "Outstanding";
    } else if (student.score >= 80 || student.attendance >= 85) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
    
    return { ...student, grade, status, performance };
  });

  // Calculate commissions with nested conditions
  const salesWithCommissions = salesData.map(sale => {
    let commissionRate;
    let bonus;
    let performance;
    
    // NESTED IF for commission rate based on experience and sales
    if (sale.experience === "Senior") {
      if (sale.sales >= 20000) commissionRate = 0.12;
      else if (sale.sales >= 15000) commissionRate = 0.10;
      else if (sale.sales >= 10000) commissionRate = 0.08;
      else commissionRate = 0.06;
    } else if (sale.experience === "Junior") {
      if (sale.sales >= 10000) commissionRate = 0.07;
      else if (sale.sales >= 7000) commissionRate = 0.05;
      else commissionRate = 0.03;
    } else { // Trainee
      if (sale.sales >= 5000) commissionRate = 0.04;
      else commissionRate = 0.02;
    }
    
    const commission = sale.sales * commissionRate;
    
    // IF with AND for bonus eligibility
    if (sale.sales > 15000 && sale.experience === "Senior") {
      bonus = 1000;
    } else if (sale.sales > 8000 && sale.experience === "Junior") {
      bonus = 500;
    } else {
      bonus = 0;
    }
    
    // Performance rating with multiple conditions
    if (sale.sales >= 20000) {
      performance = "Excellent";
    } else if (sale.sales >= 10000 || (sale.sales >= 5000 && sale.experience === "Trainee")) {
      performance = "Good";
    } else {
      performance = "Average";
    }
    
    const totalEarnings = commission + bonus;
    
    return { 
      ...sale, 
      commissionRate: (commissionRate * 100) + "%", 
      commission: Math.round(commission),
      bonus,
      totalEarnings: Math.round(totalEarnings),
      performance
    };
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        IF and NESTED IF Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The IF function is one of the most powerful and commonly used functions in Excel. 
        It allows you to perform logical tests and return different values based on whether 
        the test is TRUE or FALSE. NESTED IF functions enable you to test multiple conditions 
        in sequence, making complex decision-making possible in your spreadsheets.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          In a grading system, you can use NESTED IF to automatically assign letter grades: 
          <code>=IF(A2&gt;=90, "A", IF(A2&gt;=80, "B", IF(A2&gt;=70, "C", IF(A2&gt;=60, "D", "F"))))</code>. 
          For sales commissions, you can combine IF with AND to check multiple conditions: 
          <code>=IF(AND(B2&gt;10000, C2="Senior"), B2*0.1, B2*0.05)</code> to give different 
          commission rates based on sales amount and experience level.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 IF Functions Reference
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
              {ifFunctions.map((func, idx) => (
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

      {/* Practice Examples */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📝 Practice Examples
        </h3>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Student Grading System:</strong> Create an automated grading system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Assigns letter grades (A-F) based on score using NESTED IF</li>
              <li>Determines pass/fail status using IF with AND (score ≥ 60 AND attendance ≥ 80)</li>
              <li>Provides performance ratings based on multiple conditions</li>
              <li>Handles different grading scenarios with logical tests</li>
            </ul>
          </li>
          <li>
            <strong>Sales Commission Calculator:</strong> Build a commission system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Calculates different commission rates based on experience level and sales using NESTED IF</li>
              <li>Applies bonuses using IF with AND conditions</li>
              <li>Determines performance ratings with multiple criteria</li>
              <li>Calculates total earnings with conditional logic</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Student Grading Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Grading System Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use IF and NESTED IF functions to automatically 
            calculate grades and determine student status based on multiple criteria.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Score</th>
                  <th className="px-4 py-2 border">Attendance (%)</th>
                  <th className="px-4 py-2 border">Grade</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Performance</th>
                </tr>
              </thead>
              <tbody>
                {studentsWithGrades.map((student, idx) => {
                  const statusColor = student.status === "Pass" ? "text-green-600" : "text-red-600";
                  const performanceColor = student.performance === "Outstanding" ? "text-green-600" : 
                                         student.performance === "Good" ? "text-blue-600" : "text-orange-600";
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{student.name}</td>
                      <td className="px-4 py-2 border">{student.score}</td>
                      <td className="px-4 py-2 border">{student.attendance}%</td>
                      <td className="px-4 py-2 border font-semibold text-[#217346]">
                        {student.grade}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${statusColor}`}>
                        {student.status}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${performanceColor}`}>
                        {student.performance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <strong>Grade (NESTED IF):</strong><br/>
                  =IF(B2&gt;=90, "A", IF(B2&gt;=80, "B", IF(B2&gt;=70, "C", IF(B2&gt;=60, "D", "F"))))
                </li>
                <li>
                  <strong>Status (IF with AND):</strong><br/>
                  =IF(AND(B2&gt;=60, C2&gt;=80), "Pass", "Fail")
                </li>
                <li>
                  <strong>Performance (NESTED IF with AND/OR):</strong><br/>
                  =IF(AND(B2&gt;=90, C2&gt;=90), "Outstanding", IF(OR(B2&gt;=80, C2&gt;=85), "Good", "Needs Improvement"))
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Logic Explanation</h4>
              <ul className="space-y-1 text-sm">
                <li>• Grades: A (90+), B (80-89), C (70-79), D (60-69), F (below 60)</li>
                <li>• Pass requires: Score ≥ 60 AND Attendance ≥ 80%</li>
                <li>• Outstanding: Score ≥ 90 AND Attendance ≥ 90%</li>
                <li>• Good: Score ≥ 80 OR Attendance ≥ 85%</li>
                <li>• Otherwise: Needs Improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sales Commission Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Commission Calculator Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use NESTED IF functions with multiple conditions to 
            calculate commissions, bonuses, and performance ratings based on sales and experience.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Salesperson</th>
                  <th className="px-4 py-2 border">Experience</th>
                  <th className="px-4 py-2 border">Sales ($)</th>
                  <th className="px-4 py-2 border">Commission Rate</th>
                  <th className="px-4 py-2 border">Commission ($)</th>
                  <th className="px-4 py-2 border">Bonus ($)</th>
                  <th className="px-4 py-2 border">Total Earnings ($)</th>
                  <th className="px-4 py-2 border">Performance</th>
                </tr>
              </thead>
              <tbody>
                {salesWithCommissions.map((sale, idx) => {
                  const performanceColor = sale.performance === "Excellent" ? "text-green-600" : 
                                         sale.performance === "Good" ? "text-blue-600" : "text-orange-600";
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{sale.salesperson}</td>
                      <td className="px-4 py-2 border">{sale.experience}</td>
                      <td className="px-4 py-2 border">${sale.sales.toLocaleString()}</td>
                      <td className="px-4 py-2 border font-semibold text-purple-600">
                        {sale.commissionRate}
                      </td>
                      <td className="px-4 py-2 border text-[#217346] font-semibold">
                        ${sale.commission.toLocaleString()}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        sale.bonus > 0 ? "text-green-600" : "text-gray-600"
                      }`}>
                        ${sale.bonus.toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border font-semibold text-[#217346]">
                        ${sale.totalEarnings.toLocaleString()}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${performanceColor}`}>
                        {sale.performance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <strong>Commission Rate (NESTED IF):</strong><br/>
                  =IF(C2="Senior", IF(B2&gt;=20000, 0.12, IF(B2&gt;=15000, 0.10, IF(B2&gt;=10000, 0.08, 0.06))), IF(C2="Junior", IF(B2&gt;=10000, 0.07, IF(B2&gt;=7000, 0.05, 0.03)), IF(B2&gt;=5000, 0.04, 0.02)))
                </li>
                <li>
                  <strong>Bonus (IF with AND):</strong><br/>
                  =IF(AND(B2&gt;15000, C2="Senior"), 1000, IF(AND(B2&gt;8000, C2="Junior"), 500, 0))
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Commission Structure</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>Senior:</strong> 12% (20k+), 10% (15-20k), 8% (10-15k), 6% (&lt;10k)</li>
                <li><strong>Junior:</strong> 7% (10k+), 5% (7-10k), 3% (&lt;7k)</li>
                <li><strong>Trainee:</strong> 4% (5k+), 2% (&lt;5k)</li>
                <li><strong>Bonuses:</strong> $1000 (Senior &gt;15k), $500 (Junior &gt;8k)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-yellow-50 p-4 rounded border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tips</h3>
        <ul className="list-disc pl-6 text-yellow-700 space-y-1">
          <li>Keep NESTED IF functions to a maximum of 7-8 levels for readability</li>
          <li>Use AND() and OR() functions within IF to test multiple conditions</li>
          <li>Consider using IFS function (Excel 2019+) for cleaner multiple conditions</li>
          <li>Always test your IF formulas with different scenarios to ensure they work correctly</li>
          <li>Use proper parentheses and indentation when writing complex NESTED IF formulas</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the IF function exercises already set up. 
          You can explore the nested conditions, test different scenarios, and see how 
          complex logical decisions are implemented in Excel.
        </p>
        <div className="space-y-3">
          <a
            href="/student_grading_system.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Grading System
          </a>
          <a
            href="/sales_commission_calculator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Commission Calculator
          </a>
        </div>
      </div>
    </div>
  );
}