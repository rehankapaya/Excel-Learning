import React, { useState, useEffect } from "react";

export default function TopicRandRandbetween() {
  const [randomData, setRandomData] = useState([]);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);
  const [diceRolls, setDiceRolls] = useState([]);

  // Random functions reference
  const randomFunctions = [
    { 
      function: "RAND", 
      syntax: "=RAND()", 
      description: "Returns a random number between 0 and 1",
      example: "=RAND() → 0.62341" 
    },
    { 
      function: "RANDBETWEEN", 
      syntax: "=RANDBETWEEN(bottom, top)", 
      description: "Returns a random integer between the specified numbers",
      example: "=RANDBETWEEN(1, 100) → 57" 
    },
    { 
      function: "RANDARRAY", 
      syntax: "=RANDARRAY([rows], [columns])", 
      description: "Returns an array of random numbers between 0 and 1 (Excel 365)",
      example: "=RANDARRAY(5, 3)" 
    },
  ];

  // Generate initial random data
  useEffect(() => {
    generateRandomData();
    generateLotteryNumbers();
    generateDiceRolls();
  }, []);

  const generateRandomData = () => {
    const newData = Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      randomDecimal: Math.random(),
      randomBetween1_100: Math.floor(Math.random() * 100) + 1,
      randomBetween50_150: Math.floor(Math.random() * 101) + 50,
      randomGrade: Math.floor(Math.random() * 41) + 60, // 60-100
    }));
    setRandomData(newData);
  };

  const generateLotteryNumbers = () => {
    const numbers = Array.from({ length: 6 }, () => 
      Math.floor(Math.random() * 49) + 1
    ).sort((a, b) => a - b);
    setLotteryNumbers(numbers);
  };

  const generateDiceRolls = () => {
    const rolls = Array.from({ length: 10 }, () => ({
      roll1: Math.floor(Math.random() * 6) + 1,
      roll2: Math.floor(Math.random() * 6) + 1,
      total: 0,
    })).map(roll => ({
      ...roll,
      total: roll.roll1 + roll.roll2
    }));
    setDiceRolls(rolls);
  };

  const generateRandomNames = () => {
    const firstNames = ["John", "Sarah", "Mike", "Emily", "David", "Lisa", "Chris", "Anna"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis"];
    
    return Array.from({ length: 6 }, () => {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const age = Math.floor(Math.random() * 40) + 20; // 20-59
      const score = Math.floor(Math.random() * 41) + 60; // 60-100
      
      return { firstName, lastName, age, score };
    });
  };

  const [randomNames, setRandomNames] = useState([]);

  useEffect(() => {
    setRandomNames(generateRandomNames());
  }, []);

  const refreshRandomNames = () => {
    setRandomNames(generateRandomNames());
  };

  // Calculate statistics
  const averageScore = randomNames.reduce((sum, person) => sum + person.score, 0) / randomNames.length;
  const averageAge = randomNames.reduce((sum, person) => sum + person.age, 0) / randomNames.length;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#217346] mb-4">
        RAND and RANDBETWEEN Functions in Excel
      </h2>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The RAND and RANDBETWEEN functions are essential for generating random numbers in Excel. 
        RAND produces random decimal numbers between 0 and 1, while RANDBETWEEN generates random 
        integers within a specified range. These functions are volatile and recalculate every time 
        the worksheet changes, making them perfect for simulations, random sampling, and testing scenarios.
      </p>

      {/* Real life example */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-2">
          📌 Real-Life Example
        </h3>
        <p className="text-gray-700">
          For random team assignments, you can use <code>=RANDBETWEEN(1, 4)</code> to assign people 
          to one of four teams. For quality control sampling, <code>=RAND()</code> can help select 
          random products for testing. In educational settings, <code>=RANDBETWEEN(1, 6)</code> 
          simulates dice rolls for probability lessons.
        </p>
      </div>

      {/* Functions Reference */}
      <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          📋 Random Functions Reference
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
              {randomFunctions.map((func, idx) => (
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
            <strong>Random Data Generation and Sampling:</strong> Create random datasets for testing by:
            <ul className="list-disc pl-6 mt-2">
              <li>Generating random decimals between 0-1 using RAND</li>
              <li>Creating random integers in specific ranges using RANDBETWEEN</li>
              <li>Building sample datasets for analysis and testing</li>
              <li>Simulating random events and probabilities</li>
            </ul>
          </li>
          <li>
            <strong>Lottery Number Generator and Dice Simulation:</strong> Build random generators for:
            <ul className="list-disc pl-6 mt-2">
              <li>Creating lottery number picks using RANDBETWEEN</li>
              <li>Simulating dice rolls for games and probability</li>
              <li>Generating random samples for statistical analysis</li>
              <li>Building random team assignments and groupings</li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Solved Example Tables */}
      <div className="space-y-8">
        {/* Random Data Generation Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-[#25a56a]">
              ✅ Random Data Generation and Sampling
            </h3>
            <button
              onClick={generateRandomData}
              className="bg-[#217346] text-white px-4 py-2 rounded hover:bg-[#1a5d36] transition text-sm"
            >
              🔄 Generate New Data
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            This example demonstrates how to use RAND and RANDBETWEEN to create random datasets 
            for testing, simulation, and analysis purposes.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Sample #</th>
                  <th className="px-4 py-2 border">RAND()<br/><span className="text-xs">0 to 1</span></th>
                  <th className="px-4 py-2 border">RANDBETWEEN(1,100)<br/><span className="text-xs">1-100</span></th>
                  <th className="px-4 py-2 border">RANDBETWEEN(50,150)<br/><span className="text-xs">50-150</span></th>
                  <th className="px-4 py-2 border">Random Grade<br/><span className="text-xs">60-100</span></th>
                </tr>
              </thead>
              <tbody>
                {randomData.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">Sample {item.id}</td>
                    <td className="px-4 py-2 border font-mono text-blue-600">
                      {item.randomDecimal.toFixed(5)}
                    </td>
                    <td className="px-4 py-2 border font-semibold text-green-600">
                      {item.randomBetween1_100}
                    </td>
                    <td className="px-4 py-2 border font-semibold text-purple-600">
                      {item.randomBetween50_150}
                    </td>
                    <td className={`px-4 py-2 border font-semibold ${
                      item.randomGrade >= 90 ? "text-green-600" :
                      item.randomGrade >= 80 ? "text-blue-600" :
                      item.randomGrade >= 70 ? "text-yellow-600" : "text-red-600"
                    }`}>
                      {item.randomGrade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Excel Formulas Used</h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <strong>Random Decimal:</strong><br/>
                  =RAND()
                </li>
                <li>
                  <strong>Random 1-100:</strong><br/>
                  =RANDBETWEEN(1, 100)
                </li>
                <li>
                  <strong>Random 50-150:</strong><br/>
                  =RANDBETWEEN(50, 150)
                </li>
                <li>
                  <strong>Random Grade:</strong><br/>
                  =RANDBETWEEN(60, 100)
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-2">Statistical Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Average RAND():</span>
                  <span className="font-semibold text-blue-600">
                    {(randomData.reduce((sum, item) => sum + item.randomDecimal, 0) / randomData.length).toFixed(4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Average 1-100:</span>
                  <span className="font-semibold text-green-600">
                    {(randomData.reduce((sum, item) => sum + item.randomBetween1_100, 0) / randomData.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Average Grade:</span>
                  <span className="font-semibold text-purple-600">
                    {(randomData.reduce((sum, item) => sum + item.randomGrade, 0) / randomData.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Average (Theory):</span>
                  <span className="font-semibold text-gray-600">~50.5 (1-100)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Practical Applications</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-blue-50 rounded">
                <div className="font-semibold text-blue-800">Monte Carlo Simulations</div>
                <div className="text-blue-600 text-xs mt-1">
                  Use RAND() for probability simulations and risk analysis
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <div className="font-semibold text-green-800">A/B Testing</div>
                <div className="text-green-600 text-xs mt-1">
                  Randomly assign users to test groups using RANDBETWEEN
                </div>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <div className="font-semibold text-purple-800">Data Sampling</div>
                <div className="text-purple-600 text-xs mt-1">
                  Create random samples from large datasets for analysis
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lottery and Dice Simulation Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-[#25a56a]">
              ✅ Lottery Number Generator and Dice Simulation
            </h3>
            <div className="space-x-2">
              <button
                onClick={generateLotteryNumbers}
                className="bg-[#217346] text-white px-4 py-2 rounded hover:bg-[#1a5d36] transition text-sm"
              >
                🎱 New Lottery Numbers
              </button>
              <button
                onClick={generateDiceRolls}
                className="bg-[#217346] text-white px-4 py-2 rounded hover:bg-[#1a5d36] transition text-sm"
              >
                🎲 Roll Dice Again
              </button>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            This example shows practical applications of RANDBETWEEN for generating lottery numbers 
            and simulating dice rolls for games and probability analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Lottery Numbers */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3 text-center">🎰 Lottery Number Generator</h4>
              <div className="flex justify-center space-x-2 mb-4">
                {lotteryNumbers.map((number, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md"
                  >
                    {number}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Excel Formula:</strong> =RANDBETWEEN(1, 49)
                </div>
                <div className="text-xs text-gray-500">
                  Generates 6 unique numbers between 1-49
                </div>
              </div>
            </div>

            {/* Dice Statistics */}
            <div className="bg-white p-4 rounded border border-gray-200">
              <h4 className="font-semibold text-[#217346] mb-3 text-center">📊 Dice Roll Statistics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Rolls:</span>
                  <span className="font-semibold">{diceRolls.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Roll:</span>
                  <span className="font-semibold text-green-600">
                    {(diceRolls.reduce((sum, roll) => sum + roll.total, 0) / diceRolls.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Most Common Total:</span>
                  <span className="font-semibold text-blue-600">7</span>
                </div>
                <div className="flex justify-between">
                  <span>Theoretical Average:</span>
                  <span className="font-semibold text-gray-600">7.0</span>
                </div>
              </div>
              <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-700">
                <strong>Probability Note:</strong> 7 is the most likely sum (16.67% probability)
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">Roll #</th>
                  <th className="px-4 py-2 border">Die 1</th>
                  <th className="px-4 py-2 border">Die 2</th>
                  <th className="px-4 py-2 border">Total</th>
                  <th className="px-4 py-2 border">Excel Formula</th>
                </tr>
              </thead>
              <tbody>
                {diceRolls.map((roll, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">Roll {idx + 1}</td>
                    <td className="px-4 py-2 border text-center">
                      <div className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center mx-auto font-bold">
                        {roll.roll1}
                      </div>
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center mx-auto font-bold">
                        {roll.roll2}
                      </div>
                    </td>
                    <td className={`px-4 py-2 border text-center font-bold text-lg ${
                      roll.total === 7 ? "text-green-600" : 
                      roll.total >= 10 ? "text-blue-600" : "text-gray-600"
                    }`}>
                      {roll.total}
                    </td>
                    <td className="px-4 py-2 border font-mono text-xs text-gray-600">
                      =RANDBETWEEN(1,6)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Random Sample Data Example */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold text-[#25a56a]">
              ✅ Random Sample Data Generator
            </h3>
            <button
              onClick={refreshRandomNames}
              className="bg-[#217346] text-white px-4 py-2 rounded hover:bg-[#1a5d36] transition text-sm"
            >
              🔄 Generate New Sample
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            This example demonstrates how RANDBETWEEN can be used to create realistic sample data 
            for testing databases, applications, and analytical models.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-300 text-sm text-left">
              <thead className="bg-[#217346] text-white">
                <tr>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                  <th className="px-4 py-2 border">Age</th>
                  <th className="px-4 py-2 border">Test Score</th>
                  <th className="px-4 py-2 border">Performance</th>
                </tr>
              </thead>
              <tbody>
                {randomNames.map((person, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-4 py-2 border font-medium">{person.firstName}</td>
                    <td className="px-4 py-2 border">{person.lastName}</td>
                    <td className="px-4 py-2 border">{person.age}</td>
                    <td className={`px-4 py-2 border font-semibold ${
                      person.score >= 90 ? "text-green-600" :
                      person.score >= 80 ? "text-blue-600" :
                      person.score >= 70 ? "text-yellow-600" : "text-red-600"
                    }`}>
                      {person.score}
                    </td>
                    <td className="px-4 py-2 border">
                      <div className={`w-full bg-gray-200 rounded-full h-2 ${
                        person.score >= 90 ? "bg-green-500" :
                        person.score >= 80 ? "bg-blue-500" :
                        person.score >= 70 ? "bg-yellow-500" : "bg-red-500"
                      }`} style={{width: `${person.score}%`}}></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-semibold text-[#217346] mb-2">Sample Data Statistics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-blue-50 rounded">
                <div className="text-blue-800 font-semibold">Average Age</div>
                <div className="text-lg font-bold text-blue-900">{averageAge.toFixed(1)}</div>
                <div className="text-xs text-blue-600 mt-1">=RANDBETWEEN(20,59)</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded">
                <div className="text-green-800 font-semibold">Average Score</div>
                <div className="text-lg font-bold text-green-900">{averageScore.toFixed(1)}</div>
                <div className="text-xs text-green-600 mt-1">=RANDBETWEEN(60,100)</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded">
                <div className="text-purple-800 font-semibold">High Performers</div>
                <div className="text-lg font-bold text-purple-900">
                  {randomNames.filter(p => p.score >= 90).length}
                </div>
                <div className="text-xs text-purple-600 mt-1">Scores ≥ 90</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded">
                <div className="text-orange-800 font-semibold">Need Improvement</div>
                <div className="text-lg font-bold text-orange-900">
                  {randomNames.filter(p => p.score < 70).length}
                </div>
                <div className="text-xs text-orange-600 mt-1">Scores &lt; 70</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-6 bg-red-50 p-4 rounded border border-red-200">
        <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Important Notes</h3>
        <ul className="list-disc pl-6 text-red-700 space-y-1">
          <li>RAND and RANDBETWEEN are volatile functions - they recalculate with every worksheet change</li>
          <li>To keep random values static, copy and paste as values (Ctrl+C → Alt+E+S+V)</li>
          <li>RANDBETWEEN includes both endpoints: =RANDBETWEEN(1,6) can return 1, 2, 3, 4, 5, or 6</li>
          <li>For reproducible random numbers, use the same seed value with advanced techniques</li>
          <li>RAND() never returns exactly 0 or 1, only values between them</li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="mt-8 bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-xl font-semibold text-[#25a56a] mb-3">
          ✅ Download Practice Files
        </h3>
        <p className="text-gray-700 mb-4">
          Download these Excel files with the RAND and RANDBETWEEN function exercises already set up. 
          You can experiment with different ranges, create your own random generators, and see how 
          these functions work in real-time.
        </p>
        <div className="space-y-3">
          <a
            href="/random_data_generator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Random Data Generator
          </a>
          <a
            href="/lottery_dice_simulator.xlsx"
            download
            className="block w-full md:w-auto bg-[#217346] text-white px-5 py-2 rounded shadow hover:bg-[#1a5d36] transition text-center"
          >
            📂 Download Lottery & Dice Simulator
          </a>
        </div>
      </div>
    </div>
  );
}