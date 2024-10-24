import React from 'react'

const Features = () => {
  return (
    <section id="features">

      <div className="container">

        <div className="img-mobile">
          <img src="/images/mobile2.svg" alt="" />
        </div>

        <div className="content">
          <h2>App Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus
            facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="cards">
          <div className="card-image">
            <img src="/images/credit-card.svg" alt="" />
          </div>
          <div className="text">
            <h3>Easy Payments</h3>
            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
          </div>
        </div>

        <div className="cards">
          <div className="card-image">
            <img src="/images/shield.svg" alt="" />
          </div>
          <div className="text">
            <h3>Data Security</h3>
            <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
          </div>
        </div>

        <div className="cards">
          <div className="card-image">
            <img src="/images/bars-graphic.svg" alt="" />
          </div>
          <div className="text">
            <h3>Cost Statistics</h3>
            <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo. </p>
          </div>
        </div>

        <div className="cards">
          <div className="card-image">
            <img src="/images/communication.svg" alt="" />
          </div>
          <div className="text">
            <h3>Support 24/7</h3>
            <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
          </div>
        </div>

        <div className="cards">
          <div className="card-image">
            <img src="/images/wallet.svg" alt="" />
          </div>
          <div className="text">
            <h3>Regular Cashback</h3>
            <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
          </div>
        </div>

        <div className="cards">
          <div className="card-image">
            <img src="/images/happy.svg" alt="" />
          </div>
          <div className="text">
            <h3>Top Standards</h3>
            <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Features