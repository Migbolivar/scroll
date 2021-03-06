
$(document).ready(init);

function init() {
    console.log("Página cargada");
    
    //se llama al scroll y se traza el recorrido
    $.fn.scrollPath("getPath")
    
    .moveTo(400, 400, {name: "seccion1"})
    
    .lineTo(1040, 400)
    //el parámetro name sirve para relacionar la navegación con la animación
    .lineTo(1040, 1120, {name: "seccion2"})
    
    .lineTo(420, 2100, {name: "seccion3",
                        rotate: Math.PI/2})
    //una vez hecha una rotación, para deshacerla se pone la rotación previa
     .lineTo(2220, 2800, {name: "seccion4",
                        rotate: 0})
    
    //el arco para que quede bien se monta descontando el radio
     .lineTo(2220, 620)
    .arc(2000, 620, 220, 0, -Math.PI/2, true)
    
    .lineTo(400, 400)
    
   //aquí se aplica el path; el parámetro drawpath hace que pinte la línea
    $("#container").scrollPath({drawPath: false, wrapAround: true, scrollBar: false});
    
    
    //aquí hacemos que los enlaces lancen la animación
    $("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});
}