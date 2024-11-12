const arr = [
    `Bueno, sé que no esperabas este formato de saludo, pero lamentablemente te toco un novio desarrollador y muy nerd, asi que decidí hacértelo con la herramienta que mejor se usar, la compu... (esto estaba haciendo ayer)`,
    `Quería agradecerte porque desde que te conocí descubrí lo que es el amor verdadero, descubrí lo que es sentir las emociones a pleno, descubrí que se puede amar con el mas mínimo detalle, aunque los detalles grandes te salgan de adentro, también descubrí lo que es que te amen desaforadamente y lo demuestren todos los días, que, con cada beso, con cada abrazo todo el mundo se pare y no existan más problemas, no existan nada más que vos y yo.`,
    `¿Vos y yo?  eso somos, somos los dos, siempre, siempre uno al lado del otro, siempre acompañándonos, y siempre teniendo presente que vos sos el amor de toda mi vida entera, porque cada día decido seguir amándote, y cada día mucho más, porque cada mensaje que me mandas, cada que detalle que me haces, o foto que me envías, hasta cada escena de celos, me estalla el corazón de amor, me derrito completamente, y quedo totalmente entregado a vos, porque me volves loco, y cada día pierdo un poco más la cabeza, todo te lo debo a vos.`,
    `Porque me haces muy feliz, porque el que con verte se me alegre el día y me salga una sonrisa ya vale el mundo entero, y eso es lo que te debo, el universo entero, asi que te encapsule un poquito y te lo di para que siempre lo lleves.`,
    `Terminando, quiero que quede claro que siempre quiero vivir junto a vos, que no veo la hora que seamos un equipo full time, que tengamos minis denus y minis santis, que salgamos de viaje juntos, que todas las mañanas sean con tu sonrisa, aunque a veces te levantes con cara de culo, y que siempre seamos vos y yo acompañándonos, por eso te dejo esto, este regalo que va a durar en el tiempo, salvo que los servidores y el internet se colapsen, esto va a quedar, y  podamos recordar cómo fue mi regalo para el primer cumple juntitos, feliz cumple amorcito, te amo infinitamente, y siempre lo voy a hacer.`,
    `¡Espero que lo hayas disfrutado! Ya que aparte de novio desarrollador te toco uno un poco intenso, y que te ama sobre todas las cosas, ¡TE AMO!`
];
function efectoText(elemento, texto, i = 0, callback) {
    elemento.textContent += texto[i];
    if (i < texto.length - 1) {
        setTimeout(() => efectoText(elemento, texto, i + 1, callback));
    } else {
        callback();  // Llama a la función de callback cuando termine el texto
    }
}

// Función que se encarga de comenzar la animación para cada elemento de forma secuencial
function iniciarEfectos() {
    efectoText(document.getElementById('text1'), arr[0], 0, () => {
        efectoText(document.getElementById('text2'), arr[1], 0, () => {
            efectoText(document.getElementById('text3'), arr[2], 0, () => {
                efectoText(document.getElementById('text4'), arr[3], 0, () => {
                    efectoText(document.getElementById('text5'), arr[4], 0, () => {
                        efectoText(document.getElementById('text6'), arr[5], 0, () => {
                            document.getElementById('box-carousel').classList.add('available')
                            document.getElementById('box-carousel').classList.add('container')
                        });
                    })
                })
            });
        });
    });
}

iniciarEfectos();  




const cantImg = 21
const box = document.getElementById('carousel-inner')
let flag = true

for (let i = 1; i <= cantImg; i++) {
    let div = document.createElement('div')
    div.classList.add("carousel-item")
    if (flag) {
        div.classList.add("active")
        flag = false
    }
    div.innerHTML = `
        <figure>
            <img src="/assets/img${i}.jpg" class="d-block  img-car" alt="...">
        </figure>
    `
    box.appendChild(div)
}