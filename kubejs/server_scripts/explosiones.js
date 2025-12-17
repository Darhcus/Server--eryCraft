
// 2. LOGICA DE TELEPORT (Optimizada)
LevelEvents.afterExplosion(event => {
    // A. IDENTIFICAR AL CULPABLE
    let culpable = event.getExploder();

    // B. FILTRO DE SEGURIDAD (EARLY RETURN)
    // Si no hay culpable (ej. TNT activada por redstone) O si el culpable NO es nuestro creeper...
    if (culpable == null || culpable.type != 'enderzoology:concussion_creeper') {
        return; // ¡DETENER SCRIPT AQUÍ! No gastes memoria calculando nada más.
    }

    // --- A PARTIR DE AQUI SOLO LLEGA EL CONCUSSION CREEPER ---
    // Si el código llegó hasta acá, confirmamos que es el bicho correcto.
    // Ahora sí, hacemos el cálculo pesado de escanear el área.

    let x = event.x;
    let y = event.y;
    let z = event.z;
    let radioBusqueda = 4;

    let victimas = event.level.getEntitiesWithin(AABB.of(
        x - radioBusqueda, y - radioBusqueda, z - radioBusqueda,
        x + radioBusqueda, y + radioBusqueda, z + radioBusqueda
    ));

    victimas.forEach(victima => {
        if (victima.isPlayer()) {
            let distMin = 500;
            let distMax = 3000; // Bajé un poco el máximo para reducir el lag de generación
            
            // Ejecutamos el teleport
            victima.server.runCommandSilent(`spreadplayers ${x} ${z} ${distMin} ${distMax} false ${victima.username}`);
            victima.tell(Text.darkPurple("¡Secuestrado por el cartel mexicano PA!"));

            victima.server.runCommandSilent(`effect give ${victima.username} minecraft:darkness 15 1`);
            
            victima.server.runCommandSilent(`effect give ${victima.username} minecraft:nausea 20 2`);
        }
    });



   
});

