import React, { useState } from "react";
import {
    FaCheckCircle,
    FaArrowRight,
    FaCalculator,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WebHeader from "../components/WebHeader";
import WebFooter from "../components/WebFooter";

export default function ExcelMastery() {


    const courseOutline = [
        {
            title: "Introduction & Basics",
            id: "intro",
            topics: [
                "Introduction to MS Office and MS Excel",
                "Creating and formatting table",
                "Arithmetic Operations",
                "Boolean Operations",
            ],
        },
        {
            title: "Basic Functions",
            id: "basic",
            topics: [
                "SUM, AVERAGE, MAX, MIN",
                "COUNT, COUNTA, COUNTBLANK",
                "LOWER, UPPER, PROPER",
                "IF, NESTED IF",
                "COUNTIF, SUMIF, AVERAGEIF",
            ],
        },
        {
            title: "Basic Functions (Cont.)",
            id: "basic2",
            topics: [
                "CONCAT, TEXTJOIN",
                "LARGE, SMALL",
                "RAND, RANDBETWEEN",
                "AND, OR logical functions",
            ],
        },
        {
            title: "Advanced Functions",
            id: "adv",
            topics: [
                "VLOOKUP and HLOOKUP",
                "INDEX, MATCH",
                "FORECAST, FUTURE VALUE",
                "COUNTIFS, SUMIFS",
            ],
        },
        {
            title: "Advanced Functions (Cont.)",
            id: "adv2",
            topics: [
                "IFS function",
                "MAXIFS, MINIFS",
                "IFERROR",
                "SUMPRODUCT",
            ],
        },
        {
            title: "Data Analysis & Tools",
            id: "data",
            topics: [
                "Data Validation",
                "Conditional Formatting",
                "Charts and Data Visualization",
                "PivotTables",
                "What-If Analysis",
            ],
        },
    ];

    const functionExamples = [
        {
            title: "VLOOKUP Function",
            explanation:
                "VLOOKUP is used to search for a value in the first column of a range and return a value in the same row from a specified column.",
            syntax:
                "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
            usage:
                "Perfect for finding specific information in large datasets, such as looking up an employee's department based on their ID.",
            example:
                '=VLOOKUP("A23", A2:D100, 3, FALSE)\nThis formula looks for "A23" in the first column of range A2:D100 and returns the value from the third column of the matching row.',
        },
        {
            title: "IF Function",
            explanation:
                "The IF function performs a logical test and returns one value for a TRUE result, and another for a FALSE result.",
            syntax: "=IF(logical_test, value_if_true, [value_if_false])",
            usage:
                "Commonly used for conditional calculations, flagging data that meets certain criteria, or creating conditional formatting rules.",
            example:
                '=IF(B2 > 75, "Pass", "Fail")\nThis formula checks if the value in cell B2 is greater than 75. If true, it returns "Pass"; otherwise, it returns "Fail".',
        },
        {
            title: "SUMIFS Function",
            explanation:
                "SUMIFS adds all numbers in a range of cells based on multiple criteria.",
            syntax:
                "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
            usage:
                "Ideal for summing values that meet multiple conditions, such as total sales in a specific region during a certain time period.",
            example:
                '=SUMIFS(C2:C100, A2:A100, "West", B2:B100, ">1000")\nThis formula sums all values in range C2:C100 where the corresponding cell in column A is "West" and the value in column B is greater than 1000.',
        },
    ];

    return (
        <div className="bg-[#f5f7fa] text-gray-800">
            {/* Header */}
            
<WebHeader/>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#217346]/90 to-[#25a56a]/90 text-white py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Master Microsoft Excel From Beginner to Advanced
                    </h2>
                    <p className="text-lg mb-6">
                        Learn all essential Excel functions, formulas, data analysis techniques,
                        and visualization tools with detailed explanations and practical examples.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-[#ff6b6b] hover:bg-[#ff5252] px-8 py-3 rounded-full font-semibold shadow-md transition transform hover:-translate-y-1"
                    >
                        Start Learning Now
                    </a>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-center text-3xl font-bold text-[#217346] mb-12">
                        Excel Course Outline
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {courseOutline.map((card) => (
                            <div
                                key={card.id}
                              
                                className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="bg-[#217346] text-white text-center py-4">
                                    <h3 className="text-lg font-semibold">{card.title}</h3>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2 text-sm">
                                        {card.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start">
                                                <FaCheckCircle className="text-[#217346] mr-2 mt-1" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-100 py-3 text-center">
                                    <Link
                                        to={`/section/${card.id}`}
                                        className="text-[#217346] font-semibold inline-flex items-center gap-1 hover:underline"
                                    >
                                        Explore Section <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Examples Section */}
            <section className="bg-[#eef5f1] py-16">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-center text-3xl font-bold text-[#217346] mb-12">
                        Function Examples
                    </h2>
                    <div className="space-y-8">
                        {functionExamples.map((func, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-[#217346] flex items-center gap-2 text-xl font-semibold mb-4">
                                    <FaCalculator /> {func.title}
                                </h3>
                                <p><strong>Explanation:</strong> {func.explanation}</p>
                                <p><strong>Syntax:</strong> {func.syntax}</p>
                                <p><strong>Usage:</strong> {func.usage}</p>
                                <div className="bg-gray-100 border-l-4 border-[#217346] p-4 rounded mt-3 whitespace-pre-wrap">
                                    {func.example}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
       

           <WebFooter/>
        </div>
    );
}
