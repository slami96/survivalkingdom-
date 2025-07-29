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
        'safari.hero.subtitle': 'Test your knowledge about African wildlife and win a free coffee! Challenge yourself with 10 exciting questions about safari animals and their fascinating behaviors.',
        
        'safari.intro.title': 'How Safari Quiz Works',
        'safari.intro.text1': 'An exciting interactive quiz experience that tests your knowledge about African wildlife. Answer 10 questions correctly within the time limit to earn a free coffee voucher!',
        'safari.intro.text2': 'Perfect for museum visitors of all ages who want to learn about safari animals while enjoying a fun challenge with a rewarding prize.',
        
        // Steps
        'safari.step1.title': 'Choose Your Language',
        'safari.step1.text1': 'Start your Safari Quiz adventure by selecting your preferred language - Danish or English. The entire quiz experience will be presented in your chosen language.',
        'safari.step1.text2': 'Simply tap the language button on the welcome screen to begin your wildlife knowledge journey.',
        
        'safari.step2.title': 'Learn the Rules',
        'safari.step2.text': 'Welcome to Safari Quiz! You\'ll answer 10 multiple-choice questions about African wildlife. Each question has a 15-second time limit. Score 8 or more correct answers to win a free coffee voucher for our museum café!',
        
        'safari.step3.title': 'Answer Safari Questions',
        'safari.step3.text': 'Test your knowledge with 10 carefully crafted questions about African wildlife, their habitats, behaviors, and survival strategies. Watch the timer - you have 15 seconds per question!',
        
        'safari.step4.title': 'Experience the Challenge',
        'safari.step4.text1': 'Navigate through diverse questions covering various African animals - from majestic lions and elephants to fascinating birds and reptiles.',
        'safari.step4.text2': 'Each question is designed to be both educational and entertaining, helping you learn interesting facts about safari wildlife.',
        
        'safari.step5.title': 'Get Your Results',
        'safari.step5.text1': 'Score 8 or more correct? Congratulations! You\'ll receive a QR code for a free coffee voucher to redeem at our museum café.',
        'safari.step5.text2': 'Scored less than 8? No worries! You\'ll see the correct answers for the questions you missed, helping you learn more about African wildlife. Plus, you can always try again!',
        
        'safari.cta.title': 'Ready to test your safari knowledge?',
        'safari.cta.text': 'Visit the Natural History Museum today and take the Safari Quiz challenge. Learn about amazing African wildlife and maybe win a free coffee!',
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
        'safari.hero.subtitle': 'Test din viden om Afrikas dyreliv og vind en gratis kaffe! Udfordr dig selv med 10 spændende spørgsmål om safaridyr og deres fascinerende adfærd.',
        
        'safari.intro.title': 'Sådan fungerer Safari Quiz',
        'safari.intro.text1': 'En spændende interaktiv quiz-oplevelse der tester din viden om Afrikas dyreliv. Svar rigtigt på 10 spørgsmål inden for tidsgrænsen for at vinde en gratis kaffekupon!',
        'safari.intro.text2': 'Perfekt for museumsbesøgende i alle aldre, der vil lære om safaridyr, mens de nyder en sjov udfordring med en givende præmie.',
        
        // Steps
        'safari.step1.title': 'Vælg dit sprog',
        'safari.step1.text1': 'Start dit Safari Quiz-eventyr ved at vælge dit foretrukne sprog - dansk eller engelsk. Hele quiz-oplevelsen vil blive præsenteret på dit valgte sprog.',
        'safari.step1.text2': 'Tryk blot på sprogknappen på velkomstskærmen for at begynde din rejse ind i dyrelivets viden.',
        
        'safari.step2.title': 'Lær reglerne',
        'safari.step2.text': 'Velkommen til Safari Quiz! Du skal besvare 10 multiple choice-spørgsmål om Afrikas dyreliv. Hvert spørgsmål har en tidsbegrænsning på 15 sekunder. Få 8 eller flere rigtige svar for at vinde en gratis kaffekupon til vores museumscafé!',
        
        'safari.step3.title': 'Besvar safari-spørgsmål',
        'safari.step3.text': 'Test din viden med 10 omhyggeligt udformede spørgsmål om Afrikas dyreliv, deres levesteder, adfærd og overlevelsesstrategier. Hold øje med timeren - du har 15 sekunder per spørgsmål!',
        
        'safari.step4.title': 'Oplev udfordringen',
        'safari.step4.text1': 'Naviger gennem forskellige spørgsmål, der dækker forskellige afrikanske dyr - fra majestætiske løver og elefanter til fascinerende fugle og krybdyr.',
        'safari.step4.text2': 'Hvert spørgsmål er designet til at være både lærerigt og underholdende og hjælper dig med at lære interessante fakta om safaridyreliv.',
        
        'safari.step5.title': 'Få dine resultater',
        'safari.step5.text1': 'Fik du 8 eller flere rigtige? Tillykke! Du modtager en QR-kode til en gratis kaffekupon, som du kan indløse i vores museumscafé.',
        'safari.step5.text2': 'Fik du mindre end 8 rigtige? Ingen bekymringer! Du får vist de rigtige svar på de spørgsmål, du missede, hvilket hjælper dig med at lære mere om Afrikas dyreliv. Desuden kan du altid prøve igen!',
        
        'safari.cta.title': 'Klar til at teste din safari-viden?',
        'safari.cta.text': 'Besøg Naturhistorisk Museum i dag og tag Safari Quiz-udfordringen. Lær om fantastiske afrikanske dyr og vind måske en gratis kaffe!',
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
