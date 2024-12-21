import React, { useState, useRef, useEffect } from 'react';
import { ABOUT_TEXT_WE } from '../constants';
import { ABOUT_TEXT_EDU } from '../constants';
import { ABOUT_TEXT_PERS } from '../constants';


const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-b border-slate-200">
      <button onClick={() => onClick(index)} className="w-full flex justify-between items-center py-5 text-neutral-200">
        <span>{title}</span>
        <span className="text-neutral-200 transition-transform duration-300">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out`}
        style={{ maxHeight: '0px' }}>
          <div className="pb-5 text-sm text-neutral-200">
        {content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'Professional Experience',
      content: ABOUT_TEXT_WE,
    },
    {
      title: 'Professional Qualifications',
      content: ABOUT_TEXT_EDU,
    },
    {
      title: 'Beyond the Desk',
      content: ABOUT_TEXT_PERS,
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Accordion;


