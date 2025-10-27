import React, { useState } from "react";

export default function TopicDataValidation() {

  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const [productCode, setProductCode] = useState("PRD-001");
  const [date, setDate] = useState("2024-01-15");
  const [website, setWebsite] = useState("https://www.example.com");
  const [discount, setDiscount] = useState(15);

  // Data Validation functions reference
  const validationFunctions = [
    { 
      function: "Data Validation", 
      syntax: "Data → Data Validation → Settings", 
      description: "Restrict data entry to specific types, ranges, or custom rules",
      example: "Whole numbers between 1-100" 
    },
    { 
      function: "ISNUMBER", 
      syntax: "=ISNUMBER(value)", 
      description: "Returns TRUE if value is a number",
      example: "=ISNUMBER(A1)" 
    },
    { 
      function: "ISTEXT", 
      syntax: "=ISTEXT(value)", 
      description: "Returns TRUE if value is text",
      example: "=ISTEXT(A1)" 
    },
    { 
      function: "ISDATE", 
      syntax: "=ISNUMBER(date_value)", 
      description: "Check if value is a valid date (using ISNUMBER with date serial)",
      example: "=ISNUMBER(A1)" 
    },
    { 
      function: "LEN", 
      syntax: "=LEN(text)", 
      description: "Returns the number of characters in a text string",
      example: "=LEN(A1)" 
    },
    { 
      function: "AND/OR", 
      syntax: "=AND(logical1, [logical2], ...)", 
      description: "Combine multiple logical conditions",
      example: "=AND(A1>0, A1<100)" 
    },
  ];

  // Common Data Validation types
  const validationTypes = [
    { 
      type: "Whole Number", 
      description: "Only whole numbers allowed",
      settings: "Between 1 and 100",
      useCase: "Age, Quantity, Ratings" 
    },
    { 
      type: "Decimal", 
      description: "Decimal numbers with specific precision",
      settings: "Between 0.00 and 1000.00",
      useCase: "Prices, Measurements" 
    },
    { 
      type: "List", 
      description: "Dropdown list from predefined options",
      settings: "Source: North,South,East,West",
      useCase: "Regions, Categories, Status" 
    },
    { 
      type: "Date", 
      description: "Date within specific range",
      settings: "Between 1/1/2020 and 12/31/2030",
      useCase: "Birth dates, Order dates" 
    },
    { 
      type: "Text Length", 
      description: "Limit character count",
      settings: "Between 5 and 50 characters",
      useCase: "Product codes, Usernames" 
    },
    { 
      type: "Custom Formula", 
      description: "Advanced validation using formulas",
      settings: "=AND(A1>0, A1<100)",
      useCase: "Complex business rules" 
    },
  ];

  // Sample data for examples
  const employeeData = [
    { id: "EMP001", name: "John Smith", department: "Sales", salary: 65000, email: "john.smith@company.com", hireDate: "2022-03-15" },
    { id: "EMP002", name: "Sarah Johnson", department: "Marketing", salary: 58000, email: "sarah.j@company.com", hireDate: "2021-07-22" },
    { id: "EMP003", name: "Mike Chen", department: "IT", salary: 75000, email: "mike.chen@company.com", hireDate: "2023-01-10" },
  ];

  const productCategories = ["Electronics", "Clothing", "Home Goods", "Books", "Sports"];
  const statusOptions = ["Active", "Inactive", "Pending", "Cancelled"];
  const priorityLevels = ["Low", "Medium", "High", "Critical"];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateAge = (age) => {
    return age >= 18 && age <= 65;
  };

  const validateSalary = (salary) => {
    return salary >= 30000 && salary <= 150000;
  };

  const validateProductCode = (code) => {
    const codeRegex = /^[A-Z]{3}-[0-9]{3}$/;
    return codeRegex.test(code);
  };

  const validateDate = (date) => {
    const inputDate = new Date(date);
    const minDate = new Date("2020-01-01");
    const maxDate = new Date("2030-12-31");
    return inputDate >= minDate && inputDate <= maxDate;
  };

  const validateWebsite = (website) => {
    const websiteRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/;
    return websiteRegex.test(website);
  };

  const validateDiscount = (discount) => {
    return discount >= 0 && discount <= 50;
  };

  // Current validation results
  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(phone);
  const ageValid = validateAge(age);
  const salaryValid = validateSalary(salary);
  const productCodeValid = validateProductCode(productCode);
  const dateValid = validateDate(date);
  const websiteValid = validateWebsite(website);
  const discountValid = validateDiscount(discount);

  // Custom formula examples
  const customFormula1 = "=AND(A1>=18, A1<=65)"; // Age validation
  const customFormula2 = "=LEN(A1)>=5"; // Minimum text length
  const customFormula3 = "=A1>TODAY()"; // Future date only
  const customFormula4 = "=MOD(A1,1)=0"; // Whole numbers only

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        Data Validation in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Data Validation is a powerful Excel feature that controls what users can enter into cells. 
        It prevents data entry errors, ensures consistency, and makes spreadsheets more user-friendly 
        by providing dropdown lists, input messages, and error alerts.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Applications
        </h3>
        <p className="text-gray-700">
          • Employee forms: <code>Restrict salary range $30,000 - $150,000</code><br/>
          • Product database: <code>Dropdown for categories and status</code><br/>
          • Order forms: <code>Date validation for delivery dates</code><br/>
          • Registration: <code>Email format and age restrictions</code>
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Validation Functions Reference
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
              {validationFunctions.map((func, idx) => (
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

      {/* Common Validation Types */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Common Data Validation Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {validationTypes.map((type, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-blue-200">
              <div className="font-semibold text-blue-600 text-center mb-2">{type.type}</div>
              <div className="text-blue-700 text-xs mb-2">{type.description}</div>
              <div className="font-mono text-xs bg-gray-100 p-1 rounded text-center mb-2">{type.settings}</div>
              <div className="text-gray-600 text-xs text-center">{type.useCase}</div>
            </div>
          ))}
        </div>
      </div>

      {/* With vs Without Validation */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔍 Data Validation vs No Validation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">❌ Without Data Validation</h4>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              <li>Inconsistent data formats</li>
              <li>Invalid entries and typos</li>
              <li>Difficult data analysis</li>
              <li>Broken formulas and calculations</li>
              <li>Time-consuming data cleaning</li>
              <li>Poor data quality</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">✅ With Data Validation</h4>
            <ul className="list-disc pl-5 space-y-1 text-green-600">
              <li>Consistent, clean data</li>
              <li>Prevents entry errors</li>
              <li>Easy data analysis</li>
              <li>Reliable calculations</li>
              <li>User-friendly forms</li>
              <li>Professional appearance</li>
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
            <strong>Input Restriction and Format Validation:</strong> Create robust data entry systems:
            <ul className="list-disc pl-6 mt-2">
              <li>Validate email formats and phone numbers</li>
              <li>Restrict numerical values to specific ranges</li>
              <li>Enforce text length limitations</li>
              <li>Validate date ranges and formats</li>
            </ul>
          </li>
          <li>
            <strong>Dropdown Lists and Selection Controls:</strong> Build user-friendly interfaces:
            <ul className="list-disc pl-6 mt-2">
              <li>Create categorized dropdown menus</li>
              <li>Implement dependent dropdown lists</li>
              <li>Provide predefined option selections</li>
              <li>Ensure consistent categorization</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Validation Demo */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Validations */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">🔍 Basic Data Validations</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address:
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                  emailValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              />
              <div className={`text-xs mt-1 ${emailValid ? "text-green-600" : "text-red-600"}`}>
                {emailValid ? "✓ Valid email format" : "✗ Invalid email format"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number:
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                  phoneValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              />
              <div className={`text-xs mt-1 ${phoneValid ? "text-green-600" : "text-red-600"}`}>
                {phoneValid ? "✓ Valid phone format" : "✗ Invalid phone format (e.g., (555) 123-4567)"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Age (18-65):
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                    ageValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                  }`}
                />
                <div className={`text-xs mt-1 ${ageValid ? "text-green-600" : "text-red-600"}`}>
                  {ageValid ? "✓ Valid age" : "✗ Age must be between 18-65"}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Salary ($30K-$150K):
                </label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                    salaryValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                  }`}
                />
                <div className={`text-xs mt-1 ${salaryValid ? "text-green-600" : "text-red-600"}`}>
                  {salaryValid ? "✓ Valid salary" : "✗ Salary must be $30,000-$150,000"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Validations */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">⚡ Advanced Validations</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Product Code (PRD-001 format):
              </label>
              <input
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                  productCodeValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              />
              <div className={`text-xs mt-1 ${productCodeValid ? "text-green-600" : "text-red-600"}`}>
                {productCodeValid ? "✓ Valid product code" : "✗ Format: PRD-001 (3 letters, hyphen, 3 numbers)"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Date (2020-2030):
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                  dateValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              />
              <div className={`text-xs mt-1 ${dateValid ? "text-green-600" : "text-red-600"}`}>
                {dateValid ? "✓ Valid date range" : "✗ Date must be between 2020-2030"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Website URL:
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                  websiteValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              />
              <div className={`text-xs mt-1 ${websiteValid ? "text-green-600" : "text-red-600"}`}>
                {websiteValid ? "✓ Valid website URL" : "✗ Invalid URL format"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Discount % (0-50%):
              </label>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent ${
                  discountValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                }`}
              />
              <div className={`text-xs mt-1 ${discountValid ? "text-green-600" : "text-red-600"}`}>
                {discountValid ? "✓ Valid discount" : "✗ Discount must be 0-50%"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown List Examples */}
      <div className="mb-6 bg-white p-4 rounded border border-gray-200">
        <h4 className="font-semibold text-[#217346] mb-3">📋 Dropdown List Examples</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product Category:
            </label>
            <select className="w-full p-2 border border-gray-300 rounded bg-white">
              {productCategories.map((category, idx) => (
                <option key={idx} value={category}>{category}</option>
              ))}
            </select>
            <div className="text-xs text-gray-600 mt-1">Predefined categories</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Status:
            </label>
            <select className="w-full p-2 border border-gray-300 rounded bg-white">
              {statusOptions.map((status, idx) => (
                <option key={idx} value={status}>{status}</option>
              ))}
            </select>
            <div className="text-xs text-gray-600 mt-1">Standard status options</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Priority Level:
            </label>
            <select className="w-full p-2 border border-gray-300 rounded bg-white">
              {priorityLevels.map((priority, idx) => (
                <option key={idx} value={priority}>{priority}</option>
              ))}
            </select>
            <div className="text-xs text-gray-600 mt-1">Priority classification</div>
          </div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Employee Data Validation Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Employee Data Validation System
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates a comprehensive employee data entry system with multiple validation rules 
            to ensure data quality and consistency.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Employee Database */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Employee Database with Validation</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Employee ID</th>
                      <th className="px-3 py-2 border">Name</th>
                      <th className="px-3 py-2 border">Department</th>
                      <th className="px-3 py-2 border">Salary</th>
                      <th className="px-3 py-2 border">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeData.map((employee, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 border font-mono">{employee.id}</td>
                        <td className="px-3 py-2 border">{employee.name}</td>
                        <td className="px-3 py-2 border">
                          <select className="w-full text-sm border-0 bg-transparent">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>IT</option>
                            <option>HR</option>
                            <option>Finance</option>
                          </select>
                        </td>
                        <td className="px-3 py-2 border">
                          <input 
                            type="number" 
                            defaultValue={employee.salary}
                            className="w-full text-sm border border-gray-300 rounded px-1"
                            min="30000"
                            max="150000"
                          />
                        </td>
                        <td className="px-3 py-2 border">
                          <input 
                            type="email" 
                            defaultValue={employee.email}
                            className="w-full text-sm border border-gray-300 rounded px-1"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Validation Rules */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Applied Validation Rules</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="font-semibold text-green-700">Employee ID</div>
                  <div className="text-sm text-green-600">Format: EMP### (Text, 6 characters)</div>
                  <div className="text-xs font-mono mt-1">Custom: =AND(LEN(A1)=6, LEFT(A1,3)="EMP")</div>
                </div>

                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="font-semibold text-blue-700">Department</div>
                  <div className="text-sm text-blue-600">Dropdown: Sales, Marketing, IT, HR, Finance</div>
                  <div className="text-xs font-mono mt-1">List: Sales,Marketing,IT,HR,Finance</div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="font-semibold text-purple-700">Salary</div>
                  <div className="text-sm text-purple-600">Whole number: $30,000 - $150,000</div>
                  <div className="text-xs font-mono mt-1">Whole number between: 30000 and 150000</div>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="font-semibold text-yellow-700">Email</div>
                  <div className="text-sm text-yellow-600">Valid email format with @ symbol</div>
                  <div className="text-xs font-mono mt-1">Custom: =ISNUMBER(FIND("@",E1))</div>
                </div>

                <div className="p-3 bg-red-50 rounded border border-red-200">
                  <div className="font-semibold text-red-700">Hire Date</div>
                  <div className="text-sm text-red-600">Date between 1/1/2000 and today</div>
                  <div className="text-xs font-mono mt-1">Date between: 1/1/2000 and =TODAY()</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Formula Examples */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Custom Formula Validation
          </h3>
          <p className="text-gray-700 mb-4">
            Advanced data validation using custom formulas for complex business rules and conditional logic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🔧 Common Custom Formulas</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="font-mono text-sm mb-2">{customFormula1}</div>
                  <div className="text-sm text-blue-700">Age restriction (18-65 years)</div>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="font-mono text-sm mb-2">{customFormula2}</div>
                  <div className="text-sm text-green-700">Minimum 5 characters required</div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="font-mono text-sm mb-2">{customFormula3}</div>
                  <div className="text-sm text-purple-700">Future dates only (after today)</div>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="font-mono text-sm mb-2">{customFormula4}</div>
                  <div className="text-sm text-yellow-700">Whole numbers only (no decimals)</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🎯 Complex Business Rules</h4>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded border border-red-200">
                  <div className="font-mono text-xs mb-2">
                    =AND(B1&gt;=C1, B1&lt;=C1+30)
                  </div>
                  <div className="text-sm text-red-700">End date within 30 days of start date</div>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="font-mono text-xs mb-2">
                    =OR(A1="Manager", A1="Director", A1="VP")
                  </div>
                  <div className="text-sm text-green-700">Specific job titles only</div>
                </div>

                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="font-mono text-xs mb-2">
                    =AND(ISNUMBER(A1), A1&gt;0, A1&lt;=B1*0.8)
                  </div>
                  <div className="text-sm text-blue-700">Discount max 80% of original price</div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="font-mono text-xs mb-2">
                    =COUNTIF($A$1:$A$100, A1)=1
                  </div>
                  <div className="text-sm text-purple-700">Unique values only (no duplicates)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Messages & Error Alerts */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Input Messages & Error Alerts
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">💡 Input Messages</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="font-semibold text-blue-700">Title: Enter Employee ID</div>
                  <div className="text-sm text-blue-600">
                    Input message: "Please enter employee ID in format EMP### (e.g., EMP001)"
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="font-semibold text-green-700">Title: Select Department</div>
                  <div className="text-sm text-green-600">
                    Input message: "Choose department from dropdown list. Contact HR for new departments."
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="font-semibold text-purple-700">Title: Enter Salary</div>
                  <div className="text-sm text-purple-600">
                    Input message: "Enter annual salary between $30,000 and $150,000. No commas or decimals."
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">🚨 Error Alerts</h4>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded border border-red-200">
                  <div className="font-semibold text-red-700">Stop (Prevent Invalid Entry)</div>
                  <div className="text-sm text-red-600">
                    Title: "Invalid Employee ID"<br/>
                    Error message: "Employee ID must be EMP followed by 3 numbers (e.g., EMP001)"
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <div className="font-semibold text-yellow-700">Warning (Allow with Confirmation)</div>
                  <div className="text-sm text-yellow-600">
                    Title: "Unusual Salary Entry"<br/>
                    Error message: "This salary is outside typical range. Continue anyway?"
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="font-semibold text-blue-700">Information (Show Message)</div>
                  <div className="text-sm text-blue-600">
                    Title: "Date Format"<br/>
                    Error message: "Please use MM/DD/YYYY format for dates"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Data Validation Patterns */}
      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          🚀 Advanced Data Validation Patterns
        </h3>
        <p className="text-gray-700 mb-4">
          These patterns demonstrate sophisticated data validation techniques for complex business scenarios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dependent Dropdowns */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">🔄 Dependent Dropdown Lists</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-blue-50 rounded">
                <div className="font-mono text-xs">
                  =INDIRECT($A$1) // Where A1 contains category
                </div>
              </div>
              <div className="text-gray-600">
                <strong>Use Case:</strong> Second dropdown shows options based on first dropdown selection
              </div>
              <div className="text-xs text-blue-600">
                Example: Country → State → City cascading dropdowns
              </div>
            </div>
          </div>

          {/* Dynamic Ranges */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📊 Dynamic Validation Ranges</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-50 rounded">
                <div className="font-mono text-xs">
                  =OFFSET($A$1,0,0,COUNTA($A:$A),1)
                </div>
              </div>
              <div className="text-gray-600">
                <strong>Use Case:</strong> Dropdown lists that automatically expand with new data
              </div>
              <div className="text-xs text-green-600">
                Example: Product list that grows as new products are added
              </div>
            </div>
          </div>

          {/* Cross-Worksheet Validation */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">📑 Cross-Worksheet Validation</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-purple-50 rounded">
                <div className="font-mono text-xs">
                  =COUNTIF(Sheet2!$A:$A, A1)&gt;0
                </div>
              </div>
              <div className="text-gray-600">
                <strong>Use Case:</strong> Validate against master data lists on other worksheets
              </div>
              <div className="text-xs text-purple-600">
                Example: Ensure product codes exist in master product database
              </div>
            </div>
          </div>

          {/* Time-Based Validation */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">⏰ Time-Based Validation</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-yellow-50 rounded">
                <div className="font-mono text-xs">
                  =AND(A1&gt;=TIME(9,0,0), A1&lt;=TIME(17,0,0))
                </div>
              </div>
              <div className="text-gray-600">
                <strong>Use Case:</strong> Restrict time entries to business hours
              </div>
              <div className="text-xs text-yellow-600">
                Example: Appointment scheduling within 9 AM - 5 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tips for Data Validation</h3>
        <ul className="list-disc pl-6 text-green-700 space-y-1">
          <li>Use meaningful input messages to guide users on what to enter</li>
          <li>Choose appropriate error alert types: Stop, Warning, or Information</li>
          <li>Combine data validation with conditional formatting for visual feedback</li>
          <li>Use named ranges in validation to make formulas more readable</li>
          <li>Test validation rules with both valid and invalid data</li>
          <li>Use "Circle Invalid Data" tool to find existing validation errors</li>
          <li>Consider using data validation with table structures for dynamic ranges</li>
          <li>Document validation rules for future maintenance and troubleshooting</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with Data Validation exercises already set up. 
          Practice creating validation rules, dropdown lists, and custom formulas.
        </p>
        <div className="space-y-3">
          <a
            href="/data_validation_basic_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Basic Data Validation Exercises
          </a>
          <a
            href="/data_validation_advanced_examples.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Advanced Data Validation Exercises
          </a>
        </div>
      </div>
    </div>
  );
}