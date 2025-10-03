// PDF Database - Structură pentru gestionarea documentelor
// Aceasta este o bază de date simulată pentru demonstrație
// În producție, aceasta ar fi înlocuită cu un API real

// Funcție pentru generarea placeholder-urilor
function generatePlaceholder(profile, year, session) {
    const sessionNames = {
        'sesiunea1': 'Sesiunea I',
        'sesiunea2': 'Sesiunea II', 
        'simulare': 'Simulare',
        'model': 'Model Oficial'
    };
    
    const profileNames = {
        'stiinte-naturii': 'Științele Naturii',
        'matematica-informatica': 'Matematică-Informatică',
        'pedagogic': 'Pedagogic',
        'tehnologic': 'Tehnologic'
    };
    
    return {
        id: `${profile}_${year}_${session}_placeholder`,
        title: `${sessionNames[session]} ${year} - În pregătire`,
        description: `Documentele pentru ${profileNames[profile]} ${year} ${sessionNames[session]} vor fi disponibile în curând. Verificați din nou pentru actualizări.`,
        url: `/pdfs/${profile}/${year}/${session}/placeholder.pdf`,
        date: 'În curând',
        size: 'N/A',
        category: 'Placeholder',
        isPlaceholder: true
    };
}

const pdfDatabase = {
    // Format cheie: 'profil_an_sesiune' sau 'profil_an_tip'
    // Toate combinațiile posibile pentru fiecare profil și an
    
    // ============= ȘTIINȚELE NATURII =============
    // 2025
    'stiinte-naturii_2025_sesiunea1': [generatePlaceholder('stiinte-naturii', 2025, 'sesiunea1')],
    'stiinte-naturii_2025_sesiunea2': [generatePlaceholder('stiinte-naturii', 2025, 'sesiunea2')],
    'stiinte-naturii_2025_simulare': [generatePlaceholder('stiinte-naturii', 2025, 'simulare')],
    'stiinte-naturii_2025_model': [generatePlaceholder('stiinte-naturii', 2025, 'model')],
    
    // 2024
    'stiinte-naturii_2024_sesiunea1': [
        {
            id: 'sn_2024_s1_subiectul1',
            title: 'Subiectul I - Completare și alegere multiplă',
            description: 'Rezolvări complete pentru subiectul I cu explicații detaliate pentru fiecare item.',
            url: '/pdfs/stiinte-naturii/2024/sesiunea1/subiectul-1.pdf',
            date: '15 Iunie 2024',
            size: '2.4 MB',
            category: 'Subiect oficial'
        }
    ],
    'stiinte-naturii_2024_sesiunea2': [generatePlaceholder('stiinte-naturii', 2024, 'sesiunea2')],
    'stiinte-naturii_2024_simulare': [generatePlaceholder('stiinte-naturii', 2024, 'simulare')],
    'stiinte-naturii_2024_model': [generatePlaceholder('stiinte-naturii', 2024, 'model')],
    
    // 2023
    'stiinte-naturii_2023_sesiunea1': [generatePlaceholder('stiinte-naturii', 2023, 'sesiunea1')],
    'stiinte-naturii_2023_sesiunea2': [generatePlaceholder('stiinte-naturii', 2023, 'sesiunea2')],
    'stiinte-naturii_2023_simulare': [generatePlaceholder('stiinte-naturii', 2023, 'simulare')],
    'stiinte-naturii_2023_model': [generatePlaceholder('stiinte-naturii', 2023, 'model')],
    
    // 2022
    'stiinte-naturii_2022_sesiunea1': [generatePlaceholder('stiinte-naturii', 2022, 'sesiunea1')],
    'stiinte-naturii_2022_sesiunea2': [generatePlaceholder('stiinte-naturii', 2022, 'sesiunea2')],
    'stiinte-naturii_2022_simulare': [generatePlaceholder('stiinte-naturii', 2022, 'simulare')],
    'stiinte-naturii_2022_model': [generatePlaceholder('stiinte-naturii', 2022, 'model')],
    
    // 2021
    'stiinte-naturii_2021_sesiunea1': [generatePlaceholder('stiinte-naturii', 2021, 'sesiunea1')],
    'stiinte-naturii_2021_sesiunea2': [generatePlaceholder('stiinte-naturii', 2021, 'sesiunea2')],
    'stiinte-naturii_2021_simulare': [generatePlaceholder('stiinte-naturii', 2021, 'simulare')],
    'stiinte-naturii_2021_model': [generatePlaceholder('stiinte-naturii', 2021, 'model')],
    
    // 2020
    'stiinte-naturii_2020_sesiunea1': [generatePlaceholder('stiinte-naturii', 2020, 'sesiunea1')],
    'stiinte-naturii_2020_sesiunea2': [generatePlaceholder('stiinte-naturii', 2020, 'sesiunea2')],
    'stiinte-naturii_2020_simulare': [generatePlaceholder('stiinte-naturii', 2020, 'simulare')],
    'stiinte-naturii_2020_model': [generatePlaceholder('stiinte-naturii', 2020, 'model')],
    
    // 2019
    'stiinte-naturii_2019_sesiunea1': [generatePlaceholder('stiinte-naturii', 2019, 'sesiunea1')],
    'stiinte-naturii_2019_sesiunea2': [generatePlaceholder('stiinte-naturii', 2019, 'sesiunea2')],
    'stiinte-naturii_2019_simulare': [generatePlaceholder('stiinte-naturii', 2019, 'simulare')],
    'stiinte-naturii_2019_model': [generatePlaceholder('stiinte-naturii', 2019, 'model')],
    
    // 2018
    'stiinte-naturii_2018_sesiunea1': [generatePlaceholder('stiinte-naturii', 2018, 'sesiunea1')],
    'stiinte-naturii_2018_sesiunea2': [generatePlaceholder('stiinte-naturii', 2018, 'sesiunea2')],
    'stiinte-naturii_2018_simulare': [generatePlaceholder('stiinte-naturii', 2018, 'simulare')],
    'stiinte-naturii_2018_model': [generatePlaceholder('stiinte-naturii', 2018, 'model')],
    
    // 2017
    'stiinte-naturii_2017_sesiunea1': [generatePlaceholder('stiinte-naturii', 2017, 'sesiunea1')],
    'stiinte-naturii_2017_sesiunea2': [generatePlaceholder('stiinte-naturii', 2017, 'sesiunea2')],
    'stiinte-naturii_2017_simulare': [generatePlaceholder('stiinte-naturii', 2017, 'simulare')],
    'stiinte-naturii_2017_model': [generatePlaceholder('stiinte-naturii', 2017, 'model')],
    
    // 2016
    'stiinte-naturii_2016_sesiunea1': [generatePlaceholder('stiinte-naturii', 2016, 'sesiunea1')],
    'stiinte-naturii_2016_sesiunea2': [generatePlaceholder('stiinte-naturii', 2016, 'sesiunea2')],
    'stiinte-naturii_2016_simulare': [generatePlaceholder('stiinte-naturii', 2016, 'simulare')],
    'stiinte-naturii_2016_model': [generatePlaceholder('stiinte-naturii', 2016, 'model')],
    
    // 2015
    'stiinte-naturii_2015_sesiunea1': [generatePlaceholder('stiinte-naturii', 2015, 'sesiunea1')],
    'stiinte-naturii_2015_sesiunea2': [generatePlaceholder('stiinte-naturii', 2015, 'sesiunea2')],
    'stiinte-naturii_2015_simulare': [generatePlaceholder('stiinte-naturii', 2015, 'simulare')],
    'stiinte-naturii_2015_model': [generatePlaceholder('stiinte-naturii', 2015, 'model')],
    
    // ============= MATEMATICĂ-INFORMATICĂ =============
    // 2025
    'matematica-informatica_2025_sesiunea1': [generatePlaceholder('matematica-informatica', 2025, 'sesiunea1')],
    'matematica-informatica_2025_sesiunea2': [generatePlaceholder('matematica-informatica', 2025, 'sesiunea2')],
    'matematica-informatica_2025_simulare': [generatePlaceholder('matematica-informatica', 2025, 'simulare')],
    'matematica-informatica_2025_model': [generatePlaceholder('matematica-informatica', 2025, 'model')],
    
    // 2024
    'matematica-informatica_2024_sesiunea1': [generatePlaceholder('matematica-informatica', 2024, 'sesiunea1')],
    'matematica-informatica_2024_sesiunea2': [generatePlaceholder('matematica-informatica', 2024, 'sesiunea2')],
    'matematica-informatica_2024_simulare': [generatePlaceholder('matematica-informatica', 2024, 'simulare')],
    'matematica-informatica_2024_model': [generatePlaceholder('matematica-informatica', 2024, 'model')],
    
    // 2023
    'matematica-informatica_2023_sesiunea1': [generatePlaceholder('matematica-informatica', 2023, 'sesiunea1')],
    'matematica-informatica_2023_sesiunea2': [generatePlaceholder('matematica-informatica', 2023, 'sesiunea2')],
    'matematica-informatica_2023_simulare': [generatePlaceholder('matematica-informatica', 2023, 'simulare')],
    'matematica-informatica_2023_model': [generatePlaceholder('matematica-informatica', 2023, 'model')],
    
    // 2022
    'matematica-informatica_2022_sesiunea1': [generatePlaceholder('matematica-informatica', 2022, 'sesiunea1')],
    'matematica-informatica_2022_sesiunea2': [generatePlaceholder('matematica-informatica', 2022, 'sesiunea2')],
    'matematica-informatica_2022_simulare': [generatePlaceholder('matematica-informatica', 2022, 'simulare')],
    'matematica-informatica_2022_model': [generatePlaceholder('matematica-informatica', 2022, 'model')],
    
    // 2021
    'matematica-informatica_2021_sesiunea1': [generatePlaceholder('matematica-informatica', 2021, 'sesiunea1')],
    'matematica-informatica_2021_sesiunea2': [generatePlaceholder('matematica-informatica', 2021, 'sesiunea2')],
    'matematica-informatica_2021_simulare': [generatePlaceholder('matematica-informatica', 2021, 'simulare')],
    'matematica-informatica_2021_model': [generatePlaceholder('matematica-informatica', 2021, 'model')],
    
    // 2020
    'matematica-informatica_2020_sesiunea1': [generatePlaceholder('matematica-informatica', 2020, 'sesiunea1')],
    'matematica-informatica_2020_sesiunea2': [generatePlaceholder('matematica-informatica', 2020, 'sesiunea2')],
    'matematica-informatica_2020_simulare': [generatePlaceholder('matematica-informatica', 2020, 'simulare')],
    'matematica-informatica_2020_model': [generatePlaceholder('matematica-informatica', 2020, 'model')],
    
    // 2019
    'matematica-informatica_2019_sesiunea1': [generatePlaceholder('matematica-informatica', 2019, 'sesiunea1')],
    'matematica-informatica_2019_sesiunea2': [generatePlaceholder('matematica-informatica', 2019, 'sesiunea2')],
    'matematica-informatica_2019_simulare': [generatePlaceholder('matematica-informatica', 2019, 'simulare')],
    'matematica-informatica_2019_model': [generatePlaceholder('matematica-informatica', 2019, 'model')],
    
    // 2018
    'matematica-informatica_2018_sesiunea1': [generatePlaceholder('matematica-informatica', 2018, 'sesiunea1')],
    'matematica-informatica_2018_sesiunea2': [generatePlaceholder('matematica-informatica', 2018, 'sesiunea2')],
    'matematica-informatica_2018_simulare': [generatePlaceholder('matematica-informatica', 2018, 'simulare')],
    'matematica-informatica_2018_model': [generatePlaceholder('matematica-informatica', 2018, 'model')],
    
    // 2017
    'matematica-informatica_2017_sesiunea1': [generatePlaceholder('matematica-informatica', 2017, 'sesiunea1')],
    'matematica-informatica_2017_sesiunea2': [generatePlaceholder('matematica-informatica', 2017, 'sesiunea2')],
    'matematica-informatica_2017_simulare': [generatePlaceholder('matematica-informatica', 2017, 'simulare')],
    'matematica-informatica_2017_model': [generatePlaceholder('matematica-informatica', 2017, 'model')],
    
    // 2016
    'matematica-informatica_2016_sesiunea1': [generatePlaceholder('matematica-informatica', 2016, 'sesiunea1')],
    'matematica-informatica_2016_sesiunea2': [generatePlaceholder('matematica-informatica', 2016, 'sesiunea2')],
    'matematica-informatica_2016_simulare': [generatePlaceholder('matematica-informatica', 2016, 'simulare')],
    'matematica-informatica_2016_model': [generatePlaceholder('matematica-informatica', 2016, 'model')],
    
    // 2015
    'matematica-informatica_2015_sesiunea1': [generatePlaceholder('matematica-informatica', 2015, 'sesiunea1')],
    'matematica-informatica_2015_sesiunea2': [generatePlaceholder('matematica-informatica', 2015, 'sesiunea2')],
    'matematica-informatica_2015_simulare': [generatePlaceholder('matematica-informatica', 2015, 'simulare')],
    'matematica-informatica_2015_model': [generatePlaceholder('matematica-informatica', 2015, 'model')],
    
    // ============= PEDAGOGIC =============
    // 2025
    'pedagogic_2025_sesiunea1': [generatePlaceholder('pedagogic', 2025, 'sesiunea1')],
    'pedagogic_2025_sesiunea2': [generatePlaceholder('pedagogic', 2025, 'sesiunea2')],
    'pedagogic_2025_simulare': [generatePlaceholder('pedagogic', 2025, 'simulare')],
    'pedagogic_2025_model': [generatePlaceholder('pedagogic', 2025, 'model')],
    
    // 2024
    'pedagogic_2024_sesiunea1': [generatePlaceholder('pedagogic', 2024, 'sesiunea1')],
    'pedagogic_2024_sesiunea2': [generatePlaceholder('pedagogic', 2024, 'sesiunea2')],
    'pedagogic_2024_simulare': [generatePlaceholder('pedagogic', 2024, 'simulare')],
    'pedagogic_2024_model': [generatePlaceholder('pedagogic', 2024, 'model')],
    
    // 2023
    'pedagogic_2023_sesiunea1': [generatePlaceholder('pedagogic', 2023, 'sesiunea1')],
    'pedagogic_2023_sesiunea2': [generatePlaceholder('pedagogic', 2023, 'sesiunea2')],
    'pedagogic_2023_simulare': [generatePlaceholder('pedagogic', 2023, 'simulare')],
    'pedagogic_2023_model': [generatePlaceholder('pedagogic', 2023, 'model')],
    
    // 2022
    'pedagogic_2022_sesiunea1': [generatePlaceholder('pedagogic', 2022, 'sesiunea1')],
    'pedagogic_2022_sesiunea2': [generatePlaceholder('pedagogic', 2022, 'sesiunea2')],
    'pedagogic_2022_simulare': [generatePlaceholder('pedagogic', 2022, 'simulare')],
    'pedagogic_2022_model': [generatePlaceholder('pedagogic', 2022, 'model')],
    
    // 2021
    'pedagogic_2021_sesiunea1': [generatePlaceholder('pedagogic', 2021, 'sesiunea1')],
    'pedagogic_2021_sesiunea2': [generatePlaceholder('pedagogic', 2021, 'sesiunea2')],
    'pedagogic_2021_simulare': [generatePlaceholder('pedagogic', 2021, 'simulare')],
    'pedagogic_2021_model': [generatePlaceholder('pedagogic', 2021, 'model')],
    
    // 2020
    'pedagogic_2020_sesiunea1': [generatePlaceholder('pedagogic', 2020, 'sesiunea1')],
    'pedagogic_2020_sesiunea2': [generatePlaceholder('pedagogic', 2020, 'sesiunea2')],
    'pedagogic_2020_simulare': [generatePlaceholder('pedagogic', 2020, 'simulare')],
    'pedagogic_2020_model': [generatePlaceholder('pedagogic', 2020, 'model')],
    
    // 2019
    'pedagogic_2019_sesiunea1': [generatePlaceholder('pedagogic', 2019, 'sesiunea1')],
    'pedagogic_2019_sesiunea2': [generatePlaceholder('pedagogic', 2019, 'sesiunea2')],
    'pedagogic_2019_simulare': [generatePlaceholder('pedagogic', 2019, 'simulare')],
    'pedagogic_2019_model': [generatePlaceholder('pedagogic', 2019, 'model')],
    
    // 2018
    'pedagogic_2018_sesiunea1': [generatePlaceholder('pedagogic', 2018, 'sesiunea1')],
    'pedagogic_2018_sesiunea2': [generatePlaceholder('pedagogic', 2018, 'sesiunea2')],
    'pedagogic_2018_simulare': [generatePlaceholder('pedagogic', 2018, 'simulare')],
    'pedagogic_2018_model': [generatePlaceholder('pedagogic', 2018, 'model')],
    
    // 2017
    'pedagogic_2017_sesiunea1': [generatePlaceholder('pedagogic', 2017, 'sesiunea1')],
    'pedagogic_2017_sesiunea2': [generatePlaceholder('pedagogic', 2017, 'sesiunea2')],
    'pedagogic_2017_simulare': [generatePlaceholder('pedagogic', 2017, 'simulare')],
    'pedagogic_2017_model': [generatePlaceholder('pedagogic', 2017, 'model')],
    
    // 2016
    'pedagogic_2016_sesiunea1': [generatePlaceholder('pedagogic', 2016, 'sesiunea1')],
    'pedagogic_2016_sesiunea2': [generatePlaceholder('pedagogic', 2016, 'sesiunea2')],
    'pedagogic_2016_simulare': [generatePlaceholder('pedagogic', 2016, 'simulare')],
    'pedagogic_2016_model': [generatePlaceholder('pedagogic', 2016, 'model')],
    
    // 2015
    'pedagogic_2015_sesiunea1': [generatePlaceholder('pedagogic', 2015, 'sesiunea1')],
    'pedagogic_2015_sesiunea2': [generatePlaceholder('pedagogic', 2015, 'sesiunea2')],
    'pedagogic_2015_simulare': [generatePlaceholder('pedagogic', 2015, 'simulare')],
    'pedagogic_2015_model': [generatePlaceholder('pedagogic', 2015, 'model')],
    
    // ============= TEHNOLOGIC =============
    // 2025
    'tehnologic_2025_sesiunea1': [generatePlaceholder('tehnologic', 2025, 'sesiunea1')],
    'tehnologic_2025_sesiunea2': [generatePlaceholder('tehnologic', 2025, 'sesiunea2')],
    'tehnologic_2025_simulare': [generatePlaceholder('tehnologic', 2025, 'simulare')],
    'tehnologic_2025_model': [generatePlaceholder('tehnologic', 2025, 'model')],
    
    // 2024
    'tehnologic_2024_sesiunea1': [generatePlaceholder('tehnologic', 2024, 'sesiunea1')],
    'tehnologic_2024_sesiunea2': [generatePlaceholder('tehnologic', 2024, 'sesiunea2')],
    'tehnologic_2024_simulare': [generatePlaceholder('tehnologic', 2024, 'simulare')],
    'tehnologic_2024_model': [generatePlaceholder('tehnologic', 2024, 'model')],
    
    // 2023
    'tehnologic_2023_sesiunea1': [generatePlaceholder('tehnologic', 2023, 'sesiunea1')],
    'tehnologic_2023_sesiunea2': [generatePlaceholder('tehnologic', 2023, 'sesiunea2')],
    'tehnologic_2023_simulare': [generatePlaceholder('tehnologic', 2023, 'simulare')],
    'tehnologic_2023_model': [generatePlaceholder('tehnologic', 2023, 'model')],
    
    // 2022
    'tehnologic_2022_sesiunea1': [generatePlaceholder('tehnologic', 2022, 'sesiunea1')],
    'tehnologic_2022_sesiunea2': [generatePlaceholder('tehnologic', 2022, 'sesiunea2')],
    'tehnologic_2022_simulare': [generatePlaceholder('tehnologic', 2022, 'simulare')],
    'tehnologic_2022_model': [generatePlaceholder('tehnologic', 2022, 'model')],
    
    // 2021
    'tehnologic_2021_sesiunea1': [generatePlaceholder('tehnologic', 2021, 'sesiunea1')],
    'tehnologic_2021_sesiunea2': [generatePlaceholder('tehnologic', 2021, 'sesiunea2')],
    'tehnologic_2021_simulare': [generatePlaceholder('tehnologic', 2021, 'simulare')],
    'tehnologic_2021_model': [generatePlaceholder('tehnologic', 2021, 'model')],
    
    // 2020
    'tehnologic_2020_sesiunea1': [generatePlaceholder('tehnologic', 2020, 'sesiunea1')],
    'tehnologic_2020_sesiunea2': [generatePlaceholder('tehnologic', 2020, 'sesiunea2')],
    'tehnologic_2020_simulare': [generatePlaceholder('tehnologic', 2020, 'simulare')],
    'tehnologic_2020_model': [generatePlaceholder('tehnologic', 2020, 'model')],
    
    // 2019
    'tehnologic_2019_sesiunea1': [generatePlaceholder('tehnologic', 2019, 'sesiunea1')],
    'tehnologic_2019_sesiunea2': [generatePlaceholder('tehnologic', 2019, 'sesiunea2')],
    'tehnologic_2019_simulare': [generatePlaceholder('tehnologic', 2019, 'simulare')],
    'tehnologic_2019_model': [generatePlaceholder('tehnologic', 2019, 'model')],
    
    // 2018
    'tehnologic_2018_sesiunea1': [generatePlaceholder('tehnologic', 2018, 'sesiunea1')],
    'tehnologic_2018_sesiunea2': [generatePlaceholder('tehnologic', 2018, 'sesiunea2')],
    'tehnologic_2018_simulare': [generatePlaceholder('tehnologic', 2018, 'simulare')],
    'tehnologic_2018_model': [generatePlaceholder('tehnologic', 2018, 'model')],
    
    // 2017
    'tehnologic_2017_sesiunea1': [generatePlaceholder('tehnologic', 2017, 'sesiunea1')],
    'tehnologic_2017_sesiunea2': [generatePlaceholder('tehnologic', 2017, 'sesiunea2')],
    'tehnologic_2017_simulare': [generatePlaceholder('tehnologic', 2017, 'simulare')],
    'tehnologic_2017_model': [generatePlaceholder('tehnologic', 2017, 'model')],
    
    // 2016
    'tehnologic_2016_sesiunea1': [generatePlaceholder('tehnologic', 2016, 'sesiunea1')],
    'tehnologic_2016_sesiunea2': [generatePlaceholder('tehnologic', 2016, 'sesiunea2')],
    'tehnologic_2016_simulare': [generatePlaceholder('tehnologic', 2016, 'simulare')],
    'tehnologic_2016_model': [generatePlaceholder('tehnologic', 2016, 'model')],
    
    // 2015
    'tehnologic_2015_sesiunea1': [generatePlaceholder('tehnologic', 2015, 'sesiunea1')],
    'tehnologic_2015_sesiunea2': [generatePlaceholder('tehnologic', 2015, 'sesiunea2')],
    'tehnologic_2015_simulare': [generatePlaceholder('tehnologic', 2015, 'simulare')],
    'tehnologic_2015_model': [generatePlaceholder('tehnologic', 2015, 'model')]
};

// Funcții helper pentru gestionarea bazei de date
const PDFManager = {
    // Obține PDF-urile pentru o combinație specifică
    getPDFs: function(profile, year, session = null, type = null) {
        let key = `${profile}_${year}`;
        if (session) key += `_${session}`;
        if (type) key += `_${type}`;
        
        // Încearcă să obții PDF-urile din baza de date
        const dbPdfs = pdfDatabase[key] || [];
        
        // Filtrează placeholder-urile și returnează doar PDF-urile reale
        const realPdfs = dbPdfs.filter(pdf => !pdf.isPlaceholder);
        
        // Dacă nu există PDF-uri reale, returnează placeholder-ul
        if (realPdfs.length === 0 && dbPdfs.length > 0) {
            return dbPdfs; // Returnează placeholder-urile
        }
        
        return realPdfs;
    },

    // Verifică dacă există PDF-uri reale (nu placeholder-uri)
    hasRealPDFs: function(profile, year, session = null, type = null) {
        const pdfs = this.getPDFs(profile, year, session, type);
        return pdfs.some(pdf => !pdf.isPlaceholder);
    },

    // Adaugă un PDF nou (pentru utilizare manuală dacă e necesar)
    addPDF: function(profile, year, session, type, pdfData) {
        let key = `${profile}_${year}`;
        if (session) key += `_${session}`;
        if (type) key += `_${type}`;
        
        if (!pdfDatabase[key]) {
            pdfDatabase[key] = [];
        }
        
        // Înlocuiește placeholder-urile cu PDF-uri reale
        pdfDatabase[key] = pdfDatabase[key].filter(pdf => !pdf.isPlaceholder);
        pdfDatabase[key].push(pdfData);
        return true;
    },

    // Creează un PDF din nume de fișier (pentru detectare automată)
    createPDFFromFilename: function(filename, profile, year, session) {
        const sessionNames = {
            'sesiunea1': 'Sesiunea I',
            'sesiunea2': 'Sesiunea II', 
            'simulare': 'Simulare',
            'model': 'Model Oficial'
        };
        
        // Generează titlu din numele fișierului
        let title = filename.replace('.pdf', '').replace(/[-_]/g, ' ');
        title = title.charAt(0).toUpperCase() + title.slice(1);
        
        return {
            id: `${profile}_${year}_${session}_${filename.replace('.pdf', '')}`,
            title: title,
            description: `Document ${sessionNames[session] || session} pentru ${profile} ${year}`,
            url: `/pdfs/${profile}/${year}/${session}/${filename}`,
            date: new Date().toLocaleDateString('ro-RO'),
            size: 'Necunoscut',
            category: sessionNames[session] || 'Document',
            isPlaceholder: false
        };
    },

    // Obține toate combinațiile disponibile
    getAvailableCombinations: function() {
        return Object.keys(pdfDatabase).map(key => {
            const parts = key.split('_');
            const pdfs = pdfDatabase[key] || [];
            const realPdfs = pdfs.filter(pdf => !pdf.isPlaceholder);
            
            return {
                profile: parts[0],
                year: parseInt(parts[1]),
                session: parts[2] || null,
                type: parts[2] || null,
                count: realPdfs.length,
                hasPlaceholder: pdfs.some(pdf => pdf.isPlaceholder)
            };
        });
    },

    // Caută PDF-uri după titlu sau descriere
    searchPDFs: function(searchTerm) {
        const results = [];
        const searchLower = searchTerm.toLowerCase();
        
        for (const [key, pdfs] of Object.entries(pdfDatabase)) {
            const realPdfs = pdfs.filter(pdf => !pdf.isPlaceholder);
            const matches = realPdfs.filter(pdf => 
                pdf.title.toLowerCase().includes(searchLower) ||
                pdf.description.toLowerCase().includes(searchLower)
            );
            
            if (matches.length > 0) {
                results.push({
                    combination: key,
                    pdfs: matches
                });
            }
        }
        
        return results;
    }
};

// Export pentru utilizare în alte fișiere
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pdfDatabase, PDFManager };
}
