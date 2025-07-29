// ================================================
// Aarhus University Naturhistorisk Museum
// Main JavaScript File
// ================================================

// Language translations
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.safari': 'Safari Quiz',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        
        // Homepage Hero
        'home.hero.title': 'Welcome to <strong>Natural History Museum</strong>',
        'home.hero.subtitle': 'Discover the wonders of natural history at Aarhus University\'s Natural History Museum. Explore our exhibitions and experience the fascinating world of animals and nature.',
        'home.hero.cta': 'Explore Museum',
        
        // Homepage Intro
        'home.intro.title': 'A window to nature\'s diversity',
        'home.intro.subtitle': 'With over 150 years of history and more than 5 million objects, we are one of Denmark\'s leading natural history museums',
        
        // Homepage Features
        'home.visit.title': 'Plan your visit',
        'home.visit.text1': 'We have been working hard on new, interesting exhibitions, and we look forward to your visit.',
        'home.visit.text2': 'Our museum offers a unique opportunity to explore natural history through interactive exhibits and fascinating displays.',
        'home.visit.cta': 'Opening Hours & Tickets',
        
        'home.exhibitions.title': 'Exhibitions',
        'home.exhibitions.text1': 'Get up close and personal with animals of the world. Visit our exhibitions with more than 2000 preserved animals and make sure to see our special exhibition as well.',
        'home.exhibitions.text2': 'Our collections span from prehistoric fossils to modern species, offering insights into the diversity and evolution of life on Earth.',
        'home.exhibitions.cta': 'Current Exhibitions',
        
        'home.kids.title': 'Kid-friendly Museum',
        'home.kids.text1': 'Natural History Museum is for all ages, but children especially. Find out why.',
        'home.kids.text2': 'We offer interactive exhibits designed specifically for young explorers, with hands-on activities that make learning about nature fun and engaging.',
        'home.kids.cta': 'Activities for Children',
        
        'home.mols.title': 'The Mols Laboratory Research Station',
        'home.mols.text1': 'The Mols Laboratory is the museum\'s research station in Mols Bjerge, approx. 40 minutes drive from Aarhus. The scenic landscape and marked trails are perfect for a day trip.',
        'home.mols.text2': 'This unique facility allows visitors to see scientific research in action and explore the beautiful natural surroundings.',
        'home.mols.cta': 'Visit Mols Laboratory',
        
        // Homepage Digital CTA
        'home.digital.title': 'Enhance Your Visit with Our Digital Experience',
        'home.digital.text': 'Try our new Safari Quiz app to test your knowledge about animals and their survival tactics.',
        'home.digital.cta': 'Discover Safari Quiz',
        
        // Homepage Events
        'home.events.title': 'Upcoming Events',
        'home.events.subtitle': 'Join our exciting events and learn more about nature',
        
        'home.event1.title': 'Climate Change and Biodiversity',
        'home.event1.text': 'Learn about how climate change affects the world\'s wildlife and what we can do to protect biodiversity.',
        'home.event1.cta': 'Read More',
        
        'home.event2.title': 'Fossil Workshop for Kids',
        'home.event2.text': 'Learn about fossils and paleontology through fun activities. Perfect for children ages 7-12.',
        'home.event2.cta': 'Register',
        
        'home.event3.title': 'Secrets of the Ocean',
        'home.event3.text': 'Dive into the depths of the ocean and experience the fantastic creatures that live in our oceans.',
        'home.event3.cta': 'View Exhibition',
        
        // Safari Quiz Page
        'safari.hero.title': 'Discover <strong>Safari Quiz</strong>',
        'safari.hero.subtitle': 'A revolutionary digital experience designed to transform your visit to the Natural History Museum. Test your survival knowledge and learn about fascinating animals through an interactive quiz adventure.',
        
        'safari.intro.title': 'How Safari Quiz Works',
        'safari.intro.text1': 'An innovative digital experience that transforms museum visits through interactive learning. Safari Quiz combines educational content with gamification to teach visitors about wildlife behaviors and survival strategies.',
        'safari.intro.text2': 'Using cutting-edge technology, the app creates a personalized journey that connects exhibits with practical knowledge about animal encounters.',
        
        // Steps
        'safari.step1.title': 'Scan QR Code',
        'safari.step1.text1': 'Begin your adventure by scanning a QR code placed next to an exhibit in the museum. Each QR code launches the Safari Quiz app and connects you to that specific section of the museum.',
        'safari.step1.text2': 'The QR codes are strategically placed throughout the museum to guide your exploration.',
        
        'safari.step2.title': 'Choose Your Animal',
        'safari.step2.text': 'After scanning the QR code, you\'ll be presented with a selection of animals related to the exhibit. Pick the animal you want to learn more about from the available options.',
        
        'safari.step3.title': 'Learn About the Animal',
        'safari.step3.text': 'Once you\'ve selected an animal, the app will display detailed information about it, including its habitat, behaviors, and survival tactics. Take your time to learn these facts - they\'ll help you in the next step!',
        
        'safari.step4.title': 'Take the Safari Quiz',
        'safari.step4.text1': 'Hit the Start button to begin a 4-question safari quiz that tests whether you know how to behave if you encounter this animal in the wild. The quiz simulates real-life scenarios and challenges you to make the right decisions.',
        'safari.step4.text2': 'Each question tests a different aspect of animal behavior and human-animal interaction safety.',
        
        'safari.step5.title': 'Get Your Feedback',
        'safari.step5.text1': 'Based on your answers in the quiz, you\'ll receive personalized feedback about how well you would handle an encounter with this animal in the wild.',
        'safari.step5.text2': 'Learn about the consequences of your decisions and gain valuable insights into animal behavior that could one day save your life in a real wilderness encounter.',
        
        'safari.cta.title': 'Ready to test your knowledge?',
        'safari.cta.text': 'Visit the Natural History Museum today and experience Safari Quiz. An unforgettable learning adventure awaits!',
        'safari.cta.button': 'Plan Your Visit',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.address': 'Wilhelm Meyers Allé 10, Building 1137 · 8000 Aarhus C · Tel: +45 8715 0000'
    },
    da: {
        // Navigation
        'nav.home': 'Forside',
        'nav.safari': 'Safari Quiz',
        'nav.about': 'Om os',
        'nav.contact': 'Kontakt',
        
        // Homepage Hero
        'home.hero.title': 'Velkommen til <strong>Naturhistorisk Museum</strong>',
        'home.hero.subtitle': 'Oplev naturens vidundere på Aarhus Universitets naturhistoriske museum. Udforsk vores udstillinger og lær om den fascinerende verden af dyr og natur.',
        'home.hero.cta': 'Udforsk museet',
        
        // Homepage Intro
        'home.intro.title': 'Et vindue til naturens mangfoldighed',
        'home.intro.subtitle': 'Med over 150 års historie og mere end 5 millioner genstande er vi et af Danmarks førende naturhistoriske museer',
        
        // Homepage Features
        'home.visit.title': 'Planlæg dit besøg',
        'home.visit.text1': 'Vi har arbejdet hårdt på nye, interessante udstillinger, og vi glæder os til dit besøg.',
        'home.visit.text2': 'Vores museum tilbyder en unik mulighed for at udforske naturhistorie gennem interaktive udstillinger og fascinerende displays.',
        'home.visit.cta': 'Åbningstider & billetter',
        
        'home.exhibitions.title': 'Udstillinger',
        'home.exhibitions.text1': 'Kom tæt på verdens dyr. Besøg vores udstillinger med mere end 2000 præparerede dyr og sørg for at se vores særudstilling også.',
        'home.exhibitions.text2': 'Vores samlinger spænder fra forhistoriske fossiler til moderne arter og giver indsigt i livets mangfoldighed og evolution på Jorden.',
        'home.exhibitions.cta': 'Aktuelle udstillinger',
        
        'home.kids.title': 'Børnevenligt museum',
        'home.kids.text1': 'Naturhistorisk Museum er for alle aldre, men især børn. Find ud af hvorfor.',
        'home.kids.text2': 'Vi tilbyder interaktive udstillinger designet specielt til unge opdagelsesrejsende med praktiske aktiviteter, der gør læring om naturen sjov og engagerende.',
        'home.kids.cta': 'Aktiviteter for børn',
        
        'home.mols.title': 'Molslaboratoriet forskningsstation',
        'home.mols.text1': 'Molslaboratoriet er museets forskningsstation i Mols Bjerge, ca. 40 minutters kørsel fra Aarhus. Det naturskønne landskab og de afmærkede stier er perfekte til en dagstur.',
        'home.mols.text2': 'Dette unikke anlæg giver besøgende mulighed for at se videnskabelig forskning i aktion og udforske de smukke naturomgivelser.',
        'home.mols.cta': 'Besøg Molslaboratoriet',
        
        // Homepage Digital CTA
        'home.digital.title': 'Forbedre dit besøg med vores digitale oplevelse',
        'home.digital.text': 'Prøv vores nye Safari Quiz app for at teste din viden om dyr og deres overlevelsestaktikker.',
        'home.digital.cta': 'Oplev Safari Quiz',
        
        // Homepage Events
        'home.events.title': 'Kommende arrangementer',
        'home.events.subtitle': 'Deltag i vores spændende arrangementer og bliv klogere på naturen',
        
        'home.event1.title': 'Klimaforandringer og biodiversitet',
        'home.event1.text': 'Hør om hvordan klimaforandringer påvirker verdens dyreliv og hvad vi kan gøre for at beskytte biodiversiteten.',
        'home.event1.cta': 'Læs mere',
        
        'home.event2.title': 'Fossil workshop for børn',
        'home.event2.text': 'Lær om fossiler og paleontologi gennem sjove aktiviteter. Perfekt for børn mellem 7-12 år.',
        'home.event2.cta': 'Tilmeld',
        
        'home.event3.title': 'Havets hemmeligheder',
        'home.event3.text': 'Dyk ned i havets dybder og oplev de fantastiske skabninger der lever i vores oceaner.',
        'home.event3.cta': 'Se udstilling',
        
        // Safari Quiz Page
        'safari.hero.title': 'Oplev <strong>Safari Quiz</strong>',
        'safari.hero.subtitle': 'En revolutionerende digital oplevelse designet til at transformere dit besøg på Naturhistorisk Museum. Test din overlevelseskundskab og lær om fascinerende dyr gennem et interaktivt quizeventyr.',
        
        'safari.intro.title': 'Sådan fungerer Safari Quiz',
        'safari.intro.text1': 'En innovativ digital oplevelse der transformerer museumsbesøg gennem interaktiv læring. Safari Quiz kombinerer uddannelsesindhold med gamification for at lære besøgende om dyrs adfærd og overlevelsesstrategier.',
        'safari.intro.text2': 'Ved hjælp af banebrydende teknologi skaber appen en personlig rejse, der forbinder udstillinger med praktisk viden om møder med dyr.',
        
        // Steps
        'safari.step1.title': 'Scan QR-koden',
        'safari.step1.text1': 'Begynd dit eventyr ved at scanne en QR-kode placeret ved siden af en udstilling i museet. Hver QR-kode starter Safari Quiz-appen og forbinder dig til den specifikke sektion af museet.',
        'safari.step1.text2': 'QR-koderne er strategisk placeret gennem hele museet for at guide din udforskning.',
        
        'safari.step2.title': 'Vælg dit dyr',
        'safari.step2.text': 'Efter scanning af QR-koden præsenteres du for et udvalg af dyr relateret til udstillingen. Vælg det dyr, du vil lære mere om, fra de tilgængelige muligheder.',
        
        'safari.step3.title': 'Lær om dyret',
        'safari.step3.text': 'Når du har valgt et dyr, viser appen detaljerede oplysninger om det, herunder dets levesteder, adfærd og overlevelsestaktikker. Tag dig tid til at lære disse fakta - de hjælper dig i næste trin!',
        
        'safari.step4.title': 'Tag safari-quizzen',
        'safari.step4.text1': 'Tryk på Start-knappen for at begynde en 4-spørgsmåls safari-quiz, der tester, om du ved, hvordan du skal opføre dig, hvis du møder dette dyr i naturen. Quizzen simulerer virkelige scenarier og udfordrer dig til at træffe de rigtige beslutninger.',
        'safari.step4.text2': 'Hvert spørgsmål tester et forskelligt aspekt af dyreadfærd og sikkerhed ved interaktion mellem mennesker og dyr.',
        
        'safari.step5.title': 'Få din feedback',
        'safari.step5.text1': 'Baseret på dine svar i quizzen modtager du personlig feedback om, hvor godt du ville klare et møde med dette dyr i naturen.',
        'safari.step5.text2': 'Lær om konsekvenserne af dine beslutninger og få værdifuld indsigt i dyreadfærd, der en dag kunne redde dit liv i et virkeligt vildmarkssmøde.',
        
        'safari.cta.title': 'Klar til at teste din viden?',
        'safari.cta.text': 'Besøg Naturhistorisk Museum i dag og oplev Safari Quiz. En uforglemmelig læringseventyr venter!',
        'safari.cta.button': 'Planlæg dit besøg',
        
        // Footer
        'footer.rights': 'Alle rettigheder forbeholdes.',
        'footer.address': 'Wilhelm Meyers Allé 10, bygning 1137 · 8000 Aarhus C · Tlf: +45 8715 0000'
    }
};

// Language state - DEFAULT TO ENGLISH
let currentLanguage = 'en';

// Initialize language from localStorage or browser preference
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('au-museum-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'da')) {
        currentLanguage = savedLanguage;
    } else {
        // Default to English
        currentLanguage = 'en';
    }
    updateLanguage();
}

// Update all translations on the page
function updateLanguage() {
    // Update language buttons
    document.querySelectorAll('.au-lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = currentLanguage;
    
    // Save language preference
    localStorage.setItem('au-museum-language', currentLanguage);
}

// Language switcher event handler
function setupLanguageSwitcher() {
    document.querySelectorAll('.au-lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLanguage = this.getAttribute('data-lang');
            updateLanguage();
        });
    });
}

// Smooth scroll behavior for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for fade-in animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.au-feature, .au-card, .au-step').forEach(el => {
        observer.observe(el);
    });
    
    // Special animation for step numbers
    document.querySelectorAll('.au-step-number').forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.classList.add('slide-in');
            el.style.opacity = '';
        }, 300 + (index * 200));
    });
}

// Active navigation highlighting
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.au-nav-link').forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Only mark as active if it's an actual page match, not # links
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === 'index.html') ||
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
        
        // Special handling for explore.html
        if (currentPage === 'explore.html' && linkHref === 'explore.html') {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle (if needed in future)
function setupMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be implemented if a hamburger menu is added
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    setupLanguageSwitcher();
    setupSmoothScroll();
    setupAnimations();
    updateActiveNav();
    setupMobileMenu();
    
    // Add resize listener for responsive behavior
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Handle any resize-specific logic here
        }, 250);
    });
});

// Export functions for use in other scripts if needed
window.AUMuseum = {
    updateLanguage,
    currentLanguage: () => currentLanguage,
    translate: (key) => translations[currentLanguage][key] || key
};
