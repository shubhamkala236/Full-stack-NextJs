import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={17} height={17} className={styles.icon} alt='website img' />
        <Image src="/2.png" width={17} height={17} className={styles.icon} alt='website img' />
        <Image src="/3.png" width={17} height={17} className={styles.icon} alt='website img' />
        <Image src="/4.png" width={17} height={17} className={styles.icon} alt='website img' />
      </div>
    </div>
  )
}

export default Footer