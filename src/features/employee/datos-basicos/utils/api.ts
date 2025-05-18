import { AutocompleteOption } from "@/features/form/components/controllers/autocomplete";
import { wait } from "@/utils/wait";

/* const states = [
  {
    label: "California",
    value: "CA",
    cities: [
      { label: "Los Angeles", value: "los_angeles" },
      { label: "San Francisco", value: "san_francisco" },
      { label: "San Diego", value: "san_diego" },
      { label: "San Jose", value: "san_jose" },
    ],
  },
  {
    label: "Texas",
    value: "TX",
    cities: [
      { label: "Houston", value: "houston" },
      { label: "Dallas", value: "dallas" },
      { label: "Austin", value: "austin" },
      { label: "San Antonio", value: "san_antonio" },
    ],
  },
  {
    label: "New York",
    value: "NY",
    cities: [
      { label: "New York City", value: "new_york_city" },
      { label: "Buffalo", value: "buffalo" },
      { label: "Rochester", value: "rochester" },
      { label: "Albany", value: "albany" },
    ],
  },
  {
    label: "Florida",
    value: "FL",
    cities: [
      { label: "Miami", value: "miami" },
      { label: "Orlando", value: "orlando" },
      { label: "Tampa", value: "tampa" },
      { label: "Jacksonville", value: "jacksonville" },
    ],
  },
  {
    label: "Illinois",
    value: "IL",
    cities: [
      { label: "Chicago", value: "chicago" },
      { label: "Aurora", value: "aurora" },
      { label: "Naperville", value: "naperville" },
      { label: "Springfield", value: "springfield" },
    ],
  },
]; */

const paises = [
  {
    "label": "Afganistán",
    "value": "Afganistán",

  },
  {
    "label": "Albania",
    "value": "Albania",

  },
  {
    "label": "Alemania",
    "value": "Alemania",

  },
  {
    "label": "Andorra",
    "value": "Andorra",

  },
  {
    "label": "Angola",
    "value": "Angola",

  },
  {
    "label": "Anguila",
    "value": "Anguila",

  },
  {
    "label": "Antártida",
    "value": "Antártida",

  },
  {
    "label": "Antigua y Barbuda",
    "value": "Antigua y Barbuda",

  },
  {
    "label": "Arabia Saudita",
    "value": "Arabia Saudita",

  },
  {
    "label": "Argelia",
    "value": "Argelia",

  },
  {
    "label": "Argentina",
    "value": "Argentina",

  },
  {
    "label": "Armenia",
    "value": "Armenia",

  },
  {
    "label": "Aruba",
    "value": "Aruba",

  },
  {
    "label": "Australia",
    "value": "Australia",

  },
  {
    "label": "Austria",
    "value": "Austria",

  },
  {
    "label": "Azerbaiyán",
    "value": "Azerbaiyán",

  },
  {
    "label": "Bélgica",
    "value": "Bélgica",

  },
  {
    "label": "Bahamas",
    "value": "Bahamas",

  },
  {
    "label": "Bahrein",
    "value": "Bahrein",

  },
  {
    "label": "Bangladesh",
    "value": "Bangladesh",

  },
  {
    "label": "Barbados",
    "value": "Barbados",

  },
  {
    "label": "Belice",
    "value": "Belice",

  },
  {
    "label": "Benín",
    "value": "Benín",

  },
  {
    "label": "Bhután",
    "value": "Bhután",

  },
  {
    "label": "Bielorrusia",
    "value": "Bielorrusia",

  },
  {
    "label": "Birmania",
    "value": "Birmania",

  },
  {
    "label": "Bolivia",
    "value": "Bolivia",

  },
  {
    "label": "Bosnia y Herzegovina",
    "value": "Bosnia y Herzegovina",

  },
  {
    "label": "Botsuana",
    "value": "Botsuana",

  },
  {
    "label": "Brasil",
    "value": "Brasil",

  },
  {
    "label": "Brunéi",
    "value": "Brunéi",

  },
  {
    "label": "Bulgaria",
    "value": "Bulgaria",

  },
  {
    "label": "Burkina Faso",
    "value": "Burkina Faso",

  },
  {
    "label": "Burundi",
    "value": "Burundi",

  },
  {
    "label": "Cabo Verde",
    "value": "Cabo Verde",

  },
  {
    "label": "Camboya",
    "value": "Camboya",

  },
  {
    "label": "Camerún",
    "value": "Camerún",

  },
  {
    "label": "Canadá",
    "value": "Canadá",

  },
  {
    "label": "Chad",
    "value": "Chad",

  },
  {
    "label": "Chile",
    "value": "Chile",

  },
  {
    "label": "China",
    "value": "China",

  },
  {
    "label": "Chipre",
    "value": "Chipre",

  },
  {
    "label": "Ciudad del Vaticano",
    "value": "Ciudad del Vaticano",

  },
  {
    "label": "Colombia",
    "value": "Colombia",

  },
  {
    "label": "Comoras",
    "value": "Comoras",

  },
  {
    "label": "República del Congo",
    "value": "República del Congo",

  },
  {
    "label": "República Democrática del Congo",
    "value": "República Democrática del Congo",

  },
  {
    "label": "Corea del Norte",
    "value": "Corea del Norte",

  },
  {
    "label": "Corea del Sur",
    "value": "Corea del Sur",

  },
  {
    "label": "Costa de Marfil",
    "value": "Costa de Marfil",

  },
  {
    "label": "Costa Rica",
    "value": "Costa Rica",

  },
  {
    "label": "Croacia",
    "value": "Croacia",

  },
  {
    "label": "Cuba",
    "value": "Cuba",

  },
  {
    "label": "Curazao",
    "value": "Curazao",

  },
  {
    "label": "Dinamarca",
    "value": "Dinamarca",

  },
  {
    "label": "Dominica",
    "value": "Dominica",

  },
  {
    "label": "Ecuador",
    "value": "Ecuador",

  },
  {
    "label": "Egipto",
    "value": "Egipto",

  },
  {
    "label": "El Salvador",
    "value": "El Salvador",

  },
  {
    "label": "Emiratos Árabes Unidos",
    "value": "Emiratos Árabes Unidos",

  },
  {
    "label": "Eritrea",
    "value": "Eritrea",

  },
  {
    "label": "Eslovaquia",
    "value": "Eslovaquia",

  },
  {
    "label": "Eslovenia",
    "value": "Eslovenia",

  },
  {
    "label": "España",
    "value": "España",

  },
  {
    "label": "Estados Unidos de América",
    "value": "Estados Unidos de América",

  },
  {
    "label": "Estonia",
    "value": "Estonia",

  },
  {
    "label": "Etiopía",
    "value": "Etiopía",

  },
  {
    "label": "Filipinas",
    "value": "Filipinas",

  },
  {
    "label": "Finlandia",
    "value": "Finlandia",

  },
  {
    "label": "Fiyi",
    "value": "Fiyi",

  },
  {
    "label": "Francia",
    "value": "Francia",

  },
  {
    "label": "Gabón",
    "value": "Gabón",

  },
  {
    "label": "Gambia",
    "value": "Gambia",

  },
  {
    "label": "Georgia",
    "value": "Georgia",

  },
  {
    "label": "Ghana",
    "value": "Ghana",

  },
  {
    "label": "Gibraltar",
    "value": "Gibraltar",

  },
  {
    "label": "Granada",
    "value": "Granada",

  },
  {
    "label": "Grecia",
    "value": "Grecia",

  },
  {
    "label": "Groenlandia",
    "value": "Groenlandia",

  },
  {
    "label": "Guadalupe",
    "value": "Guadalupe",

  },
  {
    "label": "Guam",
    "value": "Guam",

  },
  {
    "label": "Guatemala",
    "value": "Guatemala",

  },
  {
    "label": "Guayana Francesa",
    "value": "Guayana Francesa",

  },
  {
    "label": "Guernsey",
    "value": "Guernsey",

  },
  {
    "label": "Guinea",
    "value": "Guinea",

  },
  {
    "label": "Guinea Ecuatorial",
    "value": "Guinea Ecuatorial",

  },
  {
    "label": "Guinea-Bissau",
    "value": "Guinea-Bissau",

  },
  {
    "label": "Guyana",
    "value": "Guyana",

  },
  {
    "label": "Haití",
    "value": "Haití",

  },
  {
    "label": "Honduras",
    "value": "Honduras",

  },
  {
    "label": "Hong kong",
    "value": "Hong kong",

  },
  {
    "label": "Hungría",
    "value": "Hungría",

  },
  {
    "label": "India",
    "value": "India",

  },
  {
    "label": "Indonesia",
    "value": "Indonesia",

  },
  {
    "label": "Irán",
    "value": "Irán",

  },
  {
    "label": "Irak",
    "value": "Irak",

  },
  {
    "label": "Irlanda",
    "value": "Irlanda",

  },
  {
    "label": "Isla Bouvet",
    "value": "Isla Bouvet",

  },
  {
    "label": "Isla de Man",
    "value": "Isla de Man",

  },
  {
    "label": "Isla de Navidad",
    "value": "Isla de Navidad",

  },
  {
    "label": "Isla Norfolk",
    "value": "Isla Norfolk",

  },
  {
    "label": "Islandia",
    "value": "Islandia",

  },
  {
    "label": "Islas Bermudas",
    "value": "Islas Bermudas",

  },
  {
    "label": "Islas Caimán",
    "value": "Islas Caimán",

  },
  {
    "label": "Islas Cocos (Keeling)",
    "value": "Islas Cocos (Keeling)",

  },
  {
    "label": "Islas Cook",
    "value": "Islas Cook",

  },
  {
    "label": "Islas de Åland",
    "value": "Islas de Åland",

  },
  {
    "label": "Islas Feroe",
    "value": "Islas Feroe",

  },
  {
    "label": "Islas Georgias del Sur y Sandwich del Sur",
    "value": "Islas Georgias del Sur y Sandwich del Sur",

  },
  {
    "label": "Islas Heard y McDonald",
    "value": "Islas Heard y McDonald",

  },
  {
    "label": "Islas Maldivas",
    "value": "Islas Maldivas",

  },
  {
    "label": "Islas Malvinas",
    "value": "Islas Malvinas",

  },
  {
    "label": "Islas Marianas del Norte",
    "value": "Islas Marianas del Norte",

  },
  {
    "label": "Islas Marshall",
    "value": "Islas Marshall",

  },
  {
    "label": "Islas Pitcairn",
    "value": "Islas Pitcairn",

  },
  {
    "label": "Islas Salomón",
    "value": "Islas Salomón",

  },
  {
    "label": "Islas Turcas y Caicos",
    "value": "Islas Turcas y Caicos",

  },
  {
    "label": "Islas Ultramarinas Menores de Estados Unidos",
    "value": "Islas Ultramarinas Menores de Estados Unidos",

  },
  {
    "label": "Islas Vírgenes Británicas",
    "value": "Islas Vírgenes Británicas",

  },
  {
    "label": "Islas Vírgenes de los Estados Unidos",
    "value": "Islas Vírgenes de los Estados Unidos",

  },
  {
    "label": "Israel",
    "value": "Israel",

  },
  {
    "label": "Italia",
    "value": "Italia",

  },
  {
    "label": "Jamaica",
    "value": "Jamaica",

  },
  {
    "label": "Japón",
    "value": "Japón",

  },
  {
    "label": "Jersey",
    "value": "Jersey",

  },
  {
    "label": "Jordania",
    "value": "Jordania",

  },
  {
    "label": "Kazajistán",
    "value": "Kazajistán",

  },
  {
    "label": "Kenia",
    "value": "Kenia",

  },
  {
    "label": "Kirguistán",
    "value": "Kirguistán",

  },
  {
    "label": "Kiribati",
    "value": "Kiribati",

  },
  {
    "label": "Kuwait",
    "value": "Kuwait",

  },
  {
    "label": "Líbano",
    "value": "Líbano",

  },
  {
    "label": "Laos",
    "value": "Laos",

  },
  {
    "label": "Lesoto",
    "value": "Lesoto",

  },
  {
    "label": "Letonia",
    "value": "Letonia",

  },
  {
    "label": "Liberia",
    "value": "Liberia",

  },
  {
    "label": "Libia",
    "value": "Libia",

  },
  {
    "label": "Liechtenstein",
    "value": "Liechtenstein",

  },
  {
    "label": "Lituania",
    "value": "Lituania",

  },
  {
    "label": "Luxemburgo",
    "value": "Luxemburgo",

  },
  {
    "label": "México",
    "value": "México",

  },
  {
    "label": "Mónaco",
    "value": "Mónaco",

  },
  {
    "label": "Macao",
    "value": "Macao",

  },
  {
    "label": "Macedônia",
    "value": "Macedônia",

  },
  {
    "label": "Madagascar",
    "value": "Madagascar",

  },
  {
    "label": "Malasia",
    "value": "Malasia",

  },
  {
    "label": "Malawi",
    "value": "Malawi",

  },
  {
    "label": "Mali",
    "value": "Mali",

  },
  {
    "label": "Malta",
    "value": "Malta",

  },
  {
    "label": "Marruecos",
    "value": "Marruecos",

  },
  {
    "label": "Martinica",
    "value": "Martinica",

  },
  {
    "label": "Mauricio",
    "value": "Mauricio",

  },
  {
    "label": "Mauritania",
    "value": "Mauritania",

  },
  {
    "label": "Mayotte",
    "value": "Mayotte",

  },
  {
    "label": "Micronesia",
    "value": "Micronesia",

  },
  {
    "label": "Moldavia",
    "value": "Moldavia",

  },
  {
    "label": "Mongolia",
    "value": "Mongolia",

  },
  {
    "label": "Montenegro",
    "value": "Montenegro",

  },
  {
    "label": "Montserrat",
    "value": "Montserrat",

  },
  {
    "label": "Mozambique",
    "value": "Mozambique",

  },
  {
    "label": "Namibia",
    "value": "Namibia",

  },
  {
    "label": "Nauru",
    "value": "Nauru",

  },
  {
    "label": "Nepal",
    "value": "Nepal",

  },
  {
    "label": "Nicaragua",
    "value": "Nicaragua",

  },
  {
    "label": "Niger",
    "value": "Niger",

  },
  {
    "label": "Nigeria",
    "value": "Nigeria",

  },
  {
    "label": "Niue",
    "value": "Niue",

  },
  {
    "label": "Noruega",
    "value": "Noruega",

  },
  {
    "label": "Nueva Caledonia",
    "value": "Nueva Caledonia",

  },
  {
    "label": "Nueva Zelanda",
    "value": "Nueva Zelanda",

  },
  {
    "label": "Omán",
    "value": "Omán",

  },
  {
    "label": "Países Bajos",
    "value": "Países Bajos",

  },
  {
    "label": "Pakistán",
    "value": "Pakistán",

  },
  {
    "label": "Palau",
    "value": "Palau",

  },
  {
    "label": "Palestina",
    "value": "Palestina",

  },
  {
    "label": "Panamá",
    "value": "Panamá",

  },
  {
    "label": "Papúa Nueva Guinea",
    "value": "Papúa Nueva Guinea",

  },
  {
    "label": "Paraguay",
    "value": "Paraguay",

  },
  {
    "label": "Perú",
    "value": "Perú",

  },
  {
    "label": "Polinesia Francesa",
    "value": "Polinesia Francesa",

  },
  {
    "label": "Polonia",
    "value": "Polonia",

  },
  {
    "label": "Portugal",
    "value": "Portugal",

  },
  {
    "label": "Puerto Rico",
    "value": "Puerto Rico",

  },
  {
    "label": "Qatar",
    "value": "Qatar",

  },
  {
    "label": "Reino Unido",
    "value": "Reino Unido",

  },
  {
    "label": "República Centroafricana",
    "value": "República Centroafricana",

  },
  {
    "label": "República Checa",
    "value": "República Checa",

  },
  {
    "label": "República Dominicana",
    "value": "República Dominicana",

  },
  {
    "label": "República de Sudán del Sur",
    "value": "República de Sudán del Sur",

  },
  {
    "label": "Reunión",
    "value": "Reunión",

  },
  {
    "label": "Ruanda",
    "value": "Ruanda",

  },
  {
    "label": "Rumanía",
    "value": "Rumanía",

  },
  {
    "label": "Rusia",
    "value": "Rusia",

  },
  {
    "label": "Sahara Occidental",
    "value": "Sahara Occidental",

  },
  {
    "label": "Samoa",
    "value": "Samoa",

  },
  {
    "label": "Samoa Americana",
    "value": "Samoa Americana",

  },
  {
    "label": "San Bartolomé",
    "value": "San Bartolomé",

  },
  {
    "label": "San Cristóbal y Nieves",
    "value": "San Cristóbal y Nieves",

  },
  {
    "label": "San Marino",
    "value": "San Marino",

  },
  {
    "label": "San Martín (Francia)",
    "value": "San Martín (Francia)",

  },
  {
    "label": "San Pedro y Miquelón",
    "value": "San Pedro y Miquelón",

  },
  {
    "label": "San Vicente y las Granadinas",
    "value": "San Vicente y las Granadinas",

  },
  {
    "label": "Santa Elena",
    "value": "Santa Elena",

  },
  {
    "label": "Santa Lucía",
    "value": "Santa Lucía",

  },
  {
    "label": "Santo Tomé y Príncipe",
    "value": "Santo Tomé y Príncipe",

  },
  {
    "label": "Senegal",
    "value": "Senegal",

  },
  {
    "label": "Serbia",
    "value": "Serbia",

  },
  {
    "label": "Seychelles",
    "value": "Seychelles",

  },
  {
    "label": "Sierra Leona",
    "value": "Sierra Leona",

  },
  {
    "label": "Singapur",
    "value": "Singapur",

  },
  {
    "label": "Sint Maarten",
    "value": "Sint Maarten",

  },
  {
    "label": "Siria",
    "value": "Siria",

  },
  {
    "label": "Somalia",
    "value": "Somalia",

  },
  {
    "label": "Sri lanka",
    "value": "Sri lanka",

  },
  {
    "label": "Sudáfrica",
    "value": "Sudáfrica",

  },
  {
    "label": "Sudán",
    "value": "Sudán",

  },
  {
    "label": "Suecia",
    "value": "Suecia",

  },
  {
    "label": "Suiza",
    "value": "Suiza",

  },
  {
    "label": "Surinám",
    "value": "Surinám",

  },
  {
    "label": "Svalbard y Jan Mayen",
    "value": "Svalbard y Jan Mayen",

  },
  {
    "label": "Swazilandia",
    "value": "Swazilandia",

  },
  {
    "label": "Tayikistán",
    "value": "Tayikistán",

  },
  {
    "label": "Tailandia",
    "value": "Tailandia",

  },
  {
    "label": "Taiwán",
    "value": "Taiwán",

  },
  {
    "label": "Tanzania",
    "value": "Tanzania",

  },
  {
    "label": "Territorio Británico del Océano Índico",
    "value": "Territorio Británico del Océano Índico",

  },
  {
    "label": "Territorios Australes y Antárticas Franceses",
    "value": "Territorios Australes y Antárticas Franceses",

  },
  {
    "label": "Timor Oriental",
    "value": "Timor Oriental",

  },
  {
    "label": "Togo",
    "value": "Togo",

  },
  {
    "label": "Tokelau",
    "value": "Tokelau",

  },
  {
    "label": "Tonga",
    "value": "Tonga",

  },
  {
    "label": "Trinidad y Tobago",
    "value": "Trinidad y Tobago",

  },
  {
    "label": "Tunez",
    "value": "Tunez",

  },
  {
    "label": "Turkmenistán",
    "value": "Turkmenistán",

  },
  {
    "label": "Turquía",
    "value": "Turquía",

  },
  {
    "label": "Tuvalu",
    "value": "Tuvalu",

  },
  {
    "label": "Ucrania",
    "value": "Ucrania",

  },
  {
    "label": "Uganda",
    "value": "Uganda",

  },
  {
    "label": "Uruguay",
    "value": "Uruguay",

  },
  {
    "label": "Uzbekistán",
    "value": "Uzbekistán",

  },
  {
    "label": "Vanuatu",
    "value": "Vanuatu",

  },
  {
    "label": "Venezuela",
    "value": "Venezuela",

  },
  {
    "label": "Vietnam",
    "value": "Vietnam",

  },
  {
    "label": "Wallis y Futuna",
    "value": "Wallis y Futuna",

  },
  {
    "label": "Yemen",
    "value": "Yemen",

  },
  {
    "label": "Yibuti",
    "value": "Yibuti",

  },
  {
    "label": "Zambia",
    "value": "Zambia",

  },
  {
    "label": "Zimbabue",
    "value": "Zimbabue",

  }
];
const states = [
  {
    "label": "AMAZONAS",
    "value": "91",
    "cities": [
      {
        "label": "LETICIA",
        "value": "LETICIA"
      },
      {
        "label": "EL ENCANTO",
        "value": "EL ENCANTO"
      },
      {
        "label": "LA CHORRERA",
        "value": "LA CHORRERA"
      },
      {
        "label": "LA PEDRERA",
        "value": "LA PEDRERA"
      },
      {
        "label": "LA VICTORIA",
        "value": "LA VICTORIA"
      },
      {
        "label": "MIRITÍ - PARANÁ",
        "value": "MIRITÍ - PARANÁ"
      },
      {
        "label": "PUERTO ALEGRÍA",
        "value": "PUERTO ALEGRÍA"
      },
      {
        "label": "PUERTO ARICA",
        "value": "PUERTO ARICA"
      },
      {
        "label": "PUERTO NARIÑO",
        "value": "PUERTO NARIÑO"
      },
      {
        "label": "PUERTO SANTANDER",
        "value": "PUERTO SANTANDER"
      },
      {
        "label": "TARAPACÁ",
        "value": "TARAPACÁ"
      }
    ]
  },
  {
    "label": "ANTIOQUIA",
    "value": "5",
    "cities": [
      {
        "label": "MEDELLÍN",
        "value": "MEDELLÍN"
      },
      {
        "label": "ABEJORRAL",
        "value": "ABEJORRAL"
      },
      {
        "label": "ABRIAQUÍ",
        "value": "ABRIAQUÍ"
      },
      {
        "label": "ALEJANDRÍA",
        "value": "ALEJANDRÍA"
      },
      {
        "label": "AMAGÁ",
        "value": "AMAGÁ"
      },
      {
        "label": "AMALFI",
        "value": "AMALFI"
      },
      {
        "label": "ANDES",
        "value": "ANDES"
      },
      {
        "label": "ANGELÓPOLIS",
        "value": "ANGELÓPOLIS"
      },
      {
        "label": "ANGOSTURA",
        "value": "ANGOSTURA"
      },
      {
        "label": "ANORÍ",
        "value": "ANORÍ"
      },
      {
        "label": "SANTA FÉ DE ANTIOQUIA",
        "value": "SANTA FÉ DE ANTIOQUIA"
      },
      {
        "label": "ANZÁ",
        "value": "ANZÁ"
      },
      {
        "label": "APARTADÓ",
        "value": "APARTADÓ"
      },
      {
        "label": "ARBOLETES",
        "value": "ARBOLETES"
      },
      {
        "label": "ARGELIA",
        "value": "ARGELIA"
      },
      {
        "label": "ARMENIA",
        "value": "ARMENIA"
      },
      {
        "label": "BARBOSA",
        "value": "BARBOSA"
      },
      {
        "label": "BELMIRA",
        "value": "BELMIRA"
      },
      {
        "label": "BELLO",
        "value": "BELLO"
      },
      {
        "label": "BETANIA",
        "value": "BETANIA"
      },
      {
        "label": "BETULIA",
        "value": "BETULIA"
      },
      {
        "label": "CIUDAD BOLÍVAR",
        "value": "CIUDAD BOLÍVAR"
      },
      {
        "label": "BRICEÑO",
        "value": "BRICEÑO"
      },
      {
        "label": "BURITICÁ",
        "value": "BURITICÁ"
      },
      {
        "label": "CÁCERES",
        "value": "CÁCERES"
      },
      {
        "label": "CAICEDO",
        "value": "CAICEDO"
      },
      {
        "label": "CALDAS",
        "value": "CALDAS"
      },
      {
        "label": "CAMPAMENTO",
        "value": "CAMPAMENTO"
      },
      {
        "label": "CAÑASGORDAS",
        "value": "CAÑASGORDAS"
      },
      {
        "label": "CARACOLÍ",
        "value": "CARACOLÍ"
      },
      {
        "label": "CARAMANTA",
        "value": "CARAMANTA"
      },
      {
        "label": "CAREPA",
        "value": "CAREPA"
      },
      {
        "label": "EL CARMEN DE VIBORAL",
        "value": "EL CARMEN DE VIBORAL"
      },
      {
        "label": "CAROLINA",
        "value": "CAROLINA"
      },
      {
        "label": "CAUCASIA",
        "value": "CAUCASIA"
      },
      {
        "label": "CHIGORODÓ",
        "value": "CHIGORODÓ"
      },
      {
        "label": "CISNEROS",
        "value": "CISNEROS"
      },
      {
        "label": "COCORNÁ",
        "value": "COCORNÁ"
      },
      {
        "label": "CONCEPCIÓN",
        "value": "CONCEPCIÓN"
      },
      {
        "label": "CONCORDIA",
        "value": "CONCORDIA"
      },
      {
        "label": "COPACABANA",
        "value": "COPACABANA"
      },
      {
        "label": "DABEIBA",
        "value": "DABEIBA"
      },
      {
        "label": "DONMATÍAS",
        "value": "DONMATÍAS"
      },
      {
        "label": "EBÉJICO",
        "value": "EBÉJICO"
      },
      {
        "label": "EL BAGRE",
        "value": "EL BAGRE"
      },
      {
        "label": "ENTRERRÍOS",
        "value": "ENTRERRÍOS"
      },
      {
        "label": "ENVIGADO",
        "value": "ENVIGADO"
      },
      {
        "label": "FREDONIA",
        "value": "FREDONIA"
      },
      {
        "label": "FRONTINO",
        "value": "FRONTINO"
      },
      {
        "label": "GIRALDO",
        "value": "GIRALDO"
      },
      {
        "label": "GIRARDOTA",
        "value": "GIRARDOTA"
      },
      {
        "label": "GÓMEZ PLATA",
        "value": "GÓMEZ PLATA"
      },
      {
        "label": "GRANADA",
        "value": "GRANADA"
      },
      {
        "label": "GUADALUPE",
        "value": "GUADALUPE"
      },
      {
        "label": "GUARNE",
        "value": "GUARNE"
      },
      {
        "label": "GUATAPÉ",
        "value": "GUATAPÉ"
      },
      {
        "label": "HELICONIA",
        "value": "HELICONIA"
      },
      {
        "label": "HISPANIA",
        "value": "HISPANIA"
      },
      {
        "label": "ITAGÜÍ",
        "value": "ITAGÜÍ"
      },
      {
        "label": "ITUANGO",
        "value": "ITUANGO"
      },
      {
        "label": "JARDÍN",
        "value": "JARDÍN"
      },
      {
        "label": "JERICÓ",
        "value": "JERICÓ"
      },
      {
        "label": "LA CEJA",
        "value": "LA CEJA"
      },
      {
        "label": "LA ESTRELLA",
        "value": "LA ESTRELLA"
      },
      {
        "label": "LA PINTADA",
        "value": "LA PINTADA"
      },
      {
        "label": "LA UNIÓN",
        "value": "LA UNIÓN"
      },
      {
        "label": "LIBORINA",
        "value": "LIBORINA"
      },
      {
        "label": "MACEO",
        "value": "MACEO"
      },
      {
        "label": "MARINILLA",
        "value": "MARINILLA"
      },
      {
        "label": "MONTEBELLO",
        "value": "MONTEBELLO"
      },
      {
        "label": "MURINDÓ",
        "value": "MURINDÓ"
      },
      {
        "label": "MUTATÁ",
        "value": "MUTATÁ"
      },
      {
        "label": "NARIÑO",
        "value": "NARIÑO"
      },
      {
        "label": "NECOCLÍ",
        "value": "NECOCLÍ"
      },
      {
        "label": "NECHÍ",
        "value": "NECHÍ"
      },
      {
        "label": "OLAYA",
        "value": "OLAYA"
      },
      {
        "label": "PEÑOL",
        "value": "PEÑOL"
      },
      {
        "label": "PEQUE",
        "value": "PEQUE"
      },
      {
        "label": "PUEBLORRICO",
        "value": "PUEBLORRICO"
      },
      {
        "label": "PUERTO BERRÍO",
        "value": "PUERTO BERRÍO"
      },
      {
        "label": "PUERTO NARE",
        "value": "PUERTO NARE"
      },
      {
        "label": "PUERTO TRIUNFO",
        "value": "PUERTO TRIUNFO"
      },
      {
        "label": "REMEDIOS",
        "value": "REMEDIOS"
      },
      {
        "label": "RETIRO",
        "value": "RETIRO"
      },
      {
        "label": "RIONEGRO",
        "value": "RIONEGRO"
      },
      {
        "label": "SABANALARGA",
        "value": "SABANALARGA"
      },
      {
        "label": "SABANETA",
        "value": "SABANETA"
      },
      {
        "label": "SALGAR",
        "value": "SALGAR"
      },
      {
        "label": "SAN ANDRÉS DE CUERQUÍA",
        "value": "SAN ANDRÉS DE CUERQUÍA"
      },
      {
        "label": "SAN CARLOS",
        "value": "SAN CARLOS"
      },
      {
        "label": "SAN FRANCISCO",
        "value": "SAN FRANCISCO"
      },
      {
        "label": "SAN JERÓNIMO",
        "value": "SAN JERÓNIMO"
      },
      {
        "label": "SAN JOSÉ DE LA MONTAÑA",
        "value": "SAN JOSÉ DE LA MONTAÑA"
      },
      {
        "label": "SAN JUAN DE URABÁ",
        "value": "SAN JUAN DE URABÁ"
      },
      {
        "label": "SAN LUIS",
        "value": "SAN LUIS"
      },
      {
        "label": "SAN PEDRO DE LOS MILAGROS",
        "value": "SAN PEDRO DE LOS MILAGROS"
      },
      {
        "label": "SAN PEDRO DE URABÁ",
        "value": "SAN PEDRO DE URABÁ"
      },
      {
        "label": "SAN RAFAEL",
        "value": "SAN RAFAEL"
      },
      {
        "label": "SAN ROQUE",
        "value": "SAN ROQUE"
      },
      {
        "label": "SAN VICENTE FERRER",
        "value": "SAN VICENTE FERRER"
      },
      {
        "label": "SANTA BÁRBARA",
        "value": "SANTA BÁRBARA"
      },
      {
        "label": "SANTA ROSA DE OSOS",
        "value": "SANTA ROSA DE OSOS"
      },
      {
        "label": "SANTO DOMINGO",
        "value": "SANTO DOMINGO"
      },
      {
        "label": "EL SANTUARIO",
        "value": "EL SANTUARIO"
      },
      {
        "label": "SEGOVIA",
        "value": "SEGOVIA"
      },
      {
        "label": "SONSÓN",
        "value": "SONSÓN"
      },
      {
        "label": "SOPETRÁN",
        "value": "SOPETRÁN"
      },
      {
        "label": "TÁMESIS",
        "value": "TÁMESIS"
      },
      {
        "label": "TARAZÁ",
        "value": "TARAZÁ"
      },
      {
        "label": "TARSO",
        "value": "TARSO"
      },
      {
        "label": "TITIRIBÍ",
        "value": "TITIRIBÍ"
      },
      {
        "label": "TOLEDO",
        "value": "TOLEDO"
      },
      {
        "label": "TURBO",
        "value": "TURBO"
      },
      {
        "label": "URAMITA",
        "value": "URAMITA"
      },
      {
        "label": "URRAO",
        "value": "URRAO"
      },
      {
        "label": "VALDIVIA",
        "value": "VALDIVIA"
      },
      {
        "label": "VALPARAÍSO",
        "value": "VALPARAÍSO"
      },
      {
        "label": "VEGACHÍ",
        "value": "VEGACHÍ"
      },
      {
        "label": "VENECIA",
        "value": "VENECIA"
      },
      {
        "label": "VIGÍA DEL FUERTE",
        "value": "VIGÍA DEL FUERTE"
      },
      {
        "label": "YALÍ",
        "value": "YALÍ"
      },
      {
        "label": "YARUMAL",
        "value": "YARUMAL"
      },
      {
        "label": "YOLOMBÓ",
        "value": "YOLOMBÓ"
      },
      {
        "label": "YONDÓ",
        "value": "YONDÓ"
      },
      {
        "label": "ZARAGOZA",
        "value": "ZARAGOZA"
      }
    ]
  },
  {
    "label": "ARAUCA",
    "value": "81",
    "cities": [
      {
        "label": "ARAUCA",
        "value": "ARAUCA"
      },
      {
        "label": "ARAUQUITA",
        "value": "ARAUQUITA"
      },
      {
        "label": "CRAVO NORTE",
        "value": "CRAVO NORTE"
      },
      {
        "label": "FORTUL",
        "value": "FORTUL"
      },
      {
        "label": "PUERTO RONDÓN",
        "value": "PUERTO RONDÓN"
      },
      {
        "label": "SARAVENA",
        "value": "SARAVENA"
      },
      {
        "label": "TAME",
        "value": "TAME"
      }
    ]
  },
  {
    "label": "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA",
    "value": "88",
    "cities": [
      {
        "label": "SAN ANDRÉS",
        "value": "SAN ANDRÉS"
      },
      {
        "label": "PROVIDENCIA",
        "value": "PROVIDENCIA"
      }
    ]
  },
  {
    "label": "ATLÁNTICO",
    "value": "8",
    "cities": [
      {
        "label": "BARRANQUILLA",
        "value": "BARRANQUILLA"
      },
      {
        "label": "BARANOA",
        "value": "BARANOA"
      },
      {
        "label": "CAMPO DE LA CRUZ",
        "value": "CAMPO DE LA CRUZ"
      },
      {
        "label": "CANDELARIA",
        "value": "CANDELARIA"
      },
      {
        "label": "GALAPA",
        "value": "GALAPA"
      },
      {
        "label": "JUAN DE ACOSTA",
        "value": "JUAN DE ACOSTA"
      },
      {
        "label": "LURUACO",
        "value": "LURUACO"
      },
      {
        "label": "MALAMBO",
        "value": "MALAMBO"
      },
      {
        "label": "MANATÍ",
        "value": "MANATÍ"
      },
      {
        "label": "PALMAR DE VARELA",
        "value": "PALMAR DE VARELA"
      },
      {
        "label": "PIOJÓ",
        "value": "PIOJÓ"
      },
      {
        "label": "POLONUEVO",
        "value": "POLONUEVO"
      },
      {
        "label": "PONEDERA",
        "value": "PONEDERA"
      },
      {
        "label": "PUERTO COLOMBIA",
        "value": "PUERTO COLOMBIA"
      },
      {
        "label": "REPELÓN",
        "value": "REPELÓN"
      },
      {
        "label": "SABANAGRANDE",
        "value": "SABANAGRANDE"
      },
      {
        "label": "SABANALARGA",
        "value": "SABANALARGA"
      },
      {
        "label": "SANTA LUCÍA",
        "value": "SANTA LUCÍA"
      },
      {
        "label": "SANTO TOMÁS",
        "value": "SANTO TOMÁS"
      },
      {
        "label": "SOLEDAD",
        "value": "SOLEDAD"
      },
      {
        "label": "SUAN",
        "value": "SUAN"
      },
      {
        "label": "TUBARÁ",
        "value": "TUBARÁ"
      },
      {
        "label": "USIACURÍ",
        "value": "USIACURÍ"
      }
    ]
  },
  {
    "label": "BOGOTÁ, D.C.",
    "value": "11",
    "cities": [
      {
        "label": "BOGOTÁ, D.C.",
        "value": "BOGOTÁ, D.C."
      }
    ]
  },
  {
    "label": "BOLÍVAR",
    "value": "13",
    "cities": [
      {
        "label": "CARTAGENA DE INDIAS",
        "value": "CARTAGENA DE INDIAS"
      },
      {
        "label": "ACHÍ",
        "value": "ACHÍ"
      },
      {
        "label": "ALTOS DEL ROSARIO",
        "value": "ALTOS DEL ROSARIO"
      },
      {
        "label": "ARENAL",
        "value": "ARENAL"
      },
      {
        "label": "ARJONA",
        "value": "ARJONA"
      },
      {
        "label": "ARROYOHONDO",
        "value": "ARROYOHONDO"
      },
      {
        "label": "BARRANCO DE LOBA",
        "value": "BARRANCO DE LOBA"
      },
      {
        "label": "CALAMAR",
        "value": "CALAMAR"
      },
      {
        "label": "CANTAGALLO",
        "value": "CANTAGALLO"
      },
      {
        "label": "CICUCO",
        "value": "CICUCO"
      },
      {
        "label": "CÓRDOBA",
        "value": "CÓRDOBA"
      },
      {
        "label": "CLEMENCIA",
        "value": "CLEMENCIA"
      },
      {
        "label": "EL CARMEN DE BOLÍVAR",
        "value": "EL CARMEN DE BOLÍVAR"
      },
      {
        "label": "EL GUAMO",
        "value": "EL GUAMO"
      },
      {
        "label": "EL PEÑÓN",
        "value": "EL PEÑÓN"
      },
      {
        "label": "HATILLO DE LOBA",
        "value": "HATILLO DE LOBA"
      },
      {
        "label": "MAGANGUÉ",
        "value": "MAGANGUÉ"
      },
      {
        "label": "MAHATES",
        "value": "MAHATES"
      },
      {
        "label": "MARGARITA",
        "value": "MARGARITA"
      },
      {
        "label": "MARÍA LA BAJA",
        "value": "MARÍA LA BAJA"
      },
      {
        "label": "MONTECRISTO",
        "value": "MONTECRISTO"
      },
      {
        "label": "SANTA CRUZ DE MOMPOX",
        "value": "SANTA CRUZ DE MOMPOX"
      },
      {
        "label": "MORALES",
        "value": "MORALES"
      },
      {
        "label": "NOROSÍ",
        "value": "NOROSÍ"
      },
      {
        "label": "PINILLOS",
        "value": "PINILLOS"
      },
      {
        "label": "REGIDOR",
        "value": "REGIDOR"
      },
      {
        "label": "RÍO VIEJO",
        "value": "RÍO VIEJO"
      },
      {
        "label": "SAN CRISTÓBAL",
        "value": "SAN CRISTÓBAL"
      },
      {
        "label": "SAN ESTANISLAO",
        "value": "SAN ESTANISLAO"
      },
      {
        "label": "SAN FERNANDO",
        "value": "SAN FERNANDO"
      },
      {
        "label": "SAN JACINTO",
        "value": "SAN JACINTO"
      },
      {
        "label": "SAN JACINTO DEL CAUCA",
        "value": "SAN JACINTO DEL CAUCA"
      },
      {
        "label": "SAN JUAN NEPOMUCENO",
        "value": "SAN JUAN NEPOMUCENO"
      },
      {
        "label": "SAN MARTÍN DE LOBA",
        "value": "SAN MARTÍN DE LOBA"
      },
      {
        "label": "SAN PABLO",
        "value": "SAN PABLO"
      },
      {
        "label": "SANTA CATALINA",
        "value": "SANTA CATALINA"
      },
      {
        "label": "SANTA ROSA",
        "value": "SANTA ROSA"
      },
      {
        "label": "SANTA ROSA DEL SUR",
        "value": "SANTA ROSA DEL SUR"
      },
      {
        "label": "SIMITÍ",
        "value": "SIMITÍ"
      },
      {
        "label": "SOPLAVIENTO",
        "value": "SOPLAVIENTO"
      },
      {
        "label": "TALAIGUA NUEVO",
        "value": "TALAIGUA NUEVO"
      },
      {
        "label": "TIQUISIO",
        "value": "TIQUISIO"
      },
      {
        "label": "TURBACO",
        "value": "TURBACO"
      },
      {
        "label": "TURBANÁ",
        "value": "TURBANÁ"
      },
      {
        "label": "VILLANUEVA",
        "value": "VILLANUEVA"
      },
      {
        "label": "ZAMBRANO",
        "value": "ZAMBRANO"
      }
    ]
  },
  {
    "label": "BOYACÁ",
    "value": "15",
    "cities": [
      {
        "label": "TUNJA",
        "value": "TUNJA"
      },
      {
        "label": "ALMEIDA",
        "value": "ALMEIDA"
      },
      {
        "label": "AQUITANIA",
        "value": "AQUITANIA"
      },
      {
        "label": "ARCABUCO",
        "value": "ARCABUCO"
      },
      {
        "label": "BELÉN",
        "value": "BELÉN"
      },
      {
        "label": "BERBEO",
        "value": "BERBEO"
      },
      {
        "label": "BETÉITIVA",
        "value": "BETÉITIVA"
      },
      {
        "label": "BOAVITA",
        "value": "BOAVITA"
      },
      {
        "label": "BOYACÁ",
        "value": "BOYACÁ"
      },
      {
        "label": "BRICEÑO",
        "value": "BRICEÑO"
      },
      {
        "label": "BUENAVISTA",
        "value": "BUENAVISTA"
      },
      {
        "label": "BUSBANZÁ",
        "value": "BUSBANZÁ"
      },
      {
        "label": "CALDAS",
        "value": "CALDAS"
      },
      {
        "label": "CAMPOHERMOSO",
        "value": "CAMPOHERMOSO"
      },
      {
        "label": "CERINZA",
        "value": "CERINZA"
      },
      {
        "label": "CHINAVITA",
        "value": "CHINAVITA"
      },
      {
        "label": "CHIQUINQUIRÁ",
        "value": "CHIQUINQUIRÁ"
      },
      {
        "label": "CHISCAS",
        "value": "CHISCAS"
      },
      {
        "label": "CHITA",
        "value": "CHITA"
      },
      {
        "label": "CHITARAQUE",
        "value": "CHITARAQUE"
      },
      {
        "label": "CHIVATÁ",
        "value": "CHIVATÁ"
      },
      {
        "label": "CIÉNEGA",
        "value": "CIÉNEGA"
      },
      {
        "label": "CÓMBITA",
        "value": "CÓMBITA"
      },
      {
        "label": "COPER",
        "value": "COPER"
      },
      {
        "label": "CORRALES",
        "value": "CORRALES"
      },
      {
        "label": "COVARACHÍA",
        "value": "COVARACHÍA"
      },
      {
        "label": "CUBARÁ",
        "value": "CUBARÁ"
      },
      {
        "label": "CUCAITA",
        "value": "CUCAITA"
      },
      {
        "label": "CUÍTIVA",
        "value": "CUÍTIVA"
      },
      {
        "label": "CHÍQUIZA",
        "value": "CHÍQUIZA"
      },
      {
        "label": "CHIVOR",
        "value": "CHIVOR"
      },
      {
        "label": "DUITAMA",
        "value": "DUITAMA"
      },
      {
        "label": "EL COCUY",
        "value": "EL COCUY"
      },
      {
        "label": "EL ESPINO",
        "value": "EL ESPINO"
      },
      {
        "label": "FIRAVITOBA",
        "value": "FIRAVITOBA"
      },
      {
        "label": "FLORESTA",
        "value": "FLORESTA"
      },
      {
        "label": "GACHANTIVÁ",
        "value": "GACHANTIVÁ"
      },
      {
        "label": "GÁMEZA",
        "value": "GÁMEZA"
      },
      {
        "label": "GARAGOA",
        "value": "GARAGOA"
      },
      {
        "label": "GUACAMAYAS",
        "value": "GUACAMAYAS"
      },
      {
        "label": "GUATEQUE",
        "value": "GUATEQUE"
      },
      {
        "label": "GUAYATÁ",
        "value": "GUAYATÁ"
      },
      {
        "label": "GÜICÁN DE LA SIERRA",
        "value": "GÜICÁN DE LA SIERRA"
      },
      {
        "label": "IZA",
        "value": "IZA"
      },
      {
        "label": "JENESANO",
        "value": "JENESANO"
      },
      {
        "label": "JERICÓ",
        "value": "JERICÓ"
      },
      {
        "label": "LABRANZAGRANDE",
        "value": "LABRANZAGRANDE"
      },
      {
        "label": "LA CAPILLA",
        "value": "LA CAPILLA"
      },
      {
        "label": "LA VICTORIA",
        "value": "LA VICTORIA"
      },
      {
        "label": "LA UVITA",
        "value": "LA UVITA"
      },
      {
        "label": "VILLA DE LEYVA",
        "value": "VILLA DE LEYVA"
      },
      {
        "label": "MACANAL",
        "value": "MACANAL"
      },
      {
        "label": "MARIPÍ",
        "value": "MARIPÍ"
      },
      {
        "label": "MIRAFLORES",
        "value": "MIRAFLORES"
      },
      {
        "label": "MONGUA",
        "value": "MONGUA"
      },
      {
        "label": "MONGUÍ",
        "value": "MONGUÍ"
      },
      {
        "label": "MONIQUIRÁ",
        "value": "MONIQUIRÁ"
      },
      {
        "label": "MOTAVITA",
        "value": "MOTAVITA"
      },
      {
        "label": "MUZO",
        "value": "MUZO"
      },
      {
        "label": "NOBSA",
        "value": "NOBSA"
      },
      {
        "label": "NUEVO COLÓN",
        "value": "NUEVO COLÓN"
      },
      {
        "label": "OICATÁ",
        "value": "OICATÁ"
      },
      {
        "label": "OTANCHE",
        "value": "OTANCHE"
      },
      {
        "label": "PACHAVITA",
        "value": "PACHAVITA"
      },
      {
        "label": "PÁEZ",
        "value": "PÁEZ"
      },
      {
        "label": "PAIPA",
        "value": "PAIPA"
      },
      {
        "label": "PAJARITO",
        "value": "PAJARITO"
      },
      {
        "label": "PANQUEBA",
        "value": "PANQUEBA"
      },
      {
        "label": "PAUNA",
        "value": "PAUNA"
      },
      {
        "label": "PAYA",
        "value": "PAYA"
      },
      {
        "label": "PAZ DE RÍO",
        "value": "PAZ DE RÍO"
      },
      {
        "label": "PESCA",
        "value": "PESCA"
      },
      {
        "label": "PISBA",
        "value": "PISBA"
      },
      {
        "label": "PUERTO BOYACÁ",
        "value": "PUERTO BOYACÁ"
      },
      {
        "label": "QUÍPAMA",
        "value": "QUÍPAMA"
      },
      {
        "label": "RAMIRIQUÍ",
        "value": "RAMIRIQUÍ"
      },
      {
        "label": "RÁQUIRA",
        "value": "RÁQUIRA"
      },
      {
        "label": "RONDÓN",
        "value": "RONDÓN"
      },
      {
        "label": "SABOYÁ",
        "value": "SABOYÁ"
      },
      {
        "label": "SÁCHICA",
        "value": "SÁCHICA"
      },
      {
        "label": "SAMACÁ",
        "value": "SAMACÁ"
      },
      {
        "label": "SAN EDUARDO",
        "value": "SAN EDUARDO"
      },
      {
        "label": "SAN JOSÉ DE PARE",
        "value": "SAN JOSÉ DE PARE"
      },
      {
        "label": "SAN LUIS DE GACENO",
        "value": "SAN LUIS DE GACENO"
      },
      {
        "label": "SAN MATEO",
        "value": "SAN MATEO"
      },
      {
        "label": "SAN MIGUEL DE SEMA",
        "value": "SAN MIGUEL DE SEMA"
      },
      {
        "label": "SAN PABLO DE BORBUR",
        "value": "SAN PABLO DE BORBUR"
      },
      {
        "label": "SANTANA",
        "value": "SANTANA"
      },
      {
        "label": "SANTA MARÍA",
        "value": "SANTA MARÍA"
      },
      {
        "label": "SANTA ROSA DE VITERBO",
        "value": "SANTA ROSA DE VITERBO"
      },
      {
        "label": "SANTA SOFÍA",
        "value": "SANTA SOFÍA"
      },
      {
        "label": "SATIVANORTE",
        "value": "SATIVANORTE"
      },
      {
        "label": "SATIVASUR",
        "value": "SATIVASUR"
      },
      {
        "label": "SIACHOQUE",
        "value": "SIACHOQUE"
      },
      {
        "label": "SOATÁ",
        "value": "SOATÁ"
      },
      {
        "label": "SOCOTÁ",
        "value": "SOCOTÁ"
      },
      {
        "label": "SOCHA",
        "value": "SOCHA"
      },
      {
        "label": "SOGAMOSO",
        "value": "SOGAMOSO"
      },
      {
        "label": "SOMONDOCO",
        "value": "SOMONDOCO"
      },
      {
        "label": "SORA",
        "value": "SORA"
      },
      {
        "label": "SOTAQUIRÁ",
        "value": "SOTAQUIRÁ"
      },
      {
        "label": "SORACÁ",
        "value": "SORACÁ"
      },
      {
        "label": "SUSACÓN",
        "value": "SUSACÓN"
      },
      {
        "label": "SUTAMARCHÁN",
        "value": "SUTAMARCHÁN"
      },
      {
        "label": "SUTATENZA",
        "value": "SUTATENZA"
      },
      {
        "label": "TASCO",
        "value": "TASCO"
      },
      {
        "label": "TENZA",
        "value": "TENZA"
      },
      {
        "label": "TIBANÁ",
        "value": "TIBANÁ"
      },
      {
        "label": "TIBASOSA",
        "value": "TIBASOSA"
      },
      {
        "label": "TINJACÁ",
        "value": "TINJACÁ"
      },
      {
        "label": "TIPACOQUE",
        "value": "TIPACOQUE"
      },
      {
        "label": "TOCA",
        "value": "TOCA"
      },
      {
        "label": "TOGÜÍ",
        "value": "TOGÜÍ"
      },
      {
        "label": "TÓPAGA",
        "value": "TÓPAGA"
      },
      {
        "label": "TOTA",
        "value": "TOTA"
      },
      {
        "label": "TUNUNGUÁ",
        "value": "TUNUNGUÁ"
      },
      {
        "label": "TURMEQUÉ",
        "value": "TURMEQUÉ"
      },
      {
        "label": "TUTA",
        "value": "TUTA"
      },
      {
        "label": "TUTAZÁ",
        "value": "TUTAZÁ"
      },
      {
        "label": "ÚMBITA",
        "value": "ÚMBITA"
      },
      {
        "label": "VENTAQUEMADA",
        "value": "VENTAQUEMADA"
      },
      {
        "label": "VIRACACHÁ",
        "value": "VIRACACHÁ"
      },
      {
        "label": "ZETAQUIRA",
        "value": "ZETAQUIRA"
      }
    ]
  },
  {
    "label": "CALDAS",
    "value": "17",
    "cities": [
      {
        "label": "MANIZALES",
        "value": "MANIZALES"
      },
      {
        "label": "AGUADAS",
        "value": "AGUADAS"
      },
      {
        "label": "ANSERMA",
        "value": "ANSERMA"
      },
      {
        "label": "ARANZAZU",
        "value": "ARANZAZU"
      },
      {
        "label": "BELALCÁZAR",
        "value": "BELALCÁZAR"
      },
      {
        "label": "CHINCHINÁ",
        "value": "CHINCHINÁ"
      },
      {
        "label": "FILADELFIA",
        "value": "FILADELFIA"
      },
      {
        "label": "LA DORADA",
        "value": "LA DORADA"
      },
      {
        "label": "LA MERCED",
        "value": "LA MERCED"
      },
      {
        "label": "MANZANARES",
        "value": "MANZANARES"
      },
      {
        "label": "MARMATO",
        "value": "MARMATO"
      },
      {
        "label": "MARQUETALIA",
        "value": "MARQUETALIA"
      },
      {
        "label": "MARULANDA",
        "value": "MARULANDA"
      },
      {
        "label": "NEIRA",
        "value": "NEIRA"
      },
      {
        "label": "NORCASIA",
        "value": "NORCASIA"
      },
      {
        "label": "PÁCORA",
        "value": "PÁCORA"
      },
      {
        "label": "PALESTINA",
        "value": "PALESTINA"
      },
      {
        "label": "PENSILVANIA",
        "value": "PENSILVANIA"
      },
      {
        "label": "RIOSUCIO",
        "value": "RIOSUCIO"
      },
      {
        "label": "RISARALDA",
        "value": "RISARALDA"
      },
      {
        "label": "SALAMINA",
        "value": "SALAMINA"
      },
      {
        "label": "SAMANÁ",
        "value": "SAMANÁ"
      },
      {
        "label": "SAN JOSÉ",
        "value": "SAN JOSÉ"
      },
      {
        "label": "SUPÍA",
        "value": "SUPÍA"
      },
      {
        "label": "VICTORIA",
        "value": "VICTORIA"
      },
      {
        "label": "VILLAMARÍA",
        "value": "VILLAMARÍA"
      },
      {
        "label": "VITERBO",
        "value": "VITERBO"
      }
    ]
  },
  {
    "label": "CAQUETÁ",
    "value": "18",
    "cities": [
      {
        "label": "FLORENCIA",
        "value": "FLORENCIA"
      },
      {
        "label": "ALBANIA",
        "value": "ALBANIA"
      },
      {
        "label": "BELÉN DE LOS ANDAQUÍES",
        "value": "BELÉN DE LOS ANDAQUÍES"
      },
      {
        "label": "CARTAGENA DEL CHAIRÁ",
        "value": "CARTAGENA DEL CHAIRÁ"
      },
      {
        "label": "CURILLO",
        "value": "CURILLO"
      },
      {
        "label": "EL DONCELLO",
        "value": "EL DONCELLO"
      },
      {
        "label": "EL PAUJÍL",
        "value": "EL PAUJÍL"
      },
      {
        "label": "LA MONTAÑITA",
        "value": "LA MONTAÑITA"
      },
      {
        "label": "MILÁN",
        "value": "MILÁN"
      },
      {
        "label": "MORELIA",
        "value": "MORELIA"
      },
      {
        "label": "PUERTO RICO",
        "value": "PUERTO RICO"
      },
      {
        "label": "SAN JOSÉ DEL FRAGUA",
        "value": "SAN JOSÉ DEL FRAGUA"
      },
      {
        "label": "SAN VICENTE DEL CAGUÁN",
        "value": "SAN VICENTE DEL CAGUÁN"
      },
      {
        "label": "SOLANO",
        "value": "SOLANO"
      },
      {
        "label": "SOLITA",
        "value": "SOLITA"
      },
      {
        "label": "VALPARAÍSO",
        "value": "VALPARAÍSO"
      }
    ]
  },
  {
    "label": "CASANARE",
    "value": "85",
    "cities": [
      {
        "label": "YOPAL",
        "value": "YOPAL"
      },
      {
        "label": "AGUAZUL",
        "value": "AGUAZUL"
      },
      {
        "label": "CHÁMEZA",
        "value": "CHÁMEZA"
      },
      {
        "label": "HATO COROZAL",
        "value": "HATO COROZAL"
      },
      {
        "label": "LA SALINA",
        "value": "LA SALINA"
      },
      {
        "label": "MANÍ",
        "value": "MANÍ"
      },
      {
        "label": "MONTERREY",
        "value": "MONTERREY"
      },
      {
        "label": "NUNCHÍA",
        "value": "NUNCHÍA"
      },
      {
        "label": "OROCUÉ",
        "value": "OROCUÉ"
      },
      {
        "label": "PAZ DE ARIPORO",
        "value": "PAZ DE ARIPORO"
      },
      {
        "label": "PORE",
        "value": "PORE"
      },
      {
        "label": "RECETOR",
        "value": "RECETOR"
      },
      {
        "label": "SABANALARGA",
        "value": "SABANALARGA"
      },
      {
        "label": "SÁCAMA",
        "value": "SÁCAMA"
      },
      {
        "label": "SAN LUIS DE PALENQUE",
        "value": "SAN LUIS DE PALENQUE"
      },
      {
        "label": "TÁMARA",
        "value": "TÁMARA"
      },
      {
        "label": "TAURAMENA",
        "value": "TAURAMENA"
      },
      {
        "label": "TRINIDAD",
        "value": "TRINIDAD"
      },
      {
        "label": "VILLANUEVA",
        "value": "VILLANUEVA"
      }
    ]
  },
  {
    "label": "CAUCA",
    "value": "19",
    "cities": [
      {
        "label": "POPAYÁN",
        "value": "POPAYÁN"
      },
      {
        "label": "ALMAGUER",
        "value": "ALMAGUER"
      },
      {
        "label": "ARGELIA",
        "value": "ARGELIA"
      },
      {
        "label": "BALBOA",
        "value": "BALBOA"
      },
      {
        "label": "BOLÍVAR",
        "value": "BOLÍVAR"
      },
      {
        "label": "BUENOS AIRES",
        "value": "BUENOS AIRES"
      },
      {
        "label": "CAJIBÍO",
        "value": "CAJIBÍO"
      },
      {
        "label": "CALDONO",
        "value": "CALDONO"
      },
      {
        "label": "CALOTO",
        "value": "CALOTO"
      },
      {
        "label": "CORINTO",
        "value": "CORINTO"
      },
      {
        "label": "EL TAMBO",
        "value": "EL TAMBO"
      },
      {
        "label": "FLORENCIA",
        "value": "FLORENCIA"
      },
      {
        "label": "GUACHENÉ",
        "value": "GUACHENÉ"
      },
      {
        "label": "GUAPI",
        "value": "GUAPI"
      },
      {
        "label": "INZÁ",
        "value": "INZÁ"
      },
      {
        "label": "JAMBALÓ",
        "value": "JAMBALÓ"
      },
      {
        "label": "LA SIERRA",
        "value": "LA SIERRA"
      },
      {
        "label": "LA VEGA",
        "value": "LA VEGA"
      },
      {
        "label": "LÓPEZ DE MICAY",
        "value": "LÓPEZ DE MICAY"
      },
      {
        "label": "MERCADERES",
        "value": "MERCADERES"
      },
      {
        "label": "MIRANDA",
        "value": "MIRANDA"
      },
      {
        "label": "MORALES",
        "value": "MORALES"
      },
      {
        "label": "PADILLA",
        "value": "PADILLA"
      },
      {
        "label": "PÁEZ",
        "value": "PÁEZ"
      },
      {
        "label": "PATÍA",
        "value": "PATÍA"
      },
      {
        "label": "PIAMONTE",
        "value": "PIAMONTE"
      },
      {
        "label": "PIENDAMÓ - TUNÍA",
        "value": "PIENDAMÓ - TUNÍA"
      },
      {
        "label": "PUERTO TEJADA",
        "value": "PUERTO TEJADA"
      },
      {
        "label": "PURACÉ",
        "value": "PURACÉ"
      },
      {
        "label": "ROSAS",
        "value": "ROSAS"
      },
      {
        "label": "SAN SEBASTIÁN",
        "value": "SAN SEBASTIÁN"
      },
      {
        "label": "SANTANDER DE QUILICHAO",
        "value": "SANTANDER DE QUILICHAO"
      },
      {
        "label": "SANTA ROSA",
        "value": "SANTA ROSA"
      },
      {
        "label": "SILVIA",
        "value": "SILVIA"
      },
      {
        "label": "SOTARÁ - PAISPAMBA",
        "value": "SOTARÁ - PAISPAMBA"
      },
      {
        "label": "SUÁREZ",
        "value": "SUÁREZ"
      },
      {
        "label": "SUCRE",
        "value": "SUCRE"
      },
      {
        "label": "TIMBÍO",
        "value": "TIMBÍO"
      },
      {
        "label": "TIMBIQUÍ",
        "value": "TIMBIQUÍ"
      },
      {
        "label": "TORIBÍO",
        "value": "TORIBÍO"
      },
      {
        "label": "TOTORÓ",
        "value": "TOTORÓ"
      },
      {
        "label": "VILLA RICA",
        "value": "VILLA RICA"
      }
    ]
  },
  {
    "label": "CESAR",
    "value": "20",
    "cities": [
      {
        "label": "VALLEDUPAR",
        "value": "VALLEDUPAR"
      },
      {
        "label": "AGUACHICA",
        "value": "AGUACHICA"
      },
      {
        "label": "AGUSTÍN CODAZZI",
        "value": "AGUSTÍN CODAZZI"
      },
      {
        "label": "ASTREA",
        "value": "ASTREA"
      },
      {
        "label": "BECERRIL",
        "value": "BECERRIL"
      },
      {
        "label": "BOSCONIA",
        "value": "BOSCONIA"
      },
      {
        "label": "CHIMICHAGUA",
        "value": "CHIMICHAGUA"
      },
      {
        "label": "CHIRIGUANÁ",
        "value": "CHIRIGUANÁ"
      },
      {
        "label": "CURUMANÍ",
        "value": "CURUMANÍ"
      },
      {
        "label": "EL COPEY",
        "value": "EL COPEY"
      },
      {
        "label": "EL PASO",
        "value": "EL PASO"
      },
      {
        "label": "GAMARRA",
        "value": "GAMARRA"
      },
      {
        "label": "GONZÁLEZ",
        "value": "GONZÁLEZ"
      },
      {
        "label": "LA GLORIA",
        "value": "LA GLORIA"
      },
      {
        "label": "LA JAGUA DE IBIRICO",
        "value": "LA JAGUA DE IBIRICO"
      },
      {
        "label": "MANAURE BALCÓN DEL CESAR",
        "value": "MANAURE BALCÓN DEL CESAR"
      },
      {
        "label": "PAILITAS",
        "value": "PAILITAS"
      },
      {
        "label": "PELAYA",
        "value": "PELAYA"
      },
      {
        "label": "PUEBLO BELLO",
        "value": "PUEBLO BELLO"
      },
      {
        "label": "RÍO DE ORO",
        "value": "RÍO DE ORO"
      },
      {
        "label": "LA PAZ",
        "value": "LA PAZ"
      },
      {
        "label": "SAN ALBERTO",
        "value": "SAN ALBERTO"
      },
      {
        "label": "SAN DIEGO",
        "value": "SAN DIEGO"
      },
      {
        "label": "SAN MARTÍN",
        "value": "SAN MARTÍN"
      },
      {
        "label": "TAMALAMEQUE",
        "value": "TAMALAMEQUE"
      }
    ]
  },
  {
    "label": "CHOCÓ",
    "value": "27",
    "cities": [
      {
        "label": "QUIBDÓ",
        "value": "QUIBDÓ"
      },
      {
        "label": "ACANDÍ",
        "value": "ACANDÍ"
      },
      {
        "label": "ALTO BAUDÓ",
        "value": "ALTO BAUDÓ"
      },
      {
        "label": "ATRATO",
        "value": "ATRATO"
      },
      {
        "label": "BAGADÓ",
        "value": "BAGADÓ"
      },
      {
        "label": "BAHÍA SOLANO",
        "value": "BAHÍA SOLANO"
      },
      {
        "label": "BAJO BAUDÓ",
        "value": "BAJO BAUDÓ"
      },
      {
        "label": "BOJAYÁ",
        "value": "BOJAYÁ"
      },
      {
        "label": "EL CANTÓN DEL SAN PABLO",
        "value": "EL CANTÓN DEL SAN PABLO"
      },
      {
        "label": "CARMEN DEL DARIÉN",
        "value": "CARMEN DEL DARIÉN"
      },
      {
        "label": "CÉRTEGUI",
        "value": "CÉRTEGUI"
      },
      {
        "label": "CONDOTO",
        "value": "CONDOTO"
      },
      {
        "label": "EL CARMEN DE ATRATO",
        "value": "EL CARMEN DE ATRATO"
      },
      {
        "label": "EL LITORAL DEL SAN JUAN",
        "value": "EL LITORAL DEL SAN JUAN"
      },
      {
        "label": "ISTMINA",
        "value": "ISTMINA"
      },
      {
        "label": "JURADÓ",
        "value": "JURADÓ"
      },
      {
        "label": "LLORÓ",
        "value": "LLORÓ"
      },
      {
        "label": "MEDIO ATRATO",
        "value": "MEDIO ATRATO"
      },
      {
        "label": "MEDIO BAUDÓ",
        "value": "MEDIO BAUDÓ"
      },
      {
        "label": "MEDIO SAN JUAN",
        "value": "MEDIO SAN JUAN"
      },
      {
        "label": "NÓVITA",
        "value": "NÓVITA"
      },
      {
        "label": "NUEVO BELÉN DE BAJIRÁ",
        "value": "NUEVO BELÉN DE BAJIRÁ"
      },
      {
        "label": "NUQUÍ",
        "value": "NUQUÍ"
      },
      {
        "label": "RÍO IRÓ",
        "value": "RÍO IRÓ"
      },
      {
        "label": "RÍO QUITO",
        "value": "RÍO QUITO"
      },
      {
        "label": "RIOSUCIO",
        "value": "RIOSUCIO"
      },
      {
        "label": "SAN JOSÉ DEL PALMAR",
        "value": "SAN JOSÉ DEL PALMAR"
      },
      {
        "label": "SIPÍ",
        "value": "SIPÍ"
      },
      {
        "label": "TADÓ",
        "value": "TADÓ"
      },
      {
        "label": "UNGUÍA",
        "value": "UNGUÍA"
      },
      {
        "label": "UNIÓN PANAMERICANA",
        "value": "UNIÓN PANAMERICANA"
      }
    ]
  },
  {
    "label": "CÓRDOBA",
    "value": "23",
    "cities": [
      {
        "label": "MONTERÍA",
        "value": "MONTERÍA"
      },
      {
        "label": "AYAPEL",
        "value": "AYAPEL"
      },
      {
        "label": "BUENAVISTA",
        "value": "BUENAVISTA"
      },
      {
        "label": "CANALETE",
        "value": "CANALETE"
      },
      {
        "label": "CERETÉ",
        "value": "CERETÉ"
      },
      {
        "label": "CHIMÁ",
        "value": "CHIMÁ"
      },
      {
        "label": "CHINÚ",
        "value": "CHINÚ"
      },
      {
        "label": "CIÉNAGA DE ORO",
        "value": "CIÉNAGA DE ORO"
      },
      {
        "label": "COTORRA",
        "value": "COTORRA"
      },
      {
        "label": "LA APARTADA",
        "value": "LA APARTADA"
      },
      {
        "label": "LORICA",
        "value": "LORICA"
      },
      {
        "label": "LOS CÓRDOBAS",
        "value": "LOS CÓRDOBAS"
      },
      {
        "label": "MOMIL",
        "value": "MOMIL"
      },
      {
        "label": "MONTELÍBANO",
        "value": "MONTELÍBANO"
      },
      {
        "label": "MOÑITOS",
        "value": "MOÑITOS"
      },
      {
        "label": "PLANETA RICA",
        "value": "PLANETA RICA"
      },
      {
        "label": "PUEBLO NUEVO",
        "value": "PUEBLO NUEVO"
      },
      {
        "label": "PUERTO ESCONDIDO",
        "value": "PUERTO ESCONDIDO"
      },
      {
        "label": "PUERTO LIBERTADOR",
        "value": "PUERTO LIBERTADOR"
      },
      {
        "label": "PURÍSIMA DE LA CONCEPCIÓN",
        "value": "PURÍSIMA DE LA CONCEPCIÓN"
      },
      {
        "label": "SAHAGÚN",
        "value": "SAHAGÚN"
      },
      {
        "label": "SAN ANDRÉS DE SOTAVENTO",
        "value": "SAN ANDRÉS DE SOTAVENTO"
      },
      {
        "label": "SAN ANTERO",
        "value": "SAN ANTERO"
      },
      {
        "label": "SAN BERNARDO DEL VIENTO",
        "value": "SAN BERNARDO DEL VIENTO"
      },
      {
        "label": "SAN CARLOS",
        "value": "SAN CARLOS"
      },
      {
        "label": "SAN JOSÉ DE URÉ",
        "value": "SAN JOSÉ DE URÉ"
      },
      {
        "label": "SAN PELAYO",
        "value": "SAN PELAYO"
      },
      {
        "label": "TIERRALTA",
        "value": "TIERRALTA"
      },
      {
        "label": "TUCHÍN",
        "value": "TUCHÍN"
      },
      {
        "label": "VALENCIA",
        "value": "VALENCIA"
      }
    ]
  },
  {
    "label": "CUNDINAMARCA",
    "value": "25",
    "cities": [
      {
        "label": "AGUA DE DIOS",
        "value": "AGUA DE DIOS"
      },
      {
        "label": "ALBÁN",
        "value": "ALBÁN"
      },
      {
        "label": "ANAPOIMA",
        "value": "ANAPOIMA"
      },
      {
        "label": "ANOLAIMA",
        "value": "ANOLAIMA"
      },
      {
        "label": "ARBELÁEZ",
        "value": "ARBELÁEZ"
      },
      {
        "label": "BELTRÁN",
        "value": "BELTRÁN"
      },
      {
        "label": "BITUIMA",
        "value": "BITUIMA"
      },
      {
        "label": "BOJACÁ",
        "value": "BOJACÁ"
      },
      {
        "label": "CABRERA",
        "value": "CABRERA"
      },
      {
        "label": "CACHIPAY",
        "value": "CACHIPAY"
      },
      {
        "label": "CAJICÁ",
        "value": "CAJICÁ"
      },
      {
        "label": "CAPARRAPÍ",
        "value": "CAPARRAPÍ"
      },
      {
        "label": "CÁQUEZA",
        "value": "CÁQUEZA"
      },
      {
        "label": "CARMEN DE CARUPA",
        "value": "CARMEN DE CARUPA"
      },
      {
        "label": "CHAGUANÍ",
        "value": "CHAGUANÍ"
      },
      {
        "label": "CHÍA",
        "value": "CHÍA"
      },
      {
        "label": "CHIPAQUE",
        "value": "CHIPAQUE"
      },
      {
        "label": "CHOACHÍ",
        "value": "CHOACHÍ"
      },
      {
        "label": "CHOCONTÁ",
        "value": "CHOCONTÁ"
      },
      {
        "label": "COGUA",
        "value": "COGUA"
      },
      {
        "label": "COTA",
        "value": "COTA"
      },
      {
        "label": "CUCUNUBÁ",
        "value": "CUCUNUBÁ"
      },
      {
        "label": "EL COLEGIO",
        "value": "EL COLEGIO"
      },
      {
        "label": "EL PEÑÓN",
        "value": "EL PEÑÓN"
      },
      {
        "label": "EL ROSAL",
        "value": "EL ROSAL"
      },
      {
        "label": "FACATATIVÁ",
        "value": "FACATATIVÁ"
      },
      {
        "label": "FÓMEQUE",
        "value": "FÓMEQUE"
      },
      {
        "label": "FOSCA",
        "value": "FOSCA"
      },
      {
        "label": "FUNZA",
        "value": "FUNZA"
      },
      {
        "label": "FÚQUENE",
        "value": "FÚQUENE"
      },
      {
        "label": "FUSAGASUGÁ",
        "value": "FUSAGASUGÁ"
      },
      {
        "label": "GACHALÁ",
        "value": "GACHALÁ"
      },
      {
        "label": "GACHANCIPÁ",
        "value": "GACHANCIPÁ"
      },
      {
        "label": "GACHETÁ",
        "value": "GACHETÁ"
      },
      {
        "label": "GAMA",
        "value": "GAMA"
      },
      {
        "label": "GIRARDOT",
        "value": "GIRARDOT"
      },
      {
        "label": "GRANADA",
        "value": "GRANADA"
      },
      {
        "label": "GUACHETÁ",
        "value": "GUACHETÁ"
      },
      {
        "label": "GUADUAS",
        "value": "GUADUAS"
      },
      {
        "label": "GUASCA",
        "value": "GUASCA"
      },
      {
        "label": "GUATAQUÍ",
        "value": "GUATAQUÍ"
      },
      {
        "label": "GUATAVITA",
        "value": "GUATAVITA"
      },
      {
        "label": "GUAYABAL DE SÍQUIMA",
        "value": "GUAYABAL DE SÍQUIMA"
      },
      {
        "label": "GUAYABETAL",
        "value": "GUAYABETAL"
      },
      {
        "label": "GUTIÉRREZ",
        "value": "GUTIÉRREZ"
      },
      {
        "label": "JERUSALÉN",
        "value": "JERUSALÉN"
      },
      {
        "label": "JUNÍN",
        "value": "JUNÍN"
      },
      {
        "label": "LA CALERA",
        "value": "LA CALERA"
      },
      {
        "label": "LA MESA",
        "value": "LA MESA"
      },
      {
        "label": "LA PALMA",
        "value": "LA PALMA"
      },
      {
        "label": "LA PEÑA",
        "value": "LA PEÑA"
      },
      {
        "label": "LA VEGA",
        "value": "LA VEGA"
      },
      {
        "label": "LENGUAZAQUE",
        "value": "LENGUAZAQUE"
      },
      {
        "label": "MACHETÁ",
        "value": "MACHETÁ"
      },
      {
        "label": "MADRID",
        "value": "MADRID"
      },
      {
        "label": "MANTA",
        "value": "MANTA"
      },
      {
        "label": "MEDINA",
        "value": "MEDINA"
      },
      {
        "label": "MOSQUERA",
        "value": "MOSQUERA"
      },
      {
        "label": "NARIÑO",
        "value": "NARIÑO"
      },
      {
        "label": "NEMOCÓN",
        "value": "NEMOCÓN"
      },
      {
        "label": "NILO",
        "value": "NILO"
      },
      {
        "label": "NIMAIMA",
        "value": "NIMAIMA"
      },
      {
        "label": "NOCAIMA",
        "value": "NOCAIMA"
      },
      {
        "label": "VENECIA",
        "value": "VENECIA"
      },
      {
        "label": "PACHO",
        "value": "PACHO"
      },
      {
        "label": "PAIME",
        "value": "PAIME"
      },
      {
        "label": "PANDI",
        "value": "PANDI"
      },
      {
        "label": "PARATEBUENO",
        "value": "PARATEBUENO"
      },
      {
        "label": "PASCA",
        "value": "PASCA"
      },
      {
        "label": "PUERTO SALGAR",
        "value": "PUERTO SALGAR"
      },
      {
        "label": "PULÍ",
        "value": "PULÍ"
      },
      {
        "label": "QUEBRADANEGRA",
        "value": "QUEBRADANEGRA"
      },
      {
        "label": "QUETAME",
        "value": "QUETAME"
      },
      {
        "label": "QUIPILE",
        "value": "QUIPILE"
      },
      {
        "label": "APULO",
        "value": "APULO"
      },
      {
        "label": "RICAURTE",
        "value": "RICAURTE"
      },
      {
        "label": "SAN ANTONIO DEL TEQUENDAMA",
        "value": "SAN ANTONIO DEL TEQUENDAMA"
      },
      {
        "label": "SAN BERNARDO",
        "value": "SAN BERNARDO"
      },
      {
        "label": "SAN CAYETANO",
        "value": "SAN CAYETANO"
      },
      {
        "label": "SAN FRANCISCO",
        "value": "SAN FRANCISCO"
      },
      {
        "label": "SAN JUAN DE RIOSECO",
        "value": "SAN JUAN DE RIOSECO"
      },
      {
        "label": "SASAIMA",
        "value": "SASAIMA"
      },
      {
        "label": "SESQUILÉ",
        "value": "SESQUILÉ"
      },
      {
        "label": "SIBATÉ",
        "value": "SIBATÉ"
      },
      {
        "label": "SILVANIA",
        "value": "SILVANIA"
      },
      {
        "label": "SIMIJACA",
        "value": "SIMIJACA"
      },
      {
        "label": "SOACHA",
        "value": "SOACHA"
      },
      {
        "label": "SOPÓ",
        "value": "SOPÓ"
      },
      {
        "label": "SUBACHOQUE",
        "value": "SUBACHOQUE"
      },
      {
        "label": "SUESCA",
        "value": "SUESCA"
      },
      {
        "label": "SUPATÁ",
        "value": "SUPATÁ"
      },
      {
        "label": "SUSA",
        "value": "SUSA"
      },
      {
        "label": "SUTATAUSA",
        "value": "SUTATAUSA"
      },
      {
        "label": "TABIO",
        "value": "TABIO"
      },
      {
        "label": "TAUSA",
        "value": "TAUSA"
      },
      {
        "label": "TENA",
        "value": "TENA"
      },
      {
        "label": "TENJO",
        "value": "TENJO"
      },
      {
        "label": "TIBACUY",
        "value": "TIBACUY"
      },
      {
        "label": "TIBIRITA",
        "value": "TIBIRITA"
      },
      {
        "label": "TOCAIMA",
        "value": "TOCAIMA"
      },
      {
        "label": "TOCANCIPÁ",
        "value": "TOCANCIPÁ"
      },
      {
        "label": "TOPAIPÍ",
        "value": "TOPAIPÍ"
      },
      {
        "label": "UBALÁ",
        "value": "UBALÁ"
      },
      {
        "label": "UBAQUE",
        "value": "UBAQUE"
      },
      {
        "label": "VILLA DE SAN DIEGO DE UBATÉ",
        "value": "VILLA DE SAN DIEGO DE UBATÉ"
      },
      {
        "label": "UNE",
        "value": "UNE"
      },
      {
        "label": "ÚTICA",
        "value": "ÚTICA"
      },
      {
        "label": "VERGARA",
        "value": "VERGARA"
      },
      {
        "label": "VIANÍ",
        "value": "VIANÍ"
      },
      {
        "label": "VILLAGÓMEZ",
        "value": "VILLAGÓMEZ"
      },
      {
        "label": "VILLAPINZÓN",
        "value": "VILLAPINZÓN"
      },
      {
        "label": "VILLETA",
        "value": "VILLETA"
      },
      {
        "label": "VIOTÁ",
        "value": "VIOTÁ"
      },
      {
        "label": "YACOPÍ",
        "value": "YACOPÍ"
      },
      {
        "label": "ZIPACÓN",
        "value": "ZIPACÓN"
      },
      {
        "label": "ZIPAQUIRÁ",
        "value": "ZIPAQUIRÁ"
      }
    ]
  },
  {
    "label": "GUAINÍA",
    "value": "94",
    "cities": [
      {
        "label": "INÍRIDA",
        "value": "INÍRIDA"
      },
      {
        "label": "BARRANCOMINAS",
        "value": "BARRANCOMINAS"
      },
      {
        "label": "SAN FELIPE",
        "value": "SAN FELIPE"
      },
      {
        "label": "PUERTO COLOMBIA",
        "value": "PUERTO COLOMBIA"
      },
      {
        "label": "LA GUADALUPE",
        "value": "LA GUADALUPE"
      },
      {
        "label": "CACAHUAL",
        "value": "CACAHUAL"
      },
      {
        "label": "PANA PANA",
        "value": "PANA PANA"
      },
      {
        "label": "MORICHAL",
        "value": "MORICHAL"
      }
    ]
  },
  {
    "label": "GUAVIARE",
    "value": "95",
    "cities": [
      {
        "label": "SAN JOSÉ DEL GUAVIARE",
        "value": "SAN JOSÉ DEL GUAVIARE"
      },
      {
        "label": "CALAMAR",
        "value": "CALAMAR"
      },
      {
        "label": "EL RETORNO",
        "value": "EL RETORNO"
      },
      {
        "label": "MIRAFLORES",
        "value": "MIRAFLORES"
      }
    ]
  },
  {
    "label": "HUILA",
    "value": "41",
    "cities": [
      {
        "label": "NEIVA",
        "value": "NEIVA"
      },
      {
        "label": "ACEVEDO",
        "value": "ACEVEDO"
      },
      {
        "label": "AGRADO",
        "value": "AGRADO"
      },
      {
        "label": "AIPE",
        "value": "AIPE"
      },
      {
        "label": "ALGECIRAS",
        "value": "ALGECIRAS"
      },
      {
        "label": "ALTAMIRA",
        "value": "ALTAMIRA"
      },
      {
        "label": "BARAYA",
        "value": "BARAYA"
      },
      {
        "label": "CAMPOALEGRE",
        "value": "CAMPOALEGRE"
      },
      {
        "label": "COLOMBIA",
        "value": "COLOMBIA"
      },
      {
        "label": "ELÍAS",
        "value": "ELÍAS"
      },
      {
        "label": "GARZÓN",
        "value": "GARZÓN"
      },
      {
        "label": "GIGANTE",
        "value": "GIGANTE"
      },
      {
        "label": "GUADALUPE",
        "value": "GUADALUPE"
      },
      {
        "label": "HOBO",
        "value": "HOBO"
      },
      {
        "label": "ÍQUIRA",
        "value": "ÍQUIRA"
      },
      {
        "label": "ISNOS",
        "value": "ISNOS"
      },
      {
        "label": "LA ARGENTINA",
        "value": "LA ARGENTINA"
      },
      {
        "label": "LA PLATA",
        "value": "LA PLATA"
      },
      {
        "label": "NÁTAGA",
        "value": "NÁTAGA"
      },
      {
        "label": "OPORAPA",
        "value": "OPORAPA"
      },
      {
        "label": "PAICOL",
        "value": "PAICOL"
      },
      {
        "label": "PALERMO",
        "value": "PALERMO"
      },
      {
        "label": "PALESTINA",
        "value": "PALESTINA"
      },
      {
        "label": "PITAL",
        "value": "PITAL"
      },
      {
        "label": "PITALITO",
        "value": "PITALITO"
      },
      {
        "label": "RIVERA",
        "value": "RIVERA"
      },
      {
        "label": "SALADOBLANCO",
        "value": "SALADOBLANCO"
      },
      {
        "label": "SAN AGUSTÍN",
        "value": "SAN AGUSTÍN"
      },
      {
        "label": "SANTA MARÍA",
        "value": "SANTA MARÍA"
      },
      {
        "label": "SUAZA",
        "value": "SUAZA"
      },
      {
        "label": "TARQUI",
        "value": "TARQUI"
      },
      {
        "label": "TESALIA",
        "value": "TESALIA"
      },
      {
        "label": "TELLO",
        "value": "TELLO"
      },
      {
        "label": "TERUEL",
        "value": "TERUEL"
      },
      {
        "label": "TIMANÁ",
        "value": "TIMANÁ"
      },
      {
        "label": "VILLAVIEJA",
        "value": "VILLAVIEJA"
      },
      {
        "label": "YAGUARÁ",
        "value": "YAGUARÁ"
      }
    ]
  },
  {
    "label": "LA GUAJIRA",
    "value": "44",
    "cities": [
      {
        "label": "RIOHACHA",
        "value": "RIOHACHA"
      },
      {
        "label": "ALBANIA",
        "value": "ALBANIA"
      },
      {
        "label": "BARRANCAS",
        "value": "BARRANCAS"
      },
      {
        "label": "DIBULLA",
        "value": "DIBULLA"
      },
      {
        "label": "DISTRACCIÓN",
        "value": "DISTRACCIÓN"
      },
      {
        "label": "EL MOLINO",
        "value": "EL MOLINO"
      },
      {
        "label": "FONSECA",
        "value": "FONSECA"
      },
      {
        "label": "HATONUEVO",
        "value": "HATONUEVO"
      },
      {
        "label": "LA JAGUA DEL PILAR",
        "value": "LA JAGUA DEL PILAR"
      },
      {
        "label": "MAICAO",
        "value": "MAICAO"
      },
      {
        "label": "MANAURE",
        "value": "MANAURE"
      },
      {
        "label": "SAN JUAN DEL CESAR",
        "value": "SAN JUAN DEL CESAR"
      },
      {
        "label": "URIBIA",
        "value": "URIBIA"
      },
      {
        "label": "URUMITA",
        "value": "URUMITA"
      },
      {
        "label": "VILLANUEVA",
        "value": "VILLANUEVA"
      }
    ]
  },
  {
    "label": "MAGDALENA",
    "value": "47",
    "cities": [
      {
        "label": "SANTA MARTA",
        "value": "SANTA MARTA"
      },
      {
        "label": "ALGARROBO",
        "value": "ALGARROBO"
      },
      {
        "label": "ARACATACA",
        "value": "ARACATACA"
      },
      {
        "label": "ARIGUANÍ",
        "value": "ARIGUANÍ"
      },
      {
        "label": "CERRO DE SAN ANTONIO",
        "value": "CERRO DE SAN ANTONIO"
      },
      {
        "label": "CHIVOLO",
        "value": "CHIVOLO"
      },
      {
        "label": "CIÉNAGA",
        "value": "CIÉNAGA"
      },
      {
        "label": "CONCORDIA",
        "value": "CONCORDIA"
      },
      {
        "label": "EL BANCO",
        "value": "EL BANCO"
      },
      {
        "label": "EL PIÑÓN",
        "value": "EL PIÑÓN"
      },
      {
        "label": "EL RETÉN",
        "value": "EL RETÉN"
      },
      {
        "label": "FUNDACIÓN",
        "value": "FUNDACIÓN"
      },
      {
        "label": "GUAMAL",
        "value": "GUAMAL"
      },
      {
        "label": "NUEVA GRANADA",
        "value": "NUEVA GRANADA"
      },
      {
        "label": "PEDRAZA",
        "value": "PEDRAZA"
      },
      {
        "label": "PIJIÑO DEL CARMEN",
        "value": "PIJIÑO DEL CARMEN"
      },
      {
        "label": "PIVIJAY",
        "value": "PIVIJAY"
      },
      {
        "label": "PLATO",
        "value": "PLATO"
      },
      {
        "label": "PUEBLOVIEJO",
        "value": "PUEBLOVIEJO"
      },
      {
        "label": "REMOLINO",
        "value": "REMOLINO"
      },
      {
        "label": "SABANAS DE SAN ÁNGEL",
        "value": "SABANAS DE SAN ÁNGEL"
      },
      {
        "label": "SALAMINA",
        "value": "SALAMINA"
      },
      {
        "label": "SAN SEBASTIÁN DE BUENAVISTA",
        "value": "SAN SEBASTIÁN DE BUENAVISTA"
      },
      {
        "label": "SAN ZENÓN",
        "value": "SAN ZENÓN"
      },
      {
        "label": "SANTA ANA",
        "value": "SANTA ANA"
      },
      {
        "label": "SANTA BÁRBARA DE PINTO",
        "value": "SANTA BÁRBARA DE PINTO"
      },
      {
        "label": "SITIONUEVO",
        "value": "SITIONUEVO"
      },
      {
        "label": "TENERIFE",
        "value": "TENERIFE"
      },
      {
        "label": "ZAPAYÁN",
        "value": "ZAPAYÁN"
      },
      {
        "label": "ZONA BANANERA",
        "value": "ZONA BANANERA"
      }
    ]
  },
  {
    "label": "META",
    "value": "50",
    "cities": [
      {
        "label": "VILLAVICENCIO",
        "value": "VILLAVICENCIO"
      },
      {
        "label": "ACACÍAS",
        "value": "ACACÍAS"
      },
      {
        "label": "BARRANCA DE UPÍA",
        "value": "BARRANCA DE UPÍA"
      },
      {
        "label": "CABUYARO",
        "value": "CABUYARO"
      },
      {
        "label": "CASTILLA LA NUEVA",
        "value": "CASTILLA LA NUEVA"
      },
      {
        "label": "CUBARRAL",
        "value": "CUBARRAL"
      },
      {
        "label": "CUMARAL",
        "value": "CUMARAL"
      },
      {
        "label": "EL CALVARIO",
        "value": "EL CALVARIO"
      },
      {
        "label": "EL CASTILLO",
        "value": "EL CASTILLO"
      },
      {
        "label": "EL DORADO",
        "value": "EL DORADO"
      },
      {
        "label": "FUENTE DE ORO",
        "value": "FUENTE DE ORO"
      },
      {
        "label": "GRANADA",
        "value": "GRANADA"
      },
      {
        "label": "GUAMAL",
        "value": "GUAMAL"
      },
      {
        "label": "MAPIRIPÁN",
        "value": "MAPIRIPÁN"
      },
      {
        "label": "MESETAS",
        "value": "MESETAS"
      },
      {
        "label": "LA MACARENA",
        "value": "LA MACARENA"
      },
      {
        "label": "URIBE",
        "value": "URIBE"
      },
      {
        "label": "LEJANÍAS",
        "value": "LEJANÍAS"
      },
      {
        "label": "PUERTO CONCORDIA",
        "value": "PUERTO CONCORDIA"
      },
      {
        "label": "PUERTO GAITÁN",
        "value": "PUERTO GAITÁN"
      },
      {
        "label": "PUERTO LÓPEZ",
        "value": "PUERTO LÓPEZ"
      },
      {
        "label": "PUERTO LLERAS",
        "value": "PUERTO LLERAS"
      },
      {
        "label": "PUERTO RICO",
        "value": "PUERTO RICO"
      },
      {
        "label": "RESTREPO",
        "value": "RESTREPO"
      },
      {
        "label": "SAN CARLOS DE GUAROA",
        "value": "SAN CARLOS DE GUAROA"
      },
      {
        "label": "SAN JUAN DE ARAMA",
        "value": "SAN JUAN DE ARAMA"
      },
      {
        "label": "SAN JUANITO",
        "value": "SAN JUANITO"
      },
      {
        "label": "SAN MARTÍN",
        "value": "SAN MARTÍN"
      },
      {
        "label": "VISTAHERMOSA",
        "value": "VISTAHERMOSA"
      }
    ]
  },
  {
    "label": "NARIÑO",
    "value": "52",
    "cities": [
      {
        "label": "PASTO",
        "value": "PASTO"
      },
      {
        "label": "ALBÁN",
        "value": "ALBÁN"
      },
      {
        "label": "ALDANA",
        "value": "ALDANA"
      },
      {
        "label": "ANCUYA",
        "value": "ANCUYA"
      },
      {
        "label": "ARBOLEDA",
        "value": "ARBOLEDA"
      },
      {
        "label": "BARBACOAS",
        "value": "BARBACOAS"
      },
      {
        "label": "BELÉN",
        "value": "BELÉN"
      },
      {
        "label": "BUESACO",
        "value": "BUESACO"
      },
      {
        "label": "COLÓN",
        "value": "COLÓN"
      },
      {
        "label": "CONSACÁ",
        "value": "CONSACÁ"
      },
      {
        "label": "CONTADERO",
        "value": "CONTADERO"
      },
      {
        "label": "CÓRDOBA",
        "value": "CÓRDOBA"
      },
      {
        "label": "CUASPUD CARLOSAMA",
        "value": "CUASPUD CARLOSAMA"
      },
      {
        "label": "CUMBAL",
        "value": "CUMBAL"
      },
      {
        "label": "CUMBITARA",
        "value": "CUMBITARA"
      },
      {
        "label": "CHACHAGÜÍ",
        "value": "CHACHAGÜÍ"
      },
      {
        "label": "EL CHARCO",
        "value": "EL CHARCO"
      },
      {
        "label": "EL PEÑOL",
        "value": "EL PEÑOL"
      },
      {
        "label": "EL ROSARIO",
        "value": "EL ROSARIO"
      },
      {
        "label": "EL TABLÓN DE GÓMEZ",
        "value": "EL TABLÓN DE GÓMEZ"
      },
      {
        "label": "EL TAMBO",
        "value": "EL TAMBO"
      },
      {
        "label": "FUNES",
        "value": "FUNES"
      },
      {
        "label": "GUACHUCAL",
        "value": "GUACHUCAL"
      },
      {
        "label": "GUAITARILLA",
        "value": "GUAITARILLA"
      },
      {
        "label": "GUALMATÁN",
        "value": "GUALMATÁN"
      },
      {
        "label": "ILES",
        "value": "ILES"
      },
      {
        "label": "IMUÉS",
        "value": "IMUÉS"
      },
      {
        "label": "IPIALES",
        "value": "IPIALES"
      },
      {
        "label": "LA CRUZ",
        "value": "LA CRUZ"
      },
      {
        "label": "LA FLORIDA",
        "value": "LA FLORIDA"
      },
      {
        "label": "LA LLANADA",
        "value": "LA LLANADA"
      },
      {
        "label": "LA TOLA",
        "value": "LA TOLA"
      },
      {
        "label": "LA UNIÓN",
        "value": "LA UNIÓN"
      },
      {
        "label": "LEIVA",
        "value": "LEIVA"
      },
      {
        "label": "LINARES",
        "value": "LINARES"
      },
      {
        "label": "LOS ANDES",
        "value": "LOS ANDES"
      },
      {
        "label": "MAGÜÍ",
        "value": "MAGÜÍ"
      },
      {
        "label": "MALLAMA",
        "value": "MALLAMA"
      },
      {
        "label": "MOSQUERA",
        "value": "MOSQUERA"
      },
      {
        "label": "NARIÑO",
        "value": "NARIÑO"
      },
      {
        "label": "OLAYA HERRERA",
        "value": "OLAYA HERRERA"
      },
      {
        "label": "OSPINA",
        "value": "OSPINA"
      },
      {
        "label": "FRANCISCO PIZARRO",
        "value": "FRANCISCO PIZARRO"
      },
      {
        "label": "POLICARPA",
        "value": "POLICARPA"
      },
      {
        "label": "POTOSÍ",
        "value": "POTOSÍ"
      },
      {
        "label": "PROVIDENCIA",
        "value": "PROVIDENCIA"
      },
      {
        "label": "PUERRES",
        "value": "PUERRES"
      },
      {
        "label": "PUPIALES",
        "value": "PUPIALES"
      },
      {
        "label": "RICAURTE",
        "value": "RICAURTE"
      },
      {
        "label": "ROBERTO PAYÁN",
        "value": "ROBERTO PAYÁN"
      },
      {
        "label": "SAMANIEGO",
        "value": "SAMANIEGO"
      },
      {
        "label": "SANDONÁ",
        "value": "SANDONÁ"
      },
      {
        "label": "SAN BERNARDO",
        "value": "SAN BERNARDO"
      },
      {
        "label": "SAN LORENZO",
        "value": "SAN LORENZO"
      },
      {
        "label": "SAN PABLO",
        "value": "SAN PABLO"
      },
      {
        "label": "SAN PEDRO DE CARTAGO",
        "value": "SAN PEDRO DE CARTAGO"
      },
      {
        "label": "SANTA BÁRBARA",
        "value": "SANTA BÁRBARA"
      },
      {
        "label": "SANTACRUZ",
        "value": "SANTACRUZ"
      },
      {
        "label": "SAPUYES",
        "value": "SAPUYES"
      },
      {
        "label": "TAMINANGO",
        "value": "TAMINANGO"
      },
      {
        "label": "TANGUA",
        "value": "TANGUA"
      },
      {
        "label": "SAN ANDRÉS DE TUMACO",
        "value": "SAN ANDRÉS DE TUMACO"
      },
      {
        "label": "TÚQUERRES",
        "value": "TÚQUERRES"
      },
      {
        "label": "YACUANQUER",
        "value": "YACUANQUER"
      }
    ]
  },
  {
    "label": "NORTE DE SANTANDER",
    "value": "54",
    "cities": [
      {
        "label": "SAN JOSÉ DE CÚCUTA",
        "value": "SAN JOSÉ DE CÚCUTA"
      },
      {
        "label": "ÁBREGO",
        "value": "ÁBREGO"
      },
      {
        "label": "ARBOLEDAS",
        "value": "ARBOLEDAS"
      },
      {
        "label": "BOCHALEMA",
        "value": "BOCHALEMA"
      },
      {
        "label": "BUCARASICA",
        "value": "BUCARASICA"
      },
      {
        "label": "CÁCOTA",
        "value": "CÁCOTA"
      },
      {
        "label": "CÁCHIRA",
        "value": "CÁCHIRA"
      },
      {
        "label": "CHINÁCOTA",
        "value": "CHINÁCOTA"
      },
      {
        "label": "CHITAGÁ",
        "value": "CHITAGÁ"
      },
      {
        "label": "CONVENCIÓN",
        "value": "CONVENCIÓN"
      },
      {
        "label": "CUCUTILLA",
        "value": "CUCUTILLA"
      },
      {
        "label": "DURANIA",
        "value": "DURANIA"
      },
      {
        "label": "EL CARMEN",
        "value": "EL CARMEN"
      },
      {
        "label": "EL TARRA",
        "value": "EL TARRA"
      },
      {
        "label": "EL ZULIA",
        "value": "EL ZULIA"
      },
      {
        "label": "GRAMALOTE",
        "value": "GRAMALOTE"
      },
      {
        "label": "HACARÍ",
        "value": "HACARÍ"
      },
      {
        "label": "HERRÁN",
        "value": "HERRÁN"
      },
      {
        "label": "LABATECA",
        "value": "LABATECA"
      },
      {
        "label": "LA ESPERANZA",
        "value": "LA ESPERANZA"
      },
      {
        "label": "LA PLAYA",
        "value": "LA PLAYA"
      },
      {
        "label": "LOS PATIOS",
        "value": "LOS PATIOS"
      },
      {
        "label": "LOURDES",
        "value": "LOURDES"
      },
      {
        "label": "MUTISCUA",
        "value": "MUTISCUA"
      },
      {
        "label": "OCAÑA",
        "value": "OCAÑA"
      },
      {
        "label": "PAMPLONA",
        "value": "PAMPLONA"
      },
      {
        "label": "PAMPLONITA",
        "value": "PAMPLONITA"
      },
      {
        "label": "PUERTO SANTANDER",
        "value": "PUERTO SANTANDER"
      },
      {
        "label": "RAGONVALIA",
        "value": "RAGONVALIA"
      },
      {
        "label": "SALAZAR",
        "value": "SALAZAR"
      },
      {
        "label": "SAN CALIXTO",
        "value": "SAN CALIXTO"
      },
      {
        "label": "SAN CAYETANO",
        "value": "SAN CAYETANO"
      },
      {
        "label": "SANTIAGO",
        "value": "SANTIAGO"
      },
      {
        "label": "SARDINATA",
        "value": "SARDINATA"
      },
      {
        "label": "SILOS",
        "value": "SILOS"
      },
      {
        "label": "TEORAMA",
        "value": "TEORAMA"
      },
      {
        "label": "TIBÚ",
        "value": "TIBÚ"
      },
      {
        "label": "TOLEDO",
        "value": "TOLEDO"
      },
      {
        "label": "VILLA CARO",
        "value": "VILLA CARO"
      },
      {
        "label": "VILLA DEL ROSARIO",
        "value": "VILLA DEL ROSARIO"
      }
    ]
  },
  {
    "label": "PUTUMAYO",
    "value": "86",
    "cities": [
      {
        "label": "MOCOA",
        "value": "MOCOA"
      },
      {
        "label": "COLÓN",
        "value": "COLÓN"
      },
      {
        "label": "ORITO",
        "value": "ORITO"
      },
      {
        "label": "PUERTO ASÍS",
        "value": "PUERTO ASÍS"
      },
      {
        "label": "PUERTO CAICEDO",
        "value": "PUERTO CAICEDO"
      },
      {
        "label": "PUERTO GUZMÁN",
        "value": "PUERTO GUZMÁN"
      },
      {
        "label": "PUERTO LEGUÍZAMO",
        "value": "PUERTO LEGUÍZAMO"
      },
      {
        "label": "SIBUNDOY",
        "value": "SIBUNDOY"
      },
      {
        "label": "SAN FRANCISCO",
        "value": "SAN FRANCISCO"
      },
      {
        "label": "SAN MIGUEL",
        "value": "SAN MIGUEL"
      },
      {
        "label": "SANTIAGO",
        "value": "SANTIAGO"
      },
      {
        "label": "VALLE DEL GUAMUEZ",
        "value": "VALLE DEL GUAMUEZ"
      },
      {
        "label": "VILLAGARZÓN",
        "value": "VILLAGARZÓN"
      }
    ]
  },
  {
    "label": "QUINDÍO",
    "value": "63",
    "cities": [
      {
        "label": "ARMENIA",
        "value": "ARMENIA"
      },
      {
        "label": "BUENAVISTA",
        "value": "BUENAVISTA"
      },
      {
        "label": "CALARCÁ",
        "value": "CALARCÁ"
      },
      {
        "label": "CIRCASIA",
        "value": "CIRCASIA"
      },
      {
        "label": "CÓRDOBA",
        "value": "CÓRDOBA"
      },
      {
        "label": "FILANDIA",
        "value": "FILANDIA"
      },
      {
        "label": "GÉNOVA",
        "value": "GÉNOVA"
      },
      {
        "label": "LA TEBAIDA",
        "value": "LA TEBAIDA"
      },
      {
        "label": "MONTENEGRO",
        "value": "MONTENEGRO"
      },
      {
        "label": "PIJAO",
        "value": "PIJAO"
      },
      {
        "label": "QUIMBAYA",
        "value": "QUIMBAYA"
      },
      {
        "label": "SALENTO",
        "value": "SALENTO"
      }
    ]
  },
  {
    "label": "RISARALDA",
    "value": "66",
    "cities": [
      {
        "label": "PEREIRA",
        "value": "PEREIRA"
      },
      {
        "label": "APÍA",
        "value": "APÍA"
      },
      {
        "label": "BALBOA",
        "value": "BALBOA"
      },
      {
        "label": "BELÉN DE UMBRÍA",
        "value": "BELÉN DE UMBRÍA"
      },
      {
        "label": "DOSQUEBRADAS",
        "value": "DOSQUEBRADAS"
      },
      {
        "label": "GUÁTICA",
        "value": "GUÁTICA"
      },
      {
        "label": "LA CELIA",
        "value": "LA CELIA"
      },
      {
        "label": "LA VIRGINIA",
        "value": "LA VIRGINIA"
      },
      {
        "label": "MARSELLA",
        "value": "MARSELLA"
      },
      {
        "label": "MISTRATÓ",
        "value": "MISTRATÓ"
      },
      {
        "label": "PUEBLO RICO",
        "value": "PUEBLO RICO"
      },
      {
        "label": "QUINCHÍA",
        "value": "QUINCHÍA"
      },
      {
        "label": "SANTA ROSA DE CABAL",
        "value": "SANTA ROSA DE CABAL"
      },
      {
        "label": "SANTUARIO",
        "value": "SANTUARIO"
      }
    ]
  },
  {
    "label": "SANTANDER",
    "value": "68",
    "cities": [
      {
        "label": "BUCARAMANGA",
        "value": "BUCARAMANGA"
      },
      {
        "label": "AGUADA",
        "value": "AGUADA"
      },
      {
        "label": "ALBANIA",
        "value": "ALBANIA"
      },
      {
        "label": "ARATOCA",
        "value": "ARATOCA"
      },
      {
        "label": "BARBOSA",
        "value": "BARBOSA"
      },
      {
        "label": "BARICHARA",
        "value": "BARICHARA"
      },
      {
        "label": "BARRANCABERMEJA",
        "value": "BARRANCABERMEJA"
      },
      {
        "label": "BETULIA",
        "value": "BETULIA"
      },
      {
        "label": "BOLÍVAR",
        "value": "BOLÍVAR"
      },
      {
        "label": "CABRERA",
        "value": "CABRERA"
      },
      {
        "label": "CALIFORNIA",
        "value": "CALIFORNIA"
      },
      {
        "label": "CAPITANEJO",
        "value": "CAPITANEJO"
      },
      {
        "label": "CARCASÍ",
        "value": "CARCASÍ"
      },
      {
        "label": "CEPITÁ",
        "value": "CEPITÁ"
      },
      {
        "label": "CERRITO",
        "value": "CERRITO"
      },
      {
        "label": "CHARALÁ",
        "value": "CHARALÁ"
      },
      {
        "label": "CHARTA",
        "value": "CHARTA"
      },
      {
        "label": "CHIMA",
        "value": "CHIMA"
      },
      {
        "label": "CHIPATÁ",
        "value": "CHIPATÁ"
      },
      {
        "label": "CIMITARRA",
        "value": "CIMITARRA"
      },
      {
        "label": "CONCEPCIÓN",
        "value": "CONCEPCIÓN"
      },
      {
        "label": "CONFINES",
        "value": "CONFINES"
      },
      {
        "label": "CONTRATACIÓN",
        "value": "CONTRATACIÓN"
      },
      {
        "label": "COROMORO",
        "value": "COROMORO"
      },
      {
        "label": "CURITÍ",
        "value": "CURITÍ"
      },
      {
        "label": "EL CARMEN DE CHUCURÍ",
        "value": "EL CARMEN DE CHUCURÍ"
      },
      {
        "label": "EL GUACAMAYO",
        "value": "EL GUACAMAYO"
      },
      {
        "label": "EL PEÑÓN",
        "value": "EL PEÑÓN"
      },
      {
        "label": "EL PLAYÓN",
        "value": "EL PLAYÓN"
      },
      {
        "label": "ENCINO",
        "value": "ENCINO"
      },
      {
        "label": "ENCISO",
        "value": "ENCISO"
      },
      {
        "label": "FLORIÁN",
        "value": "FLORIÁN"
      },
      {
        "label": "FLORIDABLANCA",
        "value": "FLORIDABLANCA"
      },
      {
        "label": "GALÁN",
        "value": "GALÁN"
      },
      {
        "label": "GÁMBITA",
        "value": "GÁMBITA"
      },
      {
        "label": "GIRÓN",
        "value": "GIRÓN"
      },
      {
        "label": "GUACA",
        "value": "GUACA"
      },
      {
        "label": "GUADALUPE",
        "value": "GUADALUPE"
      },
      {
        "label": "GUAPOTÁ",
        "value": "GUAPOTÁ"
      },
      {
        "label": "GUAVATÁ",
        "value": "GUAVATÁ"
      },
      {
        "label": "GÜEPSA",
        "value": "GÜEPSA"
      },
      {
        "label": "HATO",
        "value": "HATO"
      },
      {
        "label": "JESÚS MARÍA",
        "value": "JESÚS MARÍA"
      },
      {
        "label": "JORDÁN",
        "value": "JORDÁN"
      },
      {
        "label": "LA BELLEZA",
        "value": "LA BELLEZA"
      },
      {
        "label": "LANDÁZURI",
        "value": "LANDÁZURI"
      },
      {
        "label": "LA PAZ",
        "value": "LA PAZ"
      },
      {
        "label": "LEBRIJA",
        "value": "LEBRIJA"
      },
      {
        "label": "LOS SANTOS",
        "value": "LOS SANTOS"
      },
      {
        "label": "MACARAVITA",
        "value": "MACARAVITA"
      },
      {
        "label": "MÁLAGA",
        "value": "MÁLAGA"
      },
      {
        "label": "MATANZA",
        "value": "MATANZA"
      },
      {
        "label": "MOGOTES",
        "value": "MOGOTES"
      },
      {
        "label": "MOLAGAVITA",
        "value": "MOLAGAVITA"
      },
      {
        "label": "OCAMONTE",
        "value": "OCAMONTE"
      },
      {
        "label": "OIBA",
        "value": "OIBA"
      },
      {
        "label": "ONZAGA",
        "value": "ONZAGA"
      },
      {
        "label": "PALMAR",
        "value": "PALMAR"
      },
      {
        "label": "PALMAS DEL SOCORRO",
        "value": "PALMAS DEL SOCORRO"
      },
      {
        "label": "PÁRAMO",
        "value": "PÁRAMO"
      },
      {
        "label": "PIEDECUESTA",
        "value": "PIEDECUESTA"
      },
      {
        "label": "PINCHOTE",
        "value": "PINCHOTE"
      },
      {
        "label": "PUENTE NACIONAL",
        "value": "PUENTE NACIONAL"
      },
      {
        "label": "PUERTO PARRA",
        "value": "PUERTO PARRA"
      },
      {
        "label": "PUERTO WILCHES",
        "value": "PUERTO WILCHES"
      },
      {
        "label": "RIONEGRO",
        "value": "RIONEGRO"
      },
      {
        "label": "SABANA DE TORRES",
        "value": "SABANA DE TORRES"
      },
      {
        "label": "SAN ANDRÉS",
        "value": "SAN ANDRÉS"
      },
      {
        "label": "SAN BENITO",
        "value": "SAN BENITO"
      },
      {
        "label": "SAN GIL",
        "value": "SAN GIL"
      },
      {
        "label": "SAN JOAQUÍN",
        "value": "SAN JOAQUÍN"
      },
      {
        "label": "SAN JOSÉ DE MIRANDA",
        "value": "SAN JOSÉ DE MIRANDA"
      },
      {
        "label": "SAN MIGUEL",
        "value": "SAN MIGUEL"
      },
      {
        "label": "SAN VICENTE DE CHUCURÍ",
        "value": "SAN VICENTE DE CHUCURÍ"
      },
      {
        "label": "SANTA BÁRBARA",
        "value": "SANTA BÁRBARA"
      },
      {
        "label": "SANTA HELENA DEL OPÓN",
        "value": "SANTA HELENA DEL OPÓN"
      },
      {
        "label": "SIMACOTA",
        "value": "SIMACOTA"
      },
      {
        "label": "SOCORRO",
        "value": "SOCORRO"
      },
      {
        "label": "SUAITA",
        "value": "SUAITA"
      },
      {
        "label": "SUCRE",
        "value": "SUCRE"
      },
      {
        "label": "SURATÁ",
        "value": "SURATÁ"
      },
      {
        "label": "TONA",
        "value": "TONA"
      },
      {
        "label": "VALLE DE SAN JOSÉ",
        "value": "VALLE DE SAN JOSÉ"
      },
      {
        "label": "VÉLEZ",
        "value": "VÉLEZ"
      },
      {
        "label": "VETAS",
        "value": "VETAS"
      },
      {
        "label": "VILLANUEVA",
        "value": "VILLANUEVA"
      },
      {
        "label": "ZAPATOCA",
        "value": "ZAPATOCA"
      }
    ]
  },
  {
    "label": "SUCRE",
    "value": "70",
    "cities": [
      {
        "label": "SINCELEJO",
        "value": "SINCELEJO"
      },
      {
        "label": "BUENAVISTA",
        "value": "BUENAVISTA"
      },
      {
        "label": "CAIMITO",
        "value": "CAIMITO"
      },
      {
        "label": "COLOSÓ",
        "value": "COLOSÓ"
      },
      {
        "label": "COROZAL",
        "value": "COROZAL"
      },
      {
        "label": "COVEÑAS",
        "value": "COVEÑAS"
      },
      {
        "label": "CHALÁN",
        "value": "CHALÁN"
      },
      {
        "label": "EL ROBLE",
        "value": "EL ROBLE"
      },
      {
        "label": "GALERAS",
        "value": "GALERAS"
      },
      {
        "label": "GUARANDA",
        "value": "GUARANDA"
      },
      {
        "label": "LA UNIÓN",
        "value": "LA UNIÓN"
      },
      {
        "label": "LOS PALMITOS",
        "value": "LOS PALMITOS"
      },
      {
        "label": "MAJAGUAL",
        "value": "MAJAGUAL"
      },
      {
        "label": "MORROA",
        "value": "MORROA"
      },
      {
        "label": "OVEJAS",
        "value": "OVEJAS"
      },
      {
        "label": "PALMITO",
        "value": "PALMITO"
      },
      {
        "label": "SAMPUÉS",
        "value": "SAMPUÉS"
      },
      {
        "label": "SAN BENITO ABAD",
        "value": "SAN BENITO ABAD"
      },
      {
        "label": "SAN JUAN DE BETULIA",
        "value": "SAN JUAN DE BETULIA"
      },
      {
        "label": "SAN MARCOS",
        "value": "SAN MARCOS"
      },
      {
        "label": "SAN ONOFRE",
        "value": "SAN ONOFRE"
      },
      {
        "label": "SAN PEDRO",
        "value": "SAN PEDRO"
      },
      {
        "label": "SAN LUIS DE SINCÉ",
        "value": "SAN LUIS DE SINCÉ"
      },
      {
        "label": "SUCRE",
        "value": "SUCRE"
      },
      {
        "label": "SANTIAGO DE TOLÚ",
        "value": "SANTIAGO DE TOLÚ"
      },
      {
        "label": "SAN JOSÉ DE TOLUVIEJO",
        "value": "SAN JOSÉ DE TOLUVIEJO"
      }
    ]
  },
  {
    "label": "TOLIMA",
    "value": "73",
    "cities": [
      {
        "label": "IBAGUÉ",
        "value": "IBAGUÉ"
      },
      {
        "label": "ALPUJARRA",
        "value": "ALPUJARRA"
      },
      {
        "label": "ALVARADO",
        "value": "ALVARADO"
      },
      {
        "label": "AMBALEMA",
        "value": "AMBALEMA"
      },
      {
        "label": "ANZOÁTEGUI",
        "value": "ANZOÁTEGUI"
      },
      {
        "label": "ARMERO",
        "value": "ARMERO"
      },
      {
        "label": "ATACO",
        "value": "ATACO"
      },
      {
        "label": "CAJAMARCA",
        "value": "CAJAMARCA"
      },
      {
        "label": "CARMEN DE APICALÁ",
        "value": "CARMEN DE APICALÁ"
      },
      {
        "label": "CASABIANCA",
        "value": "CASABIANCA"
      },
      {
        "label": "CHAPARRAL",
        "value": "CHAPARRAL"
      },
      {
        "label": "COELLO",
        "value": "COELLO"
      },
      {
        "label": "COYAIMA",
        "value": "COYAIMA"
      },
      {
        "label": "CUNDAY",
        "value": "CUNDAY"
      },
      {
        "label": "DOLORES",
        "value": "DOLORES"
      },
      {
        "label": "ESPINAL",
        "value": "ESPINAL"
      },
      {
        "label": "FALAN",
        "value": "FALAN"
      },
      {
        "label": "FLANDES",
        "value": "FLANDES"
      },
      {
        "label": "FRESNO",
        "value": "FRESNO"
      },
      {
        "label": "GUAMO",
        "value": "GUAMO"
      },
      {
        "label": "HERVEO",
        "value": "HERVEO"
      },
      {
        "label": "HONDA",
        "value": "HONDA"
      },
      {
        "label": "ICONONZO",
        "value": "ICONONZO"
      },
      {
        "label": "LÉRIDA",
        "value": "LÉRIDA"
      },
      {
        "label": "LÍBANO",
        "value": "LÍBANO"
      },
      {
        "label": "SAN SEBASTIÁN DE MARIQUITA",
        "value": "SAN SEBASTIÁN DE MARIQUITA"
      },
      {
        "label": "MELGAR",
        "value": "MELGAR"
      },
      {
        "label": "MURILLO",
        "value": "MURILLO"
      },
      {
        "label": "NATAGAIMA",
        "value": "NATAGAIMA"
      },
      {
        "label": "ORTEGA",
        "value": "ORTEGA"
      },
      {
        "label": "PALOCABILDO",
        "value": "PALOCABILDO"
      },
      {
        "label": "PIEDRAS",
        "value": "PIEDRAS"
      },
      {
        "label": "PLANADAS",
        "value": "PLANADAS"
      },
      {
        "label": "PRADO",
        "value": "PRADO"
      },
      {
        "label": "PURIFICACIÓN",
        "value": "PURIFICACIÓN"
      },
      {
        "label": "RIOBLANCO",
        "value": "RIOBLANCO"
      },
      {
        "label": "RONCESVALLES",
        "value": "RONCESVALLES"
      },
      {
        "label": "ROVIRA",
        "value": "ROVIRA"
      },
      {
        "label": "SALDAÑA",
        "value": "SALDAÑA"
      },
      {
        "label": "SAN ANTONIO",
        "value": "SAN ANTONIO"
      },
      {
        "label": "SAN LUIS",
        "value": "SAN LUIS"
      },
      {
        "label": "SANTA ISABEL",
        "value": "SANTA ISABEL"
      },
      {
        "label": "SUÁREZ",
        "value": "SUÁREZ"
      },
      {
        "label": "VALLE DE SAN JUAN",
        "value": "VALLE DE SAN JUAN"
      },
      {
        "label": "VENADILLO",
        "value": "VENADILLO"
      },
      {
        "label": "VILLAHERMOSA",
        "value": "VILLAHERMOSA"
      },
      {
        "label": "VILLARRICA",
        "value": "VILLARRICA"
      }
    ]
  },
  {
    "label": "VALLE DEL CAUCA",
    "value": "76",
    "cities": [
      {
        "label": "SANTIAGO DE CALI",
        "value": "SANTIAGO DE CALI"
      },
      {
        "label": "ALCALÁ",
        "value": "ALCALÁ"
      },
      {
        "label": "ANDALUCÍA",
        "value": "ANDALUCÍA"
      },
      {
        "label": "ANSERMANUEVO",
        "value": "ANSERMANUEVO"
      },
      {
        "label": "ARGELIA",
        "value": "ARGELIA"
      },
      {
        "label": "BOLÍVAR",
        "value": "BOLÍVAR"
      },
      {
        "label": "BUENAVENTURA",
        "value": "BUENAVENTURA"
      },
      {
        "label": "GUADALAJARA DE BUGA",
        "value": "GUADALAJARA DE BUGA"
      },
      {
        "label": "BUGALAGRANDE",
        "value": "BUGALAGRANDE"
      },
      {
        "label": "CAICEDONIA",
        "value": "CAICEDONIA"
      },
      {
        "label": "CALIMA",
        "value": "CALIMA"
      },
      {
        "label": "CANDELARIA",
        "value": "CANDELARIA"
      },
      {
        "label": "CARTAGO",
        "value": "CARTAGO"
      },
      {
        "label": "DAGUA",
        "value": "DAGUA"
      },
      {
        "label": "EL ÁGUILA",
        "value": "EL ÁGUILA"
      },
      {
        "label": "EL CAIRO",
        "value": "EL CAIRO"
      },
      {
        "label": "EL CERRITO",
        "value": "EL CERRITO"
      },
      {
        "label": "EL DOVIO",
        "value": "EL DOVIO"
      },
      {
        "label": "FLORIDA",
        "value": "FLORIDA"
      },
      {
        "label": "GINEBRA",
        "value": "GINEBRA"
      },
      {
        "label": "GUACARÍ",
        "value": "GUACARÍ"
      },
      {
        "label": "JAMUNDÍ",
        "value": "JAMUNDÍ"
      },
      {
        "label": "LA CUMBRE",
        "value": "LA CUMBRE"
      },
      {
        "label": "LA UNIÓN",
        "value": "LA UNIÓN"
      },
      {
        "label": "LA VICTORIA",
        "value": "LA VICTORIA"
      },
      {
        "label": "OBANDO",
        "value": "OBANDO"
      },
      {
        "label": "PALMIRA",
        "value": "PALMIRA"
      },
      {
        "label": "PRADERA",
        "value": "PRADERA"
      },
      {
        "label": "RESTREPO",
        "value": "RESTREPO"
      },
      {
        "label": "RIOFRÍO",
        "value": "RIOFRÍO"
      },
      {
        "label": "ROLDANILLO",
        "value": "ROLDANILLO"
      },
      {
        "label": "SAN PEDRO",
        "value": "SAN PEDRO"
      },
      {
        "label": "SEVILLA",
        "value": "SEVILLA"
      },
      {
        "label": "TORO",
        "value": "TORO"
      },
      {
        "label": "TRUJILLO",
        "value": "TRUJILLO"
      },
      {
        "label": "TULUÁ",
        "value": "TULUÁ"
      },
      {
        "label": "ULLOA",
        "value": "ULLOA"
      },
      {
        "label": "VERSALLES",
        "value": "VERSALLES"
      },
      {
        "label": "VIJES",
        "value": "VIJES"
      },
      {
        "label": "YOTOCO",
        "value": "YOTOCO"
      },
      {
        "label": "YUMBO",
        "value": "YUMBO"
      },
      {
        "label": "ZARZAL",
        "value": "ZARZAL"
      }
    ]
  },
  {
    "label": "VAUPÉS",
    "value": "97",
    "cities": [
      {
        "label": "MITÚ",
        "value": "MITÚ"
      },
      {
        "label": "CARURÚ",
        "value": "CARURÚ"
      },
      {
        "label": "PACOA",
        "value": "PACOA"
      },
      {
        "label": "TARAIRA",
        "value": "TARAIRA"
      },
      {
        "label": "PAPUNAHUA",
        "value": "PAPUNAHUA"
      },
      {
        "label": "YAVARATÉ",
        "value": "YAVARATÉ"
      }
    ]
  },
  {
    "label": "VICHADA",
    "value": "99",
    "cities": [
      {
        "label": "PUERTO CARREÑO",
        "value": "PUERTO CARREÑO"
      },
      {
        "label": "LA PRIMAVERA",
        "value": "LA PRIMAVERA"
      },
      {
        "label": "SANTA ROSALÍA",
        "value": "SANTA ROSALÍA"
      },
      {
        "label": "CUMARIBO",
        "value": "CUMARIBO"
      }
    ]
  }
]

const getStates = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return states.map((item) => ({
    label: item.label,
    value: item.value,
  }));
};



const getCities = async (state: string | number): Promise<AutocompleteOption[]> => {
  await wait();

  return (
    states
      .find((item) => item.value === state)
      ?.cities.map((item) => ({
        label: item.label,
        value: item.value,
      })) ?? []
  );
};

const casosregistro = [
  {
    "label": "Vinculación",
    "value": "Vinculación"
  },
  {
    "label": "Actualización",
    "value": "Actualización"
  }
];

const tipoPersona = [
  {
    "label": "Natural",
    "value": "Natural"
  },
  {
    "label": "Jurídica",
    "value": "Jurídica"
  }

];

const tipoVinculacion = [
  {
    "label": "Cliente",
    "value": "Cliente"
  },
  {
    "label": "Proveedor",
    "value": "Proveedor"
  }, {
    "label": "Contratista",
    "value": "Contratista"
  }, {
    "label": "Otro",
    "value": "Otro"
  }
];

const getCasos = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return casosregistro.map((item) => ({
    label: item.label,
    value: item.value,
  }));
};

const getTipoPersona = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return tipoPersona.map((item) => ({
    label: item.label,
    value: item.value,
  }));
}

const getTipoVinculacion = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return tipoVinculacion.map((item) => ({
    label: item.label,
    value: item.value,
  }));
};

const getPais = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return paises.map((item) => ({
    label: item.label,
    value: item.value,
  }));
}
export { getStates, getCities, getCasos, getTipoPersona, getTipoVinculacion, getPais };
