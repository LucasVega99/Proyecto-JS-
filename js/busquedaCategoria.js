$(document).ready(function(){

    $('.categoria').click(function() {
        let categoriaProductos = $(this).attr('category');
        // Ocultar productos
        $('.contenido').hide();

        //Mostrar productos de la categoría correspondiente
        $(`.${categoriaProductos}`).show();
    });
    $('.categoria[category="Todos"]').click(function(e) {
        $('.contenido').show();
    });
});
