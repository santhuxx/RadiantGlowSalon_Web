import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Want to send feedback? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="yourmail@gmail.com"
              className="form_input mt-1 cursor-text"
            ></input>
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know your message"
              className="form_input mt-1 cursor-text"
            ></input>
          </div>
          <div className="sm:col_span_2">
            <label htmlFor="message" className="form_label">
              Your Message
            </label>
            <textarea
              rows={5}
              type="text"
              id="message"
              placeholder="Leave a message..."
              className="form_input mt-1 cursor-text"
            ></textarea>
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
