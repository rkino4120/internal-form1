import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/layout.module.css';

const Layout = (props) => {
    const { title, description, children } = props
    const siteTitle = 'Intumit 社内申請'

    return (
        <div className={styles.container}>
            <Head>
            <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description} />
            </Head>

            <header className={styles.header}>
                <h1 className={styles.siteTitle}>
                    <Link href="/">{siteTitle}</Link>
                </h1>
            </header>

            <main>
                <div className={styles.main}>
                {children}
                </div>
            </main>

            <footer>
                <div className={styles.footer}>
                    <div className={styles.copyright}>
                        <p><small>©2021 Intumit Inc.</small></p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Layout