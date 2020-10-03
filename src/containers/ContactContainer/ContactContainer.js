import React from "react";

export default function ContactContainer() {
  return (
    <section
      className="contact padding-top-bottom custom__outline text-center"
      id="contact"
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title="contact me"
        >
          contact me
        </h2>
        <form
          className="my__form form-row mt-5 "
          method="POST"
          name="contact__main"
        >
          <input type="hidden" name="form-name" value="contact__main" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className=" col-lg-6 ">
            <div className="input-group ">
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <label htmlFor="username" className="sr-only">
                Your name
              </label>
              <input
                className="w-100 my-2 form-control-lg"
                id="username"
                type="text"
                name="YourName"
                placeholder="Your Name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                className="w-100 my-2 form-control-lg"
                id="email"
                type="email"
                name="Email"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                className="w-100 my-2 form-control-lg mb-lg-0"
                id="subject"
                type="text"
                name="Subject"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className=" col-lg-6 ">
            <div className="input-group h-100 textarea__group">
              <label htmlFor="message" className="sr-only">
                message
              </label>
              <textarea
                className="w-100 p-3 form-control-lg "
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className="input-group justify-content-start">
            <input
              className="m-1 my-2 custom__submit mt-5  "
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
