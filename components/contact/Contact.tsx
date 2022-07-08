import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import cx from 'classnames'
import s from './Contact.module.scss'

interface FormInput {
  name: string
  email: string
  message: string
}

interface Info {
  type: 'success' | 'error'
  message: string
}

const ErrorMessage = ({ message }: { message: string }) => (
  <div className={s.error}>{message}</div>
)

const InfoMessage = ({ type = 'success', message }: Info) => (
  <div className={cx(s.info)}>
    <div className={s.icon}>
      {type === 'success' ? (
        <AiOutlineCheckCircle size="1.5em" color="#5CA625" />
      ) : (
        <AiOutlineCloseCircle size="1.5em" color="#ff3333" />
      )}
    </div>
    <span>{message}</span>
  </div>
)

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formSuccess, setFormSuccess] = useState<boolean>(false)
  const [formError, setFormError] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsLoading(true)
    const config = {
      method: 'post',
      url: `/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    try {
      const response = await axios(config)
      if (response.status === 200) {
        reset()
        setIsLoading(false)
        setFormSuccess(true)
      }
    } catch (err) {
      console.log(err)
      setIsLoading(false)
      setFormError(true)
    }
  }

  return (
    <div className={s.contact}>
      <form onSubmit={handleSubmit(onSubmit)} id="contact">
        <div className={s.field}>
          <label htmlFor="name">Name</label>
          <input
            className={s.input}
            {...register('name', { required: true })}
          />
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
        {/* <input className={s.btn} type="submit" value={<BeatLoader />} /> */}
      </form>
      <button type="submit" className={s.btn} form="contact">
        {isLoading ? <BeatLoader color="#5CA625" size="10" /> : 'Send'}
      </button>
      {formSuccess && !formError && (
        <InfoMessage
          type="success"
          message="Message recieved. Thank you for contacting us."
        />
      )}
      {formError && (
        <InfoMessage
          type="error"
          message="Something went wrong. Please try again or contact us using the email address above"
        />
      )}
    </div>
  )
}

export default Contact
