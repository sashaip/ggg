document.getElementById("photo").addEventListener("mouseover",
 function() {
    this.style.transform = "scale(1.2)";
    this.style.transition = "transform 0.3s";
  });
  
  document.getElementById("photo").addEventListener("mouseout", 
  function() {
    this.style.transform = "scale(1)";
  });
  document.getElementById("photo2").addEventListener("mouseover", 
  function() {
    this.style.transform = "scale(1.2)";
    this.style.transition = "transform 0.3s";
  });
  
  document.getElementById("photo2").addEventListener("mouseout", 
  function() {
    this.style.transform = "scale(1)";
  });
  document.getElementById("photo3").addEventListener("mouseover", 
  function() {
    this.style.transform = "scale(1.2)";
    this.style.transition = "transform 0.3s";
  });
  
  document.getElementById("photo3").addEventListener("mouseout", 
  function() {
    this.style.transform = "scale(1)";
  });
  
  
  tippy('[data-tippy-content]');

  
  const moveTo = new MoveTo();
  const tot = document.querySelectorAll("a");
  tot.forEach(a => moveTo.registerTrigger(a));
  
  
  const tl = gsap.timeline()

tl.fromTo('#left', { //из какого положения
   x: -100, //расположение
   opacity: 0, // видимость
},
   {// в какое
      x: 0,
      opacity: 1,
      duration: 1,// длительность
   },
   1// очередность
)
.fromTo('#right', {
    y: 50,
    opacity: 0,
 },
    {
       y: 0,
       opacity: 1,
       duration: 1,
    },
    2
 )
 gsap.to('.about-content',{
    scrollTrigger: {
       trigger:'.header',
       start: 'top top',
       scrub:true //работа на протяжение скрола
    },
    //анимация
    scale:0.5,
    opacity:0,
 })
gsap.from('.work-h2',{
    scrollTrigger:{
        trigger:'.about-content',
        start:'-2% center',
        scrub:true
    },
    y:100,
    opacity: 0,
    // scale:0,
    transformOrigin:'top',
    ease:'none',
    stagger:1,
    duration: 1
}
)
gsap.from('.work-button',{
    scrollTrigger:{
        trigger:'.about-content',
        start:'-2% center',
        scrub:true
    },
    y:100,
    opacity: 0,
    // scale:0,
    transformOrigin:'top',
    ease:'none',
    stagger:1,
    duration: 1
}
)
gsap.from('.work-out-h2',{
    scrollTrigger:{
        trigger:'.work-content',
        start:'40% center',
        scrub:true
    },
    y:-200,
    opacity: 0,
    // scale:0,
    transformOrigin:'center',
    ease:'none',
    stagger:1,
    duration: 1
}
)
// gsap.from('.work-h2',{
//     scrollTrigger:{
//         trigger:'.work-our-content',
//         start:'1% center',
//         scrub:true
//     },
//     y:-200,
//     opacity: 0,
//     // scale:0,
//     transformOrigin:'center',
//     ease:'none',
//     stagger:1,
//     duration: 1
// }
// )

  IMask(
    document.getElementById('.email'),
    {
      mask: [
        {
          mask: /^\S*@?\S*$/
        }
      ]
    }
  )


 