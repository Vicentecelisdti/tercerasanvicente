import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FaqItem } from '../types';

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggleFaq(index)}>
            <span>{faq.q}</span>
            {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {openFaq === index && (
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
