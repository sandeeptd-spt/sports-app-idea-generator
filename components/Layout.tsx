import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

interface Tab {
  label: string;
  content: React.ReactNode;
}

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: Tab[] = [
    { label: 'Generated Ideas', content: <div>Generated Ideas Content</div> },
    { label: 'Saved Ideas', content: <div>Saved Ideas Content</div> },
    { label: 'Marketplace', content: <div>Marketplace Content</div> },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const isTabActive = (index: number) => activeTab === index

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 via-green-500 to-red-500 p-4'>
      <div className='mb-4'>
        <ul className='flex space-x-4'>
          {tabs.map((tab, index) => (
            <li key={index} className='px-4 py-2 rounded-md cursor-pointer'>
              <button
                className={`w-full px-4 py-2 rounded-md ${
                  isTabActive(index)
                    ? 'bg-white text-gray-800'
                    : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => handleTabClick(index)}
                aria-label={`Switch to ${tab.label}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-white p-4 rounded-md'>
        <Transition
          show={true}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          {tabs[activeTab].content}
        </Transition>
      </div>
    </div>
  );
};

export default Layout;