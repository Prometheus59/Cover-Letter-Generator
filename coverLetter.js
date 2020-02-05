function generateCL() {

    function coverLetter(companyName, position, familiar) {
        ftext = "YOUR NAME HERE " + "<br />" + " ADDRESS LINE 1 " + "<br />" + " ADDRESS LINE 2 " + "<br />" +
            " " + "<br />" + companyName + "<br />" + " To whom it may concern," + "<br />" +
            "Thank you for the opportunity to apply to the " + position +
            " role at your company. After reviewing your job description, it’s clear that you’re looking for a candidate that is extremely familiar with " +
            familiar +
            ". Given these requirements, I am certain that I have the necessary skills to successfully do the job adeptly and perform above expectations. " +
            "<br />" + "<br />" +
            " I am a hard-working student currently attending YOUR SCHOOL. During my academic career, I also managed to further develop my professional skills by INSERT STUFF HERE..., which I hope to leverage into the " +
            position + " role at " + companyName + ". " + "<br />" + "<br />" +
            " After reviewing my resume, I hope you will agree that I am the greatest. I look forward to elaborating on how my greatness will benefit your organization. Please contact me at my PHONE NUMBER or via email at EMAIL HERE to arrange a convenient meeting time. " +
            "<br />" + "<br />" + "Thank you for your consideration, and I look forward to hearing from you soon." + "<br />" +
            "Sincerely," + "<br />" + "YOUR NAME";
        return ftext;
    };

    var cname = document.getElementById("cname").value;
    var jname = document.getElementById("jname").value;
    var skills = document.getElementById("skills").value;

    var text = coverLetter(cname, jname, skills);

    document.getElementById("result").innerHTML = text;
}

var copy = document.getElementById("copybtn");
var clipboard = new ClipboardJS(copy);
