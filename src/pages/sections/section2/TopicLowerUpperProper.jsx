import React from "react";

export default function LowerUpperProper() {
  // Text functions reference
  const textFunctions = [
    { 
      function: "LOWER", 
      syntax: "=LOWER(text)", 
      description: "Converts all characters in a text string to lowercase",
      example: "=LOWER(\"Excel\") → \"excel\"" 
    },
    { 
      function: "UPPER", 
      syntax: "=UPPER(text)", 
      description: "Converts all characters in a text string to uppercase",
      example: "=UPPER(\"excel\") → \"EXCEL\"" 
    },
    { 
      function: "PROPER", 
      syntax: "=PROPER(text)", 
      description: "Capitalizes the first letter of each word in a text string",
      example: "=PROPER(\"john smith\") → \"John Smith\"" 
    },
  ];

  // Customer data example - raw data
  const rawCustomerData = [
    { id: "C001", firstName: "john", lastName: "doe", email: "JOHN.DOE@EMAIL.COM", city: "new york" },
    { id: "C002", firstName: "sarah", lastName: "jones", email: "sarah.jones@email.com", city: "los angeles" },
    { id: "C003", firstName: "mike", lastName: "wilson-smith", email: "MIKE@EMAIL.COM", city: "chicago" },
    { id: "C004", firstName: "emily", lastName: "brown", email: "emily.brown@email.com", city: "san francisco" },
    { id: "C005", firstName: "david", lastName: "lee", email: "DAVID_LEE@EMAIL.COM", city: "miami beach" },
  ];

  // Product catalog example - raw data
  const rawProductData = [
    { sku: "P001", productName: "wireless mouse", category: "electronics", status: "IN STOCK" },
    { sku: "P002", productName: "office chair", category: "furniture", status: "low stock" },
    { sku: "P003", productName: "laptop stand", category: "accessories", status: "out of stock" },
    { sku: "P004", productName: "mechanical keyboard", category: "electronics", status: "IN STOCK" },
    { sku: "P005", productName: "desk lamp", category: "furniture", status: "LOW STOCK" },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        LOWER, UPPER, PROPER Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The LOWER, UPPER, and PROPER functions are text manipulation functions that help you 
        standardize and format text data in Excel. These functions are essential for data cleaning, 
        ensuring consistency across your datasets, and preparing data for analysis or reporting.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          When importing customer data from different sources, you might encounter inconsistent 
          text formatting. For example, some names might be in lowercase, emails in uppercase, 
          and addresses in mixed case. Using <code>=PROPER(A2)</code> would format "john smith" 
          to "John Smith", while <code>=LOWER(B2)</code> would convert "JOHN.DOE@EMAIL.COM" to 
          "john.doe@email.com" for consistency.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Text Functions Reference
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
            <strong>Customer Data Standardization:</strong> Clean and standardize customer data by:
            <ul className="list-disc pl-6 mt-2">
              <li>Converting first and last names to proper case using PROPER</li>
              <li>Standardizing email addresses to lowercase using LOWER</li>
              <li>Formatting city names with proper capitalization</li>
              <li>Creating a standardized customer directory</li>
            </ul>
          </li>
          <li>
            <strong>Product Catalog Cleanup:</strong> Standardize product information by:
            <ul className="list-disc pl-6 mt-2">
              <li>Converting product names to proper case using PROPER</li>
              <li>Standardizing status indicators to uppercase using UPPER</li>
              <li>Ensuring consistent category naming</li>
              <li>Creating a professional product listing</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Customer Data Standardization Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Customer Data Standardization Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use LOWER, UPPER, and PROPER functions to clean and 
            standardize customer data for consistency and professionalism.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-[#217346] mb-2">Raw Customer Data (Before Cleaning)</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border">Customer ID</th>
                    <th className="px-4 py-2 border">First Name</th>
                    <th className="px-4 py-2 border">Last Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">City</th>
                  </tr>
                </thead>
                <tbody>
                  {rawCustomerData.map((customer, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-mono">{customer.id}</td>
                      <td className="px-4 py-2 border text-red-600">{customer.firstName}</td>
                      <td className="px-4 py-2 border text-red-600">{customer.lastName}</td>
                      <td className="px-4 py-2 border text-red-600">{customer.email}</td>
                      <td className="px-4 py-2 border text-red-600">{customer.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Customer ID</th>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Formatted Name</th>
                </tr>
              </thead>
              <tbody>
                {rawCustomerData.map((customer, idx) => {
                  const formattedFirstName = customer.firstName.charAt(0).toUpperCase() + customer.firstName.slice(1);
                  const formattedLastName = customer.lastName.split('-').map(part => 
                    part.charAt(0).toUpperCase() + part.slice(1)
                  ).join('-');
                  const formattedEmail = customer.email.toLowerCase();
                  const formattedCity = customer.city.split(' ').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ');
                  const fullName = `${formattedFirstName} ${formattedLastName}`;
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-mono">{customer.id}</td>
                      <td className="px-4 py-2 border text-green-600 font-semibold">
                        {formattedFirstName}
                      </td>
                      <td className="px-4 py-2 border text-green-600 font-semibold">
                        {formattedLastName}
                      </td>
                      <td className="px-4 py-2 border text-blue-600 font-semibold">
                        {formattedEmail}
                      </td>
                      <td className="px-4 py-2 border text-purple-600 font-semibold">
                        {formattedCity}
                      </td>
                      <td className="px-4 py-2 border font-semibold">
                        {fullName}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-1 text-sm font-mono">
                <li>First Name: =PROPER(B2)</li>
                <li>Last Name: =PROPER(C2)</li>
                <li>Email: =LOWER(D2)</li>
                <li>City: =PROPER(E2)</li>
                <li>Full Name: =B3&amp;" "&amp;C3</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Benefits</h4>
              <ul className="space-y-1 text-sm">
                <li>✓ Professional name formatting</li>
                <li>✓ Consistent email format</li>
                <li>✓ Proper city capitalization</li>
                <li>✓ Ready for customer communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Catalog Cleanup Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Product Catalog Cleanup Example
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use text functions to standardize product information 
            for a professional catalog or inventory system.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-[#217346] mb-2">Raw Product Data (Before Cleaning)</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border">SKU</th>
                    <th className="px-4 py-2 border">Product Name</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rawProductData.map((product, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-mono">{product.sku}</td>
                      <td className="px-4 py-2 border text-red-600">{product.productName}</td>
                      <td className="px-4 py-2 border text-red-600">{product.category}</td>
                      <td className="px-4 py-2 border text-red-600">{product.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">SKU</th>
                  <th className="px-4 py-2 border">Product Name</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Display Name</th>
                </tr>
              </thead>
              <tbody>
                {rawProductData.map((product, idx) => {
                  const formattedProductName = product.productName.split(' ').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ');
                  const formattedCategory = product.category.charAt(0).toUpperCase() + product.category.slice(1);
                  const formattedStatus = product.status.toUpperCase();
                  const displayName = `${formattedProductName} (${product.sku})`;
                  
                  const statusColor = formattedStatus === "IN STOCK" ? "text-green-600" : 
                                    formattedStatus === "LOW STOCK" ? "text-orange-600" : "text-red-600";
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="px-4 py-2 border font-mono">{product.sku}</td>
                      <td className="px-4 py-2 border text-green-600 font-semibold">
                        {formattedProductName}
                      </td>
                      <td className="px-4 py-2 border text-blue-600 font-semibold">
                        {formattedCategory}
                      </td>
                      <td className={`px-4 py-2 border font-semibold ${statusColor}`}>
                        {formattedStatus}
                      </td>
                      <td className="px-4 py-2 border font-semibold">
                        {displayName}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-1 text-sm font-mono">
                <li>Product Name: =PROPER(B2)</li>
                <li>Category: =PROPER(C2)</li>
                <li>Status: =UPPER(D2)</li>
                <li>Display Name: =B3&amp;" ("&amp;A3&amp;")"</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Benefits</h4>
              <ul className="space-y-1 text-sm">
                <li>✓ Professional product naming</li>
                <li>✓ Consistent status indicators</li>
                <li>✓ Standardized categories</li>
                <li>✓ Ready for e-commerce display</li>
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
          Download these Excel files with the text function exercises already set up. 
          You can explore the formulas, try different text inputs, and see how 
          the text transformations work in real scenarios.
        </p>
        <div className="space-y-3">
          <a
            href="/customer_data_cleaning.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Customer Data Cleaning Example
          </a>
          <a
            href="/product_catalog_cleanup.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Product Catalog Cleanup Example
          </a>
        </div>
      </div>
    </div>
  );
}