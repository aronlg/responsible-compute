import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section/Section'
import Contact from '../components/contact/Contact'
import s from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RC</title>
        <meta name="description" content="Built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section>
          <div className={s.content}>
            <div className={s.logo}>
              <Image
                src="/logo.png"
                alt="Responsible Compute."
                priority
                width="620"
                height="144"
              />
            </div>
            <div className={s.text}>
              <h1>
                <span className={s.dot}>
                  <svg aria-hidden="true" height="18" width="18">
                    <circle r="50%" cx="50%" cy="50%" fill="#A8EB8E"></circle>
                  </svg>
                </span>
                Providing HPC Infrastructure as a Service using 100% renewable
                energy
              </h1>
              <h2>
                <span className={s.dot}>
                  <svg aria-hidden="true" height="18" width="18">
                    <circle r="50%" cx="50%" cy="50%" fill="#A8EB8E"></circle>
                  </svg>
                </span>
                Located in the North of Iceland in a conflict free location in
                between continents
              </h2>
            </div>
          </div>
          <div className={s.img}>
            <Image
              src="https://images.unsplash.com/photo-1546609970-c10babead09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="Skógarfoss"
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1546609970-c10babead09a?w=10"
              width={627}
              height={630}
              layout="responsive"
            />
          </div>
        </Section>
        <Section>
          <div className={s.contact}>
            <p className={s.msg}>
              Contact us using the form below or via{' '}
              <a href="mailto:info@responsiblecompute.com">
                info@responsiblecompute.com
              </a>
            </p>
            <div className={s.form}>
              <Contact />
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}

export default Home
