function mostrarChiste() {
    const chistes = [
        "Si la vida te da limones, haz limonada. Pero ¿por qué no recibir limones de nuevo?",
        "Dicen que la risa es el mejor remedio, pero nadie me avisa si también cura la procrastinación.",
        "El trabajo en equipo es esencial. Te permite echarle la culpa a los demás.",
        "No soy perezoso, simplemente estoy en modo ahorro de energía.",
        "La procrastinación es la clave del éxito... si es que alguna vez llegamos a hacerlo."
    ];

    const chisteAleatorio = chistes[Math.floor(Math.random() * chistes.length)];
    document.getElementById("chiste1").textContent = chisteAleatorio;
}

function generarComentario() {
    const comentarios = [
        "Hoy pensé en hacer algo productivo, pero luego vi una serie... y claro, la productividad esperará hasta mañana.",
        "Soy tan saludable que mi única preocupación es si me quedé sin WiFi.",
        "El trabajo en equipo es esencial; te permite echarle la culpa a otros cuando todo sale mal."
    ];

    const comentarioAleatorio = comentarios[Math.floor(Math.random() * comentarios.length)];
    document.getElementById("comentarioGenerado").textContent = comentarioAleatorio;
}
