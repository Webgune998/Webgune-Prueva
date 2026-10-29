/* Webgune - hizkuntza aldatzailea eta sarrerako animazioa */
var ES={f8:"No se ha podido enviar la reserva. Inténtalo de nuevo más tarde o escríbenos directamente a nuestro correo.",z7:"Producción de vídeo 4K",z7p:"Grabamos vídeos corporativos, presentaciones y anuncios en calidad 4K para tu web y redes sociales.",z8:"Edición y postproducción",z8p:"Montaje, corrección de color, sonido y animación: te entregamos el vídeo listo.",o5:"Vídeo 4K",n1:"Inicio",n2:"Información",n3:"Servicios",n4:"Equipo",n5:"Reserva",n6:"Opiniones",n7:"Contacto",
h1:"Convertimos tus ideas en páginas web. Los miembros de esta empresa de estudiantes escribimos a mano el código HTML5 y CSS3, con ilusión y precisión.",hb1:"Hacer reserva",hb2:"Ver servicios",hb3:"Contáctanos",hc:"Código escrito a mano, sin atajos.",
i1:"¿Quiénes somos?",i2:"Webgune es una empresa de estudiantes: un modelo de empresa creado y gestionado por alumnado. Desarrollamos páginas web, aplicaciones web sencillas y producimos vídeos en 4K para personas, asociaciones y pequeños negocios.",i3:"Nuestro objetivo es simple: que tus proyectos se vean bien en internet, carguen rápido y se muestren perfectos en cualquier pantalla. Además, esta forma de trabajar nos enseña a colaborar en equipo, con responsabilidad y hablando con el cliente.",s1:"miembros",s2:"secciones",s3:"escrito a mano",ic:"Producción de vídeo en calidad 4K.",
z0:"Nuestros servicios",z00:"Del boceto al código final: todo lo que necesitas para crear una web.",z1:"Diseño web",z1p:"Un diseño limpio que refleja tu marca, con colores, tipografías y estructura pensados.",z2:"Desarrollo HTML5 y CSS3",z2p:"Escribimos el código a mano: ligero, comprensible y compatible con todos los navegadores.",z3:"Bocetos y mockups",z3p:"A mano o con herramientas de mockup, para ver lo que quieres antes de escribir código.",z4:"Diseño adaptable",z4p:"Una web que se ve igual de bien en móvil, tableta y ordenador.",z5:"Repositorio en GitHub",z5p:"Te entregamos el código de tu web ordenado en un repositorio de GitHub.",z6:"Mantenimiento",z6p:"Si quieres cambiar textos, actualizar fotos o añadir secciones, aquí estamos.",
p0:"Cómo trabajamos",p1:"Boceto",p1p:"Hacemos una primera propuesta a mano o con una herramienta de mockup.",p2:"Aprobación",p2p:"El profesorado y el cliente aprueban el boceto.",p3:"Código",p3p:"Escribimos el código HTML5 y CSS3 a mano.",p4:"Entrega",p4p:"Publicamos el código en un repositorio de GitHub.",
e0:"Hacer una reserva",e00:"Rellena el formulario y nuestro equipo se pondrá en contacto contigo para acordar una cita y empezar tu proyecto.",e01:"¿Qué pasa después?",e02:"Te respondemos en un plazo de 24 horas.",e03:"La primera reunión es gratuita.",e04:"Te presentaremos un boceto para que lo apruebes.",
f1:"Nombre",f2:"Correo electrónico",f3:"Servicio",f4:"Fecha",f5:"Mensaje",f6:"Enviar reserva",f7:"¡Gracias! Hemos recibido tu reserva y nos pondremos en contacto contigo pronto.",fp:"Cuéntanos tu proyecto...",
o1:"Web nueva",o2:"Aplicación web sencilla",o3:"Boceto / mockup",o4:"Mantenimiento",
r0:"Opiniones de clientes",r00:"Lo que dicen quienes han trabajado con nosotros.",r1:"Me han hecho la web más bonita para mi panadería. Rápida, clara y se ve muy bien en el móvil.",r1r:"dueña de panadería",r2:"Nos enseñaron el boceto enseguida e hicieron los cambios que pedí. Muy profesionales.",r2r:"club deportivo",r3:"El código escrito a mano es limpio y nos entregaron el repositorio muy ordenado.",r3r:"profesora",
q0:"Preguntas frecuentes",q1:"¿Cuánto se tarda en hacer una web?",q1p:"Una web sencilla necesita entre dos y cuatro semanas, según cuándo se apruebe el boceto.",q2:"¿La web puede estar en euskera y en español?",q2p:"Sí. Añadimos un botón de idioma para que los visitantes elijan el que prefieran.",q3:"¿El código será mío?",q3p:"Sí, te lo entregamos completo en un repositorio de GitHub.",
k0:"Contacto",k00:"¿Tienes alguna pregunta? Escríbenos o llámanos, te responderemos encantados.",k1:"Horario: de lunes a viernes, de 9:00 a 14:00",k2:"Navarra, Euskal Herria",k3:"Estamos aquí: Navarra",
ft1:"Proyecto de empresa de estudiantes",ft2:"Volver arriba",ft3:"Código en GitHub"};
var nodes=document.querySelectorAll("[data-i18n],[data-i18n-ph]");
nodes.forEach(function(n){if(n.dataset.i18n)n.dataset.eu=n.textContent;if(n.dataset.i18nPh)n.dataset.euPh=n.getAttribute("placeholder")});
function setLang(l){
 nodes.forEach(function(n){
  if(n.dataset.i18n){n.textContent=l==="es"?ES[n.dataset.i18n]:n.dataset.eu}
  if(n.dataset.i18nPh){n.setAttribute("placeholder",l==="es"?ES[n.dataset.i18nPh]:n.dataset.euPh)}
 });
 document.documentElement.lang=l;
 document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===l)});
 try{localStorage.setItem("webgune-lang",l)}catch(e){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});
try{var s=localStorage.getItem("webgune-lang");if(s==="es")setLang("es")}catch(e){}
var burger=document.getElementById("burger"),menu=document.getElementById("menu");
burger.addEventListener("click",function(){var o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
menu.addEventListener("click",function(e){if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});
document.getElementById("form").addEventListener("submit",function(e){
 e.preventDefault();
 var f=this,ok=document.getElementById("ok"),err=document.getElementById("err"),b=document.getElementById("send");
 ok.classList.remove("show");err.classList.remove("show");b.disabled=true;
 fetch("https://formsubmit.co/ajax/ik.anermartinez@hernanilanh.eus",{method:"POST",headers:{"Accept":"application/json"},body:new FormData(f)})
 .then(function(r){if(!r.ok)throw new Error("http");return r.json()})
 .then(function(){ok.classList.add("show");f.reset()})
 .catch(function(){err.classList.add("show")})
 .then(function(){b.disabled=false});
});
var toTop=document.getElementById("top");
toTop.addEventListener("click",function(){window.scrollTo({top:0})});
var links=document.querySelectorAll("nav a"),secs=[].map.call(links,function(a){return document.querySelector(a.getAttribute("href"))});
window.addEventListener("scroll",function(){
 toTop.classList.toggle("show",window.scrollY>600);
 var y=window.scrollY+120,cur=0;
 secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
 links.forEach(function(a,i){a.classList.toggle("on",i===cur)});
},{passive:true});

(function(){
 var intro=document.getElementById("intro");
 if(!intro)return;
 if(matchMedia("(prefers-reduced-motion: reduce)").matches){intro.remove();return}
 document.body.classList.add("lock");
 var t=setTimeout(end,5300);
 function end(){clearTimeout(t);intro.remove();document.body.classList.remove("lock")}
 document.getElementById("skip").addEventListener("click",end);
})();
