let icon=document.getElementById("icon"),nav=document.getElementById("nav");icon.addEventListener("click",e=>{icon.classList.toggle("iconClick"),nav.classList.toggle("navTranslate")}),nav.addEventListener("click",e=>{e.target.classList.contains("item__link")&&(icon.classList.toggle("iconClick"),nav.classList.toggle("navTranslate"))});let user=document.getElementById("usuario"),userNav=document.getElementById("usuario--nav");user.addEventListener("click",e=>{userNav.classList.toggle("navTranslate"),console.log("asdadasd")});var slider=$("#slider"),siguiente=$("#btn-next"),anterior=$("#btn-prev");function moverD(){slider.animate({marginLeft:"-200%"},700,function(){$("#slider .slider__section:first").insertAfter("#slider .slider__section:last"),slider.css("margin-left","-100%")})}function moverI(){slider.animate({marginLeft:0},700,function(){$("#slider .slider__section:last").insertBefore("#slider .slider__section:first"),slider.css("margin-left","-100%")})}function autoplay(){interval=setInterval(function(){moverD()},5e3)}$("#slider .slider__section:last").insertBefore("#slider .slider__section:first"),slider.css("margin-left","-100%"),siguiente.on("click",function(){moverD(),clearInterval(interval),autoplay()}),anterior.on("click",function(){moverI(),clearInterval(interval),autoplay()}),autoplay();let monthNames=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],currentDate=new Date,currentDay=currentDate.getDate(),monthNumber=currentDate.getMonth(),currentYear=currentDate.getFullYear(),dates=document.getElementById("dates"),month=document.getElementById("month"),year=document.getElementById("year"),prevMonthDOM=document.getElementById("prev-month"),nextMonthDOM=document.getElementById("next-month");month.textContent=monthNames[monthNumber],year.textContent=currentYear.toString(),prevMonthDOM.addEventListener("click",()=>lastMonth()),nextMonthDOM.addEventListener("click",()=>nextMonth());const writeMonth=e=>{for(let e=startDay();e>0;e--)dates.innerHTML+=` <div class="calendar__date calendar__item calendar__last-days">\n            ${getTotalDays(monthNumber-1)-(e-1)}\n        </div>`;for(let t=1;t<=getTotalDays(e);t++)dates.innerHTML+=t===currentDay?` <div class="calendar__date calendar__item calendar__today">${t}</div>`:` <div class="calendar__date calendar__item">${t}</div>`},getTotalDays=e=>(-1===e&&(e=11),0==e||2==e||4==e||6==e||7==e||9==e||11==e?31:3==e||5==e||8==e||10==e?30:isLeap()?29:28),isLeap=()=>currentYear%100!=0&&currentYear%4==0||currentYear%400==0,startDay=()=>{let e=new Date(currentYear,monthNumber,1);return e.getDay()-1==-1?6:e.getDay()-1},lastMonth=()=>{0!==monthNumber?monthNumber--:(monthNumber=11,currentYear--),setNewDate()},nextMonth=()=>{11!==monthNumber?monthNumber++:(monthNumber=0,currentYear++),setNewDate()},setNewDate=()=>{currentDate.setFullYear(currentYear,monthNumber,currentDay),month.textContent=monthNames[monthNumber],year.textContent=currentYear.toString(),dates.textContent="",writeMonth(monthNumber)};writeMonth(monthNumber),$(".tabs__link:first").addClass("active"),$(".secciones__tab").hide(),$(".secciones__tab:first").show(),$(".tabs__link").click(function(){$("ul.tabs li a").removeClass("active"),$(this).addClass("active"),$(".secciones__tab").hide();let e=$(this).attr("href");return $(e).show(),!1}),$(function(){var e=function(e,t){this.el=e||{},this.multiple=t||!1,this.el.find(".link").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){var t=e.data.el;$this=$(this),$next=$this.next(),$next.slideToggle(),$this.parent().toggleClass("open"),e.data.multiple||t.find(".submenu").not($next).slideUp().parent().removeClass("open")};new e($("#accordion"),!1),new e($("#accordion2"),!1)});let btnEfectuar=document.getElementById("efectuar"),btnCancelar=document.getElementById("cancelar"),btnAceptar=document.getElementById("aceptar"),mens=document.getElementById("mensaje");btnEfectuar.addEventListener("click",e=>{mens.classList.add("pasarela__mensaje--active"),btnEfectuar.classList.add("button__efectuar--active"),btnAceptar.classList.add("button__entendido--active"),btnCancelar.classList.add("button__cancelar--disable")}),btnAceptar.addEventListener("click",e=>{mens.classList.remove("pasarela__mensaje--active"),btnEfectuar.classList.remove("button__efectuar--active"),btnAceptar.classList.remove("button__entendido--active"),btnCancelar.classList.remove("button__cancelar--disable")});