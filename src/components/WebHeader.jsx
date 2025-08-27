import React from 'react'
import { FaChartBar, FaFileExcel, FaHome, FaQuestionCircle, FaTable } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function WebHeader() {

    const navigate = useNavigate()
  return (
    <>
      <header className="bg-gradient-to-r from-[#217346] to-[#25a56a] text-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3" onClick={()=>navigate('/')}>
                        <FaFileExcel className="text-4xl" />
                        <h1 className="text-xl font-semibold">Excel Mastery</h1>
                    </div>
                    <nav>
                        <ul className="flex gap-6 flex-wrap justify-center mt-3 md:mt-0">
                            <li>
                                <a href="#" className="hover:bg-white/20 px-3 py-1 rounded transition">
                                    <FaHome className="inline mr-1" /> Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white/20 px-3 py-1 rounded transition">
                                    Functions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white/20 px-3 py-1 rounded transition">
                                    <FaChartBar className="inline mr-1" /> Data Analysis
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white/20 px-3 py-1 rounded transition">
                                    <FaTable className="inline mr-1" /> Formatting
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-white/20 px-3 py-1 rounded transition">
                                    <FaQuestionCircle className="inline mr-1" /> About
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
    </>
  )
}
