import { useParams } from "react-router-dom";
import { useState } from "react";
import WebHeader from "../components/WebHeader";
import WebFooter from "../components/WebFooter";

// Import topic components
import TopicIntroExcel from "./sections/section1/TopicIntroExcel";
import TopicCreateTable from "./sections/section1/TopicCreateTable";
import TopicAirthmeticOperations from "./sections/section1/TopicAirthmeticOperations";
import TopicBooleanOperations from './sections/section1/TopicBooleanOperations';
import TopicSumAverageMaxMin from "./sections/section2/TopicSumAverageMaxMin";
import TopicCountCountaCountBlank from "./sections/section2/TopicCountCountaCountBlank";
export default function SectionPage() {
  const { id } = useParams();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const sections = {
    intro: {
      title: "Introduction & Basics",
      topics: [
        "Introduction to MS Office and MS Excel",
        "Creating and formatting table",
        "Arithmetic Operations",
        "Boolean Operations",
      ],
    },
    basic: {
      title: "Basic Functions",
      topics: [
        "SUM, AVERAGE, MAX, MIN",
        "COUNT, COUNTA, COUNTBLANK",
        "LOWER, UPPER, PROPER",
        "IF, NESTED IF",
        "COUNTIF, SUMIF, AVERAGEIF",
      ],
    },
    basic2: {
      title: "Basic Functions (Cont.)",
      topics: [
        "CONCAT, TEXTJOIN",
        "LARGE, SMALL",
        "RAND, RANDBETWEEN",
        "AND, OR logical functions",
      ],
    },
    adv: {
      title: "Advanced Functions",
      topics: [
        "VLOOKUP and HLOOKUP",
        "INDEX, MATCH",
        "FORECAST, FUTURE VALUE",
        "COUNTIFS, SUMIFS",
      ],
    },
    adv2: {
      title: "Advanced Functions (Cont.)",
      topics: ["IFS function", "MAXIFS, MINIFS", "IFERROR", "SUMPRODUCT"],
    },
    data: {
      title: "Data Analysis & Tools",
      topics: [
        "Data Validation",
        "Conditional Formatting",
        "Charts and Data Visualization",
        "PivotTables",
        "What-If Analysis",
      ],
    },
  };

  const section = sections[id];

  // Mapping topics -> components
  const topicComponents = {
    "Introduction to MS Office and MS Excel": <TopicIntroExcel />,
    "Creating and formatting table": <TopicCreateTable />,
    "Arithmetic Operations": <TopicAirthmeticOperations />,
    "Boolean Operations": <TopicBooleanOperations />,
    "SUM, AVERAGE, MAX, MIN": <TopicSumAverageMaxMin />,
    "COUNT, COUNTA, COUNTBLANK": <TopicCountCountaCountBlank />,
    "LOWER, UPPER, PROPER": <div>Content for LOWER, UPPER, PROPER coming soon...</div>,
    "IF, NESTED IF": <div>Content for IF, NESTED IF coming soon...</div>,
    "COUNTIF, SUMIF, AVERAGEIF": <div>Content for COUNTIF, SUMIF, AVERAGEIF coming soon...</div>,
    "CONCAT, TEXTJOIN": <div>Content for CONCAT, TEXTJOIN coming soon...</div>,
    "LARGE, SMALL": <div>Content for LARGE, SMALL coming soon...</div>,
    "RAND, RANDBETWEEN": <div>Content for RAND, RAN DBETWEEN coming soon...</div>,
    "AND, OR logical functions": <div>Content for AND, OR logical functions coming soon...</div>,
    "VLOOKUP and HLOOKUP": <div>Content for VLOOKUP and HLOOKUP coming soon...</div>,
    "INDEX, MATCH": <div>Content for INDEX, MATCH coming soon...</div>, 
  };

  if (!section) {
    return <div className="p-6">Section not found</div>;
  }

  return (
    <div className="bg-[#f5f7fa] text-gray-800 min-h-screen flex flex-col">
      <WebHeader />

      <div className="flex flex-1 min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 border-r border-gray-200 sticky top-0 h-screen">
          <h2 className="text-xl font-semibold text-[#217346] mb-4">
            {section.title}
          </h2>
          <ul className="space-y-2">
            {section.topics.map((t, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedTopic(t)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition ${
                    selectedTopic === t
                      ? "bg-[#217346] text-white"
                      : "text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {selectedTopic ? (
            <div>
              {topicComponents[selectedTopic] || (
                <p className="text-gray-500">
                  Content for "{selectedTopic}" is coming soon...
                </p>
              )}
            </div>
          ) : (
            <p className="text-gray-500">
              Please select a topic from the sidebar to view details.
            </p>
          )}
        </main>
      </div>

      <WebFooter />
    </div>
  );
}
