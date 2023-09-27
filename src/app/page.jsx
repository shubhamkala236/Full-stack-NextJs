import Image from 'next/image'
import Hero from 'public/hero.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your products.</h1>
        <p className={styles.desc}>Turning you Ideas into Reality. We bring teams from global tech industry</p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='hero_image' className={styles.img}/>
      </div>
    </div>
  )
}
