import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact us</h1>
      <form>
        <div className="names">
          <div className="name">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="name">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <div className="radioGroup">
          <div>
            <label htmlFor="stockistEnquiry">Stockist Enquiry</label>
            <input
              type="radio"
              name="interest"
              id="stockistEnquiry"
              value="stockistEnquiry"
            />
          </div>
          <div>
            <label htmlFor="customCollaboration">Custom Collaboration</label>
            <input
              type="radio"
              name="interest"
              id="customCollaboration"
              value="customCollaboration"
            />
          </div>
          <div>
            <label htmlFor="workshop">Workshop</label>
            <input
              type="radio"
              name="interest"
              id="workshop"
              value="workshop"
            />
          </div>
        </div>
        <button>Send</button>
      </form>
      <img src={"/3.jpg"} />
    </div>
  );
};

export default Contact;
