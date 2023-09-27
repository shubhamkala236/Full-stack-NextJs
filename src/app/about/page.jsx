import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      {/* Image container  */}
      <div className={styles.imgContainer}>
        <Image src="/pexels-joyston-judah-933054.jpg" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Stories from far lands</h1>
          <h2 className={styles.timgDesc}>Experience the nature and diversity.</h2>
        </div>
      </div>
      {/* text Container  */}
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            A mountain belt is many tens to hundreds of kilometres wide and hundreds to thousands of kilometres long. It stands above the surrounding surface, which may be a coastal plain, as along the western Andes in northern Chile, or a high plateau, as within and along the Plateau of Tibet in southwest China. Mountain ranges or chains extend tens to hundreds of kilometres in length. Individual mountains are connected by ridges and separated by valleys. Within many mountain belts are plateaus, which stand high but contain little relief. Thus, for example, the Andes constitute a mountain belt that borders the entire west coast of South America; within it are both individual ranges, such as the Cordillera Blanca in which lies Peru’s highest peak, Huascarán, and the high plateau, the Altiplano, in southern Peru and western Bolivia.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            A mountain belt is many tens to hundreds of kilometres wide and hundreds to thousands of kilometres long. It stands above the surrounding surface, which may be a coastal plain, as along the western Andes in northern Chile, or a high plateau, as within and along the Plateau of Tibet in southwest China. Mountain ranges or chains extend tens to hundreds of kilometres in length. Individual mountains are connected by ridges and separated by valleys. Within many mountain belts are plateaus, which stand high but contain little relief. Thus, for example, the Andes constitute a mountain belt that borders the entire west coast of South America; within it are both individual ranges, such as the Cordillera Blanca in which lies Peru’s highest peak, Huascarán, and the high plateau, the Altiplano, in southern Peru and western Bolivia.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
