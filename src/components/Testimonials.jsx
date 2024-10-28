import React, { useEffect, useState } from 'react'
import TestimonialsCardItem from './TestimonialsCardItem'

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json();
    setTestimonials(data);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <section id="testimonials">

      <div className="container">

        <div className="headline">
          <h3>Clients are Loving Our App</h3>
        </div>

        {
          testimonials.map(testimonial => (<TestimonialsCardItem key={testimonial.id} testimonial={testimonial}/>))
        }

      </div>

    </section>
  )
}

export default Testimonials