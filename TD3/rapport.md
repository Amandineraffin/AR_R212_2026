# Rapport — [TD3]

## Points clés

### 1. Expliquez le modèle événement- état-rendu

Le clic ne met pas à jour la page directement. Il modifie d'abord une variable, et c'est la variable qui met à jour la page.
    clic → count++ → afficher count


### 2. Expliquez en quoi la classlist.toggle est la passerelle entre JS et CSS

JS ajoute ou ou retire une classe. Le CSS fait le reste : dès qu'il vooit la classe apparaître, il applique le style.
