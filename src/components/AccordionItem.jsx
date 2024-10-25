import React, { useState } from 'react'

const AccordionItem = ({ item }) => {

  const [isOpen, setIsOpen] = useState(false);

  function openAccordion() {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-header">{item.question}
        <button onClick={openAccordion} className={`btn-round ${isOpen ? 'active' : ''}`} aria-label="open for answer">
          <i className={`${isOpen ? 'fa-regular fa-chevron-up arrow' : 'fa-regular fa-chevron-down arrow'}`}></i>
        </button>
      </div>
      <div className="accordion-content">
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

export default AccordionItem