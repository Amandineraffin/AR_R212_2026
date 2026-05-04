 <script>
  
    const projets = [
      { id: 1, titre: "Site vitrine", description: "Un site pour une boulangerie locale. Design responsive et moderne.", tags: ["HTML", "CSS"] },
      { id: 2, titre: "Quiz interactif", description: "Application de quiz avec score et timer.", tags: ["JS", "HTML"] },
      { id: 3, titre: "Portfolio v1", description: "Ma première version de portfolio.", tags: ["HTML", "CSS"] },
      { id: 4, titre: "Dashboard météo", description: "Tableau de bord météo avec API Open Meteo.", tags: ["JS", "CSS"] },
      { id: 5, titre: "Blog tech", description: "Blog statique sur le développement web.", tags: ["HTML", "CSS", "JS"] },
      { id: 6, titre: "Jeu du pendu", description: "Jeu du pendu en JavaScript vanilla.", tags: ["JS"] }
    ];

    function afficherProjets(liste) {
      var grille = document.getElementById('grille');
      grille.innerHTML = '';
      for (var i = 0; i < liste.length; i++) {
        var p = liste[i];
        var carte = document.createElement('div');
        carte.className = 'carte-projet';
        carte.innerHTML = '<div class="carte-titre">' + p.titre + '</div>' +
          '<div class="carte-description">' + p.description + '</div>' +
          '<div class="carte-tags">' + p.tags.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
          '<button class="carte-bouton" onclick="ouvrirModale(' + p.id + ')">Voir détail</button>';
        grille.appendChild(carte);
      }
    }

    function filtrer(tag) {
      // Gestion visuelle des filtres actifs
      var filtres = document.querySelectorAll('.filtre');
      for (var i = 0; i < filtres.length; i++) {
        filtres[i].style.background = '#ddd';
        filtres[i].style.color = '#333';
      }
      event.target.style.background = '#1a1a2e';
      event.target.style.color = 'white';

      if (tag === 'tous') {
        afficherProjets(projets);
      } else {
        var filtres = projets.filter(function(p) { return p.tags.indexOf(tag) !== -1; });
        afficherProjets(filtres);
      }
    }

    function ouvrirModale(id) {
      var projet = null;
      for (var i = 0; i < projets.length; i++) {
        if (projets[i].id === id) {
          projet = projets[i];
          break;
        }
      }
      if (!projet) return;

      document.getElementById('modale-body').innerHTML =
        '<h2>' + projet.titre + '</h2>' +
        '<p>' + projet.description + '</p>' +
        '<p>Tags : ' + projet.tags.join(', ') + '</p>';

      document.getElementById('modale').style.display = 'block';
    }

    function fermerModale() {
      document.getElementById('modale').style.display = 'none';
    }

    afficherProjets(projets);
  </script>
