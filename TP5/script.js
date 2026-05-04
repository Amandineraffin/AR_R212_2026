const projets = [
  { id: 1, titre: "Site vitrine",    description: "Un site pour une boulangerie locale.", tags: ["HTML", "CSS"] },
  { id: 2, titre: "Quiz interactif", description: "Application de quiz avec score et timer.", tags: ["JS", "HTML"] },
  { id: 3, titre: "Portfolio v1",    description: "Ma première version de portfolio.", tags: ["HTML", "CSS"] },
  { id: 4, titre: "Dashboard météo", description: "Tableau de bord météo avec API Open Meteo.", tags: ["JS", "CSS"] },
  { id: 5, titre: "Blog tech",       description: "Blog statique sur le développement web.", tags: ["HTML", "CSS", "JS"] },
  { id: 6, titre: "Jeu du pendu",    description: "Jeu du pendu en JavaScript vanilla.", tags: ["JS"] }
];

let dernierFocus = null;

function creerCarteDom(projet) {
  const carte = document.createElement('article');
  carte.className = 'carte-projet';

  const titre = document.createElement('div');
  titre.className = 'carte-titre';
  titre.textContent = projet.titre;

  const description = document.createElement('div');
  description.className = 'carte-description';
  description.textContent = projet.description;

  const tags = document.createElement('div');
  tags.className = 'carte-tags';
  projet.tags.forEach(t => {
    const span = document.createElement('span');
    span.textContent = t;
    tags.appendChild(span);
  });

  const btn = document.createElement('button');
  btn.className = 'carte-bouton';
  btn.textContent = 'Voir détail';
  btn.setAttribute('aria-label', `Voir le détail : ${projet.titre}`);
  btn.addEventListener('click', () => ouvrirModale(projet.id));

  carte.append(titre, description, tags, btn);
  return carte;
}

function afficherProjets(liste) {
  const grille = document.querySelector('#grille');
  grille.innerHTML = '';
  liste.forEach(p => grille.appendChild(creerCarteDom(p)));
}

function filtrer(tag) {
  document.querySelectorAll('.filtre').forEach(f => f.classList.remove('actif'));
  event.target.classList.add('actif');

  const resultats = tag === 'tous'
    ? projets
    : projets.filter(p => p.tags.includes(tag));

  afficherProjets(resultats);
}

function ouvrirModale(id) {
  const projet = projets.find(p => p.id === id);
  if (!projet) return;

  document.querySelector('#modale-body').innerHTML =
    `<h2>${projet.titre}</h2>
     <p>${projet.description}</p>
     <p>Tags : ${projet.tags.join(', ')}</p>`;

  const modale = document.querySelector('#modale');
  modale.classList.remove('hidden');

  dernierFocus = document.activeElement;
  const btnFermer = modale.querySelector('.modale-fermer');
  if (btnFermer) btnFermer.focus();
}

function fermerModale() {
  document.querySelector('#modale').classList.add('hidden');
  if (dernierFocus) dernierFocus.focus();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fermerModale();
});

document.querySelector('#modale').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) fermerModale();
});

afficherProjets(projets);
