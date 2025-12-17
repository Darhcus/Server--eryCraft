// Script para asignar la Soul Jar al slot de 'Hands' en Curios

ServerEvents.tags('item', event => {
    // Sintaxis: event.add('etiqueta_de_curios', 'id_del_item')
    
    // Añade el Soul Jar a la ranura 'hands'
    event.add('curios:hands', 'majruszsdifficulty:soul_jar')
})