import { useForm, SubmitHandler } from 'react-hook-form'
import cx from 'classnames'
import s from './Contact.module.scss'

interface IFormInput {
  name: string
  email: string
  message: string
}

interface IErrorMessage {
  message: string
}

const FormGroup = () => (
  <div className={s.group}>
    <input />
  </div>
)

const ErrorMessage = ({ message }: IErrorMessage) => (
  <div className={s.error}>{message}</div>
)

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.contact}>
      <div className={s.field}>
        <label htmlFor="name">Name</label>
        <input className={s.input} {...register('name', { required: true })} />
        {errors.name && <ErrorMessage message="Name is required" />}
      </div>
      <div className={s.field}>
        <label htmlFor="email">Email</label>
        <input
          className={s.input}
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && <ErrorMessage message="Email is invalid" />}
      </div>
      <div className={s.field}>
        <label htmlFor="message">Message</label>
        <textarea
          className={cx(s.input, s.textarea)}
          {...register('message', { required: true })}
        />
        {errors.message && <ErrorMessage message="Message is required" />}
      </div>
      <input className={s.btn} type="submit" value="Send" />
    </form>
  )
}

export default Contact
