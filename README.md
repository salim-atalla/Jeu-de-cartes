Description:
=============

C'est un jeu de cartes dans lequel se passe comparer deux cartes, et la carte la plus forte qui gagne.

L'algorithme du jeu,
D'abord c'est dans le module "Carte", où on trouve de l'énumération, interface, fonctions qui définissent et gérent les caractéristiques des cartes, 
et dans le module "Jeu", on trouve des fonctions qui définissent le nombre de cartes et gérent le jeu.

-----------------------------------------------------------------------------------------------------

Comment le jeu se roule?
=========================

On créer des cartes à partir de l'interface "Carte" par la fonction "creerCarte", 
et on définit le nombre des cartes au début et pendant le jeu se roule par la fonction "creerJeu" sous forme d'un tableau,

On retire deux cartes par la fonction "tirerCartes" et qui renvoie ses valeurs, 
et on les comparer par la fonction "comparerCartes" qui retourne à son tour une certaine valeur: 
si la valeur est positive, alors la première carte est la plus forte, 
si la valeur est négative, alors la deuxième carte est la plus forte, 
si la valeur est zéro, alors les deux cartes sont égaux.

Puis, la fonction "afficherCarte" gére l'affichage des cartes qui sont mise en jeu.

----------------------------------------------------------------------------------------------------
