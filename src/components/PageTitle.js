import React from 'react'
import style from '../styles/modules/title.module.scss'

export default function pageTitle({children, ...rest}) {
  return (
    <div>
      <h1 className={style.title} {...rest}>{children}</h1>
    </div>
  )
}
