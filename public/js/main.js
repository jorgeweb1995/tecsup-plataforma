//-----------
//---- NAVIGATION

let icon = document.getElementById('icon'); // OBTENER ICONO MENU
let nav = document.getElementById('nav'); // OBTENER NAVEGACIÓN

icon.addEventListener('click', e =>{       
    icon.classList.toggle('iconClick')
    nav.classList.toggle('navTranslate')
});

nav.addEventListener('click', e =>{
    if(e.target.classList.contains('item__link')){
        icon.classList.toggle('iconClick')
        nav.classList.toggle('navTranslate')
    }
});

//-----------
//---- USUARIO

let user    = document.getElementById('usuario'); // Usuario
let userNav = document.getElementById('usuario--nav'); // Usuario Navegación

user.addEventListener('click', e =>{       
    userNav.classList.toggle('navTranslate')
    console.log('asdadasd')
});


//-----------
//---- SLIDER

//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();


//---------------
//---- CALENDARIO

let monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);

//---------------
//---- TABS

$('.tabs__link:first').addClass('active');
	$('.secciones__tab').hide();
	$('.secciones__tab:first').show();

	$('.tabs__link').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones__tab').hide();

		let activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
    });
    
//---------------
//---- ACCORDION

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
    var accordion = new Accordion($('#accordion2'), false);
    
});


//------------------
//---- MODAL MENSAJE

let btnEfectuar  = document.getElementById('efectuar'); // OBTENER BOTÓN EFECTUAR
let btnCancelar  = document.getElementById('cancelar'); // OBTENER BOTÓN CANCELAR
let btnAceptar   = document.getElementById('aceptar'); // OBTENER BOTÓN ACEPTAR
let mens  = document.getElementById('mensaje'); // OBTENER MENSAJE COMPRA

btnEfectuar.addEventListener('click', e =>{
    mens.classList.add('pasarela__mensaje--active')
    btnEfectuar.classList.add('button__efectuar--active')
    btnAceptar.classList.add('button__entendido--active')
    btnCancelar.classList.add('button__cancelar--disable')
});

btnAceptar.addEventListener('click', e =>{
    mens.classList.remove('pasarela__mensaje--active')
    btnEfectuar.classList.remove('button__efectuar--active')
    btnAceptar.classList.remove('button__entendido--active')
    btnCancelar.classList.remove('button__cancelar--disable')
});
