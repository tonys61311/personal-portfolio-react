import React from 'react';

function Contact() {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>
        <p>Elementum sem parturient nulla quam placerat viverra
        mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
        donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
        orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>
        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
            <div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
            <div className="col-12">
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
