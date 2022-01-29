"use strict";
/**
 * Ensemble de fonctions nécessaire pour créer et manipuler un jeu de cartes.
 *
 * @packageDocumentation
 */
exports.__esModule = true;
var Carte_1 = require("./Carte");
/**
 * Renvoyer l’ensemble des 52 cartes possibles sous la forme d’un tableau.
 * @returns Le tableau de tous les cartes possibles.
 */
function creerJeu() {
    var TabCartes;
    var TC;
    var i = 0;
    for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 13; k++) {
            // Créer des cartes et les remplir dans les cases du tableau TabCartes.
            TabCartes[i] = Carte_1.creerCarte(TC[j], k + 2);
            i++;
        }
    }
    return TabCartes;
}
exports.creerJeu = creerJeu;
/**
 * Retirer des cartes.
 * @returns Retirer les valeurs des cartes un par un.
 */
function tirerCarte() {
    var tabC = creerJeu();
    var val;
    var cartesRestants = 52; // initialiser le nombre de cartes.
    var i = 0; // initialiser l'indice de chaque carte retirée.
    while (cartesRestants > 0) {
        val = tabC[cartesRestants - i].valeur;
        i++;
        return val;
    }
}
exports.tirerCarte = tirerCarte;
