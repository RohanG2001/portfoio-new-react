import Location from "./image/icons/location.png";
import Email from "./image/icons/email.png";

export default function Contact() {
  return (
    <>
         <div className='content'>
         <div className="contact-section" id="contact">
          <h2>Contact</h2>

          <div className="contact-info">
            <div className="info-item">
              <img src={Location} alt="Location" />
              <div>
                <p>Location : India</p>
              </div>
            </div>
            <div className="info-item">
              <img src={Email} alt="Email" />
              <div>
                <p>Email : rohitghorpade739@gmail.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="wrap-input-9">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <span className="focus-border"><i></i></span>
              </div>
              <div className="wrap-input-9">
                <input
                  className="input"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <span className="focus-border"><i></i></span>
              </div>
            </div>
            <div className="wrap-input-9">
              <input className="input" type="text" placeholder="Subject" required />
              <span className="focus-border"><i></i></span>
            </div>
            <div className="wrap-input-9">
              <textarea
                className="input"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <span className="focus-border"><i></i></span>
            </div>
            <a style={{textAlign: 'center'}} href="" className="btn-82">Submit</a>
          </form>
        </div>
         </div>
    </>
  )
}
