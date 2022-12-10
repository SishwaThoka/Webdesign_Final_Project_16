
- Deployed a shared MongoDb cluster with access given to collaborators, IP addresses, and common connection auth URL.
- Important ref based on which the payment API was selected, ended up implementing Braintree sandbox:
  https://rubygarage.org/blog/stripe-vs-braintree-vs-paypal-how-do-these-payment-platforms-compare
- Integated Paypal developer sandbox payments with personal and business accounts
  https://developer.paypal.com/dashboard/
- Sendgrid twilio for sending email after sender verification when an order is placed 
  https://app.sendgrid.com/guide/integrate/langs/nodejs 
- Store orders in a list with the user as key, along with order status - to generate order history
Steps to run:
- npm i braintree
- npm install --save @sendgrid/mail