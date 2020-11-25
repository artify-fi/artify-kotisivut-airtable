import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Artify yhteystiedot ja asiointi" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Ota Yhteyttää</h3>
          <form action="https://formspree.io/f/mknprozl" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="nimi"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="viesti"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Lähetä vesti
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact