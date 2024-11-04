import React, { useContext } from 'react'
import AccordionItem from './AccordionItem'
import { AppContext } from '../contexts/AppContext'

const Faq = () => {
  const { accordionItems } = useContext(AppContext);

  return (
    <section id="faq">

      <div className="container">

        <div className="content">

          <div className="headline">
            <h2>Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
          </div>

        </div>


        <div className="accordion">
        {
          accordionItems.map((item) => (<AccordionItem key={item.id} item={item}/>))
        }

        </div>

        <a href="#" className="btn-contact-us btn-primary">
          <span>Contact us now</span>
        </a>

        <div className="contact-cards">

          <div className="contactcard-phone">
            <div>
              <img src="/images/faq/phone.svg" alt="Phone image"/>
            </div>

            <p>Still have questions?</p>

            <a href="#">
              <span>Contact us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="contactcard-speech">
            <div>
              <img src="/images/faq/speechbubble.svg" alt="Speech bubble image"/>
            </div>
            <p>Don't like phone calls?</p>
            <a href="#">
              <span>Contact us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Faq