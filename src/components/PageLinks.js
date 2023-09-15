import React from 'react'
import { singleLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
      // console.log(parentClass, itemClass)
      return (
            <ul className={parentClass}>
                  {singleLinks.map((pageLink) => {
                        return <PageLink key={pageLink.id} link={pageLink} itemClass={itemClass} />
                  })}
            </ul>
      )
}

export default PageLinks
