import { ContactForm } from "./index"
import { SquareIcon } from "../Icons"

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title-container">
        <SquareIcon styles={{ color: 'blue', fontSize: '28px' }} />
        <h2 className="contact-title">Let's talk</h2>
      </div>
      <ContactForm />
    </div>
  )
}