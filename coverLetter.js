function generateCL() {

    function coverLetter(companyName, position, familiar) {
        ftext = "Ryan Karumanchery " + "<br />" + " 69 Columbia Street West " + "<br />" + " Waterloo, ON, N2L 3K7 " + "<br />" +
            " " + "<br />" + companyName + "<br />" + " To whom it may concern," + "<br />" +
            "Thank you for the opportunity to apply to the " + position +
            " role at your company. After reviewing your job description, it’s clear that you’re looking for a candidate that is extremely familiar with " +
            familiar +
            ". Given these requirements, I am certain that I have the necessary skills to successfully do the job adeptly and perform above expectations. " +
            "<br />" + "<br />" +
            " I am a hard-working university student (Bachelor of Mathematics) currently attending the University of Waterloo. During my academic career, I also managed to further develop my professional skills by completing courses where I learned many valuable skills including algorithm design, data abstraction, authentication, and web development. In both my academic and professional life, I have been consistently praised as quality-oriented by my professors and peers. Whether working on academic, extracurricular, or professional projects, I apply proven problem-solving and creative thinking skills, which I hope to leverage into the " +
            position + " role at " + companyName + ". " + "<br />" + "<br />" +
            " After reviewing my resume, I hope you will agree that I am the type of competent and competitive candidate that you are looking for. I look forward to elaborating on how my specific skills and abilities will benefit your organization. Please contact me at (647) 505-2237 or via email at ryankarumanchery@gmail.com to arrange a convenient meeting time. " +
            "<br />" + "<br />" + "Thank you for your consideration, and I look forward to hearing from you soon." + "<br />" +
            "Sincerely," + "<br />" + "Ryan Karumanchery";
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
