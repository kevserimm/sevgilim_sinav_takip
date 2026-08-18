/* ==========================================================================
   SEVGİLİME ÖZEL SINAV, KİTAP VE KURS TAKİP UYGULAMASI - SCRIPT ENGINE (FAZ 2)
   ========================================================================== */

// --- EXAM CONFIGURATIONS & DETAILED CURRICULUM TOPICS ---
const EXAMS_CONFIG = {
    ags: {
        title: "AGS (Akademi Giriş Sınavı)",
        icon: "fa-graduation-cap",
        applyTargetDate: "2027-05-15T23:59:59",
        targetDate: "2027-07-11T09:30:00",
        totalQuestions: 80,
        defaultTopics: {
            "Sözel Akıl Yürütme (Türkçe)": [
                "Sözcükte Anlam ve Söz Varlığı (Gerçek, Yan, Mecaz, Terim)",
                "Söz Öbekleri ve Kalıplaşmış İfadeler",
                "Cümlede Anlam ve İlişkiler (Neden-Sonuç, Amaç-Sonuç)",
                "Cümle Yorumlama ve Örtülü Anlam",
                "Paragrafta Ana Fikir ve Yardımcı Fikirler",
                "Paragrafın Yapısı, Akışı Bozan Cümle & Paragraf Bölme",
                "Düşünceyi Geliştirme Yolları ve Anlatım Biçimleri",
                "Sözel Mantık: Sıralama, Eşleştirme ve Tablo Yorumlama"
            ],
            "Sayısal Akıl Yürütme (Matematik)": [
                "Temel Matematiksel İşlemler & Dört İşlem",
                "Rasyonel ve Ondalık Sayılar",
                "Basit Eşitsizlikler ve Mutlak Değer",
                "Üslü ve Köklü İfadeler",
                "Çarpanlara Ayırma ve Denklemler",
                "Oran - Orantı ve Orantı Çeşitleri",
                "Sayı, Kesir ve Yaş Problemleri",
                "Yüzde, Kar-Zarar ve Karışım Problemleri",
                "Hız (Hareket) ve İşçi Problemleri",
                "Grafik ve Tablo Okuma (Sütun, Çizgi, Daire Grafikleri)",
                "Sayısal Mantık, Diziler ve Kural Bulma"
            ],
            "Tarih & İnkılap Tarihi": [
                "Osmanlı Devleti Son Dönemi ve Islahatlar",
                "I. Dünya Savaşı ve Cepheler",
                "Milli Mücadele Hazırlık Dönemi (Genelgeler & Kongreler)",
                "TBMM'nin Açılması ve İsyanlar",
                "Kurtuluş Savaşı Cepheleri (Doğu, Güney, Batı)",
                "Mudanya Mütarekesi ve Lozan Barış Antlaşması",
                "Atatürk İlkeleri (Cumhuriyetçilik, Halkçılık, Laiklik vb.)",
                "Atatürk Dönemi İnkılapları (Siyasi, Hukuk, Eğitim, Toplumsal)",
                "Atatürk Dönemi Türk Dış Politikası (1923-1938)"
            ],
            "Türkiye Coğrafyası": [
                "Türkiye'nin Coğrafi Konumu ve Sonuçları",
                "Türkiye'nin Yer Şekilleri (Dağlar, Platolar, Ovalar)",
                "Türkiye'nin Su Varlığı (Akarsular ve Göller)",
                "Türkiye'de İklim Özellikleri ve Bitki Örtüsü",
                "Türkiye'de Nüfus, Yerleşme ve Göç Hareketleri",
                "Türkiye'de Tarım, Hayvancılık ve Ormancılık",
                "Türkiye'de Madenler ve Enerji Kaynakları",
                "Türkiye'de Sanayi, Ulaşım, Ticaret ve Turizm"
            ],
            "Eğitimin Temelleri & Mevzuat": [
                "Eğitimin Felsefi, Sosyolojik ve Psikolojik Temelleri",
                "Türk Milli Eğitim Sisteminin Genel Amaçları ve İlkeleri",
                "Öğretmenlik Meslek Etiği ve Değerler Eğitimi",
                "1739 Sayılı Milli Eğitim Temel Kanunu",
                "T.C. Anayasası (Eğitim Hakkı, Temel Hak ve Ödevler)",
                "657 Sayılı Devlet Memurları Kanunu (Öğretmen Hakları)"
            ]
        }
    },
    ales: {
        title: "ALES (Akademik Personel Sınavı)",
        icon: "fa-brain",
        applyTargetDate: "2027-03-20T23:59:59",
        targetDate: "2027-05-02T10:15:00",
        totalQuestions: 100,
        defaultTopics: {
            "Sözel Bölüm (Sözel Akıl Yürütme)": [
                "Sözcükte ve Cümlede Anlam İncelemeleri",
                "Paragrafta Ana Fikir ve Yardımcı Düşünceler",
                "Paragraf Tamamlama ve Cümle Yerleştirme",
                "Düşüncenin Akışını Bozan Cümleyi Bulma",
                "Paragrafı İki Paragrafa Bölme ve Çıkarım Yapma",
                "Sözel Mantık: İkili Eşleştirme ve Sıralama Soruları",
                "Sözel Mantık: Karmaşık Tablo ve Çoklu Koşul Bulmacaları"
            ],
            "Sayısal Bölüm (Matematik & Cebir)": [
                "Temel Kavramlar, Tek-Çift ve Asal Sayılar",
                "Bölünebilme Kuralları ve EBOB - EKOK",
                "Rasyonel ve Ondalık Sayılar",
                "Birinci Dereceden Denklemler ve Eşitsizlikler",
                "Mutlak Değerli İfadeler ve Denklem Çözümü",
                "Üslü ve Köklü Sayılar İşlemleri",
                "Çarpanlara Ayırma ve Sadeleştirme",
                "Oran - Orantı ve Orantı Oranları"
            ],
            "Sayısal Bölüm (Problemler & Mantık)": [
                "Sayı ve Kesir Problemleri",
                "Yaş Problemleri",
                "Yüzde, Kar-Zarar ve Faiz Problemleri",
                "Karışım ve İşçi Problemleri",
                "Hareket (Hız) Problemleri",
                "Permütasyon, Kombinasyon ve Olasılık",
                "Kümeler, İşlem ve Modüler Aritmetik",
                "Tablo Okuma ve Grafik Yorumlama (Daire, Çizgi, Sütun)",
                "Sayısal Mantık: Şekil - Sembol İlişkileri",
                "Sayısal Mantık: Dizi, İlerleme ve Kural Bulma"
            ],
            "Geometri": [
                "Doğruda ve Üçgende Açılar",
                "Üçgende Alan, Benzerlik ve Dik Üçgen",
                "Çokgenler ve Dörtgenler (Kare, Dikdörtgen, Paralelkenar)",
                "Çember ve Daire Hesaplamaları",
                "Analitik Geometri ve Katı Cisimler (Hacim & Alan)"
            ]
        }
    },
    yds: {
        title: "YDS (Yabancı Dil Sınavı)",
        icon: "fa-language",
        applyTargetDate: "2027-02-25T23:59:59",
        targetDate: "2027-04-11T10:15:00",
        totalQuestions: 80,
        defaultTopics: {
            "Vocabulary (Kelime Bilgisi)": [
                "Academic Nouns & Noun Phrases (Akademik İsimler)",
                "Verbs & Verb Collocations (Fiiller ve Birlikte Kullanımlar)",
                "Adjectives & Adverbs (Sıfatlar ve Zarflar)",
                "Phrasal Verbs & Idiomatic Expressions (Deyimsel Fiiller)",
                "Prepositions & Prepositional Phrases (Edat Grupları)"
            ],
            "Grammar (Gramer Yapıları)": [
                "Tenses, Aspects & Modals (Zamanlar ve Kip Yapıları)",
                "Passive Voice & Causatives (Edilgen ve Ettirgen Yapılar)",
                "Relative Clauses (Adjective Clauses & Kısaltmalar)",
                "Noun Clauses & Reported Speech (İsim Cümlecikleri)",
                "Adverbial Clauses & Conjunctions (Zarf Cümlecikleri ve Bağlaçlar)",
                "Conditionals & Unreal Past (If / Wish Clauses)",
                "Inversion, Emphasis & Reduction (Devrik Cümle ve Kısaltma)"
            ],
            "Sentence & Cloze Test": [
                "Cloze Test Passages (Paragrafta Kelime ve Gramer Boşluğu)",
                "Sentence Completion (Zaman ve Bağlaç Uyumlu Cümle Tamamlama)"
            ],
            "Reading Comprehension (Okuma - Anlama)": [
                "Main Idea & Author's Purpose (Ana Fikir ve Yazar Tutumu)",
                "Detailed Fact & Inference Questions (Detay ve Çıkarım Soruları)",
                "Contextual Vocabulary in Reading Passages (Metin İçi Kelime Anlamı)"
            ],
            "Translation & Paragraph Logic": [
                "English to Turkish Sentence Translation (İngilizce - Türkçe Çeviri)",
                "Turkish to English Sentence Translation (Türkçe - İngilizce Çeviri)",
                "Restatement / Near-Meaning Sentences (Yakın Anlamlı Cümleler)",
                "Paragraph Completion (Paragraf Tamamlama)",
                "Irrelevant Sentence (Akışı Bozan Cümleyi Bulma)"
            ]
        }
    }
};

// --- BADGES MASTER DEFINITION ---
const BADGES_MASTER = [
    { id: 'badge_ags_master', title: 'AGS Sözel & Sayısal Ustası', examKey: 'ags', icon: 'fa-graduation-cap', desc: 'AGS müfredatındaki tüm konuları %100 tamamla!' },
    { id: 'badge_ales_master', title: 'ALES Mantık Canavarı', examKey: 'ales', icon: 'fa-brain', desc: 'ALES müfredatındaki tüm konuları bitir!' },
    { id: 'badge_yds_master', title: 'YDS Dil Şampiyonu', examKey: 'yds', icon: 'fa-language', desc: 'YDS gramer ve kelime konularını %100 bitir!' },
    { id: 'badge_question_500', title: 'Soru Hunter 🎯', icon: 'fa-bullseye', desc: 'Toplam 500 soru barajını aş!' },
    { id: 'badge_books_5', title: 'Kitap Kurdu 📚', icon: 'fa-book-open', desc: 'En az 5 kitabı başarıyla bitir!' },
    { id: 'badge_cert_3', title: 'Sertifika Koleksiyoneri 🎓', icon: 'fa-certificate', desc: 'Online kurslardan 3 sertifika kazan!' }
];

// --- DAILY LOVE MESSAGES DATABASE ---
const LOVE_MESSAGES = [
    "Benim güzeller güzeli sevgilim, bugün başardığın her küçük adım seni hayallerine bir adım daha yaklaştırıyor. Seninle gurur duyuyorum! ❤️",
    "Sen istersen başaramayacağın hiçbir şey yok sevgilim. Zekana, azmine ve kalbinin güzelliğine hayranım! ✨",
    "Dünyanın en tatlı ve en azimli insanına kucak dolusu sevgiler! Yorulduğunda arkana yaslan ve hatırla: Ben hep yanındayım. 💖",
    "Bugün çözeceğin her soru, okuyacağın her sayfa gelecekteki mutlu günlerimizin temeli. Seni çok ama çok seviyorum! 🌸",
    "Başarı sadece hedefe ulaşmak değil, senin gibi azimle yürümektir. Sen zaten benim gözümde şampiyonsun prensesim! 👑",
    "Sınavlar gelip geçer ama senin o güzel kalbin ve başarma azmin ömür boyu kalır. Sana inancım sonsuz! 🚀",
    "Gözlerindeki ışık ve içindeki güç her zorluğu aşmaya yeter sevgilim. Bugün de harikalar yaratacaksın biliyorum! 💫",
    "Sen ders çalışırken bile etrafına ışık saçıyorsun. Sana odaklanmış halin dünyanın en güzel manzarası! 🥰",
    "Kendine güven bitanem, çünkü sen düşündüğünden çok daha güçlü ve çok daha zekisin. Başarılar seninle olsun! 🌟",
    "Unutma sevgilim, fırtınalar güçlü ağaçlar yetiştirir. Emeklerinin karşılığını fazlasıyla alacaksın! ❤️",
    "Bugün biraz yorulursan kalbimi hisset; orada sadece sen ve senin hayallerin var. İyi ki varsın biriciğim! 💕",
    "Seninle gurur duymak benim günlük rutinim oldu. Her başarın beni tekrar tekrar aşık ediyor! 🌹",
    "Bütün kitaplar, sorular ve sınavlar seni tanısa sana hayran kalırdı sevgilim! Başarı senin kodlarında var. 🔥",
    "Bugün kendine bir güzellik yap ve ne kadar harika bir insan olduğunu hatırla. Seni seviyorum! 😘",
    "Sen sadece bir sınav kazanmıyorsun, geleceğimizi inşa ediyorsun. Ellerinden, gözlerinden öpüyorum! 💌"
];

// --- INITIAL APPLICATION STATE ---
let appState = {
    activeTab: 'ags',
    examTopics: {},
    testBooks: {},
    denemeResults: {},
    readingBooks: [],
    onlineCourses: [],
    customExamDates: {},
    dailyGoal: { questionTarget: 50, celebrationDoneToday: false },
    mistakeNotes: [],
    unlockedBadges: [],
    loveNoteIndex: 0
};

// Pomodoro Runtime State
let pomodoroState = {
    workMins: 25,
    breakMins: 5,
    secondsLeft: 25 * 60,
    isRunning: false,
    mode: 'work', // 'work' or 'break'
    intervalId: null
};

// Chart Instances
let examBarChartInstance = null;
let netLineChartInstance = null;

// ==========================================================================
// INITIALIZATION ON DOM LOAD
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    loadStateFromLocalStorage();
    initializeDateHeader();
    initializeCustomExamDates();
    initializeDefaultTopicsIfEmpty();
    renderActiveTab();
    setupTabNavigation();
    startCountdownTimer();
    renderDailyLoveNote();
    updateDailyGoalWidget();
    checkAndUnlockBadges();
});

// --- LOCAL STORAGE MANAGER ---
function loadStateFromLocalStorage() {
    const saved = localStorage.getItem('sevgili_sinav_takip_db');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch (e) {
            console.error("State parse error:", e);
        }
    }
}

function saveStateToLocalStorage() {
    localStorage.setItem('sevgili_sinav_takip_db', JSON.stringify(appState));
}

// --- DATE HEADER ---
function initializeDateHeader() {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const today = new Date().toLocaleDateString('tr-TR', options);
    document.getElementById('currentDateText').innerText = today;
}

function initializeCustomExamDates() {
    if (appState.customExamDates) {
        Object.keys(appState.customExamDates).forEach(key => {
            if (EXAMS_CONFIG[key] && appState.customExamDates[key]) {
                if (appState.customExamDates[key].applyTargetDate) {
                    EXAMS_CONFIG[key].applyTargetDate = appState.customExamDates[key].applyTargetDate;
                }
                if (appState.customExamDates[key].targetDate) {
                    EXAMS_CONFIG[key].targetDate = appState.customExamDates[key].targetDate;
                }
            }
        });
    }
}

function initializeDefaultTopicsIfEmpty() {
    Object.keys(EXAMS_CONFIG).forEach(examKey => {
        const config = EXAMS_CONFIG[examKey];
        if (!appState.examTopics[examKey]) {
            appState.examTopics[examKey] = [];
        }

        const existingNames = new Set(appState.examTopics[examKey].map(t => t.name));

        let idCounter = appState.examTopics[examKey].length + 1;
        Object.keys(config.defaultTopics).forEach(category => {
            config.defaultTopics[category].forEach(topicName => {
                if (!existingNames.has(topicName)) {
                    appState.examTopics[examKey].push({
                        id: 'topic_' + examKey + '_' + (idCounter++),
                        category: category,
                        name: topicName,
                        completed: false
                    });
                }
            });
        });

        if (!appState.testBooks[examKey]) appState.testBooks[examKey] = [];
        if (!appState.denemeResults[examKey]) appState.denemeResults[examKey] = [];
    });
    if (!appState.mistakeNotes) appState.mistakeNotes = [];
    if (!appState.unlockedBadges) appState.unlockedBadges = [];
    if (!appState.dailyGoal) appState.dailyGoal = { questionTarget: 50, celebrationDoneToday: false };

    saveStateToLocalStorage();
}

// ==========================================================================
// WEB AUDIO SYNTHESIZER (AUDIO CHIME ENGINE)
// ==========================================================================
function playAudioChime(type = 'pomo') {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        const notes = type === 'goal' ? [523.25, 659.25, 783.99, 1046.50] : [523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;

            const startTime = ctx.currentTime + (idx * 0.15);
            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.45);
        });
    } catch (e) {
        console.log("Audio not supported or blocked:", e);
    }
}

// ==========================================================================
// TAB NAVIGATION SYSTEM
// ==========================================================================
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            appState.activeTab = tab.dataset.tab;
            saveStateToLocalStorage();
            renderActiveTab();
        });
    });
}

function renderActiveTab() {
    const examTabsContainer = document.getElementById('examTabsContainer');
    const tabBooks = document.getElementById('tab-books');
    const tabCourses = document.getElementById('tab-courses');
    const tabMistakes = document.getElementById('tab-mistakes');
    const tabHeatmap = document.getElementById('tab-heatmap');
    const tabBadges = document.getElementById('tab-badges');

    // Hide all
    examTabsContainer.style.display = 'none';
    tabBooks.style.display = 'none';
    tabCourses.style.display = 'none';
    tabMistakes.style.display = 'none';
    tabHeatmap.style.display = 'none';
    tabBadges.style.display = 'none';

    if (['ags', 'ales', 'yds'].includes(appState.activeTab)) {
        examTabsContainer.style.display = 'block';
        renderExamDashboard(appState.activeTab);
    } else if (appState.activeTab === 'books') {
        tabBooks.style.display = 'block';
        renderReadingBooksTab();
    } else if (appState.activeTab === 'courses') {
        tabCourses.style.display = 'block';
        renderOnlineCoursesTab();
    } else if (appState.activeTab === 'mistakes') {
        tabMistakes.style.display = 'block';
        renderMistakeNotebookTab();
    } else if (appState.activeTab === 'heatmap') {
        tabHeatmap.style.display = 'block';
        renderHeatmapCalendarTab();
    } else if (appState.activeTab === 'badges') {
        tabBadges.style.display = 'block';
        renderBadgesAndSummaryTab();
    }
}

// ==========================================================================
// EXAM DASHBOARD RENDERER (AGS, ALES, YDS)
// ==========================================================================
function renderExamDashboard(examKey) {
    const config = EXAMS_CONFIG[examKey];
    const examTabsContainer = document.getElementById('examTabsContainer');

    const topics = appState.examTopics[examKey] || [];
    const completedTopicsCount = topics.filter(t => t.completed).length;
    const totalTopicsCount = topics.length;
    const topicProgressPct = totalTopicsCount > 0 ? Math.round((completedTopicsCount / totalTopicsCount) * 100) : 0;

    const books = appState.testBooks[examKey] || [];
    let totalQuestionsSolved = 0;
    books.forEach(b => {
        if (b.history) b.history.forEach(h => totalQuestionsSolved += (h.count || 0));
    });

    const denemes = appState.denemeResults[examKey] || [];
    const lastDeneme = denemes.length > 0 ? denemes[denemes.length - 1] : null;

    examTabsContainer.innerHTML = `
        <div class="tab-content">
            <div class="dashboard-grid">
                
                <!-- 1. APPLICATION COUNTDOWN CARD (Col 6) -->
                <div class="glass-card col-6">
                    <div class="countdown-header">
                        <div class="exam-title-badge">
                            <div class="exam-icon" style="background: rgba(245,158,11,0.15); color: var(--accent-gold);"><i class="fa-solid fa-file-pen"></i></div>
                            <div>
                                <h3 style="font-size: 1.15rem;">Sınav Başvurusuna Kalan Süre</h3>
                                <p class="subtitle">Son Başvuru Tarihi</p>
                            </div>
                        </div>
                        <button class="btn btn-secondary btn-sm" onclick="openEditExamDateModal('${examKey}')">
                            <i class="fa-solid fa-pen"></i> Düzenle
                        </button>
                    </div>
                    <div class="countdown-digits-grid">
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-app-days">00</div>
                            <div class="countdown-label">GÜN</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-app-hours">00</div>
                            <div class="countdown-label">SAAT</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-app-minutes">00</div>
                            <div class="countdown-label">DAKİKA</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-app-seconds">00</div>
                            <div class="countdown-label">SANİYE</div>
                        </div>
                    </div>
                </div>

                <!-- 2. EXAM DAY COUNTDOWN CARD (Col 6) -->
                <div class="glass-card col-6">
                    <div class="countdown-header">
                        <div class="exam-title-badge">
                            <div class="exam-icon"><i class="fa-solid ${config.icon}"></i></div>
                            <div>
                                <h3 style="font-size: 1.15rem;">Sınava Kalan Süre</h3>
                                <p class="subtitle">Büyük Sınav Günü</p>
                            </div>
                        </div>
                        <div class="badge-tag" style="background: rgba(255,71,126,0.15); color: var(--primary-rose); padding: 4px 10px; border-radius: 20px; font-weight: 600; font-size: 0.78rem;">
                            ${new Date(config.targetDate).toLocaleDateString('tr-TR')}
                        </div>
                    </div>
                    <div class="countdown-digits-grid">
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-exam-days">00</div>
                            <div class="countdown-label">GÜN</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-exam-hours">00</div>
                            <div class="countdown-label">SAAT</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-exam-minutes">00</div>
                            <div class="countdown-label">DAKİKA</div>
                        </div>
                        <div class="countdown-item">
                            <div class="countdown-num" id="cnt-exam-seconds">00</div>
                            <div class="countdown-label">SANİYE</div>
                        </div>
                    </div>
                </div>

                <!-- TOPICS CHECKLIST CARD (Col 7) -->
                <div class="glass-card col-7">
                    <div class="card-header-action">
                        <h3><i class="fa-solid fa-list-check" style="color: var(--primary-rose);"></i> Müfredat Konu Takip Listesi</h3>
                        <button class="btn btn-primary btn-sm" onclick="openAddTopicModal('${examKey}')">
                            <i class="fa-solid fa-plus"></i> Özel Konu Ekle
                        </button>
                    </div>

                    <div class="progress-header">
                        <div class="progress-info">
                            <span>Tamamlanan Konular (${completedTopicsCount}/${totalTopicsCount})</span>
                            <span>%${topicProgressPct}</span>
                        </div>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${topicProgressPct}%;"></div>
                        </div>
                    </div>

                    <div class="topics-container" style="max-height: 420px; overflow-y: auto; padding-right: 4px;">
                        ${renderTopicsGroupedHTML(topics, examKey)}
                    </div>
                </div>

                <!-- MOCK EXAM & NET PROGRESS CARD (Col 5) -->
                <div class="glass-card col-5">
                    <div class="card-header-action">
                        <h3><i class="fa-solid fa-chart-pie" style="color: var(--accent-gold);"></i> Denemeler & Net Grafiği</h3>
                        <button class="btn btn-secondary btn-sm" onclick="openLogDenemeModal('${examKey}')">
                            <i class="fa-solid fa-plus"></i> Deneme Ekle
                        </button>
                    </div>

                    <div class="estimator-box">
                        <div style="font-size: 0.85rem; color: var(--text-secondary);">Son Deneme Tahmini Sıralama:</div>
                        <div class="rank-output-number">
                            ${lastDeneme ? `#${lastDeneme.estimatedRank}` : 'Henüz Veri Yok'}
                        </div>
                        <div class="rank-output-sub">
                            ${lastDeneme ? `Net: <strong>${lastDeneme.net}</strong> | Puan: <strong>${lastDeneme.score}</strong> (${lastDeneme.name})` : 'Deneme ekleyerek ÖSYM sıralamanı öğren!'}
                        </div>
                    </div>

                    <!-- NET PROGRESS LINE CHART -->
                    <h4 style="margin-top: 18px; font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-solid fa-chart-line"></i> Net Gelişim Trendi</h4>
                    <div style="height: 140px; position: relative; margin-top: 8px;">
                        <canvas id="netProgressLineChart"></canvas>
                    </div>

                    <h4 style="margin-top: 16px; font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-solid fa-clock-rotate-left"></i> Son Denemeler</h4>
                    <div class="history-list">
                        ${renderDenemesHistoryHTML(denemes, examKey)}
                    </div>
                </div>

                <!-- TEST BOOKS & QUESTION LOG CARD (Col 6) -->
                <div class="glass-card col-6">
                    <div class="card-header-action">
                        <h3><i class="fa-solid fa-book" style="color: var(--accent-blue);"></i> Test Kitapları & Soru Günlüğü</h3>
                        <button class="btn btn-primary btn-sm" onclick="openAddTestBookModal('${examKey}')">
                            <i class="fa-solid fa-plus"></i> Kitap Ekle
                        </button>
                    </div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">
                        Toplam Çözülen Soru: <strong style="color: var(--primary-rose); font-size: 1.1rem;">${totalQuestionsSolved} Soru</strong>
                    </div>

                    <div class="test-books-grid">
                        ${renderTestBooksHTML(books, examKey)}
                    </div>
                </div>

                <!-- WEEKLY CHART CARD (Col 6) -->
                <div class="glass-card col-6">
                    <h3><i class="fa-solid fa-chart-column" style="color: var(--accent-green);"></i> Haftalık Çözülen Sorular</h3>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">Son 7 gün içinde çözdüğün soru sayıları</p>
                    <div style="height: 240px; position: relative;">
                        <canvas id="weeklyExamChart"></canvas>
                    </div>
                </div>

            </div>
        </div>
    `;

    renderWeeklyExamChart(books);
    renderNetProgressLineChart(denemes);
}

// --- TOPICS HELPERS ---
function renderTopicsGroupedHTML(topics, examKey) {
    if (topics.length === 0) {
        return `<p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 20px;">Henüz konu eklenmedi.</p>`;
    }

    const grouped = {};
    topics.forEach(t => {
        if (!grouped[t.category]) grouped[t.category] = [];
        grouped[t.category].push(t);
    });

    let html = '';
    Object.keys(grouped).forEach(cat => {
        html += `<div class="topic-category-group">
            <div class="category-title"><i class="fa-solid fa-folder-open"></i> ${cat}</div>
            <div class="topic-list">`;
        grouped[cat].forEach(topic => {
            html += `
                <div class="topic-item ${topic.completed ? 'completed' : ''}">
                    <label class="topic-checkbox-label">
                        <input type="checkbox" ${topic.completed ? 'checked' : ''} onchange="toggleTopicComplete('${examKey}', '${topic.id}')">
                        <span>${topic.name}</span>
                    </label>
                    <button class="topic-delete-btn" onclick="deleteTopic('${examKey}', '${topic.id}')" title="Konuyu Sil">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
        });
        html += `</div></div>`;
    });
    return html;
}

function toggleTopicComplete(examKey, topicId) {
    const list = appState.examTopics[examKey];
    const topic = list.find(t => t.id === topicId);
    if (topic) {
        topic.completed = !topic.completed;
        saveStateToLocalStorage();
        renderActiveTab();
        checkAndUnlockBadges();
    }
}

function deleteTopic(examKey, topicId) {
    if (confirm("Bu konuyu silmek istediğine emin misin sevgilim?")) {
        appState.examTopics[examKey] = appState.examTopics[examKey].filter(t => t.id !== topicId);
        saveStateToLocalStorage();
        renderActiveTab();
    }
}

// --- TEST BOOKS HELPERS ---
function renderTestBooksHTML(books, examKey) {
    if (books.length === 0) {
        return `<p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 20px; grid-column: span 2;">Henüz test kitabı eklenmedi.</p>`;
    }

    let html = '';
    books.forEach(b => {
        let total = 0;
        if (b.history) b.history.forEach(h => total += h.count);
        html += `
            <div class="test-book-card">
                <div class="test-book-header">
                    <div>
                        <div class="test-book-title">${b.name}</div>
                        <div class="test-book-subject">${b.subject || 'Genel'}</div>
                    </div>
                    <button class="topic-delete-btn" onclick="deleteTestBook('${examKey}', '${b.id}')"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="test-book-stat">${total} Soru Çözüldü</div>
                <div class="test-book-actions">
                    <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="openLogQuestionModal('${examKey}', '${b.id}', '${b.name.replace(/'/g, "\\'")}')">
                        <i class="fa-solid fa-plus"></i> Soru Ekle
                    </button>
                </div>
            </div>
        `;
    });
    return html;
}

function deleteTestBook(examKey, bookId) {
    if (confirm("Bu kitabı ve soru geçmişini silmek istediğine emin misin?")) {
        appState.testBooks[examKey] = appState.testBooks[examKey].filter(b => b.id !== bookId);
        saveStateToLocalStorage();
        renderActiveTab();
    }
}

// --- DENEME RESULTS HELPERS ---
function renderDenemesHistoryHTML(denemes, examKey) {
    if (denemes.length === 0) {
        return `<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 10px;">Henüz deneme sonucu yok.</p>`;
    }

    let html = '';
    [...denemes].reverse().forEach(d => {
        html += `
            <div class="history-item">
                <div>
                    <strong>${d.name}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-secondary);">${d.date} | ${d.correct} D ${d.wrong} Y</div>
                </div>
                <div style="text-align: right;">
                    <div class="history-item-badge">#${d.estimatedRank}</div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px;">Net: ${d.net}</div>
                </div>
            </div>
        `;
    });
    return html;
}

function calculateEstimatedRank(examKey, net, score) {
    let rank = 100000;
    if (examKey === 'ags') {
        if (net >= 70) rank = Math.round(1 + (80 - net) * 20);
        else if (net >= 55) rank = Math.round(250 + (70 - net) * 150);
        else if (net >= 40) rank = Math.round(2500 + (55 - net) * 600);
        else rank = Math.round(11500 + (40 - net) * 2000);
    } else if (examKey === 'ales') {
        if (net >= 85) rank = Math.round(1 + (100 - net) * 40);
        else if (net >= 70) rank = Math.round(600 + (85 - net) * 300);
        else if (net >= 55) rank = Math.round(5000 + (70 - net) * 1200);
        else rank = Math.round(23000 + (55 - net) * 4000);
    } else if (examKey === 'yds') {
        if (net >= 75) rank = Math.round(1 + (80 - net) * 30);
        else if (net >= 65) rank = Math.round(300 + (75 - net) * 200);
        else if (net >= 50) rank = Math.round(2300 + (65 - net) * 600);
        else rank = Math.round(11300 + (50 - net) * 1500);
    }
    return Math.max(1, rank);
}

// --- CHARTS (BAR & NET PROGRESS LINE) ---
function renderWeeklyExamChart(books) {
    const ctx = document.getElementById('weeklyExamChart');
    if (!ctx) return;

    if (examBarChartInstance) examBarChartInstance.destroy();

    const days = [];
    const counts = [0, 0, 0, 0, 0, 0, 0];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const dayName = d.toLocaleDateString('tr-TR', { weekday: 'short' });
        days.push(dayName);

        books.forEach(b => {
            if (b.history) {
                b.history.forEach(h => {
                    if (h.date === dateStr) counts[6 - i] += h.count;
                });
            }
        });
    }

    examBarChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Çözülen Soru',
                data: counts,
                backgroundColor: 'rgba(255, 71, 126, 0.6)',
                borderColor: '#ff477e',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' }, beginAtZero: true }
            }
        }
    });
}

function renderNetProgressLineChart(denemes) {
    const ctx = document.getElementById('netProgressLineChart');
    if (!ctx) return;

    if (netLineChartInstance) netLineChartInstance.destroy();

    const labels = denemes.map(d => d.date ? d.date.split('-').slice(1).join('/') : 'D');
    const netData = denemes.map(d => d.net);

    netLineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.length > 0 ? labels : ['1. Deneme', '2. Deneme', '3. Deneme'],
            datasets: [{
                label: 'Net Sayısı',
                data: netData.length > 0 ? netData : [0, 0, 0],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 10 } } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } }, beginAtZero: true }
            }
        }
    });
}

// ==========================================================================
// COUNTDOWN TIMER LOOP ENGINE
// ==========================================================================
function startCountdownTimer() {
    setInterval(() => {
        if (!['ags', 'ales', 'yds'].includes(appState.activeTab)) return;

        const config = EXAMS_CONFIG[appState.activeTab];
        if (!config) return;

        const now = new Date().getTime();
        updateTimerElement('cnt-app', new Date(config.applyTargetDate).getTime() - now);
        updateTimerElement('cnt-exam', new Date(config.targetDate).getTime() - now);
    }, 1000);
}

function updateTimerElement(prefix, diff) {
    const daysElem = document.getElementById(`${prefix}-days`);
    const hoursElem = document.getElementById(`${prefix}-hours`);
    const minsElem = document.getElementById(`${prefix}-minutes`);
    const secsElem = document.getElementById(`${prefix}-seconds`);

    if (!daysElem || !hoursElem || !minsElem || !secsElem) return;

    if (diff <= 0) {
        daysElem.innerText = "00";
        hoursElem.innerText = "00";
        minsElem.innerText = "00";
        secsElem.innerText = "00";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysElem.innerText = String(d).padStart(2, '0');
    hoursElem.innerText = String(h).padStart(2, '0');
    minsElem.innerText = String(m).padStart(2, '0');
    secsElem.innerText = String(s).padStart(2, '0');
}

// ==========================================================================
// POMODORO TIMER ENGINE
// ==========================================================================
function togglePomodoro() {
    const btn = document.getElementById('pomoStartBtn');
    const card = document.querySelector('.pomo-card');

    if (pomodoroState.isRunning) {
        clearInterval(pomodoroState.intervalId);
        pomodoroState.isRunning = false;
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Devam Et';
        if (card) card.classList.remove('running');
    } else {
        pomodoroState.isRunning = true;
        btn.innerHTML = '<i class="fa-solid fa-pause"></i> Duraklat';
        if (card) card.classList.add('running');

        pomodoroState.intervalId = setInterval(() => {
            if (pomodoroState.secondsLeft > 0) {
                pomodoroState.secondsLeft--;
                updatePomodoroDisplay();
            } else {
                clearInterval(pomodoroState.intervalId);
                pomodoroState.isRunning = false;
                if (card) card.classList.remove('running');

                playAudioChime('pomo');

                if (pomodoroState.mode === 'work') {
                    alert("Tebrikler sevgilim! Harika bir odaklanma seansı tamamladın. Şimdi 5 dakika hak ettiğin dinlenme molası! ☕");
                    triggerConfettiCelebration("Pomodoro Tamamlandı!");
                    pomodoroState.mode = 'break';
                    pomodoroState.secondsLeft = pomodoroState.breakMins * 60;
                } else {
                    alert("Mola süresi bitti sevgilim! Yeni bir odaklanma seansına hazır mısın? 💪");
                    pomodoroState.mode = 'work';
                    pomodoroState.secondsLeft = pomodoroState.workMins * 60;
                }
                updatePomodoroDisplay();
                btn.innerHTML = '<i class="fa-solid fa-play"></i> Başlat';
            }
        }, 1000);
    }
}

function resetPomodoro() {
    clearInterval(pomodoroState.intervalId);
    pomodoroState.isRunning = false;
    pomodoroState.secondsLeft = (pomodoroState.mode === 'work' ? pomodoroState.workMins : pomodoroState.breakMins) * 60;
    const btn = document.getElementById('pomoStartBtn');
    const card = document.querySelector('.pomo-card');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i> Başlat';
    if (card) card.classList.remove('running');
    updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
    const mins = Math.floor(pomodoroState.secondsLeft / 60);
    const secs = pomodoroState.secondsLeft % 60;
    const timeStr = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    
    document.getElementById('pomoDisplay').innerText = timeStr;
    document.getElementById('pomoModeText').innerText = pomodoroState.mode === 'work' ? '🎯 Odaklanma Zamanı' : '☕ Mola Zamanı';
    document.getElementById('pomoSubtext').innerText = `${pomodoroState.workMins} dk Çalışma / ${pomodoroState.breakMins} dk Mola`;
}

function savePomodoroSettings() {
    const w = parseInt(document.getElementById('pomoWorkMinsInput').value) || 25;
    const b = parseInt(document.getElementById('pomoBreakMinsInput').value) || 5;

    pomodoroState.workMins = Math.max(1, w);
    pomodoroState.breakMins = Math.max(1, b);
    resetPomodoro();
    closeModal('pomoSettingsModal');
}

// ==========================================================================
// DAILY GOAL TRACKER ENGINE
// ==========================================================================
function getTodaySolvedCount() {
    const todayStr = new Date().toISOString().split('T')[0];
    let total = 0;
    Object.keys(appState.testBooks).forEach(key => {
        appState.testBooks[key].forEach(b => {
            if (b.history) {
                b.history.forEach(h => {
                    if (h.date === todayStr) total += h.count;
                });
            }
        });
    });
    return total;
}

function getTodayReadPagesCount() {
    const todayStr = new Date().toISOString().split('T')[0];
    let total = 0;
    (appState.readingBooks || []).forEach(b => {
        if (b.history) {
            b.history.forEach(h => {
                if (h.date === todayStr) total += h.pages;
            });
        }
    });
    return total;
}

function updateDailyGoalWidget() {
    const target = appState.dailyGoal ? (appState.dailyGoal.questionTarget || 50) : 50;
    const solvedToday = getTodaySolvedCount();
    const pagesToday = getTodayReadPagesCount();
    const pct = Math.min(100, Math.round((solvedToday / target) * 100));

    document.getElementById('dailyGoalText').innerText = `${solvedToday} / ${target} Soru (%${pct})`;
    document.getElementById('dailyGoalFill').style.width = `${pct}%`;
    document.getElementById('todaySolvedCount').innerText = solvedToday;
    document.getElementById('todayReadCount').innerText = pagesToday;

    // Check celebration
    if (pct >= 100 && !appState.dailyGoal.celebrationDoneToday) {
        appState.dailyGoal.celebrationDoneToday = true;
        saveStateToLocalStorage();
        playAudioChime('goal');
        triggerConfettiCelebration("Günlük Hedef Tamamlandı!");
        alert("MUHTEŞEMSİN BİTANEM! 🎉 Günlük soru hedefini %100 başardın!");
    }
}

function openSetDailyGoalModal() {
    document.getElementById('goalQuestionCountInput').value = appState.dailyGoal.questionTarget || 50;
    openModal('setDailyGoalModal');
}

function saveDailyGoal() {
    const val = parseInt(document.getElementById('goalQuestionCountInput').value);
    if (isNaN(val) || val <= 0) {
        alert("Lütfen geçerli bir soru hedefi gir sevgilim.");
        return;
    }
    appState.dailyGoal.questionTarget = val;
    appState.dailyGoal.celebrationDoneToday = false;
    saveStateToLocalStorage();
    closeModal('setDailyGoalModal');
    updateDailyGoalWidget();
}

// ==========================================================================
// EXAM DATE EDITOR ENGINE
// ==========================================================================
function openEditExamDateModal(examKey) {
    document.getElementById('editDateExamKey').value = examKey;
    const config = EXAMS_CONFIG[examKey];
    document.getElementById('editApplyDateInput').value = config.applyTargetDate ? config.applyTargetDate.slice(0, 16) : '';
    document.getElementById('editExamDateInput').value = config.targetDate ? config.targetDate.slice(0, 16) : '';
    openModal('editExamDateModal');
}

function saveEditedExamDates() {
    const examKey = document.getElementById('editDateExamKey').value;
    const applyVal = document.getElementById('editApplyDateInput').value;
    const examVal = document.getElementById('editExamDateInput').value;

    if (!applyVal || !examVal) {
        alert("Lütfen her iki tarihi de seç sevgilim.");
        return;
    }

    if (!appState.customExamDates) appState.customExamDates = {};
    appState.customExamDates[examKey] = {
        applyTargetDate: applyVal + ':00',
        targetDate: examVal + ':00'
    };

    EXAMS_CONFIG[examKey].applyTargetDate = applyVal + ':00';
    EXAMS_CONFIG[examKey].targetDate = examVal + ':00';

    saveStateToLocalStorage();
    closeModal('editExamDateModal');
    renderActiveTab();
}

// ==========================================================================
// MISTAKE NOTEBOOK LOGIC
// ==========================================================================
function renderMistakeNotebookTab() {
    const notes = appState.mistakeNotes || [];
    const filter = document.getElementById('mistakeExamFilter').value || 'all';
    const grid = document.getElementById('mistakeNotesList');

    const filtered = filter === 'all' ? notes : notes.filter(n => n.examKey === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: span 3; padding: 40px;">Henüz eklenmiş hatalı soru notu bulunmuyor. Eklemek için yukarıdaki 'Hatalı Soru Notu Ekle' butonuna tıkla! 📝</p>`;
        return;
    }

    let html = '';
    [...filtered].reverse().forEach(n => {
        html += `
            <div class="mistake-card ${n.isResolved ? 'resolved' : ''}">
                <div>
                    <div class="mistake-card-header">
                        <span class="mistake-badge">${n.examKey.toUpperCase()}</span>
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">${n.date}</span>
                    </div>
                    <div class="mistake-title">${n.subject}</div>
                    <div class="mistake-text">${n.note}</div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
                    <button class="btn btn-secondary btn-sm" onclick="toggleMistakeResolved('${n.id}')">
                        ${n.isResolved ? '<i class="fa-solid fa-rotate-left"></i> Çözülecek İşaretle' : '<i class="fa-solid fa-check"></i> Çözüldü İşaretle'}
                    </button>
                    <button class="topic-delete-btn" onclick="deleteMistakeNote('${n.id}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function openAddMistakeNoteModal() {
    document.getElementById('mistakeSubjectInput').value = '';
    document.getElementById('mistakeNoteInput').value = '';
    openModal('addMistakeNoteModal');
}

function saveMistakeNote() {
    const examKey = document.getElementById('mistakeExamSelect').value;
    const subject = document.getElementById('mistakeSubjectInput').value.trim();
    const note = document.getElementById('mistakeNoteInput').value.trim();

    if (!subject || !note) {
        alert("Lütfen ders başlığı ve açıklama notu gir sevgilim.");
        return;
    }

    if (!appState.mistakeNotes) appState.mistakeNotes = [];
    appState.mistakeNotes.push({
        id: 'mistake_' + Date.now(),
        examKey: examKey,
        subject: subject,
        note: note,
        isResolved: false,
        date: new Date().toISOString().split('T')[0]
    });

    saveStateToLocalStorage();
    closeModal('addMistakeNoteModal');
    renderActiveTab();
}

function toggleMistakeResolved(noteId) {
    const note = appState.mistakeNotes.find(n => n.id === noteId);
    if (note) {
        note.isResolved = !note.isResolved;
        saveStateToLocalStorage();
        renderActiveTab();
    }
}

function deleteMistakeNote(noteId) {
    if (confirm("Bu soru notunu silmek istediğine emin misin?")) {
        appState.mistakeNotes = appState.mistakeNotes.filter(n => n.id !== noteId);
        saveStateToLocalStorage();
        renderActiveTab();
    }
}

// ==========================================================================
// WORK HEATMAP CALENDAR TAB
// ==========================================================================
function renderHeatmapCalendarTab() {
    const grid = document.getElementById('heatmapCalendarGrid');
    grid.innerHTML = '';

    const today = new Date();
    for (let i = 29; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const dayNum = d.getDate();

        // Calculate total activity (solved questions + pages read)
        let totalActivity = 0;
        Object.keys(appState.testBooks).forEach(k => {
            appState.testBooks[k].forEach(b => {
                if (b.history) b.history.forEach(h => { if (h.date === dateStr) totalActivity += h.count; });
            });
        });
        (appState.readingBooks || []).forEach(b => {
            if (b.history) b.history.forEach(h => { if (h.date === dateStr) totalActivity += h.pages; });
        });

        let level = 'level-0';
        if (totalActivity >= 100) level = 'level-4';
        else if (totalActivity >= 60) level = 'level-3';
        else if (totalActivity >= 30) level = 'level-2';
        else if (totalActivity > 0) level = 'level-1';

        const cell = document.createElement('div');
        cell.className = `heatmap-cell ${level}`;
        cell.innerText = dayNum;
        cell.title = `${dateStr}: Toplam ${totalActivity} aktivite (soru/sayfa)`;

        grid.appendChild(cell);
    }
}

// ==========================================================================
// BADGES & MONTHLY SUMMARY TAB
// ==========================================================================
function checkAndUnlockBadges() {
    if (!appState.unlockedBadges) appState.unlockedBadges = [];

    BADGES_MASTER.forEach(b => {
        let isUnlocked = false;

        if (b.examKey) {
            const topics = appState.examTopics[b.examKey] || [];
            if (topics.length > 0 && topics.every(t => t.completed)) isUnlocked = true;
        } else if (b.id === 'badge_question_500') {
            let total = 0;
            Object.keys(appState.testBooks).forEach(k => {
                appState.testBooks[k].forEach(bk => {
                    if (bk.history) bk.history.forEach(h => total += h.count);
                });
            });
            if (total >= 500) isUnlocked = true;
        } else if (b.id === 'badge_books_5') {
            const finished = (appState.readingBooks || []).filter(bk => bk.isFinished).length;
            if (finished >= 5) isUnlocked = true;
        } else if (b.id === 'badge_cert_3') {
            const certs = (appState.onlineCourses || []).filter(c => c.isCompleted).length;
            if (certs >= 3) isUnlocked = true;
        }

        if (isUnlocked && !appState.unlockedBadges.includes(b.id)) {
            appState.unlockedBadges.push(b.id);
            saveStateToLocalStorage();
            playAudioChime('goal');
            triggerConfettiCelebration(b.title);
        }
    });
}

function renderBadgesAndSummaryTab() {
    checkAndUnlockBadges();

    // 1. Calculate Monthly Stats
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthName = new Date().toLocaleDateString('tr-TR', { month: 'long' });

    document.getElementById('monthlySummaryMonthName').innerText = monthName;

    let qCount = 0;
    let denemeCount = 0;
    let pagesCount = 0;

    Object.keys(appState.testBooks).forEach(k => {
        appState.testBooks[k].forEach(b => {
            if (b.history) b.history.forEach(h => {
                const hd = new Date(h.date);
                if (hd.getMonth() === currentMonth && hd.getFullYear() === currentYear) qCount += h.count;
            });
        });
    });

    Object.keys(appState.denemeResults).forEach(k => {
        appState.denemeResults[k].forEach(d => {
            const dd = new Date(d.date);
            if (dd.getMonth() === currentMonth && dd.getFullYear() === currentYear) denemeCount++;
        });
    });

    (appState.readingBooks || []).forEach(b => {
        if (b.history) b.history.forEach(h => {
            const hd = new Date(h.date);
            if (hd.getMonth() === currentMonth && hd.getFullYear() === currentYear) pagesCount += h.pages;
        });
    });

    document.getElementById('monthlyQuestionsSolved').innerText = qCount;
    document.getElementById('monthlyDenemesCount').innerText = denemeCount;
    document.getElementById('monthlyPagesRead').innerText = pagesCount;

    // 2. Render Badges Gallery
    const grid = document.getElementById('badgesGalleryGrid');
    let html = '';

    BADGES_MASTER.forEach(b => {
        const isUnlocked = appState.unlockedBadges.includes(b.id);
        html += `
            <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="badge-icon"><i class="fa-solid ${b.icon}"></i></div>
                <div class="badge-title">${b.title}</div>
                <div class="badge-desc">${b.desc}</div>
                <div style="margin-top: 10px; font-size: 0.75rem; font-weight: 700; color: ${isUnlocked ? 'var(--accent-gold)' : 'var(--text-secondary)'}">
                    ${isUnlocked ? '<i class="fa-solid fa-lock-open"></i> Kazanıldı!' : '<i class="fa-solid fa-lock"></i> Kilitli'}
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// ==========================================================================
// BOOK READING TRACKER TAB LOGIC
// ==========================================================================
function renderReadingBooksTab() {
    const books = appState.readingBooks || [];
    const activeBooks = books.filter(b => !b.isFinished);
    const finishedBooks = books.filter(b => b.isFinished);

    let totalPagesRead = 0;
    books.forEach(b => totalPagesRead += (b.currentPage || 0));

    document.getElementById('totalBooksCount').innerText = activeBooks.length;
    document.getElementById('totalPagesReadCount').innerText = totalPagesRead;
    document.getElementById('finishedBooksCount').innerText = finishedBooks.length;

    const activeGrid = document.getElementById('activeBooksList');
    if (activeBooks.length === 0) {
        activeGrid.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: span 3; padding: 30px;">Şu an okuduğun aktif kitap bulunmuyor. Yeni kitap ekleyerek okuma serüvenine başla! 📖</p>`;
    } else {
        let html = '';
        activeBooks.forEach(b => {
            const pct = Math.min(100, Math.round((b.currentPage / b.totalPages) * 100));
            html += `
                <div class="book-card">
                    <div class="book-card-header">
                        <div>
                            <div class="book-info-title">${b.title}</div>
                            <div class="book-info-author"><i class="fa-solid fa-pen-nib"></i> ${b.author}</div>
                        </div>
                        <button class="topic-delete-btn" onclick="deleteReadingBook('${b.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="book-progress-box">
                        <div class="progress-info">
                            <span>Okunan: ${b.currentPage} / ${b.totalPages} sayfa</span>
                            <span>%${pct}</span>
                        </div>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${pct}%;"></div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="openLogReadingPageModal('${b.id}', '${b.title.replace(/'/g, "\\'")}')">
                            <i class="fa-solid fa-bookmark"></i> Sayfa Ekle
                        </button>
                        <button class="btn btn-gold btn-sm" onclick="markBookAsFinished('${b.id}')" title="Kitabı Bitirdim Olarak İşaretle">
                            <i class="fa-solid fa-check"></i> Bitirdim
                        </button>
                    </div>
                </div>
            `;
        });
        activeGrid.innerHTML = html;
    }

    const finishedGrid = document.getElementById('finishedBooksList');
    if (finishedBooks.length === 0) {
        finishedGrid.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">Henüz tamamlanan kitap yok.</p>`;
    } else {
        let html = '';
        finishedBooks.forEach(b => {
            html += `
                <div class="finished-book-item">
                    <div>
                        <strong>${b.title}</strong>
                        <div style="font-size: 0.78rem; color: var(--text-secondary);">${b.author} (${b.totalPages} sayfa)</div>
                    </div>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
            `;
        });
        finishedGrid.innerHTML = html;
    }
}

function openAddReadingBookModal() {
    document.getElementById('readBookTitle').value = '';
    document.getElementById('readBookAuthor').value = '';
    document.getElementById('readBookTotalPages').value = '';
    openModal('addReadingBookModal');
}

function saveReadingBook() {
    const title = document.getElementById('readBookTitle').value.trim();
    const author = document.getElementById('readBookAuthor').value.trim();
    const totalPages = parseInt(document.getElementById('readBookTotalPages').value);

    if (!title || isNaN(totalPages) || totalPages <= 0) {
        alert("Lütfen kitap adı ve geçerli sayfa sayısı gir sevgilim.");
        return;
    }

    appState.readingBooks.push({
        id: 'book_' + Date.now(),
        title: title,
        author: author || 'Bilinmiyor',
        totalPages: totalPages,
        currentPage: 0,
        isFinished: false,
        history: []
    });

    saveStateToLocalStorage();
    closeModal('addReadingBookModal');
    renderActiveTab();
}

function openLogReadingPageModal(bookId, bookTitle) {
    document.getElementById('logReadingBookId').value = bookId;
    document.getElementById('logReadingBookTitle').innerText = bookTitle;
    document.getElementById('pagesReadTodayInput').value = '';
    openModal('logReadingPageModal');
}

function savePagesRead() {
    const bookId = document.getElementById('logReadingBookId').value;
    const pages = parseInt(document.getElementById('pagesReadTodayInput').value);

    if (isNaN(pages) || pages <= 0) {
        alert("Lütfen geçerli bir sayfa sayısı gir sevgilim.");
        return;
    }

    const book = appState.readingBooks.find(b => b.id === bookId);
    if (book) {
        book.currentPage = Math.min(book.totalPages, (book.currentPage || 0) + pages);
        if (!book.history) book.history = [];
        book.history.push({ date: new Date().toISOString().split('T')[0], pages: pages });
        if (book.currentPage >= book.totalPages) book.isFinished = true;
        
        saveStateToLocalStorage();
        closeModal('logReadingPageModal');
        renderActiveTab();
        updateDailyGoalWidget();
        checkAndUnlockBadges();
    }
}

function markBookAsFinished(bookId) {
    const book = appState.readingBooks.find(b => b.id === bookId);
    if (book) {
        book.currentPage = book.totalPages;
        book.isFinished = true;
        saveStateToLocalStorage();
        renderActiveTab();
        triggerConfettiCelebration(book.title);
        checkAndUnlockBadges();
    }
}

function deleteReadingBook(bookId) {
    if (confirm("Bu kitabı silmek istediğine emin misin?")) {
        appState.readingBooks = appState.readingBooks.filter(b => b.id !== bookId);
        saveStateToLocalStorage();
        renderActiveTab();
    }
}

// ==========================================================================
// ONLINE COURSE TRACKER TAB LOGIC
// ==========================================================================
function renderOnlineCoursesTab() {
    const courses = appState.onlineCourses || [];
    const activeCourses = courses.filter(c => !c.isCompleted);
    const completedCourses = courses.filter(c => c.isCompleted);

    let totalMins = 0;
    courses.forEach(c => totalMins += (c.watchedTimeMinutes || 0));

    document.getElementById('activeCoursesCount').innerText = activeCourses.length;
    document.getElementById('totalWatchTime').innerText = `${totalMins} dk`;
    document.getElementById('earnedCertificatesCount').innerText = completedCourses.length;

    const activeGrid = document.getElementById('activeCoursesList');
    if (activeCourses.length === 0) {
        activeGrid.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: span 3; padding: 30px;">Şu an devam eden online kurs bulunmuyor. Yeni bir kurs ekleyerek gelişimini sürdür! 🎓</p>`;
    } else {
        let html = '';
        activeCourses.forEach(c => {
            const pct = Math.min(100, Math.round((c.watchedLessons / c.totalLessons) * 100));
            html += `
                <div class="course-card">
                    <div class="course-card-header">
                        <div>
                            <div class="book-info-title">${c.title}</div>
                            <div class="book-info-author"><i class="fa-solid fa-laptop"></i> ${c.platform}</div>
                        </div>
                        <button class="topic-delete-btn" onclick="deleteOnlineCourse('${c.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="book-progress-box">
                        <div class="progress-info">
                            <span>Tamamlanan Ders: ${c.watchedLessons} / ${c.totalLessons}</span>
                            <span>%${pct}</span>
                        </div>
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${pct}%;"></div>
                        </div>
                        <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 6px;">
                            İzlenen Süre: <strong>${c.watchedTimeMinutes} dk</strong> / ${c.totalTimeMinutes} dk
                        </div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="openLogCourseProgressModal('${c.id}', '${c.title.replace(/'/g, "\\'")}')">
                            <i class="fa-solid fa-play"></i> İlerleme Gir
                        </button>
                        <button class="btn btn-gold btn-sm" onclick="completeCourseAndEarnCertificate('${c.id}')" title="Sertifika Al!">
                            <i class="fa-solid fa-award"></i> Sertifika Al!
                        </button>
                    </div>
                </div>
            `;
        });
        activeGrid.innerHTML = html;
    }

    const certGrid = document.getElementById('certificatesList');
    if (completedCourses.length === 0) {
        certGrid.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">Henüz sertifika kazanılmadı.</p>`;
    } else {
        let html = '';
        completedCourses.forEach(c => {
            html += `
                <div class="certificate-mini-card">
                    <div class="cert-icon-badge"><i class="fa-solid fa-certificate"></i></div>
                    <div>
                        <strong style="color: white; font-size: 0.95rem;">${c.title}</strong>
                        <div style="font-size: 0.78rem; color: var(--accent-gold); margin-top: 2px;">${c.platform} Sertifikası</div>
                    </div>
                </div>
            `;
        });
        certGrid.innerHTML = html;
    }
}

function openAddCourseModal() {
    document.getElementById('courseNameInput').value = '';
    document.getElementById('coursePlatformInput').value = '';
    document.getElementById('courseTotalLessonsInput').value = '';
    document.getElementById('courseTotalTimeInput').value = '';
    openModal('addCourseModal');
}

function saveOnlineCourse() {
    const title = document.getElementById('courseNameInput').value.trim();
    const platform = document.getElementById('coursePlatformInput').value.trim();
    const totalLessons = parseInt(document.getElementById('courseTotalLessonsInput').value);
    const totalTime = parseInt(document.getElementById('courseTotalTimeInput').value) || 0;

    if (!title || isNaN(totalLessons) || totalLessons <= 0) {
        alert("Lütfen kurs adı ve toplam ders sayısını gir sevgilim.");
        return;
    }

    appState.onlineCourses.push({
        id: 'course_' + Date.now(),
        title: title,
        platform: platform || 'Online Eğitim',
        totalLessons: totalLessons,
        totalTimeMinutes: totalTime,
        watchedLessons: 0,
        watchedTimeMinutes: 0,
        isCompleted: false,
        certificateEarned: false
    });

    saveStateToLocalStorage();
    closeModal('addCourseModal');
    renderActiveTab();
}

function openLogCourseProgressModal(courseId, courseTitle) {
    document.getElementById('logCourseId').value = courseId;
    document.getElementById('logCourseTitle').innerText = courseTitle;
    document.getElementById('lessonsWatchedInput').value = '1';
    document.getElementById('timeWatchedInput').value = '';
    openModal('logCourseProgressModal');
}

function saveCourseProgress() {
    const courseId = document.getElementById('logCourseId').value;
    const lessons = parseInt(document.getElementById('lessonsWatchedInput').value) || 0;
    const mins = parseInt(document.getElementById('timeWatchedInput').value) || 0;

    const course = appState.onlineCourses.find(c => c.id === courseId);
    if (course) {
        course.watchedLessons = Math.min(course.totalLessons, course.watchedLessons + lessons);
        course.watchedTimeMinutes += mins;

        if (course.watchedLessons >= course.totalLessons) {
            completeCourseAndEarnCertificate(courseId);
        } else {
            saveStateToLocalStorage();
            closeModal('logCourseProgressModal');
            renderActiveTab();
        }
    }
}

function completeCourseAndEarnCertificate(courseId) {
    const course = appState.onlineCourses.find(c => c.id === courseId);
    if (course) {
        course.watchedLessons = course.totalLessons;
        course.isCompleted = true;
        course.certificateEarned = true;
        saveStateToLocalStorage();
        renderActiveTab();
        closeModal('logCourseProgressModal');

        document.getElementById('certCourseName').innerText = course.title;
        openModal('certificateModal');
        triggerConfettiCelebration(course.title);
        checkAndUnlockBadges();
    }
}

function deleteOnlineCourse(courseId) {
    if (confirm("Bu kursu silmek istediğine emin misin sevgilim?")) {
        appState.onlineCourses = appState.onlineCourses.filter(c => c.id !== courseId);
        saveStateToLocalStorage();
        renderActiveTab();
    }
}

// ==========================================================================
// CONFETTI CELEBRATION ENGINE
// ==========================================================================
function triggerConfettiCelebration(title) {
    if (typeof confetti === 'function') {
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff477e', '#ffffff'] });
        fire(0.2, { spread: 60, colors: ['#f59e0b', '#705ecf'] });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#ff477e', '#f59e0b', '#705ecf'] });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

// ==========================================================================
// DAILY ROTATING LOVE ENGINE
// ==========================================================================
function renderDailyLoveNote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    
    const index = (dayOfYear + (appState.loveNoteIndex || 0)) % LOVE_MESSAGES.length;
    document.getElementById('dailyLoveNoteText').innerText = LOVE_MESSAGES[index];
}

function nextLoveNote() {
    appState.loveNoteIndex = (appState.loveNoteIndex || 0) + 1;
    saveStateToLocalStorage();
    renderDailyLoveNote();
}

// ==========================================================================
// MODAL CONTROLLERS & FORM SAVERS
// ==========================================================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function openAddTopicModal(examKey) {
    document.getElementById('topicExamKey').value = examKey;
    document.getElementById('topicCategoryInput').value = '';
    document.getElementById('topicNameInput').value = '';
    openModal('addTopicModal');
}

function saveNewTopic() {
    const examKey = document.getElementById('topicExamKey').value;
    const category = document.getElementById('topicCategoryInput').value.trim() || 'Genel Konular';
    const name = document.getElementById('topicNameInput').value.trim();

    if (!name) {
        alert("Lütfen bir konu adı gir sevgilim.");
        return;
    }

    if (!appState.examTopics[examKey]) appState.examTopics[examKey] = [];
    appState.examTopics[examKey].push({
        id: 'topic_' + examKey + '_' + Date.now(),
        category: category,
        name: name,
        completed: false
    });

    saveStateToLocalStorage();
    closeModal('addTopicModal');
    renderActiveTab();
}

function openAddTestBookModal(examKey) {
    document.getElementById('bookExamKey').value = examKey;
    document.getElementById('testBookNameInput').value = '';
    document.getElementById('testBookSubjectInput').value = '';
    openModal('addTestBookModal');
}

function saveNewTestBook() {
    const examKey = document.getElementById('bookExamKey').value;
    const name = document.getElementById('testBookNameInput').value.trim();
    const subject = document.getElementById('testBookSubjectInput').value.trim();

    if (!name) {
        alert("Lütfen kitap adını gir sevgilim.");
        return;
    }

    if (!appState.testBooks[examKey]) appState.testBooks[examKey] = [];
    appState.testBooks[examKey].push({
        id: 'book_' + Date.now(),
        name: name,
        subject: subject || 'Genel',
        history: []
    });

    saveStateToLocalStorage();
    closeModal('addTestBookModal');
    renderActiveTab();
}

function openLogQuestionModal(examKey, bookId, bookName) {
    document.getElementById('logExamKey').value = examKey;
    document.getElementById('logBookId').value = bookId;
    document.getElementById('logBookTitleName').innerText = bookName;
    document.getElementById('solvedCountInput').value = '';
    document.getElementById('solvedDateInput').value = new Date().toISOString().split('T')[0];
    openModal('logQuestionModal');
}

function saveQuestionLog() {
    const examKey = document.getElementById('logExamKey').value;
    const bookId = document.getElementById('logBookId').value;
    const count = parseInt(document.getElementById('solvedCountInput').value);
    const date = document.getElementById('solvedDateInput').value;

    if (isNaN(count) || count <= 0) {
        alert("Lütfen geçerli bir soru sayısı gir sevgilim.");
        return;
    }

    const book = appState.testBooks[examKey].find(b => b.id === bookId);
    if (book) {
        if (!book.history) book.history = [];
        book.history.push({ date: date, count: count });
        saveStateToLocalStorage();
        closeModal('logQuestionModal');
        renderActiveTab();
        updateDailyGoalWidget();
        checkAndUnlockBadges();
    }
}

function openLogDenemeModal(examKey) {
    document.getElementById('denemeExamKey').value = examKey;
    document.getElementById('denemeNameInput').value = '';
    document.getElementById('denemeCorrectInput').value = '0';
    document.getElementById('denemeWrongInput').value = '0';
    document.getElementById('denemeEmptyInput').value = '0';
    document.getElementById('denemeDateInput').value = new Date().toISOString().split('T')[0];
    openModal('logDenemeModal');
}

function saveDenemeResult() {
    const examKey = document.getElementById('denemeExamKey').value;
    const name = document.getElementById('denemeNameInput').value.trim() || 'Genel Deneme';
    const correct = parseInt(document.getElementById('denemeCorrectInput').value) || 0;
    const wrong = parseInt(document.getElementById('denemeWrongInput').value) || 0;
    const empty = parseInt(document.getElementById('denemeEmptyInput').value) || 0;
    const date = document.getElementById('denemeDateInput').value;

    const net = Math.max(0, parseFloat((correct - (wrong / 4)).toFixed(2)));
    let score = (net * 0.8 + 40).toFixed(2);
    if (examKey === 'yds') score = (correct * 1.25).toFixed(2);

    const estimatedRank = calculateEstimatedRank(examKey, net, score);

    if (!appState.denemeResults[examKey]) appState.denemeResults[examKey] = [];
    appState.denemeResults[examKey].push({
        id: 'deneme_' + Date.now(),
        name: name,
        correct: correct,
        wrong: wrong,
        empty: empty,
        net: net,
        score: score,
        estimatedRank: estimatedRank,
        date: date
    });

    saveStateToLocalStorage();
    closeModal('logDenemeModal');
    renderActiveTab();
}
