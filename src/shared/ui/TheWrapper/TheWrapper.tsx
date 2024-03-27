import React from 'react'

import c from 'classnames'

import s from './TheWrapper.module.scss'

export const TheWrapper = ({ main, children }) => {
  return <div className={c(s.wrapper, { [s.main]: main })}>{children}</div>
}
