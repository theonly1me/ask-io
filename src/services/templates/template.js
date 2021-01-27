const domain =
  process.env.NODE_ENV === 'production'
    ? 'https://askio.herokuapp.com'
    : 'http://localhost:3000';
module.exports = survey => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title></title>
      <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]-->
      <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
      <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  
  <body>
      <div class="es-wrapper-color">
          <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                  <tr>
                      <td class="esd-email-paddings" valign="top">
                          <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" align="center">
                                          <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure" align="left">
                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                          <table cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://source.unsplash.com/1600x900/daily/?nature,water,landscape,people" alt style="display: block;" width="600"></a></td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure es-p40t es-p40b es-p40r es-p40l" esd-general-paddings-checked="false" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-m-txt-c" align="left">
                                                                                          <h1 style="color: #333333; line-height: 150%;">Dear, User!</h1>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-m-txt-c" align="left">
                                                                                          <p style="color: #666666; line-height: 150%;">Thank you for choosing to use our service. It was a pleasure to serve you. We would like to take this opportunity to thank you for your collaboration and we hope to see you again soon.</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-m-txt-c es-p10t" align="left">
                                                                                          <p style="color: #666666;">We want to note that we constantly conduct work on improvement of quality of service, and we will be very grateful if you leave the opinion. Your remarks will help us to choose a right direction.</p>
                                                                                          <div style="text-align:center">
                                                                                          <h3>Your opinion is important to us!</h3>
                                                                                          <p>${survey.body}</p>
                                                                                              <div>
                                                                                              <a href="${domain}/api/v1/surveys/thanks">Yes</a>
                                                                                              <a href="${domain}/api/v1/surveys/thanks">No</a>
                                                                                              </div>
                                                                                              </div>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                              <tbody>
                                  <tr>
                                      <td class="esd-stripe" esd-custom-block-id="2915" align="center">
                                          <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#2f3e46" style="background-color: #2f3e46;">
                                              <tbody>
                                                  <tr>
                                                      <td class="esd-structure" esd-general-paddings-checked="true" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-image" align="center" style="font-size: 0px;"><a target="_blank" href="https://askio.herokuapp.com"><img class="adapt-img" src="https://source.unsplash.com/1600x900/?worldmap" alt="Map" title="Map" width="600" style="display: block;"></a></td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-p20t es-p15b es-p15r es-p15l" align="center" esd-links-color="#c42348" esd-links-underline="none">
                                                                                          <p style="color: #c42348;"><a target="_blank" style="line-height: 150%; color: #c42348; font-size: 20px; text-decoration: none;" href="tel:+91-7017612947">+</a>91-7017612947</p>
                                                                                          <p style="color: #c42348;">605 W 2 St, Testoni, WY 82649, USA</p>
                                                                                          <p style="color: #c42348;">101 EastWest Blvd, Kansas City, MO 64108, USA</p>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-social" align="center" style="font-size: 0px; background-color: #c42348;" bgcolor="#c42348">
                                                                                          <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td valign="top" align="center"><a target="_blank" href="https://twitter.com/AtchyutPreetham"><img title="Twitter" src="https://stripo.email/cabinet/assets/editor/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="24" height="24"></a></td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td align="center" class="esd-block-text es-p15t es-p20b es-p15r es-p15l" esd-links-color="#fff">
                                                                                          <p style="font-size: 13px; line-height: 150%; color: #c42348;"><br></p>
                                                                                          <p style="color: #c42348;">Vector graphics designed by <a target="_blank" href="http://www.freepik.com/" style="color: #ffffff;">Freepik</a>.</p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td class="esd-structure" esd-general-paddings-checked="true" style="background-color: #80572b;" bgcolor="#80572b" align="left">
                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                          <table width="100%" cellspacing="0" cellpadding="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td class="esd-block-image" align="center" style="font-size:0"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_c3aa6803686f8361447088d544a5e1f7/images/96221507104192901.png" alt width="41"></a></td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="esd-block-text es-p10t es-p15b" esdev-links-color="#f4eade" align="center" bgcolor="#c42348">
                                                                                          <p style="color: #ffffff;">AskIO © 2021</p>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>                      
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </body>
  </html>`;
};
