import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Faq = () => {

  const [accordionContent, setAccordionContent] = useState([
    {
      id: 1,
      question: 'Is any of my personal information stored in the App?',
      answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendis ut consequat.'
    },
    {
      id: 2,
      question: 'What formats can I download my transaction history in?',
      answer: ''
    },
    {
      id: 3,
      question: 'Can I schedule future transfers?',
      answer: ''
    },
    {
      id: 4,
      question: 'When can I use Banking App services?',
      answer: ''
    },
    {
      id: 5,
      question: 'Can I create my own password that is easy for me to remember?',
      answer: ''
    },
    {
      id: 6,
      question: 'What happens if I forget or lose my password?',
      answer: ''
    },
  ])


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
          accordionContent.map(item => (<AccordionItem key={item.id} item={item}/>))
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