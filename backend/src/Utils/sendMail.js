const nodemailer =require("nodemailer")

const sendMail = async(mailOptions) => {
	const transporter = nodemailer.createTransport({
		host:"smtp-mail.gmail.com",
		port:587,
		secure:false,
		auth:{
			user:process.env.EMAIL_USER,
			pass:process.env.EMAIL_PASSWORD
		}
	})
transporter.sendMail(mailOptions,(error,info)=>{
	if (error) {
		console.log("hata çıktı mail gönderilemedi:",error);
		
	}
	console.log(info);
	return true

})

}
module.exports =sendMail