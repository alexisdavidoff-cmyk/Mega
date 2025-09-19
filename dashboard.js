const App = {
    dataMaps: {
        TWO_VISITS_LOCATIONS: ["BAHIA BLANCA", "OLAVARRIA"],
        technicians: [
            { id: 1, name: 'Técnico Córdoba', base: 'GENERAL VILLEGAS', coords: [-35.0333, -63.0167], color: '#16a34a' },
            { id: 2, name: 'Técnico Olavarría', base: 'OLAVARRIA', coords: [-36.8927, -60.3225], color: '#3b82f6' },
            { id: 3, name: 'Técnico Mar del Plata', base: 'GENERAL PUEYRREDON', coords: [-38.0055, -57.5426], color: '#9333ea' }
        ],
        DEPENDENCIA_A_MUNICIPIO_MAP: {
            "COMANDO DE PATRULLAS ALMIRANTE BROWN": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL CUARTA – Longchamps": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL DECIMA – SAN FRANCISCO SOLANO": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL DECIMO PRIMERA – Islas Malvinas": "ALMIRANTE BROWN",
            "CRIA. ALmirante BROWN SEC.AL NOVENA – José Mármol": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL OCTAVA – Don Orione": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL PRIMERA – Adrogué": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL QUINTA – RAFAEL CALZADA": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL SEGUNDA – BURZACO": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL SEPTIMA – GLEW": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL SEXTA – CLAYPOLE": "ALMIRANTE BROWN",
            "CRIA. ALMIRANTE BROWN SEC.AL TERCERA – San José": "ALMIRANTE BROWN",
            "CRIA. DE LA MUJER Y LA FAMILIA ALMIRANTE BROWN": "ALmirante BROWN",
            "FUERZA BARRIAL DE APROXIMACION (F.B.A) II - ALMIRANTE BROWN": "ALMIRANTE BROWN",
            "GRUPO DE APOYO DEPARTAMENTAL ALMIRANTE BROWN": "ALMIRANTE BROWN",
            "POLICIA DEP. DE SEG. ALMIRANTE BROWN": "ALMIRANTE BROWN",
            "UNIDAD DE POLICIA DE PREVENCION LOCAL ALMIRANTE BROWN": "ALMIRANTE BROWN",
            "CENTRO de ENTRENAMIENTO SEDE DESCENTRALIZADA ALMIRANTE BROWN": "ALMIRANTE BROWN",
            "COMANDO DE PREVENCION RURAL 9 DE JULIO": "9 DE JULIO",
            "CRIA. DE LA MUJER Y LA FAMILIA 9 DE JULIO": "9 DE JULIO",
            "DEST. VIAL 9 DE JULIO": "9 DE JULIO",
            "ESTACION DE POLICIA DE SEGURIDAD COMUNAL 9 DE JULIO": "9 DE JULIO",
            "GRUPO DE APOYO DEPARTAMENTAL 9 DE JULIO": "9 DE JULIO",
            "JEF. DE POLICIA DE SEGURIDAD COMUNAL 9 DE JULIO": "9 DE JULIO",
            "COMANDO DE PREVENCION RURAL ADOLFO ALSINA": "ADOLFO ALSINA",
            "ESTACION DE POLICIA DE SEGURIDAD COMUNAL ADOLFO ALSINA - CARHUE": "ADOLFO ALSINA",
            "JEF. DE POLICIA DE SEGURIDAD COMUNAL ADOLFO ALSINA": "ADOLFO ALSINA",
            "SEC. PERICIAL DESCENTRALIZADA ADOLFO ALSINA": "ADOLFO ALSINA",
            "COMANDO DE PREVENCION RURAL GONZALES CHAVES": "ADOLFO GONZALES CHAVES",
            "ESTACION DE POLICIA DE SEGURIDAD COMUNAL ADOLFO GONZALES CHAVES": "ADOLFO GONZales CHAVES",
            "COMANDO DE PATRULLAS AVELLANEDA": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL CUARTA-SARANDI-": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL PRIMERA": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL QUINTA – WILDE": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL SEGUNDA – PIÑEIRO – COMISARIO MAYOR JORGE OMAR GUTIERREZ": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL SEPTIMA – VILLA DOMINICO": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL SEXTA – Villa Echenagucia": "AVELLANEDA",
            "CRIA. AVELLANEDA SEC.AL TERCERA – Dock Sud": "AVELLANEDA",
            "CRIA. DE LA MUJER Y LA FAMILIA AVELLANEDA": "AVELLANEDA",
            "DEL. PREVENCION ECOLOGICA Y SUSTANCIAS PELIGROSAS AVELLANEDA": "AVELLANEDA",
            "DEST. INFANTERIA AVELLANEDA": "AVELLANEDA",
            "DEST. VIAL PRESIDENTE NICOLAS AVELLANEDA": "AVELLANEDA",
            "ESCUADRON DE CABALLERIA AVELLANEDA – SARGENTO PRIMERO JUAN CARLOS CIGNONI": "AVELLANEDA",
            "FUERZA BARRIAL de APROXIMACION (F.B.A.) - XIV AVELLANEDA": "AVELLANEDA",
            "GRUPO DE APOYO DEPARTAMENTAL AVELLANEDA": "AVELLANEDA",
            "POLICIA DEP. DE SEG. AVELLANEDA": "AVELLANEDA",
            "UNIDAD DE POLICIA DE PREVENCION LOCAL AVELLANEDA": "AVELLANEDA",
            "CENTRO DE ENTRENAMIENTO SEDE DESCENTRALIZADA AVELLANEDA": "AVELLANEDA",
            "COMANDO DE PREVENCION RURAL AYACUCHO": "AYACUCHO",
            "CRIA. DE LA MUJER Y LA FAMILIA AYACUCHO": "AYACUCHO",
            "ESTACION DE POLICIA DE SEGURIDAD COMUNAL AYACUCHO": "AYACUCHO",
            "JEF. DE POLICIA DE SEGURIDAD COMUNAL AYACUCHO": "AYACUCHO",
            "COMANDO DE PATRULLAS AZUL": "AZUL",
            "COMANDO DE PREVENCION RURAL AZUL": "AZUL",
            "CRIA. AZUL": "AZUL",
            "CRIA. DE LA MUJER Y LA FAMILIA AZUL": "AZUL",
            "CUARTEL DE BOMBEROS AZUL": "AZUL",
            "DEL. DEP. INVEST. TRAFICO DROGAS ILICITAS Y CRIMEN ORG. AZUL": "AZUL",
            "DEL. DEP. INVEST. TRAFICO DROGAS AZUL": "AZUL",
            "DEL. DEP. POLICIA CIENTIFICA AZUL": "AZUL",
            "DEST. INFANTERIA AZUL": "AZUL",
            "DEST. VIAL AZUL": "AZUL",
            "DIV. DEPTO. CUSTODIA DETENIDOS AZUL": "AZUL",
        },
        MUNICIPIO_A_COBERTURA_MAP: {
            "25 DE MAYO": "Interior",
            "9 DE JULIO": "Interior",
            "ADOLFO ALSINA": "Interior",
            "ADOLFO GONZALES CHAVES": "Interior",
            "ALBERTI": "Interior",
            "ALMIRANTE BROWN": "Conurbano",
            "ARRECIFES": "Interior",
            "AVELLANEDA": "Conurbano",
            "AYACUCHO": "Interior",
            "AZUL": "Interior",
            "BAHIA BLANCA": "Interior",
            "BALCARCE": "Interior",
            "BARADERO": "Interior",
            "BENITO JUAREZ": "Interior",
            "BERAZATEGUI": "Conurbano",
            "BERISSO": "Conurbano",
            "BOLIVAR": "Interior",
            "BRAGADO": "Interior",
            "CAMPANA": "Interior",
            "CAÑUELAS": "Conurbano",
            "CAPITAN SARMIENTO": "Interior",
            "CARLOS CASARES": "Interior",
            "CARLOS PELLEGRINI": "Interior",
            "CARLOS TEJEDOR": "Interior",
            "CARMEN DE ARECO": "Interior",
            "CARMEN DE PATAGONES": "Interior",
            "CASTELLI": "Interior",
            "CHACABUCO": "Interior",
            "CHASCOMUS": "Interior",
            "CHIVILCOY": "Interior",
            "COLON": "Interior",
            "CORONEL BRANDSEN": "Conurbano",
            "CORONEL DORREGO": "Interior",
            "CORONEL PRINGLES": "Interior",
            "CORONEL ROSALES": "Interior",
            "CORONEL SUAREZ": "Interior",
            "DAIREAUX": "Interior",
            "DOLORES": "Interior",
            "ENSENADA": "Conurbano",
            "ESCOBAR": "Conurbano",
            "ESTEBAN ECHEVERRIA": "Conurbano",
            "EXALTACION DE LA CRUZ": "Conurbano",
            "EZEIZA": "Conurbano",
            "FLORENCIO VARELA": "Conurbano",
            "FLORENTINO AMEGHINO": "Interior",
            "GENERAL ALVARADO": "Interior",
            "GENERAL ALVEAR": "Interior",
            "GENERAL ARENALES": "Interior",
            "GENERAL BELGRANO": "Conurbano",
            "GENERAL GUIDO": "Interior",
            "GENERAL LAMADRID": "Interior",
            "GENERAL LAS HERAS": "Conurbano",
            "GENERAL LAVALLE": "Interior",
            "GENERAL MADARIAGA": "Interior",
            "GENERAL PAZ": "Conurbano",
            "GENERAL PINTO": "Interior",
            "GENERAL PUEYRREDON": "Interior",
            "GENERAL RODRIGUEZ": "Conurbano",
            "GENERAL SAN MARTIN": "Conurbano",
            "GENERAL VIAMONTE": "Interior",
            "GENERAL VILLEGAS": "Interior",
            "GUAMINI": "Interior",
            "HIPOLITO YRIGOYEN": "Interior",
            "HURLINGHAM": "Conurbano",
            "ITUZAINGO": "Conurbano",
            "JOSE C. PAZ": "Conurbano",
            "JUNIN": "Interior",
            "LA COSTA": "Interior",
            "LA MATANZA": "Conurbano",
            "LA PLATA": "Conurbano",
            "LANUS": "Conurbano",
            "LAPRIDA": "Interior",
            "LAS FLORES": "Interior",
            "LEANDRO N. ALEM": "Interior",
            "LEZAMA": "Interior",
            "LINCOLN": "Interior",
            "LOBERIA": "Interior",
            "LOBOS": "Conurbano",
            "LOMAS DE ZAMORA": "Conurbano",
            "LUJAN": "Conurbano",
            "MAGDALENA": "Conurbano",
            "MAIPU": "Interior",
            "MALVINAS ARGENTINAS": "Conurbano",
            "MAR CHIQUITA": "Interior",
            "MARCOS PAZ": "Conurbano",
            "MERCEDES": "Conurbano",
            "MERLO": "Conurbano",
            "MONTE HERMOSO": "Interior",
            "MORENO": "Conurbano",
            "MORON": "Conurbano",
            "NAVARRO": "Interior",
            "NECOCHEA": "Interior",
            "OLAVARRIA": "Interior",
            "PEHUAJO": "Interior",
            "PERGAMINO": "Interior",
            "PILA": "Interior",
            "PILAR": "Conurbano",
            "PINAMAR": "Interior",
            "PRESIDENTE PERON": "Conurbano",
            "PUAN": "Interior",
            "PUNTA INDIO": "Conurbano",
            "QUILMES": "Conurbano",
            "RAMALLO": "Interior",
            "RAUCH": "Interior",
            "RIVADAVIA": "Interior",
            "ROJAS": "Interior",
            "ROQUE PEREZ": "Interior",
            "SAAVEDRA": "Interior",
            "SALADILLO": "Interior",
            "SALLIQUELO": "Interior",
            "SALTO": "Interior",
            "SAN ANDRES DE GILES": "Interior",
            "SAN ANTONIO DE ARECO": "Interior",
            "SAN CAYETANO": "Interior",
            "SAN FERNANDO": "Conurbano",
            "SAN ISIDRO": "Conurbano",
            "SAN MIGUEL": "Conurbano",
            "SAN MIGUEL DEL MONTE": "Conurbano",
            "SAN NICOLAS": "Interior",
            "SAN PEDRO": "Interior",
            "SAN VICENTE": "Conurbano",
            "SUIPACHA": "Interior",
            "TANDIL": "Interior",
            "TAPALQUE": "Interior",
            "TIGRE": "Conurbano",
            "TORDILLO": "Interior",
            "TORNQUIST": "Interior",
            "TRENQUE LAUQUEN": "Interior",
            "TRES ARROYOS": "Interior",
            "TRES DE FEBRERO": "Conurbano",
            "TRES LOMAS": "Interior",
            "VICENTE LOPEZ": "Conurbano",
            "VILLA GESELL": "Interior",
            "VILLARINO": "Interior",
            "ZARATE": "Interior"
        },
        MUNICIPIO_COORDINATES: {
            "25 DE MAYO": [-35.4308, -59.7718],
            "9 DE JULIO": [-35.4445, -60.8839],
            "ADOLFO ALSINA": [-37.1833, -62.9],
            "ADOLFO GONZALES CHAVES": [-38.0333, -60.1],
            "ALBERTI": [-35.0333, -60.2833],
            "ALMIRANTE BROWN": [-34.8202, -58.3842],
            "ARRECIFES": [-34.0642, -60.1033],
            "AVELLANEDA": [-34.6653, -58.3667],
            "AYACUCHO": [-37.1528, -58.4892],
            "AZUL": [-36.7769, -59.8586],
            "BAHIA BLANCA": [-38.7196, -62.2724],
            "BALCARCE": [-37.8444, -58.2556],
            "BARADERO": [-33.8119, -59.505],
            "BENITO JUAREZ": [-37.6761, -59.7903],
            "BERAZATEGUI": [-34.7667, -58.2167],
            "BERISSO": [-34.8667, -57.8833],
            "BOLIVAR": [-36.2333, -61.1167],
            "BRAGADO": [-35.1167, -60.4833],
            "CAMPANA": [-34.1683, -58.9592],
            "CAÑUELAS": [-35.0531, -58.7606],
            "CAPITAN SARMIENTO": [-34.1706, -59.7892],
            "CARLOS CASARES": [-35.6211, -61.3658],
            "CARLOS PELLEGRINI": [-36.2667, -63.1667],
            "CARLOS TEJEDOR": [-35.4167, -62.4167],
            "CARMEN DE ARECO": [-34.3792, -59.8208],
            "CARMEN DE PATAGONES": [-40.8, -62.9833],
            "CASTELLI": [-36.0911, -57.8039],
            "CHACABUCO": [-34.6417, -60.4731],
            "CHASCOMUS": [-35.5767, -58.0169],
            "CHIVILCOY": [-34.8972, -60.0167],
            "COLON": [-33.8967, -61.0967],
            "CORONEL BRANDSEN": [-35.1667, -58.2333],
            "CORONEL DORREGO": [-38.7167, -61.2833],
            "CORONEL PRINGLES": [-37.9833, -61.35],
            "CORONEL ROSALES": [-38.9, -61.7667],
            "CORONEL SUAREZ": [-37.45, -61.9333],
            "DAIREAUX": [-36.6, -61.75],
            "DOLORES": [-36.315, -57.6789],
            "ENSENADA": [-34.8564, -57.9097],
            "ESCOBAR": [-34.3494, -58.7958],
            "ESTEBAN ECHEVERRIA": [-34.8167, -58.4833],
            "EXALTACION DE LA CRUZ": [-34.2833, -59.1333],
            "EZEIZA": [-34.855, -58.5244],
            "FLORENCIO VARELA": [-34.8167, -58.2833],
            "FLORENTINO AMEGHINO": [-34.8417, -62.4633],
            "GENERAL ALVARADO": [-38.2667, -57.8333],
            "GENERAL ALVEAR": [-36.0167, -60.0167],
            "GENERAL ARENALES": [-34.2981, -61.3006],
            "GENERAL BELGRANO": [-35.7667, -58.5],
            "GENERAL GUIDO": [-36.65, -57.7833],
            "GENERAL LAMADRID": [-37.25, -61.5333],
            "GENERAL LAS HERAS": [-34.9333, -58.95],
            "GENERAL LAVALLE": [-36.4, -56.9333],
            "GENERAL MADARIAGA": [-37.0, -57.1333],
            "GENERAL PAZ": [-35.4833, -58.4167],
            "GENERAL PINTO": [-34.7667, -61.8333],
            "GENERAL PUEYRREDON": [-38.0055, -57.5426],
            "GENERAL RODRIGUEZ": [-34.6, -58.95],
            "GENERAL SAN MARTIN": [-34.577, -58.5373],
            "GENERAL VIAMONTE": [-34.9833, -61.05],
            "GENERAL VILLEGAS": [-35.0333, -63.0167],
            "GUAMINI": [-37.0167, -62.4167],
            "HIPOLITO YRIGOYEN": [-36.2917, -61.7125],
            "HURLINGHAM": [-34.595, -58.6369],
            "ITUZAINGO": [-34.65, -58.6667],
            "JOSE C. PAZ": [-34.5167, -58.7667],
            "JUNIN": [-34.5833, -60.95],
            "LA COSTA": [-36.5667, -56.6833],
            "LA MATANZA": [-34.75, -58.65],
            "LA PLATA": [-34.9206, -57.9536],
            "LANUS": [-34.7, -58.4],
            "LAPRIDA": [-37.55, -60.8],
            "LAS FLORES": [-36.0167, -59.1],
            "LEANDRO N. ALEM": [-34.4667, -61.4],
            "LEZAMA": [-35.8833, -57.85],
            "LINCOLN": [-34.8667, -61.5333],
            "LOBERIA": [-38.1667, -58.7833],
            "LOBOS": [-35.1833, -59.1],
            "LOMAS DE ZAMORA": [-34.7667, -58.4],
            "LUJAN": [-34.5667, -59.1],
            "MAGDALENA": [-35.0833, -57.5167],
            "MAIPU": [-36.8667, -57.8833],
            "MALVINAS ARGENTINAS": [-34.505, -58.708],
            "MAR CHIQUITA": [-37.6, -57.4333],
            "MARCOS PAZ": [-34.7833, -58.8333],
            "MERCEDES": [-34.65, -59.4333],
            "MERLO": [-34.6667, -58.7333],
            "MONTE HERMOSO": [-38.9833, -61.2833],
            "MORENO": [-34.6333, -58.7833],
            "MORON": [-34.653, -58.6193],
            "NAVARRO": [-35.0, -59.2667],
            "NECOCHEA": [-38.55, -58.7333],
            "OLAVARRIA": [-36.8927, -60.3225],
            "PEHUAJO": [-35.8, -61.9],
            "PERGAMINO": [-33.8931, -60.5736],
            "PILA": [-36.0, -58.1333],
            "PILAR": [-34.4592, -58.9119],
            "PINAMAR": [-37.1083, -56.8617],
            "PRESIDENTE PERON": [-34.95, -58.4],
            "PUAN": [-37.55, -62.7667],
            "PUNTA INDIO": [-35.2833, -57.25],
            "QUILMES": [-34.7167, -58.2667],
            "RAMALLO": [-33.4833, -60.0],
            "RAUCH": [-36.75, -59.0833],
            "RIVADAVIA": [-35.4833, -62.9667],
            "ROJAS": [-34.2, -60.7333],
            "ROQUE PEREZ": [-35.4, -59.3167],
            "SAAVEDRA": [-37.5333, -62.3333],
            "SALADILLO": [-35.6333, -59.7833],
            "SALLIQUELO": [-36.75, -62.95],
            "SALTO": [-34.2922, -60.2542],
            "SAN ANDRES DE GILES": [-34.4447, -59.4442],
            "SAN ANTONIO DE ARECO": [-34.2467, -59.475],
            "SAN CAYETANO": [-38.35, -59.6],
            "SAN FERNANDO": [-34.4408, -58.5608],
            "SAN ISIDRO": [-34.4667, -58.5167],
            "SAN MIGUEL": [-34.542, -58.712],
            "SAN MIGUEL DEL MONTE": [-35.4333, -58.8],
            "SAN NICOLAS": [-33.3328, -60.2133],
            "SAN PEDRO": [-33.6775, -59.6633],
            "SAN VICENTE": [-35.0167, -58.4167],
            "SUIPACHA": [-34.7667, -59.6833],
            "TANDIL": [-37.3217, -59.1332],
            "TAPALQUE": [-36.3667, -60.0167],
            "TIGRE": [-34.425, -58.5792],
            "TORDILLO": [-36.5, -57.1],
            "TORNQUIST": [-38.1, -62.2167],
            "TRENQUE LAUQUEN": [-35.9667, -62.7333],
            "TRES ARROYOS": [-38.3667, -60.2667],
            "TRES DE FEBRERO": [-34.606, -58.572],
            "TRES LOMAS": [-36.4667, -62.8667],
            "VICENTE LOPEZ": [-34.526, -58.489],
            "VILLA GESELL": [-37.263, -56.973],
            "VILLARINO": [-38.8333, -63.2833],
            "ZARATE": [-34.098, -59.028]
        }
    },

    // Estado de la aplicación
    state: {
        allVehicles: [],
        allEquipment: [],
        mergedData: [],
        municipalityVehicleCount: {},
        dateRange: { start: new Date(), end: new Date() },
        minDate: null,
        maxDate: null,
        activeFilters: {
            dependencies: new Set(),
            municipalities: new Set(),
            coverages: new Set(),
            technicians: new Set(),
        },
        activeEquipmentFilters: {
            types: new Set(),
        },
        kpiView: 'total', // 'total', 'reported', 'notReported'
        sortConfig: { key: 'dep', direction: 'asc' },
        chartInstance: null,
        equipmentChartInstance: null,
        mapInstance: null,
        mapMarkersGroup: null,
        equipmentMapInstance: null,
        equipmentMapMarkersGroup: null,
        plannerMapInstance: null,
        tripPlannerMapInstance: null,
        tripPlannerMarkers: {},
        tripPlannerRouteLayer: null,
        manualAssignments: {},
        assignments: {}, // Mapa de {municipio: techName}
        plannerTempAssignments: {},
        plannerTechnicianMarkers: null,
        plannerMunicipalityMarkers: null,
        tripPlannerState: {
            technician: null,
            destinations: new Set(),
        },
        tripPlannerResults: null,
    },

    // Elementos del DOM cacheados
    elements: {},

    // Inicializador
    init() {
        this.loadAssignments();
        this.calculateAndStoreAssignments();
        this.cacheDOMElements();
        this.bindEvents();
        this.initMap();
    },

    cacheDOMElements() {
        this.elements = {
            fileInput: document.getElementById('fileInput'),
            fileName: document.getElementById('fileName'),
            reportsFilters: document.getElementById('reports-filters'),
            quickRangeSelect: document.getElementById('quick-range-select'),
            startDateInput: document.getElementById('start-date'),
            endDateInput: document.getElementById('end-date'),
            depFilterContainer: document.getElementById('dependency-filter-container'),
            muniFilterContainer: document.getElementById('municipality-filter-container'),
            covFilterContainer: document.getElementById('coverage-filter-container'),
            technicianFilterContainer: document.getElementById('technician-filter-container'),
            equipmentFilterContainer: document.getElementById('equipment-filter-container'),
            
            tabReports: document.getElementById('tab-reports'),
            tabEquipment: document.getElementById('tab-equipment'),
            reportsDashboard: document.getElementById('reports-dashboard'),
            equipmentDashboard: document.getElementById('equipment-dashboard'),
            equipmentFileInputContainer: document.getElementById('equipment-file-input-container'),
            
            welcomeScreen: document.getElementById('welcome-screen'),
            dashboardContent: document.getElementById('dashboard-content'),
            
            equipmentWelcomeScreen: document.getElementById('equipment-welcome-screen'),
            equipmentContent: document.getElementById('equipment-content'),
            kpiUniqueVehicles: document.getElementById('kpi-unique-vehicles'),
            kpiTotalEquipment: document.getElementById('kpi-total-equipment'),
            kpiEquipTypesSelected: document.getElementById('kpi-equip-types-selected'),
            equipmentChart: document.getElementById('equipmentChart'),
            equipmentMap: document.getElementById('equipment-map'),
            equipmentTableContainer: document.getElementById('equipmentTable-container'),
            exportEquipmentBtn: document.getElementById('export-equipment-btn'),

            kpiTotal: document.getElementById('kpi-total'),
            kpiReported: document.getElementById('kpi-reported'),
            kpiNotReported: document.getElementById('kpi-not-reported'),
            reportChart: document.getElementById('reportChart'),
            map: document.getElementById('map'),
            reportTableContainer: document.getElementById('reportTable-container'),
            tableHeaderToggle: document.getElementById('table-header-toggle'),
            exportAllDetailsBtn: document.getElementById('export-all-details-btn'),
            tableToggleIcon: document.getElementById('table-toggle-icon'),
            modal: document.getElementById('vehicle-detail-modal'),
            modalTitle: document.getElementById('modal-title'),
            modalSubtitle: document.getElementById('modal-subtitle'),
            modalCloseBtn: document.getElementById('modal-close-btn'),
            modalSearch: document.getElementById('modal-search'),
            modalExportBtn: document.getElementById('modal-export-btn'),
            zonePlannerBtn: document.getElementById('zone-planner-btn'),
            zonePlannerModal: document.getElementById('zone-planner-modal'),
            zonePlannerCloseBtn: document.getElementById('zone-planner-close-btn'),
            plannerMap: document.getElementById('planner-map'),
            plannerSummary: document.getElementById('planner-summary'),
            zonePlannerSaveBtn: document.getElementById('zone-planner-save-btn'),
            zonePlannerResetBtn: document.getElementById('zone-planner-reset-btn'),
            zonePlannerCancelBtn: document.getElementById('zone-planner-cancel-btn'),
            zonePlannerExportBtn: document.getElementById('zone-planner-export-btn'),
            tripPlannerBtn: document.getElementById('trip-planner-btn'),
            tripPlannerModal: document.getElementById('trip-planner-modal'),
            tripPlannerMap: document.getElementById('trip-planner-map'),
            tripPlannerCloseBtn: document.getElementById('trip-planner-close-btn'),
            tripPlannerCancelBtn: document.getElementById('trip-planner-cancel-btn'),
            tripPlannerResetBtn: document.getElementById('trip-planner-reset-btn'),
            tripPlannerCalculateBtn: document.getElementById('trip-planner-calculate-btn'),
            tripPlannerExportBtn: document.getElementById('trip-planner-export-btn'),
            tripTechnicianSelect: document.getElementById('trip-technician'),
            destinationSearchInput: document.getElementById('destination-search'),
            destinationSuggestions: document.getElementById('destination-suggestions'),
            tripDestinationsList: document.getElementById('trip-destinations-list'),
            tripResultsContainer: document.getElementById('trip-results-container'),
            tripResultsPlaceholder: document.getElementById('trip-results-placeholder'),
            tripResultsContent: document.getElementById('trip-results-content'),
        };
    },

    bindEvents() {
        this.elements.fileInput.addEventListener('change', this.handleFileChange.bind(this));
        this.elements.quickRangeSelect.addEventListener('change', this.handleQuickRangeChange.bind(this));
        this.elements.startDateInput.addEventListener('change', this.handleDateChange.bind(this));
        this.elements.endDateInput.addEventListener('change', this.handleDateChange.bind(this));
        
        this.elements.tabReports.addEventListener('click', () => this.setActiveTab('reports'));
        this.elements.tabEquipment.addEventListener('click', () => this.setActiveTab('equipment'));

        this.elements.kpiTotal.addEventListener('click', () => this.setKpiView('total'));
        this.elements.kpiReported.addEventListener('click', () => this.setKpiView('reported'));
        this.elements.kpiNotReported.addEventListener('click', () => this.setKpiView('notReported'));

        this.elements.tableHeaderToggle.querySelector('h2').addEventListener('click', this.toggleReportTable.bind(this));
        this.elements.tableToggleIcon.addEventListener('click', this.toggleReportTable.bind(this));
        this.elements.exportAllDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.exportAllDetailsData();
        });
        
        this.elements.exportEquipmentBtn.addEventListener('click', this.exportEquipmentData.bind(this));


        // Eventos del Modal de Detalles
        this.elements.modal.addEventListener('click', () => this.closeDetailModal());
        this.elements.modal.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
        this.elements.modalCloseBtn.addEventListener('click', () => this.closeDetailModal());
        this.elements.modalSearch.addEventListener('input', (e) => this.renderModalContent(this.state.selectedDepForDetail, e.target.value));
        this.elements.modalExportBtn.addEventListener('click', this.exportModalData.bind(this));

        // Eventos del Modal Planificador Zonas
        this.elements.zonePlannerBtn.addEventListener('click', this.openZonePlanner.bind(this));
        this.elements.zonePlannerModal.addEventListener('click', this.closeZonePlanner.bind(this));
        this.elements.zonePlannerModal.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
        this.elements.zonePlannerCloseBtn.addEventListener('click', this.closeZonePlanner.bind(this));
        this.elements.zonePlannerCancelBtn.addEventListener('click', this.closeZonePlanner.bind(this));
        this.elements.zonePlannerSaveBtn.addEventListener('click', this.saveAssignments.bind(this));
        this.elements.zonePlannerResetBtn.addEventListener('click', this.resetAssignments.bind(this));
        this.elements.zonePlannerExportBtn.addEventListener('click', this.exportZoneData.bind(this));

        // Eventos del Modal Planificador Viajes
        this.elements.tripPlannerBtn.addEventListener('click', this.openTripPlanner.bind(this));
        this.elements.tripPlannerModal.addEventListener('click', this.closeTripPlanner.bind(this));
        this.elements.tripPlannerModal.querySelector('.modal-content').addEventListener('click', e => e.stopPropagation());
        this.elements.tripPlannerCloseBtn.addEventListener('click', this.closeTripPlanner.bind(this));
        this.elements.tripPlannerCancelBtn.addEventListener('click', this.closeTripPlanner.bind(this));
        this.elements.tripPlannerResetBtn.addEventListener('click', this.resetTripPlanner.bind(this));
        this.elements.destinationSearchInput.addEventListener('input', this.handleDestinationSearch.bind(this));
        this.elements.destinationSearchInput.addEventListener('focus', this.handleDestinationSearch.bind(this));
        this.elements.tripDestinationsList.addEventListener('click', this.handleRemoveDestination.bind(this));
        this.elements.tripPlannerCalculateBtn.addEventListener('click', this.calculateTrip.bind(this));
        this.elements.tripPlannerExportBtn.addEventListener('click', this.exportTripData.bind(this));

        document.addEventListener('click', (e) => { // Hide suggestions when clicking outside
            if (!this.elements.destinationSearchInput.contains(e.target)) {
                this.elements.destinationSuggestions.classList.add('hidden');
            }
        });
    },

    setActiveTab(tabName) {
        if (tabName === 'reports') {
            this.elements.tabReports.classList.add('active');
            this.elements.tabEquipment.classList.remove('active');
            this.elements.reportsDashboard.classList.remove('hidden');
            this.elements.equipmentDashboard.classList.add('hidden');
            this.elements.reportsFilters.classList.remove('hidden');
            this.elements.equipmentFilterContainer.classList.add('hidden');
        } else if (tabName === 'equipment' && !this.elements.tabEquipment.disabled) {
            this.elements.tabReports.classList.remove('active');
            this.elements.tabEquipment.classList.add('active');
            this.elements.reportsDashboard.classList.add('hidden');
            this.elements.equipmentDashboard.classList.remove('hidden');
            this.elements.reportsFilters.classList.add('hidden');
            this.elements.equipmentFilterContainer.classList.remove('hidden');
            setTimeout(() => {
                if (this.state.equipmentMapInstance) this.state.equipmentMapInstance.invalidateSize();
            }, 100);
        }
    },
    
    // --- MANEJO DE DATOS ---
    handleFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;

        this.elements.welcomeScreen.innerHTML = `<p class="text-xl text-slate-500 animate-pulse">Cargando datos...</p>`;
        this.elements.fileName.textContent = `Archivo: ${file.name}`;
        
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                this.processCSVData(results.data);
                this.elements.welcomeScreen.classList.add('hidden');
                this.elements.dashboardContent.style.display = 'flex';
                this.elements.reportsFilters.classList.remove('hidden');
                this.renderEquipmentUploadUI();
            },
            error: (err) => {
                console.error("Error parsing CSV:", err);
                this.elements.welcomeScreen.innerHTML = `<p class="text-xl text-red-500">Error al cargar el archivo.</p>`;
            }
        });
    },

    renderEquipmentUploadUI() {
        this.elements.equipmentFileInputContainer.innerHTML = `
            <div class="border-t pt-4 mt-4">
                <label for="equipmentFileInput" class="w-full inline-block bg-teal-600 text-white text-center font-semibold p-2 rounded-md cursor-pointer hover:bg-teal-700 transition-colors">
                    Cargar CSV de Equipamiento
                </label>
                <input type="file" id="equipmentFileInput" accept=".csv" class="hidden">
                <p id="equipmentFileName" class="text-xs text-slate-500 mt-2 truncate"></p>
            </div>
        `;
        document.getElementById('equipmentFileInput').addEventListener('change', this.handleEquipmentFileChange.bind(this));
    },

    handleEquipmentFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;

        document.getElementById('equipmentFileName').textContent = `Archivo: ${file.name}`;
        
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const normalizedData = results.data.map(row => ({
                    idProducto: row.IDPRODUCTO,
                    descripcion: row.DESCRIPCION,
                    nroSerie: row.NROSERIE,
                    statusInstal: row["S.IDSTATUS||'-INSTAL"],
                    observacion: row.OBSERVACION,
                    patente: row.PATENTE,
                    idDataTrak: row.IDDATATRAK,
                    idro: row.IDRO,
                    codEquipo: row.COD_EQUIPO,
                    estadoMovil: row.ESTADO_MOVIL
                }));
                this.state.allEquipment = normalizedData.filter(e => e.patente);
                this.mergeDataAndInitEquipmentDashboard();
            },
            error: (err) => {
                console.error("Error parsing equipment CSV:", err);
                alert("Error al cargar el archivo de equipamiento.");
            }
        });
    },

    mergeDataAndInitEquipmentDashboard() {
        const patentToVehicleMap = new Map();
        this.state.allVehicles.forEach(v => {
            patentToVehicleMap.set(v.movil, v);
        });

        this.state.mergedData = this.state.allEquipment.map(equip => {
            const vehicleInfo = patentToVehicleMap.get(equip.patente);
            return {
                ...equip,
                dependencia: vehicleInfo ? vehicleInfo.dep : 'N/A',
                municipio: vehicleInfo ? vehicleInfo.municipio : 'N/A'
            };
        });

        this.elements.tabEquipment.disabled = false;
        this.elements.equipmentWelcomeScreen.classList.add('hidden');
        this.elements.equipmentContent.classList.remove('hidden');
        this.elements.equipmentContent.style.display = 'flex';
        
        this.initializeEquipmentFilters();
        this.initEquipmentMap();
        this.updateEquipmentDashboard();
    },

    processCSVData(data) {
        let tempMinDate = null;
        let tempMaxDate = null;

        // Completo el mapa de dependencias a municipios faltantes para robustez
        const allMunicipalities = new Set(Object.keys(this.dataMaps.MUNICIPIO_A_COBERTURA_MAP));
        allMunicipalities.forEach(muni => {
            const muniForRegex = muni.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(`\\b${muniForRegex}\\b`, 'i');
            data.forEach(row => {
                const dep = row["Dependencia"];
                if (dep && !this.dataMaps.DEPENDENCIA_A_MUNICIPIO_MAP[dep] && regex.test(dep)) {
                    this.dataMaps.DEPENDENCIA_A_MUNICIPIO_MAP[dep] = muni;
                }
            });
        });

        this.state.allVehicles = data.map(row => {
            const dep = row["Dependencia"] || "N/A";
            const municipio = this.dataMaps.DEPENDENCIA_A_MUNICIPIO_MAP[dep] || "SIN ASIGNAR";
            const cobertura = this.dataMaps.MUNICIPIO_A_COBERTURA_MAP[municipio] || "SIN ASIGNAR";
            const technician = this.state.assignments[municipio] || "Conurbano / S.A.";
            
            const fechaStr = row["Fecha del GPS"];
            let ts = null;
            if (fechaStr) {
                const match = fechaStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4}), (\d{1,2}):(\d{2}):(\d{2})/);
                if (match) {
                    const [_, dia, mes, anio, hora, minuto, segundo] = match;
                    const fecha = new Date(+anio, +mes - 1, +dia, +hora, +minuto, +segundo);
                    if (!isNaN(fecha.getTime())) {
                        ts = fecha.getTime();
                        if (!tempMinDate || fecha < tempMinDate) tempMinDate = fecha;
                        if (!tempMaxDate || fecha > tempMaxDate) tempMaxDate = fecha;
                    }
                }
            }

            return { dep, movil: row["Patente"] || "N/A", nombre: row["Nombre"] || "", ts, fechaStr: fechaStr || "", municipio, cobertura, technician };
        }).filter(v => v.dep !== "N/A");

        const municipalityVehicleCount = {};
        this.state.allVehicles.forEach(v => {
            if (v.municipio && v.municipio !== 'SIN ASIGNAR') {
                municipalityVehicleCount[v.municipio] = (municipalityVehicleCount[v.municipio] || 0) + 1;
            }
        });
        this.state.municipalityVehicleCount = municipalityVehicleCount;

        this.state.minDate = tempMinDate || new Date();
        this.state.maxDate = tempMaxDate || new Date();
        
        this.setDateRange(this.state.minDate, this.state.maxDate);
        this.updateDateInputs();
        this.initializeFilters();
        
        this.updateDashboard();

        setTimeout(() => {
            if (this.state.mapInstance) this.state.mapInstance.invalidateSize();
        }, 100);
    },
    
    // --- MANEJO DE FILTROS Y ESTADO ---
    
    setDateRange(start, end) {
        const startDate = new Date(start);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(end);
        endDate.setHours(23, 59, 59, 999);
        this.state.dateRange = { start: startDate, end: endDate };
    },

    updateDateInputs() {
        const formatDate = date => date.toISOString().split('T')[0];
        this.elements.startDateInput.value = formatDate(this.state.dateRange.start);
        this.elements.endDateInput.value = formatDate(this.state.dateRange.end);
        this.elements.startDateInput.min = formatDate(this.state.minDate);
        this.elements.startDateInput.max = formatDate(this.state.maxDate);
        this.elements.endDateInput.min = formatDate(this.state.minDate);
        this.elements.endDateInput.max = formatDate(this.state.maxDate);
    },

    handleDateChange() {
        this.setDateRange(this.elements.startDateInput.value, this.elements.endDateInput.value);
        this.elements.quickRangeSelect.value = 'todo';
        this.updateDashboard();
    },

    handleQuickRangeChange(e) {
        const value = e.target.value;
        const end = new Date(this.state.maxDate);
        let start;

        switch (value) {
            case 'hoy': start = new Date(end); break;
            case '7dias': start = new Date(end); start.setDate(end.getDate() - 6); break;
            case '30dias': start = new Date(end); start.setDate(end.getDate() - 29); break;
            default: start = new Date(this.state.minDate); break;
        }
        this.setDateRange(start, end);
        this.updateDateInputs();
        this.updateDashboard();
    },

    initializeFilters() {
        const deps = new Set(), munis = new Set(), covs = new Set(), techs = new Set();
        this.state.allVehicles.forEach(v => {
            deps.add(v.dep);
            if(v.municipio !== 'SIN ASIGNAR') munis.add(v.municipio);
            if(v.cobertura !== 'SIN ASIGNAR') covs.add(v.cobertura);
            techs.add(v.technician);
        });
        
        this.state.availableFilters = {
            dependencies: Array.from(deps).sort(),
            municipalities: Array.from(munis).sort(),
            coverages: Array.from(covs).sort(),
            technicians: Array.from(techs).sort(),
        };

        this.state.activeFilters = {
            dependencies: new Set(this.state.availableFilters.dependencies),
            municipalities: new Set(this.state.availableFilters.municipalities),
            coverages: new Set(this.state.availableFilters.coverages),
            technicians: new Set(this.state.availableFilters.technicians),
        };

        this.renderFilterLists();
    },

    setKpiView(view) {
        this.state.kpiView = view;
        this.updateDashboard();
    },
    
    getProcessedData() {
        const { start, end } = this.state.dateRange;
        const startTs = start.getTime();
        const endTs = end.getTime();
        const { dependencies, municipalities, coverages, technicians } = this.state.activeFilters;

        const filteredVehicles = this.state.allVehicles.filter(v =>
            dependencies.has(v.dep) &&
            municipalities.has(v.municipio) &&
            coverages.has(v.cobertura) &&
            technicians.has(v.technician)
        );

        const summaryMap = {};
        const depToMuniMap = {};
        filteredVehicles.forEach(v => {
            if (!summaryMap[v.dep]) {
                summaryMap[v.dep] = { total: 0, reported: 0 };
                depToMuniMap[v.dep] = v.municipio;
            }
            summaryMap[v.dep].total++;
            if (v.ts && v.ts >= startTs && v.ts <= endTs) {
                summaryMap[v.dep].reported++;
            }
        });

        const summary = Object.entries(summaryMap).map(([dep, data]) => ({
            dep, ...data, notReported: data.total - data.reported,
        }));
        
        const kpis = summary.reduce(
            (acc, s) => ({
                total: acc.total + s.total,
                reported: acc.reported + s.reported,
                notReported: acc.notReported + s.notReported,
            }), { total: 0, reported: 0, notReported: 0 }
        );

        const muniSummary = summary.reduce((acc, depData) => {
            const muni = depToMuniMap[depData.dep];
            if (muni && muni !== 'SIN ASIGNAR') {
                if (!acc[muni]) acc[muni] = { total: 0, reported: 0, notReported: 0 };
                acc[muni].total += depData.total;
                acc[muni].reported += depData.reported;
                acc[muni].notReported += depData.notReported;
            }
            return acc;
        }, {});

        return { summary, kpis, vehicles: filteredVehicles, muniSummary };
    },

    updateDashboard() {
        if (!this.state.allVehicles.length) return;
        const data = this.getProcessedData();
        this.updateKpiCards(data.kpis);
        this.updateReportTable(data.summary);
        this.updateReportChart(data.summary);
        this.updateMap(data.muniSummary);
    },

    updateKpiCards(kpis) {
        const renderCard = (el, title, value, color = 'text-slate-800') => {
            el.innerHTML = `
                <h3 class="text-base sm:text-lg font-semibold text-slate-600">${title}</h3>
                <p class="text-2xl sm:text-3xl font-bold ${color}">${value.toLocaleString()}</p>
            `;
        };
        renderCard(this.elements.kpiTotal, 'Total de móviles', kpis.total);
        renderCard(this.elements.kpiReported, 'Reportaron', kpis.reported, 'text-green-600');
        renderCard(this.elements.kpiNotReported, 'No reportaron', kpis.notReported, 'text-red-600');
        
        ['total', 'reported', 'not-reported'].forEach(type => document.getElementById(`kpi-${type}`).classList.remove('ring-4', 'ring-blue-500', 'shadow-lg'));
        const activeCard = document.getElementById(`kpi-${this.state.kpiView.replace('N','-n')}`);
        if(activeCard) activeCard.classList.add('ring-4', 'ring-blue-500', 'shadow-lg');
    },

    updateReportTable(summary) {
        const { key, direction } = this.state.sortConfig;
        
        const getSortIndicator = (headerKey) => (key !== headerKey) ? '' : (direction === 'asc' ? ' ▲' : ' ▼');

        let data = summary;
        if (this.state.kpiView === 'reported') data = data.filter(d => d.reported > 0);
        if (this.state.kpiView === 'notReported') data = data.filter(d => d.notReported > 0);
        
        data.sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        
        const totals = data.reduce((acc, item) => ({
            total: acc.total + item.total,
            reported: acc.reported + item.reported,
            notReported: acc.notReported + item.notReported
        }), { total: 0, reported: 0, notReported: 0 });

        const headers = [
            { key: 'dep', label: 'Dependencia', className: 'text-left' },
            { key: 'total', label: 'Total móviles', className: 'text-right' },
            { key: 'reported', label: 'Reportaron', className: 'text-right' },
            { key: 'notReported', label: 'No reportaron', className: 'text-right' }
        ];

        this.elements.reportTableContainer.innerHTML = `
            <table class="w-full text-sm text-left text-slate-500">
                <thead class="text-xs text-sky-800 uppercase bg-sky-100 font-semibold">
                    <tr>${headers.map(h => `<th scope="col" class="px-6 py-3 cursor-pointer select-none ${h.className}" data-sortkey="${h.key}">${h.label}${getSortIndicator(h.key)}</th>`).join('')}</tr>
                </thead>
                <tbody>
                    ${data.map(d => `
                        <tr class="bg-white border-b hover:bg-slate-50 cursor-pointer" data-dep='${JSON.stringify(d)}'>
                            <th scope="row" class="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">${d.dep}</th>
                            <td class="px-6 py-4 text-right">${d.total.toLocaleString()}</td>
                            <td class="px-6 py-4 text-green-600 font-semibold text-right">${d.reported.toLocaleString()}</td>
                            <td class="px-6 py-4 text-red-600 font-semibold text-right">${d.notReported.toLocaleString()}</td>
                        </tr>`).join('')}
                </tbody>
                <tfoot class="bg-slate-200 font-semibold text-slate-800">
                    <tr>
                        <td class="px-6 py-3 text-left">Totales</td>
                        <td class="px-6 py-3 text-right">${totals.total.toLocaleString()}</td>
                        <td class="px-6 py-3 text-green-700 text-right">${totals.reported.toLocaleString()}</td>
                        <td class="px-6 py-3 text-red-700 text-right">${totals.notReported.toLocaleString()}</td>
                    </tr>
                </tfoot>
            </table>
            ${data.length === 0 ? '<p class="text-center p-4 text-slate-500">No hay datos para mostrar.</p>' : ''}
        `;
        
        this.elements.reportTableContainer.querySelectorAll('th[data-sortkey]').forEach(th => th.addEventListener('click', (e) => {
            const newKey = e.currentTarget.dataset.sortkey;
            this.state.sortConfig = { key: newKey, direction: (key === newKey && direction === 'asc') ? 'desc' : 'asc' };
            this.updateReportTable(summary);
        }));
        
        this.elements.reportTableContainer.querySelectorAll('tr[data-dep]').forEach(row => row.addEventListener('click', (e) => this.openDetailModal(JSON.parse(e.currentTarget.dataset.dep))));
    },

    updateReportChart(summary) {
        const { kpiView } = this.state;
        let data = [...summary]
            .filter(d => (kpiView === 'reported' ? d.reported > 0 : (kpiView === 'notReported' ? d.notReported > 0 : true)))
            .sort((a, b) => b[kpiView === 'total' ? 'total' : kpiView] - a[kpiView === 'total' ? 'total' : kpiView])
            .slice(0, 10);

        const labels = data.map(d => d.dep);
        let datasets;
        switch (kpiView) {
            case 'reported': datasets = [{ label: 'Reportaron', data: data.map(d => d.reported), backgroundColor: '#16a34a' }]; break;
            case 'notReported': datasets = [{ label: 'No Reportaron', data: data.map(d => d.notReported), backgroundColor: '#dc2626' }]; break;
            default: datasets = [
                { label: 'Reportaron', data: data.map(d => d.reported), backgroundColor: '#16a34a' },
                { label: 'No Reportaron', data: data.map(d => d.notReported), backgroundColor: '#dc2626' }
            ];
        }

        if (this.state.chartInstance) this.state.chartInstance.destroy();
        this.state.chartInstance = new Chart(this.elements.reportChart, {
            type: 'bar', data: { labels, datasets },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { x: { stacked: kpiView === 'total', ticks: { autoSkip: false, maxRotation: 90, minRotation: 45 } }, y: { stacked: kpiView === 'total', beginAtZero: true } },
                onClick: (evt, elements) => { if (elements.length > 0) this.openDetailModal(data[elements[0].index]); },
                plugins: { tooltip: { callbacks: { label: ctx => `${ctx.dataset.label || ''}: ${ctx.parsed.y.toLocaleString()}` } } }
            }
        });
    },

    initMap() {
        if (!this.elements.map) return;
        this.state.mapInstance = L.map(this.elements.map).setView([-36.5, -60.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(this.state.mapInstance);
        this.state.mapMarkersGroup = L.layerGroup().addTo(this.state.mapInstance);
    },

    updateMap(muniData) {
        if (!this.state.mapInstance) return;
        this.state.mapMarkersGroup.clearLayers();
        const { kpiView } = this.state;

        Object.entries(muniData).forEach(([muni, data]) => {
            const coords = this.dataMaps.MUNICIPIO_COORDINATES[muni];
            if (coords) {
                const { count, colorClass } = {
                    reported: { count: data.reported, colorClass: 'marker-reported' },
                    notReported: { count: data.notReported, colorClass: 'marker-not-reported' },
                    total: { count: data.total, colorClass: 'marker-total' }
                }[kpiView];

                if (count > 0) {
                    const icon = L.divIcon({ className: `custom-div-icon ${colorClass}`, html: `<div class="marker-pin"></div><span>${count}</span>`, iconSize: [30, 42], iconAnchor: [15, 42] });
                    L.marker(coords, { icon })
                     .bindPopup(`<b>${muni}</b><br>Total: ${data.total.toLocaleString()}<br>Reportaron: ${data.reported.toLocaleString()}<br>No Reportaron: ${data.notReported.toLocaleString()}`)
                     .addTo(this.state.mapMarkersGroup);
                }
            }
        });
    },

    renderFilterLists() {
        this.elements.depFilterContainer.innerHTML = this.createFilterListHTML('Dependencias', this.state.availableFilters.dependencies, this.state.activeFilters.dependencies, 'dependencies');
        this.elements.muniFilterContainer.innerHTML = this.createFilterListHTML('Municipios', this.state.availableFilters.municipalities, this.state.activeFilters.municipalities, 'municipalities');
        this.elements.covFilterContainer.innerHTML = this.createFilterListHTML('Zonas (Cobertura)', this.state.availableFilters.coverages, this.state.activeFilters.coverages, 'coverages', 'h-auto');
        this.elements.technicianFilterContainer.innerHTML = this.createFilterListHTML('Técnicos', this.state.availableFilters.technicians, this.state.activeFilters.technicians, 'technicians', 'h-auto');
        this.bindFilterEvents();
    },
    
    createFilterListHTML(title, items, activeSet, category, heightClass = 'h-40') {
        const searchInputHTML = items.length > 10 ? `<input type="text" placeholder="Buscar..." data-category="${category}" class="filter-search border p-2 rounded w-full text-black bg-white mb-2 text-sm">` : '';
        return `
            <div>
                <label class="block font-semibold text-slate-700 mb-1">${title}</label>
                ${searchInputHTML}
                <div class="filter-list ${heightClass} overflow-y-auto border p-2 rounded bg-slate-50 text-sm" data-category="${category}">
                    ${items.map(item => `
                        <label class="flex items-center space-x-2 p-1 rounded hover:bg-slate-200 cursor-pointer">
                            <input type="checkbox" value="${item}" data-category="${category}" ${activeSet.has(item) ? 'checked' : ''} class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                            <span class="text-slate-800">${item}</span>
                        </label>
                    `).join('')}
                </div>
                <button class="select-all-btn mt-2 w-full bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm" data-category="${category}">Sel./Desel. Visibles</button>
            </div>`;
    },

    bindFilterEvents() {
        document.querySelectorAll('.filter-search').forEach(input => input.addEventListener('input', this.handleFilterSearch.bind(this)));
        document.querySelectorAll('.filter-list input[type="checkbox"]').forEach(cb => {
            if (['dependencies', 'municipalities', 'coverages', 'technicians'].includes(cb.dataset.category)) {
                cb.addEventListener('change', this.handleFilterChange.bind(this));
            } else if (cb.dataset.category === 'equipmentTypes') {
                cb.addEventListener('change', this.handleEquipmentFilterChange.bind(this));
            }
        });
        document.querySelectorAll('.select-all-btn').forEach(btn => btn.addEventListener('click', this.handleSelectAllVisible.bind(this)));
    },
    
    handleFilterSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const category = e.target.dataset.category;
        document.querySelector(`.filter-list[data-category="${category}"]`).querySelectorAll('label').forEach(label => {
            label.style.display = label.querySelector('span').textContent.toLowerCase().includes(searchTerm) ? '' : 'none';
        });
    },

    handleFilterChange(e) {
        const { value, checked, dataset: { category } } = e.target;
        this.state.activeFilters[category][checked ? 'add' : 'delete'](value);
        this.updateDashboard();
    },
    
    handleEquipmentFilterChange(e) {
        const { value, checked } = e.target;
        this.state.activeEquipmentFilters.types[checked ? 'add' : 'delete'](value);
        this.updateEquipmentDashboard();
    },

    handleSelectAllVisible(e) {
        const category = e.target.dataset.category;
        const visibleCheckboxes = Array.from(document.querySelector(`.filter-list[data-category="${category}"]`).querySelectorAll('input[type="checkbox"]')).filter(cb => cb.closest('label').style.display !== 'none');
        const allVisibleSelected = visibleCheckboxes.every(cb => cb.checked);
        
        const isEquipmentFilter = category === 'equipmentTypes';
        const activeFilterSet = isEquipmentFilter ? this.state.activeEquipmentFilters.types : this.state.activeFilters[category];

        visibleCheckboxes.forEach(cb => {
            cb.checked = !allVisibleSelected;
            activeFilterSet[cb.checked ? 'add' : 'delete'](cb.value);
        });

        if (isEquipmentFilter) {
            this.updateEquipmentDashboard();
        } else {
            this.updateDashboard();
        }
    },
    
    // --- LÓGICA DEL MODAL ---
    
    openDetailModal(depData) {
        this.state.selectedDepForDetail = depData;
        this.elements.modalTitle.textContent = depData.dep;
        this.elements.modalSearch.value = '';
        this.renderModalContent(depData);
        this.elements.modal.classList.remove('hidden');
    },

    closeDetailModal() {
        this.elements.modal.classList.add('hidden');
        this.state.selectedDepForDetail = null;
    },

    renderModalContent(depData, searchTerm = '') {
        const { start, end } = this.state.dateRange;
        const startTs = start.getTime(), endTs = end.getTime();
        let vehicles = this.state.allVehicles.filter(v => v.dep === depData.dep);
        
        if (this.state.kpiView === 'reported') vehicles = vehicles.filter(v => v.ts && v.ts >= startTs && v.ts <= endTs);
        else if (this.state.kpiView === 'notReported') {
            const reported = new Set(vehicles.filter(v => v.ts && v.ts >= startTs && v.ts <= endTs).map(v => v.movil));
            vehicles = vehicles.filter(v => !reported.has(v.movil));
        }
        
        const total = vehicles.length;
        if (searchTerm) {
            const filter = searchTerm.toLowerCase();
            vehicles = vehicles.filter(v => v.movil.toLowerCase().includes(filter) || v.nombre.toLowerCase().includes(filter));
        }
        
        this.state.modalFilteredVehicles = vehicles;
        this.elements.modalSubtitle.textContent = `${{total: "Total", reported: "Reportaron", notReported: "No Reportaron"}[this.state.kpiView]} (${vehicles.length} de ${total})`;
        this.elements.modalTableContainer.innerHTML = `
            <table class="w-full text-sm text-left text-slate-500">
                <thead class="text-xs text-slate-700 uppercase bg-slate-100 sticky top-0"><tr><th class="px-6 py-3">Patente</th><th class="px-6 py-3">Nombre</th><th class="px-6 py-3">Fecha GPS</th></tr></thead>
                <tbody>${vehicles.map((v, i) => `<tr key="${v.movil}-${i}" class="bg-white border-b hover:bg-slate-50"><td class="px-6 py-4 font-medium text-slate-900">${v.movil}</td><td class="px-6 py-4">${v.nombre}</td><td class="px-6 py-4">${v.fechaStr||"-"}</td></tr>`).join('')}</tbody>
            </table>
            ${vehicles.length === 0 ? '<p class="text-center p-4 text-slate-500">No se encontraron vehículos.</p>' : ''}
        `;
    },

    exportModalData() {
        const csv = Papa.unparse(this.state.modalFilteredVehicles.map(v => ({
            'Dependencia': v.dep, 'Patente': v.movil, 'Nombre': v.nombre, 'Fecha GPS': v.fechaStr, 'Municipio': v.municipio, 'Cobertura': v.cobertura,
        })));
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
        link.download = `detalle_${this.state.selectedDepForDetail.dep.replace(/\s/g, '_')}.csv`;
        link.click();
    },

    exportAllDetailsData() {
        const { summary, vehicles } = this.getProcessedData();
        const { kpiView } = this.state;

        let visibleDepsData = summary;
        if (kpiView === 'reported') visibleDepsData = summary.filter(d => d.reported > 0);
        if (kpiView === 'notReported') visibleDepsData = summary.filter(d => d.notReported > 0);
        const visibleDeps = new Set(visibleDepsData.map(d => d.dep));

        const vehiclesToExport = vehicles.filter(v => visibleDeps.has(v.dep));
        
        if (vehiclesToExport.length === 0) {
            alert("No hay datos para exportar en la vista actual.");
            return;
        }

        const csvData = vehiclesToExport.map(v => ({
            'Dependencia': v.dep, 'Patente': v.movil, 'Nombre': v.nombre,
            'Fecha GPS': v.fechaStr, 'Municipio': v.municipio, 'Cobertura': v.cobertura, 'Técnico': v.technician,
        }));
        
        const csv = Papa.unparse(csvData);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
        link.download = `detalle_completo_${new Date().toISOString().slice(0,10)}.csv`;
        link.click();
    },

    toggleReportTable() {
        const isCollapsed = this.elements.reportTableContainer.style.maxHeight === '0px';
        this.elements.reportTableContainer.style.maxHeight = isCollapsed ? '2000px' : '0px'; 
        this.elements.tableToggleIcon.classList.toggle('rotate-180', !isCollapsed);
        this.elements.reportTableContainer.classList.toggle('mt-4', isCollapsed);
    },

    // --- DASHBOARD DE EQUIPAMIENTO ---

    getProcessedEquipmentData() {
        const { types } = this.state.activeEquipmentFilters;
        if (types.size === 0) return { filteredData: [], muniSummary: {} };

        const filteredData = this.state.mergedData.filter(item =>
            types.has(item.descripcion || 'Sin Descripción')
        );

        const muniSummary = filteredData.reduce((acc, item) => {
            if (item.municipio && item.municipio !== 'N/A') {
                acc[item.municipio] = (acc[item.municipio] || 0) + 1;
            }
            return acc;
        }, {});

        return { filteredData, muniSummary };
    },

    updateEquipmentDashboard() {
        if (!this.state.allEquipment.length) return;
        const { filteredData, muniSummary } = this.getProcessedEquipmentData();
        this.updateEquipmentKpis(filteredData);
        this.updateEquipmentChart(filteredData);
        this.updateEquipmentTable(filteredData);
        this.updateEquipmentMap(muniSummary);
    },
    
    initializeEquipmentFilters() {
        const types = new Set(this.state.mergedData.map(item => item.descripcion || 'Sin Descripción'));
        
        this.state.availableEquipmentFilters = {
            types: Array.from(types).sort(),
        };

        this.state.activeEquipmentFilters = {
            types: new Set(this.state.availableEquipmentFilters.types),
        };
        
        this.elements.equipmentFilterContainer.innerHTML = this.createFilterListHTML('Tipos de Equipo', this.state.availableEquipmentFilters.types, this.state.activeEquipmentFilters.types, 'equipmentTypes');
        this.bindFilterEvents();
    },

    updateEquipmentKpis(filteredData) {
        const uniqueVehicles = new Set(filteredData.map(d => d.patente));
        
        const renderCard = (el, title, value, color = 'text-slate-800') => {
            el.innerHTML = `
                <h3 class="text-base sm:text-lg font-semibold text-slate-600">${title}</h3>
                <p class="text-2xl sm:text-3xl font-bold ${color}">${value.toLocaleString()}</p>
            `;
        };
        
        renderCard(this.elements.kpiUniqueVehicles, 'Móviles Únicos', uniqueVehicles.size, 'text-green-600');
        renderCard(this.elements.kpiTotalEquipment, 'Equipos Totales', filteredData.length, 'text-slate-800');
        renderCard(this.elements.kpiEquipTypesSelected, 'Tipos Seleccionados', this.state.activeEquipmentFilters.types.size, 'text-blue-600');
    },

    updateEquipmentChart(filteredData) {
        const equipCounts = filteredData.reduce((acc, item) => {
            const desc = item.descripcion || 'Sin Descripción';
            acc[desc] = (acc[desc] || 0) + 1;
            return acc;
        }, {});
        
        const sortedEquip = Object.entries(equipCounts).sort(([,a],[,b]) => b-a);
        const labels = sortedEquip.map(([name]) => name);
        const data = sortedEquip.map(([,count]) => count);

        if (this.state.equipmentChartInstance) this.state.equipmentChartInstance.destroy();
        this.state.equipmentChartInstance = new Chart(this.elements.equipmentChart, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Cantidad de Móviles',
                    data,
                    backgroundColor: '#3b82f6',
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { 
                    y: { beginAtZero: true },
                    x: { ticks: { autoSkip: false, maxRotation: 90, minRotation: 45 } }
                },
                plugins: { legend: { display: false } }
            }
        });
    },

    updateEquipmentTable(filteredData) {
        const data = filteredData;
        this.elements.equipmentTableContainer.innerHTML = `
            <table class="w-full text-sm text-left text-slate-500">
                <thead class="text-xs text-sky-800 uppercase bg-sky-100 font-semibold sticky top-0">
                    <tr>
                        <th scope="col" class="px-6 py-3">Patente</th>
                        <th scope="col" class="px-6 py-3">Dependencia</th>
                        <th scope="col" class="px-6 py-3">Equipo</th>
                        <th scope="col" class="px-6 py-3">Nro. Serie</th>
                        <th scope="col" class="px-6 py-3">Estado Móvil</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(d => `
                        <tr class="bg-white border-b hover:bg-slate-50">
                            <td class="px-6 py-4 font-medium text-slate-900">${d.patente || 'N/A'}</td>
                            <td class="px-6 py-4">${d.dependencia}</td>
                            <td class="px-6 py-4">${d.descripcion || 'N/A'}</td>
                            <td class="px-6 py-4">${d.nroSerie || 'N/A'}</td>
                            <td class="px-6 py-4">${d.estadoMovil || 'N/A'}</td>
                        </tr>`).join('')}
                </tbody>
            </table>
            ${data.length === 0 ? '<p class="text-center p-4 text-slate-500">No hay datos para mostrar.</p>' : ''}
        `;
    },
    
    initEquipmentMap() {
        if (!this.elements.equipmentMap || this.state.equipmentMapInstance) return;
        this.state.equipmentMapInstance = L.map(this.elements.equipmentMap).setView([-36.5, -60.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.state.equipmentMapInstance);
        this.state.equipmentMapMarkersGroup = L.layerGroup().addTo(this.state.equipmentMapInstance);
    },

    updateEquipmentMap(muniSummary) {
        if (!this.state.equipmentMapInstance) return;
        this.state.equipmentMapMarkersGroup.clearLayers();
        
        Object.entries(muniSummary).forEach(([muni, count]) => {
            const coords = this.dataMaps.MUNICIPIO_COORDINATES[muni];
            if (coords && count > 0) {
                const icon = L.divIcon({ 
                    className: `custom-div-icon marker-total`, 
                    html: `<div class="marker-pin"></div><span>${count}</span>`, 
                    iconSize: [30, 42], 
                    iconAnchor: [15, 42] 
                });
                L.marker(coords, { icon })
                 .bindPopup(`<b>${muni}</b><br>Equipos: ${count.toLocaleString()}`)
                 .addTo(this.state.equipmentMapMarkersGroup);
            }
        });
    },
    
    exportEquipmentData() {
        const { filteredData } = this.getProcessedEquipmentData();
        if (filteredData.length === 0) {
            alert("No hay datos para exportar con los filtros actuales.");
            return;
        }

        const csvData = filteredData.map(d => ({
            'Patente': d.patente,
            'Dependencia': d.dependencia,
            'Municipio': d.municipio,
            'Tipo de Equipo': d.descripcion,
            'Numero de Serie': d.nroSerie,
            'Estado Movil': d.estadoMovil,
            'Observacion': d.observacion,
        }));
        
        const csv = Papa.unparse(csvData);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
        link.download = `detalle_equipamiento_${new Date().toISOString().slice(0,10)}.csv`;
        link.click();
    },

    // --- PLANIFICADOR DE ZONAS ---

    loadAssignments() {
        const saved = localStorage.getItem('gpsDashboardZoneAssignments');
        if (saved) {
            try {
                this.state.manualAssignments = JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing saved assignments:", e);
                this.state.manualAssignments = {};
            }
        }
    },

    reprocessVehicleTechnicians() {
        if (!this.state.allVehicles.length) return;
        this.state.allVehicles.forEach(v => {
            v.technician = this.state.assignments[v.municipio] || "Conurbano / S.A.";
        });
        // After reprocessing, we need to update filters and dashboard
        this.initializeFilters();
        this.updateDashboard();
    },

    calculateAndStoreAssignments() {
        const autoAssignments = this.getAutoAssignments();
        const finalAssignments = { ...autoAssignments, ...this.state.manualAssignments };

        const assignmentsByName = {};
        const techMapById = Object.fromEntries(this.dataMaps.technicians.map(t => [t.id, t.name]));
        
        for (const muni in finalAssignments) {
            const techId = finalAssignments[muni];
            if (techMapById[techId]) {
                assignmentsByName[muni] = techMapById[techId];
            }
        }
        this.state.assignments = assignmentsByName;
    },

    getAutoAssignments() {
        const autoAssignments = {};
        const interiorMunicipalities = Object.keys(this.dataMaps.MUNICIPIO_A_COBERTURA_MAP)
            .filter(muni => this.dataMaps.MUNICIPIO_A_COBERTURA_MAP[muni] === 'Interior');
        
        interiorMunicipalities.forEach(muni => {
            const muniCoords = this.dataMaps.MUNICIPIO_COORDINATES[muni];
            if (!muniCoords) return;
    
            const closestTech = this.dataMaps.technicians.reduce((closest, current) => {
                const distToCurrent = this.calculateDistance(muniCoords, current.coords);
                return distToCurrent < closest.minDist ? { tech: current, minDist: distToCurrent } : closest;
            }, { tech: null, minDist: Infinity }).tech;
    
            if (closestTech) {
                autoAssignments[muni] = closestTech.id;
            }
        });
        return autoAssignments;
    },
    
    saveAssignments() {
        this.state.manualAssignments = { ...this.state.plannerTempAssignments };
        localStorage.setItem('gpsDashboardZoneAssignments', JSON.stringify(this.state.manualAssignments));
        this.closeZonePlanner();
        this.calculateAndStoreAssignments();
        this.reprocessVehicleTechnicians();
    },

    resetAssignments() {
        const autoAssignments = this.getAutoAssignments();
        this.state.plannerTempAssignments = { ...autoAssignments };
        this.renderPlannerView();
    },

    handleManualAssignment(muni, techId) {
        this.state.plannerTempAssignments[muni] = techId;
        this.renderPlannerView();
    },

    openZonePlanner() {
        this.elements.zonePlannerModal.classList.remove('hidden');
    
        setTimeout(() => {
            if (this.state.plannerMapInstance) {
                this.state.plannerMapInstance.remove();
                this.state.plannerMapInstance = null;
            }
    
            const map = L.map(this.elements.plannerMap).setView([-36.5, -60.0], 6);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            this.state.plannerMapInstance = map;
    
            const autoAssignments = this.getAutoAssignments();
            this.loadAssignments(); 
            this.state.plannerTempAssignments = { ...autoAssignments, ...this.state.manualAssignments };
    
            this.renderPlannerView();
        }, 50); 
    },

    renderPlannerView() {
        if (!this.state.plannerMapInstance) return;
    
        if (this.state.plannerTechnicianMarkers) this.state.plannerTechnicianMarkers.clearLayers();
        if (this.state.plannerMunicipalityMarkers) this.state.plannerMunicipalityMarkers.clearLayers();
        
        this.state.plannerTechnicianMarkers = L.layerGroup().addTo(this.state.plannerMapInstance);
        this.state.plannerMunicipalityMarkers = L.layerGroup().addTo(this.state.plannerMapInstance);
    
        const assignmentsForSummary = {};
        this.dataMaps.technicians.forEach(tech => {
            assignmentsForSummary[tech.name] = [];
            const icon = L.divIcon({ className: 'tech-base-icon', html: `⭐`, iconSize: [30, 30] });
            L.marker(tech.coords, { icon, zIndexOffset: 1000 }).addTo(this.state.plannerTechnicianMarkers).bindPopup(`<b>Base: ${tech.name}</b>`);
        });
    
        Object.entries(this.state.plannerTempAssignments).forEach(([muni, techId]) => {
            const muniCoords = this.dataMaps.MUNICIPIO_COORDINATES[muni];
            const assignedTech = this.dataMaps.technicians.find(t => t.id === techId);
    
            if (muniCoords && assignedTech) {
                assignmentsForSummary[assignedTech.name].push(muni);
                
                const isTwoVisits = this.dataMaps.TWO_VISITS_LOCATIONS.includes(muni);
                const markerHtml = isTwoVisits 
                    ? `<div class="marker-pin"></div><span class="marker-frequency-badge">2</span>`
                    : `<div class="marker-pin"></div>`;

                const icon = L.divIcon({ 
                    className: `custom-div-icon marker-tech-${assignedTech.id}`, 
                    html: markerHtml,
                    iconSize: [30, 42], 
                    iconAnchor: [15, 42] 
                });
                const marker = L.marker(muniCoords, { icon }).addTo(this.state.plannerMunicipalityMarkers);
                
                const popupContent = this.createPlannerPopupContent(muni, assignedTech.id);
                marker.bindPopup(popupContent);
            }
        });
    
        this.state.plannerSummaryData = assignmentsForSummary; // Guardar datos para exportar
        this.renderPlannerSummary(assignmentsForSummary);
    },

    createPlannerPopupContent(muni, currentTechId) {
        const assignedTech = this.dataMaps.technicians.find(t => t.id === currentTechId);
        let html = `<b>${muni}</b><br>Asignado a: <b>${assignedTech.name}</b><hr>Reasignar a:<br>`;
        
        this.dataMaps.technicians.forEach(tech => {
            if (tech.id !== currentTechId) {
                html += `<button class="planner-reassign-btn" onclick="App.handleManualAssignment('${muni.replace("'", "\\'")}', ${tech.id})">${tech.name}</button>`;
            }
        });
        return html;
    },

    closeZonePlanner() {
        this.elements.zonePlannerModal.classList.add('hidden');
        if (this.state.plannerMapInstance) {
            this.state.plannerMapInstance.remove();
            this.state.plannerMapInstance = null;
        }
    },
    
    calculateDistance(coords1, coords2) {
        const [lat1, lon1] = coords1;
        const [lat2, lon2] = coords2;
        return Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2));
    },

    renderPlannerSummary(assignments) {
        this.elements.plannerSummary.innerHTML = this.dataMaps.technicians.map(tech => {
            const assignedList = assignments[tech.name].sort();
            
            let totalVehicles = 0;
            const listItemsHTML = assignedList.map(muni => {
                const count = this.state.municipalityVehicleCount[muni] || 0;
                totalVehicles += count;
                return `<li>${muni} <span class="font-medium text-slate-500">(${count.toLocaleString()} móviles)</span></li>`;
            }).join('');
    
            return `
                <div class="p-4 border rounded-lg bg-slate-50">
                    <h3 class="font-bold text-lg mb-2" style="color: ${tech.color};">${tech.name}</h3>
                    <div class="grid grid-cols-2 gap-2 font-semibold mb-2 text-slate-700 text-sm">
                        <p>Municipios: <span class="font-bold text-base">${assignedList.length.toLocaleString()}</span></p>
                        <p>Móviles Totales: <span class="font-bold text-base">${totalVehicles.toLocaleString()}</span></p>
                    </div>
                    <ul class="text-sm list-disc list-inside max-h-60 overflow-y-auto text-slate-600">
                        ${listItemsHTML}
                    </ul>
                </div>
            `;
        }).join('');
    },
    
    exportZoneData() {
        if (!this.state.plannerSummaryData) {
            alert("No hay datos de zonas para exportar.");
            return;
        }

        const dataForCsv = [];
        for (const techName in this.state.plannerSummaryData) {
            const municipalities = this.state.plannerSummaryData[techName];
            municipalities.forEach(muni => {
                dataForCsv.push({
                    'Técnico': techName,
                    'Municipio': muni,
                    'Cantidad de Móviles': this.state.municipalityVehicleCount[muni] || 0
                });
            });
        }

        const csv = Papa.unparse(dataForCsv);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }));
        link.download = `Asignacion_Zonas_Tecnicos.csv`;
        link.click();
    },

    // --- PLANIFICADOR DE VIAJES ---
    openTripPlanner() {
        this.elements.tripPlannerModal.classList.remove('hidden');
        this.populateTripPlannerInputs();

        setTimeout(() => {
            // Always call initTripPlannerMap to ensure markers are drawn.
            // This is necessary because calculating a route removes the original markers.
            this.initTripPlannerMap();
            
            // Update UI with current state
            this.renderDestinationPills();
            this.updateTripPlannerMapMarkers();
        }, 50);
    },

    closeTripPlanner() {
        this.elements.tripPlannerModal.classList.add('hidden');
    },

    resetTripPlanner() {
        this.state.tripPlannerState.destinations.clear();
        this.renderDestinationPills();
        this.elements.destinationSearchInput.value = '';
        this.elements.tripResultsPlaceholder.classList.remove('hidden');
        this.elements.tripResultsContent.classList.add('hidden');
        this.elements.tripResultsContent.innerHTML = '';
        this.elements.tripPlannerExportBtn.classList.add('hidden');
        this.state.tripPlannerResults = null;

        if(this.state.tripPlannerRouteLayer) this.state.tripPlannerRouteLayer.clearLayers();
        if (this.state.tripPlannerMapInstance) {
            // Re-initialize markers if they were removed by a route calculation
            this.initTripPlannerMap();
        }
        this.updateTripPlannerMapMarkers();
    },

    populateTripPlannerInputs() {
        this.elements.tripTechnicianSelect.innerHTML = this.dataMaps.technicians
            .map(tech => `<option value="${tech.id}">${tech.name}</option>`).join('');
    },
    
    initTripPlannerMap() {
        if (this.state.tripPlannerMapInstance && this.elements.tripPlannerMap.querySelector('.leaflet-container')) {
             // Map already initialized, just ensure markers are present
        } else {
            if (this.state.tripPlannerMapInstance) {
                this.state.tripPlannerMapInstance.remove();
            }
            const map = L.map(this.elements.tripPlannerMap).setView([-36.5, -60.0], 6);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            this.state.tripPlannerMapInstance = map;
            this.state.tripPlannerRouteLayer = L.layerGroup().addTo(map);
        }

        // Clear existing markers before adding new ones
        if (this.state.tripPlannerMarkers) {
            Object.values(this.state.tripPlannerMarkers).forEach(marker => marker.remove());
        }
        this.state.tripPlannerMarkers = {};

        Object.entries(this.dataMaps.MUNICIPIO_COORDINATES).forEach(([muni, coords]) => {
            if (coords) {
                const markerClass = 'trip-selection-marker';
                const iconSize = [12, 12];
                const icon = L.divIcon({ className: markerClass, iconSize: iconSize });

                const marker = L.marker(coords, { icon }).addTo(this.state.tripPlannerMapInstance);

                marker.on('click', () => this.toggleTripDestination(muni));
                const vehicleCount = this.state.municipalityVehicleCount[muni] || 0;
                marker.bindTooltip(`${muni}<br><b>Móviles: ${vehicleCount}</b>`);
                this.state.tripPlannerMarkers[muni] = marker;
            }
        });
    },

    toggleTripDestination(muni) {
        if (this.state.tripPlannerState.destinations.has(muni)) {
            this.state.tripPlannerState.destinations.delete(muni);
        } else {
            this.state.tripPlannerState.destinations.add(muni);
        }
        this.renderDestinationPills();
        this.updateTripPlannerMapMarkers();
    },

    updateTripPlannerMapMarkers() {
        if (!this.state.tripPlannerMapInstance) return;
        Object.entries(this.state.tripPlannerMarkers).forEach(([muni, marker]) => {
            const isSelected = this.state.tripPlannerState.destinations.has(muni);
            if (marker.getElement()) {
                 marker.getElement().classList.toggle('selected', isSelected);
            }
        });
    },

    handleDestinationSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const suggestions = Object.keys(this.dataMaps.MUNICIPIO_COORDINATES)
            .filter(muni => 
                muni.toLowerCase().includes(searchTerm) && 
                !this.state.tripPlannerState.destinations.has(muni)
            );

        if (suggestions.length > 0 && searchTerm) {
            this.elements.destinationSuggestions.innerHTML = suggestions.map(s => {
                const count = this.state.municipalityVehicleCount[s] || 0;
                return `<div class="p-2 hover:bg-slate-100 cursor-pointer" data-value="${s}">${s} (${count})</div>`
            }).join('');
            this.elements.destinationSuggestions.classList.remove('hidden');
            
            this.elements.destinationSuggestions.querySelectorAll('div').forEach(div => {
                div.addEventListener('click', () => this.addDestination(div.dataset.value));
            });
        } else {
            this.elements.destinationSuggestions.classList.add('hidden');
        }
    },
    
    addDestination(municipality) {
        this.state.tripPlannerState.destinations.add(municipality);
        this.renderDestinationPills();
        this.updateTripPlannerMapMarkers();
        this.elements.destinationSearchInput.value = '';
        this.elements.destinationSuggestions.classList.add('hidden');
    },

    handleRemoveDestination(e) {
        if (e.target.dataset.action === 'remove') {
            const municipality = e.target.dataset.value;
            this.state.tripPlannerState.destinations.delete(municipality);
            this.renderDestinationPills();
            this.updateTripPlannerMapMarkers();
        }
    },

    renderDestinationPills() {
        const destArray = Array.from(this.state.tripPlannerState.destinations).sort();
        this.elements.tripDestinationsList.innerHTML = destArray.map(dest => {
            const count = this.state.municipalityVehicleCount[dest] || 0;
            return `
            <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded-full flex items-center gap-2">
                ${dest} (${count})
                <button type="button" class="text-blue-800 hover:text-blue-900" data-action="remove" data-value="${dest}">&times;</button>
            </span>
        `}).join('');

        if (destArray.length === 0) {
            this.elements.tripDestinationsList.innerHTML = `<p class="text-slate-400 text-sm italic">Añada destinos desde el mapa o el buscador.</p>`;
        }
    },

    calculateHaversineDistance(coords1, coords2) {
        if (!coords1 || !coords2) {
            console.error("Coordenadas inválidas para calcular distancia:", coords1, coords2);
            return 0; // Previene el fallo
        }
        const R = 6371; // Radius of the Earth in km
        const dLat = (coords2[0] - coords1[0]) * Math.PI / 180;
        const dLon = (coords2[1] - coords1[1]) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(coords1[0] * Math.PI / 180) * Math.cos(coords2[0] * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    },
    
    formatHours(h) {
        return `${Math.floor(h)}h ${Math.round((h % 1) * 60)}m`;
    },

    calculateTrip() {
        const techId = parseInt(this.elements.tripTechnicianSelect.value);
        const destinations = Array.from(this.state.tripPlannerState.destinations);
        
        if (!techId || destinations.length === 0) {
            alert("Por favor, seleccione un técnico y al menos un destino.");
            return;
        }

        const technician = this.dataMaps.technicians.find(t => t.id === techId);
        
        const locationsToVerify = [{name: technician.base, type: 'Base'}, ...destinations.map(d => ({name: d, type: 'Destino'}))];
        const missingCoords = locationsToVerify.filter(loc => !this.dataMaps.MUNICIPIO_COORDINATES[loc.name]);

        if (missingCoords.length > 0) {
            const missingNames = missingCoords.map(loc => `${loc.type}: ${loc.name}`).join('\n');
            alert(`Error: No se pueden calcular las distancias.\nFaltan las coordenadas para las siguientes ubicaciones:\n\n${missingNames}`);
            return;
        }
        
        const baseLocation = { name: `Base (${technician.base})`, coords: this.dataMaps.MUNICIPIO_COORDINATES[technician.base] };

        let unvisited = destinations.map(d => ({ name: d, coords: this.dataMaps.MUNICIPIO_COORDINATES[d] }));
        let route = [baseLocation];
        let currentLocation = baseLocation;

        while(unvisited.length > 0) {
            let nearest = unvisited.reduce((closest, dest) => {
                const distance = this.calculateHaversineDistance(currentLocation.coords, dest.coords);
                return distance < closest.minDist ? { dest, minDist: distance } : closest;
            }, { dest: null, minDist: Infinity });
            
            route.push(nearest.dest);
            currentLocation = nearest.dest;
            unvisited = unvisited.filter(d => d.name !== nearest.dest.name);
        }
        route.push(baseLocation); // Return to base

        const AVG_SPEED_KMH = 80;
        const WORK_TIME_PER_STOP_HOURS = 2;
        const MAX_DAY_HOURS = 8; // Max driving + work hours per day

        let totalKm = 0;
        let totalTravelHours = 0;
        let totalWorkHours = 0;
        let itinerary = [];
        let needsOvernight = false;
        
        let dailyHours = 0;
        let day = 1;

        for (let i = 0; i < route.length - 1; i++) {
            const from = route[i];
            const to = route[i + 1];

            const legDistance = this.calculateHaversineDistance(from.coords, to.coords);
            const legTravelHours = legDistance / AVG_SPEED_KMH;
            const legWorkHours = (i < route.length - 2) ? WORK_TIME_PER_STOP_HOURS : 0;
            
            if (dailyHours + legTravelHours + legWorkHours > MAX_DAY_HOURS && i > 0) {
                itinerary.push({ type: 'overnight', location: from.name, day });
                needsOvernight = true;
                day++;
                dailyHours = 0;
            }

            dailyHours += legTravelHours + legWorkHours;
            totalKm += legDistance;
            totalTravelHours += legTravelHours;
            totalWorkHours += legWorkHours;
            
            itinerary.push({
                type: 'leg', from: from.name, to: to.name, day,
                distance: legDistance, travelHours: legTravelHours, workHours: legWorkHours
            });
        }
        
        const totalVehicles = destinations.reduce((sum, dest) => sum + (this.state.municipalityVehicleCount[dest] || 0), 0);
        
        const results = { totalKm, totalTravelHours, totalWorkHours, needsOvernight, itinerary, totalVehicles, technicianName: technician.name, destinations };
        this.state.tripPlannerResults = results;
        this.renderTripResults(results, route);
    },

    renderTripResults(results, route) {
        const summaryHTML = `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="p-3 bg-white rounded-lg shadow-sm text-center">
                    <p class="text-sm text-slate-500">Distancia Total</p>
                    <p class="text-xl font-bold text-slate-800">${results.totalKm.toFixed(0)} km</p>
                </div>
                <div class="p-3 bg-white rounded-lg shadow-sm text-center">
                    <p class="text-sm text-slate-500">Tiempo de Viaje</p>
                    <p class="text-xl font-bold text-slate-800">${this.formatHours(results.totalTravelHours)}</p>
                </div>
                 <div class="p-3 bg-white rounded-lg shadow-sm text-center">
                    <p class="text-sm text-slate-500">Móviles Totales</p>
                    <p class="text-xl font-bold text-blue-600">${results.totalVehicles.toLocaleString()}</p>
                </div>
                <div class="p-3 bg-white rounded-lg shadow-sm text-center">
                    <p class="text-sm text-slate-500">Requiere Pernocte</p>
                    <p class="text-xl font-bold ${results.needsOvernight ? 'text-red-500' : 'text-green-600'}">${results.needsOvernight ? 'Sí' : 'No'}</p>
                </div>
            </div>
        `;
        
        const itineraryHTML = `
            <h4 class="font-semibold text-slate-800 mb-2">Itinerario Detallado</h4>
            <div class="overflow-y-auto max-h-80 border rounded-lg bg-white">
                <table class="w-full text-sm text-left text-slate-600">
                    <thead class="text-xs text-slate-700 uppercase bg-slate-200 sticky top-0 z-10"><tr>
                        <th class="px-4 py-2">Día</th><th class="px-4 py-2">Actividad</th><th class="px-4 py-2 text-right">Duración / Dist.</th>
                    </tr></thead>
                    <tbody>${results.itinerary.map(item => {
                        if (item.type === 'leg') {
                            const toCount = this.state.municipalityVehicleCount[item.to] || 0;
                            const toCountDisplay = toCount > 0 ? ` <span class="text-xs font-semibold text-slate-500">(${toCount} móviles)</span>` : '';
                            return `
                            <tr class="border-b"><td class="px-4 py-2 align-top" rowspan="${item.workHours > 0 ? 2 : 1}">${item.day}</td>
                                <td class="px-4 py-2">
                                    <span class="font-semibold">Viaje:</span> ${item.from} → ${item.to}
                                </td>
                                <td class="px-4 py-2 text-right">${item.distance.toFixed(0)} km / ${this.formatHours(item.travelHours)}</td></tr>
                            ${item.workHours > 0 ? `<tr class="border-b bg-sky-50"><td class="px-4 py-2" colspan="2"><span class="font-semibold pl-6">Trabajo en:</span> ${item.to}${toCountDisplay}</td><td class="px-4 py-2 text-right">${this.formatHours(item.workHours)}</td></tr>` : ''}
                            `;
                        } else {
                            const locationCount = this.state.municipalityVehicleCount[item.location] || 0;
                             const locationCountDisplay = locationCount > 0 ? ` <span class="text-xs font-semibold">(${locationCount} móviles)</span>` : '';
                            return `<tr class="bg-yellow-100 font-bold text-yellow-800"><td class="px-4 py-2">${item.day}</td><td class="px-4 py-2" colspan="2">🌙 Fin del día / Pernocte en ${item.location}${locationCountDisplay}</td></tr>`;
                        }
                    }).join('')}</tbody>
                </table>
            </div>
        `;
        
        this.elements.tripResultsContent.innerHTML = summaryHTML + itineraryHTML;
        this.elements.tripResultsPlaceholder.classList.add('hidden');
        this.elements.tripResultsContent.classList.remove('hidden');
        this.elements.tripPlannerExportBtn.classList.remove('hidden');

        this.renderTripMap(route);
    },

    exportTripData() {
        if (!this.state.tripPlannerResults) {
            alert("Primero debe calcular un viaje para poder exportarlo.");
            return;
        }

        const { technicianName, totalKm, totalTravelHours, needsOvernight, totalVehicles, destinations, itinerary } = this.state.tripPlannerResults;

        const summaryData = [
            { 'Parámetro': 'Técnico Asignado', 'Valor': technicianName },
            { 'Parámetro': 'Destinos', 'Valor': destinations.join(', ') },
            { 'Parámetro': 'Distancia Total (km)', 'Valor': totalKm.toFixed(0) },
            { 'Parámetro': 'Tiempo Total de Viaje', 'Valor': this.formatHours(totalTravelHours) },
            { 'Parámetro': 'Total Móviles en Destinos', 'Valor': totalVehicles.toLocaleString() },
            { 'Parámetro': 'Requiere Pernocte', 'Valor': needsOvernight ? 'Sí' : 'No' },
        ];

        const itineraryData = [];
        itinerary.forEach(item => {
            if (item.type === 'leg') {
                itineraryData.push({
                    'Día': item.day,
                    'Tipo': 'Viaje',
                    'Descripción': `De ${item.from} a ${item.to}`,
                    'Distancia (km)': item.distance.toFixed(0),
                    'Duración': this.formatHours(item.travelHours)
                });
                if (item.workHours > 0) {
                     itineraryData.push({
                        'Día': item.day,
                        'Tipo': 'Trabajo',
                        'Descripción': `En ${item.to}`,
                        'Distancia (km)': '',
                        'Duración': this.formatHours(item.workHours)
                    });
                }
            } else if (item.type === 'overnight') {
                 itineraryData.push({
                    'Día': item.day,
                    'Tipo': 'Pernocte',
                    'Descripción': `Fin del día en ${item.location}`,
                    'Distancia (km)': '',
                    'Duración': ''
                });
            }
        });

        const summaryCsv = Papa.unparse(summaryData);
        const itineraryCsv = Papa.unparse(itineraryData);
        const finalCsv = `Resumen del Viaje\n${summaryCsv}\n\nItinerario Detallado\n${itineraryCsv}`;

        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob(['\uFEFF' + finalCsv], { type: 'text/csv;charset=utf-8;' }));
        link.download = `Viaje_${technicianName.replace(/\s/g, '_')}_${new Date().toISOString().slice(0,10)}.csv`;
        link.click();
    },

    renderTripMap(route) {
        if (!this.state.tripPlannerMapInstance) return;
        const map = this.state.tripPlannerMapInstance;
        
        this.state.tripPlannerRouteLayer.clearLayers();

        const latLngs = route.map(point => point.coords);
        const polyline = L.polyline(latLngs, { color: '#3b82f6', weight: 4 }).addTo(this.state.tripPlannerRouteLayer);

        route.forEach((point, index) => {
            if (index > 0 && index < route.length - 1) { // Destination
                const icon = L.divIcon({ className: 'trip-marker-icon', html: `<span>${index}</span>`, iconSize: [30, 30], iconAnchor: [15, 30] });
                L.marker(point.coords, { icon }).bindPopup(`<b>Parada ${index}</b><br>${point.name}`).addTo(this.state.tripPlannerRouteLayer);
            }
        });
        
        // Mark base separately to ensure it's on top
        const baseIcon = L.divIcon({ className: 'trip-marker-icon trip-marker-base', html: '⭐', iconSize: [30, 30], iconAnchor: [15, 30] });
        L.marker(route[0].coords, { icon: baseIcon, zIndexOffset: 1000 }).bindPopup(`<b>Inicio/Fin</b><br>${route[0].name}`).addTo(this.state.tripPlannerRouteLayer);
        
        map.fitBounds(polyline.getBounds().pad(0.1));
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());