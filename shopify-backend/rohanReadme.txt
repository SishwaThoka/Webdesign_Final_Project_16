
Important ref based on which the payment API was selected, ended up implementing Braintree sandbox:
- Braintree vs Stripe vs Paypal - https://rubygarage.org/blog/stripe-vs-braintree-vs-paypal-how-do-these-payment-platforms-compare 
- Sendgrid twilio for sending email after sender verification when an order is placed 
  https://app.sendgrid.com/guide/integrate/langs/nodejs 
  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

Steps to run:
- npm i braintree
- npm install --save @sendgrid/mail