const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

//sendgrid.setApiKey(process.env.SENDGRID_KEY);

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    this.sendgridAPI = sendgrid(process.env.SENDGRID_KEY);
    this.from_email = new helper.Email('delivariety@gmail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => new helper.Email(email));
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.clickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = helper.Personalization();
    this.recipients.forEach(recipient => personalize.addTo(recipient));
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sendgridAPI.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });

    const response = await this.sendgridAPI.API(request);
    return response;
  }
}

module.exports = Mailer;
