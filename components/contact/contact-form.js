import classes from "./contact-form.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>Sunt aliqua ea aliqua reprehenderit duis amet sint.</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your namename</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="5"></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
