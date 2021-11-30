const emailTemplate = (link) => {
    return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="format-detection" content="telephone=no">
    <title></title>

    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css">
    <!--##custom-font-resource##-->
    <!--[if gte mso 16]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <style>
        html,
        body,
        table,
        tbody,
        tr,
        td,
        div,
        p,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
            padding: 0;
        }
        
        body {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        
        table {
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        table td {
            border-collapse: collapse;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: Arial;
        }
        
        .ExternalClass {
            width: 100%;
        }
        
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        /* Outermost container in Outlook.com */
        
        .ReadMsgBody {
            width: 100%;
        }
        
        img {
            -ms-interpolation-mode: bicubic;
        }
    </style>

    <style>
        a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: inherit !important;
        }
        
        u+#body a {
            color: inherit;
            text-decoration: inherit !important;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
        
        a,
        a:link,
        .no-detect-local a,
        .appleLinks a {
            color: inherit !important;
            text-decoration: inherit;
        }
    </style>

    <style>
        .width600 {
            width: 600px;
            max-width: 100%;
        }
        
        @media all and (max-width: 599px) {
            .width600 {
                width: 100% !important;
            }
        }
        
        @media screen and (min-width: 600px) {
            .hide-on-desktop {
                display: none !important;
            }
        }
        
        @media all and (max-width: 599px),
        only screen and (max-device-width: 599px) {
            .main-container {
                width: 100% !important;
            }
            .col {
                width: 100%;
            }
            .fluid-on-mobile {
                width: 100% !important;
                height: auto !important;
                text-align: center;
            }
            .fluid-on-mobile img {
                width: 100% !important;
            }
            .hide-on-mobile {
                display: none !important;
                width: 0px !important;
                height: 0px !important;
                overflow: hidden;
            }
        }
    </style>


    <!--[if gte mso 9]>
<style>

.col {
width: 100% !important;
}

.width600 {
width: 600px;
}

.width520 {
width: 520px;
height: auto;
}

.hide-on-desktop {
display: none;
}

.hide-on-desktop table {
mso-hide: all;
}

.nounderline {text-decoration: none !important;}

.mso-font-fix-arial { font-family: Arial, sans-serif;}
.mso-font-fix-comic_sans_ms { font-family: 'Comic Sans MS', sans-serif;}
.mso-font-fix-courier { font-family: Courier, monospace;}
.mso-font-fix-georgia { font-family: Georgia, serif;}
.mso-font-fix-segoe_ui { font-family: 'Segoe UI', sans-serif;}
.mso-font-fix-tahoma { font-family: Tahoma, sans-serif;}
.mso-font-fix-times_new_roman { font-family: 'Times New Roman', serif;}
.mso-font-fix-trebuchet_ms { font-family: 'Trebuchet MS', sans-serif;}
.mso-font-fix-verdana { font-family: Verdana, sans-serif;}

</style>
<![endif]-->

</head>

<body id="body" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="font-family:Arial, sans-serif; font-size:0px;margin:0;padding:0;background-color:#ffffff;">
    <style>
        @media screen and (min-width: 600px) {
            .hide-on-desktop {
                display: none;
            }
        }
        
        @media all and (max-width: 599px) {
            .hide-on-mobile {
                display: none !important;
                width: 0px !important;
                height: 0px !important;
                overflow: hidden;
            }
            .main-container {
                width: 100% !important;
            }
            .col {
                width: 100%;
            }
            .fluid-on-mobile {
                width: 100% !important;
                height: auto !important;
                text-align: center;
            }
            .fluid-on-mobile img {
                width: 100% !important;
            }
        }
    </style>
    <div style="background-color:#ffffff;">
        <table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td valign="top" align="left">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                            <td width="100%">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <tr>
                                        <td align="center" width="100%">
                                            <!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
                                            <table class="width600 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;">
                                                <tr>
                                                    <td width="100%">
                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                            <tr>
                                                                <td valign="top">
                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ececeb" style="background-color:#ececeb;">
                                                                        <tr>
                                                                            <td valign="top" style="padding:20px;">
                                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                    <tr>
                                                                                        <td valign="top" style="padding-bottom:5px;">
                                                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#232b3e" style="border-radius:2px;border-collapse:separate !important;background-color:#232b3e;">
                                                                                                <tr>
                                                                                                    <td valign="top" style="padding-top:20px;padding-right:10px;padding-bottom:30px;padding-left:10px;">
                                                                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                            <tr>
                                                                                                                <td valign="top" align="center" style="padding:10px;">
                                                                                                                    <!--[if gte mso 9]><table width="520" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
                                                                                                                    <table cellpadding="0" cellspacing="0" border="0" style="max-width:100%;" class="fluid-on-mobile img-wrap">
                                                                                                                        <tr>
                                                                                                                            <td valign="top" align="center"><img src="https://www.dumpaday.com/wp-content/uploads/2013/03/I-forgot-how-to-cat1.jpg" width="520" height="500" alt="" border="0"
                                                                                                                                    style="display:block;font-size:14px;max-width:100%;height:auto;" class="width520" />
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 9]></td></tr></table><![endif]-->
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                            <tr>
                                                                                                                <td valign="top" style="padding-right:10px;padding-bottom:15px;padding-left:10px;">
                                                                                                                    <div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:30px;color:#ffffff;line-height:41px;text-align:left;">
                                                                                                                        <p style="padding: 0; margin: 0;"><span class="mso-font-fix-arial"><strong>FORGOT YOUR PASSWORD?</strong></span></p>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                            <tr>
                                                                                                                <td valign="top" style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
                                                                                                                    <div style="font-family:Raleway, Trebuchet MS, Segoe UI, sans-serif;font-size:17px;color:#ffffff;line-height:25px;text-align:left;">
                                                                                                                        <p style="padding: 0; margin: 0;"><span class="mso-font-fix-trebuchet_ms">Someone has requested a link to change your password, and you can do this through the link below.&nbsp;</span></p>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                                                            <tr>
                                                                                                                <td valign="top" align="center" style="padding-top:20px;padding-right:10px;padding-bottom:20px;padding-left:10px;">
                                                                                                                    <!--[if !mso]><!-- -->
                                                                                                                    <a href="${link}" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
                                                                                                                        <span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#428cff" style="border-radius:2px;border-collapse:separate !important;background-color:#428cff;" class="fluid-on-mobile">
<tr>
<td align="center" style="padding-top:9px;padding-right:20px;padding-bottom:9px;padding-left:20px;">
<span style="color:#ffffff !important;font-family:Raleway, Trebuchet MS, Segoe UI, sans-serif;font-size:17px;mso-line-height:exactly;line-height:25px;mso-text-raise:4px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-trebuchet_ms">RESET PASSWORD</span></span>
                                                                                                                        </font>
                                                                                                                        </span>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                        </span>
                                                                                                        </a>
                                                                                                        <!--<![endif]-->
                                                                                                        <div style="display:none; mso-hide: none;">
                                                                                                            <table cellpadding="0" cellspacing="0" border="0" bgcolor="#428cff" style="border-radius:2px;border-collapse:separate !important;background-color:#428cff;" class="fluid-on-mobile">
                                                                                                                <tr>
                                                                                                                    <td align="center" style="padding-top:9px;padding-right:20px;padding-bottom:9px;padding-left:20px;">
                                                                                                                        <a href="${link}" target="_blank" style="color:#ffffff !important;font-family:Raleway, Trebuchet MS, Segoe UI, sans-serif;font-size:17px;mso-line-height:exactly;line-height:25px;mso-text-raise:4px;letter-spacing: normal;text-decoration:none;text-align:center;">
                                                                                                                            <span style="color:#ffffff !important;font-family:Raleway, Trebuchet MS, Segoe UI, sans-serif;font-size:17px;mso-line-height:exactly;line-height:25px;mso-text-raise:4px;letter-spacing: normal;">
<font style="color:#ffffff;" class="button">
<span><span class="mso-font-fix-trebuchet_ms">RESET PASSWORD</span></span>
                                                                                                                            </font>
                                                                                                                            </span>
                                                                                                                        </a>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </table>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if gte mso 9]></td></tr></table><![endif]-->
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                            <td align="center" width="100%">
                                <!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
                                <table class="width600 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;">
                                    <tr>
                                        <td width="100%">
                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                <tr>
                                                    <td valign="top">
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if gte mso 9]></td></tr></table><![endif]-->
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                            <td align="center" width="100%">
                                <!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
                                <table class="width600 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;">
                                    <tr>
                                        <td width="100%">
                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                <tr>
                                                    <td valign="top">
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if gte mso 9]></td></tr></table><![endif]-->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
    </div>
</body>

</html>`;
}
module.exports.emailTemplate = emailTemplate;