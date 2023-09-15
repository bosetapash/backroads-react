import React from 'react'

const SocialLink = ({ link, itemClass }) => {
      const { href, icon } = link
      return (
            <li>
                  <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
                        <i className={icon}></i>
                  </a>
            </li>
      )
}

export default SocialLink
