const twilio = require('twilio');

export const notifyVisit = (location) => {
  var client = new twilio("AC802519b8e3c8346dd52df6546ec22599", "8bc464e3c89e3ea3330d2e10bc64004c");
  client.messages.create({
    to: "+16505347403",
    from: "+12488262294",
    body: location
  });
}
