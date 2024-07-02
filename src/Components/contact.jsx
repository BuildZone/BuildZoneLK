import React, { useEffect } from "react";
import notify from "./toast";
import emailjs from "emailjs-com";
import "./contact.css";
import { Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Slide, Grow } from "@mui/material";

const Contact = () => {
  const { ref: revealRef1, inView: inView1, entry1 } = useInView();
  const { ref: revealRef2, inView: inView2, entry2 } = useInView();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  useEffect(() => {
    if (message !== "" && email !== "" && subject !== "" && name !== "") {
      setDisabled(false);
    }
  }, [email, message, name, subject]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setDisabled(true); // Prevent the default form submission behavior

    try {
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      // Use emailjs.sendForm to send the form data
      const response = await emailjs.sendForm(
        "service_lcdquaa",
        "template_xf7krrb",
        e.target,
        "OtMyoaYzn6w5eB2IT"
      );

      // Check if the email was sent successfully
      if (response.status === 200) {
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");
        notify("Message sent successfully!");
        // You can also reset the form fields here if needed
      } else {
        alert("Oops... Something went wrong. Please try again.");
      }
      setIsLoading(false);
      setDisabled(false);
    } catch (err) {
      setIsLoading(false);
      setDisabled(false);
    }
  };

  return (
    <div>
      <section className="service_section layout_padding bg-white">
        <div className="service_container ">
          <div className="heading_container heading_center">
            <h2>
              Contact <span>Us</span>
            </h2>
            <p>
              "Connect with us to transform your vision into reality. Reach out
              htmlFor personalized consultations, inquiries, or collaborations.
              <br />
              Let's bring your ideas to life together."
            </p>
          </div>
          <br />
          <div name="contactForm" id="contactForm" method="post">
            <section id="contact" className="contact">
              <div className="container">
                <div className="row" data-aos="fade-in">
                  <div className="col-lg-5 d-flex align-items-stretch" ref={revealRef1}>
                  <Grow direction="right" in={inView1} timeout={2500}>
                    <div className="info">
                      <div className="email">
                        <i className="icofont-envelope"></i>
                        <h4>Email:</h4>
                        <a href="mailto:buildzone4u@gmail.com" target="_blank">
                          <p>buildzone4u@gmail.com</p>
                        </a>
                      </div>

                      <div className="phone">
                        <i className="icofont-whatsapp"></i>
                        <h4>Call/Whatsapp:</h4>
                        <p>
                          <a href="https://wa.me/94762225001" target="_blank">
                            +94 76 222 5001
                          </a>
                        </p>
                      </div>

                      <div className="address">
                        <i className="icofont-google-map"></i>
                        <h4>Location:</h4>
                        <p>38/28, Nelson Lane, Colombo 03, Sri Lanka.</p>
                      </div>

                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7876773206926!2d79.84965516585271!3d6.915969728264701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590063a37d6f%3A0x58a1ca8eafe50533!2sBuildZone%20IT!5e0!3m2!1sen!2slk!4v1702493493184!5m2!1sen!2slk"
                        style={{ border: 0, width: "100%", height: "290px" }}
                        allowFullScreen
                      ></iframe>
                    </div>
                    </Grow>
                  </div>

                  <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" ref={revealRef2}>
                  <Grow direction="right" in={inView1} timeout={2500}>
                    <form className="php-email-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <div className="form-row ">
                          <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <input
                              className="form-control"
                              name="name"
                              type="name"
                              id="contactName"
                              placeholder="Name"
                              required=""
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                            <div className="validate"></div>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="name">Your Email</label>
                            <input
                              className="form-control"
                              name="email"
                              type="email"
                              id="contactEmail"
                              placeholder="Email"
                              //
                              required=""
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                            <div className="validate"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Subject</label>
                          <input
                            className="form-control"
                            name="contactSubject"
                            type="text"
                            id="contactSubject"
                            placeholder="Subject"
                            required=""
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                          />
                          <div className="validate"></div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Message</label>
                          <textarea
                            className="form-control"
                            name="contactMessage"
                            id="contactMessage"
                            placeholder="message"
                            rows="10"
                            required=""
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                          ></textarea>
                          <div className="validate"></div>
                        </div>

                        <div className="col d-flex justify-content-end">
                          <Button
                            type="submit"
                            className="submitform"
                            disabled={disabled}
                          >
                            {isLoading ? "Sending ..." : "Submit"}
                          </Button>
                        </div>
                      </div>
                    </form>
                    </Grow>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
