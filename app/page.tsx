import styles from "./page.module.css";
import Seed from "./seed";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={styles.banner}>
          <img className={styles.logo} src="https://www.webstep.no/wp-content/uploads/2022/04/Webstep-logo-sort-RGB.png"></img>
        </div>
      <div className={styles.grid} style={{width: "fit-content"}}>
        <aside className={styles.left}>
        <img  src="https://www.freeiconspng.com/uploads/christmas-tree-icon-png-0.png"/>
        </aside>
        <div className={styles.middle}>
       
        <div className={styles.seeds}>
          <div className={styles.seedsLeft}>
            {[...Array(6)].map((e, i) => <Seed key ={i} index={i}/>)}
          </div>
          <div className={styles.seedsRight}>
          {[...Array(6)].map((e, i) => <Seed key={i+6} index={i+6}/>)}
          </div>
        </div>
      </div>
      <aside className={styles.right}>
        <img src="https://www.freeiconspng.com/uploads/christmas-tree-icon-4.png"/>
      </aside>
      </div>
    </main>
  );
}
