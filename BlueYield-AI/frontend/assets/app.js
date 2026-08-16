// ============================================================
// BLUEYIELD AI
// Complete Frontend JavaScript
// Multilingual + API + Navigation
// ============================================================

"use strict";

// ============================================================
// CONFIG
// ============================================================

const API_BASE =
  window.BLUEYIELD_API ||
  "http://127.0.0.1:8000";


// ============================================================
// LANGUAGES
// ============================================================

const LANGUAGES = {
  en: "EN English",
  ta: "தமிழ் Tamil",
  hi: "हिन्दी Hindi",
  te: "తెలుగు Telugu",
  kn: "ಕನ್ನಡ Kannada",
  ml: "മലയാളം Malayalam"
};


// ============================================================
// CURRENT LANGUAGE
// ============================================================

let currentLanguage =
  localStorage.getItem("blueyield-language") || "en";

let lastResult = null;


// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {

  // ==========================================================
  // ENGLISH
  // ==========================================================

  en: {

    dashboard: "Dashboard",
    analyze: "Analyze Site",
    recommendation: "Recommendation",
    risk: "Risk & Yield",
    economics: "Economic Potential",
    map: "Location Intelligence",

    decision: "Decision intelligence for marine agriculture",

    marineLayer: "MARINE AGRICULTURE / DECISION LAYER",

    dashboardTitle: "BlueYield AI",

    aiPowered: "AI-POWERED DECISION INTELLIGENCE",

    heroTitle1: "From complex marine data",
    heroTitle2: "to simple local decisions.",

    heroDesc:
      "What to farm. Where to farm. What risk to expect. What yield and return may be possible.",

    analyzeLocation: "Analyze a location →",

    climate: "Climate",
    salinity: "Salinity",
    gis: "GIS",
    yield: "Yield",

    locationsAnalyzed: "Locations analyzed",
    activitiesSupported: "Activities supported",
    avgSuitability: "Avg. suitability",
    decisionTime: "Decision time",

    thisMonth: "+18% this month",
    seaweedShellfish: "Seaweed · Shellfish +",
    demoSites: "Demo sites",
    inputDecision: "Input → decision",

    howItWorks: "HOW IT WORKS",
    dataDecision: "Data → Decision",

    data: "Data",
    oceanWeatherGIS: "Ocean · Weather · GIS",

    process: "Process",
    cleanSpatialTemporal: "Clean · spatial · temporal",

    aiMl: "AI / ML",
    suitabilitySpecies: "Suitability · species",

    decisionWord: "Decision",
    bestOptionEvidence: "Best option + evidence",

    personalize: "Personalize",
    localLanguage: "Local language",

    experience: "Experience",
    mapDashboard: "Map + dashboard",

    decisionSnapshot: "DECISION SNAPSHOT",
    whatWantToKnow: "What do you want to know?",

    what: "WHAT?",
    bestActivity: "Best activity",

    where: "WHERE?",
    suitableZone: "Suitable zone",

    whatRisk: "WHAT RISK?",
    environmentalRisk: "Environmental risk",

    whatReturn: "WHAT RETURN?",
    economicPotential: "Economic potential",

    siteAnalysis: "01 / SITE ANALYSIS",
    analyzeCoastal: "Analyze a coastal location",
    enterConditions: "Enter available environmental conditions.",

    environmentalConditions: "Environmental conditions",

    temperature: "Temperature (°C)",
    salinityInput: "Salinity (PSU)",
    depth: "Depth (m)",
    ph: "pH",
    oxygen: "Dissolved oxygen (mg/L)",
    location: "Location",

    runAnalysis: "Run BlueYield analysis →",

    prototypeNote:
      "Prototype data/model only. Validate with real marine datasets before field use.",

    inputPreview: "INPUT PREVIEW",
    site: "Site",
    completeness: "Completeness",
    readyAnalysis: "Ready for analysis",

    recommendationSmall: "02 / RECOMMENDATION",
    personalizedDecision: "Personalized farming decision",
    activitySpeciesEvidence:
      "Activity + species + evidence in one view.",

    topRecommendation: "TOP RECOMMENDATION",
    modelConfidence: "Model confidence",
    decisionUpper: "DECISION",

    proceed:
      "Proceed to feasibility study",

    whyThis: "WHY THIS?",
    environmentalFit: "Environmental fit",

    alternative: "ALTERNATIVE",
    alternativeNote:
      "Consider based on market and infrastructure.",

    action: "ACTION",
    nextSteps: "Next steps",

    step1: "Validate seasonal conditions",
    step2: "Check permits and zone rules",
    step3: "Run a pilot",
    step4: "Confirm market buyer",

    riskSmall: "03 / RISK & YIELD",
    riskTitle: "What risk? What yield?",
    riskDesc:
      "Operational indicators from the site analysis.",

    environmentalRiskSmall: "ENVIRONMENTAL RISK",

    runAnalysisUpdate:
      "Run an analysis to update the assessment.",

    estimatedYield: "ESTIMATED YIELD",
    tonnes: "tonnes / hectare / cycle",
    prototypeEstimate: "Prototype estimate",

    temperatureShort: "Temperature",
    salinityShort: "Salinity",
    oxygenShort: "Oxygen",
    depthShort: "Depth",

    econSmall: "04 / ECONOMIC POTENTIAL",
    econTitle: "Turn production into opportunity",
    econDesc:
      "Transparent demo estimate, not a financial guarantee.",

    annual: "DEMO ANNUAL OPPORTUNITY",
    grossRevenue: "Gross revenue / hectare / year",

    production: "Production",
    marketValue: "Market value",
    operationalFit: "Operational fit",

    yieldCard: "YIELD",
    perHectare: "per hectare / cycle",

    indicativePrice: "INDICATIVE PRICE",
    editable:
      "Editable demo assumption",

    potential: "POTENTIAL",
    promising: "Promising",

    validateMarket:
      "Validate local market and cost data.",

    mapSmall: "05 / LOCATION INTELLIGENCE",
    mapTitle: "Explore suitable zones",
    mapDesc: "GIS-style prototype view.",

    selectedZone: "SELECTED ZONE",
    bestActivityMap: "Best activity",
    low: "Low",

    mapNote:
      "Production version can connect GeoPandas, PostGIS, satellite layers and coastal GIS datasets here.",

    footer:
      "BlueYield AI · Marine agriculture decision intelligence · Prototype",

    seaweed: "Seaweed",
    seaweedFarming: "Seaweed farming",
    shellfish: "Shellfish",

    analysisSuccess:
      "Analysis completed successfully.",

    apiError:
      "The API request failed or the result could not be displayed."
  },


  // ==========================================================
  // TAMIL
  // ==========================================================

  ta: {

    dashboard: "முகப்பு",
    analyze: "தளத்தை பகுப்பாய்வு செய்",
    recommendation: "பரிந்துரை",
    risk: "அபாயம் & விளைச்சல்",
    economics: "பொருளாதார வாய்ப்பு",
    map: "இட நுண்ணறிவு",

    decision:
      "கடல் விவசாயத்திற்கான முடிவு நுண்ணறிவு",

    marineLayer:
      "கடல் விவசாயம் / முடிவு அடுக்கு",

    dashboardTitle: "BlueYield AI",

    aiPowered:
      "AI மூலம் இயக்கப்படும் முடிவு நுண்ணறிவு",

    heroTitle1:
      "சிக்கலான கடல் தரவிலிருந்து",

    heroTitle2:
      "எளிய உள்ளூர் முடிவுகளுக்கு.",

    heroDesc:
      "எதை பயிரிடுவது. எங்கு பயிரிடுவது. என்ன அபாயத்தை எதிர்பார்ப்பது. என்ன விளைச்சல் மற்றும் வருமானம் கிடைக்கலாம்.",

    analyzeLocation:
      "ஒரு இடத்தை பகுப்பாய்வு செய் →",

    climate: "காலநிலை",
    salinity: "உப்புத்தன்மை",
    gis: "GIS",
    yield: "விளைச்சல்",

    locationsAnalyzed:
      "பகுப்பாய்வு செய்யப்பட்ட இடங்கள்",

    activitiesSupported:
      "ஆதரிக்கப்படும் செயல்பாடுகள்",

    avgSuitability:
      "சராசரி பொருத்தம்",

    decisionTime:
      "முடிவு நேரம்",

    thisMonth:
      "இந்த மாதம் +18%",

    seaweedShellfish:
      "கடற்பாசி · சிப்பி +",

    demoSites:
      "டெமோ தளங்கள்",

    inputDecision:
      "உள்ளீடு → முடிவு",

    howItWorks:
      "இது எப்படி செயல்படுகிறது",

    dataDecision:
      "தரவு → முடிவு",

    data: "தரவு",
    oceanWeatherGIS:
      "கடல் · வானிலை · GIS",

    process: "செயலாக்கம்",
    cleanSpatialTemporal:
      "சுத்தம் · இடவியல் · காலவரிசை",

    aiMl:
      "AI / ML",

    suitabilitySpecies:
      "பொருத்தம் · இனம்",

    decisionWord:
      "முடிவு",

    bestOptionEvidence:
      "சிறந்த விருப்பம் + ஆதாரம்",

    personalize:
      "தனிப்பயனாக்கம்",

    localLanguage:
      "உள்ளூர் மொழி",

    experience:
      "அனுபவம்",

    mapDashboard:
      "வரைபடம் + டாஷ்போர்டு",

    decisionSnapshot:
      "முடிவு சுருக்கம்",

    whatWantToKnow:
      "நீங்கள் என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்?",

    what: "என்ன?",
    bestActivity:
      "சிறந்த செயல்பாடு",

    where: "எங்கே?",
    suitableZone:
      "பொருத்தமான பகுதி",

    whatRisk:
      "என்ன அபாயம்?",

    environmentalRisk:
      "சுற்றுச்சூழல் அபாயம்",

    whatReturn:
      "என்ன வருமானம்?",

    economicPotential:
      "பொருளாதார வாய்ப்பு",

    siteAnalysis:
      "01 / தள பகுப்பாய்வு",

    analyzeCoastal:
      "கடலோர இடத்தை பகுப்பாய்வு செய்",

    enterConditions:
      "கிடைக்கக்கூடிய சுற்றுச்சூழல் நிலைகளை உள்ளிடவும்.",

    environmentalConditions:
      "சுற்றுச்சூழல் நிலைகள்",

    temperature:
      "வெப்பநிலை (°C)",

    salinityInput:
      "உப்புத்தன்மை (PSU)",

    depth:
      "ஆழம் (மீ)",

    ph:
      "pH",

    oxygen:
      "கரைந்த ஆக்சிஜன் (mg/L)",

    location:
      "இடம்",

    runAnalysis:
      "BlueYield பகுப்பாய்வை இயக்கவும் →",

    prototypeNote:
      "இது முன்மாதிரி தரவு/மாதிரி மட்டுமே. உண்மையான கடல் தரவுகளுடன் சரிபார்க்கவும்.",

    inputPreview:
      "உள்ளீட்டு முன்னோட்டம்",

    site:
      "தளம்",

    completeness:
      "முழுமை",

    readyAnalysis:
      "பகுப்பாய்விற்கு தயார்",

    recommendationSmall:
      "02 / பரிந்துரை",

    personalizedDecision:
      "தனிப்பயனாக்கப்பட்ட விவசாய முடிவு",

    activitySpeciesEvidence:
      "செயல்பாடு + இனம் + ஆதாரம் ஒரே பார்வையில்.",

    topRecommendation:
      "முக்கிய பரிந்துரை",

    modelConfidence:
      "மாதிரி நம்பிக்கை",

    decisionUpper:
      "முடிவு",

    proceed:
      "சாத்தியக்கூறு ஆய்வுக்கு தொடரவும்",

    whyThis:
      "இது ஏன்?",

    environmentalFit:
      "சுற்றுச்சூழல் பொருத்தம்",

    alternative:
      "மாற்று",

    alternativeNote:
      "சந்தை மற்றும் உள்கட்டமைப்பின் அடிப்படையில் பரிசீலிக்கவும்.",

    action:
      "செயல்",

    nextSteps:
      "அடுத்த படிகள்",

    step1:
      "பருவகால நிலைகளை சரிபார்க்கவும்",

    step2:
      "அனுமதிகள் மற்றும் மண்டல விதிகளை சரிபார்க்கவும்",

    step3:
      "முன்மாதிரி திட்டத்தை நடத்தவும்",

    step4:
      "சந்தை வாங்குபவரை உறுதி செய்யவும்",

    riskSmall:
      "03 / அபாயம் & விளைச்சல்",

    riskTitle:
      "என்ன அபாயம்? என்ன விளைச்சல்?",

    riskDesc:
      "தள பகுப்பாய்விலிருந்து செயல்பாட்டு குறியீடுகள்.",

    environmentalRiskSmall:
      "சுற்றுச்சூழல் அபாயம்",

    runAnalysisUpdate:
      "மதிப்பீட்டை புதுப்பிக்க பகுப்பாய்வை இயக்கவும்.",

    estimatedYield:
      "மதிப்பிடப்பட்ட விளைச்சல்",

    tonnes:
      "டன் / ஹெக்டேர் / சுழற்சி",

    prototypeEstimate:
      "முன்மாதிரி மதிப்பீடு",

    temperatureShort:
      "வெப்பநிலை",

    salinityShort:
      "உப்புத்தன்மை",

    oxygenShort:
      "ஆக்சிஜன்",

    depthShort:
      "ஆழம்",

    econSmall:
      "04 / பொருளாதார வாய்ப்பு",

    econTitle:
      "உற்பத்தியை வாய்ப்பாக மாற்றுங்கள்",

    econDesc:
      "வெளிப்படையான டெமோ மதிப்பீடு; நிதி உத்தரவாதம் அல்ல.",

    annual:
      "டெமோ ஆண்டு வாய்ப்பு",

    grossRevenue:
      "மொத்த வருமானம் / ஹெக்டேர் / ஆண்டு",

    production:
      "உற்பத்தி",

    marketValue:
      "சந்தை மதிப்பு",

    operationalFit:
      "செயல்பாட்டு பொருத்தம்",

    yieldCard:
      "விளைச்சல்",

    perHectare:
      "ஒரு ஹெக்டேருக்கு / சுழற்சி",

    indicativePrice:
      "குறிப்புக்கான விலை",

    editable:
      "மாற்றக்கூடிய டெமோ மதிப்பீடு",

    potential:
      "வாய்ப்பு",

    promising:
      "நம்பிக்கைக்குரியது",

    validateMarket:
      "உள்ளூர் சந்தை மற்றும் செலவு தரவை சரிபார்க்கவும்.",

    mapSmall:
      "05 / இட நுண்ணறிவு",

    mapTitle:
      "பொருத்தமான பகுதிகளை ஆராயுங்கள்",

    mapDesc:
      "GIS பாணி முன்மாதிரி காட்சி.",

    selectedZone:
      "தேர்ந்தெடுக்கப்பட்ட பகுதி",

    bestActivityMap:
      "சிறந்த செயல்பாடு",

    low:
      "குறைவு",

    mapNote:
      "உற்பத்தி பதிப்பில் GeoPandas, PostGIS, செயற்கைக்கோள் அடுக்குகள் மற்றும் கடலோர GIS தரவுத்தொகுப்புகளை இணைக்கலாம்.",

    footer:
      "BlueYield AI · கடல் விவசாய முடிவு நுண்ணறிவு · முன்மாதிரி",

    seaweed:
      "கடற்பாசி",

    seaweedFarming:
      "கடற்பாசி விவசாயம்",

    shellfish:
      "சிப்பி",

    analysisSuccess:
      "பகுப்பாய்வு வெற்றிகரமாக முடிந்தது.",

    apiError:
      "API கோரிக்கை தோல்வியடைந்தது அல்லது முடிவைக் காட்ட முடியவில்லை."
  },


  // ==========================================================
  // HINDI
  // ==========================================================

  hi: {

    dashboard: "डैशबोर्ड",
    analyze: "साइट विश्लेषण",
    recommendation: "सिफारिश",
    risk: "जोखिम और उपज",
    economics: "आर्थिक क्षमता",
    map: "स्थान जानकारी",

    decision:
      "समुद्री कृषि के लिए निर्णय बुद्धिमत्ता",

    marineLayer:
      "समुद्री कृषि / निर्णय परत",

    dashboardTitle:
      "BlueYield AI",

    aiPowered:
      "AI-संचालित निर्णय बुद्धिमत्ता",

    heroTitle1:
      "जटिल समुद्री डेटा से",

    heroTitle2:
      "सरल स्थानीय निर्णयों तक।",

    heroDesc:
      "क्या उगाना है। कहाँ उगाना है। कौन सा जोखिम अपेक्षित है। कितनी उपज और आय संभव है।",

    analyzeLocation:
      "स्थान का विश्लेषण करें →",

    climate: "जलवायु",
    salinity: "लवणता",
    gis: "GIS",
    yield: "उपज",

    locationsAnalyzed:
      "विश्लेषित स्थान",

    activitiesSupported:
      "समर्थित गतिविधियाँ",

    avgSuitability:
      "औसत उपयुक्तता",

    decisionTime:
      "निर्णय समय",

    thisMonth:
      "इस महीने +18%",

    seaweedShellfish:
      "समुद्री शैवाल · शेलफिश +",

    demoSites:
      "डेमो साइट",

    inputDecision:
      "इनपुट → निर्णय",

    howItWorks:
      "यह कैसे काम करता है",

    dataDecision:
      "डेटा → निर्णय",

    data:
      "डेटा",

    oceanWeatherGIS:
      "समुद्र · मौसम · GIS",

    process:
      "प्रसंस्करण",

    cleanSpatialTemporal:
      "साफ · स्थानिक · समय आधारित",

    aiMl:
      "AI / ML",

    suitabilitySpecies:
      "उपयुक्तता · प्रजाति",

    decisionWord:
      "निर्णय",

    bestOptionEvidence:
      "सर्वश्रेष्ठ विकल्प + प्रमाण",

    personalize:
      "व्यक्तिगतकरण",

    localLanguage:
      "स्थानीय भाषा",

    experience:
      "अनुभव",

    mapDashboard:
      "मानचित्र + डैशबोर्ड",

    decisionSnapshot:
      "निर्णय सारांश",

    whatWantToKnow:
      "आप क्या जानना चाहते हैं?",

    what:
      "क्या?",

    bestActivity:
      "सर्वश्रेष्ठ गतिविधि",

    where:
      "कहाँ?",

    suitableZone:
      "उपयुक्त क्षेत्र",

    whatRisk:
      "क्या जोखिम?",

    environmentalRisk:
      "पर्यावरणीय जोखिम",

    whatReturn:
      "क्या लाभ?",

    economicPotential:
      "आर्थिक क्षमता",

    siteAnalysis:
      "01 / साइट विश्लेषण",

    analyzeCoastal:
      "तटीय स्थान का विश्लेषण करें",

    enterConditions:
      "उपलब्ध पर्यावरणीय स्थितियाँ दर्ज करें।",

    environmentalConditions:
      "पर्यावरणीय स्थितियाँ",

    temperature:
      "तापमान (°C)",

    salinityInput:
      "लवणता (PSU)",

    depth:
      "गहराई (m)",

    ph:
      "pH",

    oxygen:
      "घुलित ऑक्सीजन (mg/L)",

    location:
      "स्थान",

    runAnalysis:
      "BlueYield विश्लेषण चलाएँ →",

    prototypeNote:
      "केवल प्रोटोटाइप डेटा/मॉडल। वास्तविक समुद्री डेटा से सत्यापित करें।",

    inputPreview:
      "इनपुट पूर्वावलोकन",

    site:
      "साइट",

    completeness:
      "पूर्णता",

    readyAnalysis:
      "विश्लेषण के लिए तैयार",

    recommendationSmall:
      "02 / सिफारिश",

    personalizedDecision:
      "व्यक्तिगत कृषि निर्णय",

    activitySpeciesEvidence:
      "गतिविधि + प्रजाति + प्रमाण एक ही दृश्य में।",

    topRecommendation:
      "शीर्ष सिफारिश",

    modelConfidence:
      "मॉडल विश्वास",

    decisionUpper:
      "निर्णय",

    proceed:
      "व्यवहार्यता अध्ययन के लिए आगे बढ़ें",

    whyThis:
      "यह क्यों?",

    environmentalFit:
      "पर्यावरणीय अनुकूलता",

    alternative:
      "विकल्प",

    alternativeNote:
      "बाजार और बुनियादी ढांचे के आधार पर विचार करें।",

    action:
      "कार्यवाही",

    nextSteps:
      "अगले कदम",

    step1:
      "मौसमी परिस्थितियों को सत्यापित करें",

    step2:
      "अनुमतियों और क्षेत्र नियमों की जाँच करें",

    step3:
      "पायलट चलाएँ",

    step4:
      "बाजार खरीदार की पुष्टि करें",

    riskSmall:
      "03 / जोखिम और उपज",

    riskTitle:
      "क्या जोखिम? क्या उपज?",

    riskDesc:
      "साइट विश्लेषण से परिचालन संकेतक।",

    environmentalRiskSmall:
      "पर्यावरणीय जोखिम",

    runAnalysisUpdate:
      "मूल्यांकन अपडेट करने के लिए विश्लेषण चलाएँ।",

    estimatedYield:
      "अनुमानित उपज",

    tonnes:
      "टन / हेक्टेयर / चक्र",

    prototypeEstimate:
      "प्रोटोटाइप अनुमान",

    temperatureShort:
      "तापमान",

    salinityShort:
      "लवणता",

    oxygenShort:
      "ऑक्सीजन",

    depthShort:
      "गहराई",

    econSmall:
      "04 / आर्थिक क्षमता",

    econTitle:
      "उत्पादन को अवसर में बदलें",

    econDesc:
      "पारदर्शी डेमो अनुमान, वित्तीय गारंटी नहीं।",

    annual:
      "डेमो वार्षिक अवसर",

    grossRevenue:
      "सकल आय / हेक्टेयर / वर्ष",

    production:
      "उत्पादन",

    marketValue:
      "बाजार मूल्य",

    operationalFit:
      "परिचालन अनुकूलता",

    yieldCard:
      "उपज",

    perHectare:
      "प्रति हेक्टेयर / चक्र",

    indicativePrice:
      "संकेतात्मक मूल्य",

    editable:
      "संपादन योग्य डेमो अनुमान",

    potential:
      "क्षमता",

    promising:
      "आशाजनक",

    validateMarket:
      "स्थानीय बाजार और लागत डेटा सत्यापित करें।",

    mapSmall:
      "05 / स्थान जानकारी",

    mapTitle:
      "उपयुक्त क्षेत्रों का अन्वेषण करें",

    mapDesc:
      "GIS शैली का प्रोटोटाइप दृश्य।",

    selectedZone:
      "चयनित क्षेत्र",

    bestActivityMap:
      "सर्वश्रेष्ठ गतिविधि",

    low:
      "कम",

    mapNote:
      "उत्पादन संस्करण GeoPandas, PostGIS, उपग्रह परतों और तटीय GIS डेटा से जुड़ सकता है।",

    footer:
      "BlueYield AI · समुद्री कृषि निर्णय बुद्धिमत्ता · प्रोटोटाइप",

    seaweed:
      "समुद्री शैवाल",

    seaweedFarming:
      "समुद्री शैवाल खेती",

    shellfish:
      "शेलफिश",

    analysisSuccess:
      "विश्लेषण सफलतापूर्वक पूरा हुआ।",

    apiError:
      "API अनुरोध विफल हुआ या परिणाम प्रदर्शित नहीं किया जा सका।"
  },


  // ==========================================================
  // TELUGU
  // ==========================================================

  te: {

    dashboard: "డాష్‌బోర్డ్",
    analyze: "సైట్ విశ్లేషణ",
    recommendation: "సిఫార్సు",
    risk: "ప్రమాదం & దిగుబడి",
    economics: "ఆర్థిక సామర్థ్యం",
    map: "స్థాన సమాచారం",

    decision:
      "సముద్ర వ్యవసాయం కోసం నిర్ణయ మేధస్సు",

    marineLayer:
      "సముద్ర వ్యవసాయం / నిర్ణయ పొర",

    dashboardTitle:
      "BlueYield AI",

    aiPowered:
      "AI ఆధారిత నిర్ణయ మేధస్సు",

    heroTitle1:
      "సంక్లిష్ట సముద్ర డేటా నుండి",

    heroTitle2:
      "సరళమైన స్థానిక నిర్ణయాల వరకు.",

    heroDesc:
      "ఏది పండించాలి. ఎక్కడ పండించాలి. ఏ ప్రమాదం ఉంటుంది. ఎంత దిగుబడి మరియు ఆదాయం సాధ్యమవుతుంది.",

    analyzeLocation:
      "స్థలాన్ని విశ్లేషించండి →",

    climate: "వాతావరణం",
    salinity: "లవణీయత",
    gis: "GIS",
    yield: "దిగుబడి",

    locationsAnalyzed: "విశ్లేషించిన ప్రదేశాలు",
    activitiesSupported: "మద్దతు ఉన్న కార్యకలాపాలు",
    avgSuitability: "సగటు అనుకూలత",
    decisionTime: "నిర్ణయ సమయం",

    thisMonth: "ఈ నెల +18%",
    seaweedShellfish: "సీవీడ్ · షెల్‌ఫిష్ +",
    demoSites: "డెమో సైట్లు",
    inputDecision: "ఇన్‌పుట్ → నిర్ణయం",

    howItWorks: "ఇది ఎలా పనిచేస్తుంది",
    dataDecision: "డేటా → నిర్ణయం",

    data: "డేటా",
    oceanWeatherGIS: "సముద్రం · వాతావరణం · GIS",

    process: "ప్రాసెస్",
    cleanSpatialTemporal: "శుభ్రపరచడం · స్థలిక · కాలిక",

    aiMl: "AI / ML",
    suitabilitySpecies: "అనుకూలత · జాతి",

    decisionWord: "నిర్ణయం",
    bestOptionEvidence: "ఉత్తమ ఎంపిక + ఆధారం",

    personalize: "వ్యక్తిగతీకరణ",
    localLanguage: "స్థానిక భాష",

    experience: "అనుభవం",
    mapDashboard: "మ్యాప్ + డాష్‌బోర్డ్",

    decisionSnapshot: "నిర్ణయ సారాంశం",
    whatWantToKnow: "మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",

    what: "ఏమిటి?",
    bestActivity: "ఉత్తమ కార్యకలాపం",

    where: "ఎక్కడ?",
    suitableZone: "అనుకూల ప్రాంతం",

    whatRisk: "ఏ ప్రమాదం?",
    environmentalRisk: "పర్యావరణ ప్రమాదం",

    whatReturn: "ఏ రాబడి?",
    economicPotential: "ఆర్థిక సామర్థ్యం",

    siteAnalysis: "01 / సైట్ విశ్లేషణ",
    analyzeCoastal: "తీర ప్రాంతాన్ని విశ్లేషించండి",
    enterConditions: "అందుబాటులో ఉన్న పర్యావరణ పరిస్థితులను నమోదు చేయండి.",

    environmentalConditions: "పర్యావరణ పరిస్థితులు",

    temperature: "ఉష్ణోగ్రత (°C)",
    salinityInput: "లవణీయత (PSU)",
    depth: "లోతు (m)",
    ph: "pH",
    oxygen: "కరిగిన ఆక్సిజన్ (mg/L)",
    location: "స్థానం",

    runAnalysis: "BlueYield విశ్లేషణను అమలు చేయండి →",

    prototypeNote:
      "ప్రోటోటైప్ డేటా/మోడల్ మాత్రమే. నిజమైన సముద్ర డేటాతో ధృవీకరించండి.",

    inputPreview: "ఇన్‌పుట్ ప్రివ్యూ",
    site: "సైట్",
    completeness: "పూర్తితనం",
    readyAnalysis: "విశ్లేషణకు సిద్ధంగా ఉంది",

    recommendationSmall: "02 / సిఫార్సు",
    personalizedDecision: "వ్యక్తిగత వ్యవసాయ నిర్ణయం",

    activitySpeciesEvidence:
      "కార్యకలాపం + జాతి + ఆధారం ఒకే దృశ్యంలో.",

    topRecommendation: "ప్రధాన సిఫార్సు",
    modelConfidence: "మోడల్ నమ్మకం",
    decisionUpper: "నిర్ణయం",

    proceed:
      "సాధ్యత అధ్యయనానికి కొనసాగండి",

    whyThis: "ఇది ఎందుకు?",
    environmentalFit: "పర్యావరణ అనుకూలత",

    alternative: "ప్రత్యామ్నాయం",
    alternativeNote:
      "మార్కెట్ మరియు మౌలిక సదుపాయాల ఆధారంగా పరిగణించండి.",

    action: "చర్య",
    nextSteps: "తదుపరి దశలు",

    step1: "కాలానుగుణ పరిస్థితులను ధృవీకరించండి",
    step2: "అనుమతులు మరియు జోన్ నియమాలను తనిఖీ చేయండి",
    step3: "పైలట్ నిర్వహించండి",
    step4: "మార్కెట్ కొనుగోలుదారుని నిర్ధారించండి",

    riskSmall: "03 / ప్రమాదం & దిగుబడి",
    riskTitle: "ఏ ప్రమాదం? ఏ దిగుబడి?",
    riskDesc: "సైట్ విశ్లేషణ నుండి కార్యాచరణ సూచికలు.",

    environmentalRiskSmall: "పర్యావరణ ప్రమాదం",

    runAnalysisUpdate:
      "అంచనాను నవీకరించడానికి విశ్లేషణను అమలు చేయండి.",

    estimatedYield: "అంచనా దిగుబడి",
    tonnes: "టన్నులు / హెక్టారు / చక్రం",
    prototypeEstimate: "ప్రోటోటైప్ అంచనా",

    temperatureShort: "ఉష్ణోగ్రత",
    salinityShort: "లవణీయత",
    oxygenShort: "ఆక్సిజన్",
    depthShort: "లోతు",

    econSmall: "04 / ఆర్థిక సామర్థ్యం",
    econTitle: "ఉత్పత్తిని అవకాశంగా మార్చండి",

    econDesc:
      "పారదర్శక డెమో అంచనా, ఆర్థిక హామీ కాదు.",

    annual: "డెమో వార్షిక అవకాశం",
    grossRevenue: "స్థూల ఆదాయం / హెక్టారు / సంవత్సరం",

    production: "ఉత్పత్తి",
    marketValue: "మార్కెట్ విలువ",
    operationalFit: "కార్యాచరణ అనుకూలత",

    yieldCard: "దిగుబడి",
    perHectare: "హెక్టారుకు / చక్రం",

    indicativePrice: "సూచిక ధర",
    editable: "ఎడిట్ చేయగల డెమో అంచనా",

    potential: "సామర్థ్యం",
    promising: "ఆశాజనకం",

    validateMarket:
      "స్థానిక మార్కెట్ మరియు ఖర్చు డేటాను ధృవీకరించండి.",

    mapSmall: "05 / స్థాన సమాచారం",
    mapTitle: "అనుకూల ప్రాంతాలను అన్వేషించండి",
    mapDesc: "GIS-శైలి ప్రోటోటైప్ వీక్షణ.",

    selectedZone: "ఎంచుకున్న ప్రాంతం",
    bestActivityMap: "ఉత్తమ కార్యకలాపం",
    low: "తక్కువ",

    mapNote:
      "ఉత్పత్తి వెర్షన్ GeoPandas, PostGIS, ఉపగ్రహ పొరలు మరియు తీర GIS డేటాసెట్‌లతో కనెక్ట్ చేయవచ్చు.",

    footer:
      "BlueYield AI · సముద్ర వ్యవసాయ నిర్ణయ మేధస్సు · ప్రోటోటైప్",

    seaweed: "సీవీడ్",
    seaweedFarming: "సీవీడ్ వ్యవసాయం",
    shellfish: "షెల్‌ఫిష్",

    analysisSuccess:
      "విశ్లేషణ విజయవంతంగా పూర్తయింది.",

    apiError:
      "API అభ్యర్థన విఫలమైంది లేదా ఫలితాన్ని చూపలేకపోయాము."
  },


  // ==========================================================
  // KANNADA
  // ==========================================================

  kn: {

    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    analyze: "ಸೈಟ್ ವಿಶ್ಲೇಷಣೆ",
    recommendation: "ಶಿಫಾರಸು",
    risk: "ಅಪಾಯ & ಇಳುವರಿ",
    economics: "ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯ",
    map: "ಸ್ಥಳ ಬುದ್ಧಿಮತ್ತೆ",

    decision:
      "ಸಮುದ್ರ ಕೃಷಿಗಾಗಿ ನಿರ್ಧಾರ ಬುದ್ಧಿಮತ್ತೆ",

    marineLayer:
      "ಸಮುದ್ರ ಕೃಷಿ / ನಿರ್ಧಾರ ಪದರ",

    dashboardTitle: "BlueYield AI",

    aiPowered:
      "AI ಆಧಾರಿತ ನಿರ್ಧಾರ ಬುದ್ಧಿಮತ್ತೆ",

    heroTitle1:
      "ಸಂಕೀರ್ಣ ಸಮುದ್ರ ಡೇಟಾದಿಂದ",

    heroTitle2:
      "ಸರಳ ಸ್ಥಳೀಯ ನಿರ್ಧಾರಗಳವರೆಗೆ.",

    heroDesc:
      "ಏನು ಬೆಳೆಸಬೇಕು. ಎಲ್ಲಿ ಬೆಳೆಸಬೇಕು. ಯಾವ ಅಪಾಯವನ್ನು ನಿರೀಕ್ಷಿಸಬೇಕು. ಎಷ್ಟು ಇಳುವರಿ ಮತ್ತು ಆದಾಯ ಸಾಧ್ಯ.",

    analyzeLocation:
      "ಸ್ಥಳವನ್ನು ವಿಶ್ಲೇಷಿಸಿ →",

    climate: "ಹವಾಮಾನ",
    salinity: "ಉಪ್ಪಿನಾಂಶ",
    gis: "GIS",
    yield: "ಇಳುವರಿ",

    locationsAnalyzed: "ವಿಶ್ಲೇಷಿಸಿದ ಸ್ಥಳಗಳು",
    activitiesSupported: "ಬೆಂಬಲಿತ ಚಟುವಟಿಕೆಗಳು",
    avgSuitability: "ಸರಾಸರಿ ಸೂಕ್ತತೆ",
    decisionTime: "ನಿರ್ಧಾರ ಸಮಯ",

    thisMonth: "ಈ ತಿಂಗಳು +18%",
    seaweedShellfish: "ಸಮುದ್ರ ಸಸ್ಯ · ಶೆಲ್‌ಫಿಶ್ +",
    demoSites: "ಡೆಮೋ ತಾಣಗಳು",
    inputDecision: "ಇನ್‌ಪುಟ್ → ನಿರ್ಧಾರ",

    howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    dataDecision: "ಡೇಟಾ → ನಿರ್ಧಾರ",

    data: "ಡೇಟಾ",
    oceanWeatherGIS: "ಸಮುದ್ರ · ಹವಾಮಾನ · GIS",

    process: "ಪ್ರಕ್ರಿಯೆ",
    cleanSpatialTemporal: "ಶುದ್ಧ · ಸ್ಥಳೀಯ · ಕಾಲಿಕ",

    aiMl: "AI / ML",
    suitabilitySpecies: "ಸೂಕ್ತತೆ · ಜಾತಿ",

    decisionWord: "ನಿರ್ಧಾರ",
    bestOptionEvidence: "ಉತ್ತಮ ಆಯ್ಕೆ + ಸಾಕ್ಷ್ಯ",

    personalize: "ವೈಯಕ್ತೀಕರಣ",
    localLanguage: "ಸ್ಥಳೀಯ ಭಾಷೆ",

    experience: "ಅನುಭವ",
    mapDashboard: "ನಕ್ಷೆ + ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

    decisionSnapshot: "ನಿರ್ಧಾರ ಸಾರಾಂಶ",
    whatWantToKnow: "ನೀವು ಏನು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುತ್ತೀರಿ?",

    what: "ಏನು?",
    bestActivity: "ಉತ್ತಮ ಚಟುವಟಿಕೆ",

    where: "ಎಲ್ಲಿ?",
    suitableZone: "ಸೂಕ್ತ ಪ್ರದೇಶ",

    whatRisk: "ಯಾವ ಅಪಾಯ?",
    environmentalRisk: "ಪರಿಸರ ಅಪಾಯ",

    whatReturn: "ಯಾವ ಆದಾಯ?",
    economicPotential: "ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯ",

    siteAnalysis: "01 / ಸೈಟ್ ವಿಶ್ಲೇಷಣೆ",
    analyzeCoastal: "ಕರಾವಳಿ ಸ್ಥಳವನ್ನು ವಿಶ್ಲೇಷಿಸಿ",

    enterConditions:
      "ಲಭ್ಯವಿರುವ ಪರಿಸರ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ನಮೂದಿಸಿ.",

    environmentalConditions:
      "ಪರಿಸರ ಪರಿಸ್ಥಿತಿಗಳು",

    temperature: "ತಾಪಮಾನ (°C)",
    salinityInput: "ಉಪ್ಪಿನಾಂಶ (PSU)",
    depth: "ಆಳ (m)",
    ph: "pH",
    oxygen: "ಕರಗಿದ ಆಮ್ಲಜನಕ (mg/L)",
    location: "ಸ್ಥಳ",

    runAnalysis:
      "BlueYield ವಿಶ್ಲೇಷಣೆಯನ್ನು ಚಾಲನೆ ಮಾಡಿ →",

    prototypeNote:
      "ಮಾದರಿ ಡೇಟಾ/ಮಾದರಿ ಮಾತ್ರ. ನೈಜ ಸಮುದ್ರ ಡೇಟಾದೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",

    inputPreview: "ಇನ್‌ಪುಟ್ ಪೂರ್ವವೀಕ್ಷಣೆ",
    site: "ತಾಣ",
    completeness: "ಪೂರ್ಣತೆ",
    readyAnalysis: "ವಿಶ್ಲೇಷಣೆಗೆ ಸಿದ್ಧ",

    recommendationSmall: "02 / ಶಿಫಾರಸು",
    personalizedDecision:
      "ವೈಯಕ್ತಿಕ ಕೃಷಿ ನಿರ್ಧಾರ",

    activitySpeciesEvidence:
      "ಚಟುವಟಿಕೆ + ಜಾತಿ + ಸಾಕ್ಷ್ಯ ಒಂದೇ ನೋಟದಲ್ಲಿ.",

    topRecommendation: "ಮುಖ್ಯ ಶಿಫಾರಸು",
    modelConfidence: "ಮಾದರಿ ವಿಶ್ವಾಸ",
    decisionUpper: "ನಿರ್ಧಾರ",

    proceed:
      "ಸಾಧ್ಯತಾ ಅಧ್ಯಯನಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ",

    whyThis: "ಇದು ಏಕೆ?",
    environmentalFit: "ಪರಿಸರ ಹೊಂದಾಣಿಕೆ",

    alternative: "ಪರ್ಯಾಯ",

    alternativeNote:
      "ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಮೂಲಸೌಕರ್ಯದ ಆಧಾರದ ಮೇಲೆ ಪರಿಗಣಿಸಿ.",

    action: "ಕ್ರಮ",
    nextSteps: "ಮುಂದಿನ ಹಂತಗಳು",

    step1: "ಋತುಮಾನ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    step2: "ಅನುಮತಿಗಳು ಮತ್ತು ವಲಯ ನಿಯಮಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    step3: "ಪೈಲಟ್ ನಡೆಸಿ",
    step4: "ಮಾರುಕಟ್ಟೆ ಖರೀದಿದಾರರನ್ನು ಖಚಿತಪಡಿಸಿ",

    riskSmall: "03 / ಅಪಾಯ & ಇಳುವರಿ",
    riskTitle: "ಯಾವ ಅಪಾಯ? ಯಾವ ಇಳುವರಿ?",
    riskDesc:
      "ಸ್ಥಳ ವಿಶ್ಲೇಷಣೆಯ ಕಾರ್ಯಾಚರಣಾ ಸೂಚಕಗಳು.",

    environmentalRiskSmall:
      "ಪರಿಸರ ಅಪಾಯ",

    runAnalysisUpdate:
      "ಮೌಲ್ಯಮಾಪನವನ್ನು ನವೀಕರಿಸಲು ವಿಶ್ಲೇಷಣೆ ನಡೆಸಿ.",

    estimatedYield: "ಅಂದಾಜು ಇಳುವರಿ",
    tonnes: "ಟನ್ / ಹೆಕ್ಟೇರ್ / ಚಕ್ರ",
    prototypeEstimate: "ಪ್ರೋಟೋಟೈಪ್ ಅಂದಾಜು",

    temperatureShort: "ತಾಪಮಾನ",
    salinityShort: "ಉಪ್ಪಿನಾಂಶ",
    oxygenShort: "ಆಮ್ಲಜನಕ",
    depthShort: "ಆಳ",

    econSmall: "04 / ಆರ್ಥಿಕ ಸಾಮರ್ಥ್ಯ",
    econTitle:
      "ಉತ್ಪಾದನೆಯನ್ನು ಅವಕಾಶವಾಗಿ ಪರಿವರ್ತಿಸಿ",

    econDesc:
      "ಪಾರದರ್ಶಕ ಡೆಮೋ ಅಂದಾಜು; ಹಣಕಾಸು ಖಾತರಿ ಅಲ್ಲ.",

    annual: "ಡೆಮೋ ವಾರ್ಷಿಕ ಅವಕಾಶ",
    grossRevenue:
      "ಒಟ್ಟು ಆದಾಯ / ಹೆಕ್ಟೇರ್ / ವರ್ಷ",

    production: "ಉತ್ಪಾದನೆ",
    marketValue: "ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ",
    operationalFit: "ಕಾರ್ಯಾಚರಣಾ ಹೊಂದಾಣಿಕೆ",

    yieldCard: "ಇಳುವರಿ",
    perHectare: "ಪ್ರತಿ ಹೆಕ್ಟೇರ್ / ಚಕ್ರ",

    indicativePrice: "ಸೂಚಕ ಬೆಲೆ",
    editable: "ಬದಲಾಯಿಸಬಹುದಾದ ಡೆಮೋ ಊಹೆ",

    potential: "ಸಾಮರ್ಥ್ಯ",
    promising: "ಭರವಸೆಯಿದೆ",

    validateMarket:
      "ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ವೆಚ್ಚದ ಡೇಟಾವನ್ನು ಪರಿಶೀಲಿಸಿ.",

    mapSmall: "05 / ಸ್ಥಳ ಬುದ್ಧಿಮತ್ತೆ",
    mapTitle: "ಸೂಕ್ತ ಪ್ರದೇಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    mapDesc: "GIS ಶೈಲಿಯ ಪ್ರೋಟೋಟೈಪ್ ದೃಶ್ಯ.",

    selectedZone: "ಆಯ್ಕೆ ಮಾಡಿದ ಪ್ರದೇಶ",
    bestActivityMap: "ಅತ್ಯುತ್ತಮ ಚಟುವಟಿಕೆ",
    low: "ಕಡಿಮೆ",

    mapNote:
      "ಉತ್ಪಾದನಾ ಆವೃತ್ತಿಯನ್ನು GeoPandas, PostGIS, ಉಪಗ್ರಹ ಪದರಗಳು ಮತ್ತು ಕರಾವಳಿ GIS ಡೇಟಾಸೆಟ್‌ಗಳಿಗೆ ಸಂಪರ್ಕಿಸಬಹುದು.",

    footer:
      "BlueYield AI · ಸಮುದ್ರ ಕೃಷಿ ನಿರ್ಧಾರ ಬುದ್ಧಿಮತ್ತೆ · ಪ್ರೋಟೋಟೈಪ್",

    seaweed: "ಸಮುದ್ರ ಸಸ್ಯ",
    seaweedFarming: "ಸಮುದ್ರ ಸಸ್ಯ ಕೃಷಿ",
    shellfish: "ಶೆಲ್‌ಫಿಶ್",

    analysisSuccess:
      "ವಿಶ್ಲೇಷಣೆ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.",

    apiError:
      "API ವಿನಂತಿ ವಿಫಲವಾಗಿದೆ ಅಥವಾ ಫಲಿತಾಂಶವನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗಲಿಲ್ಲ."
  },


  // ==========================================================
  // MALAYALAM
  // ==========================================================

  ml: {

    dashboard: "ഡാഷ്ബോർഡ്",
    analyze: "സൈറ്റ് വിശകലനം",
    recommendation: "ശുപാർശ",
    risk: "അപകടസാധ്യത & വിളവ്",
    economics: "സാമ്പത്തിക സാധ്യത",
    map: "ലൊക്കേഷൻ ഇന്റലിജൻസ്",

    decision:
      "സമുദ്ര കൃഷിക്കായുള്ള തീരുമാന ബുദ്ധി",

    marineLayer:
      "സമുദ്ര കൃഷി / തീരുമാന പാളി",

    dashboardTitle:
      "BlueYield AI",

    aiPowered:
      "AI അടിസ്ഥാനമാക്കിയുള്ള തീരുമാന ബുദ്ധി",

    heroTitle1:
      "സങ്കീർണ്ണമായ സമുദ്ര ഡാറ്റയിൽ നിന്ന്",

    heroTitle2:
      "ലളിതമായ പ്രാദേശിക തീരുമാനങ്ങളിലേക്ക്.",

    heroDesc:
      "എന്ത് കൃഷി ചെയ്യണം. എവിടെ കൃഷി ചെയ്യണം. എന്ത് അപകടസാധ്യത പ്രതീക്ഷിക്കാം. എന്ത് വിളവും വരുമാനവും സാധ്യമാണ്.",

    analyzeLocation:
      "ഒരു സ്ഥലം വിശകലനം ചെയ്യുക →",

    climate: "കാലാവസ്ഥ",
    salinity: "ലവണാംശം",
    gis: "GIS",
    yield: "വിളവ്",

    locationsAnalyzed:
      "വിശകലനം ചെയ്ത സ്ഥലങ്ങൾ",

    activitiesSupported:
      "പിന്തുണയ്ക്കുന്ന പ്രവർത്തനങ്ങൾ",

    avgSuitability:
      "ശരാശരി അനുയോജ്യത",

    decisionTime:
      "തീരുമാന സമയം",

    thisMonth:
      "ഈ മാസം +18%",

    seaweedShellfish:
      "കടൽപ്പായൽ · ഷെൽഫിഷ് +",

    demoSites:
      "ഡെമോ സൈറ്റുകൾ",

    inputDecision:
      "ഇൻപുട്ട് → തീരുമാനം",

    howItWorks:
      "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",

    dataDecision:
      "ഡാറ്റ → തീരുമാനം",

    data: "ഡാറ്റ",

    oceanWeatherGIS:
      "സമുദ്രം · കാലാവസ്ഥ · GIS",

    process: "പ്രോസസ്സ്",

    cleanSpatialTemporal:
      "ശുദ്ധീകരണം · സ്ഥലിക · സമയിക",

    aiMl: "AI / ML",

    suitabilitySpecies:
      "അനുയോജ്യത · ഇനം",

    decisionWord:
      "തീരുമാനം",

    bestOptionEvidence:
      "മികച്ച ഓപ്ഷൻ + തെളിവ്",

    personalize:
      "വ്യക്തിഗതമാക്കൽ",

    localLanguage:
      "പ്രാദേശിക ഭാഷ",

    experience:
      "അനുഭവം",

    mapDashboard:
      "മാപ്പ് + ഡാഷ്ബോർഡ്",

    decisionSnapshot:
      "തീരുമാന സംഗ്രഹം",

    whatWantToKnow:
      "നിങ്ങൾ എന്താണ് അറിയാൻ ആഗ്രഹിക്കുന്നത്?",

    what: "എന്ത്?",
    bestActivity: "മികച്ച പ്രവർത്തനം",

    where: "എവിടെ?",
    suitableZone: "അനുയോജ്യമായ മേഖല",

    whatRisk: "എന്ത് അപകടസാധ്യത?",
    environmentalRisk:
      "പരിസ്ഥിതി അപകടസാധ്യത",

    whatReturn:
      "എന്ത് വരുമാനം?",

    economicPotential:
      "സാമ്പത്തിക സാധ്യത",

    siteAnalysis:
      "01 / സൈറ്റ് വിശകലനം",

    analyzeCoastal:
      "തീരപ്രദേശം വിശകലനം ചെയ്യുക",

    enterConditions:
      "ലഭ്യമായ പരിസ്ഥിതി സാഹചര്യങ്ങൾ നൽകുക.",

    environmentalConditions:
      "പരിസ്ഥിതി സാഹചര്യങ്ങൾ",

    temperature:
      "താപനില (°C)",

    salinityInput:
      "ലവണാംശം (PSU)",

    depth:
      "ആഴം (m)",

    ph: "pH",

    oxygen:
      "ലയിച്ച ഓക്സിജൻ (mg/L)",

    location:
      "സ്ഥലം",

    runAnalysis:
      "BlueYield വിശകലനം നടത്തുക →",

    prototypeNote:
      "പ്രോട്ടോടൈപ്പ് ഡാറ്റ/മോഡൽ മാത്രം. യഥാർത്ഥ സമുദ്ര ഡാറ്റ ഉപയോഗിച്ച് പരിശോധിക്കുക.",

    inputPreview:
      "ഇൻപുട്ട് പ്രിവ്യൂ",

    site: "സൈറ്റ്",
    completeness: "പൂർണ്ണത",
    readyAnalysis:
      "വിശകലനത്തിന് തയ്യാറാണ്",

    recommendationSmall:
      "02 / ശുപാർശ",

    personalizedDecision:
      "വ്യക്തിഗത കൃഷി തീരുമാനം",

    activitySpeciesEvidence:
      "പ്രവർത്തനം + ഇനം + തെളിവ് ഒരേ കാഴ്ചയിൽ.",

    topRecommendation:
      "പ്രധാന ശുപാർശ",

    modelConfidence:
      "മോഡൽ വിശ്വാസ്യത",

    decisionUpper:
      "തീരുമാനം",

    proceed:
      "സാധ്യതാ പഠനത്തിലേക്ക് തുടരുക",

    whyThis: "ഇത് എന്തുകൊണ്ട്?",
    environmentalFit:
      "പരിസ്ഥിതി അനുയോജ്യത",

    alternative: "ബദൽ",

    alternativeNote:
      "വിപണിയും അടിസ്ഥാന സൗകര്യങ്ങളും പരിഗണിച്ച് തിരഞ്ഞെടുക്കുക.",

    action: "നടപടി",
    nextSteps: "അടുത്ത ഘട്ടങ്ങൾ",

    step1:
      "കാലാവസ്ഥാ സാഹചര്യങ്ങൾ പരിശോധിക്കുക",

    step2:
      "അനുമതികളും സോൺ നിയമങ്ങളും പരിശോധിക്കുക",

    step3:
      "പൈലറ്റ് നടത്തുക",

    step4:
      "വിപണി വാങ്ങുന്നയാളെ സ്ഥിരീകരിക്കുക",

    riskSmall:
      "03 / അപകടസാധ്യത & വിളവ്",

    riskTitle:
      "എന്ത് അപകടസാധ്യത? എന്ത് വിളവ്?",

    riskDesc:
      "സൈറ്റ് വിശകലനത്തിൽ നിന്നുള്ള പ്രവർത്തന സൂചകങ്ങൾ.",

    environmentalRiskSmall:
      "പരിസ്ഥിതി അപകടസാധ്യത",

    runAnalysisUpdate:
      "വിലയിരുത്തൽ പുതുക്കാൻ വിശകലനം നടത്തുക.",

    estimatedYield:
      "കണക്കാക്കിയ വിളവ്",

    tonnes:
      "ടൺ / ഹെക്ടർ / സൈക്കിൾ",

    prototypeEstimate:
      "പ്രോട്ടോടൈപ്പ് കണക്കുകൂട്ടൽ",

    temperatureShort:
      "താപനില",

    salinityShort:
      "ലവണാംശം",

    oxygenShort:
      "ഓക്സിജൻ",

    depthShort:
      "ആഴം",

    econSmall:
      "04 / സാമ്പത്തിക സാധ്യത",

    econTitle:
      "ഉൽപ്പാദനത്തെ അവസരമാക്കി മാറ്റുക",

    econDesc:
      "സുതാര്യമായ ഡെമോ കണക്കുകൂട്ടൽ; സാമ്പത്തിക ഗ്യാരണ്ടിയല്ല.",

    annual:
      "ഡെമോ വാർഷിക സാധ്യത",

    grossRevenue:
      "മൊത്ത വരുമാനം / ഹെക്ടർ / വർഷം",

    production:
      "ഉൽപ്പാദനം",

    marketValue:
      "വിപണി മൂല്യം",

    operationalFit:
      "പ്രവർത്തന അനുയോജ്യത",

    yieldCard:
      "വിളവ്",

    perHectare:
      "ഹെക്ടറിന് / സൈക്കിൾ",

    indicativePrice:
      "സൂചനാ വില",

    editable:
      "എഡിറ്റ് ചെയ്യാവുന്ന ഡെമോ അനുമാനം",

    potential:
      "സാധ്യത",

    promising:
      "പ്രതീക്ഷാജനകം",

    validateMarket:
      "പ്രാദേശിക വിപണിയും ചെലവ് ഡാറ്റയും പരിശോധിക്കുക.",

    mapSmall:
      "05 / ലൊക്കേഷൻ ഇന്റലിജൻസ്",

    mapTitle:
      "അനുയോജ്യമായ മേഖലകൾ കണ്ടെത്തുക",

    mapDesc:
      "GIS ശൈലിയിലുള്ള പ്രോട്ടോടൈപ്പ് കാഴ്ച.",

    selectedZone:
      "തിരഞ്ഞെടുത്ത മേഖല",

    bestActivityMap:
      "മികച്ച പ്രവർത്തനം",

    low: "കുറവ്",

    mapNote:
      "പ്രൊഡക്ഷൻ പതിപ്പ് GeoPandas, PostGIS, സാറ്റലൈറ്റ് ലെയറുകൾ, തീരദേശ GIS ഡാറ്റാസെറ്റുകൾ എന്നിവയുമായി ബന്ധിപ്പിക്കാം.",

    footer:
      "BlueYield AI · സമുദ്ര കൃഷി തീരുമാന ബുദ്ധി · പ്രോട്ടോടൈപ്പ്",

    seaweed:
      "കടൽപ്പായൽ",

    seaweedFarming:
      "കടൽപ്പായൽ കൃഷി",

    shellfish:
      "ഷെൽഫിഷ്",

    analysisSuccess:
      "വിശകലനം വിജയകരമായി പൂർത്തിയായി.",

    apiError:
      "API അഭ്യർത്ഥന പരാജയപ്പെട്ടു അല്ലെങ്കിൽ ഫലം പ്രദർശിപ്പിക്കാൻ കഴിഞ്ഞില്ല."
  }

};


// ============================================================
// TRANSLATION HELPER
// ============================================================

function tr(key) {

  if (
    translations[currentLanguage] &&
    translations[currentLanguage][key]
  ) {
    return translations[currentLanguage][key];
  }

  return translations.en[key] || key;
}


// ============================================================
// CREATE / FIX LANGUAGE SELECTOR
// ============================================================

function createLanguageSelector() {

  // Find the existing language selector in the page.
  // DO NOT create a new one if one already exists.

  let selector =
    document.getElementById("lang") ||
    document.querySelector("select.lang") ||
    document.querySelector("header select") ||
    document.querySelector("select");

  if (!selector) {
    console.warn("Language selector not found.");
    return;
  }

  // Give the existing selector the ID we use in JavaScript
  selector.id = "lang";

  // Remove any duplicate selectors that may have been
  // created by the previous version of app.js
  document.querySelectorAll("select").forEach((item) => {
    if (item !== selector) {
      const options = Array.from(item.options || []);

      const looksLikeLanguageSelector =
        options.some(option =>
          /English|Tamil|தமிழ்|Hindi|हिन्दी|Telugu|తెలుగు|Kannada|ಕನ್ನಡ|Malayalam|മലയാളം/i
            .test(option.textContent)
        );

      if (looksLikeLanguageSelector) {
        item.remove();
      }
    }
  });

  // Clear the existing options
  selector.innerHTML = "";

  // Add languages
  Object.entries(LANGUAGES).forEach(([code, name]) => {

    const option =
      document.createElement("option");

    option.value = code;
    option.textContent = name;

    if (code === currentLanguage) {
      option.selected = true;
    }

    selector.appendChild(option);
  });

  // Prevent multiple event listeners
  selector.onchange = function () {

    currentLanguage = this.value;

    localStorage.setItem(
      "blueyield-language",
      currentLanguage
    );

    console.log(
      "BlueYield language:",
      currentLanguage
    );

    translatePage();
  };

  // Make sure the saved language is displayed
  selector.value = currentLanguage;
}


// ============================================================
// FIND ELEMENT
// ============================================================

function el(id) {
  return document.getElementById(id);
}


// ============================================================
// SET TEXT
// ============================================================

function setText(id, text) {

  const element = el(id);

  if (element) {
    element.textContent = text;
  }
}


// ============================================================
// TRANSLATE PAGE
// ============================================================

function translatePage() {
   // Always restore the original English text before translating
document.querySelectorAll("[data-original-text]").forEach(el => {
    el.textContent = el.getAttribute("data-original-text");
});

// Save original English text for elements that don't have it yet
document.querySelectorAll("body *").forEach(el => {
    if (
        el.children.length === 0 &&
        el.textContent.trim() &&
        !el.hasAttribute("data-original-text")
    ) {
        el.setAttribute(
            "data-original-text",
            el.textContent.trim()
        );
    }
});
  console.log(
    "Translating page:",
    currentLanguage
  );

  // ----------------------------------------------------------
  // Sidebar
  // ----------------------------------------------------------

  const navs =
    document.querySelectorAll(".nav");

  if (navs.length >= 6) {

    const navTexts = [
      "dashboard",
      "analyze",
      "recommendation",
      "risk",
      "economics",
      "map"
    ];

    navs.forEach((button, index) => {

      const span =
        button.querySelector("span");

      if (
        span &&
        navTexts[index]
      ) {
        span.textContent =
          tr(navTexts[index]);
      }

    });
  }


  // ----------------------------------------------------------
  // Sidebar description
  // ----------------------------------------------------------

  const sideNote =
    document.querySelector(".side-note");

  if (sideNote) {

    sideNote.innerHTML =
      `${tr("decision")}<br>`;

  }


  // ----------------------------------------------------------
  // Header
  // ----------------------------------------------------------

  const headerSmall =
    document.querySelector(
      "header small"
    );

  if (headerSmall) {
    headerSmall.textContent =
      tr("marineLayer");
  }


  // ----------------------------------------------------------
  // Dashboard
  // ----------------------------------------------------------

  setText(
    "title",
    tr("dashboardTitle")
  );


  // Dashboard hero

  const heroLabel =
    document.querySelector(
      "#dashboard .hero label"
    );

  if (heroLabel) {
    heroLabel.textContent =
      tr("aiPowered");
  }


  const heroH2 =
    document.querySelector(
      "#dashboard .hero h2"
    );

  if (heroH2) {

    heroH2.innerHTML =
      `${tr("heroTitle1")}<br><em>${tr("heroTitle2")}</em>`;
  }


  const heroP =
    document.querySelector(
      "#dashboard .hero p"
    );

  if (heroP) {
    heroP.textContent =
      tr("heroDesc");
  }


  const analyzeButtons =
    document.querySelectorAll(
      '[data-open="analyze"]'
    );

  analyzeButtons.forEach(button => {

    if (
      button.classList.contains("primary")
    ) {
      button.textContent =
        tr("analyzeLocation");
    }

  });


  // ----------------------------------------------------------
  // Orb labels
  // ----------------------------------------------------------

  const chips =
    document.querySelectorAll(
      "#dashboard .chip"
    );

  chips.forEach(chip => {

    const text =
      chip.textContent.trim();

    if (text.includes("Climate")) {
      chip.textContent =
        "🌡 " + tr("climate");
    }

    else if (text.includes("Salinity")) {
      chip.textContent =
        "🧂 " + tr("salinity");
    }

    else if (text.includes("GIS")) {
      chip.textContent =
        "🗺 " + tr("gis");
    }

    else if (text.includes("Yield")) {
      chip.textContent =
        "📈 " + tr("yield");
    }

  });


  // ----------------------------------------------------------
  // Dashboard statistics
  // ----------------------------------------------------------

  const stats =
    document.querySelectorAll(
      "#dashboard .stats article"
    );

  if (stats.length >= 4) {

    stats[0].querySelector("small").textContent =
      tr("locationsAnalyzed");

    stats[0].querySelector("i").textContent =
      tr("thisMonth");

    stats[1].querySelector("small").textContent =
      tr("activitiesSupported");

    stats[1].querySelector("i").textContent =
      tr("seaweedShellfish");

    stats[2].querySelector("small").textContent =
      tr("avgSuitability");

    stats[2].querySelector("i").textContent =
      tr("demoSites");

    stats[3].querySelector("small").textContent =
      tr("decisionTime");

    stats[3].querySelector("i").textContent =
      tr("inputDecision");
  }


  // ----------------------------------------------------------
  // How it works
  // ----------------------------------------------------------

  const howCard =
    document.querySelector(
      "#dashboard .cols .card:first-child"
    );

  if (howCard) {

    const small =
      howCard.querySelector("small");

    const h3 =
      howCard.querySelector("h3");

    if (small)
      small.textContent =
        tr("howItWorks");

    if (h3)
      h3.textContent =
        tr("dataDecision");

    const pipeline =
      howCard.querySelectorAll(
        ".pipeline > div"
      );

    const pipelineData = [
      ["data", "oceanWeatherGIS"],
      ["process", "cleanSpatialTemporal"],
      ["aiMl", "suitabilitySpecies"],
      ["decisionWord", "bestOptionEvidence"],
      ["personalize", "localLanguage"],
      ["experience", "mapDashboard"]
    ];

    pipeline.forEach(
      (item, index) => {

        if (!pipelineData[index])
          return;

        const strong =
          item.querySelector("strong");

        const span =
          item.querySelector("span");

        if (strong)
          strong.textContent =
            tr(pipelineData[index][0]);

        if (span)
          span.textContent =
            tr(pipelineData[index][1]);
      }
    );
  }


  // ----------------------------------------------------------
  // Decision snapshot
  // ----------------------------------------------------------

  const snap =
    document.querySelector(
      "#dashboard .dark"
    );

  if (snap) {

    const small =
      snap.querySelector("small");

    const h3 =
      snap.querySelector("h3");

    if (small)
      small.textContent =
        tr("decisionSnapshot");

    if (h3)
      h3.textContent =
        tr("whatWantToKnow");

    const buttons =
      snap.querySelectorAll(
        ".snap button"
      );

    const snapData = [
      ["what", "bestActivity"],
      ["where", "suitableZone"],
      ["whatRisk", "environmentalRisk"],
      ["whatReturn", "economicPotential"]
    ];

    buttons.forEach(
      (button, index) => {

        if (!snapData[index])
          return;

        const first =
          button.childNodes[0];

        if (first) {
          first.textContent =
            tr(snapData[index][0]) + "\n";
        }

        const b =
          button.querySelector("b");

        if (b) {
          b.textContent =
            tr(snapData[index][1]);
        }
      }
    );
  }


  // ----------------------------------------------------------
  // ANALYZE PAGE
  // ----------------------------------------------------------

  const analyzePage =
    el("analyze");

  if (analyzePage) {

    const headSmall =
      analyzePage.querySelector(
        ".section-head small"
      );

    const h2 =
      analyzePage.querySelector(
        ".section-head h2"
      );

    const p =
      analyzePage.querySelector(
        ".section-head p"
      );

    const cardH3 =
      analyzePage.querySelector(
        ".formcols .card:first-child h3"
      );

    const labels =
      analyzePage.querySelectorAll(
        ".form label"
      );

    if (headSmall)
      headSmall.textContent =
        tr("siteAnalysis");

    if (h2)
      h2.textContent =
        tr("analyzeCoastal");

    if (p)
      p.textContent =
        tr("enterConditions");

    if (cardH3)
      cardH3.textContent =
        tr("environmentalConditions");


    const labelKeys = [
      "temperature",
      "salinityInput",
      "depth",
      "ph",
      "oxygen",
      "location"
    ];

    labels.forEach(
      (label, index) => {

        if (!labelKeys[index])
          return;

        const input =
          label.querySelector("input");

        // Keep input, only change label text.
        if (input) {

          const text =
            tr(labelKeys[index]);

          label.childNodes[0].textContent =
            text;
        }
      }
    );


    const runButton =
      el("run");

    if (runButton)
      runButton.textContent =
        tr("runAnalysis");


    const note =
      analyzePage.querySelector(
        ".note"
      );

    if (note)
      note.textContent =
        tr("prototypeNote");


    const previewSmall =
      analyzePage.querySelector(
        ".formcols .card:nth-child(2) > small"
      );

    if (previewSmall)
      previewSmall.textContent =
        tr("inputPreview");

    const lines =
      analyzePage.querySelectorAll(
        ".formcols .card:nth-child(2) .line"
      );

    if (lines.length >= 2) {

      lines[0].querySelector("span").textContent =
        tr("site");

      lines[1].querySelector("span").textContent =
        tr("completeness");
    }

  }


  // ----------------------------------------------------------
  // RECOMMENDATION
  // ----------------------------------------------------------

  const rec =
    el("recommendation");

  if (rec) {

    const small =
      rec.querySelector(
        ".section-head small"
      );

    const h2 =
      rec.querySelector(
        ".section-head h2"
      );

    const desc =
      rec.querySelector(
        ".section-head p"
      );

    if (small)
      small.textContent =
        tr("recommendationSmall");

    if (h2)
      h2.textContent =
        tr("personalizedDecision");

    if (desc)
      desc.textContent =
        tr("activitySpeciesEvidence");


    const recommendBox =
      rec.querySelector(".recommend");

    if (recommendBox) {

      const label =
        recommendBox.querySelector("label");

      if (label)
        label.textContent =
          tr("topRecommendation");

      const metaSmall =
        recommendBox.querySelectorAll(
          ".recmeta small"
        );

      if (metaSmall.length >= 2) {

        metaSmall[0].textContent =
          tr("location").toUpperCase();

        metaSmall[1].textContent =
          tr("decisionUpper");
      }

      const recDecision =
        recommendBox.querySelector(
          ".recmeta b:last-child"
        );

      if (recDecision)
        recDecision.textContent =
          tr("proceed");

      const confidenceLabel =
        recommendBox.querySelector(
          "div:nth-child(2) > small"
        );

      if (confidenceLabel) {

        const confidence =
          el("confidence");

        if (confidence) {

          confidenceLabel.innerHTML =
            `${tr("modelConfidence")} <b id="confidence">${confidence.textContent}</b>`;
        }
      }
    }


    const three =
      rec.querySelectorAll(
        ".three .card"
      );

    if (three.length >= 3) {

      const firstSmall =
        three[0].querySelector("small");

      const firstH3 =
        three[0].querySelector("h3");

      if (firstSmall)
        firstSmall.textContent =
          tr("whyThis");

      if (firstH3)
        firstH3.textContent =
          tr("environmentalFit");


      const secondSmall =
        three[1].querySelector("small");

      if (secondSmall)
        secondSmall.textContent =
          tr("alternative");


      const secondH3 =
        three[1].querySelector("h3");

      if (secondH3) {

        // Don't overwrite dynamic activity
        if (!lastResult)
          secondH3.textContent =
            tr("shellfish");
      }


      const thirdSmall =
        three[2].querySelector("small");

      const thirdH3 =
        three[2].querySelector("h3");

      if (thirdSmall)
        thirdSmall.textContent =
          tr("action");

      if (thirdH3)
        thirdH3.textContent =
          tr("nextSteps");


      const list =
        three[2].querySelectorAll(
          "ol li"
        );

      const steps = [
        "step1",
        "step2",
        "step3",
        "step4"
      ];

      list.forEach(
        (li, index) => {

          if (steps[index])
            li.textContent =
              tr(steps[index]);
        }
      );
    }
  }


  // ----------------------------------------------------------
  // RISK PAGE
  // ----------------------------------------------------------

  const riskPage =
    el("risk");

  if (riskPage) {

    const small =
      riskPage.querySelector(
        ".section-head small"
      );

    const h2 =
      riskPage.querySelector(
        ".section-head h2"
      );

    const desc =
      riskPage.querySelector(
        ".section-head p"
      );

    if (small)
      small.textContent =
        tr("riskSmall");

    if (h2)
      h2.textContent =
        tr("riskTitle");

    if (desc)
      desc.textContent =
        tr("riskDesc");


    const riskSmall =
      riskPage.querySelector(
        ".card:first-child > small"
      );

    if (riskSmall)
      riskSmall.textContent =
        tr("environmentalRiskSmall");


    const riskText =
      el("riskText");

    if (
      riskText &&
      !lastResult
    ) {
      riskText.textContent =
        tr("runAnalysisUpdate");
    }


    const yieldSmall =
      riskPage.querySelector(
        ".center > small:first-child"
      );

    if (yieldSmall)
      yieldSmall.textContent =
        tr("estimatedYield");


    const yieldUnit =
      riskPage.querySelector(
        ".yield + span"
      );

    if (yieldUnit)
      yieldUnit.textContent =
        tr("tonnes");


    const prototype =
      riskPage.querySelector(
        ".center > small:last-child"
      );

    if (prototype)
      prototype.textContent =
        tr("prototypeEstimate");


    const bars =
      riskPage.querySelectorAll(
        ".bars > div span"
      );

    const barKeys = [
      "temperatureShort",
      "salinityShort",
      "oxygenShort",
      "depthShort"
    ];

    bars.forEach(
      (bar, index) => {

        if (barKeys[index])
          bar.textContent =
            tr(barKeys[index]);
      }
    );
  }


  // ----------------------------------------------------------
  // ECONOMICS
  // ----------------------------------------------------------

  const econ =
    el("economics");

  if (econ) {

    const small =
      econ.querySelector(
        ".section-head small"
      );

    const h2 =
      econ.querySelector(
        ".section-head h2"
      );

    const desc =
      econ.querySelector(
        ".section-head p"
      );

    if (small)
      small.textContent =
        tr("econSmall");

    if (h2)
      h2.textContent =
        tr("econTitle");

    if (desc)
      desc.textContent =
        tr("econDesc");


    const econSmallText =
      econ.querySelector(
        ".econ > div:first-child small"
      );

    if (econSmallText)
      econSmallText.textContent =
        tr("annual");


    const revenueP =
      econ.querySelector(
        ".econ > div:first-child p"
      );

    if (revenueP)
      revenueP.textContent =
        tr("grossRevenue");


    const econBars =
      econ.querySelectorAll(
        ".econ .bars > div span"
      );

    const econBarKeys = [
      "production",
      "marketValue",
      "operationalFit"
    ];

    econBars.forEach(
      (span, index) => {

        if (econBarKeys[index])
          span.textContent =
            tr(econBarKeys[index]);
      }
    );


    const cards =
      econ.querySelectorAll(
        ".three .card"
      );

    if (cards.length >= 3) {

      cards[0].querySelector("small").textContent =
        tr("yieldCard");

      cards[0].querySelector("p").textContent =
        tr("perHectare");


      cards[1].querySelector("small").textContent =
        tr("indicativePrice");

      cards[1].querySelector("p").textContent =
        tr("editable");


      cards[2].querySelector("small").textContent =
        tr("potential");

      cards[2].querySelector(".big").textContent =
        tr("promising");

      cards[2].querySelector("p").textContent =
        tr("validateMarket");
    }
  }


  // ----------------------------------------------------------
  // MAP
  // ----------------------------------------------------------

  const map =
    el("map");

  if (map) {

    const small =
      map.querySelector(
        ".section-head small"
      );

    const h2 =
      map.querySelector(
        ".section-head h2"
      );

    const desc =
      map.querySelector(
        ".section-head p"
      );

    if (small)
      small.textContent =
        tr("mapSmall");

    if (h2)
      h2.textContent =
        tr("mapTitle");

    if (desc)
      desc.textContent =
        tr("mapDesc");


    const selected =
      map.querySelector(
        ".card > small"
      );

    if (selected)
      selected.textContent =
        tr("selectedZone");


    const lines =
      map.querySelectorAll(
        ".card .line"
      );

    if (lines.length >= 3) {

      lines[0].querySelector("span").textContent =
        tr("suitability");

      lines[1].querySelector("span").textContent =
        tr("bestActivityMap");

      lines[2].querySelector("span").textContent =
        tr("environmentalRisk");
    }


    const note =
      map.querySelector(
        ".card .note"
      );

    if (note)
      note.textContent =
        tr("mapNote");
  }


  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------

  const footer =
    document.querySelector("footer");

  if (footer)
    footer.textContent =
      tr("footer");


  // ----------------------------------------------------------
  // Dynamic API result
  // ----------------------------------------------------------

  if (lastResult) {
    renderResult(lastResult);
  }


  // ----------------------------------------------------------
  // Update page title
  // ----------------------------------------------------------

  document.documentElement.lang =
    currentLanguage;

}


// ============================================================
// NAVIGATION
// ============================================================

function navigate(page) {

  document
    .querySelectorAll(".page")
    .forEach(section => {

      section.classList.remove("show");
    });


  const target =
    document.getElementById(page);

  if (target) {
    target.classList.add("show");
  }


  document
    .querySelectorAll(".nav")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === page
      );

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ============================================================
// NAVIGATION SETUP
// ============================================================

function setupNavigation() {

  document
    .querySelectorAll(".nav")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          navigate(
            button.dataset.page
          );

        }
      );

    });


  document
    .querySelectorAll("[data-open]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          navigate(
            button.dataset.open
          );

        }
      );

    });
}


// ============================================================
// INPUT PREVIEW
// ============================================================

function setupInputPreview() {

  const locationInput =
    el("location");

  const preview =
    el("preview");

  if (
    locationInput &&
    preview
  ) {

    locationInput.addEventListener(
      "input",
      () => {

        preview.textContent =
          locationInput.value ||
          "Demo Coastal Site";

      }
    );
  }
}


// ============================================================
// NUMBER HELPER
// ============================================================

function numberValue(id, fallback = 0) {

  const input =
    el(id);

  if (!input)
    return fallback;

  const value =
    parseFloat(input.value);

  return Number.isFinite(value)
    ? value
    : fallback;
}


// ============================================================
// ANALYSIS REQUEST
// ============================================================

async function runAnalysis() {

  const message =
    el("message");

  const payload = {

    temperature:
      numberValue(
        "temperature",
        26
      ),

    salinity:
      numberValue(
        "salinity",
        34
      ),

    depth:
      numberValue(
        "depth",
        12
      ),

    ph:
      numberValue(
        "ph",
        8
      ),

    dissolved_oxygen:
      numberValue(
        "oxygen",
        6.2
      ),

    location:
      el("location")?.value ||
      "Demo Coastal Site"
  };


  console.log(
    "Sending request:",
    payload
  );


  if (message) {

    message.textContent =
      "Analyzing...";

    message.className =
      "message";
  }


  try {

    const response =
      await fetch(
        `${API_BASE}/api/analyze`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(payload)
        }
      );


    console.log(
      "API status:",
      response.status
    );


    if (!response.ok) {

      throw new Error(
        `API returned ${response.status}`
      );
    }


    const result =
      await response.json();


    console.log(
      "BlueYield API response:",
      result
    );


    lastResult =
      result;


    renderResult(result);


    if (message) {

      message.textContent =
        tr("analysisSuccess");

      message.className =
        "message success";
    }


    // Automatically show recommendation
    navigate("recommendation");


  } catch (error) {

    console.error(
      "BlueYield frontend error:",
      error
    );


    if (message) {

      message.textContent =
        `${tr("apiError")} ${error.message}`;

      message.className =
        "message error";
    }
  }
}


// ============================================================
// RENDER API RESULT
// ============================================================

function renderResult(result) {

  if (!result)
    return;


  // ----------------------------------------------------------
  // Recommendation
  // ----------------------------------------------------------

  const score =
    el("score");

  if (score)
    score.textContent =
      result.suitability ??
      0;


  const activity =
    el("activity");

  if (activity) {

    if (
      result.activity
        ?.toLowerCase()
        .includes("seaweed")
    ) {

      activity.textContent =
        tr("seaweedFarming");

    } else {

      activity.textContent =
        result.activity ||
        "-";
    }
  }


  const species =
    el("species");

  if (species)
    species.textContent =
      result.species ||
      "-";


  const confidence =
    el("confidence");

  if (confidence)
    confidence.textContent =
      `${result.confidence ?? 0}%`;


  const recLocation =
    el("recLocation");

  if (recLocation)
    recLocation.textContent =
      result.location ||
      "-";


  // ----------------------------------------------------------
  // Alternative
  // ----------------------------------------------------------

  const alternative =
    el("alternative");

  if (alternative) {

    const value =
      result.alternative_activity ||
      result.alternative ||
      "Shellfish";

    if (
      value
        .toLowerCase()
        .includes("shellfish")
    ) {

      alternative.textContent =
        tr("shellfish");

    } else {

      alternative.textContent =
        value;
    }
  }


  const altScore =
    el("altScore");

  if (altScore) {

    altScore.textContent =
      `${result.alternative_score ?? 0}%`;
  }


  const altBar =
    el("altBar");

  if (altBar) {

    altBar.style.width =
      `${result.alternative_score ?? 0}%`;
  }


  // ----------------------------------------------------------
  // Why / explanation
  // ----------------------------------------------------------

  const why =
    el("why");

  if (why) {

    why.innerHTML = "";

    const explanation =
      result.explanation || [];

    explanation.forEach(
      item => {

        const li =
          document.createElement("li");

        li.textContent =
          item;

        why.appendChild(li);
      }
    );
  }


  // ----------------------------------------------------------
  // Risk
  // ----------------------------------------------------------

  const risk =
    el("risk");

  if (risk) {

    const riskValue =
      String(
        result.risk ||
        "LOW"
      ).toUpperCase();

    risk.textContent =
      riskValue;

    if (
      riskValue === "LOW"
    ) {

      risk.style.color =
        "#2cad78";

    } else if (
      riskValue === "MEDIUM"
    ) {

      risk.style.color =
        "#e3a43b";

    } else {

      risk.style.color =
        "#d9534f";
    }
  }


  const riskText =
    el("riskText");

  if (riskText) {

    const explanation =
      result.explanation || [];

    riskText.textContent =
      explanation.length
        ? explanation[0]
        : tr("runAnalysisUpdate");
  }


  // ----------------------------------------------------------
  // Yield
  // ----------------------------------------------------------

  const yieldElement =
    el("yield");

  if (yieldElement) {

    yieldElement.textContent =
      result.yield_t_per_ha_cycle ??
      result.yield ??
      "0";
  }


  // ----------------------------------------------------------
  // Revenue
  // ----------------------------------------------------------

  const revenue =
    el("revenue");

  if (revenue) {

    const revenueValue =
      Number(
        result.annual_revenue_inr ||
        0
      );

    if (
      Number.isFinite(
        revenueValue
      )
    ) {

      if (
        revenueValue >= 100000
      ) {

        revenue.textContent =
          `₹${(
            revenueValue / 100000
          ).toFixed(2)}L`;

      } else {

        revenue.textContent =
          `₹${revenueValue.toLocaleString("en-IN")}`;
      }

    }
  }


  // ----------------------------------------------------------
  // Economic yield
  // ----------------------------------------------------------

  const ecoYield =
    el("ecoYield");

  if (ecoYield) {

    ecoYield.textContent =
      `${result.yield_t_per_ha_cycle ?? result.yield ?? 0} t`;
  }


  // ----------------------------------------------------------
  // Production bars
  // ----------------------------------------------------------

  const prod =
    el("prod");

  if (prod) {

    const suitability =
      Number(
        result.suitability || 0
      );

    prod.style.width =
      `${Math.min(
        100,
        Math.max(
          0,
          suitability
        )
      )}%`;
  }


  const oper =
    el("oper");

  if (oper) {

    const confidence =
      Number(
        result.confidence || 0
      );

    oper.style.width =
      `${Math.min(
        100,
        Math.max(
          0,
          confidence
        )
      )}%`;
  }


  // ----------------------------------------------------------
  // Map
  // ----------------------------------------------------------

  const mapLoc =
    el("mapLoc");

  if (mapLoc)
    mapLoc.textContent =
      result.location ||
      "-";


  const mapScore =
    el("mapScore");

  if (mapScore)
    mapScore.textContent =
      `${result.suitability ?? 0}%`;


  const mapAct =
    el("mapAct");

  if (mapAct) {

    const activityValue =
      result.activity ||
      "Seaweed";

    if (
      activityValue
        .toLowerCase()
        .includes("seaweed")
    ) {

      mapAct.textContent =
        tr("seaweed");

    } else {

      mapAct.textContent =
        activityValue;
    }
  }

  if (mapAct) {
    const activityValue =
      result.activity ||
      "Seaweed";

    if (
      activityValue
        .toLowerCase()
        .includes("seaweed")
    ) {
      mapAct.textContent =
        tr("seaweed");
    } else {
      mapAct.textContent =
        activityValue;
    }
  }
}



// ============================================================
// RUN BUTTON
// ============================================================

function setupAnalysis() {

  const runButton =
    el("run");

  if (!runButton)
    return;


  runButton.addEventListener(
    "click",
    runAnalysis
  );
}


// ============================================================
// BROWSER TITLE
// ============================================================

function updateBrowserTitle() {

  document.title =
    "BlueYield AI";
}


// ============================================================
// INITIALIZE
// ============================================================

function initializeBlueYield() {

  console.log(
    "BlueYield multilingual frontend loaded."
  );

  console.log(
    "API:",
    API_BASE
  );


  createLanguageSelector();

  setupNavigation();

  setupInputPreview();

  setupAnalysis();

  updateBrowserTitle();

  translatePage();


  // ----------------------------------------------------------
  // Default page
  // ----------------------------------------------------------

  const dashboard =
    el("dashboard");

  if (dashboard) {

    document
      .querySelectorAll(".page")
      .forEach(
        page =>
          page.classList.remove("show")
      );

    dashboard.classList.add("show");
  }
}


// ============================================================
// START
// ============================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeBlueYield
  );

} else {

  initializeBlueYield();
}