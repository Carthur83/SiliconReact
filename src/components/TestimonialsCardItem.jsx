import React from 'react'
import StarRatingItem from './StarRatingItem';

const TestimonialsCardItem = ({ testimonial }) => {

  const isCheckedList = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= testimonial.starRating) {
      isCheckedList.push(true);
    } else {
      isCheckedList.push(false);
    }
  }

  return (
    <div className="content-box">
      <img className="img-quote" src="/images/testimonials/quotes.svg" alt="quote" />


      <div className="stars">
        {
          isCheckedList.map((item, index) => (<StarRatingItem key={index} item={item} />))
        }
      </div>

      <p>{testimonial.comment}</p>
      <div className="user">
        <img src={testimonial.avatarUrl} alt="user image" />
        <div className="name">
          <h5>{testimonial.author}</h5>
          <p>{testimonial.jobRole}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCardItem