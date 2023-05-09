import React from 'react'

import styles from './NotFound.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h2>
         Not found. Sorry dude
         <br/>
         <span>¯\_(ツ)_/¯</span>
      </h2>
      <br />
      <p className={styles.monolog}>Такої сторінки не існує або вона була видалена. Будь ласка, перевірти коректність url-адреси або спробуйте вернутися сюди пізніше.</p>
    </div>
  )
}

export default NotFoundBlock