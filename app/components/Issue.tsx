'use client';

import { useState } from 'react';
import testIds from '@app/utils/test-ids';
import Link from 'next/link';

export default function Issue({ initialProject }: any) {
  const [project] = useState(initialProject);
  const [activePdf, setActivePdf] = useState(initialProject.pdf);
  const [activePartName, setActivePartName] = useState("Part 1");

  // Handle part selection
  const showPart = (pdfUrl: any, partName: any) => {
    setActivePdf(pdfUrl);
    setActivePartName(partName);
  };

  return (
    <div
      className="relative bg-black text-white min-h-screen"
      data-testid={testIds.PROJECT_DETAILS_PAGE.CONTAINER}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <h1 className="text-3xl font-bold mb-16">
          {project.title}
        </h1>
        
        {/* Viewing Options */}
        <div className="flex justify-center gap-8 mb-10">
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
            Flipbook
          </button>
          <Link href={activePdf ?? ''} target="_blank" className="px-6 py-2 hover:underline">
            PDF
          </Link>
        </div>
        
        {/* Part Indicator */}
        <div className="text-center mb-4">
          <h2 className="text-xl">{activePartName}</h2>
        </div>
        
        {/* Main Content Area */}
        <div className="mb-16">
          {/* Flipbook Embed */}
          <div className="w-full aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
            <iframe 
              src={activePdf} 
              className="w-full h-full" 
              title={`${project.title} - ${activePartName}`} 
              frameBorder="0" 
              allowFullScreen
            />
          </div>
        </div>
        
        {/* Parts Navigation */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Parts</h2>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => showPart(project.pdf, "Part 1")}
              className={`flex flex-col items-center hover:opacity-80 transition-opacity ${activePdf === project.pdf ? 'ring-2 ring-white' : ''}`}
            >
              <div className="w-24 h-16 bg-gray-800 mb-2 overflow-hidden">
                <iframe src={project.pdf} className="w-full h-full pointer-events-none" title="Part 1 Preview" />
              </div>
              <span>Part 1</span>
            </button>
            
            {project.pdf2 && (
              <button 
                onClick={() => showPart(project.pdf2, "Part 2")}
                className={`flex flex-col items-center hover:opacity-80 transition-opacity ${activePdf === project.pdf2 ? 'ring-2 ring-white' : ''}`}
              >
                <div className="w-24 h-16 bg-gray-800 mb-2 overflow-hidden">
                  <iframe src={project.pdf2} className="w-full h-full pointer-events-none" title="Part 2 Preview" />
                </div>
                <span>Part 2</span>
              </button>
            )}
            
            {project.pdf3 && (
              <button 
                onClick={() => showPart(project.pdf3, "Part 3")}
                className={`flex flex-col items-center hover:opacity-80 transition-opacity ${activePdf === project.pdf3 ? 'ring-2 ring-white' : ''}`}
              >
                <div className="w-24 h-16 bg-gray-800 mb-2 overflow-hidden">
                  <iframe src={project.pdf3} className="w-full h-full pointer-events-none" title="Part 3 Preview" />
                </div>
                <span>Part 3</span>
              </button>
            )}
            
            {project.pdf4 && (
              <button 
                onClick={() => showPart(project.pdf4, "Part 4")}
                className={`flex flex-col items-center hover:opacity-80 transition-opacity ${activePdf === project.pdf4 ? 'ring-2 ring-white' : ''}`}
              >
                <div className="w-24 h-16 bg-gray-800 mb-2 overflow-hidden">
                  <iframe src={project.pdf4} className="w-full h-full pointer-events-none" title="Part 4 Preview" />
                </div>
                <span>Part 4</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}