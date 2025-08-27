import React from 'react'
import {
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";
export default function WebFooter() {
  return (
    <div>
           <footer className="bg-[#2c3e50] text-white py-12">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                        <div className="flex-1 min-w-[250px]">
                            <h3 className="text-lg font-semibold mb-4">Excel Mastery</h3>
                            <p>Comprehensive Excel learning resource with detailed explanations and examples.</p>
                        </div>
                        <div className="flex-1 min-w-[250px]">
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-[#25a56a]">Home</a></li>
                                <li><a href="#" className="hover:text-[#25a56a]">Basic Functions</a></li>
                                <li><a href="#" className="hover:text-[#25a56a]">Advanced Functions</a></li>
                            </ul>
                        </div>
                        <div className="flex-1 min-w-[250px]">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><FaEnvelope /> contact@excelmastery.com</li>
                                <li className="flex items-center gap-2"><FaPhone /> +1 (555) 123-4567</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/20 pt-4 text-center">
                        <p>&copy; 2023 Excel Mastery. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    </div>
  )
}
