import React from "react";

export default function TopicCountifSumifAverageif() {
  // Conditional functions reference
  const conditionalFunctions = [
    { 
      function: "COUNTIF", 
      syntax: "=COUNTIF(range, criteria)", 
      description: "Counts the number of cells in a range that meet a single condition",
      example: "=COUNTIF(A1:A10, \">50\")" 
    },
    { 
      function: "SUMIF", 
      syntax: "=SUMIF(range, criteria, [sum_range])", 
      description: "Sums the values in a range that meet a single condition",
      example: "=SUMIF(B1:B10, \"Completed\", C1:C10)" 
    },
    { 
      function: "AVERAGEIF", 
      syntax: "=AVERAGEIF(range, criteria, [average_range])", 
      description: "Calculates the average of values in a range that meet a single condition",
      example: "=AVERAGEIF(D1:D10, \"<100\")" 
    },
  ];

  // Sales data by region example
  const salesData = [
    { region: "North", product: "Laptop", sales: 12500, status: "Completed" },
    { region: "South", product: "Tablet", sales: 8500, status: "Pending" },
    { region: "East", product: "Laptop", sales: 11200, status: "Completed" },
    { region: "West", product: "Phone", sales: 9800, status: "Completed" },
    { region: "North", product: "Tablet", sales: 7200, status: "Pending" },
    { region: "South", product: "Laptop", sales: 15300, status: "Completed" },
    { region: "East", product: "Phone", sales: 6800, status: "Pending" },
    { region: "West", product: "Tablet", sales: 9200, status: "Completed" },
    { region: "North", product: "Phone", sales: 10500, status: "Completed" },
    { region: "South", product: "Phone", sales: 7800, status: "Pending" },
  ];

  // Student grades by subject example
  const studentGrades = [
    { student: "Emma", subject: "Math", grade: 85, status: "Pass" },
    { student: "Emma", subject: "Science", grade: 92, status: "Pass" },
    { student: "Emma", subject: "English", grade: 78, status: "Pass" },
    { student: "Noah", subject: "Math", grade: 72, status: "Pass" },
    { student: "Noah", subject: "Science", grade: 68, status: "Fail" },
    { student: "Noah", subject: "English", grade: 81, status: "Pass" },
    { student: "Olivia", subject: "Math", grade: 93, status: "Pass" },
    { student: "Olivia", subject: "Science", grade: 89, status: "Pass" },
    { student: "Olivia", subject: "English", grade: 95, status: "Pass" },
    { student: "Liam", subject: "Math", grade: 65, status: "Fail" },
    { student: "Liam", subject: "Science", grade: 71, status: "Pass" },
    { student: "Liam", subject: "English", grade: 62, status: "Fail" },
  ];

  // Calculate sales statistics
  const totalSales = salesData.reduce((sum, sale) => sum + sale.sales, 0);
  const completedSales = salesData.filter(sale => sale.status === "Completed").reduce((sum, sale) => sum + sale.sales, 0);
  const pendingSales = salesData.filter(sale => sale.status === "Pending").reduce((sum, sale) => sum + sale.sales, 0);
  
  // Count by region
  const northCount = salesData.filter(sale => sale.region === "North").length;
  const southCount = salesData.filter(sale => sale.region === "South").length;
  const eastCount = salesData.filter(sale => sale.region === "East").length;
  const westCount = salesData.filter(sale => sale.region === "West").length;
  
  // Sum by product
  const laptopSales = salesData.filter(sale => sale.product === "Laptop").reduce((sum, sale) => sum + sale.sales, 0);
  const tabletSales = salesData.filter(sale => sale.product === "Tablet").reduce((sum, sale) => sum + sale.sales, 0);
  const phoneSales = salesData.filter(sale => sale.product === "Phone").reduce((sum, sale) => sum + sale.sales, 0);
  
  // Average by status
  const completedCount = salesData.filter(sale => sale.status === "Completed").length;
  const pendingCount = salesData.filter(sale => sale.status === "Pending").length;
  const avgCompleted = completedSales / completedCount;
  const avgPending = pendingSales / pendingCount;

  // Calculate student statistics
  const totalStudents = [...new Set(studentGrades.map(grade => grade.student))].length;
  const passCount = studentGrades.filter(grade => grade.status === "Pass").length;
  const failCount = studentGrades.filter(grade => grade.status === "Fail").length;
  
  // Average grades by subject
  const mathGrades = studentGrades.filter(grade => grade.subject === "Math");
  const scienceGrades = studentGrades.filter(grade => grade.subject === "Science");
  const englishGrades = studentGrades.filter(grade => grade.subject === "English");
  
  const avgMath = mathGrades.reduce((sum, grade) => sum + grade.grade, 0) / mathGrades.length;
  const avgScience = scienceGrades.reduce((sum, grade) => sum + grade.grade, 0) / scienceGrades.length;
  const avgEnglish = englishGrades.reduce((sum, grade) => sum + grade.grade, 0) / englishGrades.length;
  
  // Average grades by student
  const studentAverages = [];
  const students = [...new Set(studentGrades.map(grade => grade.student))];
  students.forEach(student => {
    const studentGradesList = studentGrades.filter(grade => grade.student === student);
    const average = studentGradesList.reduce((sum, grade) => sum + grade.grade, 0) / studentGradesList.length;
    const passFail = average >= 70 ? "Pass" : "Fail";
    studentAverages.push({ student, average, status: passFail });
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        COUNTIF, SUMIF, AVERAGEIF Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        COUNTIF, SUMIF, and AVERAGEIF are powerful conditional functions that allow you to 
        perform calculations based on specific criteria. These functions enable you to analyze 
        subsets of your data without manually filtering or sorting, making data analysis 
        more efficient and dynamic.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          In sales analysis, you can use <code>=COUNTIF(B2:B100, "Completed")</code> to count 
          how many sales are completed, <code>=SUMIF(C2:C100, "&gt;10000")</code> to sum sales 
          above $10,000, and <code>=AVERAGEIF(D2:D100, "North", E2:E100)</code> to calculate 
          the average sales amount for the North region specifically.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Conditional Functions Reference
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
              {conditionalFunctions.map((func, idx) => (
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
            <strong>Sales Analysis by Region and Product:</strong> Analyze sales data by:
            <ul className="list-disc pl-6 mt-2">
              <li>Counting sales by region using COUNTIF</li>
              <li>Summing sales by product category using SUMIF</li>
              <li>Calculating average sales for completed vs pending orders using AVERAGEIF</li>
              <li>Analyzing performance across different criteria</li>
            </ul>
          </li>
          <li>
            <strong>Student Performance Analysis:</strong> Analyze student grades by:
            <ul className="list-disc pl-6 mt-2">
              <li>Counting pass/fail results using COUNTIF</li>
              <li>Calculating average grades by subject using AVERAGEIF</li>
              <li>Summing grades for analysis using SUMIF</li>
              <li>Generating student performance reports</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Sales Analysis Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Analysis by Region and Product
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use COUNTIF, SUMIF, and AVERAGEIF functions to 
            analyze sales data across different regions, products, and statuses.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Region</th>
                  <th className="px-4 py-2 border">Product</th>
                  <th className="px-4 py-2 border">Sales ($)</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border">{sale.region}</td>
                    <td className="px-4 py-2 border">{sale.product}</td>
                    <td className="px-4 py-2 border">${sale.sales.toLocaleString()}</td>
                    <td className={`px-4 py-2 border ${
                      sale.status === "Completed" ? "text-green-600" : "text-orange-600"
                    } font-semibold`}>
                      {sale.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">COUNTIF Analysis</h4>
              <ul className="space-y-1 text-sm">
                <li>North Region: <span className="font-semibold">{northCount} sales</span></li>
                <li>South Region: <span className="font-semibold">{southCount} sales</span></li>
                <li>East Region: <span className="font-semibold">{eastCount} sales</span></li>
                <li>West Region: <span className="font-semibold">{westCount} sales</span></li>
                <li>Completed: <span className="font-semibold text-green-600">{completedCount} orders</span></li>
                <li>Pending: <span className="font-semibold text-orange-600">{pendingCount} orders</span></li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">SUMIF Analysis</h4>
              <ul className="space-y-1 text-sm">
                <li>Laptop Sales: <span className="font-semibold">${laptopSales.toLocaleString()}</span></li>
                <li>Tablet Sales: <span className="font-semibold">${tabletSales.toLocaleString()}</span></li>
                <li>Phone Sales: <span className="font-semibold">${phoneSales.toLocaleString()}</span></li>
                <li>Completed Sales: <span className="font-semibold text-green-600">${completedSales.toLocaleString()}</span></li>
                <li>Pending Sales: <span className="font-semibold text-orange-600">${pendingSales.toLocaleString()}</span></li>
                <li>Total Sales: <span className="font-semibold text-[#217346]">${totalSales.toLocaleString()}</span></li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">AVERAGEIF Analysis</h4>
              <ul className="space-y-1 text-sm">
                <li>Avg Completed: <span className="font-semibold text-green-600">${avgCompleted.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></li>
                <li>Avg Pending: <span className="font-semibold text-orange-600">${avgPending.toLocaleString(undefined, {maximumFractionDigits: 0})}</span></li>
                <li>Overall Average: <span className="font-semibold">${(totalSales / salesData.length).toLocaleString(undefined, {maximumFractionDigits: 0})}</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono">
              <div>
                <strong>COUNTIF Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=COUNTIF(A2:A11, "North")</li>
                  <li>=COUNTIF(D2:D11, "Completed")</li>
                  <li>=COUNTIF(B2:B11, "Laptop")</li>
                </ul>
              </div>
              <div>
                <strong>SUMIF Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=SUMIF(B2:B11, "Laptop", C2:C11)</li>
                  <li>=SUMIF(D2:D11, "Completed", C2:C11)</li>
                  <li>=SUMIF(C2:C11, "&gt;10000")</li>
                </ul>
              </div>
              <div>
                <strong>AVERAGEIF Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=AVERAGEIF(D2:D11, "Completed", C2:C11)</li>
                  <li>=AVERAGEIF(A2:A11, "North", C2:C11)</li>
                  <li>=AVERAGEIF(C2:C11, "&gt;=10000")</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Student Performance Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Performance Analysis
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use conditional functions to analyze student grades 
            across different subjects and performance categories.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Subject</th>
                  <th className="px-4 py-2 border">Grade</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {studentGrades.map((grade, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">{grade.student}</td>
                    <td className="px-4 py-2 border">{grade.subject}</td>
                    <td className="px-4 py-2 border">{grade.grade}</td>
                    <td className={`px-4 py-2 border font-semibold ${
                      grade.status === "Pass" ? "text-green-600" : "text-red-600"
                    }`}>
                      {grade.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">COUNTIF Analysis</h4>
              <ul className="space-y-1 text-sm">
                <li>Total Students: <span className="font-semibold">{totalStudents}</span></li>
                <li>Passing Grades: <span className="font-semibold text-green-600">{passCount}</span></li>
                <li>Failing Grades: <span className="font-semibold text-red-600">{failCount}</span></li>
                <li>Math Grades: <span className="font-semibold">{mathGrades.length}</span></li>
                <li>Science Grades: <span className="font-semibold">{scienceGrades.length}</span></li>
                <li>English Grades: <span className="font-semibold">{englishGrades.length}</span></li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">AVERAGEIF Analysis</h4>
              <ul className="space-y-1 text-sm">
                <li>Math Average: <span className="font-semibold">{avgMath.toFixed(1)}</span></li>
                <li>Science Average: <span className="font-semibold">{avgScience.toFixed(1)}</span></li>
                <li>English Average: <span className="font-semibold">{avgEnglish.toFixed(1)}</span></li>
                <li>Passing Avg: <span className="font-semibold text-green-600">
                  {(studentGrades.filter(g => g.status === "Pass").reduce((sum, g) => sum + g.grade, 0) / passCount).toFixed(1)}
                </span></li>
                <li>Failing Avg: <span className="font-semibold text-red-600">
                  {(studentGrades.filter(g => g.status === "Fail").reduce((sum, g) => sum + g.grade, 0) / failCount).toFixed(1)}
                </span></li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Student Averages</h4>
              <ul className="space-y-1 text-sm">
                {studentAverages.map((student, idx) => (
                  <li key={idx}>
                    {student.student}: <span className={`font-semibold ${
                      student.status === "Pass" ? "text-green-600" : "text-red-600"
                    }`}>
                      {student.average.toFixed(1)} ({student.status})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono">
              <div>
                <strong>COUNTIF Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=COUNTIF(D2:D13, "Pass")</li>
                  <li>=COUNTIF(B2:B13, "Math")</li>
                  <li>=COUNTIF(C2:C13, "&gt;=70")</li>
                </ul>
              </div>
              <div>
                <strong>SUMIF Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=SUMIF(B2:B13, "Math", C2:C13)</li>
                  <li>=SUMIF(D2:D13, "Pass", C2:C13)</li>
                  <li>=SUMIF(A2:A13, "Emma", C2:C13)</li>
                </ul>
              </div>
              <div>
                <strong>AVERAGEIF Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=AVERAGEIF(B2:B13, "Math", C2:C13)</li>
                  <li>=AVERAGEIF(D2:D13, "Pass", C2:C13)</li>
                  <li>=AVERAGEIF(A2:A13, "Emma", C2:C13)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Pro Tips</h3>
        <ul className="list-disc pl-6 text-blue-700 space-y-1">
          <li>Use wildcards in COUNTIF: <code>"*text*"</code> for partial matches</li>
          <li>Combine criteria: <code>"&gt;50"</code>, <code>"&lt;=100"</code>, <code>"&lt;&gt;Completed"</code></li>
          <li>Reference other cells for criteria: <code>="&gt;"&amp;F1</code></li>
          <li>Use SUMIF and AVERAGEIF with different ranges for criteria and calculation</li>
          <li>For multiple criteria, consider using COUNTIFS, SUMIFS, AVERAGEIFS</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the conditional function exercises already set up. 
          You can explore different criteria, test various conditions, and see how these 
          powerful functions work with real data.
        </p>
        <div className="space-y-3">
          <a
            href="/sales_analysis_conditional.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Analysis Example
          </a>
          <a
            href="/student_performance_analysis.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Performance Example
          </a>
        </div>
      </div>
    </div>
  );
}