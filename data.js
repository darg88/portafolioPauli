// data.js
export const categoryMap = {
        "curaduria": { icon: "❖", name_es: "Cura[nde][du]ría", name_en: "Cura[nde][du]ría" },
        "dramaturgias": { icon: "⨉", name_es: "Dramaturgias Expandidas", name_en: "Expanded Dramaturgies" },
        "brujeria": { icon: "꩜", name_es: "Actos de Posesión-y Brujería Performativa", name_en: "Possession and Witchcraft" },
        "manos": { icon: "✶", name_es: "Hacer con las Manos", name_en: "Making with Hands" },
        "default": { icon: "●", name_es: "Archivo", name_en: "Archive" } 
    };

  export   const infoMenuData_es = {
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

  export   const infoMenuData_en = {
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
   export  const projectsData = {
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
            <img src="img/cordelia/cordelia (3).JPG" alt="Cordelia foto 3">
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
    images: ["img/la_chica/lachica_1.JPG"], 
    
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
            <img src="img/la_chica/lachica_1.JPG" alt="La chica del cuarto de citas foto 1">
            <img src="img/la_chica/lachica_2.JPG" alt="La chica del cuarto de citas foto 2">
            <img src="img/la_chica/lachica_3.JPG" alt="La chica del cuarto de citas foto 3">
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

   export  const stitchPatterns = [null, '3 4', '10 8', '15 4 3 4', '20 5 5 5 5 5'];
   export  const threadColors = ['#c0392b', '#2e7d32', '#1a1a1a', '#f15e0f']; 

    // Solo los nombres reales de los proyectos para que orbiten
   export  const allWords = [
        "Germinal", "la siesta es sagrada", "uma rutucu", "agrupación Agrestes",
        "Ágora", "Ifigenia", "Cordelia", "la chica del cuarto de citas", "raros", "la fuerza de la sangre", "camada",
        "Proyecto Invocaciones", "la costurera y la bruja", "la casa como un nido y el hogar como una hoguera", "la limpia", "Ascenso", "El alba", "Conferencia performativa Tráfico de semillas", "la chola transparente",
        "DEMONNIA", "departamento de vestuario"
    ];


