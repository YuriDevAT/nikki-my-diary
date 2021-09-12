import React from 'react';

const About = () => (
  <div>
    <h1>Contact us</h1>
    <p style={{ textAlign: 'center', padding: '14px 0' }}>
      We are happy to receive any feedback and requests about our products.
    </p>
    <form className="about-form">
      <fieldset>
        <legend>Contact us</legend>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label htmlFor="topic">Topic</label>
        <select id="topic" name="topic">
          <option value="feedback">Feedback</option>
          <option value="request">Request</option>
          <option value="general">General</option>
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: '200px' }}
        />
        <label>
          <input type="checkbox" name="product-list" /> Request product list
        </label>
        <input type="button" value="SUBMIT" />
      </fieldset>
    </form>
  </div>
);

export default About;
