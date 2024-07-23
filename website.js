const resume=document.getElementById("resume");

resume.addEventListener('click', ()=> {
    const resumeUrl=file///C:/Users/harsha/OneDrive/Documents/html/RESUME.pdf;
    const link=document.createElement('a');
    link.href=resumeUrl;
    link.download='RESUME.pdf';
    link.click();
});

const submit=document.getElementById("sub");
const message=document.getElementById("msg");
submit.onclick=function hello(){
    alert("Form submitted Successfully");
    document.forms[0].reset();
}

