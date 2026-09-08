// src/pages/products/GradeDetail.jsx
import { Link, useParams } from "react-router-dom";
import "./GradeDetail.css";
import { CITIES_SUPPLIED, COUNTRIES_EXPORTED } from "../../data/sharedData";

const GRADE_DATA = {
  // Austenitic Stainless Steels
202: {
  name: "SS 202 Welded Pipes",
  fullName: "Stainless Steel 202 / 1.4373 / UNS S20200 Welded Pipes",
  category: "Chromium-Manganese Stainless Steels",
  image: "/images/grades/202-welded-pipes.jpg",
  description: "202 stainless steel is a lower-cost alternative to 304, using manganese and nitrogen instead of nickel to maintain mechanical properties. It offers exceptional strength, good corrosion resistance, and excellent toughness at low temperatures.",
  longDescription: "202 stainless steel is a chromium-manganese austenitic grade designed as a cost-effective alternative to the 304 series. By substituting a portion of the nickel content with manganese and nitrogen, 202 maintains comparable mechanical properties at a reduced cost. Vardhman Tube Mill is manufacturing these Stainless Steel 202 Welded Pipes by using high quality raw material and by seeking advice from our expert team members. Our expert team members are very professional and have a vast knowledge of producing these Welded Pipes by maintaining the quality standard. We are always referring to international and national standards and specifications to always maintain the quality standard of our Pipes in a better manner. When the final Stainless Steel 202 Welded Pipes are ready then we perform several destructive and non-destructive tests under the inspection of our experienced quality control team to ensure defect free production of welded pipes.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.15% max",
    "Manganese (Mn)": "7.50 – 10.00%",
    "Silicon (Si)": "1.00% max",
    "Phosphorus (P)": "0.060% max",
    "Sulfur (S)": "0.030% max",
    "Chromium (Cr)": "17.0 – 19.0%",
    "Nickel (Ni)": "4.0 – 6.0%",
    "Nitrogen (N)": "0.25% max",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Good corrosion resistance",
    "High strength to weight ratio",
    "Cost-effective alternative to 304",
    "Good weldability",
    "Magnetic in cold-worked condition",
    "Good formability",
    "Excellent toughness at low temperatures",
    "Excellent hardness and strength properties",
    "Superb chemical and mechanical composition",
    "High tensile strength and yielding strength",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Automotive components and trim",
    "Railway equipment",
    "Architectural applications",
    "Food processing equipment",
    "Household appliances",
    "Kitchenware and cookware",
    "Furniture manufacturing",
    "Industrial equipment",
    "Structural applications",
    "General engineering applications",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 202 Welded Pipes",
      image: "/images/grades/202-welded-pipes.jpg",
      items: [
        "Stainless Steel 202 Welded Pipes Exporter",
        "Stainless Steel 202 Welded Pipes Stockholder in Mumbai India",
        "Stainless Steel 202 Welded Pipes Manufacturer",
        "ASME SA312 TP 202 Stainless Steel Welded Piping Supplier",
        "ASTM A312 TP202 Stainless Steel Welded Piping",
      ],
    },
    {
      title: "SS 202 Welded Pipes",
      image: "/images/grades/ss-202-welded-pipes.jpg",
      items: [
        "ASME SA312 TP 202 SS Welded Piping Supplier",
        "ASTM A312 TP202 SS Welded Piping",
        "SS 202 Welded Pipes Exporter",
        "202 SS Welded Pipes Manufacturer",
        "SS 202 Welded Pipes Stockholder in Mumbai India",
      ],
    },
    {
      title: "UNS S20200 Welded Pipes",
      image: "/images/grades/uns-s20200-welded-pipes.jpg",
      items: [
        "UNS S20200 Welded Pipes Manufacturer",
        "Stainless Steel S20200 Welded Pipes Stockholder in Mumbai India",
        "SS S20200 Welded Piping Supplier",
        "UNS S20200 Welded Piping",
        "SS S20200 Welded Pipes Exporter",
      ],
    },
    {
      title: "1.4373 Welded Pipes",
      image: "/images/grades/1-4373-welded-pipes.jpg",
      items: [
        "Stainless Steel 1.4373 Welded Pipes Stockholder in Mumbai India",
        "Stainless Steel 1.4373 Welded Piping Supplier",
        "1.4373 Welded Piping",
        "SS 1.4373 Welded Pipes Exporter",
        "SS 1.4373 Welded Pipes Manufacturer",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A312 / ASME SA312, A358",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 202",
    "WERKSTOFF NR.": "1.4373",
    "UNS": "S20200",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "7.80 g/cm³",
    meltingPoint: "1400-1425 °C",
    tensileStrength: "Psi – 75000, MPa – 515",
    yieldStrength: "Psi – 40000, MPa – 275",
    elongation: "40 %",
  },

  // ✅ Physical Properties - Complete with all thermal properties
  physicalProperties: {
    density: "7800 kg/m³",
    elasticModulus: "200 GPa",
    thermalExpansion: "17 x 10^-6 /K",
    thermalConductivity: "15 W/m.K",
  },

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A312 TP202 Stainless Steel Welded Pipe",
    "202 ERW Pipes",
    "UNS S20200 Welded Pipes",
    "1.4373 Welded Pipes",
    "SUS 202 Welded Pipes",
    "SS 202 Cold Drawn Welded Pipe",
    "SS 202 schedule 40/40S Welded Pipe",
    "Schedule 80 Stainless Steel 202 Welded Pipes",
    "SS 202 Polished Welded Pipe",
    "Stainless Steel UNS S20200 Welded Pipe",
    "Stainless Steel 202 Large Diameter Welded Pipe",
    "ASME SA312 SS 202 Fabricated Welded Pipes",
    "ASTM A312 202 Stainless Steel Welded Pipe",
    "SS 1.4373 Heavy wall Welded Piping",
    "SUS 202 Threaded End Welded Pipes",
    "SS 202 Welded Cut Length Pipe",
    "High Quality SS 202 Welded Round Pipe",
    "SS 202 Bright Annealed Welded Pipes",
    "SS 202 Beveled End Welded Pipes",
  ],
},
  304: {
    name: "SS 304 Welded Pipes",
    fullName: "Stainless Steel 304 / 1.4301 / UNS S30400 Welded Pipes",
    category: "Austenitic Stainless Steels",
    image: "/images/grades/welded-pipes.jpg",
    description:
      "Stainless Steel 304 is the most widely used and versatile austenitic grade. It offers an excellent economical alternative to other stainless steels, combining good corrosion resistance in a broad spectrum of environments with superior toughness and formability.",
    longDescription:
      "Our Stainless Steel 304 Welded Pipes are manufactured to international standards like ASTM A312 / ASME SA312. Type 304 provides good resistance in moderately oxidizing and reducing atmospheres and possesses excellent resistance to intergranular corrosion in its welded condition. These pipes are designed for long service life and are resistant to pollution and rust, making them a reliable choice for numerous critical applications. We precisely design these Pipes by using the latest machinery and tools. Our fabricated Pipes are one of the most widely and commonly used stainless steel grades across several industries.",

    // ✅ Chemical Composition - Complete
    chemicalComposition: {
      "Carbon (C)": "0.08% max",
      "Manganese (Mn)": "2.00% max",
      "Silicon (Si)": "0.75% max",
      "Phosphorus (P)": "0.045% max",
      "Sulfur (S)": "0.030% max",
      "Chromium (Cr)": "18.0 – 20.0%",
      "Nickel (Ni)": "8.0 – 11.0%",
    },

    // ✅ Properties - Enhanced with all key features
    properties: [
      "Excellent corrosion resistance in general and localized environments",
      "High strength and toughness at cryogenic temperatures",
      "Good formability and weldability",
      "Excellent resistance to intergranular corrosion in welded condition",
      "Non-magnetic in annealed condition",
      "Resistant to oxidation and scaling",
      "Good resistance in moderately oxidizing and reducing atmosphere",
      "Resistant to pollution and rust",
      "Good toughness and hardness properties",
      "Economical alternative to different stainless steel grades",
      "Long work or service life with minimal replacement needs",
    ],

    // ✅ Applications - Complete list
    applications: [
      "Chemical & Petrochemical Processing Equipment",
      "Food and Beverage Processing",
      "Pharmaceutical and Medical Equipment",
      "Heat Exchangers and Condensers",
      "Architectural and Structural Applications",
      "Automotive and Aerospace Components",
      "Water and Wastewater Treatment",
      "Pulp and Paper Industry",
      "Dairy Equipment",
      "Special Purpose Fabrications",
      "Custom Engineering Applications",
    ],

    typesOfPipes: [
      {
        title: "Stainless Steel 304 Welded Pipes",
        image: "/images/grades/304-welded-pipes.jpg",
        items: [
          "ASTM A312 TP304 Stainless Steel Welded Pipe",
          "Stainless Steel 304 Welded Pipes Exporter",
          "Stainless Steel 304 ERW Pipes Manufacturer",
          "ASME SA312 TP304 Stainless Steel Welded Pipe Supplier",
          "Stainless Steel 304 Welded Pipes Stockholder in Mumbai India",
        ],
      },
      {
        title: "SS 304 Welded Pipes",
        image: "/images/grades/ss-304-welded-pipes.jpg",
        items: [
          "ASTM A312 TP304 SS Welded Pipe",
          "SS 304 Welded Pipes Exporter",
          "SS 304 ERW Pipes Manufacturer",
          "ASME SA312 TP 304 SS Welded Pipe Supplier",
          "SS 304 Welded Pipes Stockholder in Mumbai India",
        ],
      },
      {
        title: "UNS S30400 Welded Pipes",
        image: "/images/grades/uns-s30400-welded-pipes.jpg",
        items: [
          "Stainless Steel UNS S30400 Welded Pipe",
          "SS S30400 Welded Pipes Exporter",
          "UNS S30400 Welded Pipes Manufacturer",
          "SS S30400 Welded Pipe Supplier",
          "Stainless Steel S30400 Welded Pipes Stockholder in Mumbai India",
        ],
      },
      {
        title: "1.4301 Welded Pipes",
        image: "/images/grades/1-4301-welded-pipes.jpg",
        items: [
          "Stainless Steel 1.4301 Welded Pipe",
          "1.4301 Welded Pipes Exporter",
          "SS 1.4301 ERW Pipes Manufacturer",
          "SS 1.4301 Welded Pipe Supplier",
          "Stainless Steel 1.4301 Welded Pipes Stockholder in Mumbai India",
        ],
      },
    ],

    // ✅ Specifications - Complete
    specifications: {
      standards: "ASTM A312 / ASME SA312, A358, A778, A249, A269",
      dimensions: '1/2" NB to 24" NB',
      schedules:
        "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
      wallThickness: "Schedule 5S to Schedule XXS",
      length: "Single Random, Double Random & Cut Length",
      form: "Round, Square, Rectangular, etc.",
      end: "Plain End, Beveled End, Threaded",
      size: '1/2" NB - 24" NB',
    },

    // ✅ Equivalent Grades - Complete table
    equivalentGrades: {
      STANDARD: "SS 304",
      "WERKSTOFF NR.": "1.4301",
      UNS: "S30400",
      JIS: "SUS 304",
      BS: "304S31",
      GOST: "08Х18Н10",
      AFNOR: "Z7CN18-09",
      EN: "X5CrNi18-10",
    },

    // ✅ Mechanical Properties - Complete
    mechanicalProperties: {
      density: "8.0 g/cm³",
      meltingPoint: "1400 °C (2550 °F)",
      tensileStrength: "Psi – 75000, MPa – 515",
      yieldStrength: "Psi – 30000, MPa – 205",
      elongation: "35 %",
    },

    // ✅ Physical Properties - Complete with all thermal properties
    physicalProperties: {
      density: "8000 kg/m³",
      elasticModulus: "193 GPa",
      thermalExpansion0_100: "17.2 (m/m/0C)",
      thermalExpansion0_315: "17.8 (m/m/0C)",
      thermalExpansion0_538: "18.4 (m/m/0C)",
      thermalConductivity100: "16.2 W/m.K",
      thermalConductivity500: "21.5 W/m.K",
      specificHeat: "500 J/kg.K",
      electricalResistivity: "720 n.m",
    },

    // ✅ Schedule Chart - Complete
    scheduleChart: {
      "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
      "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    },

    // ✅ Pressure Rating - Complete data
    pressureRating: {
      '1"': {
        40: {
          100: 3168,
          200: 2629,
          300: 2362,
          400: 2171,
          500: 2019,
          600: 1924,
          650: 1867,
          700: 1824,
          750: 1810,
        },
        80: {
          100: 4213,
          200: 3634,
          300: 3265,
          400: 3002,
          500: 2791,
          600: 2659,
          650: 2580,
          700: 2528,
          750: 2501,
        },
        160: {
          100: 6140,
          200: 5296,
          300: 4759,
          400: 4375,
          500: 4068,
          600: 3876,
          650: 3761,
          700: 3684,
          750: 3646,
        },
      },
      '1 1/2"': {
        40: {
          100: 2257,
          200: 1947,
          300: 1750,
          400: 1608,
          500: 1496,
          600: 1425,
          650: 1383,
          700: 1354,
          750: 1340,
        },
        80: {
          100: 3182,
          200: 2744,
          300: 2466,
          400: 2267,
          500: 2108,
          600: 2009,
          650: 1949,
          700: 1909,
          750: 1889,
        },
        160: {
          100: 4619,
          200: 3984,
          300: 3580,
          400: 3291,
          500: 3060,
          600: 2916,
          650: 2829,
          700: 2772,
          750: 2743,
        },
      },
      '2"': {
        40: {
          100: 1902,
          200: 1640,
          300: 1474,
          400: 1355,
          500: 1260,
          600: 1201,
          650: 1165,
          700: 1141,
          750: 1129,
        },
        80: {
          100: 2747,
          200: 2369,
          300: 2129,
          400: 1957,
          500: 1820,
          600: 1734,
          650: 1682,
          700: 1648,
          750: 1631,
        },
        160: {
          100: 4499,
          200: 3880,
          300: 3486,
          400: 3205,
          500: 2980,
          600: 2840,
          650: 2755,
          700: 2699,
          750: 2671,
        },
      },
      '3"': {
        40: {
          100: 1806,
          200: 1558,
          300: 1400,
          400: 1287,
          500: 1196,
          600: 1140,
          650: 1106,
          700: 1084,
          750: 1072,
        },
        80: {
          100: 2553,
          200: 2202,
          300: 1979,
          400: 1819,
          500: 1691,
          600: 1612,
          650: 1564,
          700: 1532,
          750: 1516,
        },
        160: {
          100: 3840,
          200: 3312,
          300: 2976,
          400: 2736,
          500: 2544,
          600: 2424,
          650: 2352,
          700: 2316,
          750: 2280,
        },
      },
      '4"': {
        40: {
          100: 1531,
          200: 1321,
          300: 1187,
          400: 1091,
          500: 1014,
          600: 967,
          650: 938,
          700: 919,
          750: 909,
        },
        80: {
          100: 2213,
          200: 1909,
          300: 1715,
          400: 1577,
          500: 1466,
          600: 1397,
          650: 1355,
          700: 1328,
          750: 1314,
        },
        160: {
          100: 3601,
          200: 3106,
          300: 2791,
          400: 2566,
          500: 2386,
          600: 2273,
          650: 2206,
          700: 2161,
          750: 2138,
        },
      },
      '5"': {
        40: {
          100: 1342,
          200: 1158,
          300: 1040,
          400: 956,
          500: 889,
          600: 847,
          650: 822,
          700: 805,
          750: 797,
        },
        80: {
          100: 1981,
          200: 1709,
          300: 1535,
          400: 1411,
          500: 1312,
          600: 1250,
          650: 1213,
          700: 1189,
          750: 1176,
        },
        160: {
          100: 3414,
          200: 2945,
          300: 2646,
          400: 2433,
          500: 2262,
          600: 2155,
          650: 2091,
          700: 2049,
          750: 2027,
        },
      },
      '6"': {
        40: {
          100: 1219,
          200: 1052,
          300: 945,
          400: 869,
          500: 808,
          600: 770,
          650: 747,
          700: 732,
          750: 724,
        },
        80: {
          100: 1913,
          200: 1650,
          300: 1483,
          400: 1363,
          500: 1267,
          600: 1208,
          650: 1172,
          700: 1148,
          750: 1136,
        },
        160: {
          100: 3289,
          200: 2836,
          300: 2549,
          400: 2343,
          500: 2179,
          600: 2076,
          650: 2014,
          700: 1973,
          750: 1953,
        },
      },
      '8"': {
        40: {
          100: 1073,
          200: 926,
          300: 832,
          400: 765,
          500: 711,
          600: 678,
          650: 657,
          700: 644,
          750: 637,
        },
        80: {
          100: 1692,
          200: 1459,
          300: 1311,
          400: 1205,
          500: 1121,
          600: 1068,
          650: 1036,
          700: 1015,
          750: 1005,
        },
        160: {
          100: 3175,
          200: 2738,
          300: 2460,
          400: 2262,
          500: 2103,
          600: 2004,
          650: 1944,
          700: 1905,
          750: 1885,
        },
      },
      '10"': {
        40: {
          100: 974,
          200: 840,
          300: 755,
          400: 694,
          500: 645,
          600: 615,
          650: 596,
          700: 584,
          750: 578,
        },
        80: {
          100: 1609,
          200: 1388,
          300: 1247,
          400: 1147,
          500: 1066,
          600: 1016,
          650: 986,
          700: 966,
          750: 956,
        },
        160: {
          100: 3147,
          200: 2714,
          300: 2439,
          400: 2242,
          500: 2085,
          600: 1986,
          650: 1927,
          700: 1880,
          750: 1868,
        },
      },
    },

    // ✅ Types - Complete list from the table
    types: [
      "ASTM A312 TP304 Stainless Steel Welded Pipe",
      "Stainless Steel 304 ERW Pipes",
      "UNS S30400 Welded Pipes",
      "1.4301 Welded Pipes",
      "SS 304 Electric Resistance Welded Pipes",
      "Schedule 40/40S Welded Pipe",
      "Schedule 80 Stainless Steel 304 Welded Pipes",
      "304 Stainless Steel Large Diameter Welded Pipe",
      "SS 1.4301 Heavy wall Welded Pipes",
      "SUS 304 Welded Pipes",
      "ASME SA312 SS 304 Polished Welded Pipe",
      "304 Stainless Steel Welded Pipe HS Code",
      "Stainless Steel 304 Welded Pipes Stockholder",
      "SS 304 Welded Pipes Vendors",
      "High Quality SS 304 Welded Round Pipe",
      "SS 304 Welded Pipe exporter in India",
      "304 SS schedule 40/40S Welded Pipe Supplier in India",
      "SS 304 Welded Pipe Stockists in India",
      "Welded Stainless Steel UNS S30400 Welded Pipe",
      "Stainless Steel 304 ERW Pipe Distributors",
    ],
  },
"304L": {
  name: "SS 304L Welded Pipes",
  fullName: "Stainless Steel 304L / 1.4306 / 1.4307 / UNS S30403 Welded Pipes",
  category: "Austenitic Stainless Steels",
  image: "/images/grades/304L-welded-pipes.jpg",
  description: "304L is the low carbon version of 304 stainless steel. It offers the same corrosion resistance as 304 but with improved weldability and reduced risk of intergranular corrosion. The chromium and carbon alloy content provides good oxidation resistance.",
  longDescription: "304L stainless steel is the low carbon variant of 304, specifically designed for applications requiring excellent weldability without the need for post-weld annealing. The reduced carbon content minimizes the formation of chromium carbides, preventing intergranular corrosion in welded components. Vardhman Tube Mill is manufacturing these Stainless Steel 304L Welded Pipes by using superior quality raw materials. Our engineers are precisely designing each Pipe with an excellent finish. We follow all the specific and necessary set of rules for developing these Welded Pipes and all the national and international quality standards. This Pipe provides excellent features such as Hardness strength, Tensile and yielding strength, Stress-strength, Corrosion resistance, Welding and machinability, and many more. We perform various tests at different levels of the production unit through destructive and non-destructive tests to ensure no bad quality product is delivered to our clients.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.035% max",
    "Manganese (Mn)": "2.00% max",
    "Silicon (Si)": "1.00% max",
    "Phosphorus (P)": "0.045% max",
    "Sulfur (S)": "0.030% max",
    "Chromium (Cr)": "18.0 – 20.0%",
    "Nickel (Ni)": "8.0 – 13.0%",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Superior weldability compared to 304",
    "Excellent corrosion resistance",
    "Good formability",
    "Resistant to intergranular corrosion",
    "Non-magnetic in annealed condition",
    "No post-weld annealing required",
    "Good oxidation resistance",
    "Excellent hardness strength",
    "Good tensile and yielding strength",
    "Good stress-strength properties",
    "Good welding and machinability",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Welded components and structures",
    "Chemical processing equipment",
    "Pharmaceutical equipment",
    "Food processing equipment",
    "Heat exchangers",
    "Pressure vessels",
    "Architectural applications",
    "Industrial equipment",
    "Petrochemical industry",
    "Dairy equipment",
    "Brewery and beverage industry",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 304L Welded Pipes",
      image: "/images/grades/304L-welded-pipes.jpg",
      items: [
        "ASTM A312 TP304L Stainless Steel Welded Piping",
        "Stainless Steel 304L ERW Pipes Manufacturer",
        "Stainless Steel 304L Welded Pipes Stockholder",
        "Stainless Steel 304L Welded Pipes Exporter",
        "ASME SA312 TP304L Stainless Steel Welded Piping Supplier",
      ],
    },
    {
      title: "SS 304L Welded Pipes",
      image: "/images/grades/ss-304L-welded-pipes.jpg",
      items: [
        "ASTM A312 TP304L SS Welded Piping",
        "SS 304L Welded Pipes Exporter",
        "SS 304L ERW Pipes Manufacturer",
        "ASME SA312 TP 304L SS Welded Piping Supplier",
        "SS 304L Welded Pipes Stockholder in Mumbai India",
      ],
    },
    {
      title: "UNS S30403 Welded Pipes",
      image: "/images/grades/uns-s30403-welded-pipes.jpg",
      items: [
        "Stainless Steel S30403 Welded Pipes Stockholder",
        "SS S30403 Welded Pipes Exporter",
        "SS S30403 Welded Piping Supplier",
        "Stainless Steel UNS S30403 Welded Piping",
        "UNS S30403 Welded Pipes Manufacturer",
      ],
    },
    {
      title: "1.4306 / 1.4307 Welded Pipes",
      image: "/images/grades/1-4306-4307-welded-pipes.jpg",
      items: [
        "SS 1.4306 Welded Piping Supplier",
        "Stainless Steel 1.4307 Welded Pipes Stockholder",
        "SS 1.4306 ERW Pipes Manufacturer",
        "1.4307 Welded Pipes Exporter",
        "Stainless Steel 1.4306 Welded Piping",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A312 / ASME SA312, A358, A778, A249, A269",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 304L",
    "WERKSTOFF NR.": "1.4306 / 1.4307",
    "UNS": "S30403",
    "JIS": "SUS 304L",
    "BS": "304S11 / 304C12",
    "GOST": "04KH18N10",
    "AFNOR": "Z2CN18 / Z3CN18-10 / Z3CN19-09",
    "EN": "X2CrNi19-11 / X2CrNi18-9",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "8.0 g/cm³",
    meltingPoint: "1400 °C (2550 °F)",
    tensileStrength: "Psi – 70000, MPa – 485",
    yieldStrength: "Psi – 25000, MPa – 170",
    elongation: "35 %",
    heatTreatingTemperature: "1040 °C",
  },

  // ✅ Physical Properties - Complete
  physicalProperties: {
    density: "8000 kg/m³",
    elasticModulus: "193 GPa",
    thermalConductivity100: "16.3 W/m.K",
    thermalConductivity500: "21.5 W/m.K",
    specificHeat: "500 J/kg.K",
    electricalResistivity: "720 n.m",
  },

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A312 TP304L Stainless Steel Welded Pipe",
    "304L ERW Pipes",
    "UNS S30403 Welded Pipes",
    "1.4306/1.4307 Welded Pipes",
    "SUS 304L Welded Pipes",
    "SS 304L Bright Annealed Welded Pipes",
    "SS 304L Threaded End Welded Pipes",
    "SS 304L Electric Resistance Welded Pipe",
    "High Quality SS 304L Welded Round Pipe",
    "SS 304L Cold Drawn Welded Pipe",
    "304L SS schedule 40/40S Welded Pipe",
    "Schedule 80 Stainless Steel 304L Welded Pipes",
    "Thick Walled SS 304L Welded Pipe",
    "Stainless Steel 304L Large Diameter Welded Pipe",
    "SS 304L Fabricated Welded Pipes",
    "ASTM A312 304L Stainless Steel Welded Pipe",
    "SS 1.4306 Heavy wall Welded Piping",
    "SUS 304L Beveled End Welded Pipes",
    "Welded Stainless Steel UNS S30403 Welded Pipe",
    "ASME SA312 SS 304L Polished Welded Pipe",
  ],

  // ✅ Cities Supplied - Complete (will be overridden by sharedData)
  // citiesSupplied will be imported from sharedData.js

  // ✅ Countries Exported - Complete (will be overridden by sharedData)
  // countriesExported will be imported from sharedData.js
},
310: {
  name: "SS 310S Welded Pipes",
  fullName: "Stainless Steel 310S / 1.4845 / UNS S31008 Welded Pipes",
  category: "Austenitic Stainless Steels",
  image: "/images/grades/310-welded-pipes.jpg",
  description: "310S stainless steel is a high temperature austenitic alloy known for its excellent oxidation resistance, sulfidation resistance, and high temperature strength. The medium Nickel and high Chromium content offer good resistance to oxidation and other forms of hot corrosion.",
  longDescription: "Stainless Steel 310S Welded Pipes have excellent corrosion resistance at room temperatures. The medium Nickel and high Chromium content in the Stainless Steel 310S Welded Pipes offer good resistance to oxidation, sulfidation, and other forms of hot corrosion. It provides excellent high-temperature properties with excellent ductility and weldability. The low content of Carbon in the Stainless Steel 310S Welded Pipes offers superior high-temperature strength as compared to others. Vardhman Tube Mill is a professional Manufacturer and Exporter of Stainless Steel 310S Welded Pipes. Our Stainless Steel 310S Welded Pipes are a combination of high Nickel and Chromium and low Carbon, Manganese, Silicon, Phosphorus, and Sulfur. The chemical composition offers outstanding resistance to oxidation, pitting, crevice corrosion, and stress corrosion cracking resistance. Furthermore, the austenitic grade has good toughness and hardness, even down to cryogenic temperature. It also possesses some key features such as high tensile strength, fine surface finishes, durability, flexibility, rugged construction, dimensional accuracy, and anti-corrosive properties.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.08% max",
    "Manganese (Mn)": "2.00% max",
    "Silicon (Si)": "0.03% max",
    "Phosphorus (P)": "0.045% max",
    "Sulfur (S)": "0.030% max",
    "Chromium (Cr)": "24.0 – 26.0%",
    "Nickel (Ni)": "19.0 – 22.0%",
    "Molybdenum (Mo)": "0.75% max",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Excellent high temperature oxidation resistance up to 1150°C",
    "Good creep strength at elevated temperatures",
    "Superior corrosion resistance",
    "High ductility and toughness",
    "Non-magnetic in annealed condition",
    "Resistant to sulfidation",
    "Excellent resistance to pitting and crevice corrosion",
    "Good stress corrosion cracking resistance",
    "High tensile strength",
    "Fine surface finishes",
    "Durability and flexibility",
    "Rugged construction",
    "Dimensional accuracy",
    "Good toughness even down to cryogenic temperature",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Furnace parts and components",
    "Heat treatment equipment",
    "Refinery equipment",
    "Petrochemical processing",
    "High temperature piping systems",
    "Burner components",
    "Kilns and ovens",
    "Chemical and Petrochemical Plants",
    "Power Generation",
    "Marine fields",
    "Oil and Gas Industry",
    "Food Processing Equipment",
    "Heat Exchangers",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 310S Welded Pipes",
      image: "/images/grades/310S-welded-pipes.jpg",
      items: [
        "ASTM A312 TP310S Stainless Steel Welded Piping",
        "Stainless Steel 310S Welded Pipes Exporter",
        "Stainless Steel 310S ERW Pipes Manufacturer",
        "Stainless Steel 310S Welded Pipes Stockholder in Mumbai India",
        "ASME SA312 TP310S Stainless Steel Welded Piping Supplier",
      ],
    },
    {
      title: "SS 310S Welded Pipes",
      image: "/images/grades/ss-310S-welded-pipes.jpg",
      items: [
        "SS 310S Welded Pipes Stockholder in Mumbai India",
        "ASTM A312 TP310S SS Welded Piping",
        "SS 310S Welded Pipes Exporter",
        "ASME SA312 TP 310S SS Welded Piping Supplier",
        "SS 310S ERW Pipes Manufacturer",
      ],
    },
    {
      title: "UNS S31008 Welded Pipes",
      image: "/images/grades/uns-s31008-welded-pipes.jpg",
      items: [
        "Stainless Steel UNS S31008 Welded Piping",
        "SS S31008 Welded Pipes Exporter",
        "SS S31008 Welded Piping Supplier",
        "Stainless Steel S31008 Welded Pipes Stockholder in Mumbai India",
        "UNS S31008 Welded Pipes Manufacturer",
      ],
    },
    {
      title: "1.4845 Welded Pipes",
      image: "/images/grades/1-4845-welded-pipes.jpg",
      items: [
        "Stainless Steel 1.4845 Welded Pipes Stockholder in Mumbai India",
        "SS 1.4845 ERW Pipes Manufacturer",
        "SS 1.4845 Welded Piping Supplier",
        "1.4845 Welded Pipes Exporter",
        "Stainless Steel 1.4845 Welded Piping",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A312 / ASME SA312, A358",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 310S",
    "WERKSTOFF NR.": "1.4845",
    "UNS": "S31008",
    "JIS": "SUS 310S",
    "BS": "309S24 / 310S16 / 310S24 / 310S31",
    "GOST": "10KH23N18 / 20KH23N18",
    "AFNOR": "Z8CN25-20",
    "EN": "X8CrNi25-21",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "7.75 g/cm³",
    meltingPoint: "1400-1450 °C",
    tensileStrength: "Psi – 75000, MPa – 515",
    yieldStrength: "Psi – 30000, MPa – 205",
    elongation: "35 %",
    heatTreatingTemperature: "1040 °C",
  },

  // ✅ Physical Properties - Complete
  physicalProperties: {
    density: "7750 kg/m³",
    elasticModulus: "200 GPa",
    thermalExpansion0_100: "15.9 (m/m/0C)",
    thermalExpansion0_315: "16.2 (m/m/0C)",
    thermalExpansion0_538: "17.0 (m/m/0C)",
    thermalConductivity100: "14.2 W/m.K",
    thermalConductivity500: "18.7 W/m.K",
    specificHeat: "500 J/kg.K",
    electricalResistivity: "720 n.m",
  },

  // ✅ Weight Chart - Complete
  weightChart: [
    { nps: "1/2″", od: "0.840", wallThickness: "0.109", schedule: "40 STD", kgMtr: "1.268", lbFt: "0.851" },
    { nps: "1/2″", od: "0.840", wallThickness: "0.147", schedule: "80 STD", kgMtr: "1.621", lbFt: "1.088" },
    { nps: "3/4″", od: "1.050", wallThickness: "0.113", schedule: "40 STD", kgMtr: "1.684", lbFt: "1.131" },
    { nps: "3/4″", od: "1.050", wallThickness: "0.154", schedule: "80 STD", kgMtr: "2.195", lbFt: "1.474" },
    { nps: "1″", od: "1.315", wallThickness: "0.133", schedule: "40 STD", kgMtr: "2.501", lbFt: "1.679" },
    { nps: "1″", od: "1.315", wallThickness: "0.179", schedule: "80 STD", kgMtr: "3.325", lbFt: "2.172" },
    { nps: "1 1/4″", od: "1.660", wallThickness: "0.140", schedule: "40 STD", kgMtr: "3.385", lbFt: "2.273" },
    { nps: "1 1/4″", od: "1.660", wallThickness: "0.191", schedule: "80 STD", kgMtr: "4.464", lbFt: "2.997" },
    { nps: "1 1/2″", od: "1.900", wallThickness: "0.145", schedule: "40 STD", kgMtr: "4.048", lbFt: "2.718" },
    { nps: "1 1/2″", od: "1.900", wallThickness: "0.200", schedule: "80 STD", kgMtr: "5.409", lbFt: "3.361" },
    { nps: "2″", od: "2.375", wallThickness: "0.154", schedule: "40 STD", kgMtr: "5.441", lbFt: "3.653" },
    { nps: "2″", od: "2.375", wallThickness: "0.218", schedule: "80 STD", kgMtr: "7.480", lbFt: "5.022" },
    { nps: "2 1/2″", od: "2.875", wallThickness: "0.203", schedule: "40 STD", kgMtr: "8.629", lbFt: "5.793" },
    { nps: "2 1/2″", od: "2.875", wallThickness: "0.276", schedule: "80 STD", kgMtr: "11.411", lbFt: "7.661" },
    { nps: "3″", od: "3.500", wallThickness: "0.216", schedule: "40 STD", kgMtr: "11.284", lbFt: "7.576" },
    { nps: "3″", od: "3.500", wallThickness: "0.300", schedule: "80 STD", kgMtr: "15.272", lbFt: "10.253" },
    { nps: "4″", od: "4.500", wallThickness: "0.237", schedule: "-", kgMtr: "16.073", lbFt: "10.790" },
    { nps: "4″", od: "4.500", wallThickness: "0.337", schedule: "-", kgMtr: "22.318", lbFt: "14.983" },
    { nps: "6″", od: "6.625", wallThickness: "0.280", schedule: "40 STD", kgMtr: "58.263", lbFt: "18.974" },
    { nps: "6″", od: "6.625", wallThickness: "0.432", schedule: "80 XHY", kgMtr: "42.561", lbFt: "28.573" },
    { nps: "8″", od: "8.625", wallThickness: "0.500", schedule: "80 XHY", kgMtr: "64.627", lbFt: "43.388" },
    { nps: "10″", od: "10.750", wallThickness: "0.500", schedule: "60 XHY", kgMtr: "81.530", lbFt: "54.735" },
    { nps: "12″", od: "12.750", wallThickness: "0.500", schedule: "-", kgMtr: "97.438", lbFt: "65.415" },
    { nps: "14″", od: "14.000", wallThickness: "0.625", schedule: "-", kgMtr: "132.983", lbFt: "89.278" },
    { nps: "16″", od: "16.000", wallThickness: "0.500", schedule: "40 XHY", kgMtr: "123.289", lbFt: "82.770" },
    { nps: "18″", od: "18.000", wallThickness: "0.562", schedule: "40", kgMtr: "155.904", lbFt: "104.666" },
    { nps: "20″", od: "20.000", wallThickness: "0.594", schedule: "40", kgMtr: "183.378", lbFt: "123.110" },
    { nps: "24″", od: "24.000", wallThickness: "0.688", schedule: "40", kgMtr: "255.148", lbFt: "171.293" },
    { nps: "30″", od: "30.000", wallThickness: "0.688", schedule: "-", kgMtr: "320.817", lbFt: "215.380" },
    { nps: "36″", od: "36.000", wallThickness: "0.688", schedule: "-", kgMtr: "386.487", lbFt: "259.467" },
    { nps: "42″", od: "42.000", wallThickness: "0.750", schedule: "-", kgMtr: "492.163", lbFt: "330.413" },
    { nps: "48″", od: "48.000", wallThickness: "0.750", schedule: "-", kgMtr: "563.750", lbFt: "378.473" },
  ],

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A312 TP310S Stainless Steel Welded Pipe",
    "310S ERW Pipes",
    "UNS S31008 Welded Pipes",
    "1.4845 Welded Pipes",
    "SUS 310S Welded Pipes",
    "SS 310S Electric Resistance Welded Pipe",
    "High Quality SS 310S Welded Round Pipe",
    "SS 310S Welded Pipe exporter in India",
    "310S SS schedule 40/40S Welded Pipe Supplier in India",
    "Schedule 80 Stainless Steel 310S Welded Pipes",
    "SS 310S Welded Pipe Stockists in India",
    "Stainless Steel 310S Large Diameter Welded Pipe",
    "310S Stainless Steel Welded Pipe HS Code",
    "ASTM A312 310S Stainless Steel Welded Pipe",
    "Stainless Steel 310S ERW Pipe",
    "SS 1.4845 Heavy wall Welded Pipes",
    "SUS 310S Welded Pipes",
    "Welded Stainless Steel UNS S31008 Welded Pipe",
    "ASME SA312 SS 310S Polished Welded Pipe",
  ],

  // ✅ Cities Supplied - Complete (will be overridden by sharedData)
  // citiesSupplied will be imported from sharedData.js

  // ✅ Countries Exported - Complete (will be overridden by sharedData)
  // countriesExported will be imported from sharedData.js
},
316: {
  name: "SS 316 Welded Pipes",
  fullName: "Stainless Steel 316 / 1.4401 / UNS S31600 Welded Pipes",
  category: "Austenitic Stainless Steels",
  image: "/images/grades/316-welded-pipes.jpg",
  description: "316 stainless steel offers superior corrosion resistance compared to 304, particularly against chlorides and other aggressive environments. The molybdenum addition provides enhanced resistance to pitting and crevice corrosion.",
  longDescription: "Stainless Steel 316 Welded Pipes are mainly used in construction, transportation, appliances, and many more. The Salient Features of our Stainless Steel 316 Welded Pipes include sturdy structure, easy lubrication, and rust-free. Vardhman Tube Mill is one of the famous companies amongst the customers and several industries. We are manufacturing and exporting various Stainless Steel 316 Welded Pipes. Our welded pipes are offered in different dimensions, finishes, shapes, and sizes to our customers with better quality. Vardhman Tube Mill manufactures Stainless Steel 316 Welded Pipes in different standards and specifications with perfect dimensional accuracy. Our welded pipes have a longer service life and higher durability. We manufacture these Stainless Steel 316 Welded Pipes using the National and International standards of quality of raw materials. We have an enormous and high-tech manufacturing unit in our organization, and we produce in massive quantities to meet the demand of our customers. We manufacture the products using the new technologies of production and our employees do the manufacturing under the guidance of experts. Our experts also check the quality standards of Stainless Steel 316 Welded Pipes during the manufacturing process. We always conduct various destructive and non-destructive tests in our organization on the final products and check the quality of our finished products using various tools and techniques before packaging.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.08% max",
    "Manganese (Mn)": "2.00% max",
    "Silicon (Si)": "1.00% max",
    "Phosphorus (P)": "0.045% max",
    "Sulfur (S)": "0.030% max",
    "Chromium (Cr)": "16.0 – 18.0%",
    "Nickel (Ni)": "11.0 – 14.0%",
    "Molybdenum (Mo)": "2.0 – 3.0%",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Superior pitting and crevice corrosion resistance",
    "Excellent resistance to chlorides",
    "Good high temperature strength",
    "Excellent weldability",
    "Non-magnetic in annealed condition",
    "Good formability",
    "Sturdy structure",
    "Easy lubrication",
    "Rust-free",
    "Longer service life",
    "Higher durability",
    "Perfect dimensional accuracy",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Marine environments and offshore structures",
    "Chemical processing plants",
    "Pharmaceutical equipment",
    "Food processing equipment",
    "Desalination plants",
    "Paper and pulp industry",
    "Medical devices and implants",
    "Heat exchangers",
    "Construction industry",
    "Transportation industry",
    "Appliances manufacturing",
    "Oil and gas industry",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 316 Welded Pipes",
      image: "/images/grades/316-welded-pipes.jpg",
      items: [
        "Stainless Steel 316 ERW Pipes Manufacturer",
        "Stainless Steel 316 Welded Pipes Exporter",
        "Stainless Steel 316 Welded Pipes Stockholder",
        "ASTM A312 TP316 Stainless Steel Welded Pipe",
        "ASME SA312 TP316 Stainless Steel Welded Pipes Supplier",
      ],
    },
    {
      title: "SS 316 Welded Pipes",
      image: "/images/grades/ss-316-welded-pipes.jpg",
      items: [
        "ASME SA312 TP 316 SS Welded Piping Supplier",
        "SS 316 Welded Pipes Stockholder",
        "ASTM A312 TP316 SS Welded Pipe",
        "SS 316 ERW Pipes Manufacturer",
        "SS 316 Welded Pipes Exporter",
      ],
    },
    {
      title: "UNS S31600 Welded Pipes",
      image: "/images/grades/uns-s31600-welded-pipes.jpg",
      items: [
        "Stainless Steel UNS S31600 Welded Piping",
        "S31600 Welded Pipe Supplier",
        "UNS S31600 Welded Pipes Manufacturer",
        "Stainless Steel S31600 Welded Pipes Stockholder",
        "SS S31600 Welded Pipes Exporter",
      ],
    },
    {
      title: "1.4401 Welded Pipes",
      image: "/images/grades/1-4401-welded-pipes.jpg",
      items: [
        "Stainless Steel 1.4401 Welded Piping",
        "SS 1.4401 ERW Pipes Manufacturer",
        "SS 1.4401 Welded Pipe Supplier",
        "Stainless Steel 1.4401 Welded Pipes Stockholder",
        "1.4401 Welded Pipes Exporter",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A312 / ASME SA312, A358, A778, A249, A269",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 316",
    "WERKSTOFF NR.": "1.4401",
    "UNS": "S31600",
    "JIS": "SUS 316",
    "GOST": "08KH16N11M3",
    "AFNOR": "Z6CND17-11 / Z7CND17-11-02 / Z7CND17-12-02",
    "EN": "X5CrNiMo17-12-2",
    "BS": "316S31",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "8.0 g/cm³",
    meltingPoint: "1370-1400 °C",
    tensileStrength: "Psi – 75000, MPa – 515",
    yieldStrength: "Psi – 30000, MPa – 205",
    elongation: "35 %",
    heatTreatingTemperature: "1040 °C",
  },

  // ✅ Physical Properties - Complete
  physicalProperties: {
    density: "8000 kg/m³",
    elasticModulus: "193 GPa",
    thermalExpansion0_100: "15.9 (m/m/0C)",
    thermalExpansion0_315: "16.2 (m/m/0C)",
    thermalExpansion0_538: "17.5 (m/m/0C)",
    thermalConductivity100: "16.3 W/m.K",
    thermalConductivity500: "21.5 W/m.K",
    specificHeat: "500 J/kg.K",
    electricalResistivity: "740 n.m",
  },

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A312 TP316 Stainless Steel Welded Pipe",
    "316 ERW Pipes",
    "UNS S31600 Welded Pipes",
    "1.4401 Welded Pipes",
    "SUS 316 Welded Pipes",
    "316 Stainless Steel Large Diameter Welded Pipe",
    "Stainless Steel 316 Welded Pipe Outside Diameter",
    "1/2 316 Stainless Steel Welded Pipe",
    "Schedule 80 Stainless Steel 316 Welded Pipes",
    "Thick Walled SS 316 Welded Pipe",
    "Stainless Steel 316 Welded Pipe Diameter",
    "ASME SA312 SS 316 Welded Pipe",
    "SS 316 Welded Pipe Price List",
    "Schedule 40 Welded SS 316 Pipes",
    "SCH 10 SS 316 Welded Pipes",
  ],

  // ✅ Cities Supplied - Complete (will be overridden by sharedData)
  // citiesSupplied will be imported from sharedData.js

  // ✅ Countries Exported - Complete (will be overridden by sharedData)
  // countriesExported will be imported from sharedData.js
},
"316L": {
  name: "SS 316L Welded Pipes",
  fullName: "Stainless Steel 316L / 1.4404 / UNS S31603 Welded Pipes",
  category: "Austenitic Stainless Steels",
  image: "/images/grades/316L-welded-pipes.jpg",
  description: "316L is the low carbon version of 316 stainless steel, offering improved weldability and resistance to intergranular corrosion. It provides resistance to a wide variety of mild to moderately corrosive environments with excellent surface finish.",
  longDescription: "316L stainless steel is the low carbon variant of 316, specifically formulated to provide enhanced weldability while maintaining the exceptional corrosion resistance of the 316 grade. The reduced carbon content eliminates the risk of chromium carbide precipitation during welding, making it the preferred choice for welded components requiring maximum corrosion resistance in chloride environments. Vardhman Tube Mill is one of the famous and prominent leaders of manufacturing and exporting of Stainless Steel 316L Welded Pipes in huge amounts. We are offering these Stainless Steel Pipes in a number of varieties of sizes, shapes, and also, we are providing these Welded Pipes as per the requirements of clients. Our welded Pipes have a chemical composition of chromium, Nickel, and Manganese. Our manufactured Stainless Steel 316L Welded Pipes are available for our clients at a very lower cost and low maintenance cost. We provide Stainless Steel 316L Welded Pipes with many beneficial features such as superior surface finish, longer working life, higher flexibility and high tensile strengths.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.035% max",
    "Manganese (Mn)": "2.00% max",
    "Silicon (Si)": "1.00% max",
    "Phosphorus (P)": "0.045% max",
    "Sulfur (S)": "0.030% max",
    "Chromium (Cr)": "16.0 – 18.0%",
    "Nickel (Ni)": "10.0 – 14.0%",
    "Molybdenum (Mo)": "2.0 – 3.0%",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Excellent corrosion resistance",
    "Superior weldability",
    "Resistant to intergranular corrosion",
    "Good formability",
    "Non-magnetic in annealed condition",
    "No post-weld annealing required",
    "Superior surface finish",
    "Longer working life",
    "Higher flexibility",
    "High tensile strengths",
    "Easily workable",
    "Excellent finish in nature",
    "Low maintenance cost",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Welded components and structures",
    "Marine environments and offshore structures",
    "Chemical processing plants",
    "Pharmaceutical equipment",
    "Biomedical implants and surgical instruments",
    "Food processing equipment",
    "Desalination plants",
    "Construction industry",
    "Transportation industry",
    "Appliances manufacturing",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 316L Welded Pipes",
      image: "/images/grades/316L-welded-pipes.jpg",
      items: [
        "ASTM A312 TP316L Stainless Steel Welded Piping",
        "Stainless Steel 316L Welded Pipes Exporter",
        "Stainless Steel 316L ERW Pipes Manufacturer",
        "ASME SA312 TP316L Stainless Steel Welded Piping Supplier",
        "Stainless Steel 316L Welded Pipes Stockholder in Mumbai India",
      ],
    },
    {
      title: "SS 316L Welded Pipes",
      image: "/images/grades/ss-316L-welded-pipes.jpg",
      items: [
        "SS 316L Welded Pipes Stockholder in Mumbai India",
        "ASTM A312 TP316L SS Welded Piping",
        "SS 316L Welded Pipes Exporter",
        "SS 316L ERW Pipes Manufacturer",
        "ASME SA312 TP 316L SS Welded Piping Supplier",
      ],
    },
    {
      title: "UNS S31603 Welded Pipes",
      image: "/images/grades/uns-s31603-welded-pipes.jpg",
      items: [
        "Stainless Steel UNS S31603 Welded Piping",
        "SS S31603 Welded Pipes Exporter",
        "UNS S31603 Welded Pipes Manufacturer",
        "SS S31603 Welded Piping Supplier",
        "Stainless Steel S31603 Welded Pipes Stockholder in Mumbai India",
      ],
    },
    {
      title: "1.4404 Welded Pipes",
      image: "/images/grades/1-4404-welded-pipes.jpg",
      items: [
        "SS 1.4404 Welded Piping Supplier",
        "1.4404 Welded Pipes Exporter",
        "SS 1.4404 ERW Pipes Manufacturer",
        "Stainless Steel 1.4404 Welded Pipes Stockholder in Mumbai India",
        "Stainless Steel 1.4404 Welded Piping",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A312 / ASME SA312, A358, A778, A249, A269",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 316L",
    "WERKSTOFF NR.": "1.4404",
    "UNS": "S31603",
    "JIS": "SUS 316L",
    "GOST": "03KH17N14M3",
    "AFNOR": "Z2CND17-12 / Z3CND17-11-02 / Z3CND18-12-02",
    "EN": "X2CrNiMo17-12-2",
    "BS": "316S11",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "8.0 g/cm³",
    meltingPoint: "1370-1400 °C",
    tensileStrength: "Psi – 70000, MPa – 485",
    yieldStrength: "Psi – 25000, MPa – 170",
    elongation: "35 %",
    heatTreatingTemperature: "1040 °C",
  },

  // ✅ Physical Properties - Complete
  physicalProperties: {
    density: "8000 kg/m³",
    elasticModulus: "193 GPa",
    thermalConductivity100: "16.3 W/m.K",
    thermalConductivity500: "21.5 W/m.K",
    specificHeat: "500 J/kg.K",
    electricalResistivity: "740 n.m",
  },

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A312 TP316L Stainless Steel Welded Pipe",
    "316L ERW Pipes",
    "UNS S31603 Welded Pipes",
    "1.4404 Welded Pipes",
    "SUS 316L Welded Pipes",
    "SS 316L Bright Annealed Welded Pipes",
    "SS 316L Threaded End Welded Pipes",
    "SS 316L Electric Resistance Welded Pipe",
    "High Quality SS 316L Welded Round Pipe",
    "SS 316L Cold Drawn Welded Pipe",
    "316L SS schedule 40/40S Welded Pipe Supplier in India",
    "Schedule 80 Stainless Steel 316L Welded Pipes",
    "Thick Walled SS 316L Welded Pipe",
    "Stainless Steel 316L Large Diameter Welded Pipe",
    "SS 316L Fabricated Welded Pipes",
    "ASTM A312 316L Stainless Steel Welded Pipe",
    "SS 1.4004 Heavy wall Welded Piping",
    "SUS 316L Beveled End Welded Pipes",
    "Welded Stainless Steel UNS S31603 Welded Pipe",
    "ASME SA312 SS 316L Polished Welded Pipe",
  ],

  // ✅ Cities Supplied - Complete (will be overridden by sharedData)
  // citiesSupplied will be imported from sharedData.js

  // ✅ Countries Exported - Complete (will be overridden by sharedData)
  // countriesExported will be imported from sharedData.js
},
321: {
  name: "SS 321/321H Welded Pipes",
  fullName: "Stainless Steel 321 / 321H / 1.4541 / 1.4878 / UNS S32100 / S32109 Welded Pipes",
  category: "Austenitic Stainless Steels",
  image: "/images/grades/321-welded-pipes.jpg",
  description: "321 stainless steel is stabilized with titanium to prevent chromium carbide precipitation and intergranular corrosion, making it suitable for high-temperature applications. It offers superior resistance to pitting, crevice corrosion and stress corrosion cracking.",
  longDescription: "321 stainless steel is an austenitic grade stabilized with titanium to prevent carbide precipitation during welding and high-temperature service. This stabilization makes it resistant to intergranular corrosion even after exposure to temperatures in the range of 425-815°C. The titanium addition ensures excellent creep resistance and high-temperature strength, making it ideal for aerospace and petrochemical applications. Stainless Steel 321 is an austenitic stainless steel that is mainly used for corrosive environments and is capable to resist localized corrosion such as pitting, crevice corrosion and stress corrosion cracking. The excellent chemical combination results in excellent mechanical and chemical properties to efficiently sustain at elevated pressure and temperature conditions. Vardhman Tube Mill is one of the leading manufacturers and exporters of Stainless Steel 321 Seamless Pipes. We are the certified company and appreciated from many organizations around the globe for offering the best quality Stainless Steel 321H Seamless Pipes. We fabricate these seamless Pipes in various shapes and sizes as per the requirements of our clients.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.08% max",
    "Manganese (Mn)": "2.00% max",
    "Phosphorus (P)": "0.045% max",
    "Sulfur (S)": "0.030% max",
    "Silicon (Si)": "1.00% max",
    "Chromium (Cr)": "17.0 – 19.0%",
    "Nickel (Ni)": "9.0 – 12.0%",
    "Nitrogen (N)": "0.10% max",
    "Titanium (Ti)": "5×(C) min, 0.70 max",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Excellent resistance to intergranular corrosion",
    "Good high temperature strength up to 900°C",
    "Stabilized against sensitization",
    "Good weldability",
    "Non-magnetic in annealed condition",
    "Resistant to creep at elevated temperatures",
    "Superior resistance to pitting and crevice corrosion",
    "Excellent resistance to stress corrosion cracking",
    "Excellent mechanical and chemical properties",
    "Efficiently sustains at elevated pressure and temperature",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Aircraft exhaust systems and components",
    "High temperature piping systems",
    "Chemical processing equipment",
    "Heat exchangers and condensers",
    "Kilns and furnaces",
    "Petrochemical applications",
    "Refinery equipment",
    "Aerospace industry",
    "Corrosive environments",
    "Elevated pressure and temperature applications",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 321/321H Welded Pipes",
      image: "/images/grades/321-welded-pipes.jpg",
      items: [
        "Stainless Steel 321 Seamless Pipes Stockholder",
        "Stainless Steel 321H Seamless Pipes Manufacturer",
        "ASME SA312 TP 321 Stainless Steel Seamless Piping Supplier",
        "Stainless Steel 321 Seamless Pipes Exporter",
        "ASTM A312 Stainless Steel 321H Seamless Piping",
      ],
    },
    {
      title: "SS 321/321H Welded Pipes",
      image: "/images/grades/ss-321-welded-pipes.jpg",
      items: [
        "SS 321H Seamless Pipes Exporter",
        "ASME SA312 SS 321 Seamless Piping Supplier",
        "ASTM A312 SS 321 Seamless Piping",
        "321H SS Seamless Pipes Manufacturer",
        "SS 321 Seamless Pipes Stockholder",
      ],
    },
    {
      title: "UNS S32100/S32109 Welded Pipes",
      image: "/images/grades/uns-s32100-welded-pipes.jpg",
      items: [
        "SS S32100 Seamless Pipes Exporter",
        "Stainless Steel S32109 Seamless Pipes Stockholder",
        "S32109 Seamless Piping Supplier",
        "UNS S32100 Seamless Pipes Manufacturer",
        "UNS S32100 Seamless Piping",
      ],
    },
    {
      title: "1.4541 / 1.4878 Welded Pipes",
      image: "/images/grades/1-4541-4878-welded-pipes.jpg",
      items: [
        "Stainless Steel 1.4541 Seamless Piping Supplier",
        "Stainless Steel 1.4541 Seamless Pipes Stockholder",
        "1.4878 Seamless Piping",
        "SS 1.4541 Seamless Pipes Exporter",
        "SS 1.4878 Seamless Pipes Manufacturer",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A312 / ASME SA312, A358, A249, A269",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 321",
    "UNS": "S32100",
    "DIN": "1.4541",
    "EN": "X6CrNiTi18-10",
    "AFNOR": "Z6CNT18-10",
    "JIS": "SUS321",
    "BS": "321S31",
    "GOST": "08KH18N10T / 08KH18N12T / 12KH18N10T",
  },

  // ✅ 321H Equivalent Grades
  equivalentGradesH: {
    "STANDARD": "SS 321H",
    "UNS": "S32109",
    "DIN": "1.4878",
    "EN": "X8CrNiTi18-10",
    "AFNOR": "Z6CNT18-10",
    "JIS": "SUS321H",
    "BS": "321S12 / 321S51",
    "GOST": "12KH18N10T",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "8.0 g/cm³",
    meltingPoint: "1400-1425 °C",
    tensileStrength: "Psi – 74500, MPa – 512",
    yieldStrength: "Psi – 30000, MPa – 205",
    elongation: "35 %",
    heatTreatingTemperature: "1100 °C",
    grainSize: "7 or coarser",
  },

  // ✅ Physical Properties - Complete
  physicalProperties: {
    density: "8000 kg/m³",
    elasticModulus: "193 GPa",
    thermalConductivity100: "16.3 W/m.K",
    thermalConductivity500: "21.5 W/m.K",
    specificHeat: "500 J/kg.K",
    electricalResistivity: "720 n.m",
  },

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A312 TP321 Stainless Steel Welded Pipe",
    "321 ERW Pipes",
    "UNS S32100 Welded Pipes",
    "1.4541 Welded Pipes",
    "SUS 321 Welded Pipes",
    "SS 321 Cold Drawn Seamless Pipe",
    "321H SS schedule 40/40S Seamless Pipe",
    "Schedule 80 Stainless Steel 321 Seamless Pipes",
    "Thick Walled SS 321 Seamless Pipe",
    "Stainless Steel UNS S32100 Seamless Pipe",
    "SS 321H Polished Seamless Pipe",
    "Stainless Steel 321 Large Diameter Seamless Pipe",
    "ASME SA312 SS 321H Fabricated Seamless Pipes",
    "ASTM A312 321 Stainless Steel Seamless Pipe",
    "SS 1.4541 Heavy wall Seamless Piping",
    "321 Threaded End Seamless Pipes",
    "SS 321 Seamless Cut Length Pipe",
    "High Quality SS 321H Seamless Round Pipe",
    "SS 321 Bright Annealed Seamless Pipes",
    "SS 321H Beveled End Seamless Pipes",
  ],

  // ✅ Cities Supplied - Complete (will be overridden by sharedData)
  // citiesSupplied will be imported from sharedData.js

  // ✅ Countries Exported - Complete (will be overridden by sharedData)
  // countriesExported will be imported from sharedData.js
},
409: {
  name: "SS 409 Welded Pipes",
  fullName: "Stainless Steel 409 / 1.4512 / UNS S40900 Welded Pipes",
  category: "Ferritic Stainless Steels",
  image: "/images/grades/409-welded-pipes.jpg",
  description: "409 stainless steel is a ferritic grade with good corrosion resistance and excellent formability, commonly used in automotive exhaust systems. It offers high-temperature corrosion resistance and good mechanical properties.",
  longDescription: "409 stainless steel is a ferritic grade with chromium content ranging from 10.5-11.75%. It offers good corrosion resistance in mild environments and excellent formability, making it ideal for automotive exhaust systems. The titanium stabilization in some variants prevents intergranular corrosion and provides good high-temperature oxidation resistance. 409 is a cost-effective choice for applications requiring moderate corrosion resistance and good formability. Stainless Steel 409 offers high-temperature corrosion resistance and also shows good mechanical properties. Stainless Steel 409 Seamless Pipes are offered with applications in exhaust systems of automobiles and applications where high weldability is required. The exclusive range of Pipes are available in highly stabilized forms. The stability of the alloy is offered due to the presence of niobium and titanium in desired compositions. Vardhman Tube Mill is indulged in manufacturing and exporting a comprehensive range of Stainless Steel 409 Seamless Pipes across the industry. Our clients can avail these pipes in different shapes, sizes, specifications, and dimensions.",

  // ✅ Chemical Composition - Complete
  chemicalComposition: {
    "Carbon (C)": "0.08% max",
    "Manganese (Mn)": "1.00% max",
    "Silicon (Si)": "1.00% max",
    "Phosphorus (P)": "0.045% max",
    "Sulfur (S)": "0.030% max",
    "Chromium (Cr)": "10.5 – 11.7%",
    "Titanium (Ti)": "6×(C) min, 0.75 max",
    "Nickel (Ni)": "0.50% max",
  },

  // ✅ Properties - Enhanced with all key features
  properties: [
    "Good corrosion resistance in mild environments",
    "Excellent formability",
    "Good weldability",
    "Resistant to high temperature oxidation",
    "Ferritic (magnetic)",
    "Cost-effective solution",
    "Excellent resistance to exhaust gas corrosion",
    "Good atmospheric corrosion resistance",
    "Outstanding durability",
    "Extended life span",
    "Dimensional accuracy",
    "Abrasion resistant",
    "Superior finishing",
  ],

  // ✅ Applications - Complete list
  applications: [
    "Automotive exhaust systems",
    "Catalytic converters",
    "Heat shields",
    "Silencers and mufflers",
    "Agricultural equipment",
    "Furnace parts",
    "Structural components",
    "Automotive exhaust tubing",
    "Applications requiring high weldability",
  ],

  // ✅ Types of Pipes with Images
  typesOfPipes: [
    {
      title: "Stainless Steel 409 Welded Pipes",
      image: "/images/grades/409-welded-pipes.jpg",
      items: [
        "Stainless Steel 409 Seamless Pipes Exporter",
        "Stainless Steel 409 Seamless Pipes Stockholder in Mumbai India",
        "ASME SA312 TP 409 Stainless Steel Seamless Piping Supplier",
        "Stainless Steel 409 Seamless Pipes Manufacturer",
        "ASTM A312 TP409 Stainless Steel Seamless Piping",
      ],
    },
    {
      title: "SS 409 Welded Pipes",
      image: "/images/grades/ss-409-welded-pipes.jpg",
      items: [
        "ASTM A312 TP409 SS Seamless Piping",
        "SS 409 Seamless Pipes Exporter",
        "409 SS Seamless Pipes Manufacturer",
        "ASME SA312 TP 409 SS Seamless Piping Supplier",
        "SS 409 Seamless Pipes Stockholder in Mumbai India",
      ],
    },
    {
      title: "UNS S40900 Welded Pipes",
      image: "/images/grades/uns-s40900-welded-pipes.jpg",
      items: [
        "Stainless Steel S40900 Seamless Pipes Stockholder in Mumbai India",
        "UNS S40900 Seamless Pipes Manufacturer",
        "UNS S40900 Seamless Piping",
        "SS S40900 Seamless Piping Supplier",
        "SS S40900 Seamless Pipes Exporter",
      ],
    },
    {
      title: "1.4512 Welded Pipes",
      image: "/images/grades/1-4512-welded-pipes.jpg",
      items: [
        "SS 1.4512 Seamless Pipes Manufacturer",
        "Stainless Steel 1.4512 Seamless Piping Supplier",
        "1.4512 Seamless Piping",
        "Stainless Steel 1.4512 Seamless Pipes Stockholder in Mumbai India",
        "SS 1.4512 Seamless Pipes Exporter",
      ],
    },
  ],

  // ✅ Specifications - Complete
  specifications: {
    standards: "ASTM A268, A249, A269",
    dimensions: '1/2" NB to 24" NB',
    schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80, SCH 120, SCH 140, SCH 160, XXS",
    wallThickness: "Schedule 5S to Schedule XXS",
    length: "Single Random, Double Random & Cut Length",
    form: "Round, Square, Rectangular, etc.",
    end: "Plain End, Beveled End, Threaded",
    size: '1/2" NB - 24" NB',
  },

  // ✅ Equivalent Grades - Complete table
  equivalentGrades: {
    "STANDARD": "SS 409",
    "WERKSTOFF NR.": "1.4512",
    "UNS": "S40900",
    "EN": "X2CrTi12",
    "AFNOR": "Z3CT12",
    "JIS": "SUH409",
    "BS": "409S19",
  },

  // ✅ Mechanical Properties - Complete
  mechanicalProperties: {
    density: "7.8 g/cm³",
    meltingPoint: "1425-1510 °C",
    tensileStrength: "Psi – 55000, MPa – 380",
    yieldStrength: "Psi – 25000, MPa – 170",
    elongation: "20 %",
    brinellHardness: "207 max.",
    rockwellHardness: "HRB- 95 max.",
    heatTreatingTemperature: "650 °C",
  },

  // ✅ Physical Properties - Complete
  physicalProperties: {
    density: "7800 kg/m³",
    elasticModulus: "200 GPa",
    thermalConductivity100: "25.0 W/m.K",
    thermalConductivity500: "28.0 W/m.K",
    specificHeat: "500 J/kg.K",
    electricalResistivity: "600 n.m",
  },

  // ✅ Schedule Chart - Complete
  scheduleChart: {
    "1/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/8″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "1 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "2 1/2″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "3″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "4″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "5″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
    "6″": { sch5: "✓", sch10: "✓", sch40: "✓", sch80: "✓", sch160: "✓" },
  },

  // ✅ Pressure Rating - Complete data
  pressureRating: {
    '1"': {
      40: { 100: 3168, 200: 2629, 300: 2362, 400: 2171, 500: 2019, 600: 1924, 650: 1867, 700: 1824, 750: 1810 },
      80: { 100: 4213, 200: 3634, 300: 3265, 400: 3002, 500: 2791, 600: 2659, 650: 2580, 700: 2528, 750: 2501 },
      160: { 100: 6140, 200: 5296, 300: 4759, 400: 4375, 500: 4068, 600: 3876, 650: 3761, 700: 3684, 750: 3646 },
    },
    '1 1/2"': {
      40: { 100: 2257, 200: 1947, 300: 1750, 400: 1608, 500: 1496, 600: 1425, 650: 1383, 700: 1354, 750: 1340 },
      80: { 100: 3182, 200: 2744, 300: 2466, 400: 2267, 500: 2108, 600: 2009, 650: 1949, 700: 1909, 750: 1889 },
      160: { 100: 4619, 200: 3984, 300: 3580, 400: 3291, 500: 3060, 600: 2916, 650: 2829, 700: 2772, 750: 2743 },
    },
    '2"': {
      40: { 100: 1902, 200: 1640, 300: 1474, 400: 1355, 500: 1260, 600: 1201, 650: 1165, 700: 1141, 750: 1129 },
      80: { 100: 2747, 200: 2369, 300: 2129, 400: 1957, 500: 1820, 600: 1734, 650: 1682, 700: 1648, 750: 1631 },
      160: { 100: 4499, 200: 3880, 300: 3486, 400: 3205, 500: 2980, 600: 2840, 650: 2755, 700: 2699, 750: 2671 },
    },
    '3"': {
      40: { 100: 1806, 200: 1558, 300: 1400, 400: 1287, 500: 1196, 600: 1140, 650: 1106, 700: 1084, 750: 1072 },
      80: { 100: 2553, 200: 2202, 300: 1979, 400: 1819, 500: 1691, 600: 1612, 650: 1564, 700: 1532, 750: 1516 },
      160: { 100: 3840, 200: 3312, 300: 2976, 400: 2736, 500: 2544, 600: 2424, 650: 2352, 700: 2316, 750: 2280 },
    },
    '4"': {
      40: { 100: 1531, 200: 1321, 300: 1187, 400: 1091, 500: 1014, 600: 967, 650: 938, 700: 919, 750: 909 },
      80: { 100: 2213, 200: 1909, 300: 1715, 400: 1577, 500: 1466, 600: 1397, 650: 1355, 700: 1328, 750: 1314 },
      160: { 100: 3601, 200: 3106, 300: 2791, 400: 2566, 500: 2386, 600: 2273, 650: 2206, 700: 2161, 750: 2138 },
    },
    '5"': {
      40: { 100: 1342, 200: 1158, 300: 1040, 400: 956, 500: 889, 600: 847, 650: 822, 700: 805, 750: 797 },
      80: { 100: 1981, 200: 1709, 300: 1535, 400: 1411, 500: 1312, 600: 1250, 650: 1213, 700: 1189, 750: 1176 },
      160: { 100: 3414, 200: 2945, 300: 2646, 400: 2433, 500: 2262, 600: 2155, 650: 2091, 700: 2049, 750: 2027 },
    },
    '6"': {
      40: { 100: 1219, 200: 1052, 300: 945, 400: 869, 500: 808, 600: 770, 650: 747, 700: 732, 750: 724 },
      80: { 100: 1913, 200: 1650, 300: 1483, 400: 1363, 500: 1267, 600: 1208, 650: 1172, 700: 1148, 750: 1136 },
      160: { 100: 3289, 200: 2836, 300: 2549, 400: 2343, 500: 2179, 600: 2076, 650: 2014, 700: 1973, 750: 1953 },
    },
    '8"': {
      40: { 100: 1073, 200: 926, 300: 832, 400: 765, 500: 711, 600: 678, 650: 657, 700: 644, 750: 637 },
      80: { 100: 1692, 200: 1459, 300: 1311, 400: 1205, 500: 1121, 600: 1068, 650: 1036, 700: 1015, 750: 1005 },
      160: { 100: 3175, 200: 2738, 300: 2460, 400: 2262, 500: 2103, 600: 2004, 650: 1944, 700: 1905, 750: 1885 },
    },
    '10"': {
      40: { 100: 974, 200: 840, 300: 755, 400: 694, 500: 645, 600: 615, 650: 596, 700: 584, 750: 578 },
      80: { 100: 1609, 200: 1388, 300: 1247, 400: 1147, 500: 1066, 600: 1016, 650: 986, 700: 966, 750: 956 },
      160: { 100: 3147, 200: 2714, 300: 2439, 400: 2242, 500: 2085, 600: 1986, 650: 1927, 700: 1880, 750: 1868 },
    },
  },

  // ✅ Types - Complete list from the table
  types: [
    "ASTM A268 TP409 Stainless Steel Welded Pipe",
    "409 ERW Pipes",
    "UNS S40900 Welded Pipes",
    "1.4512 Welded Pipes",
    "SUS 409 Welded Pipes",
    "SS 409 Cold Drawn Seamless Pipe",
    "409 SS schedule 40/40S Seamless Pipe",
    "Schedule 80 Stainless Steel 409 Seamless Pipes",
    "Thick Walled SS 409 Seamless Pipe",
    "Stainless Steel UNS S40900 Seamless Pipe",
    "SS 409 Polished Seamless Pipe",
    "Stainless Steel 409 Large Diameter Seamless Pipe",
    "ASME SA312 SS 409 Fabricated Seamless Pipes",
    "ASTM A312 409 Stainless Steel Seamless Pipe",
    "SS 1.4512 Heavy wall Seamless Piping",
    "SUS 409 Threaded End Seamless Pipes",
    "SS 409 Seamless Cut Length Pipe",
    "High Quality SS 409 Seamless Round Pipe",
    "SS 409 Bright Annealed Seamless Pipes",
    "SS 409 Beveled End Seamless Pipes",
  ],

  // ✅ Cities Supplied - Complete (will be overridden by sharedData)
  // citiesSupplied will be imported from sharedData.js

  // ✅ Countries Exported - Complete (will be overridden by sharedData)
  // countriesExported will be imported from sharedData.js
},
  "409M": {
    name: "409M Stainless Steel",
    fullName: "409M Stainless Steel",
    category: "Ferritic Stainless Steels",
    image: "/images/grades/409M-welded-pipes.jpg",
    description:
      "409M is a modified version of 409 with enhanced corrosion resistance and improved mechanical properties for demanding applications.",
    longDescription:
      "409M is a modified ferritic stainless steel grade designed to provide enhanced corrosion resistance compared to standard 409. The addition of increased chromium and titanium content improves the mechanical properties and corrosion resistance, making it suitable for more demanding applications while maintaining good formability and weldability. It's particularly effective in applications requiring better resistance to exhaust gas condensates.",
    chemicalComposition: {
      "Carbon (C)": "≤ 0.08%",
      "Chromium (Cr)": "10.5-12.5%",
      "Nickel (Ni)": "≤ 0.5%",
      "Manganese (Mn)": "≤ 1.5%",
      "Silicon (Si)": "≤ 1%",
      "Phosphorus (P)": "≤ 0.045%",
      "Sulfur (S)": "≤ 0.03%",
      "Titanium (Ti)": "≥ 6×(C+N)",
    },
    properties: [
      "Enhanced corrosion resistance",
      "Improved mechanical properties",
      "Good formability",
      "Excellent weldability",
      "Ferritic (magnetic)",
      "Better resistance to exhaust gas condensates",
    ],
    applications: [
      "Automotive components and exhaust systems",
      "Exhaust manifolds",
      "Heat exchangers",
      "Industrial equipment",
      "Structural components",
      "Transportation applications",
      "Mufflers and catalytic converters",
    ],
    specifications: {
      standards: "ASTM A268, A249, A269",
      dimensions: '1/2" NB to 24" NB',
      schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD",
      wallThickness: "Schedule 5S to Schedule XXS",
      length: "Single Random, Double Random & Cut Length",
      form: "Round, Square, Rectangular, etc.",
      end: "Plain End, Beveled End",
    },
    equivalentGrades: {
      UNS: "S40930",
      EN: "1.4511",
    },
    mechanicalProperties: {
      density: "7.8 g/cm³",
      meltingPoint: "1425-1510 °C",
      tensileStrength: "Psi – 70000, MPa – 485",
      yieldStrength: "Psi – 35000, MPa – 240",
      elongation: "22 %",
    },
    physicalProperties: {
      density: "7800 kg/m³",
      elasticModulus: "200 GPa",
      thermalConductivity100: "25.0 W/m.K",
      thermalConductivity500: "28.0 W/m.K",
      specificHeat: "500 J/kg.K",
      electricalResistivity: "600 n.m",
    },
    types: [
      "ASTM A268 TP409M Stainless Steel Welded Pipe",
      "409M ERW Pipes",
      "UNS S40930 Welded Pipes",
      "1.4511 Welded Pipes",
    ],
    citiesSupplied: [
      "Mumbai",
      "Delhi",
      "Bengaluru",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
    ],
    countriesExported: [
      "USA",
      "Canada",
      "UK",
      "Germany",
      "France",
      "Japan",
      "South Korea",
      "UAE",
    ],
  },
  "904L": {
    name: "904L Stainless Steel",
    fullName: "904L Super Austenitic Stainless Steel",
    category: "Super Austenitic Stainless Steels",
    image: "/images/grades/904L-welded-pipes.jpg",
    description:
      "904L is a super austenitic stainless steel with high chromium, nickel, and molybdenum content, offering exceptional corrosion resistance in severe environments.",
    longDescription:
      "904L is a super austenitic stainless steel with exceptional corrosion resistance, particularly in environments containing chlorides and sulfuric acid. Its high molybdenum and nickel content provides superior resistance to pitting, crevice corrosion, and stress corrosion cracking. The addition of copper further enhances its resistance to sulfuric acid, making it ideal for chemical processing, pharmaceutical, and marine applications where maximum corrosion resistance is required.",
    chemicalComposition: {
      "Carbon (C)": "≤ 0.02%",
      "Chromium (Cr)": "19-23%",
      "Nickel (Ni)": "23-28%",
      "Molybdenum (Mo)": "4-5%",
      "Copper (Cu)": "1-2%",
      "Manganese (Mn)": "≤ 2%",
      "Silicon (Si)": "≤ 1%",
      "Phosphorus (P)": "≤ 0.045%",
      "Sulfur (S)": "≤ 0.035%",
    },
    properties: [
      "Exceptional corrosion resistance in severe environments",
      "Excellent resistance to pitting and crevice corrosion",
      "High resistance to stress corrosion cracking",
      "Good weldability",
      "Non-magnetic in annealed condition",
      "Superior resistance to sulfuric acid",
    ],
    applications: [
      "Chemical processing plants",
      "Pharmaceutical equipment",
      "Marine environments and offshore structures",
      "Desalination plants",
      "Pulp and paper industry",
      "Oil and gas processing",
      "Sulfuric acid handling equipment",
      "Heat exchangers",
    ],
    specifications: {
      standards: "ASTM B673, B674, B677",
      dimensions: '1/2" NB to 24" NB',
      schedules: "SCH 10, SCH 20, SCH 30, SCH 40, STD, SCH 60, XS, SCH 80",
      wallThickness: "Schedule 5S to Schedule XXS",
      length: "Single Random, Double Random & Cut Length",
      form: "Round, Square, Rectangular, etc.",
      end: "Plain End, Beveled End, Threaded",
    },
    equivalentGrades: {
      "WERKSTOFF NR.": "1.4539",
      UNS: "N08904",
      EN: "X1NiCrMoCu25-20-5",
    },
    mechanicalProperties: {
      density: "7.95 g/cm³",
      meltingPoint: "1320-1400 °C",
      tensileStrength: "Psi – 71000, MPa – 490",
      yieldStrength: "Psi – 32000, MPa – 220",
      elongation: "35 %",
    },
    physicalProperties: {
      density: "7950 kg/m³",
      elasticModulus: "190 GPa",
      thermalConductivity100: "12.0 W/m.K",
      thermalConductivity500: "18.0 W/m.K",
      specificHeat: "500 J/kg.K",
      electricalResistivity: "850 n.m",
    },
    types: [
      "ASTM B673 TP904L Stainless Steel Welded Pipe",
      "904L ERW Pipes",
      "UNS N08904 Welded Pipes",
      "1.4539 Welded Pipes",
      "904L Super Austenitic Welded Pipes",
    ],
    citiesSupplied: [
      "Mumbai",
      "Delhi",
      "Bengaluru",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Ahmedabad",
      "Surat",
      "Kolkata",
    ],
    countriesExported: [
      "USA",
      "Canada",
      "UK",
      "Germany",
      "France",
      "Australia",
      "UAE",
      "Saudi Arabia",
      "Singapore",
      "Japan",
      "South Korea",
      "China",
    ],
  },
};

// Get all grade IDs for navigation

const GRADE_IDS = [
  "202",
  "304", // 1. SS 304 Welded Pipes
  "304L", // 2. 304L Stainless Steel
  "310", // 3. 310 Stainless Steel
  "316", // 4. 316 Stainless Steel
  "316L", // 5. 316L Stainless Steel
  "321", // 6. 321 Stainless Steel
  "409", // 8. 409 Stainless Steel
  "409M", // 9. 409M Stainless Steel
  "904L", // 10. 904L Stainless Steel
];

export default function GradeDetail() {
  const { gradeId } = useParams();
  const grade = GRADE_DATA[gradeId];
  const currentIndex = GRADE_IDS.indexOf(gradeId);

  if (!grade) {
    return (
      <div
        className="container"
        style={{ padding: "80px 0", textAlign: "center" }}
      >
        <h1>Grade Not Found</h1>
        <p>The grade you're looking for doesn't exist.</p>
        <Link to="/products/welded-pipes" className="btn btn--primary">
          Back to Welded Pipes
        </Link>
      </div>
    );
  }

  return (
    <div className="grade-detail-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to="/products/welded-pipes">Welded Pipes</Link>
            <span>/</span>
            <span>{grade.name}</span>
          </nav>
          <h1 className="display-lg">{grade.fullName}</h1>
          <p>{grade.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grade-detail-grid">
            {/* Left Column - Main Content */}
            <div className="grade-detail-main">
              {/* Product Image */}
              {grade.image && (
                <div className="grade-image-wrapper">
                  <img
                    src={grade.image}
                    alt={grade.fullName}
                    className="grade-product-image"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="grade-detail-category-badge">
                {grade.category}
              </div>

              <h2
                className="display-md"
                style={{ marginTop: "20px", marginBottom: "16px" }}
              >
                Grade Overview
              </h2>
              <p className="body-lg" style={{ marginBottom: "32px" }}>
                {grade.longDescription || grade.description}
              </p>

              <h3 className="heading-md" style={{ marginBottom: "20px" }}>
                Key Properties
              </h3>
              <ul className="grade-properties-list">
                {grade.properties.map((prop, index) => (
                  <li key={index}>{prop}</li>
                ))}
              </ul>

              <h3
                className="heading-md"
                style={{ marginTop: "32px", marginBottom: "20px" }}
              >
                Applications
              </h3>
              <div className="grade-applications-tags">
                {grade.applications.map((app, index) => (
                  <span className="grade-application-tag" key={index}>
                    {app}
                  </span>
                ))}
              </div>

              {/* Specifications Section */}
              {grade.specifications && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Product Specifications
                  </h3>
                  <div className="grade-specifications-grid">
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">Standards</span>
                      <span className="grade-spec-value">
                        {grade.specifications.standards}
                      </span>
                    </div>
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">Size Range</span>
                      <span className="grade-spec-value">
                        {grade.specifications.dimensions}
                      </span>
                    </div>
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">Schedules</span>
                      <span className="grade-spec-value">
                        {grade.specifications.schedules}
                      </span>
                    </div>
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">Wall Thickness</span>
                      <span className="grade-spec-value">
                        {grade.specifications.wallThickness}
                      </span>
                    </div>
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">Length</span>
                      <span className="grade-spec-value">
                        {grade.specifications.length}
                      </span>
                    </div>
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">Form</span>
                      <span className="grade-spec-value">
                        {grade.specifications.form}
                      </span>
                    </div>
                    <div className="grade-spec-item">
                      <span className="grade-spec-label">End Type</span>
                      <span className="grade-spec-value">
                        {grade.specifications.end}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Mechanical Properties */}
              {grade.mechanicalProperties && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Mechanical Properties
                  </h3>
                  <div className="grade-mechanical-grid">
                    <div className="grade-mechanical-item">
                      <span className="grade-mechanical-label">Density</span>
                      <span className="grade-mechanical-value">
                        {grade.mechanicalProperties.density}
                      </span>
                    </div>
                    <div className="grade-mechanical-item">
                      <span className="grade-mechanical-label">
                        Melting Point
                      </span>
                      <span className="grade-mechanical-value">
                        {grade.mechanicalProperties.meltingPoint}
                      </span>
                    </div>
                    <div className="grade-mechanical-item">
                      <span className="grade-mechanical-label">
                        Tensile Strength
                      </span>
                      <span className="grade-mechanical-value">
                        {grade.mechanicalProperties.tensileStrength}
                      </span>
                    </div>
                    <div className="grade-mechanical-item">
                      <span className="grade-mechanical-label">
                        Yield Strength
                      </span>
                      <span className="grade-mechanical-value">
                        {grade.mechanicalProperties.yieldStrength}
                      </span>
                    </div>
                    <div className="grade-mechanical-item">
                      <span className="grade-mechanical-label">Elongation</span>
                      <span className="grade-mechanical-value">
                        {grade.mechanicalProperties.elongation}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Equivalent Grades */}
              {grade.equivalentGrades && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Equivalent Grades
                  </h3>
                  <div className="grade-equivalent-grid">
                    {Object.entries(grade.equivalentGrades).map(
                      ([standard, value]) => (
                        <div className="grade-equivalent-item" key={standard}>
                          <span className="grade-equivalent-standard">
                            {standard}
                          </span>
                          <span className="grade-equivalent-value">
                            {value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </>
              )}

              {/* Schedule Chart */}
              {grade.scheduleChart && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Schedule Chart
                  </h3>
                  <div className="grade-schedule-wrapper">
                    <table className="grade-schedule-table">
                      <thead>
                        <tr>
                          <th>NB SIZES</th>
                          <th>SCH 5</th>
                          <th>SCH 10</th>
                          <th>SCH 40</th>
                          <th>SCH 80</th>
                          <th>SCH 160</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(grade.scheduleChart).map(
                          ([size, schedules]) => (
                            <tr key={size}>
                              <td className="schedule-size">{size}</td>
                              <td>{schedules.sch5}</td>
                              <td>{schedules.sch10}</td>
                              <td>{schedules.sch40}</td>
                              <td>{schedules.sch80}</td>
                              <td>{schedules.sch160}</td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {/* Pressure Rating */}
              {grade.pressureRating && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Pressure Rating (psig)
                  </h3>
                  <div className="grade-pressure-wrapper">
                    <div className="grade-pressure-note">
                      <p className="body-sm">
                        Pressure ratings for {grade.name} at various
                        temperatures
                      </p>
                    </div>
                    {Object.entries(grade.pressureRating).map(
                      ([pipeSize, schedules]) => (
                        <div
                          key={pipeSize}
                          className="grade-pressure-size-group"
                        >
                          <h4 className="grade-pressure-size-title">
                            Pipe Size: {pipeSize}
                          </h4>
                          <table className="grade-pressure-table">
                            <thead>
                              <tr>
                                <th>Schedule</th>
                                <th>100°F</th>
                                <th>200°F</th>
                                <th>300°F</th>
                                <th>400°F</th>
                                <th>500°F</th>
                                <th>600°F</th>
                                <th>650°F</th>
                                <th>700°F</th>
                                <th>750°F</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(schedules).map(
                                ([schedule, temps]) => (
                                  <tr key={schedule}>
                                    <td className="schedule-label">
                                      {schedule}
                                    </td>
                                    <td>{temps["100"]}</td>
                                    <td>{temps["200"]}</td>
                                    <td>{temps["300"]}</td>
                                    <td>{temps["400"]}</td>
                                    <td>{temps["500"]}</td>
                                    <td>{temps["600"]}</td>
                                    <td>{temps["650"]}</td>
                                    <td>{temps["700"]}</td>
                                    <td>{temps["750"]}</td>
                                  </tr>
                                ),
                              )}
                            </tbody>
                          </table>
                        </div>
                      ),
                    )}
                  </div>
                </>
              )}

              {/* Types of Pipes Section */}
              {grade.typesOfPipes && grade.typesOfPipes.length > 0 && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Types of {grade.name}
                  </h3>
                  <div className="grade-types-of-pipes">
                    {grade.typesOfPipes.map((typeGroup, index) => (
                      <div key={index} className="grade-type-group">
                        {typeGroup.image && (
                          <div className="grade-type-group-image">
                            <img
                              src={typeGroup.image}
                              alt={typeGroup.title}
                              loading="lazy"
                            />
                          </div>
                        )}
                        <h4 className="grade-type-group-title">
                          {typeGroup.title}
                        </h4>
                        <ul className="grade-type-group-list">
                          {typeGroup.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Types Section - Original */}
              {grade.types && grade.types.length > 0 && (
                <>
                  <h3
                    className="heading-md"
                    style={{ marginTop: "32px", marginBottom: "20px" }}
                  >
                    Product Types
                  </h3>
                  <ul className="grade-types-list">
                    {grade.types.map((type, index) => (
                      <li key={index}>{type}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* ✅ Cities Supplied - Using Shared Data */}
              <h3
                className="heading-md"
                style={{ marginTop: "32px", marginBottom: "20px" }}
              >
                Cities We Supply
              </h3>
              <div className="grade-cities-tags">
                {CITIES_SUPPLIED.map((city, index) => (
                  <span className="grade-city-tag" key={index}>
                    {city}
                  </span>
                ))}
              </div>

              {/* ✅ Countries Exported - Using Shared Data */}
              <h3
                className="heading-md"
                style={{ marginTop: "32px", marginBottom: "20px" }}
              >
                Countries We Export To
              </h3>
              <div className="grade-countries-tags">
                {COUNTRIES_EXPORTED.map((country, index) => (
                  <span className="grade-country-tag" key={index}>
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="grade-detail-sidebar">
              <div className="grade-composition-card card">
                <h3 className="heading-sm" style={{ marginBottom: "20px" }}>
                  Chemical Composition
                </h3>
                <table className="grade-composition-table">
                  <tbody>
                    {Object.entries(grade.chemicalComposition).map(
                      ([element, value]) => (
                        <tr key={element}>
                          <td className="grade-composition-element">
                            {element}
                          </td>
                          <td className="grade-composition-value">{value}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>

              {/* Physical Properties */}
              {grade.physicalProperties && (
                <div
                  className="grade-composition-card card"
                  style={{ marginTop: "24px" }}
                >
                  <h3 className="heading-sm" style={{ marginBottom: "20px" }}>
                    Physical Properties
                  </h3>
                  <table className="grade-composition-table">
                    <tbody>
                      {Object.entries(grade.physicalProperties).map(
                        ([property, value]) => (
                          <tr key={property}>
                            <td className="grade-composition-element">
                              {property
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </td>
                            <td className="grade-composition-value">{value}</td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="grade-detail-cta">
                <Link
                  to="/quote"
                  className="btn btn--primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Request Quote for {grade.name}
                </Link>
                <Link
                  to="/products/welded-pipes"
                  className="btn btn--outline-green"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  ← Back to Welded Pipes
                </Link>
              </div>

              {/* Navigation to Other Grades */}
              <div className="grade-navigation">
                <h4 className="grade-nav-title">Welded Pipes </h4>
                <div className="grade-nav-list">
                  {GRADE_IDS.map((id) => {
                    const gradeData = GRADE_DATA[id];
                    return (
                      <Link
                        key={id}
                        to={`/products/welded-pipes/grade/${id}`}
                        className={`grade-nav-link ${id === gradeId ? "active" : ""}`}
                      >
                        <span className="grade-nav-name">{gradeData.name}</span>
                        <span className="grade-nav-arrow">→</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
