import { useState } from 'react';
import { send } from 'emailjs-com';
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      'service_kgr4oth',
      'template_vn64mcu',
      toSend,
      'I5e6YEYgaP7Ba-PdX'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Header />
      <Projects />
      <div className='section-card section-contained contact-form'>
        <form onSubmit={onSubmit}>
          <input
            className='contact-form-inputs'
            type='text'
            name='from_name'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            className='contact-form-inputs'
            type='text'
            name='to_name'
            placeholder='to name'
            value={toSend.to_name}
            onChange={handleChange}
          />
          <textarea
            className='contact-form-inputs'
            type='text'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            className='contact-form-inputs'
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
