import React from "react";

export default function CountCountaCountblank() {
  // Count functions reference
  const countFunctions = [
    { 
      function: "COUNT", 
      syntax: "=COUNT(value1, [value2], ...)", 
      description: "Counts the number of cells that contain numbers in a range",
      example: "=COUNT(A1:A10)" 
    },
    { 
      function: "COUNTA", 
      syntax: "=COUNTA(value1, [value2], ...)", 
      description: "Counts the number of cells that are not empty in a range",
      example: "=COUNTA(B2:B20)" 
    },
    { 
      function: "COUNTBLANK", 
      syntax: "=COUNTBLANK(range)", 
      description: "Counts the number of empty cells in a range",
      example: "=COUNTBLANK(C1:C15)" 
    },
  ];

  // Employee survey data example
  const surveyData = [
    { employee: "Alice", department: "Sales", surveyCompleted: "Yes", feedback: "Great workplace culture", rating: 9 },
    { employee: "Bob", department: "Marketing", surveyCompleted: "No", feedback: "", rating: null },
    { employee: "Charlie", department: "IT", surveyCompleted: "Yes", feedback: "Need better equipment", rating: 6 },
    { employee: "Diana", department: "HR", surveyCompleted: "", feedback: "", rating: null },
    { employee: "Ethan", department: "Finance", surveyCompleted: "Yes", feedback: "Flexible hours appreciated", rating: 8 },
    { employee: "Fiona", department: "Sales", surveyCompleted: "No", feedback: "", rating: null },
    { employee: "George", department: "IT", surveyCompleted: "Yes", feedback: "", rating: 7 },
    { employee: "Hannah", department: "Marketing", surveyCompleted: "", feedback: "", rating: null },
  ];

  // Calculate survey statistics
  const totalEmployees = surveyData.length;
  const completedSurveys = surveyData.filter(emp => emp.surveyCompleted === "Yes").length;
  const incompleteSurveys = surveyData.filter(emp => emp.surveyCompleted === "No").length;
  const notResponded = surveyData.filter(emp => emp.surveyCompleted === "").length;
  const feedbackProvided = surveyData.filter(emp => emp.feedback !== "").length;
  const ratingsProvided = surveyData.filter(emp => emp.rating !== null).length;

  // Student assignment submission example
  const assignmentData = [
    { student: "Emma", assignment1: "Submitted", assignment2: "Submitted", assignment3: "", assignment4: "Submitted" },
    { student: "Noah", assignment1: "Submitted", assignment2: "", assignment3: "", assignment4: "Submitted" },
    { student: "Olivia", assignment1: "Submitted", assignment2: "Submitted", assignment3: "Submitted", assignment4: "Submitted" },
    { student: "Liam", assignment1: "", assignment2: "", assignment3: "", assignment4: "" },
    { student: "Ava", assignment1: "Submitted", assignment2: "Submitted", assignment3: "Submitted", assignment4: "" },
    { student: "William", assignment1: "Submitted", assignment2: "", assignment3: "Submitted", assignment4: "Submitted" },
    { student: "Sophia", assignment1: "", assignment2: "Submitted", assignment3: "", assignment4: "Submitted" },
    { student: "James", assignment1: "Submitted", assignment2: "Submitted", assignment3: "Submitted", assignment4: "Submitted" },
  ];

  // Calculate assignment statistics
  const totalStudents = assignmentData.length;
  const assignments = ['assignment1', 'assignment2', 'assignment3', 'assignment4'];
  
  const assignmentStats = assignments.map(assignment => {
    const submitted = assignmentData.filter(student => student[assignment] === "Submitted").length;
    const notSubmitted = assignmentData.filter(student => student[assignment] === "").length;
    return { assignment, submitted, notSubmitted };
  });

  const studentStats = assignmentData.map(student => {
    const submittedCount = assignments.filter(assignment => student[assignment] === "Submitted").length;
    const missingCount = assignments.filter(assignment => student[assignment] === "").length;
    return { ...student, submittedCount, missingCount };
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        COUNT, COUNTA, COUNTBLANK Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The COUNT, COUNTA, and COUNTBLANK functions are essential for analyzing datasets 
        and understanding data completeness. These functions help you quantify different 
        types of data in your spreadsheets, from numerical values to text entries and empty cells.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          If you're managing employee survey results, you can use these functions to 
          analyze response rates. <code>=COUNT(D2:D20)</code> would count how many employees 
          provided a numerical rating, <code>=COUNTA(C2:C20)</code> would count how many 
          provided any feedback (text), and <code>=COUNTBLANK(B2:B20)</code> would show 
          how many didn't complete the survey at all.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Counting Functions Reference
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
              {countFunctions.map((func, idx) => (
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
            <strong>Employee Survey Analysis:</strong> Create a survey response report that:
            <ul className="list-disc pl-6 mt-2">
              <li>Counts how many employees completed the survey using COUNTA</li>
              <li>Calculates how many provided numerical ratings using COUNT</li>
              <li>Identifies how many left feedback comments using COUNTA</li>
              <li>Finds how many didn't respond using COUNTBLANK</li>
            </ul>
          </li>
          <li>
            <strong>Student Assignment Tracker:</strong> Create an assignment submission tracker that:
            <ul className="list-disc pl-6 mt-2">
              <li>Counts submitted assignments for each student using COUNTA</li>
              <li>Calculates missing assignments for each student using COUNTBLANK</li>
              <li>Tracks submission rates for each assignment using COUNT functions</li>
              <li>Identifies students with incomplete work</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Survey Analysis Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Survey Analysis Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use COUNT, COUNTA, and COUNTBLANK functions to 
            analyze employee survey response rates and data completeness.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Employee</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Survey Completed</th>
                  <th className="px-4 py-2 border">Feedback</th>
                  <th className="px-4 py-2 border">Rating (1-10)</th>
                </tr>
              </thead>
              <tbody>
                {surveyData.map((emp, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">{emp.employee}</td>
                    <td className="px-4 py-2 border">{emp.department}</td>
                    <td className={`px-4 py-2 border ${
                      emp.surveyCompleted === "Yes" ? "text-green-600" : 
                      emp.surveyCompleted === "No" ? "text-red-600" : "text-gray-400"
                    }`}>
                      {emp.surveyCompleted || "Not Responded"}
                    </td>
                    <td className={`px-4 py-2 border ${
                      emp.feedback ? "text-blue-600" : "text-gray-400"
                    }`}>
                      {emp.feedback || "No feedback"}
                    </td>
                    <td className={`px-4 py-2 border ${
                      emp.rating ? "text-purple-600" : "text-gray-400"
                    }`}>
                      {emp.rating || "No rating"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Survey Response Analysis</h4>
              <ul className="space-y-1 text-sm">
                <li>Total Employees: <span className="font-semibold">{totalEmployees}</span></li>
                <li>Surveys Completed: <span className="font-semibold text-green-600">{completedSurveys}</span></li>
                <li>Surveys Not Completed: <span className="font-semibold text-red-600">{incompleteSurveys}</span></li>
                <li>Not Responded: <span className="font-semibold text-gray-600">{notResponded}</span></li>
                <li>Feedback Provided: <span className="font-semibold text-blue-600">{feedbackProvided}</span></li>
                <li>Ratings Provided: <span className="font-semibold text-purple-600">{ratingsProvided}</span></li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-1 text-sm font-mono">
                <li>Completed: =COUNTIF(C2:C9, "Yes")</li>
                <li>Not Completed: =COUNTIF(C2:C9, "No")</li>
                <li>Not Responded: =COUNTBLANK(C2:C9)</li>
                <li>Feedback: =COUNTA(D2:D9)</li>
                <li>Ratings: =COUNT(E2:E9)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assignment Tracker Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Assignment Tracker Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use counting functions to track student 
            assignment submissions and identify missing work.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Assignment 1</th>
                  <th className="px-4 py-2 border">Assignment 2</th>
                  <th className="px-4 py-2 border">Assignment 3</th>
                  <th className="px-4 py-2 border">Assignment 4</th>
                  <th className="px-4 py-2 border">Submitted</th>
                  <th className="px-4 py-2 border">Missing</th>
                </tr>
              </thead>
              <tbody>
                {studentStats.map((student, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">{student.student}</td>
                    <td className={`px-4 py-2 border ${student.assignment1 ? "text-green-600" : "text-red-600"}`}>
                      {student.assignment1 || "Missing"}
                    </td>
                    <td className={`px-4 py-2 border ${student.assignment2 ? "text-green-600" : "text-red-600"}`}>
                      {student.assignment2 || "Missing"}
                    </td>
                    <td className={`px-4 py-2 border ${student.assignment3 ? "text-green-600" : "text-red-600"}`}>
                      {student.assignment3 || "Missing"}
                    </td>
                    <td className={`px-4 py-2 border ${student.assignment4 ? "text-green-600" : "text-red-600"}`}>
                      {student.assignment4 || "Missing"}
                    </td>
                    <td className="px-4 py-2 border text-green-600 font-semibold">
                      {student.submittedCount}
                    </td>
                    <td className="px-4 py-2 border text-red-600 font-semibold">
                      {student.missingCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Assignment Submission Rates</h4>
              <ul className="space-y-1 text-sm">
                {assignmentStats.map((assignment, idx) => (
                  <li key={idx}>
                    {assignment.assignment}:{" "}
                    <span className="font-semibold text-green-600">{assignment.submitted}</span> submitted,{" "}
                    <span className="font-semibold text-red-600">{assignment.notSubmitted}</span> missing
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-1 text-sm font-mono">
                <li>Submitted: =COUNTA(B2:B9)</li>
                <li>Missing: =COUNTBLANK(B2:B9)</li>
                <li>Student Submitted: =COUNTA(B2:E2)</li>
                <li>Student Missing: =COUNTBLANK(B2:E2)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the practice exercises already set up. 
          You can explore the counting formulas, try modifying the data, and see how 
          the counts update automatically.
        </p>
        <div className="space-y-3">
          <a
            href="/survey_analysis.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Survey Analysis Example
          </a>
          <a
            href="/assignment_tracker.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Assignment Tracker Example
          </a>
        </div>
      </div>
    </div>
  );
}