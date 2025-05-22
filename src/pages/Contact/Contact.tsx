import TextInput from "../../components/TextInput/TextInput";
import ContactCard from "../../components/ContactCard/ContactCard";
import "./Contact.css";
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <section id="contacts-body">
      <form>
        <h3>Send a Message</h3>
        <TextInput label="name" />

        <TextInput label="email" />

        <TextInput label="subject" />

        <div id="text-area">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        <input type="submit" id="sendMessageButton" />
      </form>

      <section id="contact-information">
        <h3>Contact Information</h3>

        <section id="contact-info">
          <ContactCard title="Email" info="ukhalid428@gmail.com" />
          <ContactCard title="Location" info="Birmingham, United Kingdom" />

          <div id="connect-card">
            <h4>Connect</h4>

            <div id="connect-icons">
              <Link to="https://www.linkedin.com/in/usman-khalid-dev/" ><img src="Linkedin.svg" /></Link>
              <Link to="https://github.com/Usman241002/" ><img src="Github.svg" /></Link>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
