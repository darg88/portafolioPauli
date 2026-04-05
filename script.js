// script.js

// 1. IMPORTAMOS LOS DATOS DESDE data.js
import { 
    categoryMap, 
    infoMenuData_es, 
    infoMenuData_en, 
    projectsData, 
    stitchPatterns, 
    threadColors, 
    allWords,       // <--- AQUÍ DEBE HABER UNA COMA
    helpData_es,    // <--- Y AQUÍ DEBE HABER UNA COMA
    helpData_en     // <--- EL ÚLTIMO NO LLEVA COMA
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    /* ====================================================================
       1. VARIABLES DE IDIOMA Y DATOS
       ==================================================================== */
    let currentLang = localStorage.getItem('paulinaLang') || 'es';
    let currentViewMode = localStorage.getItem('paulinaView') || 'map';
    let activeFilter = localStorage.getItem('paulinaFilter') || 'all'; 

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
        document.querySelectorAll('[data-es]').forEach(el => {
            if (el.getAttribute(`data-${currentLang}`)) {
                el.innerHTML = el.getAttribute(`data-${currentLang}`);
            }
        });
        if (document.getElementById('btn-view-map')) {
            document.getElementById('btn-view-map').innerText = currentLang === 'es' ? '꩜ MAPA' : '꩜ MAP';
        }
        if (document.getElementById('btn-view-mosaic')) {
            document.getElementById('btn-view-mosaic').innerText = currentLang === 'es' ? '⊞ MOSAICO' : '⊞ MOSAIC';
        }
        drawDataVis();
        if (currentViewMode === 'mosaic') drawMosaic();
        localStorage.setItem('paulinaLang', currentLang);
    }

    const btnLangEs = document.getElementById('btn-lang-es');
    const btnLangEn = document.getElementById('btn-lang-en');
    if (btnLangEs) btnLangEs.addEventListener('click', () => { currentLang = 'es'; updateLanguageUI(); });
    if (btnLangEn) btnLangEn.addEventListener('click', () => { currentLang = 'en'; updateLanguageUI(); });

    function applyViewMode() {
        if (currentViewMode === 'map') {
            if (btnMap) btnMap.classList.add('active');
            if (btnMosaic) btnMosaic.classList.remove('active');
            bodyEl.classList.add('viewing-map');
            bodyEl.classList.remove('viewing-mosaic');
            if (mosaicContainer) mosaicContainer.style.display = 'none';
            if (dataVisContainer) dataVisContainer.style.display = 'block';
        } else {
            if (btnMosaic) btnMosaic.classList.add('active');
            if (btnMap) btnMap.classList.remove('active');
            bodyEl.classList.add('viewing-mosaic');
            bodyEl.classList.remove('viewing-map');
            if (mosaicContainer) {
                mosaicContainer.style.display = 'block';
                drawMosaic();
            }
            if (dataVisContainer) dataVisContainer.style.display = 'none';
            
            // Mensaje de Onboarding solo para el mosaico
            if (!localStorage.getItem('paulinaMosaicOnboardingDone')) {
                setTimeout(() => {
                    const toast = document.getElementById('onboarding-toast');
                    if (toast) {
                        toast.innerHTML = currentLang === 'es' ? 'Arrastra las fotografías para<br>organizar tu propio atlas.' : 'Drag the photographs to<br>organize your own atlas.';
                        toast.classList.add('show');
                        setTimeout(() => { toast.classList.remove('show'); }, 12000);
                    }
                    localStorage.setItem('paulinaMosaicOnboardingDone', 'true');
                }, 1000);
            }
        }
        localStorage.setItem('paulinaView', currentViewMode);
    }

    if (btnMap) btnMap.addEventListener('click', () => { currentViewMode = 'map'; applyViewMode(); });
    if (btnMosaic) btnMosaic.addEventListener('click', () => { currentViewMode = 'mosaic'; applyViewMode(); });

    // --- LÓGICA DEL DROPDOWN DE CATEGORÍAS ---
    const filterMenuToggle = document.getElementById('filter-menu-toggle');
    const filterContent = document.getElementById('filter-content');

    if (filterMenuToggle && filterContent) {
        filterMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); 
            filterContent.classList.toggle('show');
            filterMenuToggle.classList.toggle('active');
            const arrow = filterMenuToggle.querySelector('.arrow');
            if (arrow) arrow.innerText = filterContent.classList.contains('show') ? '▴' : '▾';
        });

        document.addEventListener('click', (e) => {
            if (filterContent.classList.contains('show') && !filterContent.contains(e.target) && e.target !== filterMenuToggle) {
                filterContent.classList.remove('show');
                filterMenuToggle.classList.remove('active');
                const arrow = filterMenuToggle.querySelector('.arrow');
                if (arrow) arrow.innerText = '▾';
            }
        });
    }

  // APLICACIÓN DE FILTROS (SIN CIERRE AUTOMÁTICO)
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

            // ELIMINAMOS EL BLOQUE QUE CERRABA EL filterContent AQUÍ
        });
    });

    // Botón reset view (si existe)
    const resetBtn = document.getElementById('btn-reset-view');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            dvTranslateX = 0; dvTranslateY = 0; dvRotation = 0; 
            updateDVTransform();
            if (layer1) layer1.style.transform = `translate(0px, 0px)`;
            if (layer2) layer2.style.transform = `translate(0px, 0px)`;
        });
    }

    // --- 4. ATAJOS DE TECLADO Y ACCESIBILIDAD ---
    document.addEventListener('keydown', (e) => {
        // 1. Navegación con Tecla Enter
        if (e.key === 'Enter' && document.activeElement && document.activeElement.getAttribute('tabindex') === '0') {
            e.preventDefault();
            document.activeElement.click();
        }

        // 2. Cerrar todo con la tecla ESCAPE
        if (e.key === 'Escape') {
            const modal = document.getElementById('project-modal');
            const infoModal = document.getElementById('info-modal');
            const lightbox = document.getElementById('lightbox');
            const simpleDropdown = document.getElementById('simple-dropdown');
            
            if (modal && modal.classList.contains('active')) {
                const closeBtn = document.getElementById('modal-close');
                if (closeBtn) closeBtn.click();
            }
            if (infoModal && infoModal.classList.contains('active')) {
                const closeBtn = document.getElementById('info-modal-close');
                if (closeBtn) closeBtn.click();
            }
            if (lightbox && lightbox.classList.contains('active')) {
                const closeBtn = document.getElementById('lightbox-close');
                if (closeBtn) closeBtn.click();
            }
            if (simpleDropdown && simpleDropdown.classList.contains('active')) {
                simpleDropdown.classList.remove('active');
            }
        }

        // 3. Navegar en la galería con las flechas del teclado
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'ArrowRight') { 
                e.preventDefault(); 
                navigateLightbox('next'); 
            }
            if (e.key === 'ArrowLeft') { 
                e.preventDefault(); 
                navigateLightbox('prev'); 
            }
        }
        
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const key = e.key.toLowerCase();
        if (key === 'm' && btnMap) btnMap.click(); 
        if (key === 't' && btnMosaic) btnMosaic.click(); 
    });

    // Onboarding inicial
    if (!localStorage.getItem('paulinaOnboardingDone')) {
        setTimeout(() => {
            const toast = document.getElementById('onboarding-toast');
            if (toast) {
                const toastText = toast.getAttribute(`data-${currentLang}`);
                if (toastText) toast.innerHTML = toastText;
                toast.classList.add('show');
                setTimeout(() => { toast.classList.remove('show'); }, 12000);
            }
            localStorage.setItem('paulinaOnboardingDone', 'true');
        }, 2000);
    }

    /* ====================================================================
       4. VENTANAS MODALES Y CONTACTO
       ==================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const simpleDropdown = document.getElementById('simple-dropdown');
    if (menuToggle && simpleDropdown) {
        menuToggle.addEventListener('click', (e) => { 
            simpleDropdown.classList.toggle('active'); 
            e.stopPropagation(); 
        });
        document.addEventListener('click', () => simpleDropdown.classList.remove('active'));
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Variables de memoria para el carrusel
    let currentGalleryImages = [];
    let currentImageIndex = 0;

    function openLightbox(src) { 
        if (!lightbox || !lightboxImg) return;
        
        // Recopilar todas las imágenes de la galería del proyecto abierto
        const activeModal = document.getElementById('project-modal');
        if (activeModal) {
            const imgs = Array.from(activeModal.querySelectorAll('.modal-gallery img, .custom-layout-container img:not(.custom-image-full)'));
            
            if (imgs.length > 0) {
                currentGalleryImages = imgs.map(img => img.src);
                currentImageIndex = currentGalleryImages.indexOf(src);
                if (currentImageIndex === -1) currentImageIndex = 0;
            } else {
                currentGalleryImages = [src];
                currentImageIndex = 0;
            }
        } else {
            currentGalleryImages = [src];
            currentImageIndex = 0;
        }
        
        lightboxImg.src = currentGalleryImages[currentImageIndex]; 
        lightbox.classList.add('active'); 
    }

    // Función para avanzar o retroceder
    function navigateLightbox(direction) {
        if (!lightboxImg) return;
        if (currentGalleryImages.length <= 1) return;
        
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        }
        lightboxImg.src = currentGalleryImages[currentImageIndex];
    }

    // Configurar lightbox
    if (lightboxImg) {
        lightboxImg.style.cursor = 'pointer';
        lightboxImg.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox('next');
        });
    }

    const lightboxClose = document.getElementById('lightbox-close');
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            if (lightbox) lightbox.classList.remove('active');
        });
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => { 
            if (e.target !== lightboxImg && lightbox) lightbox.classList.remove('active'); 
        });
    }

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

        if (modalTitle) {
            modalTitle.style.fontSize = project.title && project.title.length > 30 ? "1.5rem" : "";
            modalTitle.innerText = project.title || "Sin título";
        }
        
        if (modalCategory) {
            modalCategory.innerHTML = `<span class="geo-icon">${catInfo.icon || '●'}</span> ${catInfo['name_' + currentLang] || catInfo.name_es || 'Archivo'}`;
        }
        
        const rolesContainer = document.getElementById('modal-roles');
        if (rolesContainer) {
            rolesContainer.innerHTML = '';
            const currentRoles = currentLang === 'es' ? project.roles_es : project.roles_en;
            if (currentRoles && currentRoles.length > 0) {
                currentRoles.forEach(role => {
                    const span = document.createElement('span');
                    span.className = 'role-tag'; 
                    span.innerText = role;
                    rolesContainer.appendChild(span);
                });
            }
        }

        const standardLayout = document.getElementById('standard-layout');
        const customContainer = document.getElementById('custom-layout-container');

        if (project.custom_layout) {
            if (standardLayout) standardLayout.style.display = 'none';
            if (customContainer) {
                customContainer.innerHTML = project.custom_layout;
                customContainer.classList.add('active');
                
                customContainer.querySelectorAll('[data-es]').forEach(el => { 
                    const translated = el.getAttribute(`data-${currentLang}`);
                    if (translated) el.innerHTML = translated;
                });
                customContainer.querySelectorAll('img:not(.custom-image-full)').forEach(img => {
                    img.style.cursor = 'zoom-in'; 
                    img.addEventListener('click', () => openLightbox(img.src));
                });
            }
        } else {
            if (customContainer) {
                customContainer.classList.remove('active');
                customContainer.innerHTML = '';
            }
            if (standardLayout) standardLayout.style.display = 'block';
            if (modalDesc) modalDesc.innerHTML = project['description_' + currentLang] || "Sin descripción disponible";
            
            if (modalVideo && modalVideoContainer) {
                if (project.video && project.video !== "") { 
                    modalVideo.src = project.video; 
                    modalVideoContainer.style.display = 'block'; 
                } else { 
                    modalVideo.src = ""; 
                    modalVideoContainer.style.display = 'none'; 
                }
            }
            
            if (modalGallery) {
                modalGallery.innerHTML = ''; 
                if (project.images && project.images.length > 0) {
                    project.images.forEach(imgSrc => {
                        const img = document.createElement('img'); 
                        img.src = imgSrc; 
                        img.addEventListener('click', () => openLightbox(img.src)); 
                        modalGallery.appendChild(img);
                    });
                } else if (projectName !== "default") {
                    for (let i = 1; i <= 3; i++) {
                        const cleanWord = projectName.replace(/[^a-zA-Z]/g, '').substring(0, 10);
                        const img = document.createElement('img'); 
                        img.src = `https://picsum.photos/seed/${cleanWord}${i}/800/800`; 
                        img.addEventListener('click', () => openLightbox(img.src)); 
                        modalGallery.appendChild(img);
                    }
                }
            }
        }
        
        if (modalMiroContainer) {
            if (project.miro && project.miro !== "") {
                modalMiroContainer.innerHTML = `<iframe src="${project.miro}" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>`;
                modalMiroContainer.style.display = 'block';
            } else {
                modalMiroContainer.innerHTML = ''; 
                modalMiroContainer.style.display = 'none';
            }
        }
        
        if (modal) modal.classList.add('active');
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => { 
            if (modal) modal.classList.remove('active'); 
            setTimeout(() => { 
                if (modalVideo) modalVideo.src = ""; 
                if (modalMiroContainer) modalMiroContainer.innerHTML = ''; 
            }, 400); 
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal && modalClose) {
                modalClose.click();
            }
        });
    }

    const infoModalEl = document.getElementById('info-modal');
    const infoModalClose = document.getElementById('info-modal-close');
    const infoModalTitle = document.getElementById('info-modal-title');
    const infoModalDesc = document.getElementById('info-modal-desc-text');
    
    function openInfoModal(title, description, icon = '✶') {
        if (infoModalTitle) {
            infoModalTitle.innerHTML = `<span class="title-icon geo-icon">${icon}</span> ${title}`;
        }
        if (infoModalDesc) infoModalDesc.innerHTML = description;
        if (infoModalEl) infoModalEl.classList.add('active');
        if (simpleDropdown) simpleDropdown.classList.remove('active'); 

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            // Remove existing listeners to avoid duplicates
            const newForm = contactForm.cloneNode(true);
            contactForm.parentNode.replaceChild(newForm, contactForm);
            
            newForm.addEventListener('submit', async (e) => {
                e.preventDefault(); 
                const btn = newForm.querySelector('.submit-btn');
                if (btn) {
                    btn.innerText = currentLang === 'es' ? 'ENVIANDO...' : 'SENDING...'; 
                    btn.disabled = true;
                }

                try {
                    const response = await fetch(newForm.action, { 
                        method: newForm.method, 
                        body: new FormData(newForm), 
                        headers: { 'Accept': 'application/json' } 
                    });
                    if (response.ok) {
                        const successText = currentLang === 'es' ? '<b>✶ MENSAJE ENVIADO ✶</b><br><br>Gracias por escribir. Será revisado pronto.' : '<b>✶ MESSAGE SENT ✶</b><br><br>Thank you for writing. It will be reviewed shortly.';
                        newForm.innerHTML = `<div style="padding: 20px; border: 1px dashed #2e7d32; background: rgba(46,125,50,0.1); color: #2e7d32; text-align: center;">${successText}</div>`;
                    } else {
                        if (btn) {
                            btn.innerText = 'ERROR'; 
                            btn.disabled = false;
                        }
                    }
                } catch (error) {
                    if (btn) {
                        btn.innerText = 'ERROR'; 
                        btn.disabled = false;
                    }
                }
            });
        }
    }

    // Menú dropdown items
    document.querySelectorAll('#simple-dropdown a span').forEach(span => {
        span.addEventListener('click', (e) => {
            const link = span.parentElement; 
            if (link && link.getAttribute('href') !== '#') return; 
            e.preventDefault(); 
            const sectionName = span.innerText;
            const menuData = currentLang === 'es' ? infoMenuData_es : infoMenuData_en;
            openInfoModal(sectionName, menuData[sectionName] || "Contenido próximamente...", '✶');
        });
    });

    const centerTitleBtn = document.getElementById('center-title-btn');
    if (centerTitleBtn) {
        centerTitleBtn.addEventListener('click', () => {
            const menuData = currentLang === 'es' ? infoMenuData_es : infoMenuData_en;
            openInfoModal(currentLang === 'es' ? 'Biografía' : 'Biography', menuData["about me"] || "Información no disponible", '❖');
        });
    }
    
    if (infoModalClose) {
        infoModalClose.addEventListener('click', () => {
            if (infoModalEl) infoModalEl.classList.remove('active');
        });
    }
    
    if (infoModalEl) {
        infoModalEl.addEventListener('click', (e) => {
            if (e.target === infoModalEl && infoModalClose) {
                infoModalClose.click();
            }
        });
    }
   
    function drawMosaic() {
        if (!mosaicContainer) return;
        mosaicContainer.innerHTML = '';
        
        // Verificar que allWords y projectsData existan
        if (!allWords || !projectsData) return;
        
        const scrollExtension = document.createElement('div');
        scrollExtension.style.position = 'absolute'; 
        scrollExtension.style.width = '1px'; 
        scrollExtension.style.height = '300vh'; 
        scrollExtension.style.top = '0'; 
        scrollExtension.style.left = '0'; 
        scrollExtension.style.zIndex = '-1';
        mosaicContainer.appendChild(scrollExtension);

        const displayWords = activeFilter === 'all' 
            ? allWords 
            : allWords.filter(word => {
                const proj = projectsData[word] || projectsData["default"];
                return (proj.category || "default").includes(activeFilter);
            });            
        
        const isMobile = window.innerWidth <= 768; 
        
        const cols = isMobile ? 2 : 4; 
        const gridWidth = isMobile ? 90 : 98; 
        const colWidth = gridWidth / cols; 
        const rowSpacing = isMobile ? 30 : 40; 

        displayWords.forEach((word, index) => {
            const project = projectsData[word] || projectsData["default"];
            const catInfo = categoryMap[project.category] || categoryMap["default"];
            const item = document.createElement('div'); 
            item.className = 'mosaic-item';
            
            const formats = ['horizontal', 'vertical', 'square', 'panoramic'];
            const randomFormat = formats[Math.floor(Math.random() * formats.length)];
            item.classList.add(`format-${randomFormat}`);

            let baseWidth = isMobile ? (window.innerWidth / 2.8) : (window.innerWidth / 5.5);
            if (randomFormat === 'horizontal' || randomFormat === 'panoramic') baseWidth *= 1.1;
            
            let escalaAleatoria = 0.95 + (Math.random() * 0.1); 
            item.style.width = `${baseWidth * escalaAleatoria}px`; 
            item.style.transform = `rotate(0deg)`;

            const coloresFondo = ['#e9e9e5', '#dcdcd5', '#fdfcf8'];
            item.style.backgroundColor = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];            
            
            const col = index % cols; 
            const row = Math.floor(index / cols);
            
            const offsetLeft = isMobile ? 2 : 1; 
            const leftPercent = offsetLeft + (col * colWidth) + 5; 
            
            const offsetTop = isMobile ? 15 : 15; 
            const topPercent = offsetTop + (row * rowSpacing + 2) + (Math.random() * 2); 
            
            item.style.left = `${leftPercent}vw`; 
            item.style.top = `${topPercent}vh`; 
            item.style.zIndex = index + 10; 

            const cleanWord = word.replace(/[^a-zA-Z]/g, '').substring(0, 10);
            let pW = 600, pH = 600;
            if (randomFormat === 'horizontal') { pW = 800; pH = 600; }
            if (randomFormat === 'vertical') { pW = 600; pH = 800; }
            if (randomFormat === 'panoramic') { pW = 800; pH = 450; }

            const imgSrc = (project.images && project.images.length > 0) ? project.images[0] : `https://picsum.photos/seed/${cleanWord}/${pW}/${pH}`;
            
            const img = document.createElement('img'); 
            img.src = imgSrc; 
            img.alt = project.title || word;
            img.loading = "lazy"; 
            
            const overlay = document.createElement('div'); 
            overlay.className = 'mosaic-overlay';
            const iconToUse = catInfo ? catInfo.icon : "●";
            overlay.innerHTML = `<span class="geo-icon" style="font-size:0.6rem;">${iconToUse}</span> <span class="mosaic-title">${(project.title || word).toUpperCase()}</span>`;
            
            item.setAttribute('tabindex', '0');
            item.setAttribute('title', `Ver proyecto: ${project.title || word}`);
            item.appendChild(img); 
            item.appendChild(overlay); 
            mosaicContainer.appendChild(item); 
            makeDraggable(item, word);
        });
    }
    
    function makeDraggable(element, wordToOpen) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 
        let hasMoved = false;
        
        element.addEventListener('mousedown', dragMouseDown); 
        element.addEventListener('touchstart', dragTouchStart, { passive: false });

        function bringToFront() { 
            document.querySelectorAll('.mosaic-item').forEach(el => el.style.zIndex = 10); 
            element.style.zIndex = 100; 
        }

        function dragMouseDown(e) { 
            e.preventDefault(); 
            pos3 = e.clientX; 
            pos4 = e.clientY; 
            hasMoved = false; 
            bringToFront(); 
            document.addEventListener('mouseup', closeDragElement); 
            document.addEventListener('mousemove', elementDrag); 
        }
        
        function dragTouchStart(e) { 
            e.preventDefault();
            pos3 = e.touches[0].clientX; 
            pos4 = e.touches[0].clientY; 
            hasMoved = false; 
            bringToFront(); 
            document.addEventListener('touchend', closeDragElement); 
            document.addEventListener('touchmove', elementTouchDrag, { passive: false }); 
        }

        function elementDrag(e) { 
            e.preventDefault(); 
            hasMoved = true; 
            pos1 = pos3 - e.clientX; 
            pos2 = pos4 - e.clientY; 
            pos3 = e.clientX; 
            pos4 = e.clientY; 
            element.style.top = (element.offsetTop - pos2) + "px"; 
            element.style.left = (element.offsetLeft - pos1) + "px"; 
        }
        
        function elementTouchDrag(e) { 
            e.preventDefault(); 
            hasMoved = true; 
            pos1 = pos3 - e.touches[0].clientX; 
            pos2 = pos4 - e.touches[0].clientY; 
            pos3 = e.touches[0].clientX; 
            pos4 = e.touches[0].clientY; 
            element.style.top = (element.offsetTop - pos2) + "px"; 
            element.style.left = (element.offsetLeft - pos1) + "px"; 
        }

        function closeDragElement() { 
            document.removeEventListener('mouseup', closeDragElement); 
            document.removeEventListener('mousemove', elementDrag); 
            document.removeEventListener('touchend', closeDragElement); 
            document.removeEventListener('touchmove', elementTouchDrag); 
            if (!hasMoved) openProjectModal(wordToOpen); 
        }
    }

    function drawDataVis() {
        if (!dataLinesSvg || !dataNodesContainer) return;
        dataLinesSvg.innerHTML = ''; 
        dataNodesContainer.innerHTML = ''; 
        window.globalNodesList = []; 
        
        if (!allWords || !projectsData) return;
        
        const displayWords = activeFilter === 'all' 
            ? allWords 
            : allWords.filter(word => {
                const proj = projectsData[word] || projectsData["default"];
                return (proj.category || "default").includes(activeFilter);
            }); 
            
        if (displayWords.length === 0) return; 

        const centerX = 0, centerY = 0; 
        const isMobile = window.innerWidth <= 768;
        
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
            const el = document.createElement('div'); 
            el.className = 'dv-node';
            
            const randomFontSize = (Math.random() * 0.3) + (isMobile ? 0.65 : 0.85);           
            const textSpan = document.createElement('span'); 
            textSpan.className = 'dv-text';
            textSpan.style.fontSize = `${randomFontSize}rem`; 
            textSpan.style.lineHeight = '1.3'; 
            textSpan.style.whiteSpace = 'normal'; 
            textSpan.style.display = 'block';
            textSpan.style.width = '100%';
            textSpan.style.transformOrigin = 'center center'; // Para que gire sobre su propio eje
            textSpan.innerHTML = `<span class="node-icon geo-icon">${catInfo.icon || '●'}</span> ${word}`; 
            el.appendChild(textSpan);
            
           let baseAngleDeg = angle * (180 / Math.PI); // Guardamos el ángulo real
            let rotation = baseAngleDeg;
            const w = isMobile ? 160 : 280;
            el.style.width = `${w}px`;

            if (rotation > 90 && rotation < 270) {
                rotation += 180; 
                el.style.transformOrigin = "right center";
                el.style.textAlign = "right";
                textSpan.style.textAlign = "right"; // Se lo aplicamos también al span
                el.style.left = `${x - w}px`; 
            } else {
                el.style.transformOrigin = "left center";
                el.style.textAlign = "left";
                textSpan.style.textAlign = "left"; // Se lo aplicamos también al span
                el.style.left = `${x}px`;
            }
            
            el.style.top = `${y - 10}px`; 
            el.style.transform = `rotate(${rotation}deg)`; 
            el.addEventListener('click', () => openProjectModal(word));
            el.setAttribute('tabindex', '0');
            el.setAttribute('title', `Abrir: ${projectInfo.title || word}`);
            
            dataNodesContainer.appendChild(el); 
            // Guardamos el ángulo base para los cálculos matemáticos
            window.globalNodesList.push({ x: x, y: y, element: el, baseAngleDeg: baseAngleDeg });
        });

        if (stitchPatterns && threadColors) {
            for (let i = 0; i < totalNodes; i++) {
                const targetIndex = (i + Math.floor(totalNodes / 2) + Math.floor(Math.random()*5 - 2)) % totalNodes;
                const start = nodeCoords[i], end = nodeCoords[targetIndex];
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', `M ${start.x} ${start.y} Q ${centerX} ${centerY} ${end.x} ${end.y}`);
                path.setAttribute('fill', 'none'); 
                path.setAttribute('stroke', threadColors[Math.floor(Math.random() * threadColors.length)]); 
                path.setAttribute('stroke-width', (Math.random() * 0.6 + 0.4).toString()); 
                path.setAttribute('opacity', '0.6');
                const randomStitch = stitchPatterns[Math.floor(Math.random() * stitchPatterns.length)];
                if(randomStitch) path.setAttribute('stroke-dasharray', randomStitch); 
                dataLinesSvg.appendChild(path);
            }
        }
    }

   function updateDVTransform() { 
        if (dataVisContainer) {
            // Esto gira todo el lienzo
            dataVisContainer.style.transform = `translate(${dvTranslateX}px, ${dvTranslateY}px) rotate(${dvRotation}deg)`;

            // 👇 NUEVA MAGIA: Mantener las palabras siempre al derecho 👇
            let currentRot = dvRotation % 360;
            if (currentRot < 0) currentRot += 360; // Normalizar a positivo

            if (window.globalNodesList) {
                window.globalNodesList.forEach(node => {
                    if (node.baseAngleDeg === undefined) return;

                    // Calculamos el ángulo absoluto de la palabra en la pantalla
                    let absoluteAngle = (node.baseAngleDeg + currentRot) % 360;
                    
                    // ¿Quedó en la mitad izquierda (boca abajo)?
                    let isUpsideDown = (absoluteAngle > 90 && absoluteAngle < 270);
                    // ¿Se dibujó originalmente en la mitad izquierda?
                    let originallyFlipped = (node.baseAngleDeg > 90 && node.baseAngleDeg < 270);

                    const textSpan = node.element.querySelector('.dv-text');
                    if (textSpan) {
                        // Si la palabra cruzó el umbral y está de cabeza, la giramos 180 grados y cambiamos su alineación
                        if (isUpsideDown !== originallyFlipped) {
                            textSpan.style.transform = "rotate(180deg)";
                            textSpan.style.textAlign = originallyFlipped ? "left" : "right";
                        } else {
                            // Si está en su posición natural
                            textSpan.style.transform = "rotate(0deg)";
                            textSpan.style.textAlign = originallyFlipped ? "right" : "left";
                        }
                    }
                });
            }
        }
    }
    let ticking = false;

    window.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const moveX = (e.clientX - window.innerWidth / 2) * 0.03; 
                const moveY = (e.clientY - window.innerHeight / 2) * 0.03;
                
                if (layer1) layer1.style.transform = `translate(${moveX}px, ${moveY}px)`; 
                if (layer2) layer2.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
                
                dvTranslateX = moveX * 0.5; 
                dvTranslateY = moveY * 0.5; 
                updateDVTransform();
                
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('wheel', (e) => {
        const modalActive = modal && modal.classList.contains('active');
        const infoModalActive = infoModalEl && infoModalEl.classList.contains('active');
        const lightboxActive = lightbox && lightbox.classList.contains('active');
        
        if (currentViewMode !== 'map' || modalActive || infoModalActive || lightboxActive) return; 
        dvRotation += e.deltaY * 0.05; 
        updateDVTransform();
    });

    let lastTouchY = 0;
    window.addEventListener('touchstart', (e) => lastTouchY = e.touches[0].clientY);
    window.addEventListener('touchmove', (e) => {
        const modalActive = modal && modal.classList.contains('active');
        const infoModalActive = infoModalEl && infoModalEl.classList.contains('active');
        const lightboxActive = lightbox && lightbox.classList.contains('active');
        
        if (currentViewMode !== 'map' || modalActive || infoModalActive || lightboxActive) return; 
        e.preventDefault(); 
        const currentTouchY = e.touches[0].clientY;
        dvRotation += (lastTouchY - currentTouchY) * 0.4; 
        lastTouchY = currentTouchY; 
        updateDVTransform();
    }, { passive: false }); 

    window.addEventListener('resize', () => { 
        drawBackground('bg-canvas-layer1', 40); 
        drawBackground('bg-canvas-layer2', 60); 
        drawDataVis(); 
        if (currentViewMode === 'mosaic') drawMosaic(); 
    });

    function plantSeed(clientX, clientY, targetEl) {
        if (currentViewMode === 'mosaic') return;
        
        const modalActive = modal && modal.classList.contains('active');
        const infoModalActive = infoModalEl && infoModalEl.classList.contains('active');
        const lightboxActive = lightbox && lightbox.classList.contains('active');
        
        if (modalActive || infoModalActive || lightboxActive) return;
        
        if (targetEl && (targetEl.closest('header, .center-title, .dv-node, .project-legend'))) return;

        const dx = clientX - window.innerWidth / 2; 
        const dy = clientY - window.innerHeight / 2; 
        const angle = -dvRotation * (Math.PI / 180); 
        const localX = (dx - dvTranslateX) * Math.cos(angle) - (dy - dvTranslateY) * Math.sin(angle); 
        const localY = (dx - dvTranslateX) * Math.sin(angle) + (dy - dvTranslateY) * Math.cos(angle);

        if (!threadColors || !stitchPatterns || !dataNodesContainer || !dataLinesSvg) return;
        
        const seedColor = threadColors[Math.floor(Math.random() * threadColors.length)]; 
        const stitchPattern = stitchPatterns[Math.floor(Math.random() * stitchPatterns.length)];
        const seedEl = document.createElement('div'); 
        seedEl.className = 'seed-node geo-icon'; 
        seedEl.innerText = ['✶', '❖', '⨉', '꩜'][Math.floor(Math.random() * 4)];
        seedEl.style.left = `${localX}px`; 
        seedEl.style.top = `${localY}px`; 
        seedEl.style.color = seedColor; 
        dataNodesContainer.appendChild(seedEl);

        if (window.globalNodesList.length === 0) return;
        
        const targetNode = window.globalNodesList[Math.floor(Math.random() * window.globalNodesList.length)];
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${localX} ${localY} Q ${(localX + targetNode.x) / 2 + (Math.random() * 200 - 100)} ${(localY + targetNode.y) / 2 + (Math.random() * 200 - 100)} ${targetNode.x} ${targetNode.y}`);
        path.setAttribute('fill', 'none'); 
        path.setAttribute('stroke', seedColor); 
        path.setAttribute('stroke-width', '1.5'); 
        dataLinesSvg.appendChild(path);

        const length = path.getTotalLength(); 
        path.style.strokeDasharray = length; 
        path.style.strokeDashoffset = length; 
        path.getBoundingClientRect(); 
        path.style.transition = 'stroke-dashoffset 0.8s ease-in-out'; 
        path.style.strokeDashoffset = '0';
        
        setTimeout(() => { 
            path.style.transition = 'none'; 
            path.style.strokeDasharray = stitchPattern || ''; 
            path.style.strokeDashoffset = ''; 
            const textSpan = targetNode.element ? targetNode.element.querySelector('.dv-text') : null;
            if (textSpan) {
                textSpan.style.color = seedColor; 
                textSpan.style.fontWeight = '400'; 
                setTimeout(() => { 
                    if (textSpan) {
                        textSpan.style.color = ''; 
                        textSpan.style.fontWeight = ''; 
                    }
                }, 2500);
            }
        }, 800); 
    }

    window.addEventListener('dblclick', (e) => plantSeed(e.clientX, e.clientY, e.target));
    
    let lastTapTime = 0;
    window.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime(); 
        const tapLength = currentTime - lastTapTime;
        if (tapLength < 300 && tapLength > 0 && e.changedTouches[0]) { 
            plantSeed(e.changedTouches[0].clientX, e.changedTouches[0].clientY, e.target); 
            e.preventDefault(); 
        }
        lastTapTime = currentTime;
    });

    /* ====================================================================
       6. ARRANQUE DEL SISTEMA (EJECUCIÓN INICIAL)
       ==================================================================== */
    function drawBackground(svgId, lineCount) {
        const svg = document.getElementById(svgId);
        if (!svg) return;
        svg.innerHTML = '';
        const width = window.innerWidth * 1.1; 
        const height = window.innerHeight * 1.1;
        
        if (!threadColors || !stitchPatterns) return;
        
        for (let i = 0; i < lineCount; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', Math.random() * width); 
            line.setAttribute('y1', Math.random() * height);
            line.setAttribute('x2', Math.random() * width); 
            line.setAttribute('y2', Math.random() * height);
            line.setAttribute('stroke', threadColors[Math.floor(Math.random() * threadColors.length)]); 
            line.setAttribute('stroke-width', (Math.random() * 0.5 + 0.3).toString());
            const randomStitch = stitchPatterns[Math.floor(Math.random() * stitchPatterns.length)];
            if (randomStitch) line.setAttribute('stroke-dasharray', randomStitch);
            line.setAttribute('opacity', Math.random() * 0.3 + 0.05); 
            svg.appendChild(line);
        }
    }
    
    drawBackground('bg-canvas-layer1', 40); 
    drawBackground('bg-canvas-layer2', 60); 
    
    updateLanguageUI();
    applyViewMode();
    
    // 7. BUSCADOR EN TIEMPO REAL (CON TOLERANCIA A ERRORES/TILDES)
    const searchInput = document.getElementById('project-search');
    
    // Función auxiliar para quitar tildes y normalizar el texto
    const normalizeText = (text) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = normalizeText(e.target.value);
            
            document.querySelectorAll('.dv-node').forEach(node => {
                const text = normalizeText(node.innerText);
                const isMatch = text.includes(term);
                node.style.opacity = isMatch ? '1' : '0.1';
                node.style.pointerEvents = isMatch ? 'auto' : 'none';
                node.style.transition = 'opacity 0.3s ease';
            });

            document.querySelectorAll('.mosaic-item').forEach(item => {
                const text = normalizeText(item.innerText);
                const isMatch = text.includes(term);
                item.style.opacity = isMatch ? '1' : '0.1';
                item.style.pointerEvents = isMatch ? 'auto' : 'none';
                item.style.transition = 'opacity 0.3s ease';
            });
        });
    }

// --- BOTÓN DE AYUDA Y FAQ ---
    const btnHelp = document.getElementById('btn-help');
    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            const data = currentLang === 'es' ? helpData_es : helpData_en;
            openInfoModal(data.title, data.content, '❖');
        });
    }
});