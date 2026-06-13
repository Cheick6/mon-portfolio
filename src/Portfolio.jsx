import React, { useState, useEffect } from 'react';
import profilePic from './photo.jpg';

const PUB = process.env.PUBLIC_URL || '';

// ============================================================
// DATA — Mets à jour uniquement cette section pour modifier le contenu
// ============================================================
const DATA = {
  name: "Cheick-Oumar Sow",
  subtitle: "Développeur Fullstack",
  tagline: "Développeur Fullstack · Symfony · Angular · Flutter · React",
  alternance: "En recherche d'alternance — Ingénieur Informatique au Conservatoire national des arts et métiers — Début sept. 2026",
  conclusion: {
    forts: [
      "Vision fullstack complète — du modèle de données à l'interface utilisateur, en passant par le déploiement",
      "Autonomie confirmée en conditions réelles : missions en production dès les premières semaines de stage",
      "Polyvalence technique : web, mobile (Flutter, Ionic), IA (n8n, MCP), bases de données (SQL, NoSQL), déploiement (Docker, Coolify)",
      "Capacité d'adaptation à des contextes très différents : équipe étudiante, startup, agence digitale, grand groupe bancaire",
      "Sens du projet : toujours garder le besoin réel au centre, que ce soit le client ou l'utilisateur final",
    ],
    vigilance: [
      "Tendance à vouloir coder avant d'avoir suffisamment planifié — aller plus vite en allant plus lentement",
      "Documentation et rapport : ne pas attendre la fin pour rédiger, commencer dès le premier jour",
      "Ne pas sous-estimer la complexité des déploiements en production : chaque environnement a ses spécificités",
      "Garder la communication proactive dans les équipes, ne pas attendre que les problèmes remontent seuls",
    ],
    pratiques: [
      "Schémas et plans d'architecture avant chaque mission — visualiser avant d'écrire",
      "Toujours sauvegarder la BDD avant toute modification en production",
      "Vider le cache et vérifier le commit réellement déployé après chaque push",
      "Documenter les choix techniques au fur et à mesure, pas à la fin",
      "Tester en environnement de staging avant de toucher la production (clés Stripe test → live)",
    ],
    suite: "Ce BUT Informatique m'a donné une base technique solide et une vraie expérience professionnelle. La prochaine étape — le cycle ingénieur au Conservatoire national des arts et métiers en alternance — s'inscrit dans la continuité directe de ce parcours. L'objectif : aller plus loin dans la conception d'architectures logicielles complexes, développer la dimension management de projet, et me positionner progressivement comme lead technique puis chef de projet.",
  },

  intro: [
    "J'ai choisi l'informatique par élimination — non pas par défaut, mais parce que c'est le seul domaine qui a répondu à mes besoins sans jamais devenir une contrainte.",
    "Cette liberté dans la discipline m'a rapidement orienté vers le développement fullstack. Pour moi, la vision d'ensemble prime sur tout. Un projet ne tient que si quelqu'un en comprend tous les maillons — du modèle de données à l'interface utilisateur. Le fullstack n'est pas une spécialité parmi d'autres : c'est une posture. Et cette posture mène naturellement vers le pilotage de projet.",
    "C'est cette trajectoire qui m'a conduit vers le Conservatoire national des arts et métiers. Le programme cycle ingénieur m'est apparu comme la suite logique du BUT Informatique : les matières, les méthodes, l'exigence. Un prolongement naturel, pas un changement de cap.",
    "Dans cinq ans, je me vois à la tête de plusieurs projets — aussi bien sur le plan technique qu'organisationnel. Développeur qui comprend les enjeux métier, et chef de projet qui comprend le code.",
  ],
  bio: "Étudiant en 3ème année de BUT Informatique, passionné par le développement logiciel et la résolution de problèmes techniques complexes. Curieux, patient et doté d'un fort esprit d'équipe, je cherche à intégrer une entreprise ambitieuse pour mettre mes compétences au service de projets à fort impact.",
  location: "Colombes (92), France",
  email: "cheicksow384@gmail.com",
  github: "https://github.com/Cheick6",
  linkedin: "https://www.linkedin.com/in/cheick-oumar-sow-6434192ab",
  available: true,

  projects: [
    {
      id: "01",
      title: "Simulation Uber Eats",
      description: "Plateforme de livraison temps réel. Architecture événementielle Redis Pub/Sub + MongoDB Change Streams.",
      longDescription: "Simulation complète d'une plateforme de livraison à la demande, inspirée d'Uber Eats. Le projet met en œuvre une architecture distribuée et événementielle pour coordonner en temps réel un manager, des livreurs et des commandes.",
      stack: ["Python", "Redis", "MongoDB"],
      year: "2024",
      type: "Projet 3ème année — Backend & Systèmes Distribués",
      link: "https://github.com/Cheick6/mongoDB.git",
      details: [
        "Architecture événementielle : Redis Pub/Sub pour la communication instantanée Manager → Livreurs",
        "MongoDB Change Streams pour la persistance et le suivi des états en temps réel",
        "Simulation de plusieurs acteurs concurrents (manager, livreurs, commandes)",
        "Gestion des états de commande : en attente, en cours, livré, annulé",
        // ➜ Complète ici : équipe, durée, ce que tu as appris, difficultés rencontrées
      ],
      competences: ["Réaliser", "Optimiser"],
    },
    {
      id: "02",
      title: "App Mobile Cuisine & Frigo",
      description: "Recommandation de recettes hors-ligne avec gestion anti-gaspillage. Clean Architecture + Pattern Repository.",
      longDescription: "Application mobile cross-platform développée en Flutter, fonctionnant entièrement hors connexion. L'application recommande des recettes en fonction des ingrédients disponibles dans le frigo de l'utilisateur, avec un objectif anti-gaspillage.",
      stack: ["Flutter", "Dart", "SQLite"],
      year: "2024",
      type: "Projet 3ème année — Mobile",
      link: "https://github.com/DevKosX/S501_Developpement.git",
      details: [
        "Architecture Clean Architecture avec Pattern Repository pour une séparation claire des couches",
        "Fonctionnement 100% hors-ligne grâce à SQLite (confidentialité des données garantie)",
        "Algorithme de recommandation croisant l'inventaire disponible et l'historique utilisateur",
        "Interface Flutter responsive adaptée iOS et Android",
        // ➜ Complète ici : équipe, durée, difficultés, acquis
      ],
      competences: ["Réaliser", "Optimiser", "Gérer"],
    },
    {
      id: "03",
      title: "PingMe",
      description: "Messagerie instantanée dyadique pour service client avec annotation d'émotions. WebSockets temps réel.",
      longDescription: "Application de messagerie instantanée développée en équipe, orientée service client. Chaque message peut être annoté d'une émotion, permettant au service client d'analyser le ressenti des utilisateurs en temps réel.",
      stack: ["Java", "WebSocket", "MySQL"],
      year: "2023",
      type: "Projet de Groupe — 2ème année",
      link: "https://github.com/Cheick6/SAE_S1.git",
      details: [
        "Communication temps réel avec WebSockets (Jakarta EE / Java)",
        "Système d'annotation obligatoire des émotions sur chaque message",
        "Persistance des données avec MySQL",
        "Travail en équipe avec répartition des rôles (back, front, BDD)",
        // ➜ Complète ici : taille équipe, durée, ton rôle précis, difficultés
      ],
      competences: ["Réaliser", "Collaborer", "Conduire"],
    },
    {
      id: "04",
      title: "Calculatrice Java",
      description: "Programme console avec les 4 opérations arithmétiques. POO complète : héritage, polymorphisme.",
      longDescription: "Premier projet Java significatif, réalisé en binôme en 1ère année. L'objectif était de maîtriser les fondamentaux de la Programmation Orientée Objet à travers un cas concret.",
      stack: ["Java", "POO"],
      year: "2022",
      type: "Projet Binôme — 1ère année",
      link: "https://github.com/Cheick6/java_calculatrice-.git",
      details: [
        "Implémentation des 4 opérations arithmétiques via POO (héritage, polymorphisme)",
        "Gestion robuste des erreurs avec try-catch (division par zéro, entrées invalides)",
        "Découverte des design patterns et de la structuration en classes",
        // ➜ Complète ici : ce que tu as appris, difficultés de débutant, évolution depuis
      ],
      competences: ["Réaliser"],
    },
    {
      id: "05",
      title: "24H de l'Info",
      description: "Coordination d'un hackathon national. Gestion logistique, communication et leadership.",
      longDescription: "Co-organisation d'un hackathon étudiant de 24 heures à l'IUT de Villetaneuse. Rôle clé dans la coordination logistique, la communication avec les équipes participantes et la gestion des ressources pendant l'événement.",
      stack: ["Leadership", "Logistique", "Communication"],
      year: "2024",
      type: "Hackathon / Événementiel",
      link: process.env.PUBLIC_URL + "/24h_Info-main/index.html",
      details: [
        "Planification logistique de l'événement (planning, espaces, matériel)",
        "Coordination d'équipe et encadrement des participants pendant 24h",
        "Gestion de la communication et des imprévus en temps réel",
        "Expérience de leadership dans un environnement sous pression",
        // ➜ Complète ici : combien de participants, ton rôle exact, bilan
      ],
      competences: ["Conduire", "Collaborer", "Gérer"],
    },
    {
      id: "06",
      title: "Portfolio Personnel",
      description: "Évolution de HTML/CSS pur vers React moderne avec animations et mode terminal.",
      longDescription: "Conception et développement de mon portfolio personnel, évoluant d'une version statique HTML/CSS vers une application React moderne avec deux modes d'affichage : une vue éditoriale minimaliste et une vue terminal inspirée des éditeurs de code.",
      stack: ["React", "CSS", "Space Grotesk", "JetBrains Mono"],
      year: "2025",
      type: "Projet Personnel — Développement Web",
      link: "https://github.com/Cheick6/mon-portfolio.git",
      details: [
        "Architecture React avec bascule entre deux vues (Mono / Terminal) via useState",
        "Système de styles auto-injectés (CSS-in-JS sans dépendance externe)",
        "Animations CSS : fadeUp, blink, transitions hover",
        "Design responsive avec clamp() et grilles CSS adaptatives",
        "Déploiement continu sur GitHub Pages",
        // ➜ Complète ici : tes choix de design, ce que tu as appris
      ],
      competences: ["Réaliser", "Conduire"],
    },
  ],

  competences: [
    {
      id: "01",
      title: "Réaliser un développement d'application",
      tagline: "Développer et adapter des solutions informatiques",
      synthesis: "Réaliser demande avant tout une prise de recul. Avant d'écrire la première ligne de code, j'ai appris à analyser le problème, à questionner mes intuitions et à accepter l'autocritique. C'est cette posture réflexive — souvent inconfortable — qui permet de construire des solutions solides et évolutives plutôt que des réponses rapides mais fragiles.",
      strengths: [
        "Analyse du besoin avant l'implémentation",
        "Maîtrise de la POO et des architectures structurées (Clean Architecture)",
        "Capacité à remettre en question ses choix techniques en cours de projet",
      ],
      vigilance: [
        "Tendance naturelle à vouloir coder trop vite → apprendre à ralentir pour mieux avancer",
        "Ne pas confondre complexité du code et qualité de la solution",
      ],
      saes: [
        "S1.01 - Implémentation · 1ère année (Calculatrice Java — premiers pas en POO)",
        "S3.01 - Développement d'une application · 2ème année (PingMe — Java / WebSocket / MySQL)",
        "S5.A.01 - Développement avancé · 3ème année (App Flutter Cuisine & Frigo + Simulation Uber Eats)",
        "Stage USTS Caraïbes · 3ème année — Développement Symfony · Angular · Flutter · n8n",
      ],
      modules: [
        "R1.01 Initiation au développement",
        "R1.02 Développement orienté objet",
        "R2.01 Développement OO avancé",
        "R3.01 Développement web",
        "R4.01 Architecture logicielle",
        "R5.01 Développement avancé",
      ],
      projects: ["App Mobile Cuisine & Frigo", "Simulation Uber Eats", "PingMe", "Calculatrice Java"],
    },
    {
      id: "02",
      title: "Optimiser des applications informatiques",
      tagline: "Proposer des applications informatiques optimisées",
      synthesis: "L'optimisation est la compétence la plus exigeante intellectuellement. Elle nécessite de connaître le projet sur le bout des doigts : chaque décision a des effets en cascade sur les autres composants. J'ai compris qu'on n'optimise pas par intuition — on mesure d'abord, on comprend le goulot d'étranglement, puis on agit avec précision.",
      strengths: [
        "Choix technologiques justifiés : Redis Pub/Sub pour la latence, SQLite offline-first pour la performance mobile",
        "Algorithme de recommandation local croisant inventaire et historique sans appel réseau",
        "Conscience du compromis performance / lisibilité du code",
      ],
      vigilance: [
        "Risque d'over-engineering : optimiser ce qui n'est pas encore un problème",
        "Toujours mesurer les performances avant et après une modification",
      ],
      saes: [
        "S1.02 - Comparaison d'algo. · 1ère année (analyse et comparaison d'algorithmes de tri)",
        "S5.A.01 - Développement avancé · 3ème année (Clean Architecture Flutter, Pattern Repository, Redis Pub/Sub)",
      ],
      modules: [
        "R1.03 Algorithmique",
        "R2.02 Complexité algorithmique",
        "R3.02 Qualité de développement",
        "R5.02 Méthodes d'optimisation",
      ],
      projects: ["Simulation Uber Eats", "App Mobile Cuisine & Frigo"],
    },
    {
      id: "03",
      title: "Administrer des systèmes informatiques",
      tagline: "Déployer, configurer et maintenir l'infrastructure",
      synthesis: "L'administration, ce sont les fondations invisibles sur lesquelles tout repose. Une erreur de configuration en amont peut compromettre l'ensemble d'un projet. Cette compétence m'a appris la rigueur : chaque paramètre a une raison d'être, chaque environnement doit être documenté. Quand l'administration est bien faite, personne ne la remarque — et c'est exactement l'objectif.",
      strengths: [
        "Utilisation rigoureuse de Git / GitHub (branches, commits lisibles)",
        "Initiation à Docker pour l'isolation des environnements",
        "Participation à l'architecture logicielle lors des stages en entreprise",
      ],
      vigilance: [
        "Pas de place à l'approximation : un oubli de configuration peut bloquer toute une équipe",
        "Documenter systématiquement les choix d'infrastructure pour les autres",
      ],
      saes: [
        "S1.03 - Installation poste · 1ère année (configuration d'un poste de travail)",
        "Stage J'Origine SAS · 2ème année — Gestion de l'infrastructure backend Symfony",
        "Stage USTS Caraïbes · 3ème année — Administration des environnements Docker, n8n, API Platform",
      ],
      modules: [
        "R1.04 Réseaux & télécommunications",
        "R2.03 Administration Unix / Linux",
        "R3.03 Systèmes avancés",
        "R4.03 Cloud & services",
      ],
      projects: ["Stage USTS Caraïbes", "Stage J'Origine SAS", "Portfolio Personnel"],
    },
    {
      id: "04",
      title: "Gérer des données de l'information",
      tagline: "Concevoir, exploiter et administrer les données",
      synthesis: "La gestion des données est la compétence que j'ai le plus appréciée. Modéliser une base, respecter les contraintes d'intégrité, optimiser les requêtes : c'est à la fois rigoureux et créatif. Mais la donnée est aussi précieuse et fragile — une manipulation hasardeuse peut être irréversible, en particulier en production.",
      strengths: [
        "Pratique variée : MongoDB, Redis, SQL/SQLite, Firebase/Firestore",
        "Conscience des contraintes d'intégrité et des relations entre entités",
        "Nettoyage et optimisation d'une BDD réelle en production (stage J'Origine)",
      ],
      vigilance: [
        "Manipuler les données de production avec rigueur : toujours sauvegarder avant de modifier",
        "Respecter les contraintes métier au-delà des contraintes purement techniques",
      ],
      saes: [
        "S1.04 - Création BD · 1ère année (modélisation et création d'une base de données relationnelle)",
        "S5.A.01 - Développement avancé · 3ème année (SQLite offline — App Cuisine & Frigo · MongoDB + Redis — Simulation Uber Eats)",
        "Stage J'Origine SAS · 2ème année — Nettoyage et optimisation BDD de production",
      ],
      modules: [
        "R1.05 Introduction aux bases de données",
        "R2.05 SQL avancé",
        "R3.05 NoSQL & données non structurées",
        "R4.04 Gestion d'un système d'information",
      ],
      projects: ["Simulation Uber Eats", "App Mobile Cuisine & Frigo", "Stage J'Origine SAS", "Stage USTS Caraïbes"],
    },
    {
      id: "05",
      title: "Conduire un projet",
      tagline: "Piloter un projet et satisfaire les besoins utilisateurs",
      synthesis: "Conduire un projet est une source de fierté immense — et une école de maturité. Organiser, planifier, prendre des décisions : c'est stimulant et constructif. Mais la réussite d'un projet ne tient pas qu'à la technique. Elle dépend de la capacité à sentir le ressenti de chaque membre, à détecter les tensions avant qu'elles ne deviennent des blocages, et à maintenir la cohésion.",
      strengths: [
        "Co-organisation des 24H de l'Info : coordination logistique d'un hackathon sous pression",
        "Sens de l'initiative et capacité à prendre des décisions rapides",
        "Orientation utilisateur : garder le besoin réel au centre des décisions techniques",
      ],
      vigilance: [
        "Ne jamais sacrifier l'humain à l'efficacité : un projet techniquement réussi mais humainement raté est un échec",
        "Prendre en compte le ressenti de chaque membre, même les plus silencieux",
      ],
      saes: [
        "S1.05 - Recueil de besoins · 1ère année (formalisation des besoins client)",
        "S3.01 - Développement d'une application · 2ème année (PingMe — planification, répartition des rôles)",
        "24H de l'Info · 3ème année — Co-organisation d'un hackathon national",
        "Stage USTS Caraïbes · 3ème année — Gestion des sprints, reporting hebdomadaire, autonomie complète",
      ],
      modules: [
        "R1.06 Introduction à la gestion de projet",
        "R2.06 Modélisation & UML",
        "R3.06 Méthodes agiles",
        "R5.05 Management de projet informatique",
      ],
      projects: ["24H de l'Info", "PingMe", "Portfolio Personnel"],
    },
    {
      id: "06",
      title: "Travailler dans une équipe informatique",
      tagline: "Travailler en équipe et s'intégrer dans une organisation",
      synthesis: "La collaboration a traversé presque tous mes projets et mes stages. Travailler en équipe permet d'aller plus loin, plus vite — mais elle peut aussi créer des blocages durables en cas de désaccord. J'ai appris que l'agilité n'est pas qu'une méthode : c'est une posture. Accepter que la meilleure idée ne vienne pas toujours de soi, être compréhensif face au changement.",
      strengths: [
        "Collaboration efficace sur PingMe, 24H de l'Info et les deux stages en entreprise",
        "Pratique des outils collaboratifs : Slack, Jira, Confluence, Zoom, GitHub",
        "Capacité d'adaptation à différents contextes (équipe étudiante, startup, grand groupe)",
      ],
      vigilance: [
        "Les désaccords peuvent paralyser — savoir écouter, comprendre et trancher avec tact",
        "Communiquer proactivement plutôt qu'attendre que les problèmes remontent",
      ],
      saes: [
        "S1.06 - Environnement éco. · 1ère année (travail écrit + capsule vidéo)",
        "S3.01 - Développement d'une application · 2ème année (PingMe — répartition back / front / BDD)",
        "S5.A.01 - Développement avancé · 3ème année (binôme, revues de code, Git collaboratif)",
        "Stage J'Origine SAS · 2ème année — Intégration en équipe startup",
        "Stage USTS Caraïbes · 3ème année — Intégration en équipe professionnelle (Paris 13ème)",
      ],
      modules: [
        "R1.07 Communication professionnelle",
        "R2.07 Anglais technique",
        "R3.07 Droit du numérique & éthique",
        "R4.06 Économie verte du numérique",
      ],
      projects: ["PingMe", "24H de l'Info", "Stage USTS Caraïbes", "Stage J'Origine SAS"],
    },
  ],

  photos: [
    { src: `${PUB}/images/usts_1.jpg`, caption: 'Développement d\'applications IA — USTS Caraïbes', tag: 'Stage USTS · Mars 2026' },
    { src: `${PUB}/images/usts_2.jpg`, caption: 'Une journée productive au bureau — concentration et rigueur', tag: 'Stage USTS · Mars 2026' },
    { src: `${PUB}/images/usts_3.jpg`, caption: 'Architecture logicielle : Symfony, Angular, n8n', tag: 'Stage USTS · Mars 2026' },
    { src: `${PUB}/images/usts_4.jpg`, caption: 'Portrait — quartier Paris 13e, pendant le stage', tag: 'Stage USTS · Mars 2026' },
    { src: `${PUB}/images/usts_5.jpg`, caption: 'En collaboration avec l\'équipe technique USTS', tag: 'Stage USTS · Mars 2026' },
    { src: `${PUB}/images/usts_6.jpg`, caption: 'Après une session de développement réussie', tag: 'Stage USTS · Mars 2026' },
    { src: `${PUB}/images/usts_7.jpg`, caption: 'Shooting professionnel — USTS Caraïbes, avril 2026', tag: 'Stage USTS · Avril 2026' },
    { src: `${PUB}/images/usts_8.jpg`, caption: 'Stage développeur d\'application IA — Paris 13e', tag: 'Stage USTS · Avril 2026' },
    { src: `${PUB}/images/cnam_1.jpg`, caption: 'Visite du musée des Arts et Métiers — Conservatoire national des arts et métiers, Paris', tag: 'Musée du Conservatoire national des arts et métiers · BUT Informatique' },
    { src: `${PUB}/images/cnam_2.jpg`, caption: 'Le Conservatoire national des arts et métiers : là où je poursuivrai mes études en cycle ingénieur', tag: 'Musée du Conservatoire national des arts et métiers · BUT Informatique' },
    { src: `${PUB}/images/cnam_3.jpg`, caption: 'Cours de Communication — sortie culturelle au musée des Arts et Métiers', tag: 'Musée du Conservatoire national des arts et métiers · BUT Informatique' },
    { src: `${PUB}/images/cnam_4.jpg`, caption: 'Entre science et histoire — musée des Arts et Métiers', tag: 'Musée du Conservatoire national des arts et métiers · BUT Informatique' },
    { src: `${PUB}/images/cnam_5.jpg`, caption: 'Une institution qui m\'inspire — futur campus du Conservatoire national des arts et métiers', tag: 'Musée du Conservatoire national des arts et métiers · BUT Informatique' },
    { src: `${PUB}/images/cnam_6.jpg`, caption: 'Promotion BUT Informatique — IUT de Villetaneuse', tag: 'Musée du Conservatoire national des arts et métiers · BUT Informatique' },
  ],

  stack: [
    "Java", "Python", "JavaScript", "PHP", "Dart", "Node.js",
    "Symfony", "Angular", "React.js", "Flutter", "API Platform",
    "HTML5", "CSS3", "PWA", "n8n",
    "Firebase", "SQL", "SQLite", "REST API", "WebSocket",
    "Git", "Docker", "Clean Architecture", "Agile",
  ],

  experiences: [
    {
      id: 1,
      role: "Stagiaire Développeur Full Stack",
      company: "USTS Caraïbes",
      location: "Paris 13ème",
      period: "Mars 2026 — Juin 2026",
      description: "USTS (Un Site Tout de Suite) est une agence spécialisée dans le développement web et l'intégration de solutions digitales sur mesure. Moins de 10 personnes, deux pôles : développement spécifique et édition logicielle.",
      details: [
        "Mission 1 — Cosmilab : internationalisation complète d'un logiciel de gestion de prothèses dentaires pour le marché américain (Symfony · Angular · Ionic · PostgreSQL)",
        "Passage en anglais du backend, frontend et app mobile · adaptation fuseaux horaires, formats de dates, calendriers US",
        "Remapping intégral du schéma dentaire (FDI → Universal Numbering System) et réécriture de toutes les URLs",
        "Migration et formatage des données client depuis un FTP Cosmilab (whitelist IP, conflits de colonnes)",
        "Déploiement App Store (Xcode) et Google Play (Android Studio) · gestion des refus Apple pour plagiat",
        "Mise à jour des clés API Stripe (test + live, webhooks) et Brevo (emails transactionnels)",
        "Génération de documents US : factures, fiches de traçabilité, mails automatiques responsives",
        "Mission 2 — Jean-Louis (SAIA) : développement d'un module de recherche de prospects sur agent IA interne",
        "Développement d'un MCP API de vérification d'existence d'adresses mail (résolution MX + SMTP) hébergé sur VPS USTS",
        "Utilisation du MCP data.gouv.fr pour interroger les données publiques françaises via l'IA",
        "Stack transverse : Windsurf (IA intégrée) · GitLab · monday.com · Coolify (hébergement VPS auto-hébergé)",
      ],
      competencesBut: [
        {
          mission: "Mission 1 — Cosmilab",
          tags: ["Réaliser", "Administrer", "Gérer"],
        },
        {
          mission: "Mission 2 — Jean-Louis (SAIA)",
          tags: ["Réaliser", "Optimiser"],
        },
      ],
      bilan: {
        surprises: [
          "Une vraie autonomie dès le début — on me faisait confiance sur des missions en production",
          "Ambiance d'équipe excellente : afterwork sushis, soirée boxe, intervention d'avocates sur les conflits entre associés — une culture d'entreprise réelle, pas juste du télétravail",
        ],
        problemes: [
          "Déploiement Coolify : les changements n'apparaissaient pas toujours immédiatement après un push → appris à vérifier le commit réellement déployé via git log dans le container et à vider le cache Symfony",
          "Migration BDD Cosmilab : données pas structurées de la même façon (nom/prénom dans colonnes séparées vs colonne unique) → travail de formatage minutieux",
          "Refus Apple App Store pour plagiat (code dupliqué de l'app française) → modification d'assets et nouvelle soumission complète",
          "Bug $destMail non définie bloquant l'envoi des mails 1 fois sur 2 → variable de test oubliée dans le code",
          "Accès FTP Cosmilab bloqué → whitelist IP nécessaire auprès du service informatique client",
        ],
        different: [
          "Le rapport et la soutenance : je ne savais pas qu'ils devaient être rendus pendant le stage — j'aurais commencé à rédiger dès la première semaine",
          "Faire des schémas et plans détaillés avant de démarrer chaque mission pour mieux visualiser l'architecture avant d'écrire du code",
        ],
        siCetaitARefaire: "Je referais ce stage sans hésiter. La diversité des missions (internationalisation, IA, mobile, BDD, déploiement) m'a exposé à presque tous les aspects du développement full stack professionnel. Je gérerais mieux la documentation dès le premier jour et je prendrais plus de recul avant chaque mission pour planifier plutôt que de foncer.",
      },
    },
    {
      id: 2,
      role: "Stagiaire Développeur Backend",
      company: "J'Origine SAS",
      location: "Choisy-le-Roi",
      period: "Févr. 2025 — Avr. 2025",
      description: "Première immersion professionnelle dans un environnement de startup moderne.",
      details: [
        "Génération automatisée de rapports DOCX via extraction de données Firebase en Node.js",
        "Nettoyage, restructuration et optimisation de la base de données Firebase/Firestore",
        "Organisation des tâches via schémas visuels (Jira, Confluence)",
        "Collaboration quotidienne en équipe distribuée : Slack, Zoom",
        "Contribution à la documentation technique du projet",
        "Intégration aux rituels d'équipe Agile (stand-ups, sprints, rétros)",
      ],
      // ➜ Ajoutez vos photos ici. Ex: photos: ['/images/jorigine-1.jpg']
      photos: [],
    },
    {
      id: 3,
      role: "Agent de constitution de dossiers",
      company: "Banque Postale Consumer Finance",
      location: "Saint-Denis",
      period: "Juil. 2024 — Août 2024",
      description: "Expérience en environnement financier réglementé, axée sur la rigueur et la conformité.",
      details: [
        "Constitution complète de dossiers clients selon les procédures internes",
        "Vérification rigoureuse de la conformité et de la fiabilité des informations transmises",
        "Travail en équipe dans un environnement à forte exigence qualité et délais",
        "Familiarisation avec les processus réglementaires du secteur bancaire",
      ],
      photos: [],
    },
  ],
};

// ============================================================
// STYLES GLOBAUX (auto-injectés, pas de dépendance externe)
// ============================================================
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { overflow-x: hidden; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: none; }
    }
    @keyframes blink {
      0%,49%  { opacity: 1; }
      50%,100%{ opacity: 0; }
    }

    .pf-root { animation: fadeUp 0.55s ease both; }

    /* ---- Bouton bascule ---- */
    .pf-cv-btn { position:fixed; top:20px; left:22px; z-index:100; padding:11px 20px; border-radius:999px; font-family:'JetBrains Mono',monospace; font-size:13px; font-weight:500; cursor:pointer; transition:transform .2s,background .2s,border-color .2s,color .2s; text-decoration:none; display:inline-flex; align-items:center; gap:8px; background:transparent; color:#16150f; border:1px solid #cfc9bb; }
    .pf-cv-btn:hover { background:#16150f; color:#f7f6f2; border-color:#16150f; transform:translateY(-1px); }
    .pf-cv-btn--term { color:#f7f6f2; border-color:#2a4d33; }
    .pf-cv-btn--term:hover { background:#3fb950; color:#07090d; border-color:#3fb950; }

    .pf-toggle {
      position: fixed; top: 20px; right: 22px; z-index: 100;
      padding: 11px 20px; border-radius: 999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px; font-weight: 500;
      cursor: pointer;
      transition: transform .2s, background .2s;
      border: 1px solid transparent;
    }
    .pf-toggle:hover { transform: translateY(-2px); }
    .pf-toggle.is-mono { background: #16150f; color: #f7f6f2; border-color: #16150f; }
    .pf-toggle.is-term { background: transparent; color: #3fb950; border: 1px solid #2a4d33; }

    /* ===================================================
       VUE MONO
    =================================================== */
    .m-root { background: #f7f6f2; color: #16150f; font-family: 'Space Grotesk', sans-serif; min-height: 100vh; }
    .m-wrap { max-width: 1080px; margin: 0 auto; padding: 0 6vw; }
    .m-hr   { border: none; border-top: 1px solid #ddd8cb; }

    /* Hero */
    .m-hero       { padding: clamp(80px,12vw,140px) 0 clamp(60px,8vw,100px); }
    .m-hero-inner { display: grid; grid-template-columns: 1fr 320px; gap: clamp(32px,5vw,72px); align-items: center; }
    .m-available  { display: inline-flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono',monospace; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: #3a382f; margin-bottom: 28px; }
    .m-dot        { width: 8px; height: 8px; border-radius: 50%; background: #3fae6b; display: inline-block; flex-shrink: 0; }
    .m-alternance { display: inline-flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono',monospace; font-size: 12px; color: #16150f; background: #fff3cd; border: 1px solid #f0d060; border-radius: 6px; padding: 7px 14px; margin-bottom: 28px; }
    .m-h1         { font-size: clamp(42px,9vw,120px); font-weight: 500; letter-spacing: -.035em; line-height: 1.05; margin-bottom: clamp(12px,2vw,24px); }
    .m-sub        { font-size: clamp(17px,2.2vw,26px); color: #7a7568; font-weight: 400; margin-bottom: clamp(28px,4vw,48px); }
    .m-links      { display: flex; flex-wrap: wrap; gap: 8px 24px; font-family: 'JetBrains Mono',monospace; font-size: 13px; color: #7a7568; }
    .m-link       { color: #16150f; text-decoration: underline; text-underline-offset: 4px; }
    .m-link:hover { color: #3fae6b; }
    .m-photo-wrap { position: relative; }
    .m-photo      { width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: center top; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,.12); }
    .m-photo-tag  { position: absolute; bottom: 16px; left: 16px; font-family:'JetBrains Mono',monospace; font-size:10px; text-transform:uppercase; letter-spacing:.1em; color:#f7f6f2; background:rgba(22,21,15,.55); backdrop-filter:blur(6px); padding:5px 10px; border-radius:4px; }

    /* Conclusion */
    .m-ccl       { padding: clamp(48px,7vw,80px) 0; }
    .m-ccl-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; }
    .m-ccl-box   { background: #f7f6f2; border-radius: 10px; padding: 24px; border: 1px solid #e4dfd2; }
    .m-ccl-box.warn { background: #fff9f0; border-color: #f0d8b0; }
    .m-ccl-head  { font-family:'JetBrains Mono',monospace; font-size:10px; text-transform:uppercase; letter-spacing:.12em; margin-bottom:16px; }
    .m-ccl-head.ok   { color:#3fae6b; }
    .m-ccl-head.warn { color:#e07b39; }
    .m-ccl-item  { display:flex; gap:10px; margin-bottom:10px; font-size:13.5px; color:#3a382f; line-height:1.6; }
    .m-ccl-item:last-child { margin-bottom:0; }
    .m-ccl-dot   { flex-shrink:0; font-weight:700; margin-top:1px; }
    .m-ccl-full  { margin-bottom: 28px; }
    .m-ccl-label { font-family:'JetBrains Mono',monospace; font-size:10px; text-transform:uppercase; letter-spacing:.12em; color:#8a8578; margin-bottom:14px; }
    .m-ccl-pills { display:flex; flex-wrap:wrap; gap:8px; }
    .m-ccl-pill  { font-family:'JetBrains Mono',monospace; font-size:11px; padding:5px 12px; border-radius:4px; background:#f7f6f2; color:#3a382f; border:1px solid #ddd8cb; }
    .m-pill-btn  { cursor:pointer; transition:background .15s, border-color .15s, color .15s; }
    .m-pill-btn:hover { background:#16150f; color:#f7f6f2; border-color:#16150f; }
    .sk-overlay  { position:fixed; inset:0; background:rgba(22,21,15,.55); backdrop-filter:blur(4px); z-index:200; display:flex; align-items:center; justify-content:center; padding:20px; }
    .sk-modal    { background:#f7f6f2; border-radius:16px; padding:36px; max-width:420px; width:100%; position:relative; box-shadow:0 24px 64px rgba(0,0,0,.18); }
    .sk-close    { position:absolute; top:16px; right:16px; background:none; border:1px solid #ddd8cb; border-radius:999px; padding:4px 12px; font-size:12px; cursor:pointer; color:#7a7568; font-family:'JetBrains Mono',monospace; transition:background .2s,color .2s; }
    .sk-close:hover { background:#16150f; color:#f7f6f2; border-color:#16150f; }
    .sk-label    { font-family:'JetBrains Mono',monospace; font-size:10px; text-transform:uppercase; letter-spacing:.12em; color:#8a8578; margin-bottom:8px; }
    .sk-tech     { font-size:28px; font-weight:600; letter-spacing:-.02em; color:#16150f; margin-bottom:24px; }
    .sk-sub      { font-family:'JetBrains Mono',monospace; font-size:11px; text-transform:uppercase; letter-spacing:.1em; color:#8a8578; margin-bottom:14px; }
    .sk-list     { list-style:none; display:flex; flex-direction:column; gap:8px; }
    .sk-item     { display:flex; align-items:center; gap:12px; padding:12px 16px; border-radius:8px; border:1px solid #e4dfd2; cursor:pointer; transition:background .15s, border-color .15s; font-size:14px; color:#16150f; }
    .sk-item:hover { background:#16150f; color:#f7f6f2; border-color:#16150f; }
    .sk-item:hover .sk-arrow { color:#f7f6f2; }
    .sk-arrow    { font-family:'JetBrains Mono',monospace; color:#8a8578; font-size:12px; transition:color .15s; }
    .sk-empty    { font-size:14px; color:#8a8578; font-style:italic; }
    .m-ccl-suite { font-size:clamp(15px,1.5vw,17px); color:#3a382f; line-height:1.85; border-left:3px solid #3fae6b; padding-left:20px; }
    @media(max-width:720px){ .m-ccl-grid{ grid-template-columns:1fr; } }

    /* Introduction */
    .m-intro      { padding: clamp(48px,7vw,80px) 0; }
    .m-intro-grid { display: grid; grid-template-columns: 200px 1fr; gap: clamp(32px,5vw,80px); align-items: start; }
    .m-intro-label{ font-family:'JetBrains Mono',monospace; font-size:11px; text-transform:uppercase; letter-spacing:.12em; color:#8a8578; padding-top: 6px; }
    .m-intro-body { }
    .m-intro-p    { font-size: clamp(15px,1.6vw,18px); color:#3a382f; line-height:1.85; margin-bottom:20px; }
    .m-intro-p:last-child { margin-bottom:0; }
    .m-intro-p strong { color:#16150f; font-weight:500; }
    @media(max-width:720px){ .m-intro-grid{ grid-template-columns:1fr; gap:20px; } }

    /* Section générique */
    .m-sec        { padding: clamp(48px,7vw,80px) 0; }
    .m-label      { font-family: 'JetBrains Mono',monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .12em; color: #8a8578; margin-bottom: 36px; }

    /* Projets */
    .m-proj-list { list-style: none; }
    .m-proj-row  {
      display: grid; grid-template-columns: 48px 1fr auto;
      gap: 16px; align-items: center;
      padding: 20px 0; border-top: 1px solid #e4dfd2;
      cursor: default; border-radius: 6px;
      transition: background .25s, color .25s, padding .25s;
    }
    .m-proj-row:last-child { border-bottom: 1px solid #e4dfd2; }
    .m-proj-row:hover { background: #16150f; color: #f7f6f2; padding-left: 16px; padding-right: 16px; }
    .m-proj-num  { font-family: 'JetBrains Mono',monospace; font-size: 12px; color: #8a8578; }
    .m-proj-row:hover .m-proj-num  { color: #5a5850; }
    .m-proj-name { font-size: 17px; font-weight: 500; margin-bottom: 4px; }
    .m-proj-desc { font-size: 13px; color: #7a7568; line-height: 1.5; }
    .m-proj-row:hover .m-proj-desc { color: #9a9488; }
    .m-proj-meta  { text-align: right; flex-shrink: 0; }
    .m-proj-stack { font-family: 'JetBrains Mono',monospace; font-size: 11px; color: #8a8578; line-height: 1.9; }
    .m-proj-row:hover .m-proj-stack { color: #5a5850; }
    .m-proj-year  { font-family: 'JetBrains Mono',monospace; font-size: 11px; color: #8a8578; }
    .m-proj-arrow { color: #8a8578; text-decoration: none; font-size: 16px; display: block; margin-top: 4px; }
    .m-proj-row:hover .m-proj-arrow { color: #f7f6f2; }

    /* Deux colonnes */
    .m-two      { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .m-col-label{ font-family: 'JetBrains Mono',monospace; font-size: 11px; text-transform: uppercase; letter-spacing: .12em; color: #8a8578; margin-bottom: 24px; }

    /* Pills stack */
    .m-pills { display: flex; flex-wrap: wrap; gap: 10px; }
    .m-pill  {
      padding: 8px 16px; border-radius: 999px; border: 1px solid #cfc9bb;
      font-size: 13px; font-family: 'JetBrains Mono',monospace; color: #3a382f;
      background: transparent; transition: background .2s, border-color .2s, color .2s; cursor: default;
    }
    .m-pill:hover { background: #16150f; color: #f7f6f2; border-color: #16150f; }

    /* Expériences */
    .m-exp-row {
      padding: 24px 0; border-top: 1px solid #e4dfd2;
      cursor: pointer; border-radius: 6px;
      transition: background .2s, padding .2s;
    }
    .m-exp-row:last-child { border-bottom: 1px solid #e4dfd2; }
    .m-exp-row:hover { background: #f0ece3; padding-left: 12px; padding-right: 12px; }
    .m-exp-head   { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
    .m-exp-role   { font-size: 18px; font-weight: 600; }
    .m-exp-co     { font-size: 15px; color: #7a7568; margin-top: 2px; }
    .m-exp-period { font-family: 'JetBrains Mono',monospace; font-size: 12px; color: #8a8578; white-space: nowrap; }
    .m-exp-hint   { font-family: 'JetBrains Mono',monospace; font-size: 11px; color: #3fae6b; margin-top: 6px; }

    /* Contact */
    .m-contact-title { font-size: clamp(36px,6vw,80px); font-weight: 500; letter-spacing: -.03em; margin-bottom: 40px; }
    .m-cta {
      display: inline-block; padding: 16px 36px; border-radius: 999px;
      background: #16150f; color: #f7f6f2;
      font-family: 'Space Grotesk',sans-serif; font-size: 16px; font-weight: 500;
      text-decoration: none; transition: transform .2s; border: none; cursor: pointer;
    }
    .m-cta:hover { transform: translateY(-3px); }

    /* ===================================================
       VUE TERMINAL
    =================================================== */
    .t-root { background: #07090d; min-height: 100vh; padding: clamp(60px,8vw,100px) 6vw; font-family: 'JetBrains Mono',monospace; }
    .t-win  { max-width: 900px; margin: 0 auto; background: #0d1117; border: 1px solid #1f2630; border-radius: 12px; box-shadow: 0 32px 80px rgba(0,0,0,.5); overflow: hidden; }
    .t-bar  { background: #161b22; padding: 14px 18px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #1f2630; }
    .t-dots { display: flex; gap: 7px; }
    .t-dr   { width: 12px; height: 12px; border-radius: 50%; background: #ff5f56; }
    .t-dy   { width: 12px; height: 12px; border-radius: 50%; background: #ffbd2e; }
    .t-dg   { width: 12px; height: 12px; border-radius: 50%; background: #27c93f; }
    .t-path-bar { font-size: 13px; color: #6e7681; margin-left: 4px; }
    .t-body { padding: clamp(24px,4vw,48px); font-size: 14px; line-height: 1.9; color: #c9d1d9; overflow-x: auto; }

    .t-prompt { color: #3fb950; }
    .t-path   { color: #58a6ff; }
    .t-kw     { color: #bc8cff; }
    .t-op     { color: #ff7b72; }
    .t-str    { color: #a5d6ff; }
    .t-cmt    { color: #8b949e; }
    .t-date   { color: #ffa657; }
    .t-title  { color: #e6edf3; }
    .t-dim    { color: #6e7681; }
    .t-link   { color: #58a6ff; text-decoration: underline; text-decoration-style: dotted; }
    .t-link:hover { color: #79c0ff; }
    .t-name   { font-family: 'Space Grotesk',sans-serif; font-size: 22px; font-weight: 700; color: #e6edf3; }
    .t-cursor { display: inline-block; width: 10px; height: 16px; background: #3fb950; vertical-align: text-bottom; animation: blink 1.1s step-end infinite; margin-left: 2px; }
    .t-block  { margin: 5px 0; }
    .t-prow   { padding: 3px 8px; border-radius: 4px; transition: background .15s; cursor: default; }
    .t-prow:hover { background: #161b22; }

    /* ===================================================
       MODAL EXPÉRIENCE
    =================================================== */
    .pf-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.85); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeUp .3s ease; }
    .pf-modal   { background: #f7f6f2; border-radius: 16px; max-width: 760px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 40px; position: relative; font-family: 'Space Grotesk',sans-serif; color: #16150f; }
    .pf-modal-close { position: absolute; top: 20px; right: 20px; background: none; border: 1px solid #ddd8cb; border-radius: 999px; padding: 6px 14px; font-family: 'JetBrains Mono',monospace; font-size: 12px; cursor: pointer; color: #7a7568; transition: background .2s, color .2s; }
    .pf-modal-close:hover { background: #16150f; color: #f7f6f2; border-color: #16150f; }
    .pf-photos { display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 12px; margin-top: 20px; }
    .pf-photo  { aspect-ratio: 4/3; object-fit: cover; border-radius: 8px; width: 100%; }
    .pf-photo-slot { aspect-ratio: 4/3; background: #e4dfd2; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; border: 2px dashed #cfc9bb; font-family: 'JetBrains Mono',monospace; font-size: 11px; color: #8a8578; text-align: center; padding: 12px; }
    .pf-comp-badge { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; font-family: 'JetBrains Mono',monospace; font-size: 11px; background: #f0f7f0; color: #2d7a4f; border: 1px solid #b8ddc8; margin: 3px; }
    .pf-stack-tag { display: inline-block; padding: 5px 12px; border-radius: 6px; font-family: 'JetBrains Mono',monospace; font-size: 12px; background: #f0ece3; color: #3a382f; border: 1px solid #ddd8cb; margin: 3px; }

    /* Compétences BUT — cartes compactes cliquables */
    .m-comp-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
    .m-comp-card  {
      display: grid; grid-template-columns: 48px 1fr auto;
      gap: 16px; align-items: center;
      padding: 20px 0; border-top: 1px solid #e4dfd2;
      cursor: pointer; border-radius: 6px;
      transition: background .25s, color .25s, padding .25s;
      grid-column: 1 / -1;
    }
    .m-comp-card:last-child { border-bottom: 1px solid #e4dfd2; }
    .m-comp-card:hover { background: #16150f; color: #f7f6f2; padding-left: 16px; padding-right: 16px; }
    .m-comp-num  { font-family: 'JetBrains Mono',monospace; font-size: 12px; color: #8a8578; }
    .m-comp-card:hover .m-comp-num { color: #5a5850; }
    .m-comp-title   { font-size: 17px; font-weight: 600; margin-bottom: 3px; }
    .m-comp-tagline { font-size: 13px; color: #7a7568; }
    .m-comp-card:hover .m-comp-tagline { color: #9a9488; }
    .m-comp-hint { font-family: 'JetBrains Mono',monospace; font-size: 11px; color: #8a8578; white-space: nowrap; }
    .m-comp-card:hover .m-comp-hint { color: #5a5850; }

    /* Modal compétence — réutilise .pf-modal */
    .m-comp-sub  { font-family: 'JetBrains Mono',monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 10px; }
    .m-comp-ok   { color: #2d7a4f; }
    .m-comp-warn { color: #92650a; }
    .m-comp-point { display: flex; gap: 10px; font-size: 14px; margin-bottom: 8px; color: #3a382f; line-height: 1.6; }
    .m-comp-dot-ok   { color: #3fae6b; flex-shrink: 0; font-weight: 700; }
    .m-comp-dot-warn { color: #d97706; flex-shrink: 0; font-weight: 700; }
    .m-comp-projs { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e4dfd2; }
    .m-comp-proj  { font-family: 'JetBrains Mono',monospace; font-size: 11px; padding: 6px 12px; border-radius: 4px; background: #f7f6f2; color: #3a382f; border: 1px solid #ddd8cb; cursor: pointer; transition: background .2s, border-color .2s, color .2s; }
    .m-comp-proj:hover { background: #16150f; color: #f7f6f2; border-color: #16150f; }

    /* ===================================================
       CARROUSEL PHOTOS
    =================================================== */
    .ph-strip    { margin: clamp(48px,7vw,80px) -6vw 0; background: #16150f; padding: clamp(40px,5vw,64px) 6vw; }
    .ph-label    { font-family:'JetBrains Mono',monospace; font-size:11px; text-transform:uppercase; letter-spacing:.12em; color:#5a5850; margin-bottom:32px; }
    .ph-inner    { position:relative; }
    .ph-window   { overflow:hidden; border-radius:12px; }
    .ph-track    { display:flex; transition:transform .55s cubic-bezier(.4,0,.2,1); }
    .ph-slide    { flex-shrink:0; width:100%; }
    .ph-img      { width:100%; aspect-ratio:16/9; object-fit:cover; object-position:center center; display:block; }
    .ph-caption  { padding:20px 0 0; display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap; }
    .ph-text     { font-size:14px; color:#9a9488; font-family:'Space Grotesk',sans-serif; line-height:1.5; }
    .ph-tag      { font-family:'JetBrains Mono',monospace; font-size:11px; color:#5a5850; white-space:nowrap; margin-top:2px; }
    .ph-controls { display:flex; align-items:center; justify-content:space-between; margin-top:20px; }
    .ph-dots     { display:flex; gap:8px; }
    .ph-dot      { width:6px; height:6px; border-radius:50%; background:#3a382f; border:none; cursor:pointer; transition:background .2s, transform .2s; padding:0; }
    .ph-dot.active { background:#f7f6f2; transform:scale(1.4); }
    .ph-arrows   { display:flex; gap:8px; }
    .ph-arrow    { width:40px; height:40px; border-radius:50%; border:1px solid #3a382f; background:transparent; color:#f7f6f2; cursor:pointer; font-size:16px; display:flex; align-items:center; justify-content:center; transition:border-color .2s, background .2s; }
    .ph-arrow:hover { border-color:#f7f6f2; background:#f7f6f2; color:#16150f; }
    .ph-counter  { font-family:'JetBrains Mono',monospace; font-size:12px; color:#5a5850; }

    /* ===================================================
       NAVIGATION LATÉRALE
    =================================================== */
    .side-nav { position:fixed; left:32px; top:50%; transform:translateY(-50%); z-index:9999; display:flex; flex-direction:column; gap:6px; }
    .side-nav-item { display:flex; align-items:center; gap:12px; background:none; border:none; cursor:pointer; padding:6px 0; text-align:left; }
    .side-nav-dot { width:8px; height:8px; border-radius:50%; background:#c8c1b0; border:2px solid #c8c1b0; transition:background .25s, transform .25s, border-color .25s; flex-shrink:0; }
    .side-nav-item.active .side-nav-dot { background:#16150f; border-color:#16150f; transform:scale(1.4); }
    .side-nav-item:hover .side-nav-dot { background:#7a7568; border-color:#7a7568; }
    .side-nav-label { font-family:'JetBrains Mono',monospace; font-size:11px; text-transform:uppercase; letter-spacing:.1em; color:#8a8578; white-space:nowrap; transition:color .2s, opacity .2s; opacity:0; }
    .side-nav-item:hover .side-nav-label { opacity:1; color:#3a382f; }
    .side-nav-item.active .side-nav-label { opacity:1; color:#16150f; font-weight:500; }
    @media(max-width:1024px){ .side-nav{ display:none; } }

    /* Terminal competences */
    .t-comp-block { margin: 4px 0 4px 16px; }
    .t-ok   { color: #3fb950; }
    .t-warn { color: #ffa657; }

    @media (max-width: 720px) {
      .m-comp-grid { grid-template-columns: 1fr; }
    }

    /* ===================================================
       RESPONSIVE
    =================================================== */
    @media (max-width: 720px) {
      .m-hero-inner { grid-template-columns: 1fr; }
      .m-photo-wrap { display: none; }
      .m-two { grid-template-columns: 1fr; gap: 40px; }
      .m-proj-row { grid-template-columns: 32px 1fr; }
      .m-proj-meta { display: none; }
      .pf-toggle { top: 12px; right: 12px; padding: 9px 14px; font-size: 12px; }
      .pf-cv-btn { top: 12px; left: 12px; padding: 9px 14px; font-size: 12px; }
      .ph-strip { margin-left: -5vw; margin-right: -5vw; padding-left: 5vw; padding-right: 5vw; }
      .ph-caption { flex-direction: column; gap: 8px; }
      .ph-tag { white-space: normal; }
    }
  `}</style>
);

// ============================================================
// COMPOSANT PRINCIPAL
// ============================================================
const Portfolio = () => {
  const [mode, setMode] = useState('mono');
  const [selectedExp, setSelectedExp] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedComp, setSelectedComp] = useState(null);

  const toggleMode = () => {
    window.scrollTo(0, 0);
    setMode(prev => (prev === 'mono' ? 'terminal' : 'mono'));
  };

  const isMono = mode === 'mono';

  return (
    <>
      <GlobalStyles />

      <button
        className={`pf-toggle ${isMono ? 'is-mono' : 'is-term'}`}
        onClick={toggleMode}
        aria-label={isMono ? 'Passer en vue terminal (vision développeur)' : 'Revenir à la vue classique'}
      >
        {isMono ? '⌗  Vision développeur' : '← Vue classique'}
      </button>

      <a
        href={`${PUB}/cv.pdf`}
        download="CV_Cheick-Oumar_Sow.pdf"
        className={`pf-cv-btn${isMono ? '' : ' pf-cv-btn--term'}`}
        aria-label="Télécharger le CV"
      >
        ↓ CV
      </a>

      {/* SideNav en dehors de pf-root pour éviter le stacking context de l'animation */}
      {isMono && <SideNav />}

      {/* key={mode} force le remontage → rejoue l'animation fadeUp */}
      <div key={mode} className="pf-root">
        {isMono
          ? <MonoView data={DATA} onExpClick={setSelectedExp} onProjectClick={setSelectedProject} onCompClick={setSelectedComp} />
          : <TerminalView data={DATA} onProjectClick={setSelectedProject} onCompClick={setSelectedComp} onExpClick={setSelectedExp} />
        }
      </div>

      {selectedExp     && <ExperienceModal  exp={selectedExp}         onClose={() => setSelectedExp(null)} />}
      {selectedProject && <ProjectModal     project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedComp    && <CompetenceModal  comp={selectedComp}       onClose={() => setSelectedComp(null)} onProjectClick={setSelectedProject} onExpClick={setSelectedExp} />}
    </>
  );
};

// ============================================================
// VUE MONO — éditoriale, claire
// ============================================================
const MonoView = ({ data, onExpClick, onProjectClick, onCompClick }) => {
  const [selectedStack, setSelectedStack] = useState(null);

  const stackProjects = selectedStack
    ? data.projects.filter(p => p.stack.some(t => t.toLowerCase() === selectedStack.toLowerCase()))
    : [];

  return (
  <>
  <div className="m-root">
    <div className="m-wrap">

      {/* HERO */}
      <section id="hero" className="m-hero">
        <div className="m-hero-inner">
          <div>
            {data.available && (
              <div className="m-available">
                <span className="m-dot" />
                Disponible pour de nouveaux projets
              </div>
            )}
            <div className="m-alternance">
              🎓 {data.alternance}
            </div>
            <h1 className="m-h1">{data.name}</h1>
            <p className="m-sub">{data.tagline}</p>
            <div className="m-links">
              <span>{data.location}</span>
              <a href={`mailto:${data.email}`} className="m-link">{data.email}</a>
              <a href={data.github} target="_blank" rel="noopener noreferrer" className="m-link">GitHub ↗</a>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="m-link">LinkedIn ↗</a>
            </div>
          </div>
          <div className="m-photo-wrap">
            <img src={profilePic} alt="Cheick-Oumar Sow" className="m-photo" />
          </div>
        </div>
      </section>

      <hr className="m-hr" />

      {/* INTRODUCTION */}
      <section id="intro" className="m-intro">
        <div className="m-intro-grid">
          <div className="m-intro-label">— Parcours &amp; ambitions</div>
          <div className="m-intro-body">
            {data.intro.map((p, i) => (
              <p key={i} className="m-intro-p">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <hr className="m-hr" />

      {/* PROJETS */}
      <section id="projets" className="m-sec">
        <p className="m-label">— Projets sélectionnés</p>
        <ul className="m-proj-list">
          {data.projects.map(p => (
            <li
              key={p.id}
              className="m-proj-row"
              onClick={() => onProjectClick(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onProjectClick(p)}
            >
              <span className="m-proj-num">{p.id}</span>
              <div>
                <div className="m-proj-name">{p.title}</div>
                <div className="m-proj-desc">{p.description}</div>
              </div>
              <div className="m-proj-meta">
                <div className="m-proj-stack">{p.stack.join(' · ')}</div>
                <div className="m-proj-year">{p.year}</div>
                <span className="m-proj-arrow">↳ détails</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <hr className="m-hr" />

      {/* COMPÉTENCES BUT */}
      <section id="competences" className="m-sec">
        <p className="m-label">— 6 Compétences BUT Informatique</p>
        <div className="m-comp-grid">
          {data.competences.map(c => (
            <div
              key={c.id}
              className="m-comp-card"
              onClick={() => onCompClick(c)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onCompClick(c)}
            >
              <span className="m-comp-num">{c.id}</span>
              <div>
                <div className="m-comp-title">{c.title}</div>
                <div className="m-comp-tagline">{c.tagline}</div>
              </div>
              <div className="m-comp-hint">↳ développer</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="m-hr" />

      {/* STACK + PARCOURS */}
      <section id="stack" className="m-sec">
        <div className="m-two">
          <div>
            <p className="m-col-label">— Stack technique</p>
            <div className="m-pills">
              {data.stack.map(s => (
                <span
                  key={s}
                  className="m-pill m-pill-btn"
                  onClick={() => setSelectedStack(s)}
                  role="button"
                  title={`Voir les projets utilisant ${s}`}
                >{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="m-col-label">— Parcours professionnel</p>
            {data.experiences.map(exp => (
              <div
                key={exp.id}
                className="m-exp-row"
                onClick={() => onExpClick(exp)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onExpClick(exp)}
              >
                <div className="m-exp-head">
                  <div>
                    <div className="m-exp-role">{exp.role}</div>
                    <div className="m-exp-co">{exp.company}</div>
                  </div>
                  <span className="m-exp-period">{exp.period}</span>
                </div>
                <div className="m-exp-hint">↳ Cliquer pour voir les détails</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="photos"><PhotoStrip photos={data.photos} /></div>

      <hr className="m-hr" />

      {/* CONCLUSION */}
      <section id="conclusion" className="m-ccl">
        <p className="m-label">— Conclusion</p>

        <div className="m-ccl-grid">
          <div className="m-ccl-box">
            <div className="m-ccl-head ok">✦ Points forts</div>
            {data.conclusion.forts.map((t, i) => (
              <div key={i} className="m-ccl-item">
                <span className="m-ccl-dot" style={{ color: '#3fae6b' }}>+</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="m-ccl-box warn">
            <div className="m-ccl-head warn">! Points de vigilance</div>
            {data.conclusion.vigilance.map((t, i) => (
              <div key={i} className="m-ccl-item">
                <span className="m-ccl-dot" style={{ color: '#e07b39' }}>›</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="m-ccl-full">
          <div className="m-ccl-label">◎ Bonnes pratiques retenues</div>
          <div className="m-ccl-pills">
            {data.conclusion.pratiques.map((p, i) => (
              <span key={i} className="m-ccl-pill">{p}</span>
            ))}
          </div>
        </div>

        <div className="m-ccl-full">
          <div className="m-ccl-label">→ Acquis pour la suite</div>
          <p className="m-ccl-suite">{data.conclusion.suite}</p>
        </div>
      </section>

      <hr className="m-hr" />

      {/* CONTACT */}
      <section id="contact" className="m-sec">
        <p className="m-label">— Contact</p>
        <p className="m-contact-title">On collabore ?</p>
        <a href={`mailto:${data.email}`} className="m-cta">
          Envoyer un message →
        </a>
      </section>

    </div>
  </div>
    {selectedStack && (
      <div className="sk-overlay" onClick={() => setSelectedStack(null)}>
        <div className="sk-modal" onClick={e => e.stopPropagation()}>
          <button className="sk-close" onClick={() => setSelectedStack(null)}>✕</button>
          <p className="sk-label">— Stack technique</p>
          <h3 className="sk-tech">{selectedStack}</h3>
          {stackProjects.length > 0 ? (
            <>
              <p className="sk-sub">Projets mobilisant cette compétence</p>
              <ul className="sk-list">
                {stackProjects.map(p => (
                  <li key={p.title} className="sk-item" onClick={() => { setSelectedStack(null); onProjectClick(p); }}>
                    <span className="sk-arrow">→</span>
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="sk-empty">Aucun projet répertorié pour cette technologie.</p>
          )}
        </div>
      </div>
    )}
  </>
  );
};

// ============================================================
// VUE TERMINAL — fenêtre éditeur de code
// ============================================================
const TerminalView = ({ data, onProjectClick, onCompClick, onExpClick }) => (
  <div className="t-root">
    <div className="t-win">

      <div className="t-bar">
        <div className="t-dots">
          <span className="t-dr" />
          <span className="t-dy" />
          <span className="t-dg" />
        </div>
        <span className="t-path-bar">cheick@portfolio: ~/dev</span>
      </div>

      <div className="t-body">

        {/* whoami */}
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-path">whoami</span>
        </div>
        <div className="t-block">
          <span className="t-name">{data.name}</span>
        </div>
        <div className="t-block">
          <span className="t-cmt">{'// '}{data.subtitle} · BUT 3 — IUT de Villetaneuse</span>
        </div>
        <div className="t-block">
          <span className="t-cmt">{'// '}</span>
          <span className="t-date">⚡ </span>
          <span className="t-str">{data.alternance}</span>
        </div>

        <br />

        {/* cat bio */}
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-path">cat </span>
          <span className="t-str">bio.txt</span>
        </div>
        <div className="t-block" style={{ maxWidth: '72ch' }}>
          <span className="t-dim">{data.bio}</span>
        </div>

        <br />

        {/* ls -la projects */}
        <div className="t-block">
          <span className="t-path t-prompt">~/projects</span>
          <span className="t-prompt">$ </span>
          <span className="t-path">ls </span>
          <span className="t-kw">-la</span>
        </div>
        <div className="t-block">
          <span className="t-cmt">total {data.projects.length}</span>
        </div>
        {data.projects.map(p => (
          <div
            key={p.id}
            className="t-prow t-block"
            onClick={() => onProjectClick(p)}
            style={{ cursor: 'pointer' }}
            title="Cliquer pour voir les détails"
          >
            <span className="t-dim">drwxr-xr-x  </span>
            <span className="t-path">
              {p.title.toLowerCase().replace(/'/g, '').replace(/ /g, '-')}/
            </span>
            <span className="t-dim">  {p.description.slice(0, 48)}…  </span>
            <span className="t-str">{p.stack[0]}</span>
            <span className="t-dim"> · </span>
            <span className="t-date">{p.year}</span>
            <span className="t-dim"> ↵</span>
          </div>
        ))}

        <br />

        {/* cat stack.json */}
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-path">cat </span>
          <span className="t-str">stack.json</span>
        </div>
        <div className="t-block">
          <span className="t-kw">const </span>
          <span className="t-title">stack </span>
          <span className="t-op">= </span>
          <span>[ </span>
          {data.stack.map((s, i) => (
            <span key={s}>
              <span className="t-str">"{s}"</span>
              {i < data.stack.length - 1 && <span className="t-dim">, </span>}
            </span>
          ))}
          <span> ]</span>
        </div>

        <br />

        {/* cat competences.md */}
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-path">cat </span>
          <span className="t-str">competences.md</span>
        </div>
        {data.competences.map(c => (
          <div
            key={c.id}
            className="t-prow t-block"
            onClick={() => onCompClick(c)}
            style={{ cursor: 'pointer' }}
            title="Cliquer pour développer"
          >
            <span className="t-kw">[{c.id}] </span>
            <span className="t-title">{c.title} </span>
            <span className="t-dim">— {c.tagline} </span>
            <span className="t-dim">↵</span>
          </div>
        ))}

        <br />

        {/* git log */}
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-path">git </span>
          <span>log </span>
          <span className="t-kw">--oneline </span>
          <span className="t-dim">--reverse</span>
        </div>
        {data.experiences.map(exp => (
          <div
            key={exp.id}
            className="t-prow t-block"
            onClick={() => onExpClick(exp)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onExpClick(exp)}
            style={{ cursor: 'pointer' }}
            title="Voir les détails"
          >
            <span className="t-date">{exp.period}  </span>
            <span className="t-title">{exp.role}  </span>
            <span className="t-dim">@ </span>
            <span className="t-path">{exp.company}</span>
            {exp.location && <span className="t-dim"> ({exp.location})</span>}
          </div>
        ))}

        <br />

        {/* ./contact.sh */}
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-str">./contact.sh</span>
        </div>
        <div className="t-block">
          <span className="t-dim">email     →  </span>
          <a href={`mailto:${data.email}`} className="t-link">{data.email}</a>
        </div>
        <div className="t-block">
          <span className="t-dim">linkedin  →  </span>
          <a href={data.linkedin} className="t-link" target="_blank" rel="noopener noreferrer">
            cheick-oumar-sow
          </a>
        </div>
        <div className="t-block">
          <span className="t-dim">github    →  </span>
          <a href={data.github} className="t-link" target="_blank" rel="noopener noreferrer">
            @Cheick6
          </a>
        </div>

        <br />
        <div className="t-block">
          <span className="t-prompt">$ </span>
          <span className="t-cursor" />
        </div>

      </div>
    </div>
  </div>
);

// ============================================================
// NAVIGATION LATÉRALE
// ============================================================
const NAV_SECTIONS = [
  { id: 'hero',        label: 'Accueil' },
  { id: 'intro',       label: 'Parcours & ambitions' },
  { id: 'projets',     label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'stack',       label: 'Stack & Parcours' },
  { id: 'photos',      label: 'En images' },
  { id: 'conclusion',  label: 'Conclusion' },
  { id: 'contact',     label: 'Contact' },
];

const SideNav = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers = [];
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-35% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav className="side-nav" aria-label="Navigation par section">
      {NAV_SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`side-nav-item${active === id ? ' active' : ''}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          aria-label={label}
        >
          <span className="side-nav-dot" />
          <span className="side-nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
};

// ============================================================
// CARROUSEL PHOTOS
// ============================================================
const PhotoStrip = ({ photos }) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % photos.length), 4500);
    return () => clearInterval(t);
  }, [paused, photos.length]);

  const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length);
  const next = () => setIdx(i => (i + 1) % photos.length);

  return (
    <div className="ph-strip" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="ph-label">— En images</p>
      <div className="ph-inner">
        <div className="ph-window">
          <div className="ph-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {photos.map((p, i) => (
              <div key={i} className="ph-slide">
                <img src={p.src} alt={p.caption} className="ph-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="ph-caption">
          <div>
            <div className="ph-text">{photos[idx].caption}</div>
            <div className="ph-tag">{photos[idx].tag}</div>
          </div>
          <div className="ph-counter">{idx + 1} / {photos.length}</div>
        </div>

        <div className="ph-controls">
          <div className="ph-dots">
            {photos.map((_, i) => (
              <button key={i} className={`ph-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Photo ${i + 1}`} />
            ))}
          </div>
          <div className="ph-arrows">
            <button className="ph-arrow" onClick={prev} aria-label="Photo précédente">←</button>
            <button className="ph-arrow" onClick={next} aria-label="Photo suivante">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MODAL EXPÉRIENCE — détails
// ============================================================
const ExperienceModal = ({ exp, onClose }) => {
  useEffect(() => {
    const handler = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="pf-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={exp.company}>
      <div className="pf-modal" onClick={e => e.stopPropagation()}>
        <button className="pf-modal-close" onClick={onClose}>Fermer ✕</button>

        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>
          {exp.period}
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 4 }}>{exp.role}</h2>
        <p style={{ fontSize: 15, color: '#7a7568', marginBottom: 6 }}>
          {exp.company}{exp.location ? ` · ${exp.location}` : ''}
        </p>
        <p style={{ fontSize: 14, color: '#3a382f', fontStyle: 'italic', marginBottom: 24 }}>{exp.description}</p>

        <ul style={{ listStyle: 'none', marginBottom: exp.bilan ? 32 : 0 }}>
          {exp.details.map((d, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: '#3a382f' }}>
              <span style={{ color: '#3fae6b', flexShrink: 0, fontWeight: 700 }}>→</span>
              {d}
            </li>
          ))}
        </ul>

        {exp.competencesBut && (
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>
              — Compétences BUT mobilisées
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e4dfd2' }}>
                  <th style={{ textAlign: 'left', paddingBottom: 8, color: '#8a8578', fontWeight: 600, width: '55%' }}>Mission</th>
                  <th style={{ textAlign: 'left', paddingBottom: 8, color: '#8a8578', fontWeight: 600 }}>Compétences BUT</th>
                </tr>
              </thead>
              <tbody>
                {exp.competencesBut.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f2ede3' }}>
                    <td style={{ padding: '8px 0', color: '#3a382f', verticalAlign: 'top' }}>{row.mission}</td>
                    <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {row.tags.map(tag => (
                          <span key={tag} style={{ background: '#f0faf4', color: '#2a7a4e', border: '1px solid #b8e8cd', borderRadius: 4, padding: '2px 8px', fontSize: 12, fontWeight: 500 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {exp.bilan && (() => {
          const b = exp.bilan;
          const Section = ({ label, color, icon, items }) => (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>
                {icon} {label}
              </div>
              {items.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 14, color: '#3a382f' }}>
                  <span style={{ color, flexShrink: 0 }}>›</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          );
          return (
            <div style={{ borderTop: '1px solid #e4dfd2', paddingTop: 28 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 24 }}>
                — Bilan & auto-évaluation
              </div>
              <Section label="Bonnes surprises" color="#3fae6b" icon="✦" items={b.surprises} />
              <Section label="Problèmes rencontrés" color="#e07b39" icon="!" items={b.problemes} />
              <Section label="Ce que je ferais différemment" color="#7a7568" icon="↻" items={b.different} />
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#5a5850', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>
                  ◎ Si c'était à refaire
                </div>
                <p style={{ fontSize: 14, color: '#3a382f', lineHeight: 1.8, borderLeft: '3px solid #3fae6b', paddingLeft: 16, margin: 0 }}>
                  {b.siCetaitARefaire}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

// ============================================================
// MODAL COMPÉTENCE BUT
// ============================================================
const CompetenceModal = ({ comp: c, onClose, onProjectClick, onExpClick }) => {
  useEffect(() => {
    const h = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  const handleTag = (name) => {
    const project = DATA.projects.find(p => p.title === name);
    if (project) { onClose(); onProjectClick(project); return; }
    const exp = DATA.experiences.find(e =>
      name.toLowerCase().includes(e.company.toLowerCase()) ||
      e.company.toLowerCase().includes(name.replace('Stage ', '').toLowerCase())
    );
    if (exp) { onClose(); onExpClick(exp); }
  };

  return (
    <div className="pf-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pf-modal" onClick={e => e.stopPropagation()}>
        <button className="pf-modal-close" onClick={onClose}>Fermer ✕</button>

        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>
          Compétence {c.id} / 06
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4, letterSpacing: '-.02em' }}>{c.title}</h2>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#8a8578', marginBottom: 24 }}>{c.tagline}</p>

        <p style={{ fontSize: 15, color: '#3a382f', lineHeight: 1.8, marginBottom: 28, borderLeft: '3px solid #3fae6b', paddingLeft: 16 }}>
          {c.synthesis}
        </p>

        <div className="m-comp-sub m-comp-ok" style={{ marginBottom: 12 }}>Points forts</div>
        {c.strengths.map((s, i) => (
          <div key={i} className="m-comp-point">
            <span className="m-comp-dot-ok">+</span>
            <span>{s}</span>
          </div>
        ))}

        <div className="m-comp-sub m-comp-warn" style={{ marginTop: 24, marginBottom: 12 }}>Points de vigilance</div>
        {c.vigilance.map((v, i) => (
          <div key={i} className="m-comp-point">
            <span className="m-comp-dot-warn">!</span>
            <span>{v}</span>
          </div>
        ))}

        {/* SAÉ */}
        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid #e4dfd2' }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>
            SAÉ mobilisées
          </div>
          {c.saes.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 13, color: '#3a382f' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", color: '#3fae6b', flexShrink: 0 }}>›</span>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div style={{ marginTop: 20 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>
            Ressources (modules)
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {c.modules.map(m => (
              <span key={m} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, padding: '4px 10px', borderRadius: 4, background: '#f0ece4', color: '#5a5850', border: '1px solid #ddd8cb' }}>
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Projets cliquables */}
        <div className="m-comp-projs" style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid #e4dfd2' }}>
          <div style={{ width: '100%', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>
            Projets & expériences associés
          </div>
          {c.projects.map(name => (
            <button key={name} className="m-comp-proj" onClick={() => handleTag(name)}>
              {name} ↗
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MODAL PROJET — détails + compétences BUT
// ============================================================
const ProjectModal = ({ project: p, onClose }) => {
  useEffect(() => {
    const handler = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const realDetails = p.details ? p.details.filter(d => typeof d === 'string') : [];

  return (
    <div className="pf-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.title}>
      <div className="pf-modal" onClick={e => e.stopPropagation()}>
        <button className="pf-modal-close" onClick={onClose}>Fermer ✕</button>

        {/* Header */}
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>
          {p.type} · {p.year}
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 600, marginBottom: 12 }}>{p.title}</h2>

        {/* Stack */}
        <div style={{ marginBottom: 20 }}>
          {p.stack.map(s => (
            <span key={s} className="pf-stack-tag">{s}</span>
          ))}
        </div>

        {/* Description longue */}
        <p style={{ fontSize: 15, color: '#3a382f', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
          {p.longDescription || p.description}
        </p>

        {/* Détails */}
        {realDetails.length > 0 && (
          <>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>
              Ce que j'ai fait
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28 }}>
              {realDetails.map((d, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: '#3a382f' }}>
                  <span style={{ color: '#3fae6b', flexShrink: 0, fontWeight: 700 }}>→</span>
                  {d}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Compétences BUT */}
        {p.competences && p.competences.length > 0 && (
          <>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#8a8578', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>
              Compétences BUT mobilisées
            </div>
            <div style={{ marginBottom: 24 }}>
              {p.competences.map(c => (
                <span key={c} className="pf-comp-badge">✓ {c}</span>
              ))}
            </div>
          </>
        )}

        {/* Lien GitHub / Site */}
        {p.link && p.link !== '#' && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 999, background: '#16150f', color: '#f7f6f2', fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'transform .2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            {p.title.includes("24H") ? "Visiter le site ↗" : "Voir le code sur GitHub ↗"}
          </a>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

