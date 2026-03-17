# Rapport — [TD3]

## Points clés

### 1. Expliquez le modèle événement- état-rendu

Un événement modifie l'état et c'est l'état qui déclenche la mise à jour du DOM
let count = 0; // état

document.getElementById('btn').addEventListener('click', function() {
  count++;
  document.getElementById('output').textContent = count;
});

### 2. Expliquez en quoi la classlist.toggle est la passerelle entre JS et CSS

ClassList.toggle peut ajouter ou retire une class CSS c'est le rôle principal du JS. Le reste est géré par le CSS dès qu'il voit la classe apparaître.
