import type { LayerSpecification } from "maplibre-gl";
import type { LayerDefinition } from "~/utility/layers.types";

// ---------------------------------------------------------------------------
// Built-in layer registry
// ---------------------------------------------------------------------------

/** Helper: create a Kystverket WMS raster layer definition. */
function kystverketWms(
  id: string,
  label: string,
  wmsLayers: string,
  category?: string,
): LayerDefinition {
  const sourceId = `kv-${id}`;
  const queryParams = {
    SERVICE: "WMS",
    VERSION: "1.3.0",
    REQUEST: "GetMap",
    LAYERS: wmsLayers,
    STYLES: "",
    CRS: "EPSG:3857",
    BBOX: "{bbox-epsg-3857}",
    GUI: "2",
    EXCEPTIONS: "XML",
    WIDTH: 256,
    HEIGHT: 256,
    FORMAT: "image/png",
    INFOFORMAT: "text/html",
    TRANSPARENT: "TRUE",
    QUERYABLE: "true",
    TRANSITIONEFFECT: "resize",
  };
  return {
    id,
    label,
    category,
    defaultVisible: false,
    sources: {
      [sourceId]: {
        type: "raster",
        tiles: [
          `https://services.kystverket.no/mapserv.ashx?` +
            Object.entries(queryParams)
              .map(([key, value]) => `${key}=${value}`)
              .join("&"),
        ],
        tileSize: 256,
        attribution:
          '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
      },
    },
    layers: [
      {
        id: `${sourceId}-raster`,
        type: "raster",
        source: sourceId,
      } as LayerSpecification,
    ],
  };
}

/** Helper: create an external WMS raster layer definition. */
function externalWms(
  id: string,
  label: string,
  wmsLayers: string,
  baseUrl: string,
  category?: string,
  attribution?: string,
): LayerDefinition {
  const sourceId = `ext-${id}`;
  const separator = baseUrl.includes("?") ? "&" : "?";
  const queryParams = {
    SERVICE: "WMS",
    VERSION: "1.3.0",
    REQUEST: "GetMap",
    LAYERS: wmsLayers,
    STYLES: "",
    CRS: "EPSG:3857",
    BBOX: "{bbox-epsg-3857}",
    EXCEPTIONS: "XML",
    WIDTH: 256,
    HEIGHT: 256,
    FORMAT: "image/png",
    TRANSPARENT: "TRUE",
  };
  return {
    id,
    label,
    category,
    defaultVisible: false,
    sources: {
      [sourceId]: {
        type: "raster",
        tiles: [
          `${baseUrl}${separator}` +
            Object.entries(queryParams)
              .map(([key, value]) => `${key}=${value}`)
              .join("&"),
        ],
        tileSize: 256,
        attribution:
          attribution ??
          `&copy; <a href="${new URL(baseUrl).origin}">${new URL(baseUrl).hostname}</a>`,
      },
    },
    layers: [
      {
        id: `${sourceId}-raster`,
        type: "raster",
        source: sourceId,
      } as LayerSpecification,
    ],
  };
}

/**
 * All built-in / preconfigured layer definitions shipped with the library.
 *
 * These can be filtered using include / exclude props on `BuiltInLayersProvider`.
 */
export const BUILT_IN_LAYERS: LayerDefinition[] = [
  // -------------------------------------------------------------------------
  // Kystverket WMS layers (services.kystverket.no/mapserv.ashx)
  // -------------------------------------------------------------------------

  // --- All skipstrafikk (2016/2017) ---
  externalWms(
    "Skipstrafikk2016SkipOver15M",
    "Skipstrafikk 2016 (skip over 15 m)",
    "AIS-density-Norway-2016",
    "https://wms-geo.kystverket.no/density",
    "All skipstrafikk (2016/2017)",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),

  // --- Beredskap ---
  kystverketWms("Beredskapsdepot", "Beredskapsdepot", "layer_25", "Beredskap"),
  kystverketWms(
    "Beredskapsanalyseomrader",
    "Beredskapsanalyseområder",
    "layer_764",
    "Beredskap",
  ),
  kystverketWms("Nodhavner", "Nødhavner", "layer_26", "Beredskap"),
  kystverketWms("Iua", "IUA", "layer_493", "Beredskap"),
  kystverketWms(
    "RitsKjemikalieberedskap",
    "RITS - kjemikalieberedskap",
    "layer_220",
    "Beredskap",
  ),
  kystverketWms("Tilsynslag", "Tilsynslag", "layer_34", "Beredskap"),
  externalWms(
    "AisTilsynslagfartoy",
    "AIS - Tilsynslagfartøy",
    "tracks,trajectories,points,labels_ship_name_scale_independent",
    "https://geomap05.kystverket.no/api/mapserver/a8528a26-0adb-4208-933c-d7ad0452f83e",
    "Beredskap",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),

  // --- Buffersoner ---
  kystverketWms("50MeterBuffer", "50 meter buffer", "layer_583", "Buffersoner"),
  kystverketWms(
    "100MeterBuffer",
    "100 meter buffer",
    "layer_584",
    "Buffersoner",
  ),

  // --- Data fra Sjøfartsdirektoratet ---
  kystverketWms(
    "Fartsomrade1",
    "Fartsområde 1",
    "layer_959",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "Fartsomrade2",
    "Fartsområde 2",
    "layer_960",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "Fartsomrade3",
    "Fartsområde 3",
    "layer_961",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "Fartsomrade4",
    "Fartsområde 4",
    "layer_962",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "LitenKystfart",
    "Liten kystfart",
    "layer_963",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "BallastvannOmrade1RostTromso",
    "Ballastvann - Område 1: Røst - Tromsø",
    "layer_968",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "BallastvannOmrade2Norskehavet",
    "Ballastvann - Område 2: Norskehavet",
    "layer_969",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "BallastvannOmrade3Vestlandskysten",
    "Ballastvann - Område 3: Vestlandskysten",
    "layer_970",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "FartsomradeFiskefartoyFjordfiske",
    "Fartsområde fiskefartøy - Fjordfiske",
    "layer_971",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "FartsomradeFiskefartoyKystfiske",
    "Fartsområde fiskefartøy - Kystfiske",
    "layer_972",
    "Data fra Sjøfartsdirektoratet",
  ),
  kystverketWms(
    "VhfTeoretiskDekningsomrade",
    "VHF teoretisk dekningsområde",
    "layer_975",
    "Data fra Sjøfartsdirektoratet",
  ),

  // --- Eiendom ---
  kystverketWms("Fiskerihavner", "Fiskerihavner", "layer_503", "Eiendom"),
  kystverketWms(
    "FyreiendommerNy",
    "Fyreiendommer (ny)",
    "layer_512",
    "Eiendom",
  ),
  kystverketWms(
    "FyreiendommerI3d",
    "Fyreiendommer i 3d",
    "layer_901",
    "Eiendom",
  ),

  // --- Fareområder ---
  kystverketWms(
    "FareomraderAndoyaSpaceCenter",
    "Fareområder Andøya Space center",
    "layer_digi_87",
    "Fareområder",
  ),

  // --- Farled og merker ---
  kystverketWms(
    "Farledsareal",
    "Farledsareal",
    "layer_554",
    "Farled og merker",
  ),

  // --- Fartsforskrift ---
  kystverketWms(
    "FritidsfartoyAlleFartsgrenser",
    "For fritidsfartøy - alle fartsgrenser på sjøen",
    "layer_754",
    "Fartsforskrift",
  ),
  kystverketWms(
    "NaeringsfartoyAlleFartsgrenser",
    "For næringsfartøy - alle fartsgrenser på sjøen",
    "layer_762",
    "Fartsforskrift",
  ),
  kystverketWms(
    "FartsrestriksjonerInnsjoOgElver",
    "Fartsrestriksjoner innsjø og elver",
    "layer_548",
    "Fartsforskrift",
  ),
  kystverketWms(
    "Kommuneoversikt",
    "Kommuneoversikt",
    "layer_787",
    "Fartsforskrift",
  ),

  // --- Fiskeri og havbruk ---
  kystverketWms(
    "AkvakulturanleggMedInnehaver",
    "Akvakulturanlegg med innehaver",
    "layer_775",
    "Fiskeri og havbruk",
  ),
  kystverketWms(
    "HavbrukTilHavsTilrading2019",
    "Havbruk til havs - Tilråding 2019",
    "layer_589",
    "Fiskeri og havbruk",
  ),
  kystverketWms(
    "HavbrukTilHavsIdentifiserteOmrader",
    "Havbruk til havs - Identifiserte områder",
    "layer_588",
    "Fiskeri og havbruk",
  ),
  kystverketWms(
    "HavbrukTilHavsAnbefaling2022",
    "Havbruk til havs anbefaling 2022",
    "layer_885",
    "Fiskeri og havbruk",
  ),

  // --- Grenser og inndelinger ---
  kystverketWms(
    "Verdensarvomrader",
    "Verdensarvområder",
    "layer_996",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "Kommunegrenser",
    "Kommunegrenser",
    "layer_555",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "Fylkesgrenser",
    "Fylkesgrenser",
    "layer_556",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "OmradeavgrensningArktisPolarkoden",
    "Områdeavgrensning - Arktis (Polarkoden)",
    "layer_98",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "EcaOmrader",
    "ECA områder",
    "layer_557",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "RedningsomradeNord",
    "Redningsområde nord",
    "layer_725",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "RedningsomradeSor",
    "Redningsområde Sør",
    "layer_724",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "Politidistrikt",
    "Politidistrikt",
    "layer_621",
    "Grenser og inndelinger",
  ),
  kystverketWms(
    "Grense250Nm",
    "Grense 250 nm",
    "layer_786",
    "Grenser og inndelinger",
  ),

  // --- Havbase ---
  externalWms(
    "Oljetankere",
    "Oljetankere",
    "overlay_aistails_with_type1_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "KjemikalieProduktankere",
    "Kjemikalie-/produkttankere",
    "overlay_aistails_with_type2_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "Gasstankere",
    "Gasstankere",
    "overlay_aistails_with_type3_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "Bulkskip",
    "Bulkskip",
    "overlay_aistails_with_type4_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "StykkgodsskipHavbase",
    "Stykkgodsskip",
    "overlay_aistails_with_type5_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "Konteinerskip",
    "Konteinerskip",
    "overlay_aistails_with_type6_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "RoRoLast",
    "Ro Ro last",
    "overlay_aistails_with_type7_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "KjoleFryseskip",
    "Kjøle-/fryseskip",
    "overlay_aistails_with_type8_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "Passasjer",
    "Passasjer",
    "overlay_aistails_with_type9_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "OffshoreSupplySkip",
    "Offshore supply skip",
    "overlay_aistails_with_type10_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AndreOffshoreServiceSkip",
    "Andre offshore service skip",
    "overlay_aistails_with_type11_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AndreAktiviteter",
    "Andre aktiviteter",
    "overlay_aistails_with_type12_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "Fiskefartoy",
    "Fiskefartøy",
    "overlay_aistails_with_type13_and_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AlleSkipstyper",
    "Alle skipstyper",
    "overlay_aistails_with_size_32633",
    "https://havbasemap1.kystverket.no/havbase_cache/",
    "Havbase",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),

  // --- Havn ---
  kystverketWms("DigitalPfsa", "Digital PFSA", "layer_1067", "Havn"),
  kystverketWms(
    "SikkerLastingLossingBulkskip",
    "Sikker lasting/lossing bulkskip",
    "layer_1049",
    "Havn",
  ),
  kystverketWms(
    "BunkringAvDrivstoff",
    "Bunkring av drivstoff",
    "layer_digi_65",
    "Havn",
  ),
  kystverketWms(
    "TenTHavnerINorge",
    "Ten-T havner i Norge",
    "layer_993",
    "Havn",
  ),
  kystverketWms(
    "AisAnlopspunkter2023",
    "AIS Anløpspunkter 2023",
    "layer_1027",
    "Havn",
  ),
  kystverketWms(
    "AisAnlopspolygoner2023",
    "AIS anløpspolygoner 2023",
    "layer_1028",
    "Havn",
  ),

  // --- Havvind ---
  kystverketWms(
    "HavvindApnedeOmrader",
    "Havvind - åpnede områder",
    "layer_882",
    "Havvind",
  ),

  // --- Kystkontur (inkl. konstruert kystkontur) ---
  kystverketWms("Kystkontur", "Kystkontur", "layer_611", "Kystkontur"),
  kystverketWms(
    "BygningsmessigAnleggVann",
    "Bygningsmessig anlegg (vann)",
    "layer_612",
    "Kystkontur",
  ),
  kystverketWms("KaiBrygge", "Kai & Brygge", "layer_614", "Kystkontur"),
  kystverketWms("Bolgebryter", "Bølgebryter", "layer_615", "Kystkontur"),
  kystverketWms("Flytedokkant", "Flytedokkant", "layer_616", "Kystkontur"),
  kystverketWms("Molo", "Molo", "layer_613", "Kystkontur"),

  // --- Kystverkets tilskuddsordninger ---
  kystverketWms(
    "TilskuddTilFiskerihavntiltak",
    "Tilskudd til fiskerihavntiltak (Post 60)",
    "layer_1078",
    "Kystverkets tilskuddsordninger",
  ),

  // --- LNG omlasting ---
  kystverketWms(
    "PosisjonerForLngOpplasting",
    "Posisjoner for LNG opplasting",
    "layer_521",
    "LNG omlasting",
  ),
  kystverketWms(
    "LngOmlastingSikkerhetssone540m",
    "LNG omlasting Sikkerhetssone 540 meter",
    "layer_522",
    "LNG omlasting",
  ),
  kystverketWms(
    "LngOmlastingSikkerhetssone840m",
    "LNG omlasting Sikkerhetssone 840 meter",
    "layer_523",
    "LNG omlasting",
  ),

  // --- Lavutslipp ---
  kystverketWms("MetanolAnlegg", "Metanol-anlegg", "layer_713", "Lavutslipp"),
  kystverketWms("Landstrom", "Landstrøm", "layer_710", "Lavutslipp"),
  kystverketWms("LngAnlegg", "LNG-anlegg", "layer_712", "Lavutslipp"),
  kystverketWms(
    "LadeanleggFerjer",
    "Ladeanlegg ferjer",
    "layer_709",
    "Lavutslipp",
  ),
  kystverketWms("Amoniakk", "Amoniakk", "layer_1094", "Lavutslipp"),
  kystverketWms("Hydrogen", "Hydrogen", "layer_1095", "Lavutslipp"),

  // --- Los og farledsbevis ---
  externalWms(
    "AisLosbaterLive",
    "AIS Losbåter (live)",
    "tracks,trajectories,points,labels_ship_name_scale_independent",
    "https://geomap05.kystverket.no/api/mapserver/f7a96d50-5551-445d-88b4-3022288a7605",
    "Los og farledsbevis",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  kystverketWms(
    "LosstasjonerOgLosformidling",
    "Losstasjoner og losformidling",
    "layer_59",
    "Los og farledsbevis",
  ),
  kystverketWms(
    "Losbordingsfelt",
    "Losbordingsfelt",
    "layer_29",
    "Los og farledsbevis",
  ),
  kystverketWms(
    "InnseilingskorrridorerLosplikt",
    "Innseilingskorridorer - Losplikt",
    "layer_99",
    "Los og farledsbevis",
  ),
  kystverketWms(
    "Losoldermannskap",
    "Losoldermannskap",
    "layer_534",
    "Los og farledsbevis",
  ),
  kystverketWms(
    "FarledsbevisRutenett",
    "Farledsbevis, rutenett",
    "layer_341",
    "Los og farledsbevis",
  ),
  kystverketWms(
    "FarledsbevisLokaleBegrensninger",
    "Farledsbevis, lokale begrensninger",
    "layer_532",
    "Los og farledsbevis",
  ),
  kystverketWms(
    "FdvLos2025",
    "2025 - FDV LOS",
    "layer_1079",
    "Los og farledsbevis",
  ),

  // --- Maritim sikring ---
  kystverketWms(
    "HovedOgBiled",
    "Hoved- og biled",
    "layer_552",
    "Maritim sikring",
  ),
  kystverketWms(
    "IspsHavneanleggSsn",
    "ISPS havneanlegg (SSN)",
    "layer_420",
    "Maritim sikring",
  ),
  kystverketWms("IspsCruise", "ISPS Cruise", "layer_887", "Maritim sikring"),
  kystverketWms(
    "AnkringsomraderForSjotransporten",
    "Ankringsområder for sjøtransporten",
    "layer_888",
    "Maritim sikring",
  ),
  kystverketWms(
    "OpplagsomraderForSjotransporten",
    "Opplagsområder for sjøtransporten",
    "layer_889",
    "Maritim sikring",
  ),
  kystverketWms(
    "RiggomraderISjo",
    "Riggområder i sjø",
    "layer_890",
    "Maritim sikring",
  ),

  // --- Meteorologiske data ---
  kystverketWms(
    "VaerdataFraKystvaer",
    "Værdata fra Kystvær",
    "layer_1129",
    "Meteorologiske data",
  ),

  // --- Norsk sokkel ---
  kystverketWms(
    "InstallasjonerPaNorskSokkel",
    "Installasjoner på norsk sokkel (PostGIS)",
    "layer_1107",
    "Norsk sokkel",
  ),

  // --- Rutetiltak, rapportering og VTS ---
  kystverketWms(
    "VtsTjenesteomrade",
    "VTS tjenesteområde",
    "layer_696",
    "Rutetiltak, rapportering og VTS",
  ),
  kystverketWms(
    "Aktsomhetsomrader",
    "Aktsomhetsområder",
    "layer_102",
    "Rutetiltak, rapportering og VTS",
  ),
  kystverketWms(
    "Toveisfarled",
    "Toveisfarled",
    "layer_104",
    "Rutetiltak, rapportering og VTS",
  ),
  kystverketWms(
    "AnbefalteRuter",
    "Anbefalte ruter",
    "layer_702",
    "Rutetiltak, rapportering og VTS",
  ),
  kystverketWms(
    "TssOmrader",
    "TSS områder",
    "layer_706",
    "Rutetiltak, rapportering og VTS",
  ),
  kystverketWms(
    "TssAvgrensing",
    "TSS avgrensing",
    "layer_703",
    "Rutetiltak, rapportering og VTS",
  ),
  kystverketWms(
    "ForbudsomradePassasjerfartoy150m",
    "Forbudsområde passasjerfartøy over 150 meter ved sterk kuling",
    "layer_1108",
    "Rutetiltak, rapportering og VTS",
  ),

  // --- Sjøsikkerhet ---
  kystverketWms(
    "Sjoulykker20092021",
    "Sjøulykker 2009-2021",
    "layer_799",
    "Sjøsikkerhet",
  ),
  externalWms(
    "SannsynlighetForUlykke",
    "Sannsynlighet for ulykke",
    "summert_grid20161214162224065",
    "https://services.kystverket.no/qgis.ashx?map=2a9ba3ad-a973-4b84-99ea-b12d6f8b1da4",
    "Sjøsikkerhet",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "SannsynlighetForUlykkeMedUtslipp",
    "Sannsynlighet for ulykke med utslipp",
    "grid_risiko_utslipp20170112124144604",
    "https://services.kystverket.no/qgis.ashx?map=79625cb8-f319-429a-acfc-c63840281a88",
    "Sjøsikkerhet",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "SannsynlighetForUlykkeMedTapAvLiv",
    "Sannsynlighet for ulykke med tap av liv",
    "freq_lossoflife20170317121849742",
    "https://services.kystverket.no/qgis.ashx?map=15ed376d-ee36-4940-afff-865a9a6a7558",
    "Sjøsikkerhet",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),

  // --- Sjøtrafikk og AIS ---
  externalWms(
    "AisApenSanntid12Timer",
    "AIS Åpen sanntid (siste 12 timer)",
    "tracks,trajectories,points,labels_ship_name",
    "https://geomap05.kystverket.no/api/mapserver/a0138177-38d3-4868-b5ea-f8b1d7b8b09c",
    "Sjøtrafikk og AIS",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AisStykkgodsskipLive",
    "AIS - stykkgodsskip (live)",
    "tracks,trajectories,points,labels_ship_name",
    "https://geomap05.kystverket.no/api/mapserver/5cfc32d5-da6a-41d7-b6d1-d4f9193523ce",
    "Sjøtrafikk og AIS",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AisSjospeiderne",
    "AIS Sjøspeiderne",
    "tracks,trajectories,points,labels_ship_name_scale_independent",
    "https://geomap05.kystverket.no/api/mapserver/7f7c13c3-5a49-4c35-bfb0-8f82af379d0f",
    "Sjøtrafikk og AIS",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AisRedningsselskapet",
    "AIS Redningsselskapet",
    "tracks,trajectories,points,labels_ship_name_scale_independent",
    "https://geomap05.kystverket.no/api/mapserver/abfc5500-11d1-49fb-9094-754f6dc6c36a",
    "Sjøtrafikk og AIS",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "AisSar",
    "AIS SAR",
    "tracks,trajectories,points,labels_ship_name",
    "https://geomap05.kystverket.no/api/mapserver/ca0b6107-2669-4335-862e-8fcbed8b35f7",
    "Sjøtrafikk og AIS",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),
  externalWms(
    "Skipstrafikk",
    "Skipstrafikk",
    "ais_raster_3575_6min",
    "https://kart.kystverket.no/proxies/xSkipstrafikkProxy.ashx?map=/etc/mapserver/barentswatch.map&sld=https://kart.barentswatch.no/resx/sld_skipstrafikk_month.xml",
    "Sjøtrafikk og AIS",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),

  // --- Sjøtrafikksentraltjenestens hendelser ---
  kystverketWms(
    "VardoTrafikksentral",
    "Vardø trafikksentral",
    "layer_426",
    "Sjøtrafikksentraltjenestens hendelser",
  ),
  kystverketWms(
    "KvitsoyTrafikksentral",
    "Kvitsøy trafikksentral",
    "layer_427",
    "Sjøtrafikksentraltjenestens hendelser",
  ),

  // --- Skråfoto ---
  kystverketWms(
    "SkrafotoAustAgder2008",
    "Skråfoto - Aust-Agder - 2008",
    "layer_215",
    "Skråfoto",
  ),
  kystverketWms(
    "SkrafotoTroms2008",
    "Skråfoto - Troms - 2008",
    "layer_217",
    "Skråfoto",
  ),
  kystverketWms(
    "SkrafotoTroms2005",
    "Skråfoto - Troms - 2005",
    "layer_218",
    "Skråfoto",
  ),

  // --- Statlig fartsforskrift etter Havne- og farvannsloven ---
  kystverketWms(
    "FritidsfartoyStatligeFartsgrenser",
    "For fritidsfartøy - statlige fartsgrenser på sjøen etter HFL",
    "layer_722",
    "Statlig fartsforskrift etter HFL",
  ),
  kystverketWms(
    "NaeringsfartoyStatligeFartsgrenser",
    "For næringsfartøy - statlige fartsgrenser på sjøen etter HFL",
    "layer_723",
    "Statlig fartsforskrift etter HFL",
  ),

  // --- baseLayers ---
  externalWms(
    "EncFullEcdis",
    "ENC - full ECDIS",
    "cells",
    "https://kart.kystverket.no/proxies/xEncProxy.ashx?STYLES=style-id-260",
    "Bakgrunnskart",
    '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
  ),

  // -------------------------------------------------------------------------
  // External public WMS layers
  // -------------------------------------------------------------------------

  // --- Akvakultursøknader ---
  externalWms(
    "AkvakultursoknaderUnderBehandling",
    "Akvakultur søknader under behandling",
    "akvakultursoeknad_under_behandling",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS_akva/MapServer/WMSServer",
    "Akvakultursøknader",
  ),

  // --- Andre grunnkart ---
  externalWms(
    "TopografiskWebbkarta",
    "Topografisk webbkarta",
    "terrangskuggning,mark_nedtonad,hydrografi_ytor_nedtonad,kurvor_nedtonad,hydrografi_nedtonad,kommunikation_nedtonad,jarnvag_nedtonad,fjallinformation_nedtonad,kraftledningar_nedtonad,anlaggningar_nedtonad,bebyggelse_nedtonad,bestammelser_nedtonad,administrativ_indelning_nedtonad,adresser_nedtonad,text_nedtonad",
    "https://wms.geonorge.no/skwms1/wms.lantmeteriet_topo",
    "Andre grunnkart",
  ),

  // --- Beredskap (Meteorologi) ---
  externalWms(
    "Nedbor1TimesIntervall",
    "Nedbør 1 times intervall",
    "precipitation_1h_regional",
    "https://metmaps.met.no/metmaps/default.map?language=eng",
    "Beredskap",
  ),
  externalWms(
    "Vind1TimesIntervall",
    "Vind 1 times intervall",
    "wind_10m_regional",
    "https://metmaps.met.no/metmaps/default.map?language=eng",
    "Beredskap",
  ),
  externalWms(
    "BolgehoydeOgRetning",
    "Bølgehøyde og retning",
    "sea_wave_height_direction_regional",
    "https://bw-wms.met.no/barentswatch/default.map",
    "Beredskap",
  ),

  // --- Fareområder ---
  externalWms(
    "Dumpefelt",
    "Dumpefelt",
    "dumpefelt_a",
    "https://wms.geonorge.no/skwms1/wms.maritim_infrastruktur?language=eng",
    "Fareområder",
  ),

  // --- Farled og merker ---
  externalWms(
    "Navigasjonsinstallasjoner",
    "Navigasjonsinstallasjoner",
    "Skilt6756,Overettlinje_merke4406,Overettlinje_lys28396,Flytende_merke18756,Fast_sjømerke29168,Racon,Sektorflate,Sektorlinje,IB,Lys37331",
    "https://maps.kystverket.cloudgis.no/enterprise/services/PROD/nfs_sistop_ekstern_prod/MapServer/WMSServer",
    "Farled og merker",
  ),

  // --- Fiskeri og havbruk ---
  externalWms(
    "AkvakulturFlater",
    "Akvakultur - flater",
    "flate_ihht_akvakulturregisteret",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "LaksekartWms",
    "Laksekart WMS",
    "layer_21",
    "https://laksekartogc.statsforvalteren.no/wms.ashx",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "FiskeplasserAktiveRedskap",
    "Fiskeplasser aktive redskap",
    "fiskeplasser_aktive_redskap",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS_fiskeri/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "FiskeplasserPassiveRedskap",
    "Fiskeplasser passive redskap",
    "fiskeplasser_passive_redskap",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "Lassettingsplasser",
    "Låssettingsplasser",
    "laassettingsplasser",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "Gyteomrader",
    "Gyteområder",
    "gyteomraader",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS_fiskeri/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "GytefeltTorsk",
    "Gytefelt torsk",
    "gytefelt_torsk_mb",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS_fiskeri/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "NasjonaleLaksefjorder",
    "Nasjonale Laksefjorder",
    "nasjonale_laksefjorder",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "NytekPlasseringYtterpunkt",
    "NYTEK plassering-ytterpunkt",
    "nytek_plassering_ytterpunkt",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "NytekFortoyningsliner",
    "NYTEK fortøyningsliner",
    "nytek_fortoyningslinjer",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "NytekFlateSenterpunkt",
    "NYTEK flåte senterpunkt",
    "nytek_flate_senterpunkt",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),
  externalWms(
    "NytekFlateFortoyningslinjer",
    "NYTEK flåte fortøyningslinjer",
    "nytek_flate_fortoyningslinjer",
    "https://gis.fiskeridir.no/server/services/fiskeridirWMS/MapServer/WMSServer",
    "Fiskeri og havbruk",
  ),

  // --- Grenser og inndelinger ---
  externalWms(
    "ForsvaretsSkyteFeltISjo",
    "Forsvarets skyte- og øvingsfelt i sjø",
    "ovingsfeltsjo",
    "https://wms.geonorge.no/skwms1/wms.ovingsfeltsjo",
    "Grenser og inndelinger",
  ),
  externalWms(
    "KommuneOgFylkesgrenserWms",
    "Kommune- og fylkesgrenser (WMS)",
    "adm_enheter_V2_WMS",
    "https://wms.geonorge.no/skwms1/wms.adm_enheter2",
    "Grenser og inndelinger",
  ),
  externalWms(
    "NorgesSjogrenserNavn",
    "Norges sjøgrenser - navn (WMS)",
    "Maritime_grenser_navn",
    "https://wms.geonorge.no/skwms1/wms.nmg",
    "Grenser og inndelinger",
  ),
  externalWms(
    "NorgesSjogrenser",
    "Norges sjøgrenser",
    "Grunnlinje,1_nautisk_mil,Territorialgrense,Yttergrense_for_tilstotende_sone,Avtalt_avgrensningslinje,200_nautiske_mil,Fiskerigrense,avgrensningslinje_for_sokkel,Sokkelgrense",
    "https://wms.geonorge.no/skwms1/wms.nmg",
    "Grenser og inndelinger",
  ),

  // --- Havnedata ---
  externalWms(
    "HavneanleggGeonorge",
    "Havneanlegg",
    "havneanlegg",
    "https://wms.geonorge.no/skwms1/wms.havnedata?language=eng",
    "Havnedata",
  ),

  // --- Høydedata ---
  externalWms(
    "Hoydekoter",
    "Høydekoter",
    "hoydekurver_1m,hoydekurver_5m,hoydetall5linje",
    "https://openwms.statkart.no/skwms1/wms.fkb4",
    "Høydedata",
  ),

  // --- Marine grunndata ---
  externalWms(
    "DybdepunktWms",
    "Dybdepunkt (WMS)",
    "Dybdepunkt,grunne,skjaer_punkt",
    "https://wms.geonorge.no/skwms1/wms.dybdedata2",
    "Marine grunndata",
  ),
  externalWms(
    "DybdekonturWms",
    "Dybdekontur (WMS)",
    "Dybdekontur,Torrfall_Grense",
    "https://wms.geonorge.no/skwms1/wms.dybdedata2",
    "Marine grunndata",
  ),
  externalWms(
    "DybdelagWms",
    "Dybdelag (WMS)",
    "Dybdelag,Torrfall",
    "https://wms.geonorge.no/skwms1/wms.dybdedata2",
    "Marine grunndata",
  ),
  externalWms(
    "MaritimInfrastruktur",
    "Maritim infrastruktur",
    "maritim_infrastruktur_wms",
    "https://wms.geonorge.no/skwms1/wms.maritim_infrastruktur?language=eng",
    "Marine grunndata",
  ),
  externalWms(
    "KystkonturWms",
    "Kystkontur (WMS)",
    "Kystkontur",
    "https://wms.geonorge.no/skwms1/wms.dybdedata2",
    "Marine grunndata",
  ),
  externalWms(
    "KonstruertKystkonturWms",
    "Konstruert kystkontur (WMS)",
    "Konstruertkystkontur",
    "https://wms.geonorge.no/skwms1/wms.dybdedata2",
    "Marine grunndata",
  ),

  // --- Marine grunnkart ---
  externalWms(
    "MgHavbunnsterreng",
    "MG - Havbunnsterreng (WMS)",
    "Dybde50m,Dybde10m,Dybde2m",
    "https://geo.ngu.no/mapserver/MarineGrunnkartWMS",
    "Marine grunnkart",
  ),
  externalWms(
    "MgGravbarhet",
    "MG - Gravbarhet (WMS)",
    "Gravbarhet",
    "https://geo.ngu.no/mapserver/MarineGrunnkartWMS",
    "Marine grunnkart",
  ),
  externalWms(
    "Skyggerelieff",
    "Skyggerelieff",
    "Havbunnraster2_WMS",
    "https://openwms.statkart.no/skwms1/wms.havbunnraster2",
    "Marine grunnkart",
  ),
  externalWms(
    "MarineGrunnkartDatadekning",
    "Marine grunnkart - datadekning",
    "MG_Datadekning",
    "https://geo.ngu.no/mapserver/MarineGrunnkartWMS",
    "Marine grunnkart",
  ),

  // --- Natur og Miljø ---
  externalWms(
    "ForvaltningsplanomraderHavomradene",
    "Forvaltningsplanområder for havområdene WMS",
    "forvaltningsplaner_havomrader_omrade",
    "https://kart.miljodirektoratet.no/geoserver/forvaltningsplaner_havomrader/wms?SERVICE=WMS",
    "Natur og Miljø",
  ),
  externalWms(
    "NaturtyperNin",
    "Naturtyper (NiN)",
    "naturtyper_nin_alle",
    "https://kart.miljodirektoratet.no/arcgis/services/naturtyper_nin/MapServer/WmsServer",
    "Natur og Miljø",
  ),
  externalWms(
    "MarineNaturtyperDnHandbok19",
    "Marine Naturtyper (DN håndbok 19)",
    "naturtyper_marine_hb19_alle",
    "https://kart.miljodirektoratet.no/arcgis/services/naturtyper_marine_hb19/MapServer/WmsServer",
    "Natur og Miljø",
  ),
  externalWms(
    "ArterAvNasjonalForvaltningsinteresse",
    "Arter av nasjonal forvaltningsinteresse",
    "Alle_arter_av_sarlig_stor_forv_int_pkt,Alle_arter_av_sarlig_stor_forv_int_omr",
    "https://kart.miljodirektoratet.no/arcgis/services/artnasjonal2/MapServer/WmsServer",
    "Natur og Miljø",
  ),
  externalWms(
    "Korallrev",
    "Korallrev",
    "korallrev_observert_rev",
    "https://kart.hi.no/mareano/mareano_biologi/korallrev_observert_rev/wms?SERVICE=WMS",
    "Natur og Miljø",
  ),
  externalWms(
    "Vannlokaliteter",
    "Vannlokaliteter",
    "vannlokaliteter_pol",
    "https://kart.miljodirektoratet.no/arcgis/services/vannmiljo/MapServer/WmsServer",
    "Natur og Miljø",
  ),
  externalWms(
    "VannforekomsterOkologiskTilstand",
    "Vannforekomster - økologisk tilstand",
    "Oekologisk_tilstand_eller_potensial_kystvann,Oekologisk_tilstand_eller_potensial_innsjoe,Oekologisk_tilstand_eller_potensial_elv",
    "http://vann-nett.no/arcgis/services/WMS/Vannforskriften_TilstandPotensialRisiko_OGC/MapServer/WmsServer",
    "Natur og Miljø",
  ),
  externalWms(
    "NaturtyperDnHandbok13",
    "Naturtyper (DN håndbok 13)",
    "naturtyper_hb13_alle",
    "https://kart.miljodirektoratet.no/arcgis/services/naturtyper_hb13/MapServer/WmsServer",
    "Natur og Miljø",
  ),

  // --- Norsk sokkel ---
  externalWms(
    "GrenserOgOmraderPaNorskSokkel",
    "Grenser og områder på norsk sokkel",
    "2,3,1",
    "https://factmaps.sodir.no/api/services/Factmaps/FactMapsED50UTM32/MapServer/WMSServer",
    "Norsk sokkel",
  ),
  externalWms(
    "FeltPaNorskSokkel",
    "Felt på norsk sokkel",
    "37",
    "https://factmaps.sodir.no/api/services/Factmaps/FactMapsED50UTM32/MapServer/WMSServer",
    "Norsk sokkel",
  ),
  externalWms(
    "TillatelserPaNorskSokkel",
    "Tillatelser på norsk sokkel",
    "16,22,19,12,14",
    "https://factmaps.sodir.no/api/services/Factmaps/FactMapsED50UTM32/MapServer/WMSServer",
    "Norsk sokkel",
  ),
  externalWms(
    "BronnbanerPaNorskSokkel",
    "Brønnbaner på norsk sokkel",
    "72,73,74,75,76,77",
    "https://factmaps.sodir.no/api/services/Factmaps/FactMapsED50UTM32/MapServer/WMSServer",
    "Norsk sokkel",
  ),

  // --- Referansedata ---
  externalWms(
    "DybdedatakvalitetB",
    "Datakvalitet på dybdedata (B)",
    "Dybdedatakvalitet_B",
    "https://wms.geonorge.no/skwms1/wms.dybdedatakvalitet_navigasjon?language=eng",
    "Referansedata",
  ),
  externalWms(
    "DybdedatakvalitetC",
    "Datakvalitet på dybdedata (C)",
    "Dybdedatakvalitet_C",
    "https://wms.geonorge.no/skwms1/wms.dybdedatakvalitet_navigasjon?language=eng",
    "Referansedata",
  ),
  externalWms(
    "DybdedatakvalitetD",
    "Datakvalitet på dybdedata (D)",
    "Dybdedatakvalitet_D",
    "https://wms.geonorge.no/skwms1/wms.dybdedatakvalitet_navigasjon?language=eng",
    "Referansedata",
  ),
  externalWms(
    "DybdedatakvalitetU",
    "Datakvalitet på dybdedata (U)",
    "Dybdedatakvalitet_U",
    "https://wms.geonorge.no/skwms1/wms.dybdedatakvalitet_navigasjon?language=eng",
    "Referansedata",
  ),
];
