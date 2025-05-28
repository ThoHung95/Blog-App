import Link from 'next/link';
import styles from './AuthLinks.module.css';

function AuthLinks() {
  //temporary
  const status = 'notauthenticated';
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href='/login'>Login</Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className={styles.links}>Logout</span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
