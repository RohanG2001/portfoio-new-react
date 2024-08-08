export default function Contact() {
  return (
    <>
         <div className='content'>
         <div className="contact-section" id="contact">
          <h2>Contact</h2>

          <div className="contact-info">
            <div className="info-item">
              <img src="image/icons/location.png" alt="Location" />
              <div>
                <p>Location : India</p>
              </div>
            </div>
            <div className="info-item">
              <img src='image/icons/email.png' alt="Email" />
              <div>
                <p>Email : ghorpaderohan6169@gmail.com</p>
              </div>
            </div>
          </div>

        <form className="contact-form" action="https://sheetdb.io/api/v1/qwoi27xmmmw0d" method="post" id="sheetdb-form">

            <div className="form-row">
              <div className="wrap-input-9">
                <input className="input" type="text" placeholder="Your Name" name="data[name]" required/>
                <span className="focus-border"><i></i></span>
              </div>
              <div className="wrap-input-9">
                <input className="input" type="tel" placeholder="Your Email" name="data[email]" required/>
                <span className="focus-border"><i></i></span>
              </div>
            </div>
            <div className="wrap-input-9">
              <input className="input" type="tel" placeholder="Subject" name="data[subject]" required />
              <span className="focus-border"><i></i></span>
            </div>
            <div className="wrap-input-9">
              <textarea className="input" placeholder="Type Your Message" name="data[message]" rows={5} required></textarea>
              <span className="focus-border"><i></i></span>
            </div>
            <button type="submit" style={{textAlign: 'center'}} className="btn-82">Submit</button>
          </form>
        </div>
         </div>
    </>
  )
}
