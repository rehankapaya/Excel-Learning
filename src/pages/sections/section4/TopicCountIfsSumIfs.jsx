import React, { useState } from "react";

export default function TopicCountifsSumifs() {
  const [salesRegion, setSalesRegion] = useState("All");
  const [salesStatus, setSalesStatus] = useState("All");
  const [minSales, setMinSales] = useState(0);
  const [studentGrade, setStudentGrade] = useState("All");
  const [studentSubject, setStudentSubject] = useState("All");
  const [minScore, setMinScore] = useState(0);

  // COUNTIFS SUMIFS functions reference
  const countifsSumifsFunctions = [
    { 
      function: "COUNTIFS", 
      syntax: "=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)", 
      description: "Counts cells that meet multiple criteria across different ranges",
      example: "=COUNTIFS(A2:A100, \">50\", B2:B100, \"Completed\")" 
    },
    { 
      function: "SUMIFS", 
      syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)", 
      description: "Sums cells that meet multiple criteria across different ranges",
      example: "=SUMIFS(C2:C100, A2:A100, \"North\", B2:B100, \">1000\")" 
    },
    { 
      function: "AVERAGEIFS", 
      syntax: "=AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)", 
      description: "Calculates average of cells that meet multiple criteria",
      example: "=AVERAGEIFS(C2:C100, A2:A100, \"Electronics\", B2:B100, \">50\")" 
    },
  ];

  // Sales data for COUNTIFS SUMIFS example
  const salesData = [
    { id: 1, salesperson: "John Smith", region: "North", product: "Laptop", status: "Completed", amount: 12500, date: "2024-01-15" },
    { id: 2, salesperson: "Sarah Johnson", region: "South", product: "Tablet", status: "Pending", amount: 8500, date: "2024-01-18" },
    { id: 3, salesperson: "Mike Chen", region: "East", product: "Laptop", status: "Completed", amount: 11200, date: "2024-01-20" },
    { id: 4, salesperson: "Emily Davis", region: "West", product: "Phone", status: "Completed", amount: 9800, date: "2024-01-22" },
    { id: 5, salesperson: "David Wilson", region: "North", product: "Tablet", status: "Cancelled", amount: 7200, date: "2024-01-25" },
    { id: 6, salesperson: "Lisa Brown", region: "South", product: "Laptop", status: "Completed", amount: 15300, date: "2024-01-28" },
    { id: 7, salesperson: "Chris Miller", region: "East", product: "Phone", status: "Pending", amount: 6800, date: "2024-02-01" },
    { id: 8, salesperson: "Anna Taylor", region: "West", product: "Tablet", status: "Completed", amount: 9200, date: "2024-02-05" },
    { id: 9, salesperson: "James Wilson", region: "North", product: "Phone", status: "Completed", amount: 10500, date: "2024-02-08" },
    { id: 10, salesperson: "Maria Garcia", region: "South", product: "Phone", status: "Pending", amount: 7800, date: "2024-02-12" },
    { id: 11, salesperson: "Robert Lee", region: "East", product: "Laptop", status: "Completed", amount: 14200, date: "2024-02-15" },
    { id: 12, salesperson: "Jennifer Hall", region: "West", product: "Tablet", status: "Completed", amount: 8800, date: "2024-02-18" },
  ];

  // Student grades data for multiple criteria analysis
  const studentGrades = [
    { id: 1, student: "Emma Thompson", subject: "Mathematics", grade: "A", score: 92, semester: "Fall" },
    { id: 2, student: "Emma Thompson", subject: "Science", grade: "A-", score: 90, semester: "Fall" },
    { id: 3, student: "Emma Thompson", subject: "English", grade: "B+", score: 88, semester: "Fall" },
    { id: 4, student: "Noah Rodriguez", subject: "Mathematics", grade: "B", score: 85, semester: "Fall" },
    { id: 5, student: "Noah Rodriguez", subject: "Science", grade: "C+", score: 79, semester: "Fall" },
    { id: 6, student: "Noah Rodriguez", subject: "English", grade: "A-", score: 91, semester: "Fall" },
    { id: 7, student: "Olivia Kim", subject: "Mathematics", grade: "A", score: 95, semester: "Fall" },
    { id: 8, student: "Olivia Kim", subject: "Science", grade: "A", score: 93, semester: "Fall" },
    { id: 9, student: "Olivia Kim", subject: "English", grade: "A", score: 96, semester: "Fall" },
    { id: 10, student: "Liam Patel", subject: "Mathematics", grade: "C", score: 72, semester: "Fall" },
    { id: 11, student: "Liam Patel", subject: "Science", grade: "B-", score: 82, semester: "Fall" },
    { id: 12, student: "Liam Patel", subject: "English", grade: "C", score: 73, semester: "Fall" },
    { id: 13, student: "Ava Garcia", subject: "Mathematics", grade: "B+", score: 89, semester: "Fall" },
    { id: 14, student: "Ava Garcia", subject: "Science", grade: "B", score: 86, semester: "Fall" },
    { id: 15, student: "Ava Garcia", subject: "English", grade: "A-", score: 92, semester: "Fall" },
  ];

  // Filter sales data based on criteria
  const filteredSales = salesData.filter(sale => {
    if (salesRegion !== "All" && sale.region !== salesRegion) return false;
    if (salesStatus !== "All" && sale.status !== salesStatus) return false;
    if (minSales > 0 && sale.amount < minSales) return false;
    return true;
  });

  // Filter student data based on criteria
  const filteredStudents = studentGrades.filter(grade => {
    if (studentGrade !== "All" && grade.grade !== studentGrade) return false;
    if (studentSubject !== "All" && grade.subject !== studentSubject) return false;
    if (minScore > 0 && grade.score < minScore) return false;
    return true;
  });

  // Calculate statistics for sales
  const totalSalesCount = filteredSales.length;
  const totalSalesAmount = filteredSales.reduce((sum, sale) => sum + sale.amount, 0);
  const averageSaleAmount = totalSalesCount > 0 ? totalSalesAmount / totalSalesCount : 0;

  // Calculate statistics for students
  const totalStudentsCount = filteredStudents.length;
  const totalStudentsScore = filteredStudents.reduce((sum, student) => sum + student.score, 0);
  const averageStudentScore = totalStudentsCount > 0 ? totalStudentsScore / totalStudentsCount : 0;

  // Get unique values for dropdowns
  const regions = [...new Set(salesData.map(sale => sale.region))];
  const statuses = [...new Set(salesData.map(sale => sale.status))];
  const subjects = [...new Set(studentGrades.map(grade => grade.subject))];
  const grades = [...new Set(studentGrades.map(grade => grade.grade))];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        COUNTIFS and SUMIFS Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        COUNTIFS and SUMIFS are powerful functions that allow you to count and sum data based on 
        multiple criteria. Unlike their single-criterion counterparts (COUNTIF and SUMIF), these 
        functions can evaluate multiple conditions across different ranges, making them essential 
        for complex data analysis and reporting.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For sales analysis: <code>=COUNTIFS(B2:B100, "North", C2:C100, "Completed", D2:D100, "&gt;10000")</code> 
          counts sales in North region that are completed and over $10,000. For summing: 
          <code>=SUMIFS(E2:E100, B2:B100, "Electronics", C2:C100, "&gt;=2024-01-01", D2:D100, "&lt;=2024-01-31")</code> 
          sums Electronics sales for January 2024.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Multiple Criteria Functions Reference
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
              {countifsSumifsFunctions.map((func, idx) => (
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

      {/* COUNTIFS vs COUNTIF Comparison */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 COUNTIFS/SUMIFS vs COUNTIF/SUMIF</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ COUNTIFS/SUMIFS Advantages</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Multiple criteria across different ranges</li>
              <li>More flexible and powerful analysis</li>
              <li>Better performance with complex conditions</li>
              <li>Cleaner formulas than nested COUNTIF/SUMIF</li>
              <li>Easier to maintain and modify</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">🔄 When to Use Each</h4>
            <ul className="list-disc pl-5 space-y-1 text-orange-600">
              <li>Single condition: COUNTIF/SUMIF</li>
              <li>Multiple conditions: COUNTIFS/SUMIFS</li>
              <li>Complex criteria: COUNTIFS/SUMIFS</li>
              <li>Simple counting/summing: COUNTIF/SUMIF</li>
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
            <strong>Sales Analysis Dashboard:</strong> Create a comprehensive sales dashboard that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses COUNTIFS to count sales meeting multiple criteria</li>
              <li>Uses SUMIFS to calculate total sales with multiple conditions</li>
              <li>Filters data by region, status, and amount thresholds</li>
              <li>Provides real-time sales performance metrics</li>
            </ul>
          </li>
          <li>
            <strong>Student Performance Analyzer:</strong> Build an academic analysis system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses COUNTIFS to count students by grade and subject</li>
              <li>Uses SUMIFS to calculate total scores with filters</li>
              <li>Analyzes performance across multiple dimensions</li>
              <li>Provides insights for academic planning</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Analysis Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">💰 Sales Analysis Criteria</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Region:
              </label>
              <select
                value={salesRegion}
                onChange={(e) => setSalesRegion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="All">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Status:
              </label>
              <select
                value={salesStatus}
                onChange={(e) => setSalesStatus(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="All">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Minimum Sales Amount:
              </label>
              <input
                type="number"
                value={minSales}
                onChange={(e) => setMinSales(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Student Analysis Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">🎓 Student Analysis Criteria</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Subject:
              </label>
              <select
                value={studentSubject}
                onChange={(e) => setStudentSubject(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="All">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Grade:
              </label>
              <select
                value={studentGrade}
                onChange={(e) => setStudentGrade(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="All">All Grades</option>
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Minimum Score:
              </label>
              <input
                type="number"
                value={minScore}
                onChange={(e) => setMinScore(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                placeholder="0"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Sales Analysis Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Analysis Dashboard
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use COUNTIFS and SUMIFS to analyze sales data 
            with multiple filtering criteria for comprehensive business intelligence.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Sales Data Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Sales Data</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Salesperson</th>
                      <th className="px-3 py-2 border">Region</th>
                      <th className="px-3 py-2 border">Product</th>
                      <th className="px-3 py-2 border">Status</th>
                      <th className="px-3 py-2 border">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((sale, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                          filteredSales.some(fs => fs.id === sale.id) ? "ring-2 ring-green-500 bg-green-50" : ""
                        }`}
                      >
                        <td className="px-3 py-2 border">{sale.salesperson}</td>
                        <td className="px-3 py-2 border">{sale.region}</td>
                        <td className="px-3 py-2 border">{sale.product}</td>
                        <td className={`px-3 py-2 border font-semibold ${
                          sale.status === "Completed" ? "text-green-600" :
                          sale.status === "Pending" ? "text-orange-600" : "text-red-600"
                        }`}>
                          {sale.status}
                        </td>
                        <td className="px-3 py-2 border font-semibold">${sale.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* COUNTIFS SUMIFS Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Analysis Results</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Current Criteria:{" "}
                    <strong>
                      {salesRegion !== "All" ? `${salesRegion} Region` : "All Regions"}{" "}
                      {salesStatus !== "All" ? `• ${salesStatus}` : ""}{" "}
                      {minSales > 0 ? `• $${minSales.toLocaleString()}+` : ""}
                    </strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{totalSalesCount}</div>
                    <div className="text-sm text-green-800">Sales Count</div>
                    <div className="text-xs text-green-600 mt-1">COUNTIFS Result</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">${totalSalesAmount.toLocaleString()}</div>
                    <div className="text-sm text-purple-800">Total Sales</div>
                    <div className="text-xs text-purple-600 mt-1">SUMIFS Result</div>
                  </div>
                </div>

                <div className="text-center p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="text-lg font-bold text-yellow-700">
                    Average Sale: ${averageSaleAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}
                  </div>
                  <div className="text-xs text-yellow-600 mt-1">AVERAGEIFS Result</div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      COUNTIFS: =COUNTIFS(B2:B13{salesRegion !== "All" ? `, "${salesRegion}"` : ""}{salesStatus !== "All" ? `, C2:C13, "${salesStatus}"` : ""}{minSales > 0 ? `, D2:D13, ">${minSales}"` : ""})
                    </div>
                    <div>
                      SUMIFS: =SUMIFS(D2:D13{salesRegion !== "All" ? `, B2:B13, "${salesRegion}"` : ""}{salesStatus !== "All" ? `, C2:C13, "${salesStatus}"` : ""}{minSales > 0 ? `, D2:D13, ">${minSales}"` : ""})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📊 Detailed Sales Breakdown</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {regions.map(region => {
                const regionSales = salesData.filter(sale => sale.region === region);
                const completedSales = regionSales.filter(sale => sale.status === "Completed");
                const totalAmount = completedSales.reduce((sum, sale) => sum + sale.amount, 0);
                
                return (
                  <div key={region} className="text-center p-3 bg-gray-50 rounded border">
                    <div className="font-semibold text-[#217346]">{region}</div>
                    <div className="text-lg font-bold text-green-600">{completedSales.length}</div>
                    <div className="text-xs text-gray-600">Completed Sales</div>
                    <div className="text-sm font-semibold text-purple-600">
                      ${totalAmount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      =COUNTIFS(B2:B13, "{region}", C2:C13, "Completed")
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Student Performance Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Performance Analyzer
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use COUNTIFS and SUMIFS to analyze student performance 
            across multiple subjects and grading criteria for academic assessment.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Student Data Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Student Grades Data</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Student</th>
                      <th className="px-3 py-2 border">Subject</th>
                      <th className="px-3 py-2 border">Grade</th>
                      <th className="px-3 py-2 border">Score</th>
                      <th className="px-3 py-2 border">Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentGrades.map((grade, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                          filteredStudents.some(fs => fs.id === grade.id) ? "ring-2 ring-blue-500 bg-blue-50" : ""
                        }`}
                      >
                        <td className="px-3 py-2 border">{grade.student}</td>
                        <td className="px-3 py-2 border">{grade.subject}</td>
                        <td className={`px-3 py-2 border font-semibold ${
                          grade.grade === "A" ? "text-green-600" :
                          grade.grade === "B" ? "text-blue-600" :
                          grade.grade === "C" ? "text-orange-600" : "text-red-600"
                        }`}>
                          {grade.grade}
                        </td>
                        <td className="px-3 py-2 border font-semibold">{grade.score}</td>
                        <td className="px-3 py-2 border">{grade.semester}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* COUNTIFS SUMIFS Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Analysis Results</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Current Criteria:{" "}
                    <strong>
                      {studentSubject !== "All" ? `${studentSubject}` : "All Subjects"}{" "}
                      {studentGrade !== "All" ? `• Grade ${studentGrade}` : ""}{" "}
                      {minScore > 0 ? `• ${minScore}+ Score` : ""}
                    </strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{totalStudentsCount}</div>
                    <div className="text-sm text-green-800">Records Found</div>
                    <div className="text-xs text-green-600 mt-1">COUNTIFS Result</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">
                      {averageStudentScore.toFixed(1)}
                    </div>
                    <div className="text-sm text-purple-800">Average Score</div>
                    <div className="text-xs text-purple-600 mt-1">AVERAGEIFS Result</div>
                  </div>
                </div>

                <div className="text-center p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="text-lg font-bold text-yellow-700">
                    Total Score: {totalStudentsScore}
                  </div>
                  <div className="text-xs text-yellow-600 mt-1">SUMIFS Result</div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      COUNTIFS: =COUNTIFS(B2:B16{studentSubject !== "All" ? `, "${studentSubject}"` : ""}{studentGrade !== "All" ? `, C2:C16, "${studentGrade}"` : ""}{minScore > 0 ? `, D2:D16, ">=${minScore}"` : ""})
                    </div>
                    <div>
                      SUMIFS: =SUMIFS(D2:D16{studentSubject !== "All" ? `, B2:B16, "${studentSubject}"` : ""}{studentGrade !== "All" ? `, C2:C16, "${studentGrade}"` : ""}{minScore > 0 ? `, D2:D16, ">=${minScore}"` : ""})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grade Distribution */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📈 Grade Distribution Analysis</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              {["A", "B", "C", "D", "F"].map(grade => {
                const gradeCount = studentGrades.filter(g => g.grade === grade).length;
                const totalCount = studentGrades.length;
                const percentage = totalCount > 0 ? (gradeCount / totalCount) * 100 : 0;
                
                return (
                  <div key={grade} className="text-center p-3 bg-gray-50 rounded border">
                    <div className={`font-semibold text-lg ${
                      grade === "A" ? "text-green-600" :
                      grade === "B" ? "text-blue-600" :
                      grade === "C" ? "text-orange-600" :
                      grade === "D" ? "text-yellow-600" : "text-red-600"
                    }`}>
                      Grade {grade}
                    </div>
                    <div className="text-xl font-bold text-gray-800">{gradeCount}</div>
                    <div className="text-xs text-gray-600">Students</div>
                    <div className="text-sm font-semibold text-purple-600">
                      {percentage.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      =COUNTIFS(C2:C16, "{grade}")
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for COUNTIFS/SUMIFS</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>All criteria ranges must be the same size and shape</li>
          <li>Use absolute references ($A$1:$A$100) for criteria ranges when copying formulas</li>
          <li>Text criteria need quotes: "Text", numbers don't: 100</li>
          <li>Use wildcards for partial matches: "North*", "*completed", "A*"</li>
          <li>For date criteria, use DATE function: "&gt;"&DATE(2024,1,1)</li>
          <li>Combine with other functions: SUMPRODUCT for even more complex criteria</li>
          <li>Use named ranges to make formulas more readable and maintainable</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with COUNTIFS and SUMIFS exercises already set up. 
          Practice multi-criteria analysis, build dynamic dashboards, and master these essential functions.
        </p>
        <div className="space-y-3">
          <a
            href="/sales_analysis_dashboard.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Analysis Dashboard
          </a>
          <a
            href="/student_performance_analyzer.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Performance Analyzer
          </a>
        </div>
      </div>
    </div>
  );
}