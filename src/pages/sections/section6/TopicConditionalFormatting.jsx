import React, { useState } from "react";

export default function TopicConditionalFormatting() {

  const [salesData, setSalesData] = useState([
    { region: "North", sales: 12500, target: 10000, growth: 0.25, trend: "up" },
    { region: "South", sales: 8500, target: 12000, growth: -0.29, trend: "down" },
    { region: "East", sales: 9200, target: 8000, growth: 0.15, trend: "up" },
    { region: "West", sales: 11200, target: 11000, growth: 0.02, trend: "up" },
    { region: "Central", sales: 7800, target: 9000, growth: -0.13, trend: "down" },
  ]);

  const [studentGrades, setStudentGrades] = useState([
    { student: "John Smith", math: 85, science: 92, english: 78, average: 85.0, attendance: 0.95 },
    { student: "Sarah Johnson", math: 92, science: 88, english: 95, average: 91.7, attendance: 0.88 },
    { student: "Mike Chen", math: 78, science: 85, english: 82, average: 81.7, attendance: 0.92 },
    { student: "Emily Davis", math: 65, science: 72, english: 68, average: 68.3, attendance: 0.78 },
    { student: "David Wilson", math: 95, science: 90, english: 88, average: 91.0, attendance: 0.96 },
  ]);

  const [projectTasks, setProjectTasks] = useState([
    { task: "Design Phase", assignee: "John", status: "Completed", progress: 1.0, dueDate: "2024-01-15", priority: "High" },
    { task: "Development", assignee: "Sarah", status: "In Progress", progress: 0.75, dueDate: "2024-02-28", priority: "High" },
    { task: "Testing", assignee: "Mike", status: "Not Started", progress: 0.0, dueDate: "2024-03-15", priority: "Medium" },
    { task: "Documentation", assignee: "Emily", status: "In Progress", progress: 0.4, dueDate: "2024-02-14", priority: "Low" },
    { task: "Deployment", assignee: "David", status: "Not Started", progress: 0.0, dueDate: "2024-04-01", priority: "High" },
  ]);

  // Conditional Formatting functions reference
  const formattingFunctions = [
    { 
      function: "Conditional Formatting", 
      syntax: "Home → Conditional Formatting → New Rule", 
      description: "Apply formatting based on cell values, formulas, or conditions",
      example: "Highlight cells greater than 100" 
    },
    { 
      function: "Color Scales", 
      syntax: "Color Scales → [Preset]", 
      description: "Apply gradient colors based on value hierarchy",
      example: "Green-Yellow-Red scale for performance" 
    },
    { 
      function: "Data Bars", 
      syntax: "Data Bars → [Preset]", 
      description: "Display in-cell bar charts representing values",
      example: "Data bars for sales comparison" 
    },
    { 
      function: "Icon Sets", 
      syntax: "Icon Sets → [Preset]", 
      description: "Show icons based on value ranges or thresholds",
      example: "Traffic lights for status indicators" 
    },
    { 
      function: "Top/Bottom Rules", 
      syntax: "Top/Bottom → [Rule Type]", 
      description: "Highlight top/bottom ranked items",
      example: "Top 10% performers" 
    },
  ];

  // Common Conditional Formatting types
  const formattingTypes = [
    { 
      type: "Highlight Cell Rules", 
      description: "Format cells based on comparison with specific value",
      examples: "Greater than, Less than, Between, Equal to, Text that Contains",
      useCase: "Identify values above/below thresholds" 
    },
    { 
      type: "Data Bars", 
      description: "Visual bar charts within cells proportional to values",
      examples: "Gradient fill, Solid fill, Custom colors",
      useCase: "Quick visual comparison of values" 
    },
    { 
      type: "Color Scales", 
      description: "2 or 3-color gradient based on value distribution",
      examples: "Green-Yellow-Red, Blue-White-Red, Custom scales",
      useCase: "Heat maps and performance grading" 
    },
    { 
      type: "Icon Sets", 
      description: "Symbols indicating value status or category",
      examples: "Traffic lights, Arrows, Ratings, Indicators",
      useCase: "Status tracking and trend indicators" 
    },
    { 
      type: "Top/Bottom Rules", 
      description: "Highlight ranking positions in dataset",
      examples: "Top 10 items, Bottom 10%, Above average",
      useCase: "Performance ranking and outlier detection" 
    },
    { 
      type: "Custom Formulas", 
      description: "Advanced formatting using Excel formulas",
      examples: "=AND(A1>100, A1<200), =$B1>TODAY()",
      useCase: "Complex business rules and cross-references" 
    },
  ];

  // Formatting rules and their applications
  const formattingRules = [
    {
      category: "Sales Performance",
      rules: [
        { name: "Above Target", formula: "=B2>C2", format: "Green fill", description: "Sales exceeding targets" },
        { name: "Below 80% Target", formula: "=B2/C2<0.8", format: "Red fill", description: "Significantly underperforming" },
        { name: "Top Performer", formula: "=B2>=LARGE($B$2:$B$6,1)", format: "Gold border", description: "Highest sales" },
      ]
    },
    {
      category: "Academic Grading",
      rules: [
        { name: "A Grade", formula: "=E2>=90", format: "Dark green fill", description: "90% and above" },
        { name: "F Grade", formula: "=E2<60", format: "Red fill", description: "Below 60%" },
        { name: "Perfect Attendance", formula: "=F2>=0.95", format: "Blue text", description: "95%+ attendance" },
      ]
    },
    {
      category: "Project Management",
      rules: [
        { name: "Overdue", formula: "=E2<TODAY()", format: "Red fill with white text", description: "Past due date" },
        { name: "Completed", formula: "=C2=\"Completed\"", format: "Green fill", description: "Finished tasks" },
        { name: "High Priority", formula: "=F2=\"High\"", format: "Orange fill", description: "Critical tasks" },
      ]
    }
  ];

  // Helper functions for conditional formatting simulation
  const getSalesPerformanceColor = (sales, target) => {
    const percentage = sales / target;
    if (percentage >= 1.0) return "bg-green-100 border-l-4 border-green-500";
    if (percentage >= 0.8) return "bg-yellow-100 border-l-4 border-yellow-500";
    return "bg-red-100 border-l-4 border-red-500";
  };

  const getGrowthTrendIcon = (growth, trend) => {
    if (trend === "up" && growth > 0.1) return "🟢";
    if (trend === "up") return "🟡";
    if (trend === "down" && growth < -0.2) return "🔴";
    return "🟠";
  };

  const getGradeColor = (grade) => {
    if (grade >= 90) return "bg-green-50 text-green-800 font-bold";
    if (grade >= 80) return "bg-blue-50 text-blue-800";
    if (grade >= 70) return "bg-yellow-50 text-yellow-800";
    if (grade >= 60) return "bg-orange-50 text-orange-800";
    return "bg-red-50 text-red-800 font-bold";
  };

  const getProgressBar = (progress) => {
    const width = `${progress * 100}%`;
    let color = "bg-green-500";
    if (progress < 0.25) color = "bg-red-500";
    else if (progress < 0.75) color = "bg-yellow-500";
    return { width, color };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 border border-green-300";
      case "In Progress": return "bg-blue-100 text-blue-800 border border-blue-300";
      case "Not Started": return "bg-gray-100 text-gray-800 border border-gray-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 border border-red-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      case "Low": return "bg-green-100 text-green-800 border border-green-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Data bar visualization
  const getDataBar = (value, maxValue, type = "sales") => {
    const percentage = (value / maxValue) * 100;
    let color = "bg-blue-500";
    if (type === "growth" && value < 0) color = "bg-red-500";
    if (type === "growth" && value >= 0) color = "bg-green-500";
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className={`h-4 rounded-full ${color} transition-all duration-500`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    );
  };

  // Calculate max values for data bars
  const maxSales = Math.max(...salesData.map(item => item.sales));
  const maxGrowth = Math.max(...salesData.map(item => Math.abs(item.growth)));

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        Conditional Formatting in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Conditional Formatting automatically applies formatting to cells based on their values, 
        making it easy to identify trends, patterns, and outliers in your data. It transforms 
        ordinary spreadsheets into dynamic, visually intuitive dashboards that instantly communicate 
        key insights.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Applications
        </h3>
        <p className="text-gray-700">
          • Sales dashboards: <code>Color-code performance vs targets</code><br/>
          • Grade books: <code>Highlight failing scores and perfect grades</code><br/>
          • Project trackers: <code>Show overdue tasks and completion status</code><br/>
          • Financial reports: <code>Identify variances and trends</code>
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Conditional Formatting Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#217346] text-white">
              <tr>
                <th className="px-4 py-2 border">Feature</th>
                <th className="px-4 py-2 border">Access Path</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Example</th>
              </tr>
            </thead>
            <tbody>
              {formattingFunctions.map((func, idx) => (
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

      {/* Common Formatting Types */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🎨 Common Conditional Formatting Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {formattingTypes.map((type, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-blue-200">
              <div className="font-semibold text-blue-600 text-center mb-2">{type.type}</div>
              <div className="text-blue-700 text-xs mb-2">{type.description}</div>
              <div className="font-mono text-xs bg-gray-100 p-1 rounded text-center mb-2">{type.examples}</div>
              <div className="text-gray-600 text-xs text-center">{type.useCase}</div>
            </div>
          ))}
        </div>
      </div>

      {/* With vs Without Formatting */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 With vs Without Conditional Formatting</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">❌ Plain Data Tables</h4>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              <li>Difficult to spot trends and patterns</li>
              <li>Manual scanning for outliers</li>
              <li>Missed insights in large datasets</li>
              <li>Time-consuming analysis</li>
              <li>Poor visual communication</li>
              <li>Hard to identify priorities</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ With Conditional Formatting</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Instant visual insights</li>
              <li>Automatic outlier detection</li>
              <li>Clear trend identification</li>
              <li>Quick decision making</li>
              <li>Professional dashboards</li>
              <li>Automatic updates with data changes</li>
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
            <strong>Performance Dashboards and KPI Tracking:</strong> Create dynamic business intelligence displays:
            <ul className="list-disc pl-6 mt-2">
              <li>Color-code sales performance against targets</li>
              <li>Use data bars for quick value comparisons</li>
              <li>Implement icon sets for trend indicators</li>
              <li>Create heat maps for multi-dimensional analysis</li>
            </ul>
          </li>
          <li>
            <strong>Academic and Project Management Systems:</strong> Build intuitive tracking systems:
            <ul className="list-disc pl-6 mt-2">
              <li>Highlight grades based on scoring rubrics</li>
              <li>Color-code project status and priorities</li>
              <li>Show progress bars for task completion</li>
              <li>Flag overdue items and deadlines</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Formatting Demos */}
      <div className="space-y-8">
        {/* Sales Performance Dashboard */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            📊 Sales Performance Dashboard
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates multiple conditional formatting techniques applied to sales data, 
            including color scales, data bars, and icon sets for comprehensive performance visualization.
          </p>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">Regional Sales Performance</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border font-semibold">Region</th>
                    <th className="px-4 py-2 border font-semibold">Actual Sales</th>
                    <th className="px-4 py-2 border font-semibold">Sales Target</th>
                    <th className="px-4 py-2 border font-semibold">Performance</th>
                    <th className="px-4 py-2 border font-semibold">Growth %</th>
                    <th className="px-4 py-2 border font-semibold">Trend</th>
                    <th className="px-4 py-2 border font-semibold">Data Bars</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((item, index) => (
                    <tr key={index} className={getSalesPerformanceColor(item.sales, item.target)}>
                      <td className="px-4 py-2 border font-semibold">{item.region}</td>
                      <td className="px-4 py-2 border font-mono">${item.sales.toLocaleString()}</td>
                      <td className="px-4 py-2 border font-mono">${item.target.toLocaleString()}</td>
                      <td className="px-4 py-2 border text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.sales >= item.target ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {((item.sales / item.target) * 100).toFixed(1)}%
                        </span>
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          item.growth >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {(item.growth * 100).toFixed(1)}%
                        </span>
                      </td>
                      <td className="px-4 py-2 border text-center text-2xl">
                        {getGrowthTrendIcon(item.growth, item.trend)}
                      </td>
                      <td className="px-4 py-2 border">
                        {getDataBar(item.sales, maxSales)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Formatting Legend */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border-l-4 border-green-500"></div>
                <span>Meets or exceeds target</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-100 border-l-4 border-yellow-500"></div>
                <span>80-99% of target</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-100 border-l-4 border-red-500"></div>
                <span>Below 80% of target</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Grades System */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            🎓 Student Grading System
          </h3>
          <p className="text-gray-700 mb-4">
            Academic grading with conditional formatting to instantly identify performance levels, 
            attendance issues, and overall student standing.
          </p>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">Student Report Card</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border font-semibold">Student</th>
                    <th className="px-4 py-2 border font-semibold">Math</th>
                    <th className="px-4 py-2 border font-semibold">Science</th>
                    <th className="px-4 py-2 border font-semibold">English</th>
                    <th className="px-4 py-2 border font-semibold">Average</th>
                    <th className="px-4 py-2 border font-semibold">Attendance</th>
                    <th className="px-4 py-2 border font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentGrades.map((student, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 border font-semibold">{student.student}</td>
                      <td className={`px-4 py-2 border text-center ${getGradeColor(student.math)}`}>
                        {student.math}
                      </td>
                      <td className={`px-4 py-2 border text-center ${getGradeColor(student.science)}`}>
                        {student.science}
                      </td>
                      <td className={`px-4 py-2 border text-center ${getGradeColor(student.english)}`}>
                        {student.english}
                      </td>
                      <td className={`px-4 py-2 border text-center font-semibold ${getGradeColor(student.average)}`}>
                        {student.average.toFixed(1)}
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          student.attendance >= 0.9 ? 'bg-green-100 text-green-800' : 
                          student.attendance >= 0.8 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {(student.attendance * 100).toFixed(0)}%
                        </span>
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          student.average >= 90 ? 'bg-green-100 text-green-800 border border-green-300' :
                          student.average >= 70 ? 'bg-blue-100 text-blue-800 border border-blue-300' :
                          'bg-red-100 text-red-800 border border-red-300'
                        }`}>
                          {student.average >= 90 ? 'Excellent' : student.average >= 70 ? 'Satisfactory' : 'Needs Improvement'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Grade Legend */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-50 border border-green-300"></div>
                <span>A (90-100)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-50 border border-blue-300"></div>
                <span>B (80-89)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-50 border border-yellow-300"></div>
                <span>C (70-79)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-50 border border-orange-300"></div>
                <span>D (60-69)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-50 border border-red-300"></div>
                <span>F (Below 60)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Management Tracker */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            📋 Project Management Tracker
          </h3>
          <p className="text-gray-700 mb-4">
            Project tracking with conditional formatting for status visualization, progress monitoring, 
            priority management, and deadline tracking.
          </p>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">Project Task List</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border font-semibold">Task</th>
                    <th className="px-4 py-2 border font-semibold">Assignee</th>
                    <th className="px-4 py-2 border font-semibold">Status</th>
                    <th className="px-4 py-2 border font-semibold">Progress</th>
                    <th className="px-4 py-2 border font-semibold">Due Date</th>
                    <th className="px-4 py-2 border font-semibold">Priority</th>
                    <th className="px-4 py-2 border font-semibold">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {projectTasks.map((task, index) => {
                    const progressBar = getProgressBar(task.progress);
                    const isOverdue = new Date(task.dueDate) < new Date() && task.status !== "Completed";
                    
                    return (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2 border font-semibold">{task.task}</td>
                        <td className="px-4 py-2 border">{task.assignee}</td>
                        <td className="px-4 py-2 border">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(task.status)}`}>
                            {task.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 border">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${progressBar.color}`}
                                style={{ width: progressBar.width }}
                              ></div>
                            </div>
                            <span className="text-xs font-semibold">{(task.progress * 100).toFixed(0)}%</span>
                          </div>
                        </td>
                        <td className={`px-4 py-2 border font-semibold ${
                          isOverdue ? 'bg-red-100 text-red-800' : ''
                        }`}>
                          {new Date(task.dueDate).toLocaleDateString()}
                          {isOverdue && <span className="ml-1 text-red-500">⚠️ Overdue</span>}
                        </td>
                        <td className="px-4 py-2 border">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityBadge(task.priority)}`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="px-4 py-2 border">
                          {getDataBar(task.progress, 1, "progress")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Formatting Rules Reference */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ⚙️ Conditional Formatting Rules Reference
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formattingRules.map((category, catIndex) => (
              <div key={catIndex} className="bg-white p-4 rounded border border-gray-200">
                <h4 className="font-semibold text-[#217346] mb-3">{category.category}</h4>
                <div className="space-y-3">
                  {category.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="p-3 bg-gray-50 rounded border">
                      <div className="font-semibold text-gray-800 mb-1">{rule.name}</div>
                      <div className="font-mono text-xs bg-white p-1 rounded mb-1">{rule.formula}</div>
                      <div className="text-xs text-gray-600 mb-1">Format: {rule.format}</div>
                      <div className="text-xs text-gray-500">{rule.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Formatting Patterns */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            🚀 Advanced Conditional Formatting Patterns
          </h3>
          <p className="text-gray-700 mb-4">
            These patterns demonstrate sophisticated conditional formatting techniques for complex business scenarios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gantt Chart Formatting */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">📅 Gantt Chart Timeline</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-mono text-xs">
                    =AND($C2&gt;=G$1, $C2&lt;=H$1) // For timeline bars
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Create visual project timelines using cell background colors
                </div>
                <div className="text-xs text-blue-600">
                  Example: Project schedule with task durations and dependencies
                </div>
              </div>
            </div>

            {/* Dynamic Heat Maps */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🔥 Dynamic Heat Maps</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 rounded">
                  <div className="font-mono text-xs">
                    =A1&gt;=PERCENTILE($A$1:$Z$100,0.8) // Top 20%
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Identify hotspots and patterns in large datasets
                </div>
                <div className="text-xs text-green-600">
                  Example: Sales performance heat map across regions and products
                </div>
              </div>
            </div>

            {/* Row Banding with Formulas */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🎨 Smart Row Banding</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-purple-50 rounded">
                  <div className="font-mono text-xs">
                    =MOD(ROW(),2)=0 // Alternate rows
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Custom row coloring based on content or position
                </div>
                <div className="text-xs text-purple-600">
                  Example: Different colors for different categories or groups
                </div>
              </div>
            </div>

            {/* Expiry Date Tracking */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">⏰ Expiry Date Alerts</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-yellow-50 rounded">
                  <div className="font-mono text-xs">
                    =AND($B2-TODAY()&lt;=30, $B2&gt;TODAY()) // 30-day warning
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong>Use Case:</strong> Automatic alerts for upcoming expirations and renewals
                </div>
                <div className="text-xs text-yellow-600">
                  Example: Certificate expirations, subscription renewals, warranty periods
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for Conditional Formatting</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>Use relative references (A1) for row-based formatting and absolute references ($A$1) for fixed conditions</li>
          <li>Combine multiple rules with different stop-if-true settings for complex logic</li>
          <li>Use the "Manage Rules" dialog to view and reorder all formatting rules</li>
          <li>Apply formatting to entire rows using formulas that reference specific columns</li>
          <li>Use custom number formatting with conditional formatting for complete cell customization</li>
          <li>Test rules with both valid and invalid data to ensure they work as expected</li>
          <li>Use named ranges in formulas to make rules more readable and maintainable</li>
          <li>Remember that conditional formatting doesn't affect cell values, only appearance</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with Conditional Formatting exercises already set up. 
          Practice creating formatting rules, data bars, color scales, and custom formulas.
        </p>
        <div className="space-y-3">
          <a
            href="/conditional_formatting_basic_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Basic Formatting Exercises
          </a>
          <a
            href="/conditional_formatting_advanced_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Advanced Formatting Exercises
          </a>
        </div>
      </div>
    </div>
  );
}