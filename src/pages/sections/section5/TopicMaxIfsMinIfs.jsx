
import React, { useState } from "react";
export default function TopicMaxIfsMinIfs() {
  const [salesRegion, setSalesRegion] = useState("All");
  const [salesStatus, setSalesStatus] = useState("All");
  const [studentSubject, setStudentSubject] = useState("All");
  const [studentSemester, setStudentSemester] = useState("All");
  const [employeeDepartment, setEmployeeDepartment] = useState("All");
  const [minExperience, setMinExperience] = useState(0);

  // MAXIFS MINIFS functions reference
  const maxifsMinifsFunctions = [
    { 
      function: "MAXIFS", 
      syntax: "=MAXIFS(max_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)", 
      description: "Returns the maximum value from a range that meets multiple criteria",
      example: "=MAXIFS(C2:C100, A2:A100, \"North\", B2:B100, \"Completed\")" 
    },
    { 
      function: "MINIFS", 
      syntax: "=MINIFS(min_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)", 
      description: "Returns the minimum value from a range that meets multiple criteria",
      example: "=MINIFS(C2:C100, A2:A100, \"Electronics\", B2:B100, \">50\")" 
    },
    { 
      function: "AVERAGEIFS", 
      syntax: "=AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)", 
      description: "Returns the average of values that meet multiple criteria",
      example: "=AVERAGEIFS(C2:C100, A2:A100, \"Sales\", B2:B100, \">=2024-01-01\")" 
    },
  ];

  // Sales data for MAXIFS MINIFS example
  const salesData = [
    { id: 1, salesperson: "John Smith", region: "North", product: "Laptop", status: "Completed", amount: 12500, date: "2024-01-15" },
    { id: 2, salesperson: "Sarah Johnson", region: "South", product: "Tablet", status: "Pending", amount: 8500, date: "2024-01-18" },
    { id: 3, salesperson: "Mike Chen", region: "East", product: "Laptop", status: "Completed", amount: 18900, date: "2024-01-20" },
    { id: 4, salesperson: "Emily Davis", region: "West", product: "Phone", status: "Completed", amount: 9800, date: "2024-01-22" },
    { id: 5, salesperson: "David Wilson", region: "North", product: "Tablet", status: "Cancelled", amount: 7200, date: "2024-01-25" },
    { id: 6, salesperson: "Lisa Brown", region: "South", product: "Laptop", status: "Completed", amount: 15300, date: "2024-01-28" },
    { id: 7, salesperson: "Chris Miller", region: "East", product: "Phone", status: "Pending", amount: 6800, date: "2024-02-01" },
    { id: 8, salesperson: "Anna Taylor", region: "West", product: "Tablet", status: "Completed", amount: 14200, date: "2024-02-05" },
    { id: 9, salesperson: "James Wilson", region: "North", product: "Phone", status: "Completed", amount: 10500, date: "2024-02-08" },
    { id: 10, salesperson: "Maria Garcia", region: "South", product: "Phone", status: "Pending", amount: 7800, date: "2024-02-12" },
    { id: 11, salesperson: "Robert Lee", region: "East", product: "Laptop", status: "Completed", amount: 22100, date: "2024-02-15" },
    { id: 12, salesperson: "Jennifer Hall", region: "West", product: "Tablet", status: "Completed", amount: 11800, date: "2024-02-18" },
  ];

  // Student grades data for academic analysis
  const studentGrades = [
    { id: 1, student: "Emma Thompson", subject: "Mathematics", grade: "A", score: 92, semester: "Fall" },
    { id: 2, student: "Emma Thompson", subject: "Science", grade: "A-", score: 90, semester: "Fall" },
    { id: 3, student: "Emma Thompson", subject: "English", grade: "B+", score: 88, semester: "Fall" },
    { id: 4, student: "Noah Rodriguez", subject: "Mathematics", grade: "B", score: 85, semester: "Fall" },
    { id: 5, student: "Noah Rodriguez", subject: "Science", grade: "C+", score: 79, semester: "Fall" },
    { id: 6, student: "Noah Rodriguez", subject: "English", grade: "A-", score: 91, semester: "Fall" },
    { id: 7, student: "Olivia Kim", subject: "Mathematics", grade: "A", score: 96, semester: "Fall" },
    { id: 8, student: "Olivia Kim", subject: "Science", grade: "A", score: 94, semester: "Fall" },
    { id: 9, student: "Olivia Kim", subject: "English", grade: "A", score: 97, semester: "Fall" },
    { id: 10, student: "Liam Patel", subject: "Mathematics", grade: "C", score: 72, semester: "Fall" },
    { id: 11, student: "Liam Patel", subject: "Science", grade: "B-", score: 82, semester: "Fall" },
    { id: 12, student: "Liam Patel", subject: "English", grade: "C", score: 73, semester: "Fall" },
    { id: 13, student: "Ava Garcia", subject: "Mathematics", grade: "B+", score: 89, semester: "Spring" },
    { id: 14, student: "Ava Garcia", subject: "Science", grade: "B", score: 86, semester: "Spring" },
    { id: 15, student: "Ava Garcia", subject: "English", grade: "A-", score: 92, semester: "Spring" },
    { id: 16, student: "William Brown", subject: "Mathematics", grade: "A", score: 95, semester: "Spring" },
    { id: 17, student: "William Brown", subject: "Science", grade: "A-", score: 91, semester: "Spring" },
    { id: 18, student: "William Brown", subject: "English", grade: "B+", score: 87, semester: "Spring" },
  ];

  // Employee salary data for compensation analysis
  const employeeData = [
    { id: 1, name: "John Smith", department: "Sales", position: "Manager", experience: 5, salary: 75000 },
    { id: 2, name: "Sarah Johnson", department: "Marketing", position: "Specialist", experience: 3, salary: 62000 },
    { id: 3, name: "Mike Chen", department: "IT", position: "Developer", experience: 7, salary: 85000 },
    { id: 4, name: "Emily Davis", department: "HR", position: "Coordinator", experience: 2, salary: 55000 },
    { id: 5, name: "David Wilson", department: "Finance", position: "Analyst", experience: 4, salary: 68000 },
    { id: 6, name: "Lisa Brown", department: "Sales", position: "Representative", experience: 1, salary: 52000 },
    { id: 7, name: "Chris Miller", department: "IT", position: "Admin", experience: 3, salary: 60000 },
    { id: 8, name: "Anna Taylor", department: "Marketing", position: "Manager", experience: 6, salary: 78000 },
    { id: 9, name: "James Wilson", department: "Finance", position: "Manager", experience: 8, salary: 92000 },
    { id: 10, name: "Maria Garcia", department: "Sales", position: "Senior Rep", experience: 4, salary: 65000 },
  ];

  // Filter data based on criteria
  const filteredSales = salesData.filter(sale => {
    if (salesRegion !== "All" && sale.region !== salesRegion) return false;
    if (salesStatus !== "All" && sale.status !== salesStatus) return false;
    return true;
  });

  const filteredStudents = studentGrades.filter(grade => {
    if (studentSubject !== "All" && grade.subject !== studentSubject) return false;
    if (studentSemester !== "All" && grade.semester !== studentSemester) return false;
    return true;
  });

  const filteredEmployees = employeeData.filter(emp => {
    if (employeeDepartment !== "All" && emp.department !== employeeDepartment) return false;
    if (minExperience > 0 && emp.experience < minExperience) return false;
    return true;
  });

  // Calculate MAXIFS MINIFS results
  const maxSale = filteredSales.length > 0 ? Math.max(...filteredSales.map(s => s.amount)) : 0;
  const minSale = filteredSales.length > 0 ? Math.min(...filteredSales.map(s => s.amount)) : 0;
  const avgSale = filteredSales.length > 0 ? filteredSales.reduce((sum, s) => sum + s.amount, 0) / filteredSales.length : 0;

  const maxScore = filteredStudents.length > 0 ? Math.max(...filteredStudents.map(s => s.score)) : 0;
  const minScore = filteredStudents.length > 0 ? Math.min(...filteredStudents.map(s => s.score)) : 0;
  const avgScore = filteredStudents.length > 0 ? filteredStudents.reduce((sum, s) => sum + s.score, 0) / filteredStudents.length : 0;

  const maxSalary = filteredEmployees.length > 0 ? Math.max(...filteredEmployees.map(e => e.salary)) : 0;
  const minSalary = filteredEmployees.length > 0 ? Math.min(...filteredEmployees.map(e => e.salary)) : 0;
  const avgSalary = filteredEmployees.length > 0 ? filteredEmployees.reduce((sum, e) => sum + e.salary, 0) / filteredEmployees.length : 0;

  // Get top performers
  const topSale = filteredSales.find(s => s.amount === maxSale);
  const lowestScore = filteredStudents.find(s => s.score === minScore);
  const highestPaid = filteredEmployees.find(e => e.salary === maxSalary);

  // Get unique values for dropdowns
  const regions = [...new Set(salesData.map(sale => sale.region))];
  const statuses = [...new Set(salesData.map(sale => sale.status))];
  const subjects = [...new Set(studentGrades.map(grade => grade.subject))];
  const semesters = [...new Set(studentGrades.map(grade => grade.semester))];
  const departments = [...new Set(employeeData.map(emp => emp.department))];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        MAXIFS and MINIFS Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        MAXIFS and MINIFS are powerful statistical functions that return the maximum and minimum values 
        from a range based on multiple criteria. These functions extend the capabilities of MAX and MIN 
        by allowing you to filter data dynamically, making them essential for conditional analysis and 
        data-driven decision making.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For sales analysis: <code>=MAXIFS(D2:D100, B2:B100, "North", C2:C100, "Completed")</code> 
          finds the highest completed sale in the North region. For academic analysis: 
          <code>=MINIFS(D2:D100, B2:B100, "Mathematics", C2:C100, "Spring")</code> finds the lowest 
          math score in the Spring semester.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Conditional Statistical Functions Reference
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
              {maxifsMinifsFunctions.map((func, idx) => (
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

      {/* MAXIFS MINIFS vs Traditional Approach */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 MAXIFS/MINIFS vs Traditional Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ MAXIFS/MINIFS Advantages</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Single function for conditional max/min</li>
              <li>Multiple criteria in one formula</li>
              <li>More readable and maintainable</li>
              <li>Better performance with large datasets</li>
              <li>Dynamic criteria ranges</li>
              <li>No array formulas required</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">🔄 Traditional Workarounds</h4>
            <ul className="list-disc pl-5 space-y-1 text-orange-600">
              <li>MAX/MIN with FILTER (Excel 365)</li>
              <li>Array formulas with IF conditions</li>
              <li>Pivot Tables for analysis</li>
              <li>Helper columns with filters</li>
              <li>Complex INDEX/MATCH combinations</li>
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
            <strong>Sales Performance Analysis:</strong> Analyze sales data to find:
            <ul className="list-disc pl-6 mt-2">
              <li>Highest and lowest sales by region and status</li>
              <li>Top performing salespeople under specific conditions</li>
              <li>Sales range analysis with multiple criteria</li>
              <li>Performance benchmarking across categories</li>
            </ul>
          </li>
          <li>
            <strong>Academic Performance Analysis:</strong> Analyze student grades to identify:
            <ul className="list-disc pl-6 mt-2">
              <li>Highest and lowest scores by subject and semester</li>
              <li>Academic performance ranges</li>
              <li>Subject-specific achievement levels</li>
              <li>Comparative analysis across semesters</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                Semester:
              </label>
              <select
                value={studentSemester}
                onChange={(e) => setStudentSemester(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="All">All Semesters</option>
                {semesters.map(semester => (
                  <option key={semester} value={semester}>{semester}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Employee Analysis Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">👥 Employee Analysis Criteria</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Department:
              </label>
              <select
                value={employeeDepartment}
                onChange={(e) => setEmployeeDepartment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              >
                <option value="All">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Minimum Experience:
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={minExperience}
                onChange={(e) => setMinExperience(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-sm font-semibold mt-1">{minExperience}+ years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Sales Performance Analysis */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Performance Analysis with MAXIFS/MINIFS
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use MAXIFS and MINIFS to analyze sales performance 
            across different regions and status conditions.
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
                        } ${
                          sale.amount === maxSale && filteredSales.some(fs => fs.id === sale.id) ? "ring-2 ring-yellow-500 bg-yellow-50" : ""
                        } ${
                          sale.amount === minSale && filteredSales.some(fs => fs.id === sale.id) ? "ring-2 ring-blue-500 bg-blue-50" : ""
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

            {/* MAXIFS MINIFS Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Sales Performance Analysis</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Current Criteria:{" "}
                    <strong>
                      {salesRegion !== "All" ? `${salesRegion} Region` : "All Regions"}{" "}
                      {salesStatus !== "All" ? `• ${salesStatus}` : ""}
                    </strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl font-bold text-green-600">${maxSale.toLocaleString()}</div>
                    <div className="text-sm text-green-800">Highest Sale</div>
                    <div className="text-xs text-green-600 mt-1">MAXIFS Result</div>
                    {topSale && (
                      <div className="text-xs text-green-700 mt-1">
                        by {topSale.salesperson}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                    <div className="text-2xl font-bold text-red-600">${minSale.toLocaleString()}</div>
                    <div className="text-sm text-red-800">Lowest Sale</div>
                    <div className="text-xs text-red-600 mt-1">MINIFS Result</div>
                  </div>
                </div>

                <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-lg font-bold text-purple-700">
                    Average: ${avgSale.toLocaleString(undefined, {maximumFractionDigits: 0})}
                  </div>
                  <div className="text-xs text-purple-600 mt-1">AVERAGEIFS Result</div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      MAXIFS: =MAXIFS(E2:E13{salesRegion !== "All" ? `, B2:B13, "${salesRegion}"` : ""}{salesStatus !== "All" ? `, D2:D13, "${salesStatus}"` : ""})
                    </div>
                    <div>
                      MINIFS: =MINIFS(E2:E13{salesRegion !== "All" ? `, B2:B13, "${salesRegion}"` : ""}{salesStatus !== "All" ? `, D2:D13, "${salesStatus}"` : ""})
                    </div>
                    <div>
                      AVERAGEIFS: =AVERAGEIFS(E2:E13{salesRegion !== "All" ? `, B2:B13, "${salesRegion}"` : ""}{salesStatus !== "All" ? `, D2:D13, "${salesStatus}"` : ""})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Breakdown */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📊 Regional Performance Breakdown</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {regions.map(region => {
                const regionSales = salesData.filter(sale => sale.region === region && sale.status === "Completed");
                const regionMax = regionSales.length > 0 ? Math.max(...regionSales.map(s => s.amount)) : 0;
                const regionMin = regionSales.length > 0 ? Math.min(...regionSales.map(s => s.amount)) : 0;
                const regionAvg = regionSales.length > 0 ? regionSales.reduce((sum, s) => sum + s.amount, 0) / regionSales.length : 0;
                
                return (
                  <div key={region} className="text-center p-3 bg-gray-50 rounded border">
                    <div className="font-semibold text-[#217346]">{region} Region</div>
                    <div className="text-green-600 font-bold">${regionMax.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Highest</div>
                    <div className="text-red-600 font-bold">${regionMin.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Lowest</div>
                    <div className="text-purple-600 font-bold">${regionAvg.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                    <div className="text-xs text-gray-600">Average</div>
                    <div className="text-xs text-gray-500 mt-1">
                      =MAXIFS(E:E, B:B, "{region}", D:D, "Completed")
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Academic Performance Analysis */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Academic Performance Analysis with MAXIFS/MINIFS
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use MAXIFS and MINIFS to analyze student performance 
            across different subjects and semesters.
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
                        } ${
                          grade.score === maxScore && filteredStudents.some(fs => fs.id === grade.id) ? "ring-2 ring-yellow-500 bg-yellow-50" : ""
                        } ${
                          grade.score === minScore && filteredStudents.some(fs => fs.id === grade.id) ? "ring-2 ring-red-500 bg-red-50" : ""
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

            {/* MAXIFS MINIFS Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Academic Performance Analysis</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Current Criteria:{" "}
                    <strong>
                      {studentSubject !== "All" ? `${studentSubject}` : "All Subjects"}{" "}
                      {studentSemester !== "All" ? `• ${studentSemester} Semester` : ""}
                    </strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{maxScore}</div>
                    <div className="text-sm text-green-800">Highest Score</div>
                    <div className="text-xs text-green-600 mt-1">MAXIFS Result</div>
                  </div>
                  
                  <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                    <div className="text-2xl font-bold text-red-600">{minScore}</div>
                    <div className="text-sm text-red-800">Lowest Score</div>
                    <div className="text-xs text-red-600 mt-1">MINIFS Result</div>
                    {lowestScore && (
                      <div className="text-xs text-red-700 mt-1">
                        by {lowestScore.student}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-lg font-bold text-purple-700">
                    Average: {avgScore.toFixed(1)}
                  </div>
                  <div className="text-xs text-purple-600 mt-1">AVERAGEIFS Result</div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      MAXIFS: =MAXIFS(D2:D19{studentSubject !== "All" ? `, B2:B19, "${studentSubject}"` : ""}{studentSemester !== "All" ? `, E2:E19, "${studentSemester}"` : ""})
                    </div>
                    <div>
                      MINIFS: =MINIFS(D2:D19{studentSubject !== "All" ? `, B2:B19, "${studentSubject}"` : ""}{studentSemester !== "All" ? `, E2:E19, "${studentSemester}"` : ""})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Performance Breakdown */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📚 Subject Performance Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {subjects.map(subject => {
                const subjectGrades = studentGrades.filter(grade => grade.subject === subject);
                const subjectMax = subjectGrades.length > 0 ? Math.max(...subjectGrades.map(s => s.score)) : 0;
                const subjectMin = subjectGrades.length > 0 ? Math.min(...subjectGrades.map(s => s.score)) : 0;
                const subjectAvg = subjectGrades.length > 0 ? subjectGrades.reduce((sum, s) => sum + s.score, 0) / subjectGrades.length : 0;
                
                return (
                  <div key={subject} className="text-center p-3 bg-gray-50 rounded border">
                    <div className="font-semibold text-[#217346]">{subject}</div>
                    <div className="text-green-600 font-bold">{subjectMax}</div>
                    <div className="text-xs text-gray-600">Highest Score</div>
                    <div className="text-red-600 font-bold">{subjectMin}</div>
                    <div className="text-xs text-gray-600">Lowest Score</div>
                    <div className="text-purple-600 font-bold">{subjectAvg.toFixed(1)}</div>
                    <div className="text-xs text-gray-600">Average</div>
                    <div className="text-xs text-gray-500 mt-1">
                      =MAXIFS(D:D, B:B, "{subject}")
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Employee Compensation Analysis */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Compensation Analysis with MAXIFS/MINIFS
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates using MAXIFS and MINIFS for compensation analysis 
            across departments and experience levels.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Employee Data Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Employee Data</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Employee</th>
                      <th className="px-3 py-2 border">Department</th>
                      <th className="px-3 py-2 border">Position</th>
                      <th className="px-3 py-2 border">Experience</th>
                      <th className="px-3 py-2 border">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData.map((emp, idx) => (
                      <tr 
                        key={idx} 
                        className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-100"} ${
                          filteredEmployees.some(fe => fe.id === emp.id) ? "ring-2 ring-purple-500 bg-purple-50" : ""
                        } ${
                          emp.salary === maxSalary && filteredEmployees.some(fe => fe.id === emp.id) ? "ring-2 ring-yellow-500 bg-yellow-50" : ""
                        } ${
                          emp.salary === minSalary && filteredEmployees.some(fe => fe.id === emp.id) ? "ring-2 ring-blue-500 bg-blue-50" : ""
                        }`}
                      >
                        <td className="px-3 py-2 border">{emp.name}</td>
                        <td className="px-3 py-2 border">{emp.department}</td>
                        <td className="px-3 py-2 border">{emp.position}</td>
                        <td className="px-3 py-2 border">{emp.experience} years</td>
                        <td className="px-3 py-2 border font-semibold">${emp.salary.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MAXIFS MINIFS Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Compensation Analysis</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Current Criteria:{" "}
                    <strong>
                      {employeeDepartment !== "All" ? `${employeeDepartment} Department` : "All Departments"}{" "}
                      {minExperience > 0 ? `• ${minExperience}+ years experience` : ""}
                    </strong>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl font-bold text-green-600">${maxSalary.toLocaleString()}</div>
                    <div className="text-sm text-green-800">Highest Salary</div>
                    <div className="text-xs text-green-600 mt-1">MAXIFS Result</div>
                    {highestPaid && (
                      <div className="text-xs text-green-700 mt-1">
                        {highestPaid.name} ({highestPaid.position})
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center p-4 bg-red-50 rounded border border-red-200">
                    <div className="text-2xl font-bold text-red-600">${minSalary.toLocaleString()}</div>
                    <div className="text-sm text-red-800">Lowest Salary</div>
                    <div className="text-xs text-red-600 mt-1">MINIFS Result</div>
                  </div>
                </div>

                <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-lg font-bold text-purple-700">
                    Average: ${avgSalary.toLocaleString(undefined, {maximumFractionDigits: 0})}
                  </div>
                  <div className="text-xs text-purple-600 mt-1">AVERAGEIFS Result</div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">
                      MAXIFS: =MAXIFS(E2:E11{employeeDepartment !== "All" ? `, B2:B11, "${employeeDepartment}"` : ""}{minExperience > 0 ? `, D2:D11, ">=${minExperience}"` : ""})
                    </div>
                    <div>
                      MINIFS: =MINIFS(E2:E11{employeeDepartment !== "All" ? `, B2:B11, "${employeeDepartment}"` : ""}{minExperience > 0 ? `, D2:D11, ">=${minExperience}"` : ""})
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
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for MAXIFS/MINIFS</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>All criteria ranges must be the same size as the max/min range</li>
          <li>Use absolute references for ranges when copying formulas</li>
          <li>Combine with other functions for complex analysis: MAXIFS with INDEX/MATCH</li>
          <li>Handle empty results with IFERROR: =IFERROR(MAXIFS(...), "No data")</li>
          <li>Use wildcards for text criteria: "North*", "*Manager"</li>
          <li>For date ranges, use comparison operators: "&gt;="&DATE(2024,1,1)</li>
          <li>MAXIFS/MINIFS ignore empty cells and text values in the max/min range</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with MAXIFS and MINIFS exercises already set up. 
          Practice conditional maximum/minimum analysis across different business scenarios.
        </p>
        <div className="space-y-3">
          <a
            href="/maxifs_sales_analysis.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Analysis
          </a>
          <a
            href="/maxifs_academic_analysis.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Academic Analysis
          </a>
        </div>
      </div>
    </div>
  );
}