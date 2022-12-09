import emailjs from '@emailjs/browser';
import { getUsername } from '../core/cartHelpers';
import { publicKey, serviceID } from '../utils/utils';


export const sendEmail = (itemDetails, templateId) => {

    console.log("Sending email...");

    const templateParams = { 
        to_email: getUsername(),
        ...itemDetails
    };

    console.log(templateParams);


    emailjs.send(serviceID, templateId, templateParams, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
};