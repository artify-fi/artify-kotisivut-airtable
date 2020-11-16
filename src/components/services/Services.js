import React from "react"
import Title from "../title/Title"
import { Link } from 'gatsby'
import services from "../constants/services"

const Services = () => {
  return (
    <section className='section bg-grey'>
      <Title title='Palvelut' />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text, link } = service

          return (
            <Link to={link} key={id} className='service'>

              {icon}
              <h2>{title}</h2>
              <div className='underline'></div>
              <p>{text}</p>

            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Services
