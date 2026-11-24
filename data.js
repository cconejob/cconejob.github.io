// Datos compartidos (no dependen del idioma)
window.DATA = {
  contact: {
    email: "carlos.conejo@upc.edu",
    orcid: "0009-0007-7233-5650",
    links: [
      { k: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/carlos-conejo-barcelo/" },
      { k: "orcid", label: "ORCID", url: "https://orcid.org/0009-0007-7233-5650" },
      { k: "futur", label: "FUTUR · UPC", url: "https://futur.upc.edu/CarlosConejoBarcelo" },
      { k: "scholar", label: "Google Scholar", url: "https://scholar.google.com/citations?user=OlmWGTEAAAAJ" },
      { k: "github", label: "GitHub", url: "https://github.com/cconejob" }
    ]
  },
  demoVideo: "https://youtu.be/ZPCt7xkgvX0",
  trailer: "https://www.youtube.com/watch?v=mdTmswqy3Ck",
  tdaMedia: ["cvc-egolf-fornet", "cvc-egolf-pirineo", "cvc-egolf-circuito"],
  scholar: "https://scholar.google.com/citations?user=OlmWGTEAAAAJ",
  media: {
    "renault-supervisor": { v: 1 }, "renault-pedestrian": { v: 1 }, "renault-reach": { v: 1 },
    "epfl-loomo-rfo": { v: 1 }, "epfl-skeleton-1": { v: 1 }, "epfl-skeleton-2": { v: 1 },
    "epfl-loomo-obstacles": { v: 1, tall: 1 }, "epfl-loomo-free": { v: 1, tall: 1 }, "epfl-loomos": {},
    "pulsar-stand": {}, "cvc-egolf-pirineo": {}, "cvc-egolf-night": {}, "cvc-egolf-fornet": {}, "cvc-egolf-circuito": {}, "fs-driverless-2019": {}, "fs-driverless-run": { v: 1 }, "grado-proyecto-robot": { v: 1 }, "grado-tfg": { v: 1 }, "master-fs-vsv": { v: 1 }, "fs-montserrat": {}, "fs-sunset": {}, "fs-team-track": {}, "fs-team-studio": {}, "fs-team-montmelo": {}, "grado-loclock": {},
    "iv2026-poster": {}, "ifac2026-title": {}, "ifac2026-talk": {}, "ifac2026-talk-2": {}, "ifac2026-backdrop": {}, "pulsar-booth-carlos": {}, "pulsar-booth-products": {}, "pulsar-booth-visit-1": {}, "pulsar-booth-visit-2": {}
  },
  homeGallery: ["ifac2026-backdrop", "pulsar-booth-carlos", "iv2026-poster", "renault-supervisor", "cvc-egolf-pirineo", "epfl-loomo-rfo"],
  researchAction: ["renault-supervisor", "renault-reach", "renault-pedestrian"],
  confPhotos: ["iv2026-poster", "ifac2026-backdrop", "ifac2026-title", "ifac2026-talk-2", "ifac2026-talk", "pulsar-booth-carlos", "pulsar-stand"],
  study: {
    p1: { media: ["grado-proyecto-robot"] },
    p2: { media: ["grado-loclock"], links: [["blog", "https://programminginarduino.wordpress.com/"], ["memoria", "https://programminginarduino.wordpress.com/wp-content/uploads/2017/03/loclock.pdf"]] },
    tfg: { media: ["grado-tfg"], links: [["read", "https://upcommons.upc.edu/server/api/core/bitstreams/28c7856a-73d9-45d8-beb7-d3ae312cfbb6/content"]] },
    fs: { media: ["master-fs-vsv", "fs-team-montmelo", "fs-montserrat", "fs-driverless-run", "fs-sunset", "fs-team-studio", "fs-team-track", "fs-driverless-2019"], links: [["video", "https://www.youtube.com/watch?v=NzhGDAYJ43Y"]] },
    tfm: { media: ["epfl-loomo-obstacles", "epfl-loomo-free", "epfl-loomo-rfo", "epfl-skeleton-1", "epfl-skeleton-2"], links: [["read", "https://upcommons.upc.edu/server/api/core/bitstreams/1b3a787b-43fd-4866-8dd0-b2df0d4eeb8e/content"]] }
  },
  exp: {
    lector: { areas: ["docencia", "investigacion", "profesional"], media: [] },
    arquimea: { areas: ["profesional", "investigacion"], media: ["pulsar-booth-products", "pulsar-booth-carlos", "pulsar-booth-visit-2", "pulsar-booth-visit-1", "pulsar-stand"] },
    renault: { areas: ["profesional", "investigacion"], media: ["renault-supervisor", "renault-pedestrian", "renault-reach"] },
    eebe: { areas: ["docencia", "profesional"], media: [] },
    cvc: { areas: ["profesional", "investigacion"], media: ["cvc-egolf-fornet", "cvc-egolf-pirineo", "cvc-egolf-circuito", "cvc-egolf-night"], links: [["doc", "https://youtu.be/ZPCt7xkgvX0"], ["trailer", "https://www.youtube.com/watch?v=mdTmswqy3Ck"]] },
    epfl: { areas: ["profesional", "investigacion"], media: ["epfl-loomo-rfo", "epfl-skeleton-1", "epfl-skeleton-2", "epfl-loomo-obstacles", "epfl-loomo-free", "epfl-loomos"] },
    bcn: { areas: ["formacion", "profesional"], media: [], links: [["yt", "https://www.youtube.com/watch?v=NzhGDAYJ43Y"]] }
  },
  pubs: [
    { type: "j", year: 2026, authors: "Conejo, C., Alanwar, A., Puig, V., & Morcego, B.", title: "Data-Driven Predictive Control With Functional Safety Guarantees for Autonomous Vehicles", venue: "IEEE Transactions on Intelligent Transportation Systems, 27(7), 8495–8510", doi: "10.1109/TITS.2026.3673196" },
    { type: "c", year: 2026, authors: "Conejo, C.", title: "Formal Verification of Functional Safety Supervisors for Autonomous Vehicles Using Behavior Tree Architectures", venue: "Proceedings of the IEEE Intelligent Vehicles Symposium, 97–103", doi: "10.1109/IV66570.2026.11624044" },
    { type: "c", year: 2026, authors: "Conejo, C., Puig, V., & Morcego, B.", title: "Reachability-Based Benchmarking of Physics-Based and Data-Driven Models for Automated Driving", venue: "23rd IFAC World Congress, Busan (Republic of Korea)", doi: "10.1016/j.conengprac.2026.106817", url: "https://scholar.google.com/citations?view_op=view_citation&hl=ca&user=OlmWGTEAAAAJ&citation_for_view=OlmWGTEAAAAJ:W7OEmFMy1HYC" },
    { type: "j", year: 2026, authors: "Conejo, C., Puig, V., & Morcego, B.", title: "Reachability-based benchmarking of physics-based and data-driven models for automated driving", venue: "Control Engineering Practice, 170, 106817", doi: "10.1016/j.conengprac.2026.106817" },
    { type: "j", year: 2025, authors: "Conejo, C., Morcego, B., Puig, V., Navas, F., & Milanés, V.", title: "Behavior Trees in Functional Safety Supervisors for Autonomous Vehicles", venue: "IEEE Transactions on Intelligent Transportation Systems, 26(10), 15787–15798", doi: "10.1109/TITS.2025.3591498" },
    { type: "c", year: 2025, authors: "Conejo, C., Alanwar, A., Puig, V., & Morcego, B.", title: "Integrating Signal Temporal Logic into Zonotopic Predictive Control for Autonomous Vehicles", venue: "2025 IEEE 28th International Conference on Intelligent Transportation Systems (ITSC)", doi: "10.1109/ITSC60802.2025.11423792", url: "https://scholar.google.com/citations?view_op=view_citation&hl=ca&user=OlmWGTEAAAAJ&citation_for_view=OlmWGTEAAAAJ:eQOLeE2rZwMC" },
    { type: "j", year: 2025, authors: "Conejo, C., Puig, V., Morcego, B., Navas, F., & Milanés, V.", title: "Enhancing safety in autonomous vehicles using zonotopic LPV-EKF for fault detection and isolation in state estimation", venue: "Control Engineering Practice, 156, 106192", doi: "10.1016/j.conengprac.2024.106192" },
    { type: "c", year: 2024, authors: "Conejo, C., Puig, V., Morcego, B., Navas, F., & Milanés, V.", title: "A Zonotopic FDI Approach with LPV-based EKF in Autonomous Vehicles", venue: "12th IFAC Symposium on Fault Detection, Supervision and Safety for Technical Processes (SAFEPROCESS), Ferrara (Italy)", doi: "10.1016/j.ifacol.2024.07.258", url: "https://scholar.google.com/citations?user=OlmWGTEAAAAJ" },
    { type: "c", year: 2024, authors: "Conejo, C., Puig, V., Morcego, B., Navas, F., & Milanés, V.", title: "Behavior Trees for the Application of ISO 26262 in Field Monitoring Processes for Autonomous Vehicles", venue: "2024 IEEE 27th International Conference on Intelligent Transportation Systems (ITSC)", doi: "10.1109/ITSC58415.2024.10919931", url: "https://scholar.google.com/citations?view_op=view_citation&hl=ca&user=OlmWGTEAAAAJ&citation_for_view=OlmWGTEAAAAJ:IjCSPb-OGe4C" }
  ],
  confs: [
    { year: 2026, fmt: "oral", title: "Reachability-Based Benchmarking of Physics-Based and Data-Driven Models for Automated Driving", event: "23rd IFAC World Congress", place: "Busan, Republic of Korea", date: "23–28/08/2026" },
    { year: 2026, fmt: "poster", chair: true, title: "Formal Verification of Functional Safety Supervisors for Autonomous Vehicles Using Behavior Tree Architectures", event: "37th IEEE Intelligent Vehicles Symposium (IV)", place: "Detroit, USA", date: "22–25/06/2026" },
    { year: 2025, fmt: "oral", title: "Integrating Signal Temporal Logic into Zonotopic Predictive Control for Autonomous Vehicles", event: "28th IEEE International Conference on Intelligent Transportation Systems (ITSC)", place: "Gold Coast, Australia", date: "18–21/11/2025" },
    { year: 2024, fmt: "oral", title: "Behavior Trees for the Application of ISO 26262 in Field Monitoring Processes for Autonomous Vehicles", event: "27th IEEE International Conference on Intelligent Transportation Systems (ITSC)", place: "Edmonton, Canada", date: "24–27/09/2024" },
    { year: 2024, fmt: "oral", title: "A Zonotopic FDI Approach with LPV-based EKF in Autonomous Vehicles", event: "12th IFAC Symposium on Fault Detection, Supervision and Safety for Technical Processes (SAFEPROCESS)", place: "Ferrara, Italy", date: "4–7/06/2024" }
  ],
  projects: [
    { k: "dacs", name: "DACS — Data-driven Control and Supervision of Critical Systems with Safety Guarantees", ref: "PID2025-168166OB-I00", funder: "Agencia Estatal de Investigación (AEI)", budget: "122.250 €", pi: "Vicenç Puig Cayuela, Fatiha Nejjari Akhi-Elarab", period: "09/2026 – 08/2029", ongoing: true },
    { k: "cdti", name: "Innovative Optronic Systems for Border Surveillance (Compra Pública Precomercial)", ref: "CPP 02/2025 L2-4", funder: "CDTI / FEDER", budget: "3.430.600 €", pi: "ARQUIMEA Research Center", period: "10/2025 – 10/2028", ongoing: true },
    { k: "phd", name: "Industrial Doctorate — Safety of Autonomous Vehicles", ref: "C12507", funder: "Renault Group", budget: "", pi: "Vicenç Puig, Bernardo Morcego (UPC/IRI) · Vicente Milanés (Renault)", period: "2022 – 2025", ongoing: false },
    { k: "sacoav", name: "SaCoAV — Coordinación Segura de Vehículos Autónomos", ref: "PID2020-114244RB-I00", funder: "AEI · Retos de Investigación", budget: "244.420 €", pi: "Vicenç Puig, Fatiha Nejjari", period: "2021 – 2024", ongoing: false },
    { k: "tda", name: "Transport Públic amb Vehicles Autònoms al Medi Rural", ref: "P-G010-002706-001", funder: "Dpt. Polítiques Digitals i Administració Pública (Generalitat de Catalunya)", budget: "2.000.000 €", pi: "Antonio M. López", period: "11/2020 – 12/2022", ongoing: false, video: true }
  ],
  ratings: [
    { y: "2022/23", v: 4.90, p: 30.10 }, { y: "2023/24", v: 4.85, p: 43.57 },
    { y: "2024/25", v: 4.86, p: 33.73 }, { y: "2025/26", v: 4.53, p: 31.67 }
  ],
  refs: [
    "Biggs, J., &amp; Tang, C. (2011). <em>Teaching for Quality Learning at University</em> (4th ed.). Open University Press.",
    "Freeman, S., et al. (2014). Active learning increases student performance in science, engineering, and mathematics. <em>PNAS, 111</em>(23), 8410–8415.",
    "Hattie, J., &amp; Timperley, H. (2007). The power of feedback. <em>Review of Educational Research, 77</em>(1), 81–112.",
    "Kolb, D. A. (1984). <em>Experiential Learning: Experience as the Source of Learning and Development</em>. Prentice Hall.",
    "Mazur, E. (1997). <em>Peer Instruction: A User's Manual</em>. Prentice Hall.",
    "Nicol, D. J., &amp; Macfarlane-Dick, D. (2006). Formative assessment and self-regulated learning: A model and seven principles of good feedback practice. <em>Studies in Higher Education, 31</em>(2), 199–218."
  ]
};
