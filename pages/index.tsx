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
              <svg
                width="33"
                height="33"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.689 10.263a.989.989 0 0 0-.112-.922 1.004 1.004 0 0 0-.83-.432h-6.543c-.23 0-.454.079-.634.223a.998.998 0 0 0-.351.568l-2.827 13.192a.99.99 0 0 0 .202.835 1.006 1.006 0 0 0 .78.371h4.272a1.015 1.015 0 0 1 .777.363.994.994 0 0 1 .213.825l-1.059 5.438c-.192.993 1.164 1.492 1.67.615l6.733-11.63a.992.992 0 0 0-.37-1.362 1.015 1.015 0 0 0-.504-.133h-3.004a1.015 1.015 0 0 1-.83-.432.993.993 0 0 1-.112-.922l2.529-6.597Z"
                  fill="#A8EB8E"
                />
                <path
                  d="M34.212 34.153a20.056 20.056 0 0 0 5.375-10.03 19.948 19.948 0 0 0-.963-11.319C34.573 2.482 22.804-2.649 12.392 1.368l.628 1.601c9.527-3.674 20.284 1.017 23.99 10.458a18.243 18.243 0 0 1 .88 10.354 18.342 18.342 0 0 1-4.922 9.173l-1.231-1.19a.918.918 0 0 0-1.554.663l.046 3.233c.003.24.103.469.276.637a.92.92 0 0 0 .65.257l3.26-.038a.921.921 0 0 0 .84-.571.9.9 0 0 0-.212-.986l-.831-.806ZM12.82 36.711a18.5 18.5 0 0 1-7.027-5.354 18.289 18.289 0 0 1-3.713-7.979 18.207 18.207 0 0 1 .452-8.775A18.327 18.327 0 0 1 7.046 7.04l1.091 1.05a.918.918 0 0 0 1.554-.663l-.046-3.233a.899.899 0 0 0-.276-.637.914.914 0 0 0-.65-.257l-3.26.038a.92.92 0 0 0-.848.57.9.9 0 0 0 .217.993l.975.942A20.012 20.012 0 0 0 .094 17.98 19.951 19.951 0 0 0 3.35 30.978a20.24 20.24 0 0 0 10.773 8.078 20.425 20.425 0 0 0 13.5-.43l-.627-1.6a18.55 18.55 0 0 1-14.176-.315Z"
                  fill="#A8EB8E"
                />
              </svg>
              <h1>
                Providing HPC Infrastructure as a Service using 100% renewable
                energy
              </h1>
              <svg
                width="25"
                height="32"
                viewBox="0 0 32 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 41a.477.477 0 0 1-.32-.122C15.082 40.34 1 27.582 1 15.792 1 7.635 7.729 1 16 1s15 6.635 15 14.792c0 10.49-14.065 24.48-14.665 25.071A.48.48 0 0 1 16 41Zm0-39.063c-7.747 0-14.05 6.215-14.05 13.855 0 10.39 11.874 22.048 14.036 24.082 2.128-2.183 14.063-14.834 14.063-24.082 0-7.64-6.302-13.854-14.049-13.854Zm0 19.532c-3.174 0-5.757-2.547-5.757-5.677 0-3.13 2.583-5.677 5.757-5.677 3.174 0 5.757 2.546 5.757 5.677 0 3.13-2.583 5.677-5.757 5.677Zm0-10.417c-2.65 0-4.806 2.126-4.806 4.74 0 2.613 2.156 4.74 4.806 4.74s4.806-2.127 4.806-4.74c0-2.614-2.156-4.74-4.806-4.74Z"
                  fill="#A8EB8E"
                  stroke="#A8EB8E"
                  strokeWidth="1"
                />
              </svg>
              <h2>
                Located in the North of Iceland in a conflict free location in
                between continents.
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
