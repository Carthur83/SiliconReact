import React from 'react'

const Faq = () => {
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

          <div className="accordion-item radius-8-top">
            <div className="accordion-header">Is any of my personal information stored in the App?
              <button className="btn-round" aria-label="open for answer">
                <i className="fa-regular fa-chevron-down arrow"></i>
              </button>
            </div>
            <div className="accordion-content">
              <p></p>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">What formats can I download my transaction history in?
              <button className="btn-round" aria-label="open for answer">
                <i className="fa-regular fa-chevron-down arrow"></i>
              </button>
            </div>
            <div className="accordion-content">
              <p></p>
            </div>
          </div>

          <div className="accordion-item active">
            <div className="accordion-header">Can I schedule future transfers?
              <button className="btn-round active">
                <i className="fa-regular fa-chevron-up"></i>
              </button>
            </div>
            <div className="accordion-content">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.
                Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis
                accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse
                ut consequat.</p>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">When can I use Banking App services?
              <button className="btn-round" aria-label="open for answer">
                <i className="fa-regular fa-chevron-down arrow"></i>
              </button>
            </div>
            <div className="accordion-content">
              <p></p>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">Can I create my own password that is easy for me to remember?
              <button className="btn-round" aria-label="open for answer">
                <i className="fa-regular fa-chevron-down arrow"></i>
              </button>
            </div>
            <div className="accordion-content">
              <p></p>
            </div>
          </div>

          <div className="accordion-item radius-8-bottom">
            <div className="accordion-header ">What happens if I forget or lose my password?
              <button className="btn-round" aria-label="open for answer">
                <i className="fa-regular fa-chevron-down arrow"></i>
              </button>
            </div>
            <div className="accordion-content">
              <p></p>
            </div>
          </div>

        </div>

        <a href="#" className="btn-contact-us btn-primary">
          <span>Contact us now</span>
        </a>

        <div className="contact-cards">

          <div className="contactcard-phone">
            <div>
              <img src="/images/phone.svg" alt="Phone image"/>
            </div>

            <p>Still have questions?</p>

            <a href="#">
              <span>Contact us</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="contactcard-speech">
            <div>
              <img src="/images/speechbubble.svg" alt="Speech bubble image"/>
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