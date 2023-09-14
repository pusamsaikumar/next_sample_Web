import Image from 'next/image';
import Hero from 'public/hero.png';
import styles from "./page.module.css";
import Button from '@/components/button/Button';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your ideas into Reality. we bring together global Tech Industry.
        </p>
        {/* <button className={styles.button}> See Your Works</button> */}
        <Button url={"/portpolio" } text={"See Your Works"} />
      </div>
      <div className={styles.item}>
           {/* for local project */}
    <Image src={Hero} alt='' className={styles.img} />  
      {/* outside src */}
      {/* <Image src={"https://images.pexels.com/photos/18224021/pexels-photo-18224021/free-photo-of-city-road-street-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        width={500} height={500}
      /> */}
      </div>
    
    </div>
    )
}
