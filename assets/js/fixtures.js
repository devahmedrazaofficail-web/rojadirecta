/* ============================================================
   ROJA DIRECTA — Fixtures data engine
   Days: 2026-10-10 (Sat), 2026-10-11 (Sun), 2026-10-12 (Mon)
   Times: Europe/Madrid (CEST, UTC+2). Source research Oct 2026.
   UEFA qualifier times carry ±1h uncertainty from the source listing;
   they are marked approx:true. Verify against official sources.
   To update: edit the FIXTURES arrays below (day, time, sport,
   comp, home, away, venue?, note?). No backend needed.
   ============================================================ */

const DAYS = [
  { id: "2026-10-10", label: "Sábado 10 oct", short: "Sáb 10" },
  { id: "2026-10-11", label: "Domingo 11 oct", short: "Dom 11" },
  { id: "2026-10-12", label: "Lunes 12 oct", short: "Lun 12" },
];

const SPORT_ICON = {
  futbol: "⚽", baloncesto: "🏀", f1: "🏎️", motogp: "🏍️",
  tenis: "🎾", hockey: "🏒", boxeo: "🥊", mma: "🥋",
};

const SPORT_NAME = {
  futbol: "Fútbol", baloncesto: "Baloncesto", f1: "Fórmula 1",
  motogp: "MotoGP", tenis: "Tenis", hockey: "Hockey hielo",
  boxeo: "Boxeo", mma: "MMA",
};

/* Official competition websites (informational links only) */
const COMP_SITE = {
  "LaLiga": "https://www.laliga.com",
  "Premier League": "https://www.premierleague.com",
  "Serie A": "https://www.legaseriea.it",
  "Bundesliga": "https://www.bundesliga.com",
  "Ligue 1": "https://www.ligue1.com",
  "Eredivisie": "https://eredivisie.nl",
  "Championship": "https://www.efl.com",
  "Saudi Pro League": "https://www.spl.com.sa",
  "Liga MX": "https://ligamx.net",
  "Liga Profesional": "https://www.ligaprofesional.ar",
  "Clasificación Mundial UEFA": "https://www.uefa.com",
  "Liga Premier Egipto": "https://egyptianproleague.com",
  "NBA Pretemporada": "https://www.nba.com",
  "NHL": "https://www.nhl.com",
  "Fórmula 1": "https://www.formula1.com",
  "MotoGP": "https://www.motogp.com",
  "ATP Masters 1000": "https://www.atptour.com",
  "Boxeo": "https://www.dazn.com",
  "UFC": "https://www.ufc.com",
};

const FIXTURES = {
  "2026-10-10": [
    // --- UEFA World Cup qualifiers (times approx, source ambiguity ±1h)
    { t: "12:00", s: "futbol", c: "Clasificación Mundial UEFA", h: "Kazajistán", a: "Liechtenstein", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Bélgica", a: "Macedonia del Norte", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Islandia", a: "Ucrania", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Francia", a: "Azerbaiyán", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Alemania", a: "Luxemburgo", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Suecia", a: "Suiza", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Irlanda del Norte", a: "Eslovaquia", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Kosovo", a: "Eslovenia", approx: true },
    // --- Premier League
    { t: "13:30", s: "futbol", c: "Premier League", h: "Arsenal", a: "Leeds United" },
    { t: "16:00", s: "futbol", c: "Premier League", h: "Aston Villa", a: "Brentford" },
    { t: "16:00", s: "futbol", c: "Premier League", h: "Chelsea", a: "Bournemouth" },
    { t: "16:00", s: "futbol", c: "Premier League", h: "Ipswich Town", a: "Fulham" },
    { t: "16:00", s: "futbol", c: "Premier League", h: "Sunderland", a: "Brighton" },
    { t: "18:30", s: "futbol", c: "Premier League", h: "Manchester United", a: "Tottenham Hotspur" },
    // --- Bundesliga
    { t: "15:30", s: "futbol", c: "Bundesliga", h: "Union Berlin", a: "Elversberg" },
    { t: "15:30", s: "futbol", c: "Bundesliga", h: "Augsburgo", a: "Bayern Múnich" },
    { t: "15:30", s: "futbol", c: "Bundesliga", h: "Mainz 05", a: "Bayer Leverkusen" },
    { t: "15:30", s: "futbol", c: "Bundesliga", h: "Paderborn", a: "Stuttgart" },
    { t: "15:30", s: "futbol", c: "Bundesliga", h: "Hoffenheim", a: "Hamburgo SV" },
    { t: "18:30", s: "futbol", c: "Bundesliga", h: "RB Leipzig", a: "Eintracht Frankfurt" },
    // --- LaLiga
    { t: "14:00", s: "futbol", c: "LaLiga", h: "Rayo Vallecano", a: "Athletic Club" },
    { t: "16:30", s: "futbol", c: "LaLiga", h: "Alavés", a: "Atlético de Madrid" },
    { t: "18:30", s: "futbol", c: "LaLiga", h: "Barcelona", a: "Getafe" },
    { t: "21:00", s: "futbol", c: "LaLiga", h: "Real Madrid", a: "Villarreal" },
    // --- Serie A
    { t: "15:00", s: "futbol", c: "Serie A", h: "Genoa", a: "Fiorentina" },
    { t: "18:00", s: "futbol", c: "Serie A", h: "Inter", a: "Parma" },
    { t: "20:45", s: "futbol", c: "Serie A", h: "Nápoles", a: "Frosinone" },
    // --- Ligue 1
    { t: "17:15", s: "futbol", c: "Ligue 1", h: "Lille", a: "Le Havre" },
    { t: "20:45", s: "futbol", c: "Ligue 1", h: "PSG", a: "Le Mans" },
    { t: "20:45", s: "futbol", c: "Ligue 1", h: "Mónaco", a: "Toulouse" },
    { t: "20:45", s: "futbol", c: "Ligue 1", h: "Lorient", a: "Paris FC" },
    { t: "20:45", s: "futbol", c: "Ligue 1", h: "Brest", a: "Angers" },
    // --- Eredivisie
    { t: "16:30", s: "futbol", c: "Eredivisie", h: "Go Ahead Eagles", a: "Sparta Rotterdam" },
    { t: "18:45", s: "futbol", c: "Eredivisie", h: "Feyenoord", a: "AZ Alkmaar" },
    { t: "20:00", s: "futbol", c: "Eredivisie", h: "Fortuna Sittard", a: "Twente" },
    { t: "21:00", s: "futbol", c: "Eredivisie", h: "Ajax", a: "NEC Nijmegen" },
    // --- Championship
    { t: "13:30", s: "futbol", c: "Championship", h: "Charlton Athletic", a: "Bristol City" },
    { t: "13:30", s: "futbol", c: "Championship", h: "Swansea City", a: "Norwich City" },
    { t: "13:30", s: "futbol", c: "Championship", h: "West Brom", a: "Birmingham City" },
    // --- Saudi Pro League
    { t: "15:50", s: "futbol", c: "Saudi Pro League", h: "Al Hazem", a: "NEOM" },
    { t: "16:55", s: "futbol", c: "Saudi Pro League", h: "Al Ettifaq", a: "Al Khaleej" },
    { t: "20:00", s: "futbol", c: "Saudi Pro League", h: "Al Hilal", a: "Al Ittihad", v: "Kingdom Arena, Riad" },
    // --- NHL
    { t: "19:00", s: "hockey", c: "NHL", h: "Boston Bruins", a: "Philadelphia Flyers" },
    { t: "21:30", s: "hockey", c: "NHL", h: "New Jersey Devils", a: "Vancouver Canucks" },
    { t: "22:00", s: "hockey", c: "NHL", h: "San Jose Sharks", a: "Edmonton Oilers" },
    // --- F1 Singapore (sprint weekend)
    { t: "11:00", s: "f1", c: "Fórmula 1", h: "GP de Singapur", a: "Carrera sprint", v: "Marina Bay" },
    { t: "15:00", s: "f1", c: "Fórmula 1", h: "GP de Singapur", a: "Clasificación", v: "Marina Bay" },
    // --- MotoGP Indonesia
    { t: "04:10", s: "motogp", c: "MotoGP", h: "GP de Indonesia", a: "Entrenamientos libres 2", v: "Mandalika" },
    { t: "04:50", s: "motogp", c: "MotoGP", h: "GP de Indonesia", a: "Clasificación Q1/Q2", v: "Mandalika" },
    { t: "09:00", s: "motogp", c: "MotoGP", h: "GP de Indonesia", a: "Carrera sprint (13 vueltas)", v: "Mandalika" },
  ],
  "2026-10-11": [
    // --- UEFA qualifiers
    { t: "11:00", s: "futbol", c: "Clasificación Mundial UEFA", h: "San Marino", a: "Chipre", approx: true },
    { t: "14:00", s: "futbol", c: "Clasificación Mundial UEFA", h: "Escocia", a: "Bielorrusia", approx: true },
    { t: "14:00", s: "futbol", c: "Clasificación Mundial UEFA", h: "Países Bajos", a: "Finlandia", approx: true },
    { t: "14:00", s: "futbol", c: "Clasificación Mundial UEFA", h: "Islas Feroe", a: "República Checa", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Dinamarca", a: "Grecia", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Croacia", a: "Gibraltar", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Rumanía", a: "Austria", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Lituania", a: "Polonia", approx: true },
    // --- Premier League
    { t: "15:00", s: "futbol", c: "Premier League", h: "Crystal Palace", a: "Nottingham Forest" },
    { t: "15:00", s: "futbol", c: "Premier League", h: "Hull City", a: "Everton" },
    { t: "17:30", s: "futbol", c: "Premier League", h: "Liverpool", a: "Manchester City" },
    // --- Bundesliga
    { t: "15:30", s: "futbol", c: "Bundesliga", h: "Colonia", a: "Borussia Mönchengladbach" },
    { t: "17:30", s: "futbol", c: "Bundesliga", h: "Friburgo", a: "Schalke 04" },
    // --- LaLiga
    { t: "14:00", s: "futbol", c: "LaLiga", h: "Elche", a: "Celta" },
    { t: "16:15", s: "futbol", c: "LaLiga", h: "Real Sociedad", a: "Deportivo de La Coruña" },
    { t: "18:30", s: "futbol", c: "LaLiga", h: "Betis", a: "Osasuna" },
    { t: "21:00", s: "futbol", c: "LaLiga", h: "Racing de Santander", a: "Valencia" },
    // --- Serie A
    { t: "12:30", s: "futbol", c: "Serie A", h: "Como", a: "Roma" },
    { t: "15:00", s: "futbol", c: "Serie A", h: "Lazio", a: "Monza" },
    { t: "15:00", s: "futbol", c: "Serie A", h: "Lecce", a: "Bolonia" },
    { t: "18:00", s: "futbol", c: "Serie A", h: "Sassuolo", a: "AC Milan" },
    { t: "20:45", s: "futbol", c: "Serie A", h: "Cagliari", a: "Juventus" },
    // --- Ligue 1
    { t: "15:00", s: "futbol", c: "Ligue 1", h: "Niza", a: "Estrasburgo" },
    { t: "17:15", s: "futbol", c: "Ligue 1", h: "Rennes", a: "Auxerre" },
    { t: "20:45", s: "futbol", c: "Ligue 1", h: "Troyes", a: "Marsella" },
    // --- Eredivisie / Championship
    { t: "12:15", s: "futbol", c: "Eredivisie", h: "Utrecht", a: "Willem II" },
    { t: "13:00", s: "futbol", c: "Championship", h: "Southampton", a: "Portsmouth" },
    // --- Saudi Pro League
    { t: "15:40", s: "futbol", c: "Saudi Pro League", h: "Al Fayha", a: "Al Riyadh" },
    { t: "17:25", s: "futbol", c: "Saudi Pro League", h: "Abha", a: "Al Faisaly" },
    { t: "20:00", s: "futbol", c: "Saudi Pro League", h: "Al Shabab", a: "Al Taawoun" },
    // --- Egyptian derby
    { t: "19:00", s: "futbol", c: "Liga Premier Egipto", h: "Zamalek", a: "Al Ahly", v: "Estadio Internacional de El Cairo" },
    // --- Liga MX (CEST early hours)
    { t: "01:00", s: "futbol", c: "Liga MX", h: "Querétaro", a: "Atlante" },
    { t: "01:00", s: "futbol", c: "Liga MX", h: "FC Juárez", a: "Tijuana" },
    { t: "01:00", s: "futbol", c: "Liga MX", h: "Atlético San Luis", a: "Santos Laguna" },
    { t: "01:10", s: "futbol", c: "Liga MX", h: "Pachuca", a: "Necaxa" },
    { t: "03:00", s: "futbol", c: "Liga MX", h: "Atlas", a: "Guadalajara" },
    { t: "03:15", s: "futbol", c: "Liga MX", h: "Pumas UNAM", a: "Cruz Azul" },
    { t: "05:10", s: "futbol", c: "Liga MX", h: "América", a: "Monterrey" },
    // --- Liga Profesional (CEST)
    { t: "00:15", s: "futbol", c: "Liga Profesional", h: "Tigre", a: "Banfield" },
    { t: "02:30", s: "futbol", c: "Liga Profesional", h: "River Plate", a: "Estudiantes (RC)" },
    { t: "19:45", s: "futbol", c: "Liga Profesional", h: "San Lorenzo", a: "Deportivo Riestra" },
    { t: "22:00", s: "futbol", c: "Liga Profesional", h: "Platense", a: "Argentinos Juniors" },
    { t: "22:00", s: "futbol", c: "Liga Profesional", h: "Rosario Central", a: "Independiente Rivadavia" },
    // --- NHL (CEST early hours)
    { t: "00:00", s: "hockey", c: "NHL", h: "Florida Panthers", a: "Minnesota Wild" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Buffalo Sabres", a: "Utah Mammoth" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Montreal Canadiens", a: "Detroit Red Wings" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Ottawa Senators", a: "Nashville Predators" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Pittsburgh Penguins", a: "Dallas Stars" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Chicago Blackhawks", a: "Carolina Hurricanes" },
    { t: "01:00", s: "hockey", c: "NHL", h: "St. Louis Blues", a: "Columbus Blue Jackets" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Colorado Avalanche", a: "Toronto Maple Leafs" },
    { t: "01:30", s: "hockey", c: "NHL", h: "NY Islanders", a: "Tampa Bay Lightning" },
    { t: "04:00", s: "hockey", c: "NHL", h: "Calgary Flames", a: "Anaheim Ducks" },
    { t: "04:00", s: "hockey", c: "NHL", h: "Vegas Golden Knights", a: "LA Kings" },
    { t: "23:00", s: "hockey", c: "NHL", h: "Washington Capitals", a: "Seattle Kraken" },
    // --- NBA preseason
    { t: "00:30", s: "baloncesto", c: "NBA Pretemporada", h: "Toronto Raptors", a: "LA Clippers", v: "Vancouver" },
    { t: "01:00", s: "baloncesto", c: "NBA Pretemporada", h: "Indiana Pacers", a: "Atlanta Hawks" },
    { t: "01:00", s: "baloncesto", c: "NBA Pretemporada", h: "Washington Wizards", a: "Detroit Pistons" },
    { t: "02:00", s: "baloncesto", c: "NBA Pretemporada", h: "Miami Heat", a: "Minnesota Timberwolves" },
    { t: "02:00", s: "baloncesto", c: "NBA Pretemporada", h: "Boston Celtics", a: "Philadelphia 76ers" },
    { t: "02:30", s: "baloncesto", c: "NBA Pretemporada", h: "Golden State Warriors", a: "Sacramento Kings" },
    { t: "04:30", s: "baloncesto", c: "NBA Pretemporada", h: "Phoenix Suns", a: "San Antonio Spurs" },
    { t: "12:00", s: "baloncesto", c: "NBA Pretemporada", h: "Dallas Mavericks", a: "Houston Rockets", v: "Macao" },
    // --- F1 / MotoGP races
    { t: "14:00", s: "f1", c: "Fórmula 1", h: "GP de Singapur", a: "Carrera (62 vueltas)", v: "Marina Bay" },
    { t: "04:40", s: "motogp", c: "MotoGP", h: "GP de Indonesia", a: "Calentamiento", v: "Mandalika" },
    { t: "09:00", s: "motogp", c: "MotoGP", h: "GP de Indonesia", a: "Carrera (27 vueltas)", v: "Mandalika" },
    // --- Boxeo / UFC
    { t: "02:00", s: "boxeo", c: "Boxeo", h: "Floyd Schofield", a: "Lucas Bahdi", v: "Chicago", approx: true },
    { t: "02:00", s: "mma", c: "UFC", h: "Brendan Allen", a: "Christian Leroy Duncan", v: "Las Vegas", approx: true },
  ],
  "2026-10-12": [
    // --- UEFA qualifiers
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Macedonia del Norte", a: "Kazajistán", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Irlanda del Norte", a: "Alemania", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Eslovenia", a: "Suiza", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Ucrania", a: "Azerbaiyán", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Suecia", a: "Kosovo", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Gales", a: "Bélgica", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Eslovaquia", a: "Luxemburgo", approx: true },
    { t: "16:45", s: "futbol", c: "Clasificación Mundial UEFA", h: "Islandia", a: "Francia", approx: true },
    // --- Premier League
    { t: "21:00", s: "futbol", c: "Premier League", h: "Coventry City", a: "Newcastle United" },
    // --- Serie A
    { t: "18:30", s: "futbol", c: "Serie A", h: "Atalanta", a: "Venezia" },
    { t: "20:45", s: "futbol", c: "Serie A", h: "Torino", a: "Udinese" },
    // --- LaLiga
    { t: "21:00", s: "futbol", c: "LaLiga", h: "Levante", a: "Sevilla" },
    // --- Liga Profesional (CEST)
    { t: "00:15", s: "futbol", c: "Liga Profesional", h: "Racing Club", a: "Belgrano" },
    { t: "02:30", s: "futbol", c: "Liga Profesional", h: "Talleres", a: "Independiente" },
    { t: "21:00", s: "futbol", c: "Liga Profesional", h: "Lanús", a: "Vélez" },
    { t: "23:30", s: "futbol", c: "Liga Profesional", h: "Gimnasia (Mendoza)", a: "Newell's" },
    // --- NHL (CEST early hours)
    { t: "00:00", s: "hockey", c: "NHL", h: "NY Rangers", a: "Vancouver Canucks" },
    { t: "01:00", s: "hockey", c: "NHL", h: "Philadelphia Flyers", a: "Carolina Hurricanes" },
    // --- NBA preseason (CEST early hours)
    { t: "00:30", s: "baloncesto", c: "NBA Pretemporada", h: "Cleveland Cavaliers", a: "Orlando Magic" },
    { t: "01:00", s: "baloncesto", c: "NBA Pretemporada", h: "Charlotte Hornets", a: "Milwaukee Bucks" },
    { t: "03:00", s: "baloncesto", c: "NBA Pretemporada", h: "Denver Nuggets", a: "Chicago Bulls" },
  ],
};

/* Helpers */
function compsFor(dayId) {
  const set = [];
  (FIXTURES[dayId] || []).forEach((m) => { if (!set.includes(m.c)) set.push(m.c); });
  return set.sort();
}
function sportsFor(dayId) {
  const set = [];
  (FIXTURES[dayId] || []).forEach((m) => { if (!set.includes(m.s)) set.push(m.s); });
  return set;
}
