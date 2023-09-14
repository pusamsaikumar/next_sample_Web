import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer}>
          <Image 
         src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

         fill={true} alt="" className={styles.img}  />
          <div className={styles.imgText} >
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
           <h2 className={styles.desc}>Handicrafting award winning digital experiences.</h2>
          </div>
       </div>
       <div className={styles.textContainer}>
          <div className={styles.item}> 
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet interdum congue. 
            Sed libero ipsum, laoreet a neque a, egestas tincidunt sem. Curabitur enim augue, pellentesque in felis a, 
            ultricies iaculis eros. Donec ligula lorem, consequat in tortor eget, semper tempor odio. Cras vel euismod nunc. 
            <br /> <br />
            Quisque mauris nisl, condimentum vel tristique vitae, tincidunt id justo. Quisque nec venenatis urna. 
            Praesent non nisl id turpis volutpat mollis. Aliquam et mi ut elit posuere iaculis vitae in nisi. Quisque euismod eleifend risus, in pharetra elit faucibus at.
            </p>
          </div>

          <div className={styles.item}> 
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
            Aenean facilisis non odio ac laoreet. Proin tristique tempus nunc nec ornare. Suspendisse potenti. Nulla tristique porta nunc. Cras auctor quam quis leo suscipit, sed tempus urna laoreet. Nullam nulla sem, 
            ullamcorper sed quam id, faucibus ornare felis. Vivamus egestas justo in mauris efficitur sagittis.
            <br/>
              __ Creative Illusions
              <br />
              __ Dynamic Websites
              <br />
              __ Fast and Handy Mobile apps
            </p>
            <Button url="/contact" text="Contact" />
          </div>

       </div>
    </div>
  )
}

export default About;