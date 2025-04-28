import Title from '../Title/Title';
import styles from './Contact.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5kmps8q",
      "template_sylzx0x",
      form.current,     // aqui corrigido
      "D4HnRlVf00rvsgBZz" // public key
    ).then(
      (result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
      },
      (error) => {
        console.log(error.text);
        alert("Erro ao enviar a mensagem");
      }
    );
  };

  return (
    <div className={styles.contactContainer}>
      <Title title={"contato"} />
      <div className={styles.formContainer}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <input type="text" name="phone" placeholder="Seu telefone" />
          <textarea name="message" placeholder="Sua mensagem" required />
          <button className={styles.sendBtn} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
