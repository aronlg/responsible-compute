import s from './Section.module.scss'

interface Props {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <section className={s.section}>{children}</section>
}

export default Section
