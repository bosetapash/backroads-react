import React from 'react'

const Service = (service) => {
      const { title, info } = service
      return (
            <article className="service">
                  <span className="service-icon">
                        <i className="fas fa-wallet fa-fw"></i>
                  </span>
                  <div className="service-info">
                        <h4 className="service-title">{title}</h4>
                        <p className="service-text">{info}</p>
                  </div>
            </article>
      )
}

export default Service
