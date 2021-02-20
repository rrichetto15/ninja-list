import Head from 'next/head';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ad
          dicta id iusto, veniam molestiae sequi illum? Voluptas ratione dolor
          labore aspernatur, nisi quis fugit quo! Doloremque, dolorem?
          Praesentium, totam.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ad
          dicta id iusto, veniam molestiae sequi illum? Voluptas ratione dolor
          labore aspernatur, nisi quis fugit quo! Doloremque, dolorem?
          Praesentium, totam.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
