export interface VocabularyCard {
  german: string;
  english: string;
  category: string;
  example?: string;
}

export const vocabularyData: VocabularyCard[] = [
  // Work & Career
  {
    german: "die Bewerbung",
    english: "job application",
    category: "Work & Career",
    example: "Ich habe meine Bewerbung gestern abgeschickt."
  },
  {
    german: "das Vorstellungsgespräch",
    english: "job interview",
    category: "Work & Career",
    example: "Morgen habe ich ein Vorstellungsgespräch bei einer Firma."
  },
  {
    german: "der Lebenslauf",
    english: "resume/CV",
    category: "Work & Career",
    example: "Mein Lebenslauf ist zwei Seiten lang."
  },
  {
    german: "die Berufserfahrung",
    english: "professional experience",
    category: "Work & Career",
    example: "Sie hat viel Berufserfahrung im Marketing."
  },
  {
    german: "die Gehaltserhöhung",
    english: "salary increase",
    category: "Work & Career",
    example: "Er hat eine Gehaltserhöhung bekommen."
  },
  {
    german: "die Beförderung",
    english: "promotion",
    category: "Work & Career",
    example: "Nach drei Jahren hat sie eine Beförderung erhalten."
  },
  {
    german: "die Kündigung",
    english: "resignation/termination",
    category: "Work & Career",
    example: "Er hat seine Kündigung eingereicht, weil er einen besseren Job gefunden hat."
  },
  {
    german: "die Arbeitszeit",
    english: "working hours",
    category: "Work & Career",
    example: "Meine Arbeitszeit ist von 9 bis 17 Uhr."
  },

  // Daily Life
  {
    german: "die Wohngemeinschaft",
    english: "shared apartment/flatshare",
    category: "Daily Life",
    example: "Ich wohne in einer Wohngemeinschaft mit drei anderen Studenten."
  },
  {
    german: "der Alltag",
    english: "everyday life",
    category: "Daily Life",
    example: "Im Alltag fahre ich immer mit dem Fahrrad zur Arbeit."
  },
  {
    german: "die Haushaltsaufgaben",
    english: "household chores",
    category: "Daily Life",
    example: "Wir teilen uns die Haushaltsaufgaben."
  },
  {
    german: "die Versicherung",
    english: "insurance",
    category: "Daily Life",
    example: "Hast du eine Krankenversicherung?"
  },
  {
    german: "die Rechnung",
    english: "bill/invoice",
    category: "Daily Life",
    example: "Ich muss noch die Stromrechnung bezahlen."
  },
  {
    german: "der Mietvertrag",
    english: "rental contract",
    category: "Daily Life",
    example: "Ich habe letzte Woche den Mietvertrag für meine neue Wohnung unterschrieben."
  },
  {
    german: "die Nebenkostenabrechnung",
    english: "utility bill statement",
    category: "Daily Life",
    example: "Die Nebenkostenabrechnung kommt einmal im Jahr."
  },
  {
    german: "der Haushalt",
    english: "household",
    category: "Daily Life",
    example: "In unserem Haushalt leben vier Personen."
  },

  // Environment & Nature
  {
    german: "die Umweltverschmutzung",
    english: "environmental pollution",
    category: "Environment",
    example: "Die Umweltverschmutzung ist ein globales Problem."
  },
  {
    german: "nachhaltig",
    english: "sustainable",
    category: "Environment",
    example: "Wir sollten nachhaltige Produkte kaufen."
  },
  {
    german: "der Klimawandel",
    english: "climate change",
    category: "Environment",
    example: "Der Klimawandel betrifft uns alle."
  },
  {
    german: "die Energiewende",
    english: "energy transition",
    category: "Environment",
    example: "Die Energiewende ist wichtig für die Zukunft."
  },
  {
    german: "die Mülltrennung",
    english: "waste separation",
    category: "Environment",
    example: "In Deutschland ist Mülltrennung sehr wichtig."
  },
  {
    german: "erneuerbare Energien",
    english: "renewable energy",
    category: "Environment",
    example: "Erneuerbare Energien sind die Zukunft."
  },
  {
    german: "der Artenschutz",
    english: "species conservation",
    category: "Environment",
    example: "Der Artenschutz ist wichtig für die Biodiversität."
  },
  {
    german: "die Ressourcenschonung",
    english: "resource conservation",
    category: "Environment",
    example: "Ressourcenschonung ist ein wichtiger Teil des Umweltschutzes."
  },

  // Health & Wellness
  {
    german: "die Ernährung",
    english: "nutrition/diet",
    category: "Health",
    example: "Eine gesunde Ernährung ist wichtig."
  },
  {
    german: "die Vorsorgeuntersuchung",
    english: "preventive medical checkup",
    category: "Health",
    example: "Ich gehe jedes Jahr zur Vorsorgeuntersuchung."
  },
  {
    german: "die Krankmeldung",
    english: "sick note",
    category: "Health",
    example: "Ich brauche eine Krankmeldung für meinen Arbeitgeber."
  },
  {
    german: "die Nebenwirkungen",
    english: "side effects",
    category: "Health",
    example: "Dieses Medikament hat starke Nebenwirkungen."
  },
  {
    german: "die Entspannungstechnik",
    english: "relaxation technique",
    category: "Health",
    example: "Yoga ist eine gute Entspannungstechnik."
  },
  {
    german: "die Schlafhygiene",
    english: "sleep hygiene",
    category: "Health",
    example: "Gute Schlafhygiene ist wichtig für erholsamen Schlaf."
  },
  {
    german: "die Stressbewältigung",
    english: "stress management",
    category: "Health",
    example: "Meditation hilft bei der Stressbewältigung."
  },
  {
    german: "die Selbstfürsorge",
    english: "self-care",
    category: "Health",
    example: "Selbstfürsorge ist wichtig für die mentale Gesundheit."
  },

  // Technology & Media
  {
    german: "die Datensicherheit",
    english: "data security",
    category: "Technology",
    example: "Datensicherheit ist im Internet sehr wichtig."
  },
  {
    german: "die Künstliche Intelligenz",
    english: "artificial intelligence",
    category: "Technology",
    example: "Künstliche Intelligenz verändert unsere Arbeitswelt."
  },
  {
    german: "die Anwendung",
    english: "application/app",
    category: "Technology",
    example: "Ich habe eine neue Anwendung auf meinem Handy installiert."
  },
  {
    german: "die Benutzeroberfläche",
    english: "user interface",
    category: "Technology",
    example: "Die Benutzeroberfläche ist sehr benutzerfreundlich."
  },
  {
    german: "die Netzabdeckung",
    english: "network coverage",
    category: "Technology",
    example: "Die Netzabdeckung ist in ländlichen Gebieten oft schlecht."
  },
  {
    german: "die Datenübertragung",
    english: "data transfer",
    category: "Technology",
    example: "Die Datenübertragung erfolgt über eine verschlüsselte Verbindung."
  },
  {
    german: "die Spracherkennung",
    english: "voice recognition",
    category: "Technology",
    example: "Moderne Smartphones nutzen Spracherkennung für viele Funktionen."
  },
  {
    german: "die Bildschirmzeit",
    english: "screen time",
    category: "Technology",
    example: "Zu viel Bildschirmzeit kann die Augen belasten."
  },

  // Society & Politics
  {
    german: "die Meinungsfreiheit",
    english: "freedom of speech",
    category: "Society",
    example: "Meinungsfreiheit ist ein wichtiges Grundrecht."
  },
  {
    german: "die Gleichberechtigung",
    english: "equal rights",
    category: "Society",
    example: "Wir kämpfen für Gleichberechtigung aller Menschen."
  },
  {
    german: "die Wahlbeteiligung",
    english: "voter turnout",
    category: "Society",
    example: "Die Wahlbeteiligung war dieses Jahr höher als erwartet."
  },
  {
    german: "die Flüchtlingskrise",
    english: "refugee crisis",
    category: "Society",
    example: "Die Flüchtlingskrise war ein wichtiges Thema in den Nachrichten."
  },
  {
    german: "die Steuererklärung",
    english: "tax return",
    category: "Society",
    example: "Ich muss meine Steuererklärung bis Ende Juli abgeben."
  },
  {
    german: "die Sozialpolitik",
    english: "social policy",
    category: "Society",
    example: "Die Sozialpolitik eines Landes beeinflusst das Leben aller Bürger."
  },
  {
    german: "die Bürgerbeteiligung",
    english: "citizen participation",
    category: "Society",
    example: "Bürgerbeteiligung ist wichtig für eine funktionierende Demokratie."
  },
  {
    german: "der Generationenvertrag",
    english: "intergenerational contract",
    category: "Society",
    example: "Der Generationenvertrag ist die Grundlage unseres Rentensystems."
  },

  // Education & Learning
  {
    german: "die Fortbildung",
    english: "further education/training",
    category: "Education",
    example: "Meine Firma bietet regelmäßig Fortbildungen an."
  },
  {
    german: "das Selbststudium",
    english: "self-study",
    category: "Education",
    example: "Für die Prüfung ist viel Selbststudium nötig."
  },
  {
    german: "die Lernmethode",
    english: "learning method",
    category: "Education",
    example: "Jeder hat seine eigene Lernmethode."
  },
  {
    german: "die Prüfungsangst",
    english: "exam anxiety",
    category: "Education",
    example: "Viele Studenten leiden unter Prüfungsangst."
  },
  {
    german: "der Studienabschluss",
    english: "degree/graduation",
    category: "Education",
    example: "Nach dem Studienabschluss will ich im Ausland arbeiten."
  },
  {
    german: "die Lerngruppe",
    english: "study group",
    category: "Education",
    example: "Wir treffen uns jeden Donnerstag in unserer Lerngruppe."
  },
  {
    german: "die Fachrichtung",
    english: "field of study/specialization",
    category: "Education",
    example: "Meine Fachrichtung ist Informatik."
  },
  {
    german: "das Fernstudium",
    english: "distance learning",
    category: "Education",
    example: "Ein Fernstudium ermöglicht flexibles Lernen neben dem Beruf."
  },

  // Travel & Transportation
  {
    german: "die Verspätung",
    english: "delay",
    category: "Travel",
    example: "Der Zug hat eine Verspätung von 20 Minuten."
  },
  {
    german: "die Unterkunft",
    english: "accommodation",
    category: "Travel",
    example: "Wir suchen noch eine Unterkunft für unseren Urlaub."
  },
  {
    german: "die Reiseversicherung",
    english: "travel insurance",
    category: "Travel",
    example: "Eine Reiseversicherung ist für lange Reisen empfehlenswert."
  },
  {
    german: "die Sehenswürdigkeit",
    english: "sight/attraction",
    category: "Travel",
    example: "Das Brandenburger Tor ist eine berühmte Sehenswürdigkeit in Berlin."
  },
  {
    german: "der Stau",
    english: "traffic jam",
    category: "Travel",
    example: "Wir standen zwei Stunden im Stau."
  },
  {
    german: "die Fahrgemeinschaft",
    english: "carpool",
    category: "Travel",
    example: "Wir haben eine Fahrgemeinschaft zur Arbeit gebildet, um Kosten zu sparen."
  },
  {
    german: "die Rundreise",
    english: "round trip",
    category: "Travel",
    example: "Wir planen eine Rundreise durch Südeuropa."
  },
  {
    german: "die Verkehrsanbindung",
    english: "transport connection",
    category: "Travel",
    example: "Die Verkehrsanbindung in diesem Stadtteil ist ausgezeichnet."
  },
  
  // Food & Dining
  {
    german: "die Vollwertkost",
    english: "whole food diet",
    category: "Food",
    example: "Vollwertkost enthält viele wichtige Nährstoffe."
  },
  {
    german: "die Lebensmittelunverträglichkeit",
    english: "food intolerance",
    category: "Food",
    example: "Sie hat eine Lebensmittelunverträglichkeit gegen Laktose."
  },
  {
    german: "das Rezept",
    english: "recipe",
    category: "Food",
    example: "Dieses Rezept ist von meiner Großmutter."
  },
  {
    german: "die Zutat",
    english: "ingredient",
    category: "Food",
    example: "Welche Zutaten brauchen wir für den Kuchen?"
  },
  {
    german: "die Mahlzeit",
    english: "meal",
    category: "Food",
    example: "Ich esse normalerweise drei Mahlzeiten pro Tag."
  },
  
  // Relationships & Communication
  {
    german: "die Beziehung",
    english: "relationship",
    category: "Relationships",
    example: "Sie haben eine gute Beziehung zueinander."
  },
  {
    german: "das Missverständnis",
    english: "misunderstanding",
    category: "Relationships",
    example: "Es war nur ein Missverständnis zwischen uns."
  },
  {
    german: "die Auseinandersetzung",
    english: "dispute/argument",
    category: "Relationships",
    example: "Nach der Auseinandersetzung haben sie sich wieder versöhnt."
  },
  {
    german: "die Kommunikationsfähigkeit",
    english: "communication skills",
    category: "Relationships",
    example: "Gute Kommunikationsfähigkeiten sind im Beruf sehr wichtig."
  },
  {
    german: "die Freundschaft",
    english: "friendship",
    category: "Relationships",
    example: "Unsere Freundschaft besteht schon seit der Schulzeit."
  }
];