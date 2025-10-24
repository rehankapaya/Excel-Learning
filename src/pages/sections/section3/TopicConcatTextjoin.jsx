import React from "react";

export default function TopicConcatTextjoin() {
  // Text combination functions reference
  const textFunctions = [
    { 
      function: "CONCAT", 
      syntax: "=CONCAT(text1, [text2], ...)", 
      description: "Combines multiple text strings into one string (replaces CONCATENATE)",
      example: "=CONCAT(A1, \" \", B1)" 
    },
    { 
      function: "TEXTJOIN", 
      syntax: "=TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)", 
      description: "Combines text with a delimiter and option to ignore empty cells",
      example: "=TEXTJOIN(\", \", TRUE, A1:A10)" 
    },
    { 
      function: "& (Ampersand)", 
      syntax: "=text1 & text2 & text3", 
      description: "Alternative method to combine text using the & operator",
      example: "=A1 & \" \" & B1" 
    },
  ];

  // Employee directory example
  const employeeData = [
    { id: "EMP001", firstName: "John", lastName: "Smith", department: "Sales", title: "Manager", email: "john.smith", domain: "company.com" },
    { id: "EMP002", firstName: "Sarah", lastName: "Johnson", department: "Marketing", title: "Specialist", email: "sarah.johnson", domain: "company.com" },
    { id: "EMP003", firstName: "Mike", lastName: "Chen", department: "IT", title: "Developer", email: "mike.chen", domain: "company.com" },
    { id: "EMP004", firstName: "Emily", lastName: "Davis", department: "HR", title: "Coordinator", email: "emily.davis", domain: "company.com" },
    { id: "EMP005", firstName: "David", lastName: "Wilson", department: "Finance", title: "Analyst", email: "david.wilson", domain: "company.com" },
  ];

  // Product catalog example
  const productData = [
    { sku: "ELEC-001", category: "Electronics", productName: "Wireless Mouse", brand: "TechBrand", color: "Black", price: 29.99 },
    { sku: "ELEC-002", category: "Electronics", productName: "Mechanical Keyboard", brand: "TechBrand", color: "RGB", price: 89.99 },
    { sku: "FURN-001", category: "Furniture", productName: "Office Chair", brand: "ComfortSeat", color: "", price: 199.99 },
    { sku: "FURN-002", category: "Furniture", productName: "Desk Lamp", brand: "BrightLight", color: "Silver", price: 45.50 },
    { sku: "ACC-001", category: "Accessories", productName: "Laptop Stand", brand: "", color: "Aluminum", price: 35.00 },
  ];

  // Student report cards example
  const studentData = [
    { studentId: "S1001", firstName: "Emma", lastName: "Thompson", subject: "Mathematics", grade: "A", score: 92 },
    { studentId: "S1001", firstName: "Emma", lastName: "Thompson", subject: "Science", grade: "A-", score: 90 },
    { studentId: "S1001", firstName: "Emma", lastName: "Thompson", subject: "English", grade: "B+", score: 88 },
    { studentId: "S1002", firstName: "Noah", lastName: "Rodriguez", subject: "Mathematics", grade: "B", score: 85 },
    { studentId: "S1002", firstName: "Noah", lastName: "Rodriguez", subject: "Science", grade: "C+", score: 79 },
    { studentId: "S1002", firstName: "Noah", lastName: "Rodriguez", subject: "English", grade: "A-", score: 91 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        CONCAT and TEXTJOIN Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        CONCAT and TEXTJOIN are powerful text manipulation functions that allow you to combine 
        multiple text strings into a single string. While CONCAT simply joins text together, 
        TEXTJOIN provides advanced features like adding delimiters and automatically ignoring 
        empty cells, making it ideal for creating formatted lists and structured text.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          When creating email addresses from names, you can use <code>=CONCAT(LOWER(B2), ".", LOWER(C2), "@company.com")</code> 
          to generate "john.smith@company.com". For creating comma-separated lists, 
          <code>=TEXTJOIN(", ", TRUE, A2:A10)</code> will combine all non-empty cells in the range 
          with comma separators, automatically skipping any blank cells.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Text Combination Functions Reference
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
              {textFunctions.map((func, idx) => (
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
            <strong>Employee Directory Creation:</strong> Create formatted employee records by:
            <ul className="list-disc pl-6 mt-2">
              <li>Generating full names and email addresses using CONCAT</li>
              <li>Creating employee IDs and display names</li>
              <li>Building department lists using TEXTJOIN</li>
              <li>Formatting professional contact information</li>
            </ul>
          </li>
          <li>
            <strong>Product Catalog Management:</strong> Standardize product information by:
            <ul className="list-disc pl-6 mt-2">
              <li>Creating product display names with CONCAT</li>
              <li>Generating product descriptions using TEXTJOIN</li>
              <li>Building category summaries and lists</li>
              <li>Formatting product labels and tags</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Employee Directory Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Directory Creation Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use CONCAT and TEXTJOIN to create formatted 
            employee records, email addresses, and department summaries.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Raw Data</th>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                  <th className="px-4 py-2 border">Department</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Email Part</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-mono text-gray-500">{employee.id}</td>
                    <td className="px-4 py-2 border">{employee.firstName}</td>
                    <td className="px-4 py-2 border">{employee.lastName}</td>
                    <td className="px-4 py-2 border">{employee.department}</td>
                    <td className="px-4 py-2 border">{employee.title}</td>
                    <td className="px-4 py-2 border text-gray-500">{employee.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Formatted Output</th>
                  <th className="px-4 py-2 border">Full Name</th>
                  <th className="px-4 py-2 border">Email Address</th>
                  <th className="px-4 py-2 border">Display Name</th>
                  <th className="px-4 py-2 border">Employee Profile</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee, idx) => {
                  const fullName = `${employee.firstName} ${employee.lastName}`;
                  const email = `${employee.email}@${employee.domain}`;
                  const displayName = `${employee.firstName} ${employee.lastName} (${employee.department})`;
                  const profile = `${employee.title} - ${employee.department} Department`;
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-mono text-gray-500">{employee.id}</td>
                      <td className="px-4 py-2 border font-semibold text-green-600">
                        {fullName}
                      </td>
                      <td className="px-4 py-2 border text-blue-600 font-semibold">
                        {email}
                      </td>
                      <td className="px-4 py-2 border text-purple-600">
                        {displayName}
                      </td>
                      <td className="px-4 py-2 border">
                        {profile}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <strong>Full Name:</strong><br/>
                  =CONCAT(B2, " ", C2)<br/>
                  <span className="text-gray-600">or =B2 & " " & C2</span>
                </li>
                <li>
                  <strong>Email Address:</strong><br/>
                  =CONCAT(E2, "@", F2)
                </li>
                <li>
                  <strong>Display Name:</strong><br/>
                  =CONCAT(B2, " ", C2, " (", D2, ")")
                </li>
                <li>
                  <strong>Department List:</strong><br/>
                  =TEXTJOIN(", ", TRUE, D2:D6)
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Department Summary</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>All Departments:</strong><br/>
                  <span className="text-purple-600">
                    {[...new Set(employeeData.map(emp => emp.department))].join(", ")}
                  </span>
                </div>
                <div>
                  <strong>Sales Team:</strong><br/>
                  <span className="text-green-600">
                    {employeeData.filter(emp => emp.department === "Sales").map(emp => `${emp.firstName} ${emp.lastName}`).join(", ")}
                  </span>
                </div>
                <div>
                  <strong>Email List:</strong><br/>
                  <span className="text-blue-600 text-xs">
                    {employeeData.map(emp => `${emp.email}@${emp.domain}`).join("; ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Catalog Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Product Catalog Management Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use CONCAT and TEXTJOIN to create professional 
            product displays, descriptions, and category summaries.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Raw Data</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Product Name</th>
                  <th className="px-4 py-2 border">Brand</th>
                  <th className="px-4 py-2 border">Color</th>
                  <th className="px-4 py-2 border">Price</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-mono text-gray-500">{product.sku}</td>
                    <td className="px-4 py-2 border">{product.category}</td>
                    <td className="px-4 py-2 border">{product.productName}</td>
                    <td className="px-4 py-2 border">{product.brand || "(No Brand)"}</td>
                    <td className="px-4 py-2 border">{product.color || "(No Color)"}</td>
                    <td className="px-4 py-2 border">${product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Formatted Output</th>
                  <th className="px-4 py-2 border">Display Name</th>
                  <th className="px-4 py-2 border">Product Description</th>
                  <th className="px-4 py-2 border">Product Label</th>
                  <th className="px-4 py-2 border">Search Tags</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, idx) => {
                  const displayName = `${product.brand ? product.brand + ' ' : ''}${product.productName}`;
                  const description = `${product.productName}${product.color ? ` in ${product.color}` : ''}${product.brand ? ` by ${product.brand}` : ''}`;
                  const label = `${product.sku} - ${product.productName} - $${product.price}`;
                  const tags = [product.category, product.brand, product.color, product.productName.split(' ')[0]]
                    .filter(tag => tag && tag !== "(No Brand)" && tag !== "(No Color)")
                    .join(', ');
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-mono text-gray-500">{product.sku}</td>
                      <td className="px-4 py-2 border font-semibold text-green-600">
                        {displayName}
                      </td>
                      <td className="px-4 py-2 border text-blue-600">
                        {description}
                      </td>
                      <td className="px-4 py-2 border text-purple-600">
                        {label}
                      </td>
                      <td className="px-4 py-2 border text-gray-600 text-xs">
                        {tags}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <strong>Display Name:</strong><br/>
                  =CONCAT(IF(D2="","",D2&" "), C2)
                </li>
                <li>
                  <strong>Product Description:</strong><br/>
                  =CONCAT(C2, IF(E2="","", " in "&E2), IF(D2="","", " by "&D2))
                </li>
                <li>
                  <strong>Product Label:</strong><br/>
                  =CONCAT(A2, " - ", C2, " - $", F2)
                </li>
                <li>
                  <strong>Category Products:</strong><br/>
                  =TEXTJOIN(", ", TRUE, IF(B2:B6="Electronics", C2:C6, ""))
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Catalog Summary</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>All Products:</strong><br/>
                  <span className="text-green-600">
                    {productData.map(product => product.productName).join(", ")}
                  </span>
                </div>
                <div>
                  <strong>Electronics:</strong><br/>
                  <span className="text-blue-600">
                    {productData.filter(product => product.category === "Electronics").map(product => product.productName).join(", ")}
                  </span>
                </div>
                <div>
                  <strong>Price Range:</strong><br/>
                  <span className="text-purple-600">
                    ${Math.min(...productData.map(p => p.price))} - ${Math.max(...productData.map(p => p.price))}
                  </span>
                </div>
                <div>
                  <strong>All Brands:</strong><br/>
                  <span className="text-gray-600">
                    {[...new Set(productData.map(p => p.brand).filter(brand => brand))].join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Report Cards Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Student Report Cards with TEXTJOIN
          </h3>
          <p className="text-gray-700 mb-4">
            This additional example shows how TEXTJOIN can be used to create comprehensive 
            student reports by combining data from multiple rows.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Subject</th>
                  <th className="px-4 py-2 border">Grade</th>
                  <th className="px-4 py-2 border">Score</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border">{student.firstName} {student.lastName}</td>
                    <td className="px-4 py-2 border">{student.subject}</td>
                    <td className="px-4 py-2 border font-semibold">{student.grade}</td>
                    <td className="px-4 py-2 border">{student.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Student Reports Created with TEXTJOIN</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Emma Thompson's Report:</strong><br/>
                <span className="text-green-600">
                  Mathematics: A (92), Science: A- (90), English: B+ (88)
                </span>
                <div className="text-xs text-gray-600 mt-1">
                  Formula: =TEXTJOIN(", ", TRUE, "Mathematics: "&D2&" ("&E2&")", "Science: "&D3&" ("&E3&")", "English: "&D4&" ("&E4&")")
                </div>
              </div>
              <div>
                <strong>Noah Rodriguez's Report:</strong><br/>
                <span className="text-blue-600">
                  Mathematics: B (85), Science: C+ (79), English: A- (91)
                </span>
                <div className="text-xs text-gray-600 mt-1">
                  Formula: =TEXTJOIN(", ", TRUE, "Mathematics: "&D5&" ("&E5&")", "Science: "&D6&" ("&E6&")", "English: "&D7&" ("&E7&")")
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-yellow-50 p-4 rounded border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tips</h3>
        <ul className="list-disc pl-6 text-yellow-700 space-y-1">
          <li>Use TEXTJOIN instead of CONCAT when you need delimiters between items</li>
          <li>Set ignore_empty to TRUE in TEXTJOIN to automatically skip blank cells</li>
          <li>Combine with TRIM to remove extra spaces: =TRIM(CONCAT(A1, " ", B1))</li>
          <li>Use with other text functions: =TEXTJOIN(" ", TRUE, PROPER(A1), UPPER(B1))</li>
          <li>For complex formatting, combine with CHAR(10) for line breaks in cells with wrap text enabled</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the text combination exercises already set up. 
          You can experiment with different text formats, delimiters, and see how these 
          functions can automate text creation tasks.
        </p>
        <div className="space-y-3">
          <a
            href="/employee_directory_text.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Employee Directory Example
          </a>
          <a
            href="/product_catalog_text.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Product Catalog Example
          </a>
        </div>
      </div>
    </div>
  );
}