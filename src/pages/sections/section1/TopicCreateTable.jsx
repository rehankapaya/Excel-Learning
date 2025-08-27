import React from "react";

export default function CreatingFormattingTable() {
  // Example table data
  const employeeData = [
    { name: "John Doe", department: "Sales", salary: 55000, joinDate: "2022-03-15" },
    { name: "Jane Smith", department: "Marketing", salary: 62000, joinDate: "2021-08-22" },
    { name: "Robert Johnson", department: "IT", salary: 75000, joinDate: "2020-05-10" },
    { name: "Emily Davis", department: "HR", salary: 58000, joinDate: "2023-01-30" },
    { name: "Michael Wilson", department: "Finance", salary: 68000, joinDate: "2019-11-05" },
  ];

  const studentData = [
    { name: "Alice Brown", subject: "Mathematics", grade: "A", score: 92 },
    { name: "David Lee", subject: "Science", grade: "B+", score: 87 },
    { name: "Sarah Kim", subject: "English", grade: "A-", score: 90 },
    { name: "James Miller", subject: "History", grade: "B", score: 84 },
    { name: "Olivia Taylor", subject: "Art", grade: "A+", score: 97 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        Creating and Formatting Tables in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Creating tables in Excel helps you organize and manage your data efficiently. 
        Excel tables offer built-in features like filtering, sorting, and automatic 
        formatting that make data analysis easier. You can convert a range of cells 
        into a table and apply various styles to make your data visually appealing 
        and easier to read.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          If you're managing employee records, you can create a table with columns 
          for name, department, salary, and join date. Excel tables automatically 
          expand when you add new data, maintain formatting consistency, and allow 
          you to quickly sort or filter information. For example, you could easily 
          filter to show only employees in the Sales department or sort by salary 
          to identify highest earners.
        </p>
      </div>

      {/* Practice Examples */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📝 Practice Examples
        </h3>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Employee Records Table:</strong> Create a table to track employee 
            information with the following columns: Name, Department, Salary, and Join Date. 
            Enter at least 5 employee records. Format the table with a style that uses 
            banded rows for better readability. Add a total row to calculate the average salary.
          </li>
          <li>
            <strong>Student Grades Table:</strong> Create a table to record student 
            performance with columns: Student Name, Subject, Grade, and Score. 
            Enter data for 5 different students. Apply conditional formatting to 
            highlight scores above 90 in green and scores below 85 in orange. 
            Add filters to each column header for easy data exploration.
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Employee Table Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Records Table Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows a properly formatted employee table with banded rows, 
            header formatting, and a total row showing the average salary.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Salary</th>
                  <th className="px-4 py-2 border">Join Date</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border">{row.name}</td>
                    <td className="px-4 py-2 border">{row.department}</td>
                    <td className="px-4 py-2 border">${row.salary.toLocaleString()}</td>
                    <td className="px-4 py-2 border">{row.joinDate}</td>
                  </tr>
                ))}
                {/* Total row */}
                <tr className="bg-[#eef5f1] font-semibold">
                  <td className="px-4 py-2 border" colSpan="2">Average Salary</td>
                  <td className="px-4 py-2 border text-[#217346]">
                    ${(employeeData.reduce((sum, emp) => sum + emp.salary, 0) / employeeData.length).toFixed(0)}
                  </td>
                  <td className="px-4 py-2 border"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Student Table Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Grades Table Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates a student grades table with conditional formatting 
            applied to scores (green for ≥90, orange for ≤85).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student Name</th>
                  <th className="px-4 py-2 border">Subject</th>
                  <th className="px-4 py-2 border">Grade</th>
                  <th className="px-4 py-2 border">Score</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border">{row.name}</td>
                    <td className="px-4 py-2 border">{row.subject}</td>
                    <td className="px-4 py-2 border">{row.grade}</td>
                    <td className={`px-4 py-2 border font-semibold ${
                      row.score >= 90 ? "text-green-600" : 
                      row.score <= 85 ? "text-orange-500" : "text-gray-700"
                    }`}>
                      {row.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the practice tables already set up. 
          You can explore the formatting, try modifying the data, and see how 
          the tables automatically adjust.
        </p>
        <div className="space-y-3">
          <a
            href="/employee_table_example.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Employee Table Example
          </a>
          <a
            href="/student_grades_example.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Student Grades Example
          </a>
        </div>
      </div>
    </div>
  );
}