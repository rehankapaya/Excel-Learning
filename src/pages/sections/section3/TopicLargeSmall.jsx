import React from "react";

export default function TopicLargeSmall() {
  // Ranking functions reference
  const rankingFunctions = [
    { 
      function: "LARGE", 
      syntax: "=LARGE(array, k)", 
      description: "Returns the k-th largest value in a data set",
      example: "=LARGE(A1:A10, 1) → Returns largest value" 
    },
    { 
      function: "SMALL", 
      syntax: "=SMALL(array, k)", 
      description: "Returns the k-th smallest value in a data set",
      example: "=SMALL(B1:B20, 3) → Returns 3rd smallest value" 
    },
    { 
      function: "MAX", 
      syntax: "=MAX(number1, [number2], ...)", 
      description: "Returns the largest value in a set (equivalent to LARGE with k=1)",
      example: "=MAX(C1:C15)" 
    },
    { 
      function: "MIN", 
      syntax: "=MIN(number1, [number2], ...)", 
      description: "Returns the smallest value in a set (equivalent to SMALL with k=1)",
      example: "=MIN(D1:D10)" 
    },
  ];

  // Sales performance data
  const salesData = [
    { salesperson: "Alice Johnson", region: "North", sales: 12500, returns: 320 },
    { salesperson: "Bob Smith", region: "South", sales: 8500, returns: 150 },
    { salesperson: "Carol Davis", region: "East", sales: 18900, returns: 420 },
    { salesperson: "David Wilson", region: "West", sales: 11200, returns: 280 },
    { salesperson: "Emma Brown", region: "North", sales: 15300, returns: 190 },
    { salesperson: "Frank Miller", region: "South", sales: 7200, returns: 210 },
    { salesperson: "Grace Lee", region: "East", sales: 16800, returns: 380 },
    { salesperson: "Henry Taylor", region: "West", sales: 9500, returns: 130 },
  ];

  // Student test scores data
  const studentScores = [
    { student: "Olivia Martin", math: 92, science: 88, english: 85, history: 90 },
    { student: "Liam Chen", math: 78, science: 82, english: 79, history: 85 },
    { student: "Sophia Rodriguez", math: 95, science: 92, english: 88, history: 94 },
    { student: "Noah Kim", math: 65, science: 72, english: 68, history: 70 },
    { student: "Ava Patel", math: 88, science: 85, english: 92, history: 87 },
    { student: "William Garcia", math: 72, science: 78, english: 75, history: 80 },
    { student: "Isabella Lopez", math: 83, science: 79, english: 86, history: 82 },
    { student: "James Wong", math: 91, science: 87, english: 84, history: 89 },
  ];

  // Calculate sales statistics
  const salesValues = salesData.map(s => s.sales);
  const returnValues = salesData.map(s => s.returns);
  
  const topSales = [
    { rank: 1, value: Math.max(...salesValues), person: salesData.find(s => s.sales === Math.max(...salesValues))?.salesperson },
    { rank: 2, value: [...new Set(salesValues)].sort((a, b) => b - a)[1], person: salesData.find(s => s.sales === [...new Set(salesValues)].sort((a, b) => b - a)[1])?.salesperson },
    { rank: 3, value: [...new Set(salesValues)].sort((a, b) => b - a)[2], person: salesData.find(s => s.sales === [...new Set(salesValues)].sort((a, b) => b - a)[2])?.salesperson },
  ];

  const bottomSales = [
    { rank: 1, value: Math.min(...salesValues), person: salesData.find(s => s.sales === Math.min(...salesValues))?.salesperson },
    { rank: 2, value: [...new Set(salesValues)].sort((a, b) => a - b)[1], person: salesData.find(s => s.sales === [...new Set(salesValues)].sort((a, b) => a - b)[1])?.salesperson },
    { rank: 3, value: [...new Set(salesValues)].sort((a, b) => a - b)[2], person: salesData.find(s => s.sales === [...new Set(salesValues)].sort((a, b) => a - b)[2])?.salesperson },
  ];

  // Calculate student statistics
  const mathScores = studentScores.map(s => s.math);
  const scienceScores = studentScores.map(s => s.science);
  const englishScores = studentScores.map(s => s.english);
  const historyScores = studentScores.map(s => s.history);
  const allScores = studentScores.flatMap(s => [s.math, s.science, s.english, s.history]);

  const topMathScores = [
    { rank: 1, value: Math.max(...mathScores), student: studentScores.find(s => s.math === Math.max(...mathScores))?.student },
    { rank: 2, value: [...new Set(mathScores)].sort((a, b) => b - a)[1], student: studentScores.find(s => s.math === [...new Set(mathScores)].sort((a, b) => b - a)[1])?.student },
    { rank: 3, value: [...new Set(mathScores)].sort((a, b) => b - a)[2], student: studentScores.find(s => s.math === [...new Set(mathScores)].sort((a, b) => b - a)[2])?.student },
  ];

  const bottomMathScores = [
    { rank: 1, value: Math.min(...mathScores), student: studentScores.find(s => s.math === Math.min(...mathScores))?.student },
    { rank: 2, value: [...new Set(mathScores)].sort((a, b) => a - b)[1], student: studentScores.find(s => s.math === [...new Set(mathScores)].sort((a, b) => a - b)[1])?.student },
    { rank: 3, value: [...new Set(mathScores)].sort((a, b) => a - b)[2], student: studentScores.find(s => s.math === [...new Set(mathScores)].sort((a, b) => a - b)[2])?.student },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        LARGE and SMALL Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The LARGE and SMALL functions are powerful ranking functions that allow you to find 
        specific ranked values in a dataset. Unlike MAX and MIN which only return the absolute 
        highest and lowest values, LARGE and SMALL can return any ranked position - second highest, 
        third lowest, etc. This makes them invaluable for performance analysis, identifying top 
        performers, and analyzing distribution patterns.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          In sales analysis, you can use <code>=LARGE(B2:B20, 1)</code> to find the highest sales, 
          <code>=LARGE(B2:B20, 2)</code> for the second highest, and <code>=SMALL(B2:B20, 3)</code> 
          to find the third lowest sales. This helps identify not just the top performer, but also 
          runners-up and those who need additional support.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Ranking Functions Reference
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
              {rankingFunctions.map((func, idx) => (
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
            <strong>Sales Performance Ranking:</strong> Analyze sales team performance by:
            <ul className="list-disc pl-6 mt-2">
              <li>Identifying top 3 sales performers using LARGE</li>
              <li>Finding bottom 3 performers needing support using SMALL</li>
              <li>Calculating performance thresholds and benchmarks</li>
              <li>Analyzing sales distribution across the team</li>
            </ul>
          </li>
          <li>
            <strong>Student Test Score Analysis:</strong> Evaluate academic performance by:
            <ul className="list-disc pl-6 mt-2">
              <li>Finding highest and lowest scores in each subject</li>
              <li>Identifying top 3 students in mathematics using LARGE</li>
              <li>Finding students who need help using SMALL</li>
              <li>Creating performance tiers and benchmarks</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Sales Performance Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Performance Ranking Analysis
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use LARGE and SMALL functions to identify 
            top performers, analyze sales distribution, and set performance benchmarks.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Salesperson</th>
                  <th className="px-4 py-2 border">Region</th>
                  <th className="px-4 py-2 border">Sales ($)</th>
                  <th className="px-4 py-2 border">Returns ($)</th>
                  <th className="px-4 py-2 border">Net Sales ($)</th>
                  <th className="px-4 py-2 border">Rank</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, idx) => {
                  const netSales = sale.sales - sale.returns;
                  const salesRank = [...salesValues].sort((a, b) => b - a).indexOf(sale.sales) + 1;
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{sale.salesperson}</td>
                      <td className="px-4 py-2 border">{sale.region}</td>
                      <td className="px-4 py-2 border">${sale.sales.toLocaleString()}</td>
                      <td className="px-4 py-2 border text-red-600">${sale.returns.toLocaleString()}</td>
                      <td className="px-4 py-2 border font-semibold text-[#217346]">
                        ${netSales.toLocaleString()}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        salesRank === 1 ? "text-green-600" : 
                        salesRank <= 3 ? "text-blue-600" : 
                        salesRank >= salesData.length - 2 ? "text-orange-600" : "text-gray-600"
                      }`}>
                        #{salesRank}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Top Performers (LARGE Function)</h4>
              <div className="space-y-3">
                {topSales.map((top, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <div>
                      <span className="font-semibold text-green-700">#{top.rank}</span>
                      <span className="ml-2 text-sm">{top.person}</span>
                    </div>
                    <div className="font-bold text-green-800">${top.value.toLocaleString()}</div>
                  </div>
                ))}
                <div className="mt-3 p-2 bg-gray-50 rounded">
                  <div className="text-sm font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">1st: =LARGE(C2:C9, 1)</div>
                    <div>2nd: =LARGE(C2:C9, 2)</div>
                    <div>3rd: =LARGE(C2:C9, 3)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Need Support (SMALL Function)</h4>
              <div className="space-y-3">
                {bottomSales.map((bottom, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-orange-50 rounded">
                    <div>
                      <span className="font-semibold text-orange-700">#{bottom.rank}</span>
                      <span className="ml-2 text-sm">{bottom.person}</span>
                    </div>
                    <div className="font-bold text-orange-800">${bottom.value.toLocaleString()}</div>
                  </div>
                ))}
                <div className="mt-3 p-2 bg-gray-50 rounded">
                  <div className="text-sm font-mono">
                    <strong>Excel Formulas:</strong>
                    <div className="mt-1">1st: =SMALL(C2:C9, 1)</div>
                    <div>2nd: =SMALL(C2:C9, 2)</div>
                    <div>3rd: =SMALL(C2:C9, 3)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Sales Performance Benchmarks</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-blue-50 rounded">
                <div className="text-blue-800 font-semibold">Top 25%</div>
                <div className="text-lg font-bold text-blue-900">
                  ${[...salesValues].sort((a, b) => b - a)[Math.floor(salesValues.length * 0.25)]?.toLocaleString()}
                </div>
                <div className="text-xs text-blue-600 mt-1">=LARGE(C2:C9, 2)</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded">
                <div className="text-green-800 font-semibold">Median</div>
                <div className="text-lg font-bold text-green-900">
                  ${[...salesValues].sort((a, b) => a - b)[Math.floor(salesValues.length / 2)]?.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1">=SMALL(C2:C9, 4)</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded">
                <div className="text-yellow-800 font-semibold">Bottom 25%</div>
                <div className="text-lg font-bold text-yellow-900">
                  ${[...salesValues].sort((a, b) => a - b)[Math.floor(salesValues.length * 0.25)]?.toLocaleString()}
                </div>
                <div className="text-xs text-yellow-600 mt-1">=SMALL(C2:C9, 2)</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded">
                <div className="text-red-800 font-semibold">Performance Gap</div>
                <div className="text-lg font-bold text-red-900">
                  ${(Math.max(...salesValues) - Math.min(...salesValues)).toLocaleString()}
                </div>
                <div className="text-xs text-red-600 mt-1">=LARGE-SMALL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Test Scores Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Test Score Analysis
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use LARGE and SMALL functions to analyze academic 
            performance, identify top students, and find those who need additional support.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Math</th>
                  <th className="px-4 py-2 border">Science</th>
                  <th className="px-4 py-2 border">English</th>
                  <th className="px-4 py-2 border">History</th>
                  <th className="px-4 py-2 border">Average</th>
                  <th className="px-4 py-2 border">Math Rank</th>
                </tr>
              </thead>
              <tbody>
                {studentScores.map((student, idx) => {
                  const average = (student.math + student.science + student.english + student.history) / 4;
                  const mathRank = [...mathScores].sort((a, b) => b - a).indexOf(student.math) + 1;
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{student.student}</td>
                      <td className="px-4 py-2 border">{student.math}</td>
                      <td className="px-4 py-2 border">{student.science}</td>
                      <td className="px-4 py-2 border">{student.english}</td>
                      <td className="px-4 py-2 border">{student.history}</td>
                      <td className="px-4 py-2 border font-semibold text-[#217346]">
                        {average.toFixed(1)}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        mathRank === 1 ? "text-green-600" : 
                        mathRank <= 3 ? "text-blue-600" : 
                        mathRank >= studentScores.length - 2 ? "text-orange-600" : "text-gray-600"
                      }`}>
                        #{mathRank}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Math Top Performers (LARGE)</h4>
              <div className="space-y-3">
                {topMathScores.map((top, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-green-50 rounded">
                    <div>
                      <span className="font-semibold text-green-700">#{top.rank}</span>
                      <span className="ml-2 text-sm">{top.student}</span>
                    </div>
                    <div className="font-bold text-green-800">{top.value}</div>
                  </div>
                ))}
                <div className="mt-3 p-2 bg-gray-50 rounded">
                  <div className="text-sm">
                    <strong>Subject Benchmarks:</strong>
                    <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
                      <div>Math High: <span className="font-semibold">{Math.max(...mathScores)}</span></div>
                      <div>Science High: <span className="font-semibold">{Math.max(...scienceScores)}</span></div>
                      <div>English High: <span className="font-semibold">{Math.max(...englishScores)}</span></div>
                      <div>History High: <span className="font-semibold">{Math.max(...historyScores)}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Math Need Help (SMALL)</h4>
              <div className="space-y-3">
                {bottomMathScores.map((bottom, idx) => (
                  <div key={idx} className="flex justify-between items-center p-2 bg-orange-50 rounded">
                    <div>
                      <span className="font-semibold text-orange-700">#{bottom.rank}</span>
                      <span className="ml-2 text-sm">{bottom.student}</span>
                    </div>
                    <div className="font-bold text-orange-800">{bottom.value}</div>
                  </div>
                ))}
                <div className="mt-3 p-2 bg-gray-50 rounded">
                  <div className="text-sm">
                    <strong>Support Thresholds:</strong>
                    <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
                      <div>Math Low: <span className="font-semibold">{Math.min(...mathScores)}</span></div>
                      <div>Science Low: <span className="font-semibold">{Math.min(...scienceScores)}</span></div>
                      <div>Passing: <span className="font-semibold">70+</span></div>
                      <div>Excellent: <span className="font-semibold">90+</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas for Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <strong>LARGE Function Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Top Math: =LARGE(B2:B9, 1)</li>
                  <li>2nd Math: =LARGE(B2:B9, 2)</li>
                  <li>Top Science: =LARGE(C2:C9, 1)</li>
                  <li>3rd English: =LARGE(D2:D9, 3)</li>
                </ul>
              </div>
              <div>
                <strong>SMALL Function Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Lowest Math: =SMALL(B2:B9, 1)</li>
                  <li>2nd Lowest: =SMALL(B2:B9, 2)</li>
                  <li>Bottom Science: =SMALL(C2:C9, 1)</li>
                  <li>3rd Lowest English: =SMALL(D2:D9, 3)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-purple-50 p-4 rounded border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">💡 Pro Tips</h3>
        <ul className="list-disc pl-6 text-purple-700 space-y-1">
          <li>Use LARGE(array, 1) instead of MAX() for consistency in formulas</li>
          <li>Combine with INDEX/MATCH to find which item corresponds to the ranked value</li>
          <li>Use SMALL to find outliers or values that need attention</li>
          <li>Create performance tiers: Top 10% (LARGE with k based on count), Middle, Bottom 10% (SMALL)</li>
          <li>Handle duplicates carefully - LARGE and SMALL will return same value for same rank if duplicates exist</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the LARGE and SMALL function exercises already set up. 
          You can experiment with different ranking positions, analyze performance distributions, 
          and see how these functions help identify trends and outliers.
        </p>
        <div className="space-y-3">
          <a
            href="/sales_performance_ranking.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Ranking Example
          </a>
          <a
            href="/student_score_analysis.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Score Analysis
          </a>
        </div>
      </div>
    </div>
  );
}