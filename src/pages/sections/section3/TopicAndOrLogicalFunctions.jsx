import React, { useState } from "react";

export default function TopicAndOrLogicalFunctions() {
  const [loanApplications, setLoanApplications] = useState([
    { id: 1, applicant: "John Smith", creditScore: 720, income: 65000, employment: 3, loanAmount: 250000, approved: false },
    { id: 2, applicant: "Sarah Johnson", creditScore: 680, income: 45000, employment: 1, loanAmount: 150000, approved: false },
    { id: 3, applicant: "Mike Chen", creditScore: 750, income: 85000, employment: 5, loanAmount: 300000, approved: false },
    { id: 4, applicant: "Emily Davis", creditScore: 620, income: 55000, employment: 2, loanAmount: 180000, approved: false },
    { id: 5, applicant: "David Wilson", creditScore: 710, income: 72000, employment: 4, loanAmount: 220000, approved: false },
  ]);

  const [studentApplications, setStudentApplications] = useState([
    { id: 1, student: "Emma Thompson", gpa: 3.8, satScore: 1350, extracurriculars: 3, scholarship: "", eligible: false },
    { id: 2, student: "Noah Rodriguez", gpa: 3.2, satScore: 1200, extracurriculars: 1, scholarship: "", eligible: false },
    { id: 3, student: "Olivia Kim", gpa: 3.9, satScore: 1450, extracurriculars: 4, scholarship: "", eligible: false },
    { id: 4, student: "Liam Patel", gpa: 2.9, satScore: 1100, extracurriculars: 2, scholarship: "", eligible: false },
    { id: 5, student: "Ava Garcia", gpa: 3.5, satScore: 1280, extracurriculars: 3, scholarship: "", eligible: false },
  ]);

  // Logical functions reference
  const logicalFunctions = [
    { 
      function: "AND", 
      syntax: "=AND(logical1, [logical2], ...)", 
      description: "Returns TRUE if all arguments are TRUE, FALSE otherwise",
      example: "=AND(A1>50, B1<100)" 
    },
    { 
      function: "OR", 
      syntax: "=OR(logical1, [logical2], ...)", 
      description: "Returns TRUE if any argument is TRUE, FALSE if all are FALSE",
      example: "=OR(A1>90, B1>90)" 
    },
    { 
      function: "NOT", 
      syntax: "=NOT(logical)", 
      description: "Reverses the logical value of its argument",
      example: "=NOT(A1>50)" 
    },
    { 
      function: "XOR", 
      syntax: "=XOR(logical1, [logical2], ...)", 
      description: "Returns TRUE if an odd number of arguments are TRUE (exclusive OR)",
      example: "=XOR(A1>50, B1>50)" 
    },
  ];

  // Loan approval criteria
  const evaluateLoanApproval = (application) => {
    // Multiple conditions using AND and OR
    const basicEligibility = application.creditScore >= 700 && application.income >= 50000;
    const experiencedApplicant = application.employment >= 2 && application.creditScore >= 650;
    const highIncomeException = application.income >= 80000 && application.creditScore >= 650;
    
    // Combined condition using OR
    return basicEligibility || experiencedApplicant || highIncomeException;
  };

  // Scholarship eligibility criteria
  const evaluateScholarship = (student) => {
    // Merit-based scholarship
    const meritEligible = student.gpa >= 3.5 && student.satScore >= 1300;
    
    // Activities scholarship
    const activitiesEligible = student.extracurriculars >= 3 && student.gpa >= 3.0;
    
    // Leadership scholarship (either high GPA or high SAT with activities)
    const leadershipEligible = (student.gpa >= 3.7 || student.satScore >= 1400) && student.extracurriculars >= 2;

    let scholarship = "";
    if (meritEligible && leadershipEligible) {
      scholarship = "Presidential Scholarship";
    } else if (meritEligible) {
      scholarship = "Merit Scholarship";
    } else if (activitiesEligible) {
      scholarship = "Activities Scholarship";
    } else if (leadershipEligible) {
      scholarship = "Leadership Grant";
    }

    return {
      eligible: meritEligible || activitiesEligible || leadershipEligible,
      scholarship
    };
  };

  const evaluateAllLoans = () => {
    const updated = loanApplications.map(app => ({
      ...app,
      approved: evaluateLoanApproval(app)
    }));
    setLoanApplications(updated);
  };

  const evaluateAllScholarships = () => {
    const updated = studentApplications.map(student => {
      const result = evaluateScholarship(student);
      return {
        ...student,
        eligible: result.eligible,
        scholarship: result.scholarship
      };
    });
    setStudentApplications(updated);
  };

  const resetAll = () => {
    setLoanApplications(loanApplications.map(app => ({ ...app, approved: false })));
    setStudentApplications(studentApplications.map(student => ({ ...student, eligible: false, scholarship: "" })));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        AND, OR Logical Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        AND and OR are fundamental logical functions that allow you to test multiple conditions 
        simultaneously. AND returns TRUE only when ALL conditions are met, while OR returns TRUE 
        when ANY condition is met. These functions are essential for complex decision-making, 
        data validation, and conditional calculations in Excel.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For loan approvals: <code>=AND(B2&gt;700, C2&gt;50000, D2&gt;2)</code> checks if credit score 
          is ≥700 AND income ≥$50,000 AND employment ≥2 years. For scholarship eligibility: 
          <code>=OR(AND(B2&gt;3.5, C2&gt;1300), B2&gt;3.8)</code> checks if (GPA≥3.5 AND SAT≥1300) OR GPA≥3.8.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Logical Functions Reference
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#217346] text-white">
              <tr>
                <th className="px-4 py-2 border">Function</th>
                <th className="px-4 py-2 border">Syntax</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Example</th>
                <th className="px-4 py-2 border">Truth Table</th>
              </tr>
            </thead>
            <tbody>
              {logicalFunctions.map((func, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  <td className="px-4 py-2 border font-medium">{func.function}</td>
                  <td className="px-4 py-2 border font-mono text-[#217346] text-sm">{func.syntax}</td>
                  <td className="px-4 py-2 border">{func.description}</td>
                  <td className="px-4 py-2 border font-mono text-sm">{func.example}</td>
                  <td className="px-4 py-2 border text-xs">
                    {func.function === "AND" && "TRUE only if ALL TRUE"}
                    {func.function === "OR" && "TRUE if ANY TRUE"}
                    {func.function === "NOT" && "Reverses input"}
                    {func.function === "XOR" && "TRUE if ODD number TRUE"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Truth Table Visualization */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 Logical Operations Truth Table</h3>
        <div className="grid grid-cols-5 gap-2 text-sm text-center">
          <div className="font-semibold">A</div>
          <div className="font-semibold">B</div>
          <div className="font-semibold">AND</div>
          <div className="font-semibold">OR</div>
          <div className="font-semibold">XOR</div>
          
          {[true, true, false, false].map((a, i) => {
            const b = [true, false, true, false][i];
            return (
              <React.Fragment key={i}>
                <div className={a ? "text-green-600 font-semibold" : "text-red-600"}>{a.toString()}</div>
                <div className={b ? "text-green-600 font-semibold" : "text-red-600"}>{b.toString()}</div>
                <div className={a && b ? "text-green-600 font-semibold" : "text-red-600"}>{(a && b).toString()}</div>
                <div className={a || b ? "text-green-600 font-semibold" : "text-red-600"}>{(a || b).toString()}</div>
                <div className={(a && !b) || (!a && b) ? "text-green-600 font-semibold" : "text-red-600"}>
                  {((a && !b) || (!a && b)).toString()}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Practice Examples */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📝 Practice Examples
        </h3>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Loan Application Approval System:</strong> Create an automated loan approval system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses AND to check multiple minimum requirements</li>
              <li>Uses OR to provide alternative qualification paths</li>
              <li>Combines AND/OR for complex eligibility criteria</li>
              <li>Automatically approves/rejects based on logical tests</li>
            </ul>
          </li>
          <li>
            <strong>Scholarship Eligibility Calculator:</strong> Build a scholarship evaluation system that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses AND for strict academic requirements</li>
              <li>Uses OR to offer multiple qualification options</li>
              <li>Combines conditions for different scholarship tiers</li>
              <li>Automatically assigns scholarship types</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Control Buttons */}
      <div className="mb-6 flex space-x-4">
        <button
          onClick={evaluateAllLoans}
          className="bg-[#217346] text-white px-6 py-2 rounded hover:bg-[#1a5d36] transition font-semibold"
        >
          Evaluate Loan Applications
        </button>
        <button
          onClick={evaluateAllScholarships}
          className="bg-[#217346] text-white px-6 py-2 rounded hover:bg-[#1a5d36] transition font-semibold"
        >
          Evaluate Scholarships
        </button>
        <button
          onClick={resetAll}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition font-semibold"
        >
          Reset All
        </button>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Loan Approval Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Loan Application Approval System
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use AND and OR functions to create complex loan 
            approval criteria with multiple qualification paths.
          </p>

          <div className="mb-4 bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Approval Criteria</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <div className="font-semibold text-green-800">Path 1: Standard</div>
                <div className="text-green-700 text-xs mt-1">
                  Credit ≥700 AND Income ≥$50K
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <div className="font-semibold text-blue-800">Path 2: Experienced</div>
                <div className="text-blue-700 text-xs mt-1">
                  Employment ≥2 years AND Credit ≥650
                </div>
              </div>
              <div className="p-3 bg-purple-50 rounded border border-purple-200">
                <div className="font-semibold text-purple-800">Path 3: High Income</div>
                <div className="text-purple-700 text-xs mt-1">
                  Income ≥$80K AND Credit ≥650
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-sm font-mono bg-yellow-50 p-2 rounded">
              =OR(AND(credit≥700, income≥50000), AND(employment≥2, credit≥650), AND(income≥80000, credit≥650))
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Applicant</th>
                  <th className="px-4 py-2 border">Credit Score</th>
                  <th className="px-4 py-2 border">Income</th>
                  <th className="px-4 py-2 border">Employment (Years)</th>
                  <th className="px-4 py-2 border">Loan Amount</th>
                  <th className="px-4 py-2 border">Approval Status</th>
                  <th className="px-4 py-2 border">Qualification Path</th>
                </tr>
              </thead>
              <tbody>
                {loanApplications.map((app, idx) => {
                  const basicEligibility = app.creditScore >= 700 && app.income >= 50000;
                  const experiencedApplicant = app.employment >= 2 && app.creditScore >= 650;
                  const highIncomeException = app.income >= 80000 && app.creditScore >= 650;
                  
                  let qualificationPath = "";
                  if (basicEligibility) qualificationPath = "Standard";
                  else if (experiencedApplicant) qualificationPath = "Experienced";
                  else if (highIncomeException) qualificationPath = "High Income";
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{app.applicant}</td>
                      <td className={`px-4 py-2 border font-semibold ${
                        app.creditScore >= 700 ? "text-green-600" : 
                        app.creditScore >= 650 ? "text-blue-600" : "text-red-600"
                      }`}>
                        {app.creditScore}
                      </td>
                      <td className="px-4 py-2 border">${app.income.toLocaleString()}</td>
                      <td className="px-4 py-2 border">{app.employment} years</td>
                      <td className="px-4 py-2 border font-semibold">${app.loanAmount.toLocaleString()}</td>
                      <td className={`px-4 py-2 border font-semibold ${
                        app.approved ? "text-green-600" : "text-red-600"
                      }`}>
                        {app.approved ? "APPROVED" : "REJECTED"}
                      </td>
                      <td className="px-4 py-2 border text-sm">
                        {app.approved ? qualificationPath : "No path qualified"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <strong>Basic AND Examples:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=AND(B2&gt;700, C2&gt;50000)</li>
                  <li>=AND(D2&gt;2, B2&gt;650)</li>
                  <li>=AND(C2&gt;80000, B2&gt;650)</li>
                </ul>
              </div>
              <div>
                <strong>Combined OR with AND:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=OR(AND(B2&gt;700, C2&gt;50000), </li>
                  <li>AND(D2&gt;2, B2&gt;650), </li>
                  <li>AND(C2&gt;80000, B2&gt;650))</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Eligibility Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Scholarship Eligibility Calculator
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use AND and OR functions to create tiered scholarship 
            eligibility criteria with multiple qualification options.
          </p>

          <div className="mb-4 bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Scholarship Tiers</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="p-3 bg-purple-50 rounded border border-purple-200">
                <div className="font-semibold text-purple-800">Presidential</div>
                <div className="text-purple-700 text-xs mt-1">
                  Merit AND Leadership eligible
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <div className="font-semibold text-green-800">Merit</div>
                <div className="text-green-700 text-xs mt-1">
                  GPA≥3.5 AND SAT≥1300
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <div className="font-semibold text-blue-800">Activities</div>
                <div className="text-blue-700 text-xs mt-1">
                  Activities≥3 AND GPA≥3.0
                </div>
              </div>
              <div className="p-3 bg-orange-50 rounded border border-orange-200">
                <div className="font-semibold text-orange-800">Leadership</div>
                <div className="text-orange-700 text-xs mt-1">
                  (GPA≥3.7 OR SAT≥1400) AND Activities≥2
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">GPA</th>
                  <th className="px-4 py-2 border">SAT Score</th>
                  <th className="px-4 py-2 border">Activities</th>
                  <th className="px-4 py-2 border">Eligible</th>
                  <th className="px-4 py-2 border">Scholarship Type</th>
                  <th className="px-4 py-2 border">Qualified For</th>
                </tr>
              </thead>
              <tbody>
                {studentApplications.map((student, idx) => {
                  const meritEligible = student.gpa >= 3.5 && student.satScore >= 1300;
                  const activitiesEligible = student.extracurriculars >= 3 && student.gpa >= 3.0;
                  const leadershipEligible = (student.gpa >= 3.7 || student.satScore >= 1400) && student.extracurriculars >= 2;
                  
                  const qualifiedFor = [];
                  if (meritEligible) qualifiedFor.push("Merit");
                  if (activitiesEligible) qualifiedFor.push("Activities");
                  if (leadershipEligible) qualifiedFor.push("Leadership");
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-medium">{student.student}</td>
                      <td className={`px-4 py-2 border font-semibold ${
                        student.gpa >= 3.5 ? "text-green-600" : 
                        student.gpa >= 3.0 ? "text-blue-600" : "text-red-600"
                      }`}>
                        {student.gpa}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        student.satScore >= 1300 ? "text-green-600" : 
                        student.satScore >= 1200 ? "text-blue-600" : "text-red-600"
                      }`}>
                        {student.satScore}
                      </td>
                      <td className="px-4 py-2 border">{student.extracurriculars}</td>
                      <td className={`px-4 py-2 border font-semibold ${
                        student.eligible ? "text-green-600" : "text-red-600"
                      }`}>
                        {student.eligible ? "YES" : "NO"}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${
                        student.scholarship ? "text-purple-600" : "text-gray-600"
                      }`}>
                        {student.scholarship || "None"}
                      </td>
                      <td className="px-4 py-2 border text-xs">
                        {qualifiedFor.length > 0 ? qualifiedFor.join(", ") : "None"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <strong>Individual Conditions:</strong>
                <ul className="mt-1 space-y-1">
                  <li>Merit: =AND(B2&gt;3.5, C2&gt;1300)</li>
                  <li>Activities: =AND(D2&gt;3, B2&gt;3.0)</li>
                  <li>Leadership: =AND(OR(B2&gt;3.7, C2&gt;1400), D2&gt;2)</li>
                </ul>
              </div>
              <div>
                <strong>Scholarship Assignment:</strong>
                <ul className="mt-1 space-y-1">
                  <li>=IF(AND(merit, leadership), "Presidential",</li>
                  <li>IF(merit, "Merit", </li>
                  <li>IF(activities, "Activities", </li>
                  <li>IF(leadership, "Leadership", ""))))</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>Use AND when ALL conditions must be true (strict requirements)</li>
          <li>Use OR when ANY condition being true is sufficient (flexible requirements)</li>
          <li>Combine AND and OR with parentheses for complex logic: =AND(OR(A1,B1), C1)</li>
          <li>Use NOT to reverse conditions: =NOT(OR(A1,B1)) is same as =AND(NOT(A1),NOT(B1))</li>
          <li>For multiple OR conditions, consider SWITCH or IFS functions for cleaner formulas</li>
          <li>Test your logical formulas with different input combinations to ensure correctness</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the AND/OR logical function exercises already set up. 
          You can experiment with different criteria, create your own logical tests, and see how 
          complex decision-making works in Excel.
        </p>
        <div className="space-y-3">
          <a
            href="/loan_approval_system.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Loan Approval System
          </a>
          <a
            href="/scholarship_calculator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Scholarship Calculator
          </a>
        </div>
      </div>
    </div>
  );
}