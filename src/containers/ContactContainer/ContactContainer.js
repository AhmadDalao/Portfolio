import React from "react";
import { contactData } from "../../portfolioData";
import "./ContactContainer.css";

export default function ContactContainer() {
  return (
    <section
      className="contact padding-top-bottom custom__outline text-center"
      id={contactData.id}
    >
      <div className="container">
        <h2
          className="h2__style text-uppercase d-inline-block position-relative custom__underline mb-5"
          data-title={contactData.contactText}
        >
          {contactData.contactText}
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
                {contactData.inputName}
              </label>
              <input
                className="w-100 my-2 form-control"
                id="username"
                type="text"
                name="YourName"
                placeholder={contactData.inputName}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="sr-only">
                {contactData.inputEmail}
              </label>
              <input
                className="w-100 my-2 form-control"
                id="email"
                type="email"
                name="Email"
                placeholder={contactData.inputEmail}
              />
            </div>
            <div className="input-group">
              <label htmlFor="subject" className="sr-only">
                {contactData.inputSubject}
              </label>
              <input
                className="w-100 my-2 form-control mb-lg-0"
                id="subject"
                type="text"
                name="Subject"
                placeholder={contactData.inputSubject}
              />
            </div>
          </div>
          <div className=" col-lg-6 ">
            <div className="input-group h-100 textarea__group">
              <label htmlFor="message" className="sr-only">
                {contactData.textArea}
              </label>
              <textarea
                className="w-100 p-3 form-control "
                id="message"
                name="message"
                placeholder={contactData.textArea}
              ></textarea>
            </div>
          </div>
          <div className="input-group justify-content-start">
            <button
              type="submit"
              className="m-1 my-2 custom__submit mt-5 position-relative "
            >
              {contactData.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
