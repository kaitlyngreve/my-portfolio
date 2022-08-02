import { useState } from 'react';
import { send } from 'emailjs-com';

function ContactForm() {
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
            to_name: 'Kaitlyn',
            message: '',
            reply_to: '',
        });
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className='section-card section-contained contact-form'>
            <h1>Send me a message ✉️</h1>
            <form onSubmit={onSubmit}>
                <input
                    className='contact-form-inputs'
                    type='text'
                    name='from_name'
                    placeholder='your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    className='contact-form-inputs'
                    type='text'
                    name='reply_to'
                    placeholder='your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <textarea
                    rows='10'
                    cols='50'
                    className='contact-form-inputs'
                    type='text'
                    name='message'
                    placeholder='your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button className='send-button' type='submit'>Send</button>
            </form>
        </div>
    );
}

export default ContactForm;