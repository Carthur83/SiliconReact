import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials">

      <div className="container">

        <div className="headline">
          <h3>Clients are Loving Our App</h3>
        </div>

        <div className="content-box">
          <img className="img-quote" src="/images/quotes.svg" alt="quote" />

          <div className="stars">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-regular fa-star"></i>
          </div>

          <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas
            lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
          <div className="user">
            <img src="/images/user1.svg" alt="user image" />
            <div className="name">
              <h5>Fannie Summers</h5>
              <p>Designer</p>
            </div>
          </div>
        </div>

        <div className="content-box">
          <img className="img-quote" src="/images/quotes.svg" alt="quote" />

          <div className="stars">
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>
            <i className="fa-solid fa-star checked"></i>

          </div>

          <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla
            tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
          <div className="user">
            <img src="/images/user2.svg" alt="User image" />
            <div className="name">
              <h5>Albert Flores</h5>
              <p>Developer</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Testimonials