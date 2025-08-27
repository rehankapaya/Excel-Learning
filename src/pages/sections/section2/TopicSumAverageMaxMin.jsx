import React from "react";

export default function TopicSumAverageMaxMin() {
  // Basic functions reference
  const basicFunctions = [
    { 
      function: "SUM", 
      syntax: "=SUM(number1, [number2], ...)", 
      description: "Adds all the numbers in a range of cells",
      example: "=SUM(A1:A5)" 
    },
    { 
      function: "AVERAGE", 
      syntax: "=AVERAGE(number1, [number2], ...)", 
      description: "Calculates the average of numbers in a range",
      example: "=AVERAGE(B2:B10)" 
    },
    { 
      function: "MAX", 
      syntax: "=MAX(number1, [number2], ...)", 
      description: "Returns the largest value in a set of values",
      example: "=MAX(C1:C20)" 
    },
    { 
      function: "MIN", 
      syntax: "=MIN(number1, [number2], ...)", 
      description: "Returns the smallest value in a set of values",
      example: "=MIN(D5:D15)" 
    },
  ];

  // Sales data example
  const salesData = [
    { salesperson: "Alice", q1: 12500, q2: 14200, q3: 13800, q4: 15600 },
    { salesperson: "Bob", q1: 9800, q2: 11200, q3: 10500, q4: 12100 },
    { salesperson: "Charlie", q1: 15300, q2: 16800, q3: 16200, q4: 17500 },
    { salesperson: "Diana", q1: 11200, q2: 12500, q3: 13100, q4: 14200 },
    { salesperson: "Ethan", q1: 8700, q2: 9500, q3: 10200, q4: 11000 },
  ];

  // Calculate totals and statistics
  const salesWithTotals = salesData.map(sales => {
    const total = sales.q1 + sales.q2 + sales.q3 + sales.q4;
    const average = total / 4;
    return { ...sales, total, average };
  });

  const allSales = salesData.flatMap(sales => [sales.q1, sales.q2, sales.q3, sales.q4]);
  const overallMax = Math.max(...allSales);
  const overallMin = Math.min(...allSales);
  const overallTotal = allSales.reduce((sum, sale) => sum + sale, 0);
  const overallAverage = overallTotal / allSales.length;

  // Student grades example
  const studentGrades = [
    { student: "Emma", math: 85, science: 92, english: 78, history: 88 },
    { student: "Noah", math: 72, science: 68, english: 81, history: 75 },
    { student: "Olivia", math: 93, science: 89, english: 95, history: 91 },
    { student: "Liam", math: 65, science: 71, english: 62, history: 68 },
    { student: "Ava", math: 88, science: 84, english: 90, history: 86 },
  ];

  // Calculate student statistics
  const gradesWithStats = studentGrades.map(student => {
    const subjects = [student.math, student.science, student.english, student.history];
    const total = subjects.reduce((sum, grade) => sum + grade, 0);
    const average = total / subjects.length;
    const highest = Math.max(...subjects);
    const lowest = Math.min(...subjects);
    return { ...student, total, average, highest, lowest };
  });

  const allGrades = studentGrades.flatMap(student => [student.math, student.science, student.english, student.history]);
  const classMax = Math.max(...allGrades);
  const classMin = Math.min(...allGrades);
  const classAverage = allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        SUM, AVERAGE, MAX, MIN Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The SUM, AVERAGE, MAX, and MIN functions are among the most commonly used 
        functions in Excel. They help you perform basic calculations on ranges of 
        data quickly and efficiently. These functions save time and reduce errors 
        compared to manual calculations.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          If you're analyzing sales data, you can use these functions to quickly 
          calculate total sales, average performance, identify your top-performing 
          salesperson (MAX), and find who needs additional support (MIN). For example, 
          <code>=SUM(B2:E2)</code> would calculate the total annual sales for a salesperson, 
          while <code>=MAX(F2:F10)</code> would find the highest total sales in your team.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Basic Functions Reference
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
              {basicFunctions.map((func, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="px-4 py-2 border font-medium">{func.function}</td>
                  <td className="px-4 py-2 border font-mono text-[#217346]">{func.syntax}</td>
                  <td className="px-4 py-2 border">{func.description}</td>
                  <td className="px-4 py-2 border font-mono">{func.example}</td>
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
            <strong>Sales Performance Analysis:</strong> Create a sales report that:
            <ul className="list-disc pl-6 mt-2">
              <li>Calculates total sales for each salesperson using SUM</li>
              <li>Finds the average quarterly sales for each person using AVERAGE</li>
              <li>Identifies the highest and lowest quarterly sales using MAX and MIN</li>
              <li>Calculates overall team statistics (total, average, max, min)</li>
            </ul>
          </li>
          <li>
            <strong>Student Gradebook:</strong> Create a gradebook that:
            <ul className="list-disc pl-6 mt-2">
              <li>Calculates each student's total score using SUM</li>
              <li>Computes each student's average grade using AVERAGE</li>
              <li>Finds the highest and lowest grade for each student using MAX and MIN</li>
              <li>Calculates class averages and identifies top and bottom performers</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Sales Performance Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Performance Analysis Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use SUM, AVERAGE, MAX, and MIN functions to 
            analyze sales performance across multiple quarters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Salesperson</th>
                  <th className="px-4 py-2 border">Q1 Sales</th>
                  <th className="px-4 py-2 border">Q2 Sales</th>
                  <th className="px-4 py-2 border">Q3 Sales</th>
                  <th className="px-4 py-2 border">Q4 Sales</th>
                  <th className="px-4 py-2 border">Total</th>
                  <th className="px-4 py-2 border">Average</th>
                  <th className="px-4 py-2 border">Best Quarter</th>
                  <th className="px-4 py-2 border">Worst Quarter</th>
                </tr>
              </thead>
              <tbody>
                {salesWithTotals.map((sales, idx) => {
                  const quarters = [sales.q1, sales.q2, sales.q3, sales.q4];
                  const bestQuarter = Math.max(...quarters);
                  const worstQuarter = Math.min(...quarters);
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{sales.salesperson}</td>
                      <td className="px-4 py-2 border">${sales.q1.toLocaleString()}</td>
                      <td className="px-4 py-2 border">${sales.q2.toLocaleString()}</td>
                      <td className="px-4 py-2 border">${sales.q3.toLocaleString()}</td>
                      <td className="px-4 py-2 border">${sales.q4.toLocaleString()}</td>
                      <td className="px-4 py-2 border font-semibold text-[#217346]">
                        ${sales.total.toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border">${sales.average.toLocaleString()}</td>
                      <td className="px-4 py-2 border text-green-600">${bestQuarter.toLocaleString()}</td>
                      <td className="px-4 py-2 border text-red-600">${worstQuarter.toLocaleString()}</td>
                    </tr>
                  );
                })}
                {/* Summary row */}
                <tr className="bg-[#eef5f1] font-semibold">
                  <td className="px-4 py-2 border" colSpan="5">Team Summary</td>
                  <td className="px-4 py-2 border text-[#217346]">
                    ${overallTotal.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border">
                    ${overallAverage.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border text-green-600">
                    ${overallMax.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border text-red-600">
                    ${overallMin.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Formulas used:</strong> SUM to calculate totals, AVERAGE for quarterly averages, 
            MAX to find best quarter, MIN to find worst quarter
          </p>
        </div>

        {/* Student Grades Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Gradebook Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use basic functions to calculate student 
            grades and analyze class performance.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Math</th>
                  <th className="px-4 py-2 border">Science</th>
                  <th className="px-4 py-2 border">English</th>
                  <th className="px-4 py-2 border">History</th>
                  <th className="px-4 py-2 border">Total</th>
                  <th className="px-4 py-2 border">Average</th>
                  <th className="px-4 py-2 border">Highest</th>
                  <th className="px-4 py-2 border">Lowest</th>
                </tr>
              </thead>
              <tbody>
                {gradesWithStats.map((student, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">{student.student}</td>
                    <td className="px-4 py-2 border">{student.math}</td>
                    <td className="px-4 py-2 border">{student.science}</td>
                    <td className="px-4 py-2 border">{student.english}</td>
                    <td className="px-4 py-2 border">{student.history}</td>
                    <td className="px-4 py-2 border font-semibold text-[#217346]">
                      {student.total}
                    </td>
                    <td className="px-4 py-2 border">{student.average.toFixed(1)}</td>
                    <td className="px-4 py-2 border text-green-600">{student.highest}</td>
                    <td className="px-4 py-2 border text-red-600">{student.lowest}</td>
                  </tr>
                ))}
                {/* Summary row */}
                <tr className="bg-[#eef5f1] font-semibold">
                  <td className="px-4 py-2 border" colSpan="5">Class Summary</td>
                  <td className="px-4 py-2 border text-[#217346]">
                    {allGrades.reduce((sum, grade) => sum + grade, 0)}
                  </td>
                  <td className="px-4 py-2 border">
                    {classAverage.toFixed(1)}
                  </td>
                  <td className="px-4 py-2 border text-green-600">
                    {classMax}
                  </td>
                  <td className="px-4 py-2 border text-red-600">
                    {classMin}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Formulas used:</strong> SUM to calculate total scores, AVERAGE for subject averages, 
            MAX to find highest grade, MIN to find lowest grade
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
            href="/sales_performance.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Performance Example
          </a>
          <a
            href="/student_gradebook.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Gradebook Example
          </a>
        </div>
      </div>
    </div>
  );
}