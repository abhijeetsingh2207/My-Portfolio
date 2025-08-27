// Starfield animation background for hero section
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let width = window.innerWidth, height = 320;
canvas.width = width; canvas.height = height;

let stars = [];
for(let i=0;i<110;i++){
    stars.push({x:Math.random()*width, y:Math.random()*height, r:Math.random()*2+0.4});
}
function drawStars(){
    ctx.clearRect(0,0,width,height);
    for(let s of stars){
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#54a0ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        s.y += s.r*0.15;
        if(s.y > height) s.y = 0;
    }
    requestAnimationFrame(drawStars);
}
drawStars();
window.addEventListener('resize', ()=>{canvas.width=width=window.innerWidth;canvas.height=height;});

// Skill popups
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function(){
        this.style.boxShadow = '0 8px 28px #00d2d394';
    });
    card.addEventListener('mouseleave', function(){
        this.style.boxShadow = '0 1px 8px #1a3861c0';
    });
});



// Contact form mock (real submission not implemented)
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
emailjs.init("BJp-F3GKiJTdQe-AT");
  emailjs.sendForm("service_2zpl02q", "template_ctwrnbl", this)
    .then(() => {
      alert("✅ Thank you! Your message has been sent.");
      this.reset();
    }, (err) => {
      alert("❌ Failed to send message. Please try again.");
      console.error(err);
    });
});