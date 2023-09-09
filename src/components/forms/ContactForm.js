import useInput from '../../hooks/use-input';
import styles from './ContactForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const ContactForm = (props) => {


  let formIsValid = false;

  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(nameValue, emailValue, subjectValue, messageValue);

    resetName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  const nameClasses = nameHasError
    ? `${styles['form-control']} ${styles['invalid']}`
    : styles['form-control'];
  const emailClasses = emailHasError
    ? `${styles['form-control']} ${styles['invalid']}`
    : styles['form-control'];
  const subjectClasses = subjectHasError
    ? `${styles['form-control']} ${styles['invalid']}`
    : styles['form-control'];
  const messageClasses = messageHasError
    ? `${styles['form-control']} ${styles['invalid']}`
    : styles['form-control'];

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['control-group']}>
        <div className={nameClasses}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className={styles['error-text']}>Please enter a first name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">Your email</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={styles['error-text']}>
            Please enter a valid email address.
          </p>
        )}
      </div>
      <div className={subjectClasses}>
        <label htmlFor="name">Subject</label>
        <input
          type="text"
          id="subject"
          value={subjectValue}
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
        />
        {subjectHasError && (
          <p className={styles['error-text']}>Please enter a subect.</p>
        )}
      </div>
      <div className={messageClasses}>
        <label htmlFor="name">Message</label>
        <input
          type="text"
          id="message"
          value={messageValue}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {messageHasError && (
          <p className={styles['error-text']}>Please enter a message.</p>
        )}
      </div>
      <div className={styles['form-actions']}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
