const transporter = require("../services/mail");

const send = async (req, res, next) => {
  try {
    await transporter.sendMail({
      from: req.body.email,
      to: "jm.zonghero@gmail.com",
      name: req.body.name,
      lastname: req.body.lastname,
      subject: req.body.subject,
      text: req.body.message,
      html: "<b>Bonjour Nouvelle vie de jouet</b>",
    });
    res.json({ msg: "votre message a été envoyé" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  send,
};
