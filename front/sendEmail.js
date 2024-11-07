import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail() {
const emailData = {
  from: `${process.env.RESEND_FROM_EMAIL_DEFAULT || "Acme <onboarding@resend.dev>"}`,
  to: 'santiagoeherrera@gmail.com',
  subject: 'Santiago Herrera - Mail enviado con Resend',
  html: `
    <div style="max-width: 800px; font-family: Arial, sans-serif; color: #231331; font-size: 20px; margin: 0 auto">

      <!-- Header -->
      <a href="https://i.ibb.co/GvZ1ZxR/header-Email-Img.png" style="display: block; text-align: right; font-size: 20px; margin-bottom: 20px;">
        <img src="https://i.ibb.co/GvZ1ZxR/header-Email-Img.png" alt="Logo" style="width: 749px; height: auto; margin-bottom: 2rem;">
      </a>
      
      <div style="width: 640px; margin: 0 auto;">
        <h1 style="text-align: left; font-weight: bold; font-size: 20px;">Hola Anthony,</h1>
        <!-- Message Body -->
        <p style="font-size: 20px;">
          En Customer Scoops, valoramos profundamente tu experiencia y queremos asegurarnos de que nuestros servicios cumplan con tus expectativas. Para ello, hemos preparado unas breves preguntas en las que puedes compartir tus comentarios y sugerencias.
        </p>
        <p style="font-size: 20px;">
          Tu opinión es fundamental para ayudarnos a mejorar y adaptarnos a tus necesidades. Solo te tomará unos minutos de tu tiempo.
        </p>
  
        <!-- Call to Action Button -->
        <div style="margin: 20px 0;">
          <a href="https://customer-scoops-test-fe-developer.vercel.app/" style="
            display: inline-block;
            color: #fff;
            background-color: #231331;
            text-decoration: none;
            border-radius: 2rem;
            font-size: 14px;
            font-weight: 700;
            width: 191px;
            height: 35px;
            line-height: 35px;
            text-align: center;
          ">
            Ingresa aquí
          </a>
        </div>
  
        <!-- Additional Message -->
        <p style="font-size: 20px;">
          Agradecemos de antemano tu participación y la confianza que has depositado en Customer Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora continua!
        </p>
  
        <!-- Footer -->
        <footer style="font-size: 20px;">
          <p style="margin-bottom: 0;">Saludos,</p>
          <p style="margin: 0;"><strong>Santiago Herrera</strong></p>
          <p style="margin: 0;">Equipo de Customer Scoops</p>
        </footer>

      </div>

      <a href="https://i.ibb.co/2qJmg64/Footer-Email.png" style="text-align: left; font-size: 20px; margin-bottom: 20px;">
        <img src="https://i.ibb.co/2qJmg64/Footer-Email.png" alt="Logo" style="width: 800px; height: auto; margin-top: 3.5rem;">
      </a>
    </div>
  `,
};

  try {
      const response = await resend.emails.send(emailData);
      console.log('Correo enviado:', response);
  } catch (error) {
      console.error('Error al enviar correo:', error);
  }
}

sendEmail()