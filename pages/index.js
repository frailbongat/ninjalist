import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam
        praesentium iure aut ex corporis dignissimos placeat accusamus quis.
        Cum.
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
};

export default Home;
