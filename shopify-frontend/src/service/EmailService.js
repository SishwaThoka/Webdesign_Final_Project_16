import emailjs from '@emailjs/browser';
import { publicKey, serviceID } from '../utils/utils';


export const sendEmail = (cartDetails, templateId) => {

    console.log("Sending email...");



    emailjs.send(serviceID, templateId, cartDetails, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
};