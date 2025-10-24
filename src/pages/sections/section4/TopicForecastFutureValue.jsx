import React, { useState } from "react";

export default function TopicForecastFutureValue() {
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [annualRate, setAnnualRate] = useState(8);
  const [years, setYears] = useState(10);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [salesPeriod, setSalesPeriod] = useState(13);

  // Financial functions reference
  const financialFunctions = [
    { 
      function: "FORECAST", 
      syntax: "=FORECAST(x, known_y's, known_x's)", 
      description: "Predicts a future value using linear regression based on existing values",
      example: "=FORECAST(A10, B2:B9, A2:A9)" 
    },
    { 
      function: "FV", 
      syntax: "=FV(rate, nper, pmt, [pv], [type])", 
      description: "Calculates the future value of an investment with constant payments and interest rate",
      example: "=FV(0.08/12, 120, -500, -10000)" 
    },
    { 
      function: "FORECAST.LINEAR", 
      syntax: "=FORECAST.LINEAR(x, known_y's, known_x's)", 
      description: "Newer version of FORECAST (Excel 2016+) - same functionality",
      example: "=FORECAST.LINEAR(A10, B2:B9, A2:A9)" 
    },
  ];

  // Sales data for FORECAST example
  const salesData = [
    { period: 1, sales: 12500 },
    { period: 2, sales: 13200 },
    { period: 3, sales: 12800 },
    { period: 4, sales: 14500 },
    { period: 5, sales: 13900 },
    { period: 6, sales: 15200 },
    { period: 7, sales: 14800 },
    { period: 8, sales: 16100 },
    { period: 9, sales: 15700 },
    { period: 10, sales: 16900 },
    { period: 11, sales: 16500 },
    { period: 12, sales: 17800 },
  ];

  // Calculate linear regression for FORECAST
  const calculateLinearRegression = (data) => {
    const n = data.length;
    const sumX = data.reduce((sum, item) => sum + item.period, 0);
    const sumY = data.reduce((sum, item) => sum + item.sales, 0);
    const sumXY = data.reduce((sum, item) => sum + item.period * item.sales, 0);
    const sumX2 = data.reduce((sum, item) => sum + item.period * item.period, 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return { slope, intercept };
  };

  const regression = calculateLinearRegression(salesData);
  
  // Calculate forecasted values
  const forecastedSales = salesPeriod => regression.slope * salesPeriod + regression.intercept;

  // Calculate Future Value
  const calculateFutureValue = (pv, rate, nper, pmt) => {
    const monthlyRate = rate / 100 / 12;
    const totalPeriods = nper * 12;
    
    // FV = PV*(1+r)^n + PMT*[((1+r)^n - 1)/r]
    const futureValue = pv * Math.pow(1 + monthlyRate, totalPeriods) + 
                       pmt * (Math.pow(1 + monthlyRate, totalPeriods) - 1) / monthlyRate;
    
    return futureValue;
  };

  const futureValue = calculateFutureValue(investmentAmount, annualRate, years, monthlyContribution);
  const totalContributions = investmentAmount + (monthlyContribution * years * 12);
  const interestEarned = futureValue - totalContributions;

  // Student enrollment forecast data
  const enrollmentData = [
    { year: 2018, students: 420 },
    { year: 2019, students: 435 },
    { year: 2020, students: 460 },
    { year: 2021, students: 478 },
    { year: 2022, students: 495 },
    { year: 2023, students: 512 },
  ];

  const enrollmentRegression = calculateLinearRegression(
    enrollmentData.map(item => ({ period: item.year, sales: item.students }))
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        FORECAST and FUTURE VALUE Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        FORECAST and FV (Future Value) are powerful financial functions for prediction and investment analysis. 
        FORECAST uses linear regression to predict future values based on historical data trends, while 
        FV calculates the future value of investments considering compound interest and regular contributions.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For sales prediction: <code>=FORECAST(13, B2:B13, A2:A13)</code> predicts next month's sales 
          based on 12 months of historical data. For retirement planning: 
          <code>=FV(0.07/12, 30*12, -500, -100000)</code> calculates retirement savings after 30 years 
          with $100,000 initial and $500 monthly contributions at 7% annual return.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Financial Functions Reference
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
              {financialFunctions.map((func, idx) => (
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

      {/* FV Function Parameters */}
      <div className="mb-6 bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">💰 FV Function Parameters</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div className="text-center">
            <div className="font-semibold text-blue-700">rate</div>
            <div className="text-blue-600 text-xs">Interest rate per period</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-700">nper</div>
            <div className="text-blue-600 text-xs">Total number of periods</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-700">pmt</div>
            <div className="text-blue-600 text-xs">Payment per period</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-700">pv</div>
            <div className="text-blue-600 text-xs">Present value</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-700">type</div>
            <div className="text-blue-600 text-xs">When payments are due (0=end, 1=beginning)</div>
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
            <strong>Sales Forecasting with Linear Regression:</strong> Create sales predictions that:
            <ul className="list-disc pl-6 mt-2">
              <li>Use FORECAST to predict future sales based on historical trends</li>
              <li>Apply linear regression to identify growth patterns</li>
              <li>Create visual sales projections for business planning</li>
              <li>Compare actual vs predicted performance</li>
            </ul>
          </li>
          <li>
            <strong>Investment Growth Calculator:</strong> Build a comprehensive investment planner that:
            <ul className="list-disc pl-6 mt-2">
              <li>Uses FV function to calculate compound growth</li>
              <li>Considers regular contributions and initial investment</li>
              <li>Shows the power of compound interest over time</li>
              <li>Helps with retirement and financial planning</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Interactive Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Forecast Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">📈 Sales Forecast Parameters</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Forecast Period:
              </label>
              <input
                type="number"
                value={salesPeriod}
                onChange={(e) => setSalesPeriod(Number(e.target.value))}
                min="13"
                max="24"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              />
              <div className="text-xs text-gray-500 mt-1">Period 13-24 (next 12 months)</div>
            </div>
          </div>
        </div>

        {/* Investment Controls */}
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-semibold text-[#217346] mb-3">💰 Investment Parameters</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Initial Investment:
              </label>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Annual Rate (%):
                </label>
                <input
                  type="number"
                  value={annualRate}
                  onChange={(e) => setAnnualRate(Number(e.target.value))}
                  step="0.1"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Years:
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Monthly Contribution:
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#217346] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Sales Forecast Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Sales Forecasting with Linear Regression
          </h3>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use FORECAST function to predict future sales 
            based on historical data using linear regression analysis.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Sales Data Table */}
            <div>
              <h4 className="font-semibold text-[#217346] mb-2">Historical Sales Data</h4>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-[#217346] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Period</th>
                      <th className="px-3 py-2 border">Sales ($)</th>
                      <th className="px-3 py-2 border">Trend Line</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((data, idx) => {
                      const trendValue = forecastedSales(data.period);
                      return (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                          <td className="px-3 py-2 border font-medium">Month {data.period}</td>
                          <td className="px-3 py-2 border font-semibold">${data.sales.toLocaleString()}</td>
                          <td className="px-3 py-2 border text-blue-600">${Math.round(trendValue).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Forecast Results */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Sales Forecast Results</h4>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="text-sm text-blue-800">
                    Linear Regression Formula: <strong>y = {regression.slope.toFixed(2)}x + {regression.intercept.toFixed(2)}</strong>
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    R² = {Math.pow(regression.slope, 2).toFixed(4)} (Goodness of fit)
                  </div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                  <div className="text-sm text-green-800 mb-1">Forecasted Sales</div>
                  <div className="text-2xl font-bold text-green-600">
                    ${Math.round(forecastedSales(salesPeriod)).toLocaleString()}
                  </div>
                  <div className="text-sm text-green-700 mt-1">for Period {salesPeriod}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="font-semibold text-gray-700">Monthly Growth</div>
                    <div className="text-lg font-bold text-blue-600">${regression.slope.toFixed(0)}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <div className="font-semibold text-gray-700">Base Sales</div>
                    <div className="text-lg font-bold text-purple-600">${regression.intercept.toFixed(0)}</div>
                  </div>
                </div>

                <div className="p-2 bg-gray-50 rounded">
                  <div className="text-xs font-mono">
                    <strong>Excel FORECAST Formula:</strong>
                    <div className="mt-1">=FORECAST({salesPeriod}, B2:B13, A2:A13)</div>
                    <div className="mt-2 text-gray-600">
                      Where A2:A13 contains periods 1-12, B2:B13 contains sales data
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Forecast Table */}
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">12-Month Sales Forecast</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-[#217346] text-white">
                  <tr>
                    <th className="px-3 py-2 border">Period</th>
                    <th className="px-3 py-2 border">Forecasted Sales</th>
                    <th className="px-3 py-2 border">Growth Trend</th>
                    <th className="px-3 py-2 border">Excel Formula</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 12 }, (_, i) => i + 13).map(period => {
                    const forecast = forecastedSales(period);
                    const growth = forecast - forecastedSales(period - 1);
                    return (
                      <tr key={period} className={period % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 border font-medium">Month {period}</td>
                        <td className="px-3 py-2 border font-semibold text-green-600">
                          ${Math.round(forecast).toLocaleString()}
                        </td>
                        <td className={`px-3 py-2 border ${
                          growth > 0 ? "text-green-600" : "text-red-600"
                        }`}>
                          {growth > 0 ? "↑" : "↓"} ${Math.abs(growth).toFixed(0)}
                        </td>
                        <td className="px-3 py-2 border font-mono text-xs text-gray-600">
                          =FORECAST({period}, B2:B13, A2:A13)
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Investment Future Value Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
            ✅ Investment Growth Calculator
          </h3>
          <p className="text-gray-700 mb-4">
            This example shows how to use FV function to calculate the future value of investments 
            with compound interest and regular contributions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Investment Summary */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">Investment Summary</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-blue-50 rounded border border-blue-200">
                    <div className="text-blue-800 font-semibold">Initial Investment</div>
                    <div className="text-xl font-bold text-blue-900">
                      ${investmentAmount.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 rounded border border-green-200">
                    <div className="text-green-800 font-semibold">Monthly Contribution</div>
                    <div className="text-xl font-bold text-green-900">
                      ${monthlyContribution.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded border border-purple-200">
                    <div className="text-purple-800 font-semibold">Annual Return</div>
                    <div className="text-xl font-bold text-purple-900">
                      {annualRate}%
                    </div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded border border-orange-200">
                    <div className="text-orange-800 font-semibold">Investment Period</div>
                    <div className="text-xl font-bold text-orange-900">
                      {years} years
                    </div>
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded text-white">
                  <div className="text-sm mb-1">Future Value After {years} Years</div>
                  <div className="text-3xl font-bold">
                    ${Math.round(futureValue).toLocaleString()}
                  </div>
                  <div className="text-sm mt-1 opacity-90">Compounded monthly</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="font-semibold text-gray-700">Total Contributions</div>
                    <div className="text-lg font-bold text-gray-800">
                      ${totalContributions.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded">
                    <div className="font-semibold text-yellow-700">Interest Earned</div>
                    <div className="text-lg font-bold text-yellow-800">
                      ${Math.round(interestEarned).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FV Calculation Details */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3">FV Calculation Details</h4>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <div className="text-sm text-purple-800 font-semibold">Excel FV Formula</div>
                  <div className="font-mono text-xs mt-1">
                    =FV({annualRate}/100/12, {years}*12, -{monthlyContribution}, -{investmentAmount})
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly interest rate:</span>
                    <span className="font-semibold text-blue-600">
                      {(annualRate / 12).toFixed(3)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total periods:</span>
                    <span className="font-semibold text-green-600">
                      {years * 12} months
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total contributions:</span>
                    <span className="font-semibold text-purple-600">
                      ${totalContributions.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest portion:</span>
                    <span className="font-semibold text-orange-600">
                      {((interestEarned / futureValue) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="text-sm text-green-800">
                    <strong>Compound Interest Power:</strong> Your money grows {
                      (futureValue / totalContributions).toFixed(1)
                    }x through compounding!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Year-by-Year Growth */}
          <div className="mt-6 bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-3">Year-by-Year Growth Projection</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm text-left">
                <thead className="bg-[#217346] text-white">
                  <tr>
                    <th className="px-3 py-2 border">Year</th>
                    <th className="px-3 py-2 border">Beginning Value</th>
                    <th className="px-3 py-2 border">Contributions</th>
                    <th className="px-3 py-2 border">Interest Earned</th>
                    <th className="px-3 py-2 border">Ending Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: years }, (_, i) => i + 1).map(year => {
                    const beginningValue = year === 1 ? investmentAmount : 
                      calculateFutureValue(investmentAmount, annualRate, year - 1, monthlyContribution);
                    const yearContributions = monthlyContribution * 12;
                    const endingValue = calculateFutureValue(investmentAmount, annualRate, year, monthlyContribution);
                    const interestEarned = endingValue - beginningValue - yearContributions;
                    
                    return (
                      <tr key={year} className={year % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2 border font-medium">Year {year}</td>
                        <td className="px-3 py-2 border">${Math.round(beginningValue).toLocaleString()}</td>
                        <td className="px-3 py-2 border text-green-600">${yearContributions.toLocaleString()}</td>
                        <td className="px-3 py-2 border text-blue-600">${Math.round(interestEarned).toLocaleString()}</td>
                        <td className="px-3 py-2 border font-semibold text-[#217346]">
                          ${Math.round(endingValue).toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-yellow-50 p-4 rounded border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tips for Financial Functions</h3>
        <ul className="list-disc pl-6 text-yellow-700 space-y-1">
          <li>FORECAST assumes linear relationship - verify data follows linear trend</li>
          <li>Use negative values for payments in FV function (cash outflow)</li>
          <li>Ensure consistent time periods (monthly rate for monthly contributions)</li>
          <li>FORECAST.LINEAR is the modern version of FORECAST (Excel 2016+)</li>
          <li>Combine with other financial functions: PMT, PV, RATE for comprehensive analysis</li>
          <li>Use data validation to ensure realistic input values</li>
          <li>Consider inflation when projecting long-term financial goals</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with FORECAST and FV function exercises already set up. 
          Practice sales forecasting, investment planning, and master financial analysis.
        </p>
        <div className="space-y-3">
          <a
            href="/sales_forecast_calculator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Sales Forecast Calculator
          </a>
          <a
            href="/investment_planner.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Investment Planner
          </a>
        </div>
      </div>
    </div>
  );
}