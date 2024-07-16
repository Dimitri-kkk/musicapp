import Head from 'next/head';
import {HeartButton} from './heart-button-js';
import '../../styles/styles.scss'

export const Heart=() => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heart Button App</title>
        <meta name="description" content="A heart button that toggles between like and unlike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeartButton />
      </main>
    </div>
  );
}
     