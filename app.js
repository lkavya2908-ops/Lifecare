// ==================== STATE MANAGEMENT (MOCK DATABASE) ====================
const DB_VERSION = "lifecare_db_v2.0";

// Seeding registered hospitals and clinics in Tamil Nadu
const TAMILNADU_FACILITIES = [
    // Chennai
    {
        id: "fac-tn-1",
        name: "Apollo Hospitals (Greams Road)",
        category: "Hospital",
        rating: 4.8,
        reviews: 1420,
        address: "21 Greams Lane, Off Greams Road, Chennai, Tamil Nadu 600006",
        city: "Chennai",
        coords: [13.0601, 80.2520],
        phone: "+91 44 2829 0200",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-2",
        name: "Rajiv Gandhi Government General Hospital",
        category: "Hospital",
        rating: 4.3,
        reviews: 950,
        address: "E.V.R. Periyar Salai, Park Town, Chennai, Tamil Nadu 600003",
        city: "Chennai",
        coords: [13.0827, 80.2754],
        phone: "+91 44 2530 5000",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-3",
        name: "Fortis Malar Hospital",
        category: "Hospital",
        rating: 4.6,
        reviews: 630,
        address: "52, 1st Main Rd, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020",
        city: "Chennai",
        coords: [13.0063, 80.2546],
        phone: "+91 44 4242 4242",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-4",
        name: "MIOT International",
        category: "Hospital",
        rating: 4.5,
        reviews: 820,
        address: "4/112, Mount Poonamallee Rd, Manapakkam, Chennai, Tamil Nadu 600089",
        city: "Chennai",
        coords: [13.0227, 80.1837],
        phone: "+91 44 4200 2288",
        hours: "Open 24 Hours"
    },
    // Coimbatore
    {
        id: "fac-tn-5",
        name: "Kovai Medical Center and Hospital (KMCH)",
        category: "Hospital",
        rating: 4.7,
        reviews: 1100,
        address: "99 Avinashi Rd, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
        city: "Coimbatore",
        coords: [11.0428, 77.0396],
        phone: "+91 422 432 3000",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-6",
        name: "PSG Super Speciality Hospitals",
        category: "Hospital",
        rating: 4.5,
        reviews: 480,
        address: "Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
        city: "Coimbatore",
        coords: [11.0232, 77.0028],
        phone: "+91 422 257 0170",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-7",
        name: "Ganga Hospital",
        category: "Clinic",
        rating: 4.8,
        reviews: 350,
        address: "313 Mettupalayam Rd, Saibaba Colony, Coimbatore, Tamil Nadu 641043",
        city: "Coimbatore",
        coords: [11.0181, 76.9536],
        phone: "+91 422 248 5000",
        hours: "8:00 AM - 9:00 PM"
    },
    // Madurai
    {
        id: "fac-tn-8",
        name: "Meenakshi Mission Hospital & Research Centre",
        category: "Hospital",
        rating: 4.6,
        reviews: 790,
        address: "Lake Area, Melur Road, Madurai, Tamil Nadu 625107",
        city: "Madurai",
        coords: [9.9575, 78.1561],
        phone: "+91 452 258 8741",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-9",
        name: "Velammal Medical College Hospital",
        category: "Hospital",
        rating: 4.4,
        reviews: 310,
        address: "Madurai-Tuticorin Ring Road, Anuppanadi, Madurai, Tamil Nadu 625009",
        city: "Madurai",
        coords: [9.9079, 78.1691],
        phone: "+91 452 711 3333",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-10",
        name: "Grace Kennett Foundation Clinic",
        category: "Clinic",
        rating: 4.5,
        reviews: 90,
        address: "34 Kennett Road, Ellis Nagar, Madurai, Tamil Nadu 625016",
        city: "Madurai",
        coords: [9.9234, 78.1257],
        phone: "+91 452 230 1978",
        hours: "8:00 AM - 8:00 PM"
    },
    // Trichy
    {
        id: "fac-tn-11",
        name: "Kauvery Hospital",
        category: "Hospital",
        rating: 4.7,
        reviews: 580,
        address: "1 Royal Road, Cantonment, Trichy, Tamil Nadu 620001",
        city: "Trichy",
        coords: [10.8251, 78.6873],
        phone: "+91 431 407 7777",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-12",
        name: "Trichy SRM Medical College & Hospital",
        category: "Hospital",
        rating: 4.2,
        reviews: 210,
        address: "Irungalur, Trichy, Tamil Nadu 621105",
        city: "Trichy",
        coords: [11.0028, 78.8021],
        phone: "+91 431 225 8687",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-13",
        name: "Frontline Hospital",
        category: "Clinic",
        rating: 4.6,
        reviews: 140,
        address: "16-C Warners Road, Cantonment, Trichy, Tamil Nadu 620001",
        city: "Trichy",
        coords: [10.8128, 78.6854],
        phone: "+91 431 241 1221",
        hours: "7:00 AM - 10:00 PM"
    },
    // Salem
    {
        id: "fac-tn-14",
        name: "Manipal Hospital Salem",
        category: "Hospital",
        rating: 4.5,
        reviews: 420,
        address: "Dalmia Board, Bangalore Highway, Salem, Tamil Nadu 636012",
        city: "Salem",
        coords: [11.6881, 78.1245],
        phone: "+91 427 234 6600",
        hours: "Open 24 Hours"
    },
    {
        id: "fac-tn-15",
        name: "Government Mohan Kumaramangalam Medical College Hospital",
        category: "Hospital",
        rating: 4.1,
        reviews: 510,
        address: "Fort, Salem, Tamil Nadu 636001",
        city: "Salem",
        coords: [11.6625, 78.1437],
        phone: "+91 427 221 1883",
        hours: "Open 24 Hours"
    }
];

const DISEASE_REGISTRY = {
    "fever": {
        id: "fever",
        title: "Seasonal Fever / Influenza",
        risk: "High",
        spread: "Highly Spreaded",
        category: "Respiratory Transmission",
        description: "Influenza represents highly contagious viral pathogens spreading quickly through respiratory droplets. It poses an immediate risk during weather transitions.",
        symptoms: ["High body temperature (102°F+)", "Persistent dry cough", "Migraines & body chills", "Joint aches & extreme fatigue"],
        prevention: ["Isolate immediately in a well-ventilated room", "Drink warm fluids (ginger tea, light soups)", "Double mask in packed public transit centers", "Maintain 20-second hand washing hygiene"]
    },
    "cholera": {
        id: "cholera",
        title: "Cholera Outbreak",
        risk: "Medium",
        spread: "Contaminated Water / Food",
        category: "Gastrointestinal Pathogen",
        description: "An acute intestinal infection caused by ingestion of food or water contaminated with Vibrio cholerae bacteria. Leads to rapid fluid depletion.",
        symptoms: ["Profuse watery diarrhea", "Nausea & projectile vomiting", "Muscle cramps due to electrolyte loss", "Rapid dehydration & low blood pressure"],
        prevention: ["Boil all drinking water or use high-grade filters", "Avoid adding unpasteurized ice cubes or drinking tap water", "Consume steaming hot, freshly prepared meals", "Thoroughly scrub hands before food handling"]
    },
    "dengue": {
        id: "dengue",
        title: "Dengue Fever",
        risk: "High",
        spread: "Vector Transmission (Mosquito)",
        category: "Blood & Lymphatic System",
        description: "Transmitted by the female Aedes mosquito. Causes severe joint pain nicknamed 'breakbone fever' and poses platelets-related emergencies.",
        symptoms: ["Severe musculoskeletal pain", "High fever (up to 104°F)", "Intense retro-orbital pain (behind eyes)", "Sudden red skin rashes & bruising"],
        prevention: ["Inspect and drain all stagnant water pools weekly", "Equip windows and balconies with fine wire mesh nets", "Apply DEET-containing mosquito repellent creams", "Wear full-sleeved cotton shirts and long pants"]
    },
    "heart": {
        id: "heart",
        title: "Heart Problem / Cardiovascular Disease",
        risk: "High",
        spread: "Chronic / Non-Communicable",
        category: "Cardiovascular System",
        description: "Encompasses blockages, arrhythmia, and heart failures. Influenced by lifestyle choices, high sodium diets, excessive stress, and genetics.",
        symptoms: ["Chest tightness, pressure, or squeezing sensation", "Shortness of breath under mild exertion", "Referred pain in left arm, shoulder, or jaw", "Sudden cold sweats & lightheadedness"],
        prevention: ["Prepare low-sodium meals using heart-healthy oils", "Engage in 30 minutes of aerobic exercise (walking, swimming) daily", "Implement daily stress-reduction routines (meditation, breathing)", "Strictly avoid tobacco smoking and limit processed food"]
    },
    "covid": {
        id: "covid",
        title: "COVID-19 Pandemic Strain",
        risk: "High",
        spread: "Airborne / Aerosol",
        category: "Respiratory System",
        description: "Highly volatile viral respiratory disease causing mild symptoms in some, but severe pneumonia, respiratory failure, and systemic issues in others.",
        symptoms: ["Loss of taste (ageusia) or smell (anosmia)", "Shortness of breath / oxygen drop", "Sore throat & painful dry cough", "Tight chest pressure & high fever"],
        prevention: ["Use N95/FFP2 masks in unventilated indoor spaces", "Maintain 6-feet physical distancing in crowds", "Regularly sanitize touchpoints (keys, mobile screens)", "Ensure dynamic, continuous indoor ventilation flows"]
    },
    "diabetes": {
        id: "diabetes",
        title: "Diabetes Mellitus",
        risk: "Medium",
        spread: "Chronic / Metabolic",
        category: "Endocrine System",
        description: "A metabolic disorder characterized by chronic hyperglycemia resulting from defects in insulin secretion, action, or both.",
        symptoms: ["Polyuria (frequent urination, especially night)", "Polydipsia (unquenchable thirst)", "Sudden weight drops despite increased hunger", "Slow-healing skin cuts and blurry vision"],
        prevention: ["Limit refined sugars and processed carbohydrate intake", "Include high-fiber foods, green leafy salads, and whole grains", "Check blood glucose levels regularly as scheduled", "Stay active with regular walking or muscle-strengthening"]
    },
    "typhoid": {
        id: "typhoid",
        title: "Typhoid Fever",
        risk: "Medium",
        spread: "Fecal-Oral Contamination",
        category: "Systemic Bacterial Infection",
        description: "Bacterial infection caused by Salmonella enterica serovar Typhi. Linked to sanitary compromises, poor street food hygiene, and vaccine delays.",
        symptoms: ["Sustained high fever reaching 103-104°F", "Severe abdominal cramps & bloating", "Headaches & rose-colored skin spots on trunk", "Persistent dry cough & muscular weakness"],
        prevention: ["Ensure all drinking water is boiled or chemically treated", "Peel raw fruits and vegetables personally before eating", "Ensure street-vendor foods are hot and fully cooked", "Get the active Typhoid conjugate vaccine (TCV) shot"]
    }
};

const DEFAULT_QUERIES = [
    {
        id: "q-1",
        patientEmail: "kavya@gmail.com",
        symptoms: "Lately experiencing sudden chest discomfort, pressure behind my breastbone, and shortness of breath when climbing stairs.",
        date: "2026-08-16T14:32:00Z",
        status: "replied",
        doctorReply: "This requires prompt medical attention. Avoid strenuous tasks. Please visit a cardiologist immediately for an ECG and assessment. In case of acute pain radiating down your left arm, call emergency immediately.",
        doctorName: "Dr. Jenkins (Cardiologist, REG: DOC-98754)"
    },
    {
        id: "q-2",
        patientEmail: "citizen@gmail.com",
        symptoms: "Suffering from high fever, severe muscle pains, and pain behind my eyes. Discovered mosquito breeding pools near my street.",
        date: "2026-08-17T09:15:00Z",
        status: "pending",
        doctorReply: null,
        doctorName: null
    }
];

// Unified App State
let db = {
    users: [],
    queries: [...DEFAULT_QUERIES],
    adminPassword: null, // Custom password stored in local storage
    currentUser: null
};

// ==================== INITIALIZATION ====================
function loadDatabase() {
    const saved = localStorage.getItem(DB_VERSION);
    if (saved) {
        try {
            db = JSON.parse(saved);
        } catch (e) {
            console.error("DB parsing error, rebuilding defaults", e);
            saveDatabase();
        }
    } else {
        saveDatabase();
    }
}

function saveDatabase() {
    localStorage.setItem(DB_VERSION, JSON.stringify(db));
}

function clearLocalDatabase() {
    if (confirm("Are you sure you want to restore the website database? All custom queries, admin passwords, and settings will be reset.")) {
        localStorage.removeItem(DB_VERSION);
        db.queries = [...DEFAULT_QUERIES];
        db.users = [];
        db.adminPassword = null;
        db.currentUser = null;
        saveDatabase();
        alert("Database reset to factory seeds. Logging out.");
        performLogout();
    }
}


// ==================== AUTHENTICATION & ADMIN CONFIG ====================
let selectedRole = null;

function selectLoginRole(role) {
    selectedRole = role;
    
    document.querySelectorAll('.login-box').forEach(box => box.classList.remove('active'));
    document.querySelectorAll('.auth-form-container').forEach(form => form.classList.remove('open'));

    const box = document.getElementById(`box-${role}`);
    const form = document.getElementById(`form-${role}`);
    if (box && form) {
        box.classList.add('active');
        form.classList.add('open');
    }
}

function handlePublicLogin(event) {
    event.preventDefault();
    const email = document.getElementById('public-email').value.trim();
    if (!email) return;

    db.currentUser = {
        email: email,
        role: 'public',
        name: email.split('@')[0]
    };
    saveDatabase();
    loginSuccess();
}

function handleDoctorLogin(event) {
    event.preventDefault();
    const license = document.getElementById('doctor-license').value.trim();
    const photoInput = document.getElementById('doctor-license-photo');
    
    if (!license) {
        alert("Please enter your Doctor License Number.");
        return;
    }
    
    if (!photoInput.files || photoInput.files.length === 0) {
        alert("Please upload a photo of your medical license.");
        return;
    }

    db.currentUser = {
        email: license.toLowerCase() + "@lifecare.com",
        role: 'doctor',
        name: "Dr. " + license,
        regId: license,
        license: license
    };
    saveDatabase();
    loginSuccess();
}

function handleAdminLogin(event) {
    event.preventDefault();
    const passInput = document.getElementById('admin-password').value.trim();
    
    if (passInput === 'admin1234') {
        db.currentUser = {
            email: "admin@lifecare.com",
            role: 'admin',
            name: "Administrator"
        };
        saveDatabase();
        loginSuccess();
    } else {
        alert("Security Authentication Failed: Incorrect password.");
    }
}

function loginSuccess() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'flex';
    
    // Update Sidebar Details
    const letter = db.currentUser.name.charAt(4) ? db.currentUser.name.charAt(4).toUpperCase() : db.currentUser.name.charAt(0).toUpperCase();
    document.getElementById('sidebar-avatar').innerText = letter;
    document.getElementById('sidebar-username').innerText = db.currentUser.name;
    
    let roleText = "Public User";
    if (db.currentUser.role === 'doctor') roleText = "Medical Doctor";
    if (db.currentUser.role === 'admin') roleText = "System Admin";
    document.getElementById('sidebar-user-role').innerText = roleText;

    // Reset login inputs
    document.getElementById('public-email').value = '';
    document.getElementById('doctor-license').value = '';
    document.getElementById('doctor-license-photo').value = '';
    document.getElementById('admin-password').value = '';
    
    initRoleDashboards();
    navigateTo('home');
}

function performLogout() {
    db.currentUser = null;
    saveDatabase();
    
    document.getElementById('app-screen').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'flex';
    
    closeHomePanels();
    selectedRole = null;
    document.querySelectorAll('.login-box').forEach(box => box.classList.remove('active'));
    document.querySelectorAll('.auth-form-container').forEach(form => form.classList.remove('open'));
}


// ==================== ROUTING & CONTROLS ====================
function initRoleDashboards() {
    const role = db.currentUser.role;
    
    document.getElementById('dashboard-public').style.display = role === 'public' ? 'block' : 'none';
    document.getElementById('dashboard-doctor').style.display = role === 'doctor' ? 'block' : 'none';
    document.getElementById('dashboard-admin').style.display = role === 'admin' ? 'block' : 'none';

    const subtitle = document.getElementById('home-welcome-subtitle');
    if (role === 'public') {
        subtitle.innerText = "Consult symptoms with our advanced AI chatbot or post queries privately to our specialist doctor network.";
    } else if (role === 'doctor') {
        subtitle.innerText = "Logged in to Medical Board. Please review pending patient symptoms below and submit private replies.";
    } else if (role === 'admin') {
        subtitle.innerText = "Administrator Control Center. Access full logging outputs, reset databases, and audit website transactions.";
    }
}

function navigateTo(pageId) {
    document.querySelectorAll('.nav-menu .nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageId) {
            item.classList.add('active');
        }
    });

    document.querySelectorAll('.main-content .page-view').forEach(view => {
        view.classList.remove('active-page');
    });
    
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    if (pageId === 'home') {
        const role = db.currentUser.role;
        if (role === 'public') {
            renderUserQueries();
        } else if (role === 'doctor') {
            renderDoctorQueries();
        } else if (role === 'admin') {
            renderAdminDashboard();
        }
    } else if (pageId === 'community') {
        setTimeout(initOutbreakCharts, 100);
    } else if (pageId === 'disease') {
        renderDiseaseHub(Object.values(DISEASE_REGISTRY));
    } else if (pageId === 'prevention') {
        renderPreventionHub(Object.values(DISEASE_REGISTRY));
    } else if (pageId === 'finder') {
        setTimeout(initLeafletMap, 100);
    }
}

function openHomePanel(type) {
    document.getElementById('public-options').style.display = 'none';
    if (type === 'ai') {
        document.getElementById('panel-ai').classList.add('active-panel');
    } else if (type === 'doctor') {
        document.getElementById('panel-doctor').classList.add('active-panel');
        renderUserQueries();
    }
}

function closeHomePanels() {
    document.getElementById('panel-ai').classList.remove('active-panel');
    document.getElementById('panel-doctor').classList.remove('active-panel');
    document.getElementById('public-options').style.display = 'grid';
}


// ==================== ASK AI CONTROLLER ====================
function sendAiMessage() {
    const inputArea = document.getElementById('ai-chat-input');
    const symptomText = inputArea.value.trim();
    if (!symptomText) return;

    appendChatMessage('ai-chat-messages', 'user', symptomText, db.currentUser.name);
    inputArea.value = '';

    setTimeout(() => {
        const replyText = generateAiDiagnosis(symptomText);
        appendChatMessage('ai-chat-messages', 'bot', replyText, 'Lifecare AI Chatbot');
    }, 800);
}

function appendChatMessage(containerId, role, text, senderName) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${role}`;

    const dateStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    bubble.innerHTML = `
        <span class="message-meta">${senderName} • ${dateStr}</span>
        <div class="message-text">${text}</div>
    `;
    
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
}

function generateAiDiagnosis(symptoms) {
    const text = symptoms.toLowerCase();
    let diseaseKey = null;

    // Scan registry for match keywords
    if (text.includes("fever") || text.includes("flu") || text.includes("cough")) diseaseKey = "fever";
    else if (text.includes("cholera") || text.includes("diarrhea") || text.includes("stomach") || text.includes("vomit")) diseaseKey = "cholera";
    else if (text.includes("dengue") || text.includes("mosquito") || text.includes("joint")) diseaseKey = "dengue";
    else if (text.includes("heart") || text.includes("cardiac") || text.includes("chest pain") || text.includes("breath")) diseaseKey = "heart";
    else if (text.includes("covid") || text.includes("corona") || text.includes("smell") || text.includes("taste")) diseaseKey = "covid";
    else if (text.includes("diabet") || text.includes("sugar") || text.includes("urina") || text.includes("thirst")) diseaseKey = "diabetes";
    else if (text.includes("typhoid") || text.includes("salmonella")) diseaseKey = "typhoid";

    if (diseaseKey && DISEASE_REGISTRY[diseaseKey]) {
        const data = DISEASE_REGISTRY[diseaseKey];
        const preventionList = data.prevention.map(p => `• ${p}`).join('<br>');
        return `
            <div style="margin-bottom: 0.5rem;">Detected potential condition matches: <strong>${data.title}</strong>.</div>
            <div style="background: rgba(244,63,94,0.08); border-left: 3px solid var(--primary); padding: 0.5rem; margin-bottom: 0.75rem; border-radius: 4px; font-size: 0.85rem;">
                <strong>Outbreak Risk Level:</strong> <span style="color:#f43f5e; font-weight:bold;">${data.risk} (${data.spread})</span>
            </div>
            <div style="margin-bottom: 0.75rem;">
                <strong>Preventative Protocols:</strong><br>
                ${preventionList}
            </div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); border-top: 1px solid var(--border-color); padding-top: 0.5rem; font-style: italic;">
                Recommendation: This matching dataset was generated by our AI. For clinical validation, post this query to the Doctor Medical Board or consult a nearby specialist.
            </div>
        `;
    }

    return `
        <div>We noted your symptoms: <em>"${escapeHtml(symptoms)}"</em>. We could not match this precisely to a regional epidemic profile.</div>
        <div style="margin-top: 0.75rem;">
            <strong>General Outbreak Prevention Tips:</strong><br>
            • Thoroughly clean hands before meals and after visiting public spaces.<br>
            • Maintain physical space and wear masks in crowded wards.<br>
            • Consume boiled water and well-cooked foods during rain seasons.
        </div>
    `;
}


// ==================== ASK DOCTOR CONTROLLER (PRIVATE) ====================
function renderUserQueries() {
    const listContainer = document.getElementById('user-consults-list');
    if (!listContainer) return;
    
    const userEmail = db.currentUser.email;
    const userQueries = db.queries.filter(q => q.patientEmail === userEmail);
    
    if (userQueries.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary); font-size: 0.9rem;">
                No consultations posted yet. Write symptoms above to consult privately.
            </div>
        `;
        return;
    }

    userQueries.sort((a, b) => new Date(b.date) - new Date(a.date));

    listContainer.innerHTML = userQueries.map(q => {
        const dateObj = new Date(q.date);
        const formattedDate = dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const badgeClass = q.status === 'replied' ? 'replied' : 'pending';
        const badgeLabel = q.status === 'replied' ? 'Answered' : 'Pending Review';
        
        return `
            <div class="consult-item">
                <div class="consult-info">
                    <div class="consult-symptom-text">${escapeHtml(q.symptoms)}</div>
                    <div class="consult-date">Posted: ${formattedDate}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="consult-badge ${badgeClass}">${badgeLabel}</span>
                    <button class="btn-view-reply" onclick="openQueryModal('${q.id}')">View Details</button>
                </div>
            </div>
        `;
    }).join('');
}

function submitDoctorQuery() {
    const textInput = document.getElementById('doc-query-input');
    const symptoms = textInput.value.trim();
    if (!symptoms) {
        alert("Write down your symptom details first.");
        return;
    }

    const newQuery = {
        id: "q-" + Date.now(),
        patientEmail: db.currentUser.email,
        symptoms: symptoms,
        date: new Date().toISOString(),
        status: "pending",
        doctorReply: null,
        doctorName: null
    };

    db.queries.push(newQuery);
    saveDatabase();
    
    textInput.value = '';
    alert("Symptom sheet posted privately to the Medical Board. It can only be viewed by you and doctor panels.");
    renderUserQueries();
}

function openQueryModal(queryId) {
    const q = db.queries.find(item => item.id === queryId);
    if (!q) return;

    const user = db.currentUser;
    if (user.role === 'public' && q.patientEmail !== user.email) {
        alert("Access Denied: Private consultation thread.");
        return;
    }

    document.getElementById('modal-patient-title').innerText = `Symptom Query Log`;
    document.getElementById('modal-patient-symptoms').innerText = q.symptoms;
    
    const dateObj = new Date(q.date);
    document.getElementById('modal-patient-date').innerText = `Submitted on: ${dateObj.toLocaleDateString()} at ${dateObj.toLocaleTimeString()}`;

    const replyContainer = document.getElementById('modal-doctor-reply');
    if (q.status === 'replied') {
        replyContainer.innerHTML = `
            <strong>Response by ${escapeHtml(q.doctorName)}:</strong><br><br>
            ${escapeHtml(q.doctorReply).replace(/\n/g, '<br>')}
        `;
        replyContainer.style.color = '#a7f3d0';
    } else {
        replyContainer.innerHTML = `<em>Our medical specialists are reviewing this ticket. Once a doctor replies, it will render here. Other patient accounts cannot audit this feed.</em>`;
        replyContainer.style.color = 'var(--text-secondary)';
    }

    document.getElementById('query-detail-modal').style.display = 'flex';
}

function closeQueryModal() {
    document.getElementById('query-detail-modal').style.display = 'none';
}


// ==================== DOCTOR BOARD DASHBOARD CONTROLLER ====================
function renderDoctorQueries() {
    const container = document.getElementById('doctor-queries-container');
    if (!container) return;

    const doctorId = db.currentUser.name;
    const viewableQueries = db.queries.filter(q => {
        return q.status === 'pending' || (q.status === 'replied' && q.doctorName.includes(doctorId));
    });

    if (viewableQueries.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-color);">
                <p style="color: var(--text-secondary);">There are currently no active patient query sheets to resolve.</p>
            </div>
        `;
        return;
    }

    viewableQueries.sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status !== 'pending' && b.status === 'pending') return 1;
        return new Date(b.date) - new Date(a.date);
    });

    container.innerHTML = viewableQueries.map(q => {
        const dateObj = new Date(q.date);
        const formattedDate = dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let actionAreaHtml = "";
        if (q.status === 'pending') {
            actionAreaHtml = `
                <div class="query-reply-area">
                    <textarea id="reply-input-${q.id}" class="query-reply-input" placeholder="Submit your medical guidelines here..."></textarea>
                    <button class="btn-doc-reply" onclick="submitDoctorReply('${q.id}')">Submit Private Response</button>
                </div>
            `;
        } else {
            actionAreaHtml = `
                <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 8px; padding: 1rem; font-size: 0.9rem;">
                    <div style="color: var(--doctor-color); font-weight: 600; margin-bottom: 0.35rem;">YOUR PRIVATE RESPONSE:</div>
                    <div style="line-height: 1.4; color: var(--text-primary); font-style: italic;">"${escapeHtml(q.doctorReply)}"</div>
                </div>
            `;
        }

        return `
            <div class="query-card">
                <div class="query-card-header">
                    <div class="patient-meta">
                        <div class="user-avatar" style="background:#2563eb; width:28px; height:28px; font-size:0.75rem;">P</div>
                        <span class="patient-email">${escapeHtml(q.patientEmail)}</span>
                    </div>
                    <span class="query-time">${formattedDate}</span>
                </div>
                <div class="query-symptoms">
                    <strong style="font-size: 0.8rem; color: var(--text-secondary); display:block; margin-bottom: 0.35rem;">PATIENT SYMPTOM LOG:</strong>
                    "${escapeHtml(q.symptoms)}"
                </div>
                ${actionAreaHtml}
            </div>
        `;
    }).join('');
}

function submitDoctorReply(queryId) {
    const input = document.getElementById(`reply-input-${queryId}`);
    const text = input.value.trim();
    if (!text) {
        alert("Guidelines cannot be submitted empty.");
        return;
    }

    const qIndex = db.queries.findIndex(item => item.id === queryId);
    if (qIndex === -1) return;

    db.queries[qIndex].status = "replied";
    db.queries[qIndex].doctorReply = text;
    db.queries[qIndex].doctorName = `Dr. ${db.currentUser.name} (ID: ${db.currentUser.regId})`;
    
    saveDatabase();
    alert("Reply sent privately to patient inbox.");
    renderDoctorQueries();
}


// ==================== ADMIN DASHBOARD PANEL ====================
function renderAdminDashboard() {
    const totalQueries = db.queries.length;
    const answeredQueries = db.queries.filter(q => q.status === 'replied').length;
    
    const uniqueEmails = new Set();
    db.queries.forEach(q => uniqueEmails.add(q.patientEmail));
    const publicAccounts = uniqueEmails.size;

    document.getElementById('admin-metric-queries').innerText = totalQueries;
    document.getElementById('admin-metric-resolved').innerText = answeredQueries;
    document.getElementById('admin-metric-users').innerText = publicAccounts;

    const tbody = document.getElementById('admin-queries-tbody');
    if (!tbody) return;

    if (db.queries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-muted);">No activity logged.</td></tr>`;
        return;
    }

    const sorted = [...db.queries].sort((a,b) => new Date(b.date) - new Date(a.date));

    tbody.innerHTML = sorted.map(q => {
        const dateObj = new Date(q.date);
        const formattedDate = dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const statusHtml = q.status === 'replied' ? 
            `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.25);">RESOLVED</span>` : 
            `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.25);">PENDING</span>`;

        return `
            <tr>
                <td style="font-weight: 600; color: var(--public-color);">${escapeHtml(q.patientEmail)}</td>
                <td style="max-width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(q.symptoms)}">${escapeHtml(q.symptoms)}</td>
                <td style="color: var(--text-secondary);">${formattedDate}</td>
                <td>${q.doctorName ? escapeHtml(q.doctorName) : '<em>None</em>'}</td>
                <td>${statusHtml}</td>
            </tr>
        `;
    }).join('');
}


// ==================== Page 3: COMMUNITY PULSE (CHARTS) ====================
let outbreakLineChartInstance = null;
let ageBarChartInstance = null;

// Multi-disease chart databases
const DISEASE_CHART_DATA = {
    fever: {
        title: "Fever Outbreak Trends",
        lineLabel: "Active Fever Cases",
        lineData: [150, 230, 480, 720, 680, 890],
        lineColor: "#f43f5e",
        lineBg: "rgba(244,63,94,0.05)",
        barLabel: "Fever Susceptibility %",
        barData: [68, 35, 28, 42, 58]
    },
    cholera: {
        title: "Cholera Outbreak Trends",
        lineLabel: "Water Contamination Cases",
        lineData: [80, 110, 140, 290, 410, 320],
        lineColor: "#3b82f6",
        lineBg: "rgba(59,130,246,0.05)",
        barLabel: "Cholera Susceptibility %",
        barData: [42, 22, 35, 18, 30]
    },
    dengue: {
        title: "Dengue Spread Trends",
        lineLabel: "Active Mosquito-borne cases",
        lineData: [40, 70, 120, 380, 590, 710],
        lineColor: "#10b981",
        lineBg: "rgba(16,185,129,0.05)",
        barLabel: "Dengue Susceptibility %",
        barData: [30, 48, 52, 29, 21]
    },
    heart: {
        title: "Cardiovascular Risk Curve",
        lineLabel: "Cardiac Events / Admissions",
        lineData: [510, 520, 542, 530, 550, 565],
        lineColor: "#8b5cf6",
        lineBg: "rgba(139,92,246,0.05)",
        barLabel: "Heart Defect Susceptibility %",
        barData: [5, 12, 45, 78, 92] // Extremely high in older populations
    },
    covid: {
        title: "COVID-19 Pandemic Trend",
        lineLabel: "Active COVID Mutations",
        lineData: [890, 1200, 1600, 920, 450, 210],
        lineColor: "#ec4899",
        lineBg: "rgba(236,72,153,0.05)",
        barLabel: "Respiratory Susceptibility %",
        barData: [35, 42, 58, 72, 88]
    },
    diabetes: {
        title: "Metabolic Diabetes Cases",
        lineLabel: "Active Sugar Cases Tracked",
        lineData: [600, 610, 625, 630, 642, 655],
        lineColor: "#f59e0b",
        lineBg: "rgba(245,158,11,0.05)",
        barLabel: "Diabetes Distribution %",
        barData: [2, 8, 48, 75, 82]
    },
    typhoid: {
        title: "Typhoid Outbreak Index",
        lineLabel: "Active Salmonella Cases",
        lineData: [110, 130, 190, 240, 210, 180],
        lineColor: "#06b6d4",
        lineBg: "rgba(6,182,212,0.05)",
        barLabel: "Typhoid Susceptibility %",
        barData: [58, 41, 32, 25, 18] // High in children (1-12)
    }
};

function initOutbreakCharts() {
    if (typeof Chart === 'undefined') return;

    if (outbreakLineChartInstance) outbreakLineChartInstance.destroy();
    if (ageBarChartInstance) ageBarChartInstance.destroy();

    const selectedDisease = document.getElementById('pulse-disease-select').value;
    const curve = DISEASE_CHART_DATA[selectedDisease] || DISEASE_CHART_DATA.fever;

    // Titles update
    document.getElementById('outbreak-chart-title').innerText = curve.title;

    const lineCtx = document.getElementById('outbreakLineChart').getContext('2d');
    outbreakLineChartInstance = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['March', 'April', 'May', 'June', 'July', 'August'],
            datasets: [
                {
                    label: curve.lineLabel,
                    data: curve.lineData,
                    borderColor: curve.lineColor,
                    backgroundColor: curve.lineBg,
                    borderWidth: 3,
                    tension: 0.35,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#f3f4f6', font: { family: 'Plus Jakarta Sans', size: 12 } } }
            },
            scales: {
                x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } }
            }
        }
    });

    const barCtx = document.getElementById('ageBarChart').getContext('2d');
    ageBarChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['1-12 Years', '13-19 Years', '20-39 Years', '40-59 Years', '60+ Years'],
            datasets: [
                {
                    label: curve.barLabel,
                    data: curve.barData,
                    backgroundColor: curve.lineColor + "d5", // hex color with alpha
                    borderColor: curve.lineColor,
                    borderWidth: 1,
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#f3f4f6', font: { family: 'Plus Jakarta Sans', size: 12 } } }
            },
            scales: {
                x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } }
            }
        }
    });
}

function updatePulseCharts() {
    initOutbreakCharts();
}


// ==================== Pages 4 & 5: DYNAMIC HUB GENERATORS ====================
function renderDiseaseHub(list) {
    const container = document.getElementById('disease-grid-container');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; border:1px solid var(--border-color); border-radius:12px; background:var(--bg-card);">
                <p style="color:var(--text-secondary);">No diseases matched your search query. Try typing another category or problem.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(d => {
        const riskClass = d.risk.toLowerCase() === 'high' ? 'high' : 'med';
        const riskLabel = d.risk + " Risk";
        
        const tags = d.symptoms.map(s => `<span class="symptom-tag">${escapeHtml(s)}</span>`).join('');

        return `
            <div class="disease-card ${riskClass}-risk">
                <div class="disease-badge-row">
                    <span class="risk-badge ${riskClass}">${riskLabel}</span>
                    <span class="spread-badge">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-1.1 0-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" fill="currentColor"/></svg>
                        ${escapeHtml(d.spread)}
                    </span>
                </div>
                <h3 class="disease-title">${escapeHtml(d.title)}</h3>
                <p style="font-size:0.75rem; color:var(--primary); font-weight:600; margin-bottom:0.5rem; text-transform:uppercase;">${escapeHtml(d.category)}</p>
                <p class="disease-desc">${escapeHtml(d.description)}</p>
                
                <div class="disease-symptoms-section">
                    <h4 class="disease-symptoms-title">Identified Symptoms</h4>
                    <div class="symptoms-tags">${tags}</div>
                </div>
            </div>
        `;
    }).join('');
}

function filterDiseaseHub() {
    const q = document.getElementById('disease-search').value.toLowerCase().trim();
    const data = Object.values(DISEASE_REGISTRY);
    
    const filtered = data.filter(d => {
        return d.title.toLowerCase().includes(q) || 
               d.description.toLowerCase().includes(q) || 
               d.category.toLowerCase().includes(q) ||
               d.symptoms.some(s => s.toLowerCase().includes(q));
    });

    renderDiseaseHub(filtered);
}

function renderPreventionHub(list) {
    const container = document.getElementById('prevention-grid-container');
    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; border:1px solid var(--border-color); border-radius:12px; background:var(--bg-card);">
                <p style="color:var(--text-secondary);">No prevention guides found matching that search. Try searching general terms like "water" or "home".</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(d => {
        let iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9V7l-9-5-9 5v6c0 4.97 4.03 9 9 9z"/></svg>`;
        let iconBg = "rgba(16, 185, 129, 0.1)";
        let iconColor = "var(--doctor-color)";

        // Change icons depending on category
        if (d.category.includes("Respiratory")) {
            iconBg = "rgba(244, 63, 94, 0.1)";
            iconColor = "var(--primary)";
            iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`;
        } else if (d.category.includes("Cardiovascular")) {
            iconBg = "rgba(139, 92, 246, 0.1)";
            iconColor = "var(--admin-color)";
            iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        }

        const steps = d.prevention.map((step, idx) => `
            <li class="prevention-step-item">
                <span class="prevention-step-bullet">${idx + 1}</span>
                <span>${escapeHtml(step)}</span>
            </li>
        `).join('');

        return `
            <div class="prevention-card">
                <div class="prevention-icon" style="background:${iconBg}; color:${iconColor};">
                    ${iconSvg}
                </div>
                <h3 class="prevention-card-title">${escapeHtml(d.title)} Guidelines</h3>
                <ul class="prevention-steps">${steps}</ul>
            </div>
        `;
    }).join('');
}

function filterPreventionHub() {
    const q = document.getElementById('prevention-search').value.toLowerCase().trim();
    const data = Object.values(DISEASE_REGISTRY);

    const filtered = data.filter(d => {
        return d.title.toLowerCase().includes(q) || 
               d.category.toLowerCase().includes(q) ||
               d.prevention.some(p => p.toLowerCase().includes(q));
    });

    renderPreventionHub(filtered);
}


// ==================== Page 6: HEALTHCARE FINDER MAP (TAMIL NADU) ====================
let leafletMap = null;
let activeCategory = "all";
let activeCity = "all";
let mapMarkers = [];
let routePolyline = null;
let userMarker = null;

// Default central location in Tamil Nadu (Trichy area coordinates)
const TN_CENTER_COORDS = [10.7905, 78.7047];
let userCoords = null; // Stored when user activates GPS location

function initLeafletMap() {
    if (!leafletMap) {
        document.getElementById('map').style.height = "100%";

        // Mount Map centered on Trichy, TN
        leafletMap = L.map('map', {
            zoomControl: true,
            attributionControl: false
        }).setView(TN_CENTER_COORDS, 7);

        // Dark Map tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 20
        }).addTo(leafletMap);

        // Render markers and sidebar instantly before GPS prompt completes
        recalculateDistances();
        
        // Trigger background GPS check
        getUserLocation();
    } else {
        leafletMap.invalidateSize();
        recalculateDistances();
    }
}

function getUserLocation() {
    const statusBox = document.getElementById('location-status');
    
    if (!navigator.geolocation) {
        statusBox.innerText = "📍 Geolocation not supported by browser.";
        statusBox.style.background = "rgba(244,63,94,0.08)";
        statusBox.style.color = "#f43f5e";
        statusBox.style.borderColor = "rgba(244,63,94,0.15)";
        return;
    }

    statusBox.innerText = "📍 Querying GPS location...";
    statusBox.style.background = "rgba(245,158,11,0.08)";
    statusBox.style.color = "#f59e0b";
    statusBox.style.borderColor = "rgba(245,158,11,0.15)";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            userCoords = [lat, lng];

            statusBox.innerHTML = `📍 GPS Active: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            statusBox.style.background = "rgba(16,185,129,0.08)";
            statusBox.style.color = "#10b981";
            statusBox.style.borderColor = "rgba(16,185,129,0.15)";

            // User pin
            if (userMarker) leafletMap.removeLayer(userMarker);
            
            const userIcon = L.divIcon({
                className: 'user-map-pin',
                html: `<div style="width: 16px; height: 16px; background: #3b82f6; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 12px #3b82f6;"></div>`,
                iconSize: [16, 16],
                iconAnchor: [8, 8]
            });
            
            if (leafletMap) {
                userMarker = L.marker(userCoords, { icon: userIcon }).addTo(leafletMap).bindPopup("<b>Your Location</b>");
                leafletMap.setView(userCoords, 11);
            }

            recalculateDistances();
        },
        (error) => {
            console.warn("Location check denied/failed", error);
            statusBox.innerText = "📍 Location access denied. Showing all registers.";
            statusBox.style.background = "rgba(244,63,94,0.08)";
            statusBox.style.color = "#f43f5e";
            statusBox.style.borderColor = "rgba(244,63,94,0.15)";
            fallbackMapLoad();
        },
        { enableHighAccuracy: true, timeout: 5000 }
    );
}

function fallbackMapLoad() {
    userCoords = null;
    if (userMarker && leafletMap) {
        leafletMap.removeLayer(userMarker);
        userMarker = null;
    }
    if (leafletMap) {
        leafletMap.setView(TN_CENTER_COORDS, 7);
    }
    recalculateDistances();
}

function recalculateDistances() {
    let list = [...TAMILNADU_FACILITIES];
    
    if (userCoords) {
        // Calculate distance to each facility using Haversine
        list.forEach(f => {
            f.distance = calcDistance(userCoords[0], userCoords[1], f.coords[0], f.coords[1]);
        });
        // Sort: Nearest first
        list.sort((a, b) => a.distance - b.distance);
    } else {
        // Clear distance key
        list.forEach(f => delete f.distance);
    }

    applyFinderFilters(list);
}

function applyFinderFilters(list = TAMILNADU_FACILITIES) {
    const searchVal = document.getElementById('facility-search').value.toLowerCase().trim();
    
    const filtered = list.filter(f => {
        const matchesCategory = activeCategory === 'all' || f.category === activeCategory;
        const matchesCity = activeCity === 'all' || f.city === activeCity;
        const matchesSearch = f.name.toLowerCase().includes(searchVal) || 
                              f.address.toLowerCase().includes(searchVal) ||
                              f.city.toLowerCase().includes(searchVal);
        return matchesCategory && matchesCity && matchesSearch;
    });

    renderFacilitySidebar(filtered);
    plotFacilityMarkers(filtered);
}

function renderFacilitySidebar(filteredList) {
    const listContainer = document.getElementById('facility-cards-list');
    if (!listContainer) return;

    if (filteredList.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.9rem;">No healthcare providers match your filters in Tamil Nadu.</div>`;
        return;
    }

    listContainer.innerHTML = filteredList.map(f => {
        const distLabel = f.distance !== undefined ? 
            `<span style="font-size:0.75rem; color:#f43f5e; font-weight:600;">${f.distance.toFixed(1)} km away</span>` :
            `<span style="font-size:0.75rem; color:var(--text-muted);">${f.city}</span>`;
            
        return `
            <div class="facility-card" id="card-${f.id}" onclick="focusOnFacility('${f.id}')">
                <div class="facility-name">${escapeHtml(f.name)}</div>
                <div class="facility-meta">
                    <span class="badge" style="background:rgba(255,255,255,0.05); color:var(--text-secondary);">${f.category}</span>
                    <div class="facility-rating">
                        <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <span>${f.rating}</span>
                    </div>
                </div>
                <div class="facility-address">${escapeHtml(f.address)}</div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.75rem;">
                    ${distLabel}
                    <button class="btn-view-reply" style="font-size:0.75rem; padding:0.25rem 0.65rem;" onclick="event.stopPropagation(); drawRouteTo('${f.id}')">Get Directions</button>
                </div>
            </div>
        `;
    }).join('');
}

function plotFacilityMarkers(filteredList) {
    mapMarkers.forEach(m => leafletMap.removeLayer(m));
    mapMarkers = [];

    filteredList.forEach(f => {
        const pinColor = f.category === 'Hospital' ? '#f43f5e' : '#10b981';
        
        const markerIcon = L.divIcon({
            className: 'facility-marker-pin',
            html: `<div style="width: 28px; height: 28px; background: ${pinColor}; border: 2px solid #090d16; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center;">
                     <div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div>
                   </div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 28],
            popupAnchor: [0, -28]
        });

        const marker = L.marker(f.coords, { icon: markerIcon }).addTo(leafletMap);
        
        const distText = f.distance ? `<br><b>Distance:</b> ${f.distance.toFixed(1)} km` : '';
        const popupContent = `
            <div style="color: #0b0f19; font-family:'Plus Jakarta Sans'; font-size: 0.85rem; width: 190px;">
                <h4 style="margin:0 0 0.35rem 0; font-weight:700;">${f.name}</h4>
                <p style="margin:0 0 0.5rem 0; color:#4b5563; font-size:0.75rem;">${f.address}</p>
                <div style="font-weight:600; font-size:0.75rem; display:flex; justify-content:space-between;">
                    <span style="color:${pinColor}">${f.category}</span>
                    <span>⭐ ${f.rating}</span>
                </div>
                <div style="font-size:0.75rem; color:#6b7280; margin-top:0.4rem;">
                    <b>Phone:</b> ${f.phone}${distText}
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        marker.facilityId = f.id;
        mapMarkers.push(marker);
        
        marker.on('click', () => {
            focusSidebarCard(f.id);
        });
    });
}

function filterFacilityCategory(category) {
    activeCategory = category;
    
    document.querySelectorAll('.filter-pills .filter-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.innerText.toLowerCase().includes(category.toLowerCase()) || 
           (category === 'all' && pill.innerText.toLowerCase() === 'all')) {
            pill.classList.add('active');
        }
    });

    recalculateDistances();
    hideRouteOverlay();
}

function filterFacilityCity(city) {
    activeCity = city;
    recalculateDistances();
    hideRouteOverlay();
    
    // Zoom to city bounds if no GPS active and city selected
    if (city !== 'all') {
        const match = TAMILNADU_FACILITIES.find(f => f.city === city);
        if (match && leafletMap) {
            leafletMap.setView(match.coords, 11);
        }
    } else {
        if (leafletMap) leafletMap.setView(TN_CENTER_COORDS, 7);
    }
}

function filterFacilities() {
    recalculateDistances();
}

function focusOnFacility(facilityId) {
    const f = TAMILNADU_FACILITIES.find(item => item.id === facilityId);
    if (!f || !leafletMap) return;

    leafletMap.setView(f.coords, 14);
    
    const marker = mapMarkers.find(m => m.facilityId === facilityId);
    if (marker) {
        marker.openPopup();
    }

    focusSidebarCard(facilityId);
}

function focusSidebarCard(facilityId) {
    document.querySelectorAll('.facility-list .facility-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const targetCard = document.getElementById(`card-${facilityId}`);
    if (targetCard) {
        targetCard.classList.add('active');
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function drawRouteTo(facilityId) {
    const f = TAMILNADU_FACILITIES.find(item => item.id === facilityId);
    if (!f || !leafletMap) return;

    if (routePolyline) {
        leafletMap.removeLayer(routePolyline);
    }

    // Determine start coordinate: either browser GPS coords, or center coordinates as fallback
    const startPoint = userCoords ? userCoords : [f.coords[0] - 0.015, f.coords[1] + 0.012];

    const mid1 = [startPoint[0], f.coords[1]];
    const routePoints = [startPoint, mid1, f.coords];

    routePolyline = L.polyline(routePoints, {
        color: '#f43f5e',
        weight: 4,
        opacity: 0.8,
        dashArray: '8, 8',
        lineCap: 'round'
    }).addTo(leafletMap);

    const bounds = L.latLngBounds(routePoints);
    leafletMap.fitBounds(bounds, { padding: [40, 40] });

    const dist = calcDistance(startPoint[0], startPoint[1], f.coords[0], f.coords[1]);
    const estTime = Math.round(dist * 2.5); // Approx 2.5 mins per km

    const overlay = document.getElementById('direction-overlay');
    const stepsList = document.getElementById('direction-steps-list');
    
    overlay.style.display = 'block';
    stepsList.innerHTML = `
        <div style="font-weight:700; margin-bottom: 0.5rem; color:#f43f5e;">Tamil Nadu Route: ${dist.toFixed(1)} km — ~${estTime} mins travel</div>
        <div>1. Merge onto regional bypass roads and proceed toward ${f.city} municipal center (2.5 km).</div>
        <div>2. Turn onto regional link road following signs for clinical health hub (1.2 km).</div>
        <div>3. Enter hospital lane. <strong>${escapeHtml(f.name)}</strong> will be visible on your left.</div>
    `;

    focusSidebarCard(facilityId);
}

function hideRouteOverlay() {
    document.getElementById('direction-overlay').style.display = 'none';
    if (routePolyline && leafletMap) {
        leafletMap.removeLayer(routePolyline);
        routePolyline = null;
    }
}


// ==================== HA VERSINE FOR DISTANCE ====================
// Returns distance in kilometers (km)
function calcDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(value) {
    return value * Math.PI / 180;
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==================== INITIAL DOM STATE LOADS ====================
window.addEventListener('DOMContentLoaded', () => {
    loadDatabase();
    
    if (db.currentUser) {
        loginSuccess();
    }
});
