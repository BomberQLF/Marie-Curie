import { Resend } from 'resend';

const resend = new Resend('re_9zFHnSXu_5FRx8KPqqv5ZG86t3Ww7T99Q'); 

const SendEmail = async (to, subject, text) => {
  try {
    await resend.emails.send({
      from: 'noreply@visiorama.fr',
      to,
      subject,
      text,
    });
    console.log('Email envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
};

export default SendEmail;