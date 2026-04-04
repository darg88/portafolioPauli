document.addEventListener('DOMContentLoaded', () => {

    /* ====================================================================
       1. VARIABLES DE IDIOMA Y DATOS
       ==================================================================== */
    let currentLang = localStorage.getItem('paulinaLang') || 'es';
    let currentViewMode = localStorage.getItem('paulinaView') || 'map';
    let activeFilter = localStorage.getItem('paulinaFilter') || 'all'; 

   const categoryMap = {
        "curaduria": { icon: "❖", name_es: "Cura[nde][du]ría", name_en: "Cura[nde][du]ría" },
        "dramaturgias": { icon: "⨉", name_es: "Dramaturgias Expandidas", name_en: "Expanded Dramaturgies" },
        "brujeria": { icon: "꩜", name_es: "Actos de Posesión-y Brujería Performativa", name_en: "Possession and Witchcraft" },
        "manos": { icon: "✶", name_es: "Hacer con las Manos", name_en: "Making with Hands" },
        "default": { icon: "●", name_es: "Archivo", name_en: "Archive" } 
    };

    const infoMenuData_es = {
        "CV": `Aquí puedes poner el texto de la trayectoria de Paulina, exposiciones, estudios.`,
        "about me": `<b>Paulina Oña Ovejero</b> es una artista e investigadora... <br><br> Su trabajo explora la relación entre los hilos y el espacio.`,
        "blog": `Notas de archivo y proceso... (Próximamente)`,
        "work with me": `
        Si te interesa proponer una colaboración, solicitar una comisión o conversar sobre los proyectos, escríbeme:
        <form id="contact-form" action="https://formspree.io/f/mwvwrllz" method="POST" class="brutalist-form">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required minlength="3" placeholder="Tu nombre y apellido">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required placeholder="tu@correo.com">
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required minlength="10" placeholder="Cuéntame sobre tu proyecto..."></textarea>
            <button type="submit" class="submit-btn">ENVIAR MENSAJE</button>
        </form>`
    };

    const infoMenuData_en = {
        "CV": `Here you can place Paulina's trajectory, exhibitions, and studies.`,
        "about me": `<b>Paulina Oña Ovejero</b> is an artist and researcher... <br><br> Her work explores the relationship between threads and space.`,
        "blog": `Archive and process notes... (Coming soon)`,
        "work with me": `
        If you are interested in proposing a collaboration, requesting a commission, or discussing projects, write to me:
        <form id="contact-form" action="https://formspree.io/f/mwvwrllz"  method="POST" class="brutalist-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required minlength="3" placeholder="Your name">
            <label for="email">Email address:</label>
            <input type="email" id="email" name="email" required placeholder="you@email.com">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required minlength="10" placeholder="Tell me about your project..."></textarea>
            <button type="submit" class="submit-btn">SEND MESSAGE</button>
        </form>`
    };

   // BASE DE DATOS BILINGÜE Y DEFINITIVA DE PROYECTOS
    const projectsData = {
        // --- 1. CURA[NDE][DU]RÍA ---
        "Germinal": { 
            category: "curaduria", title: "GERMINAL", roles_es: ["Gestora", "Curadora"], roles_en: ["Manager", "Curator"],
            custom_layout: `
                <img src="https://picsum.photos/seed/germinal_afiche/800/400" alt="Afiche Germinal" class="custom-image-full">
                <p class="modal-description" data-es="Bio Germinal: Semillero de investigación para las artes vivas." data-en="Germinal Bio: Research seedbed for living arts.">Bio Germinal: Semillero de investigación para las artes vivas.</p>
                <h3 class="custom-subtitle" data-es="Gestión" data-en="Management">Gestión</h3>
                <p class="modal-description" data-es="Afiches encuentros de artes vivas." data-en="Living arts encounters posters.">Afiches encuentros de artes vivas.</p>
                <div class="modal-gallery">
                    <img src="https://picsum.photos/seed/g_afiche1/400/400"><img src="https://picsum.photos/seed/g_afiche2/400/400">
                </div>
                <h3 class="custom-subtitle" data-es="Enlaces" data-en="Links">Enlaces</h3>
                <a href="#" target="_blank" class="project-link-btn" data-es="Formación (YT CCELP)" data-en="Training (YT CCELP)">Formación (YT CCELP)</a>
                <a href="#" target="_blank" class="project-link-btn" data-es="Memorias (Sitio Web)" data-en="Memories (Website)">Memorias (Sitio Web)</a>
                <a href="#" target="_blank" class="project-link-btn">Instagram</a>
            `
        },
        "la siesta es sagrada": { 
            category: "curaduria", title: "La siesta es sagrada", roles_es: ["Investigadora", "Formadora"], roles_en: ["Researcher", "Educator"], video: "", images: [], 
            miro: "https://miro.com/app/live-embed/o9J_l8Qy6U4=/?embedMode=view_only_without_ui&moveToViewport=-5547,118814,6844,3128&embedId=444012815583",
            description_es: `Proyecto de investigación y reposo.`, description_en: `Research and rest project.` 
        },
        "agrupación Agrestes": { category: "curaduria", title: "Agrupación Agrestes", roles_es: ["Canto", "Lectura Ritual", "Artista"], roles_en: ["Vocals", "Ritual Reading", "Artist"], video: "", images: [], description_es: `Colectivo de creación y pensamiento.`, description_en: `Creation and thought collective.` },

        // --- 2. DRAMATURGIAS EXPANDIDAS ---
// --- 2. DRAMATURGIAS EXPANDIDAS ---
        "Ágora": { 
            category: "dramaturgias", 
            title: "Ágora (2025)", 
            roles_es: ["Colaboradora", "Acompañamiento Especializado", "Dramaturgia"], 
            roles_en: ["Collaborator", "Specialized Accompaniment", "Dramaturgy"], 
            images: ["img/agora/agora (1).jpg"], // Esta será la foto de portada en el mosaico
            custom_layout: `
                <h3 class="custom-subtitle" style="margin-top: 0; font-size: 1.3rem;">Console.log("ElRuidoDeLaMontaña”)</h3>
                <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
                    <span class="role-tag" data-es="Teatro expandido | 2025" data-en="Expanded Theater | 2025">Teatro expandido | 2025</span>
                </p>
                
                <p class="modal-description" data-es="<b>Sinopsis:</b><br>En un mundo atravesado por la fiesta, la memoria y la muerte, Ágatha emprende un viaje inesperado para salvar a su nieto. Guiada por visiones, plantas y seres enmascarados, atraviesa realidades que mezclan ritual, carnaval y mundos virtuales. Cada encuentro la confronta con el peso de la tradición, la espiritualidad y el sacrificio. Su búsqueda revela no solo la fragilidad de la vida, sino también la fuerza de los vínculos y el conocimiento ancestral que resiste al olvido.<br><br><i>Console.log</i> fue presentada en el Domo del Planetario de Bogotá dentro de la programación del Festival RealMix 0.5, organizado por la Línea de Arte, ciencia y Tecnología del Idartes (Colombia)." data-en="<b>Synopsis:</b><br>In a world traversed by celebration, memory, and death, Ágatha embarks on an unexpected journey to save her grandson. Guided by visions, plants, and masked beings, she traverses realities that mix ritual, carnival, and virtual worlds. Each encounter confronts her with the weight of tradition, spirituality, and sacrifice. Her search reveals not only the fragility of life but also the strength of bonds and the ancestral knowledge that resists oblivion.<br><br><i>Console.log</i> was presented at the Bogotá Planetarium Dome as part of the RealMix 0.5 Festival programming, organized by the Art, Science, and Technology Line of Idartes (Colombia).">
                <b>Sinopsis:</b><br>En un mundo atravesado por la fiesta, la memoria y la muerte, Ágatha emprende un viaje inesperado para salvar a su nieto. Guiada por visiones, plantas y seres enmascarados, atraviesa realidades que mezclan ritual, carnaval y mundos virtuales. Cada encuentro la confronta con el peso de la tradición, la espiritualidad y el sacrificio. Su búsqueda revela no solo la fragilidad de la vida, sino también la fuerza de los vínculos y el conocimiento ancestral que resiste al olvido.<br><br><i>Console.log</i> fue presentada en el Domo del Planetario de Bogotá dentro de la programación del Festival RealMix 0.5, organizado por la Línea de Arte, ciencia y Tecnología del Idartes (Colombia).
                </p>

                <h3 class="custom-subtitle" data-es="Registro en Video" data-en="Video Record">Registro en Video</h3>
                <div class="modal-video-container" style="padding-bottom: 100%; border: none;"> 
                    <iframe src="https://www.instagram.com/reel/DT01-ANEc3Z/embed" frameborder="0" allowfullscreen scrolling="no" allowtransparency="true"></iframe>
                </div>
                <a href="https://www.instagram.com/reel/DT01-ANEc3Z/?igsh=MWp4eHN2bWtsNG9hdg==" target="_blank" class="project-link-btn" data-es="Ver Reel en Instagram" data-en="Watch Reel on Instagram" style="margin-top:-15px; margin-bottom: 30px;">Ver Reel en Instagram</a>

                <h3 class="custom-subtitle" data-es="Galería de Fotos" data-en="Photo Gallery">Galería de Fotos</h3>
                <div class="modal-gallery">
                    <img src="img/agora/agora (1).jpg" alt="Ágora foto 1">
                    <img src="img/agora/agora (2).jpg" alt="Ágora foto 2">
                    <img src="img/agora/agora (3).jpg" alt="Ágora foto 3">
                    <img src="img/agora/agora (4).jpg" alt="Ágora foto 4">
                    <img src="img/agora/agora (5).jpg" alt="Ágora foto 5">
                    <img src="img/agora/agora (6).jpg" alt="Ágora foto 6">
                    <img src="img/agora/agora (7).jpeg" alt="Ágora foto 7">
                    <img src="img/agora/agora (8).jpeg" alt="Ágora foto 8">
                </div>
            `,
        },      
       "Ifigenia": { 
    category: "dramaturgias", 
    title: "Ifigenia(2024)", 
    roles_es: ["Directora", "Realizadora Audiovisual", "Escritora", "Artista"],
    roles_en: ["Director", "Filmmaker", "Writer", "Artist"], 
    images: ["img/ifigenia/ifigenia (1).png"], 
    
    custom_layout: `
  
       
        
        <!-- 1. DESCRIPCIÓN DEL PROYECTO (TEXTO LARGO) -->
        <p class="modal-description" data-es="Ifigenia es un intento dentro de mi práctica artística (brujística), de dramaturgizar un espacio de sanación con una solicitante. El siguiente es un conjuro performático, guión-hechizo.<br><br>Ifigenia nace a partir del libreto de 'Entran. Sin necesidad de abrir las puertas', dentro del Proyecto Dramaturgias expandidas: aproximaciones a espacios de sanación mediante el gesto escritural. A partir de una serie de encuentros con la solicitante, se fueron formulando espacios escriturales para revisar/revisitar mitos y construcciones afectivas, y así guionizar el rito escénico a ser performado. Autoficción ritual.<br><br>Los dispositivos matéricos, las herramientas a ser utilizadas, los lenguajes, el montaje de ese ritual performativo (conjurometraje/dramaturgias expandidas/curandería), fueron ocupaciones de lo que denominamos un tiempo futuro. Ifigenia como ritual invoca la presencia de la palabra, que se entrelaza, se zurce y se teje, invoca su presencia sanadora, para dar paso a aquello que se tiene que decir, a aquello que ya no puede ahogarse en la garganta. Invoca su sonoridad, su peso, y su fragilidad, para imaginar nuevas mitologías personales y colectivas.<br><br>En el guión, todas las escenas ocurren en la virtualidad de las pantallas, en las respectivas casas de cada una, en los espacios oníricos de la solicitante y la curandera. Ifigenia también se llama Conjuro 270787." data-en="Ifigenia is an attempt within my artistic (witchcraft) practice to dramatize a healing space with an applicant. The following is a performative spell, a script-spell.<br><br>Ifigenia was born from the script of 'Enter. Without needing to open the doors', within the Expanded Dramaturgies Project...">
            Ifigenia es un intento dentro de mi práctica artística (brujística), de dramaturgizar un espacio de sanación con una solicitante. El siguiente es un conjuro performático, guión-hechizo.<br><br>
            Ifigenia nace a partir del libreto de "Entran. Sin necesidad de abrir las puertas", dentro del Proyecto Dramaturgias expandidas: aproximaciones a espacios de sanación mediante el gesto escritural. A partir de una serie de encuentros con la solicitante, se fueron formulando espacios escriturales para revisar/revisitar mitos y construcciones afectivas, y así guionizar el rito escénico a ser performado. Autoficción ritual.<br><br>
            Los dispositivos matéricos, las herramientas a ser utilizadas, los lenguajes, el montaje de ese ritual performativo (conjurometraje/dramaturgias expandidas/curandería), fueron ocupaciones de lo que denominamos un tiempo futuro. Ifigenia como ritual invoca la presencia de la palabra, que se entrelaza, se zurce y se teje, invoca su presencia sanadora, para dar paso a aquello que se tiene que decir, a aquello que ya no puede ahogarse en la garganta. Invoca su sonoridad, su peso, y su fragilidad, para imaginar nuevas mitologías personales y colectivas.<br><br>
            En el guión, todas las escenas ocurren en la virtualidad de las pantallas, en las respectivas casas de cada una, en los espacios oníricos de la solicitante y la curandera. Ifigenia también se llama Conjuro 270787.
        </p>
        
        <!-- 2. EL GESTO ESCRITURAL (ENLACE) -->
        <h3 class="custom-subtitle" data-es="El gesto escritural" data-en="The writing gesture">El gesto escritural</h3>
        <a href="https://pubs.lib.uiowa.edu/iowaliteraria/article/id/34520/" target="_blank" class="project-link-btn" data-es="Leer artículo" data-en="Read article">Leer artículo</a>
        
        <!-- 3. GALERÍA DE FOTOS -->
        <h3 class="custom-subtitle" data-es="Galería de fotos" data-en="Photo gallery">Galería de fotos</h3>
        <div class="modal-gallery">
            <img src="img/ifigenia/ifigenia (1).jpg" alt="Ifigenia foto 1">
            <img src="img/ifigenia/ifigenia (2).jpg" alt="Ifigenia foto 2">
            <img src="img/ifigenia/ifigenia (3).jpg" alt="Ifigenia foto 3">
            <img src="img/ifigenia/ifigenia (4).jpg" alt="Ifigenia foto 4">
            <img src="img/ifigenia/ifigenia (5).jpg" alt="Ifigenia foto 5">
            <img src="img/ifigenia/ifigenia (6).jpg" alt="Ifigenia foto 6">
        
        </div>
        
        <!-- 4. TÍTULO + DURACIÓN + ESTRENO -->
        <h3 class="custom-subtitle" data-es="Ifigenia: conjurometraje a partir de una obra de teatro" data-en="Ifigenia: conjuro-film from a play">Ifigenia: conjurometraje a partir de una obra de teatro</h3>
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="15 min" data-en="15 min">15 min</span>
            <span class="role-tag" data-es="Estrenado el 19 de septiembre de 2024 en la Cinemateca Boliviana" data-en="Premiered September 19, 2024 at the Bolivian Cinematheque">Estrenado el 19 de septiembre de 2024 en la Cinemateca Boliviana</span>
        </p>
        
        <!-- 5. SINOPSIS -->
        <p class="modal-description" data-es="<b>Sinopsis:</b><br>Ifigenia es la última en enterarse que se va de viaje, su padre ha arreglado todo para que ella deje la PATRIA. Su hermano Orestes parece contento con la noticia, incluso ha preparado una fiesta para ella. Mientras tanto, Ifigenia le cuenta su sueño recurrente a la terapeuta de turno y le confiesa que quisiera intercambiar papeles con Ofelia. Es el año 2044." data-en="<b>Synopsis:</b><br>Ifigenia is the last to find out that she is going on a trip, her father has arranged everything for her to leave the HOMELAND. Her brother Orestes seems happy with the news, he has even prepared a party for her. Meanwhile, Ifigenia tells her recurring dream to her therapist and confesses that she would like to swap roles with Ophelia. It is the year 2044.">
            <b>Sinopsis:</b><br>
            Ifigenia es la última en enterarse que se va de viaje, su padre ha arreglado todo para que ella deje la PATRIA. Su hermano Orestes parece contento con la noticia, incluso ha preparado una fiesta para ella. Mientras tanto, Ifigenia le cuenta su sueño recurrente a la terapeuta de turno y le confiesa que quisiera intercambiar papeles con Ofelia. Es el año 2044.
        </p>
        
        <!-- 6. AFICHE DE ESTRENO (vertical, centrado) -->
        <h3 class="custom-subtitle" data-es="Foto afiche estreno" data-en="Premiere poster photo">Foto afiche estreno</h3>
        <div style="display: flex; justify-content: center; margin: 20px 0;">
            <img src="img/ifigenia/ifigenia (1).png" alt="Afiche estreno Ifigenia" style="max-width: 100%; width: auto; height: auto; max-height: 600px; object-fit: contain; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        </div>
    `,
},

"Cordelia": { 
    category: "dramaturgias", 
    title: "Cordelia (2017)", 
    roles_es: ["Dramaturga", "Performer", "Directora", "Artista"],
    roles_en: ["Playwright", "Performer", "Director", "Artist"], 
    images: ["img/cordelia/cordelia (1).jpg"], 
    
    custom_layout: `
      
     
        
        <!-- 1. FOTO AFICHE ESTRENO -->
        <h3 class="custom-subtitle" data-es="Foto afiche estreno" data-en="Premiere poster photo">Foto afiche estreno</h3>
        <div style="display: flex; justify-content: center; margin: 20px 0;">
            <img src="img/cordelia/cordelia (1).jpg"alt="Afiche estreno Cordelia" style="max-width: 100%; width: auto; height: auto; max-height: 600px; object-fit: contain; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        </div>
        
        <!-- 2. ACERCA DE CORDELIA + MONTAJE + PREMIO -->
        <h3 class="custom-subtitle" data-es="Acerca de Cordelia" data-en="About Cordelia">Acerca de Cordelia</h3>
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="Montaje Escénico | 2017" data-en="Stage Production | 2017">Montaje Escénico | 2017</span>
            <span class="role-tag" data-es="Obra ganadora del segundo premio del Concurso Municipal de Dramaturgia 'Adolfo Costa Du Rels' 2017 (Bolivia)" data-en="Winner of the second prize of the Municipal Dramaturgy Contest 'Adolfo Costa Du Rels' 2017 (Bolivia)">🏆 Segundo Premio Concurso Municipal de Dramaturgia "Adolfo Costa Du Rels" 2017</span>
        </p>
        
        <!-- 3. DESCRIPCIÓN COMPLETA DEL PROYECTO -->
        <p class="modal-description" data-es="Cordelia es el nombre de la protagonista de 'El diario de un seductor' de Soren Kierkegaard, es también el nombre de una de las hijas del Rey Lear. Cordelia habla desde su cabeza de mujer una y otra vez, se imagina a todos los seductores y seductoras que conoció, qué le dejaron, cómo la dejaron. Se mira a ella misma no sólo como objeto de seducción sino también como hacedora de estrategias. Nadie es víctima. Aunque le hayan enseñado todo lo contrario.<br><br>Cordelia criada en una sociedad donde debes lavar las medias de tu hermano porque él es hombre. Esta pieza de teatro es una suerte de ensamble de construcciones sociales y de género dispuestas sobre una mesa de disección, con una cámara en circuito cerrado que sirve como microscopio, a fin de hacer foco en esta posible peculiaridad de lo femenino, que critico desde mi propio femenino. La búsqueda de atributos masculinos en mi misma/en mi propia construcción, me hace pensar en recuperar mi cuerpo como territorio subestimado por ser mujer.<br><br><b>Estreno:</b> 24 de marzo de 2017 en el CCELP (Centro Cultural de España en La Paz)<br><b>Funciones:</b> La Paz y Santa Cruz (Bolivia), Mérida (México) y Quito (Ecuador)<br><br>Para este montaje se invitan a diferentes performers para participar, contando así con la presencia de distintos actantes en cada presentación." data-en="Cordelia is the name of the protagonist of 'The Seducer's Diary' by Soren Kierkegaard, it is also the name of one of King Lear's daughters. Cordelia speaks from her woman's head over and over again, she imagines all the seducers and seductresses she met, what they left her, how they left her. She sees herself not only as an object of seduction but also as a maker of strategies. No one is a victim. Even though they taught her the opposite.<br><br>Cordelia raised in a society where you have to wash your brother's socks because he is a man. This play is a kind of assembly of social and gender constructions placed on a dissection table, with a closed-circuit camera that serves as a microscope, in order to focus on this possible peculiarity of the feminine, which I criticize from my own feminine. The search for masculine attributes in myself/in my own construction, makes me think about recovering my body as a territory underestimated for being a woman.<br><br><b>Premiere:</b> March 24, 2017 at CCELP (Spanish Cultural Center in La Paz)<br><b>Performances:</b> La Paz and Santa Cruz (Bolivia), Mérida (Mexico) and Quito (Ecuador)<br><br>For this production, different performers are invited to participate, thus having the presence of different actors in each presentation.">
            Cordelia es el nombre de la protagonista de "El diario de un seductor" de Soren Kierkegaard, es también el nombre de una de las hijas del Rey Lear. Cordelia habla desde su cabeza de mujer una y otra vez, se imagina a todos los seductores y seductoras que conoció, qué le dejaron, cómo la dejaron. Se mira a ella misma no sólo como objeto de seducción sino también como hacedora de estrategias. Nadie es víctima. Aunque le hayan enseñado todo lo contrario.<br><br>
            Cordelia criada en una sociedad donde debes lavar las medias de tu hermano porque él es hombre. Esta pieza de teatro es una suerte de ensamble de construcciones sociales y de género dispuestas sobre una mesa de disección, con una cámara en circuito cerrado que sirve como microscopio, a fin de hacer foco en esta posible peculiaridad de lo femenino, que critico desde mi propio femenino. La búsqueda de atributos masculinos en mi misma/en mi propia construcción, me hace pensar en recuperar mi cuerpo como territorio subestimado por ser mujer.<br><br>
            <b>Estreno:</b> 24 de marzo de 2017 en el CCELP (Centro Cultural de España en La Paz)<br>
            <b>Funciones:</b> La Paz y Santa Cruz (Bolivia), Mérida (México) y Quito (Ecuador)<br><br>
            Para este montaje se invitan a diferentes performers para participar, contando así con la presencia de distintos actantes en cada presentación.
        </p>
        
        <!-- 4. GALERÍA DE FOTOS -->
        <h3 class="custom-subtitle" data-es="Galería de fotos" data-en="Photo gallery">Galería de fotos</h3>
        <div class="modal-gallery">
          
            <img src="img/cordelia/cordelia (2).jpg" alt="Cordelia foto 2">
            <img src="img/cordelia/cordelia (3).jpg" alt="Cordelia foto 3">
            <img src="img/cordelia/cordelia (4).jpg" alt="Cordelia foto 4">
            <img src="img/cordelia/cordelia (5).jpg" alt="Cordelia foto 5">
            <img src="img/cordelia/cordelia (6).jpg" alt="Cordelia foto 6">
            <img src="img/cordelia/cordelia (7).jpg" alt="Cordelia foto 7">
            <img src="img/cordelia/cordelia (8).jpg" alt="Cordelia foto 8">
            <img src="img/cordelia/cordelia (9).jpg" alt="Cordelia foto 9">
        </div>
    `,
},        
"la chica del cuarto de citas": { 
    category: "dramaturgias", 
    title: "La chica del cuarto de citas (2020)", 
    roles_es: ["Escritora", "Modelo de fotografía"],
    roles_en: ["Writer", "Photography Model"], 
    images: ["img/la chica/lachica (1).jpg"], 
    
    custom_layout: `
       
        <!-- 1. TÍTULO + AUTOFICCIÓN + AÑO + DESCRIPCIÓN -->
     
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="Autoficción | 2020" data-en="Autofiction | 2020">Autoficción | 2020</span>
        </p>
        
        <p class="modal-description" data-es="Texto incluido en el fanzine digital (página 46) resultado del taller Escrituras e imaginarios. Poéticas que miran hacia el Sur: diásporas, activismos y diversidad sexual, dictado por Johan Mijail (Rep. Dominicana), editado por Catinga Ediciones con apoyo del Centro Cultural de España en La Paz." data-en="Text included in the digital fanzine (page 46) resulting from the workshop Writings and imaginaries. Poetics that look towards the South: diasporas, activism and sexual diversity, taught by Johan Mijail (Dominican Republic), edited by Catinga Ediciones with support from the Spanish Cultural Center in La Paz.">
            Texto incluido en el fanzine digital (página 46) resultado del taller Escrituras e imaginarios. Poéticas que miran hacia el Sur: diásporas, activismos y diversidad sexual, dictado por Johan Mijail (Rep. Dominicana), editado por Catinga Ediciones con apoyo del Centro Cultural de España en La Paz.
        </p>
        
        <!-- 2. ENLACES (YouTube + Google Drive) -->
        <div class="modal-video-container">
                    <iframe src="https://www.youtube.com/embed/fq1HAlP0r6M?si=fIZiBlWjjZNFrVRK"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
      
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
            <a href="https://drive.google.com/file/d/1npOBFuDKQvOAtMe_u1avbGI8ofhPB7zL/view?usp=sharing" target="_blank" class="project-link-btn" data-es="Descargar fanzine (PDF)" data-en="Download fanzine (PDF)">📄 Descargar fanzine (PDF)</a>
        </div>
        
        <!-- 3. GALERÍA DE FOTOS (4 imágenes) -->
        <h3 class="custom-subtitle" data-es="Galería de fotos" data-en="Photo gallery">Galería de fotos</h3>
        <div class="modal-gallery">
            <img src="img/la chica/lachica (1).jpg" alt="La chica del cuarto de citas foto 1">
            <img src="img/la chica/lachica (2).jpg" alt="La chica del cuarto de citas foto 2">
            <img src="img/la chica/lachica (3).jpg" alt="La chica del cuarto de citas foto 3">
         
        </div>
    `,
},        
"raros": { 
    category: "dramaturgias", 
    title: "Raros (2015)", 
    roles_es: ["Dramaturga", "Directora", "Actriz", "Artista"],
    roles_en: ["Playwright", "Director", "Actress", "Artist"], 
    images: ["img/raros/raros (3).jpg"], 
    
    custom_layout: `
       
        
        <!-- 1. TÍTULO + OBRA DE TEATRO + AÑO -->
        <h3 class="custom-subtitle" style="margin-top: 0; font-size: 1.3rem;">Raros</h3>
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="Obra de teatro | 2015" data-en="Play | 2015">Obra de teatro | 2015</span>
        </p>
        
        <!-- 2. DESCRIPCIÓN COMPLETA -->
        <p class="modal-description" data-es="<b>“Todo lo que pasa, no podía haber ocurrido de otra manera”</b><br><br>Partimos de la necesidad de contar una historia privada en un lugar público: el baño de una discoteca. En una ciudad como la mía o como la tuya, un submundo se gesta. Cada día, cada noche. En un baño público de una ciudad cualquiera, se cruzan 4 personas: un encuentro casual que concluirá con el sacrificio de la inocencia.<br><br><i>“...no podía haber ocurrido de otra manera.”</i><br><br>Estos personajes, al igual que en la vida, se encontrarán entre nosotros y se encontrarán entre ellos en el mismo espacio ocupado por el público, el cual estará invitado a participar, como un testigo silente. De ahí en más nuestra historia será contada, sin juicios de valor hacia ninguno de sus personajes, sin juicios de valor al público que observa, con la sola intención de reconocernos raros en algún momento, con la sola intención de no negar lo que en el fondo también somos." data-en="<b>'Everything that happens could not have happened any other way'</b><br><br>We start from the need to tell a private story in a public place: the bathroom of a nightclub. In a city like mine or yours, an underworld is brewing. Every day, every night. In a public bathroom of any city, 4 people cross paths: a chance encounter that will end with the sacrifice of innocence.<br><br><i>'...it could not have happened any other way.'</i><br><br>These characters, as in life, will find each other among us and will find each other in the same space occupied by the audience, who will be invited to participate as silent witnesses. From then on, our story will be told, without value judgments towards any of its characters, without value judgments towards the observing audience, with the sole intention of recognizing ourselves as rare at some point, with the sole intention of not denying what we also are deep down.">
            <b>“Todo lo que pasa, no podía haber ocurrido de otra manera”</b><br><br>
            Partimos de la necesidad de contar una historia privada en un lugar público: el baño de una discoteca. En una ciudad como la mía o como la tuya, un submundo se gesta. Cada día, cada noche. En un baño público de una ciudad cualquiera, se cruzan 4 personas: un encuentro casual que concluirá con el sacrificio de la inocencia.<br><br>
            <i>“...no podía haber ocurrido de otra manera.”</i><br><br>
            Estos personajes, al igual que en la vida, se encontrarán entre nosotros y se encontrarán entre ellos en el mismo espacio ocupado por el público, el cual estará invitado a participar, como un testigo silente. De ahí en más nuestra historia será contada, sin juicios de valor hacia ninguno de sus personajes, sin juicios de valor al público que observa, con la sola intención de reconocernos raros en algún momento, con la sola intención de no negar lo que en el fondo también somos.
        </p>
        
        <!-- 3. VIDEO -->
        <h3 class="custom-subtitle" data-es="Video" data-en="Video">Video</h3>
        <div class="modal-video-container">
            <iframe src="https://www.youtube.com/embed/pI2ZZdcBzPc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <!-- 4. GALERÍA DE FOTOS -->
        <h3 class="custom-subtitle" data-es="Galería de fotos" data-en="Photo gallery">Galería de fotos</h3>
        <div class="modal-gallery">
            <img src="img/raros/raros (1).jpg" alt="Raros foto 1">
            <img src="img/raros/raros (2).jpg" alt="Raros foto 2">
            <img src="img/raros/raros (3).jpg" alt="Raros foto 3">
            
        </div>
    `,
},        
"la fuerza de la sangre": { 
    category: "dramaturgias", 
    title: "La fuerza de la sangre (2017)", 
    roles_es: ["Performer Invitada"],
    roles_en: ["Guest Performer"], 
    images: ["img/lafuerza/lafuerza (1).png"], 
    
    custom_layout: `
        <!-- 1. TÍTULO + DIRECTOR + PERFORMANCE + AÑO -->
        <h3 class="custom-subtitle" data-es="La fuerza de la sangre" data-en="The Force of Blood">La fuerza de la sangre</h3>
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="Dirigido por Pablo Fidalgo (España)" data-en="Directed by Pablo Fidalgo (Spain)">Dirigido por Pablo Fidalgo (España)</span>
            <span class="role-tag" data-es="Performance | 2017" data-en="Performance | 2017">Performance | 2017</span>
        </p>
        
        <!-- 2. DESCRIPCIÓN -->
        <p class="modal-description" data-es="Este performance fue comisionado por el proyecto Teatro Ejemplares de la Cooperación Española para ser presentado en la 21 Feria Internacional del Libro de La Paz (Bolivia)." data-en="This performance was commissioned by the Teatro Ejemplares project of Spanish Cooperation to be presented at the 21st International Book Fair of La Paz (Bolivia).">
            Este performance fue comisionado por el proyecto Teatro Ejemplares de la Cooperación Española para ser presentado en la 21 Feria Internacional del Libro de La Paz (Bolivia).
        </p>
        
        <!-- 3. VIDEO -->
        <h3 class="custom-subtitle" data-es="Video" data-en="Video">Video</h3>
        <div class="modal-video-container">
            <iframe src="https://www.youtube.com/embed/98xrkQsjyXw?si=EEGSv6UkXWuQZQ0R" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <!-- 4. GALERÍA DE FOTOS -->
        <h3 class="custom-subtitle" data-es="Galería de fotos" data-en="Photo gallery">Galería de fotos</h3>
        <div class="modal-gallery">
            <img src="img/lafuerza/lafuerza (1).png" alt="La fuerza de la sangre foto 1">
            <img src="img/lafuerza/lafuerza (2).png" alt="La fuerza de la sangre foto 2">
            <img src="img/lafuerza/lafuerza (3).png" alt="La fuerza de la sangre foto 3">
            <img src="img/lafuerza/lafuerza (4).png" alt="La fuerza de la sangre foto 4">
            <img src="img/lafuerza/lafuerza (5).png" alt="La fuerza de la sangre foto 5">
        </div>
    `,

},
"camada": { 
    category: "dramaturgias", 
    title: "Camada (2022)", 
    roles_es: ["Performer", "Canto", "Voz", "Artista"],
    roles_en: ["Performer", "Vocals", "Voice", "Artist"], 
    images: ["img/camada/camada (1).jpg"], 
    
    custom_layout: `
       
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="Performer | Canto | Voz | Artista" data-en="Performer | Vocals | Voice | Artist">Performer | Canto | Voz | Artista</span>
        </p>
        
        <!-- 1. TÍTULO + DANZA + AÑO -->
        <h3 class="custom-subtitle" data-es="Camada" data-en="Camada">Camada</h3>
        <p class="modal-roles" style="margin-top: -10px; margin-bottom: 20px;">
            <span class="role-tag" data-es="Danza | 2022" data-en="Dance | 2022">Danza | 2022</span>
        </p>
        
        <!-- 2. VIDEO -->
        <h3 class="custom-subtitle" data-es="Video" data-en="Video">Video</h3>
        <div class="modal-video-container">
            <iframe src="https://www.youtube.com/embed/1086gtOrrM4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <!-- 3. DESCRIPCIÓN DEL PROYECTO (AGRESTES) -->
        <p class="modal-description" data-es="Agrestes es un grupo de investigación en torno al movimiento-danza en contacto que busca modos relacionales de participar del tacto a partir de gestos y vínculos que los animales de compañía inspiran. Nace bajo preguntas frente a las formas de contagio afectivo y contacto improductivo, inspiradas en la convivencia con perros y gatos, lo que ha desarrollado en el grupo un modo de ser (Agrestes) y un modo de hacer (Práctica de lxs Agreste).<br><br>Desde el 2022 la agrupación desarrolla una exploración en búsqueda de maneras de entrar en contacto y en relación con lxs otrxs en medio de mutuas afectaciones. La práctica ha desembocado en la pieza escénica, CAMADA, y, así mismo, el colectivo ha compartido su práctica a través de distintos talleres y laboratorios dentro y fuera de Bogotá y Colombia." data-en="Agrestes is a research group around contact movement-dance that seeks relational ways to participate in touch based on gestures and bonds inspired by companion animals. It was born from questions about forms of affective contagion and unproductive contact, inspired by living with dogs and cats, which has developed in the group a way of being (Agrestes) and a way of doing (Practice of the Agrestes).<br><br>Since 2022, the group has been developing an exploration in search of ways to get in touch and relate to others amidst mutual affectations. The practice has resulted in the scenic piece, CAMADA, and likewise, the collective has shared its practice through different workshops and laboratories inside and outside Bogotá and Colombia.">
            Agrestes es un grupo de investigación en torno al movimiento-danza en contacto que busca modos relacionales de participar del tacto a partir de gestos y vínculos que los animales de compañía inspiran. Nace bajo preguntas frente a las formas de contagio afectivo y contacto improductivo, inspiradas en la convivencia con perros y gatos, lo que ha desarrollado en el grupo un modo de ser (Agrestes) y un modo de hacer (Práctica de lxs Agreste).<br><br>
            Desde el 2022 la agrupación desarrolla una exploración en búsqueda de maneras de entrar en contacto y en relación con lxs otrxs en medio de mutuas afectaciones. La práctica ha desembocado en la pieza escénica, CAMADA, y, así mismo, el colectivo ha compartido su práctica a través de distintos talleres y laboratorios dentro y fuera de Bogotá y Colombia.
        </p>
        
        <!-- 4. GALERÍA DE FOTOS -->
        <h3 class="custom-subtitle" data-es="Galería de fotos" data-en="Photo gallery">Galería de fotos</h3>
        <div class="modal-gallery">
            <img src="img/camada/camada (1).jpg" alt="Camada foto 1">
            <img src="img/camada/camada (2).jpg" alt="Camada foto 2">
            <img src="img/camada/camada (3).jpg" alt="Camada foto 3">
            <img src="img/camada/camada (4).jpg" alt="Camada foto 4">
            <img src="img/camada/camada (5).jpg" alt="Camada foto 5">
            <img src="img/camada/camada (6).jpg" alt="Camada foto 6">
            <img src="img/camada/camada (7).jpg" alt="Camada foto 7">
            <img src="img/camada/camada (8).jpg" alt="Camada foto 8">
            <img src="img/camada/camada (9).jpg" alt="Camada foto 9">
        </div>
    `,
},
        // --- 3. ACTOS DE POSESIÓN Y BRUJERÍA ---
        "Proyecto Invocaciones": { category: "brujeria", title: "Proyecto Invocaciones", roles_es: ["Colaboradora"], roles_en: ["Collaborator"], video: "", images: [], description_es: `Llamados a la memoria y al cuerpo.`, description_en: `Calls to memory and the body.` },
        "la costurera y la bruja": { category: "brujeria", title: "La costurera y la bruja", roles_es: ["Tesis de Grado Maestría MITAV", "Artista"], roles_en: ["MITAV Master's Thesis", "Artist"], video: "", images: [], description_es: `El hilo que une la magia y el oficio.`, description_en: `The thread that unites magic and craft.` },
        "la casa como un nido y el hogar como una hoguera": { category: "brujeria", title: "La casa como un nido...", roles_es: ["Voz", "Guion", "Dirección", "Artista"], roles_en: ["Voice", "Script", "Direction", "Artist"], video: "", images: [], description_es: `Ritualidad del espacio doméstico.`, description_en: `Rituality of domestic space.` },
        "la limpia": { category: "brujeria", title: "La limpia", roles_es: ["Brujería", "Artista"], roles_en: ["Witchcraft", "Artist"], video: "", images: [], description_es: `Acción de despojo y purificación.`, description_en: `Action of dispossession and purification.` },
        "Ascenso": { category: "brujeria", title: "Ascenso", roles_es: ["Performer", "Voz en Off"], roles_en: ["Performer", "Voice-over"], video: "", images: [], description_es: `Elevación y ritual performativo.`, description_en: `Elevation and performative ritual.` },
        "El alba": { category: "brujeria", title: "El alba", roles_es: ["Actriz"], roles_en: ["Actress"], video: "", images: [], description_es: `El inicio como acto escénico.`, description_en: `The beginning as a scenic act.` },
        "Conferencia performativa Tráfico de semillas": { category: "brujeria", title: "Tráfico de Semillas", roles_es: ["Performer", "Cocreadora", "Artista"], roles_en: ["Performer", "Co-creator", "Artist"], video: "", images: [], description_es: `Diseminación de saberes y resistencias.`, description_en: `Dissemination of knowledge and resistance.` },
        "la chola transparente": {
            category: "brujeria", title: "La chola transparente", roles_es: ["Actriz", "Performer", "Escritora Dramatúrgica"], roles_en: ["Actress", "Performer", "Playwright"],
            images: ["img/chola/chola (1).jpg"],
            custom_layout: `
                <div class="modal-video-container">
                    <iframe src="https://www.youtube.com/embed/ORpUMcVnU-E?si=tLHpSzExmjw9ayJ1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <p class="modal-description" data-es="Este proyecto inició con una interrogante acerca de la desnudez y el trabajo manual de la costura de indumentaria. A la fecha, las preguntas se abren indagando acerca de los tonos de la presencia en el espacio público, los actos de posesión a través de la vestimenta, las ritualidades y las invocaciones en el territorio.<br><br>Formó parte de la muestra de ganadores del Concurso Expresarte 2014, gestionado por el Centro Cultural de España en La Paz, el Museo Nacional de Arte Bolivia y la Fundación Cinenómada para las Artes. La pieza principal, <i>El traje de chola transparente</i>, ha sido expuesta como instalación en las ciudades de La Paz (Bolivia), Santiago (Chile) en 2016 y Bogotá (Colombia) en 2018.<br><br>Dentro del proyecto, se han realizado también derivas performativas utilizando el vestido como dispositivo de activación del espacio público en ciudades como Valparaíso (Chile), Quito (Ecuador) y Mérida (México) en 2016, Manizales (Colombia) en 2018, dentro de la programación de diferentes eventos artísticos dedicados a la reflexión de prácticas como la performance y las artes vivas. En sus últimas derivas, la pieza ha sido vestida-encarnada por artistas invitadas, tal fue el caso de la deriva realizada en enero de 2024 junto a PersonajePersonaje (Ecuador), por el campus de la Universidad Nacional de Colombia en Bogotá." data-en="This project began with a question about nudity and the manual work of clothing sewing. To date, the questions open up inquiring about the tones of presence in public space, acts of possession through clothing, ritualities, and invocations in the territory.<br><br>It was part of the exhibition of winners of the Expresarte 2014 Contest. The main piece, The Transparent Chola Suit, has been exhibited as an installation in the cities of La Paz, Santiago, and Bogotá.<br><br>Within the project, performative drifts have also been carried out using the dress as a device for activating public space.">Este proyecto inició con una interrogante acerca de la desnudez y el trabajo manual de la costura de indumentaria. A la fecha, las preguntas se abren indagando acerca de los tonos de la presencia en el espacio público, los actos de posesión a través de la vestimenta, las ritualidades y las invocaciones en el territorio.<br><br>Formó parte de la muestra de ganadores del Concurso Expresarte 2014, gestionado por el Centro Cultural de España en La Paz, el Museo Nacional de Arte Bolivia y la Fundación Cinenómada para las Artes. La pieza principal, <i>El traje de chola transparente</i>, ha sido expuesta como instalación en las ciudades de La Paz (Bolivia), Santiago (Chile) en 2016 y Bogotá (Colombia) en 2018.<br><br>Dentro del proyecto, se han realizado también derivas performativas utilizando el vestido como dispositivo de activación del espacio público en ciudades como Valparaíso (Chile), Quito (Ecuador) y Mérida (México) en 2016, Manizales (Colombia) en 2018, dentro de la programación de diferentes eventos artísticos dedicados a la reflexión de prácticas como la performance y las artes vivas. En sus últimas derivas, la pieza ha sido vestida-encarnada por artistas invitadas, tal fue el caso de la deriva realizada en enero de 2024 junto a PersonajePersonaje (Ecuador), por el campus de la Universidad Nacional de Colombia en Bogotá.</p>
                
                <h3 class="custom-subtitle" data-es="Galería de Fotos" data-en="Photo Gallery">Galería de Fotos</h3>
                <div class="modal-gallery">
                    <img src="img/chola/chola (1).jpg" alt="La chola transparente 1">
                    <img src="img/chola/chola (2).jpg" alt="La chola transparente 2">
                    <img src="img/chola/chola (3).jpg" alt="La chola transparente 3">
                    <img src="img/chola/chola (4).jpg" alt="La chola transparente 4">
                    <img src="img/chola/chola (5).jpg" alt="La chola transparente 5">
                    <img src="img/chola/chola (6).jpg" alt="La chola transparente 6">
                    <img src="img/chola/chola (7).jpg" alt="La chola transparente 7">
                    <img src="img/chola/chola (8).jpg" alt="La chola transparente 8">
                    <img src="img/chola/chola (9).jpg" alt="La chola transparente 9">
                    <img src="img/chola/chola (10).jpg" alt="La chola transparente 10">
                    <img src="img/chola/chola (11).jpg" alt="La chola transparente 11">
                    <img src="img/chola/chola (12).jpg" alt="La chola transparente 12">
                    <img src="img/chola/chola (13).jpg" alt="La chola transparente 13">
                    <img src="img/chola/chola (14).jpg" alt="La chola transparente 14">
                    <img src="img/chola/chola (15).jpg" alt="La chola transparente 15">
                    <img src="img/chola/chola (16).jpg" alt="La chola transparente 16">
                    <img src="img/chola/chola (17).jpg" alt="La chola transparente 17">
                    <img src="img/chola/chola (18).jpg" alt="La chola transparente 18">
                    <img src="img/chola/chola (19).jpg" alt="La chola transparente 19">
                    <img src="img/chola/chola (20).jpg" alt="La chola transparente 20">
                    <img src="img/chola/chola (21).jpg" alt="La chola transparente 21">
                    <img src="img/chola/chola (22).jpg" alt="La chola transparente 22">
                    <img src="img/chola/chola (23).jpg" alt="La chola transparente 23">
                    <img src="img/chola/chola (24).jpg" alt="La chola transparente 24">
                    <img src="img/chola/chola (25).jpg" alt="La chola transparente 25">
                    <img src="img/chola/chola (26).jpg" alt="La chola transparente 26">
                    <img src="img/chola/chola (27).jpg" alt="La chola transparente 27">
                    <img src="img/chola/chola (28).jpg" alt="La chola transparente 28">
                    <img src="img/chola/chola (29).jpg" alt="La chola transparente 29">
                    <img src="img/chola/chola (30).jpg" alt="La chola transparente 30">
                    <img src="img/chola/chola (31).jpg" alt="La chola transparente 31">
                    <img src="img/chola/chola (32).jpg" alt="La chola transparente 32">
                    <img src="img/chola/chola (33).jpg" alt="La chola transparente 33">
                    <img src="img/chola/chola (34).jpg" alt="La chola transparente 34">
                    <img src="img/chola/chola (35).jpg" alt="La chola transparente 35">
                    <img src="img/chola/chola (36).jpg" alt="La chola transparente 36">
                    <img src="img/chola/chola (37).jpg" alt="La chola transparente 37">
                    <img src="img/chola/chola (38).jpg" alt="La chola transparente 38">
                    <img src="img/chola/chola (39).jpg" alt="La chola transparente 39">
                    <img src="img/chola/chola (40).jpg" alt="La chola transparente 40">
                    <img src="img/chola/chola (41).jpg" alt="La chola transparente 41">
                    <img src="img/chola/chola (42).jpg" alt="La chola transparente 42">
                    <img src="img/chola/chola (43).jpg" alt="La chola transparente 43">
                    <img src="img/chola/chola (44).jpg" alt="La chola transparente 44">
                 
                </div>
                
                <h3 class="custom-subtitle" data-es="Vestido de gracia para hacer territorio mientras se camina" data-en="Dress of grace to make territory while walking">Vestido de gracia para hacer territorio mientras se camina</h3>
                <p class="modal-description" data-es="<b>Técnica:</b> registro de video<br><b>Duración:</b> 6´12´´<br><b>Cámaras:</b> Guillermo Sainz y Carlos Del Águila<br><b>Año:</b> 2016<br><br>Una primera deriva a manera de gesto inaugural. Se encargan las piezas de la indumentaria, se compran las joyas y se alquilan las trenzas: pollera confeccionada en 12 metros de tela translúcida incluyendo forro, un juego de 5 enaguas llamadas mankanchas, una blusa, una manta con macramé en el borde inferior, zapatos y el sombrero borsalino. Todas estas piezas en su intento de transparencia. Al contar con el atuendo completo, evidenciamos que tantas capas de tela translúcida imposibilitan la visibilidad del cuerpo desnudo que lo porta.<br><br>Este primer momento del proyecto es documentado desde sus inicios hasta el momento de apropiación del territorio a través del gesto de caminar: la chola transparente.<br><br>Salgo ataviada con el vestido-dispositivo por calles de la ciudad de La Paz, aledañas a los lugares donde esta pieza fue construida: por calles transitadas desde tempranas horas, llenas de comerciantes, atestadas de micros y polleras multicolores, ante la mirada sorprendida de sus habitantes." data-en="<b>Technique:</b> Video record<br><b>Duration:</b> 6´12´´<br><b>Cameras:</b> Guillermo Sainz and Carlos Del Águila<br><b>Year:</b> 2016<br><br>A first drift as an inaugural gesture. The clothing pieces are commissioned, the jewelry is purchased, and the braids are rented..."><b>Técnica:</b> registro de video<br><b>Duración:</b> 6´12´´<br><b>Cámaras:</b> Guillermo Sainz y Carlos Del Águila<br><b>Año:</b> 2016<br><br>Una primera deriva a manera de gesto inaugural. Se encargan las piezas de la indumentaria, se compran las joyas y se alquilan las trenzas: pollera confeccionada en 12 metros de tela translúcida incluyendo forro, un juego de 5 enaguas llamadas mankanchas, una blusa, una manta con macramé en el borde inferior, zapatos y el sombrero borsalino. Todas estas piezas en su intento de transparencia. Al contar con el atuendo completo, evidenciamos que tantas capas de tela translúcida imposibilitan la visibilidad del cuerpo desnudo que lo porta.<br><br>Este primer momento del proyecto es documentado desde sus inicios hasta el momento de apropiación del territorio a través del gesto de caminar: la chola transparente.<br><br>Salgo ataviada con el vestido-dispositivo por calles de la ciudad de La Paz, aledañas a los lugares donde esta pieza fue construida: por calles transitadas desde tempranas horas, llenas de comerciantes, atestadas de micros y polleras multicolores, ante la mirada sorprendida de sus habitantes.</p>
                <div class="modal-video-container">
                    <iframe src="https://www.youtube.com/embed/oLZI0xaF_SA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <h3 class="custom-subtitle" data-es="Vestido de gracia o acerca de la imposibilidad de estar desnuda" data-en="Dress of grace or about the impossibility of being naked">Vestido de gracia o acerca de la imposibilidad de estar desnuda</h3>
                <p class="modal-description" data-es="<b>Técnica:</b> Video instalación sobre un traje de chola translúcido<br><b>Montaje video stop motion:</b> Carlos Del Águila<br><b>Dimensiones:</b> Variables<br><b>Curaduría:</b> Joaquín Sánchez<br><b>Año:</b> 2016<br><i>Esta pieza ha sido producida por el Centro Cultural de España en La Paz.</i><br><br>Para proponer el montaje de esta pieza, a manera de acto de posesión, se dispone la proyección del cuerpo desnudo de la artista sobre el atuendo de chola; en el video se evidencian 4 gestos:<br><br>Mirar — Tomarse de las manos — Bajar la mirada y volver a subirla — Acariciar las trenzas.<br><br>Habitando de esta manera los espacios de la galería, a través de una presencia de sutil desnudez." data-en="<b>Technique:</b> Video installation on a translucent chola suit<br><b>Stop motion video editing:</b> Carlos Del Águila<br><b>Dimensions:</b> Variables<br><b>Curating:</b> Joaquín Sánchez<br><b>Year:</b> 2016<br><br>To propose the assembly of this piece, as an act of possession, the projection of the artist's naked body on the chola outfit is arranged..."><b>Técnica:</b> Video instalación sobre un traje de chola translúcido<br><b>Montaje video stop motion:</b> Carlos Del Águila<br><b>Dimensiones:</b> Variables<br><b>Curaduría:</b> Joaquín Sánchez<br><b>Año:</b> 2016<br><i>Esta pieza ha sido producida por el Centro Cultural de España en La Paz.</i><br><br>Para proponer el montaje de esta pieza, a manera de acto de posesión, se dispone la proyección del cuerpo desnudo de la artista sobre el atuendo de chola; en el video se evidencian 4 gestos:<br><br>Mirar — Tomarse de las manos — Bajar la mirada y volver a subirla — Acariciar las trenzas.<br><br>Habitando de esta manera los espacios de la galería, a través de una presencia de sutil desnudez.</p>
                <div class="modal-video-container">
                    <iframe src="https://www.youtube.com/embed/f7su2fnpzZk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTM5OTEyNTg4NjkxNTc0?story_media_id=3306578139066595558_5561585890&igsh=dzFka2JpcTIxb3Bl" target="_blank" class="project-link-btn" data-es="Historias Destacadas IG" data-en="IG Highlight Stories">Historias Destacadas IG</a>
            `
        },

        // --- 4. HACER CON LAS MANOS ---
        "DEMONNIA": { 
            category: "manos", title: "DEMONNIA", roles_es: ["Creadora", "Diseñadora de Indumentaria", "Costurera", "Artista"], roles_en: ["Creator", "Fashion Designer", "Seamstress", "Artist"],
            custom_layout: `
                <img src="https://picsum.photos/seed/demonnia_logo/600/300" alt="Logo Demonnia" style="display:block; margin:0 auto 20px auto; max-width:300px;">
                <p class="modal-description" data-es="Moda lenta y vestuario. Descripción detallada del proyecto." data-en="Slow fashion and costume. Detailed project description.">Moda lenta y vestuario. Descripción detallada del proyecto.</p>
                <h3 class="custom-subtitle" data-es="Mosaico de Fotos" data-en="Photo Mosaic">Mosaico de Fotos</h3>
                <div class="modal-gallery">
                    <img src="https://picsum.photos/seed/dem1/400/400"><img src="https://picsum.photos/seed/dem2/400/400"><img src="https://picsum.photos/seed/dem3/400/400">
                </div>
                <a href="#" target="_blank" class="project-link-btn">Instagram</a>
            `
        },
        "departamento de vestuario": { category: "manos", title: "Departamento de Vestuario", roles_es: ["Vestuarista", "Asistente de Arte", "Asistente de Vestuario", "Rodaje"], roles_en: ["Costume Designer", "Art Assistant", "Costume Assistant", "On-set"], video: "", images: [], description_es: `Pensamiento desde la segunda piel.`, description_en: `Thinking from the second skin.` },
        
        // --- PROYECTO DUAL (Pertenece a 2 categorías) ---
        "uma rutucu": {
            category: "curaduria, manos", title: "uma rutucu", roles_es: ["Investigadora", "Diseño de Máscaras", "Artista"], roles_en: ["Researcher", "Mask Designer", "Artist"],
            custom_layout: `
                <img src="https://picsum.photos/seed/uma_mascara/800/400" alt="Máscara Posesión" class="custom-image-full">
                <p class="modal-description" data-es="Proyecto interdisciplinar de investigación." data-en="Interdisciplinary research project.">Proyecto interdisciplinar de investigación.</p>
                <h3 class="custom-subtitle" data-es="Video: Déjame una imagen" data-en="Video: Leave me an image">Video: Déjame una imagen</h3>
                <div class="modal-video-container"><iframe src="https://www.youtube.com/embed/HDSr9YGd9eQ" frameborder="0" allowfullscreen></iframe></div>
                <a href="#" target="_blank" class="project-link-btn" data-es="Historias Destacadas IG" data-en="IG Highlight Stories">Historias Destacadas IG</a>
            `
        },

        "default": { category: "default", title: "Archivo", roles_es: ["Investigadora"], roles_en: ["Researcher"], video: "", images: [], description_es: `Coordenada en proceso.`, description_en: `Coordinate in process.` }
    };

    const stitchPatterns = [null, '3 4', '10 8', '15 4 3 4', '20 5 5 5 5 5'];
    const threadColors = ['#c0392b', '#2e7d32', '#1a1a1a', '#f15e0f']; 

    // Solo los nombres reales de los proyectos para que orbiten
    const allWords = [
        "Germinal", "la siesta es sagrada", "uma rutucu", "agrupación Agrestes",
        "Ágora", "Ifigenia", "Cordelia", "la chica del cuarto de citas", "raros", "la fuerza de la sangre", "camada",
        "Proyecto Invocaciones", "la costurera y la bruja", "la casa como un nido y el hogar como una hoguera", "la limpia", "Ascenso", "El alba", "Conferencia performativa Tráfico de semillas", "la chola transparente",
        "DEMONNIA", "departamento de vestuario"
    ];

    /* ====================================================================
       2. DECLARACIÓN DE VARIABLES DEL DOM Y LIENZOS (CRÍTICO)
       ==================================================================== */
    const bodyEl = document.body;
    const btnMap = document.getElementById('btn-view-map');
    const btnMosaic = document.getElementById('btn-view-mosaic');
    const mosaicContainer = document.getElementById('mosaic-container');
    
    // Variables del mapa que deben existir antes de dibujar
    const layer1 = document.getElementById('bg-canvas-layer1'); 
    const layer2 = document.getElementById('bg-canvas-layer2');
    const dataVisContainer = document.getElementById('data-vis-container');
    const dataLinesSvg = document.getElementById('data-vis-lines'); 
    const dataNodesContainer = document.getElementById('data-vis-nodes');
    let dvTranslateX = 0, dvTranslateY = 0, dvRotation = 0;
    window.globalNodesList = []; 

    /* ====================================================================
       3. FUNCIONES DE VISTAS, FILTROS E IDIOMA
       ==================================================================== */
    function updateLanguageUI() {
        document.getElementById('btn-lang-es').classList.toggle('active', currentLang === 'es');
        document.getElementById('btn-lang-en').classList.toggle('active', currentLang === 'en');
        document.querySelectorAll('[data-es]').forEach(el => el.innerHTML = el.getAttribute(`data-${currentLang}`));
        document.getElementById('btn-view-map').innerText = currentLang === 'es' ? '꩜ MAPA' : '꩜ MAP';
        document.getElementById('btn-view-mosaic').innerText = currentLang === 'es' ? '⊞ MOSAICO' : '⊞ MOSAIC';
        drawDataVis();
        if (currentViewMode === 'mosaic') drawMosaic();
        localStorage.setItem('paulinaLang', currentLang);
    }

    document.getElementById('btn-lang-es').addEventListener('click', () => { currentLang = 'es'; updateLanguageUI(); });
    document.getElementById('btn-lang-en').addEventListener('click', () => { currentLang = 'en'; updateLanguageUI(); });

    function applyViewMode() {
        if (currentViewMode === 'map') {
            btnMap.classList.add('active'); btnMosaic.classList.remove('active');
            bodyEl.classList.add('viewing-map'); bodyEl.classList.remove('viewing-mosaic');
            mosaicContainer.style.display = 'none';
        } else {
            btnMosaic.classList.add('active'); btnMap.classList.remove('active');
            bodyEl.classList.add('viewing-mosaic'); bodyEl.classList.remove('viewing-map');
            mosaicContainer.style.display = 'block'; 
            drawMosaic(); 
            
            // NUEVO: Mensaje de Onboarding solo para el mosaico (dura 12 segundos)
            if (!localStorage.getItem('paulinaMosaicOnboardingDone')) {
                setTimeout(() => {
                    const toast = document.getElementById('onboarding-toast');
                    toast.innerHTML = currentLang === 'es' ? 'Arrastra las fotografías para<br>organizar tu propio atlas.' : 'Drag the photographs to<br>organize your own atlas.';
                    toast.classList.add('show');
                    setTimeout(() => { toast.classList.remove('show'); }, 12000);
                    localStorage.setItem('paulinaMosaicOnboardingDone', 'true');
                }, 1000); // Aparece 1 segundo después de entrar al mosaico
            }
        }
        localStorage.setItem('paulinaView', currentViewMode);
    }

    btnMap.addEventListener('click', () => { currentViewMode = 'map'; applyViewMode(); });
    btnMosaic.addEventListener('click', () => { currentViewMode = 'mosaic'; applyViewMode(); });

    document.querySelectorAll('.legend-item').forEach(item => {
        if(item.getAttribute('data-category') === activeFilter) {
            document.querySelectorAll('.legend-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        }
        if (item.id === 'btn-reset-view') return;

        item.addEventListener('click', () => {
            document.querySelectorAll('.legend-item').forEach(el => {
                if(el.id !== 'btn-reset-view') el.classList.remove('active');
            });
            item.classList.add('active');
            activeFilter = item.getAttribute('data-category');
            localStorage.setItem('paulinaFilter', activeFilter);
            drawDataVis();
            if (currentViewMode === 'mosaic') drawMosaic();
        });
    });

    document.getElementById('btn-reset-view').addEventListener('click', () => {
        dvTranslateX = 0; dvTranslateY = 0; dvRotation = 0; updateDVTransform();
        layer1.style.transform = `translate(0px, 0px)`; layer2.style.transform = `translate(0px, 0px)`;
    });

   // --- 4. ATAJOS DE TECLADO Y ACCESIBILIDAD ---
    document.addEventListener('keydown', (e) => {
        // 1. Navegación con Tecla Enter
        if (e.key === 'Enter' && document.activeElement && document.activeElement.getAttribute('tabindex') === '0') {
            e.preventDefault();
            document.activeElement.click();
        }

        // 2. Cerrar todo con la tecla ESCAPE
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) document.getElementById('modal-close').click();
            if (infoModal.classList.contains('active')) document.getElementById('info-modal-close').click();
            if (lightbox.classList.contains('active')) document.getElementById('lightbox-close').click();
            if (simpleDropdown.classList.contains('active')) simpleDropdown.classList.remove('active');
        }
// 3. Navegar en la galería con las flechas del teclado
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowRight') { e.preventDefault(); navigateLightbox('next'); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); navigateLightbox('prev'); }
        }
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const key = e.key.toLowerCase();
        if (key === 'm') document.getElementById('btn-view-map').click(); 
        if (key === 't') document.getElementById('btn-view-mosaic').click(); 
    });

    if (!localStorage.getItem('paulinaOnboardingDone')) {
        setTimeout(() => {
            const toast = document.getElementById('onboarding-toast');
            toast.innerHTML = toast.getAttribute(`data-${currentLang}`);
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 12000);
            localStorage.setItem('paulinaOnboardingDone', 'true');
        }, 2000);
    }

    /* ====================================================================
       4. VENTANAS MODALES Y CONTACTO
       ==================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const simpleDropdown = document.getElementById('simple-dropdown');
    menuToggle.addEventListener('click', (e) => { simpleDropdown.classList.toggle('active'); e.stopPropagation(); });
    document.addEventListener('click', () => simpleDropdown.classList.remove('active'));

  const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Variables de memoria para el carrusel
    let currentGalleryImages = [];
    let currentImageIndex = 0;

    function openLightbox(src) { 
        // 1. Recopilar todas las imágenes de la galería del proyecto abierto
        const activeModal = document.getElementById('project-modal');
        const imgs = Array.from(activeModal.querySelectorAll('.modal-gallery img, .custom-layout-container img:not(.custom-image-full)'));
        
        // 2. Crear una lista de lectura para saber en qué foto estamos
        if (imgs.length > 0) {
            currentGalleryImages = imgs.map(img => img.src);
            currentImageIndex = currentGalleryImages.indexOf(src);
            if (currentImageIndex === -1) currentImageIndex = 0;
        } else {
            currentGalleryImages = [src];
            currentImageIndex = 0;
        }
        
        lightboxImg.src = currentGalleryImages[currentImageIndex]; 
        lightbox.classList.add('active'); 
    }

    // Función para avanzar o retroceder
    function navigateLightbox(direction) {
        if (currentGalleryImages.length <= 1) return; // Si hay solo 1 foto, no hace nada
        
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        }
        lightboxImg.src = currentGalleryImages[currentImageIndex];
    }

    // Al hacer clic en la foto gigante, va a la siguiente
    lightboxImg.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que se cierre la pantalla negra
        navigateLightbox('next');
    });
    // Cursor para indicar que se puede hacer clic
    lightboxImg.style.cursor = 'pointer'; 

    // Cerrar ventana
    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => { if (e.target !== lightboxImg) lightbox.classList.remove('active'); });
    document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => { if (e.target !== lightboxImg) lightbox.classList.remove('active'); });

    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category'); 
    const modalVideo = document.getElementById('modal-video');
    const modalVideoContainer = document.querySelector('.modal-video-container');
    const modalMiroContainer = document.querySelector('.modal-miro-container');
    const modalDesc = document.getElementById('modal-desc-text');
    const modalGallery = document.getElementById('modal-gallery');

    function openProjectModal(projectName) {
        const project = projectsData[projectName] || projectsData["default"];
        const catInfo = categoryMap[project.category] || categoryMap["default"];

        modalTitle.style.fontSize = project.title.length > 30 ? "1.5rem" : "";
        modalTitle.innerText = project.title;
        modalCategory.innerHTML = `<span class="geo-icon">${catInfo.icon}</span> ${catInfo['name_' + currentLang]}`;
        
        const rolesContainer = document.getElementById('modal-roles');
        rolesContainer.innerHTML = '';
        const currentRoles = currentLang === 'es' ? project.roles_es : project.roles_en;
        if (currentRoles && currentRoles.length > 0) {
            currentRoles.forEach(role => {
                const span = document.createElement('span');
                span.className = 'role-tag'; span.innerText = role;
                rolesContainer.appendChild(span);
            });
        }

        const standardLayout = document.getElementById('standard-layout');
        const customContainer = document.getElementById('custom-layout-container');

        if (project.custom_layout) {
            standardLayout.style.display = 'none';
            customContainer.innerHTML = project.custom_layout;
            customContainer.classList.add('active');
            
            customContainer.querySelectorAll('[data-es]').forEach(el => { el.innerHTML = el.getAttribute(`data-${currentLang}`); });
            customContainer.querySelectorAll('img:not(.custom-image-full)').forEach(img => {
                img.style.cursor = 'zoom-in'; img.addEventListener('click', () => openLightbox(img.src));
            });
        } else {
            customContainer.classList.remove('active'); customContainer.innerHTML = '';
            standardLayout.style.display = 'block';
            modalDesc.innerHTML = project['description_' + currentLang];
            
            if (project.video && project.video !== "") { modalVideo.src = project.video; modalVideoContainer.style.display = 'block'; } 
            else { modalVideo.src = ""; modalVideoContainer.style.display = 'none'; }
            
            modalGallery.innerHTML = ''; 
            if (project.images && project.images.length > 0) {
                project.images.forEach(imgSrc => {
                    const img = document.createElement('img'); img.src = imgSrc; 
                    img.addEventListener('click', () => openLightbox(img.src)); modalGallery.appendChild(img);
                });
            } else if (projectName !== "default") {
                for (let i = 1; i <= 3; i++) {
                    const cleanWord = projectName.replace(/[^a-zA-Z]/g, '').substring(0, 10);
                    const img = document.createElement('img'); img.src = `https://picsum.photos/seed/${cleanWord}${i}/800/800`; 
                    img.addEventListener('click', () => openLightbox(img.src)); modalGallery.appendChild(img);
                }
            }
        }
        
        if (project.miro && project.miro !== "") {
            modalMiroContainer.innerHTML = `<iframe src="${project.miro}" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>`;
            modalMiroContainer.style.display = 'block';
        } else {
            modalMiroContainer.innerHTML = ''; modalMiroContainer.style.display = 'none';
        }
        
        modal.classList.add('active');
    }

    modalClose.addEventListener('click', () => { 
        modal.classList.remove('active'); 
        setTimeout(() => { modalVideo.src = ""; modalMiroContainer.innerHTML = ''; }, 400); 
    });
// Cerrar ventana del proyecto al hacer clic en el fondo borroso
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.getElementById('modal-close').click();
        }
    });
    const infoModal = document.getElementById('info-modal');
    const infoModalClose = document.getElementById('info-modal-close');
    const infoModalTitle = document.getElementById('info-modal-title');
    const infoModalDesc = document.getElementById('info-modal-desc-text');
    
    function openInfoModal(title, description, icon = '✶') {
        infoModalTitle.innerHTML = `<span class="title-icon geo-icon">${icon}</span> ${title}`;
        infoModalDesc.innerHTML = description; infoModal.classList.add('active'); simpleDropdown.classList.remove('active'); 

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault(); 
                const btn = contactForm.querySelector('.submit-btn');
                btn.innerText = currentLang === 'es' ? 'ENVIANDO...' : 'SENDING...'; btn.disabled = true;

                try {
                    const response = await fetch(contactForm.action, { method: contactForm.method, body: new FormData(contactForm), headers: { 'Accept': 'application/json' } });
                    if (response.ok) {
                        const successText = currentLang === 'es' ? '<b>✶ MENSAJE ENVIADO ✶</b><br><br>Gracias por escribir. Será revisado pronto.' : '<b>✶ MESSAGE SENT ✶</b><br><br>Thank you for writing. It will be reviewed shortly.';
                        contactForm.innerHTML = `<div style="padding: 20px; border: 1px dashed #2e7d32; background: rgba(46,125,50,0.1); color: #2e7d32; text-align: center;">${successText}</div>`;
                    } else { btn.innerText = 'ERROR'; btn.disabled = false; }
                } catch (error) { btn.innerText = 'ERROR'; btn.disabled = false; }
            });
        }
    }

    document.querySelectorAll('#simple-dropdown a span').forEach(span => {
        span.addEventListener('click', (e) => {
            const link = span.parentElement; if (link.getAttribute('href') !== '#') return; 
            e.preventDefault(); const sectionName = span.innerText;
            const menuData = currentLang === 'es' ? infoMenuData_es : infoMenuData_en;
            openInfoModal(sectionName, menuData[sectionName] || menuData["default"], '✶');
        });
    });

    document.getElementById('center-title-btn').addEventListener('click', () => {
        const menuData = currentLang === 'es' ? infoMenuData_es : infoMenuData_en;
        openInfoModal(currentLang === 'es' ? 'Biografía' : 'Biography', menuData["about me"], '❖');
    });
    infoModalClose.addEventListener('click', () => infoModal.classList.remove('active'));
// Cerrar ventana de información al hacer clic en el fondo borroso
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.classList.remove('active');
        }
    });
    /* ====================================================================
       5. DIBUJO DEL MOSAICO Y MAPA
       ==================================================================== */
    /* ====================================================================
       5. DIBUJO DEL MOSAICO Y MAPA (ESTILO ATLAS WARBURG)
       ==================================================================== */
    function drawMosaic() {
        mosaicContainer.innerHTML = '';
        const scrollExtension = document.createElement('div');
        scrollExtension.style.position = 'absolute'; scrollExtension.style.width = '1px'; scrollExtension.style.height = '300vh'; 
        scrollExtension.style.top = '0'; scrollExtension.style.left = '0'; scrollExtension.style.zIndex = '-1';
        mosaicContainer.appendChild(scrollExtension);

        const displayWords = activeFilter === 'all' 
            ? allWords 
            : allWords.filter(word => ((projectsData[word] || projectsData["default"]).category || "default").includes(activeFilter));            
        
        const isMobile = window.innerWidth <= 768; 
        
        // CONFIGURACIÓN WARBURG: Menos columnas para que las fotos sean grandes y detalladas
        const cols = isMobile ? 2 : 4; 
        const gridWidth = isMobile ? 90 : 70; 
        const colWidth = gridWidth / cols; 
        
        // Espaciado vertical muy apretado para dar la sensación de muro lleno
        const rowSpacing = isMobile ? 20 : 35; 

        displayWords.forEach((word, index) => {
            const project = projectsData[word] || projectsData["default"];
            const catInfo = categoryMap[project.category] || categoryMap["default"];
            const item = document.createElement('div'); item.className = 'mosaic-item';
            
            const formats = ['horizontal', 'vertical', 'square', 'panoramic'];
            const randomFormat = formats[Math.floor(Math.random() * formats.length)];
            item.classList.add(`format-${randomFormat}`);

            // Tamaños base controlados para que encajen mejor
            let baseWidth = isMobile ? (window.innerWidth / 2.6) : (window.innerWidth / 5.5);
            if (randomFormat === 'horizontal' || randomFormat === 'panoramic') baseWidth *= 1.1;
            
            // Variación de tamaño casi nula (para que mantengan el orden de la cuadrícula)
            let escalaAleatoria = 0.95 + (Math.random() * 0.1); 
            item.style.width = `${baseWidth * escalaAleatoria}px`; 
            item.style.transform = `rotate(0deg)`; // Siempre rectas

            // Colores de cartulina fotográfica antigua (blancos rotos, grises, sepias claros)
            const coloresFondo = ['#e9e9e5', '#dcdcd5', '#fdfcf8'];
            item.style.backgroundColor = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];            
            
            // CÁLCULO ESTRICTO DE POSICIÓN (Sin variables aleatorias de desorden)
            const col = index % cols; 
            const row = Math.floor(index / cols);
            
            const offsetLeft = isMobile ? 5 : 2; 
            const leftPercent = offsetLeft + (col * colWidth) + 1; // 1vw de separación perfecta
            
            const offsetTop = isMobile ? 48 : 24; 
            // Posición Y milimétrica (apenas 2 puntitos de variación para no verse robótico)
            const topPercent = offsetTop + (row * rowSpacing) + (Math.random() * 2); 
            
            item.style.left = `${leftPercent}vw`; item.style.top = `${topPercent}vh`; item.style.zIndex = index + 10; 

            const cleanWord = word.replace(/[^a-zA-Z]/g, '').substring(0, 10);
            let pW = 600, pH = 600;
            if (randomFormat === 'horizontal') { pW = 800; pH = 600; }
            if (randomFormat === 'vertical') { pW = 600; pH = 800; }
            if (randomFormat === 'panoramic') { pW = 800; pH = 450; }

            const imgSrc = (project.images && project.images.length > 0) ? project.images[0] : `https://picsum.photos/seed/${cleanWord}/${pW}/${pH}`;
            const img = document.createElement('img'); img.src = imgSrc; img.alt = project.title;
            const overlay = document.createElement('div'); overlay.className = 'mosaic-overlay';
            overlay.innerHTML = `<span class="geo-icon" style="font-size:0.6rem;">${catInfo.icon}</span> <span class="mosaic-title">${project.title.toUpperCase()}</span>`;
            item.setAttribute('tabindex', '0');
            item.setAttribute('title', `Ver proyecto: ${project.title}`);
            item.appendChild(img); item.appendChild(overlay); mosaicContainer.appendChild(item); makeDraggable(item, word);
        });
    }
    function makeDraggable(element, wordToOpen) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; let hasMoved = false;
        element.addEventListener('mousedown', dragMouseDown); element.addEventListener('touchstart', dragTouchStart, { passive: false });

        function bringToFront() { document.querySelectorAll('.mosaic-item').forEach(el => el.style.zIndex = 10); element.style.zIndex = 100; }

        function dragMouseDown(e) { e.preventDefault(); pos3 = e.clientX; pos4 = e.clientY; hasMoved = false; bringToFront(); document.addEventListener('mouseup', closeDragElement); document.addEventListener('mousemove', elementDrag); }
        function dragTouchStart(e) { pos3 = e.touches[0].clientX; pos4 = e.touches[0].clientY; hasMoved = false; bringToFront(); document.addEventListener('touchend', closeDragElement); document.addEventListener('touchmove', elementTouchDrag, { passive: false }); }

        function elementDrag(e) { e.preventDefault(); hasMoved = true; pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY; element.style.top = (element.offsetTop - pos2) + "px"; element.style.left = (element.offsetLeft - pos1) + "px"; }
        function elementTouchDrag(e) { e.preventDefault(); hasMoved = true; pos1 = pos3 - e.touches[0].clientX; pos2 = pos4 - e.touches[0].clientY; pos3 = e.touches[0].clientX; pos4 = e.touches[0].clientY; element.style.top = (element.offsetTop - pos2) + "px"; element.style.left = (element.offsetLeft - pos1) + "px"; }

        function closeDragElement() { document.removeEventListener('mouseup', closeDragElement); document.removeEventListener('mousemove', elementDrag); document.removeEventListener('touchend', closeDragElement); document.removeEventListener('touchmove', elementTouchDrag); if (!hasMoved) openProjectModal(wordToOpen); }
    }

    function drawDataVis() {
        dataLinesSvg.innerHTML = ''; dataNodesContainer.innerHTML = ''; window.globalNodesList = []; 
       const displayWords = activeFilter === 'all' ? allWords : allWords.filter(word => ((projectsData[word] || projectsData["default"]).category || "default").includes(activeFilter)); 
             if (displayWords.length === 0) return; 

  const centerX = 0, centerY = 0; 
        const isMobile = window.innerWidth <= 768;
        
        // Cerramos más el radio para que abracen el título central[cite: 2]
        const baseRadiusX = isMobile ? 120 : window.innerWidth * 0.20; 
        const baseRadiusY = isMobile ? 160 : window.innerHeight * 0.28; 
        
        const totalNodes = displayWords.length; 
        const nodeCoords = [];

        displayWords.forEach((word, i) => {
            const angle = (i / totalNodes) * Math.PI * 2; 
            const x = centerX + Math.cos(angle) * baseRadiusX; 
            const y = centerY + Math.sin(angle) * baseRadiusY; 
            nodeCoords.push({x, y});

            const projectInfo = projectsData[word] || projectsData["default"]; 
            const catInfo = categoryMap[projectInfo.category] || categoryMap["default"];
            const el = document.createElement('div'); el.className = 'dv-node';
            
            const randomFontSize = (Math.random() * 0.3) + (isMobile ? 0.65 : 0.85);           
            const textSpan = document.createElement('span'); textSpan.className = 'dv-text';
            textSpan.style.fontSize = `${randomFontSize}rem`; 
            textSpan.style.lineHeight = '1.3'; 
            textSpan.style.whiteSpace = 'normal'; 
            
            textSpan.innerHTML = `<span class="node-icon geo-icon">${catInfo.icon}</span> ${word}`; 
            el.appendChild(textSpan);
            
            let rotation = angle * (180 / Math.PI);
            const w = isMobile ? 160 : 280;
            el.style.width = `${w}px`;

            if (rotation > 90 && rotation < 270) {
                // Mitad Izquierda
                rotation += 180; 
                el.style.transformOrigin = "right center"; // <-- EL SECRETO ESTÁ AQUÍ
                textSpan.style.transformOrigin = "right center"; 
                el.style.textAlign = "right";
                el.style.left = `${x - w}px`; 
            } else {
                // Mitad Derecha
                el.style.transformOrigin = "left center"; // <-- Y AQUÍ
                textSpan.style.transformOrigin = "left center";
                el.style.textAlign = "left";
                el.style.left = `${x}px`;
            }
            
            el.style.top = `${y - 10}px`; 
            el.style.transform = `rotate(${rotation}deg)`; 
            el.addEventListener('click', () => openProjectModal(word));
            el.setAttribute('tabindex', '0');
            el.setAttribute('title', `Abrir: ${projectInfo.title}`);
            
            dataNodesContainer.appendChild(el); 
            window.globalNodesList.push({ x: x, y: y, element: el });
        });

        for (let i = 0; i < totalNodes; i++) {
            const targetIndex = (i + Math.floor(totalNodes / 2) + Math.floor(Math.random()*5 - 2)) % totalNodes;
            const start = nodeCoords[i], end = nodeCoords[targetIndex];
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M ${start.x} ${start.y} Q ${centerX} ${centerY} ${end.x} ${end.y}`);
            path.setAttribute('fill', 'none'); path.setAttribute('stroke', threadColors[Math.floor(Math.random() * threadColors.length)]); 
            path.setAttribute('stroke-width', (Math.random() * 0.6 + 0.4).toString()); path.setAttribute('opacity', '0.6');
            const randomStitch = stitchPatterns[Math.floor(Math.random() * stitchPatterns.length)];
            if(randomStitch) path.setAttribute('stroke-dasharray', randomStitch); dataLinesSvg.appendChild(path);
        }
    }

    function updateDVTransform() { dataVisContainer.style.transform = `translate(${dvTranslateX}px, ${dvTranslateY}px) rotate(${dvRotation}deg)`; }

    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.03; const moveY = (e.clientY - window.innerHeight / 2) * 0.03;
        layer1.style.transform = `translate(${moveX}px, ${moveY}px)`; layer2.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
        dvTranslateX = moveX * 0.5; dvTranslateY = moveY * 0.5; updateDVTransform();
    });

    window.addEventListener('wheel', (e) => {
        if (currentViewMode !== 'map' || modal.classList.contains('active') || infoModal.classList.contains('active') || lightbox.classList.contains('active')) return; 
        dvRotation += e.deltaY * 0.05; updateDVTransform();
    });

    let lastTouchY = 0;
    window.addEventListener('touchstart', (e) => lastTouchY = e.touches[0].clientY);
    window.addEventListener('touchmove', (e) => {
        if (currentViewMode !== 'map' || modal.classList.contains('active') || infoModal.classList.contains('active') || lightbox.classList.contains('active')) return; 
        e.preventDefault(); const currentTouchY = e.touches[0].clientY;
        dvRotation += (lastTouchY - currentTouchY) * 0.4; lastTouchY = currentTouchY; updateDVTransform();
    }, { passive: false }); 

    window.addEventListener('resize', () => { drawBackground('bg-canvas-layer1', 40); drawBackground('bg-canvas-layer2', 60); drawDataVis(); if (currentViewMode === 'mosaic') drawMosaic(); });

    function plantSeed(clientX, clientY, targetEl) {
        if (currentViewMode === 'mosaic' || modal.classList.contains('active') || infoModal.classList.contains('active') || lightbox.classList.contains('active')) return;
        if (targetEl.closest('header, .center-title, .dv-node, .project-legend')) return;

        const dx = clientX - window.innerWidth / 2; const dy = clientY - window.innerHeight / 2; const angle = -dvRotation * (Math.PI / 180); 
        const localX = (dx - dvTranslateX) * Math.cos(angle) - (dy - dvTranslateY) * Math.sin(angle); const localY = (dx - dvTranslateX) * Math.sin(angle) + (dy - dvTranslateY) * Math.cos(angle);

        const seedColor = threadColors[Math.floor(Math.random() * threadColors.length)]; const stitchPattern = stitchPatterns[Math.floor(Math.random() * stitchPatterns.length)];
        const seedEl = document.createElement('div'); seedEl.className = 'seed-node geo-icon'; seedEl.innerText = ['✶', '❖', '⨉', '꩜'][Math.floor(Math.random() * 4)];
        seedEl.style.left = `${localX}px`; seedEl.style.top = `${localY}px`; seedEl.style.color = seedColor; dataNodesContainer.appendChild(seedEl);

        if (window.globalNodesList.length === 0) return;
        const targetNode = window.globalNodesList[Math.floor(Math.random() * window.globalNodesList.length)];
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${localX} ${localY} Q ${(localX + targetNode.x) / 2 + (Math.random() * 200 - 100)} ${(localY + targetNode.y) / 2 + (Math.random() * 200 - 100)} ${targetNode.x} ${targetNode.y}`);
        path.setAttribute('fill', 'none'); path.setAttribute('stroke', seedColor); path.setAttribute('stroke-width', '1.5'); dataLinesSvg.appendChild(path);

        const length = path.getTotalLength(); path.style.strokeDasharray = length; path.style.strokeDashoffset = length; path.getBoundingClientRect(); 
        path.style.transition = 'stroke-dashoffset 0.8s ease-in-out'; path.style.strokeDashoffset = '0';
        
        setTimeout(() => { path.style.transition = 'none'; path.style.strokeDasharray = stitchPattern || ''; path.style.strokeDashoffset = ''; const textSpan = targetNode.element.querySelector('.dv-text'); textSpan.style.color = seedColor; textSpan.style.fontWeight = '400'; setTimeout(() => { textSpan.style.color = ''; textSpan.style.fontWeight = ''; }, 2500); }, 800); 
    }

    window.addEventListener('dblclick', (e) => plantSeed(e.clientX, e.clientY, e.target));
    let lastTapTime = 0;
    window.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime(); const tapLength = currentTime - lastTapTime;
        if (tapLength < 300 && tapLength > 0) { plantSeed(e.changedTouches[0].clientX, e.changedTouches[0].clientY, e.target); e.preventDefault(); }
        lastTapTime = currentTime;
    });

    /* ====================================================================
       6. ARRANQUE DEL SISTEMA (EJECUCIÓN INICIAL)
       ==================================================================== */
    function drawBackground(svgId, lineCount) {
        const svg = document.getElementById(svgId); svg.innerHTML = '';
        const width = window.innerWidth * 1.1; const height = window.innerHeight * 1.1;
        for (let i = 0; i < lineCount; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', Math.random() * width); line.setAttribute('y1', Math.random() * height);
            line.setAttribute('x2', Math.random() * width); line.setAttribute('y2', Math.random() * height);
            line.setAttribute('stroke', threadColors[Math.floor(Math.random() * threadColors.length)]); line.setAttribute('stroke-width', (Math.random() * 0.5 + 0.3).toString());
            const randomStitch = stitchPatterns[Math.floor(Math.random() * stitchPatterns.length)];
            if (randomStitch) line.setAttribute('stroke-dasharray', randomStitch);
            line.setAttribute('opacity', Math.random() * 0.3 + 0.05); svg.appendChild(line);
        }
    }
    drawBackground('bg-canvas-layer1', 40); drawBackground('bg-canvas-layer2', 60); 
    
    updateLanguageUI();
    applyViewMode();
/* ====================================================================
       6. BUSCADOR EN TIEMPO REAL Y BOTÓN DE AYUDA PERSISTENTE
       ==================================================================== */
    // Lógica del Buscador (Afecta tanto a los Nodos del Mapa como a las Fotos del Mosaico)
    const searchInput = document.getElementById('project-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            
            // Buscar en el Mapa
            document.querySelectorAll('.dv-node').forEach(node => {
                const text = node.innerText.toLowerCase();
                const isMatch = text.includes(term);
                node.style.opacity = isMatch ? '1' : '0.1';
                node.style.pointerEvents = isMatch ? 'auto' : 'none';
                node.style.transition = 'opacity 0.3s ease';
            });

            // Buscar en el Mosaico
            document.querySelectorAll('.mosaic-item').forEach(item => {
                const text = item.innerText.toLowerCase();
                const isMatch = text.includes(term);
                item.style.opacity = isMatch ? '1' : '0.1';
                item.style.pointerEvents = isMatch ? 'auto' : 'none';
                item.style.transition = 'opacity 0.3s ease';
            });
        });
    }

    // Botón de Ayuda Persistente [ ? ]
    const btnHelp = document.getElementById('btn-help');
    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            const manualTitle = currentLang === 'es' ? 'Manual de Navegación' : 'Navigation Manual';
            const manualText = currentLang === 'es' 
                ? `<b>EXPLORACIÓN BÁSICA:</b><br>
                   - <b>Arrastra</b> el fondo oscuro para mover el lienzo en cualquier dirección.<br>
                   - <b>Rueda del ratón</b> (o arrastre con dos dedos) para rotar el mapa.<br>
                   - <b>Doble Clic</b> (o toque rápido) en el espacio vacío para germinar una conexión aleatoria.<br><br>
                   <b>ATAJOS DE TECLADO:</b><br>
                   - Presiona <b>[ M ]</b> para ir a la vista de MAPA.<br>
                   - Presiona <b>[ T ]</b> para ir al TABLERO / Mosaico.<br><br>
                   <b>EL ARCHIVO:</b><br>
                   Haz clic en cualquier constelación o fotografía para acceder a la ficha técnica de la obra y sus registros (videos, textos, procesos en Miro).` 
                : `<b>BASIC EXPLORATION:</b><br>
                   - <b>Drag</b> the dark background to move the canvas in any direction.<br>
                   - <b>Scroll</b> (or two-finger drag) to rotate the map.<br>
                   - <b>Double Click</b> (or quick tap) on empty space to plant a random connection seed.<br><br>
                   <b>KEYBOARD SHORTCUTS:</b><br>
                   - Press <b>[ M ]</b> to switch to MAP view.<br>
                   - Press <b>[ T ]</b> to switch to BOARD / Mosaic view.<br><br>
                   <b>THE ARCHIVE:</b><br>
                   Click on any constellation or photograph to access the project's technical sheet and its records (videos, texts, Miro process boards).`;
            openInfoModal(manualTitle, manualText, '❖');
        });
    }
    // --- RESTAURAR CLIC EN EL TÍTULO CENTRAL ---
    const centerTitleBtn = document.getElementById('center-title-btn');
    if (centerTitleBtn) {
        centerTitleBtn.addEventListener('click', () => {
            const menuData = currentLang === 'es' ? infoMenuData_es : infoMenuData_en;
            openInfoModal(currentLang === 'es' ? 'Biografía' : 'Biography', menuData["about me"], '❖');
        });
    }
});