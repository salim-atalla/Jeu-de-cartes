"use strict";
/**
 * Ensemble de fonctions, interface et enumération qui définissent les cartes.
 *
 * @packageDocumentation
 */
exports.__esModule = true;
/**
 * Représente les types possibles des cartes.
 */
var typeCarte;
(function (typeCarte) {
    typeCarte[typeCarte["pique"] = 0] = "pique";
    typeCarte[typeCarte["carreau"] = 1] = "carreau";
    typeCarte[typeCarte["trefle"] = 2] = "trefle";
    typeCarte[typeCarte["coeur"] = 3] = "coeur"; // ♥️
})(typeCarte || (typeCarte = {}));
exports["default"] = typeCarte;
/**
 * Créer une carte à partir d'un type et sa valeur.
 * @param typ Le type de la carte.
 * @param val La valeur de la carte.
 * @returns Les caractéristiques de la carte.
 */
function creerCarte(typ, val) {
    if (val >= 2 && val <= 14) {
        var cartePret = { type: typ, valeur: val };
        return cartePret;
    }
}
exports.creerCarte = creerCarte;
/**
 * Affichage des caractéristiques des cartes.
 * @param typ Le type de la carte.
 * @param val La valeur de la carte.
 * @returns Afficher les caractéristiques de la carte.
 */
function afficheCarte(typ, val) {
    var symbole;
    var nom;
    // Conditionelle pour définir les sympoles et les noms de chaque type de cartes.
    switch (typ) {
        case typeCarte.pique:
            symbole = '♠️';
            nom = typeCarte[0];
            break;
        case typeCarte.carreau:
            symbole = '♦️';
            nom = typeCarte[1];
            break;
        case typeCarte.trefle:
            symbole = '♣️';
            nom = typeCarte[2];
            break;
        case typeCarte.coeur:
            symbole = '♥️';
            nom = typeCarte[3];
            break;
    }
    return "La carte est: " + nom + " " + symbole + " de valeur: " + val;
}
exports.afficheCarte = afficheCarte;
/**
 * Comparer deux cartes par ses valeurs.
 * @param Carte1 La première carte.
 * @param Carte2 La deuxième carte.
 * @returns Le valeur de la soustraction de la première carte par la deuxième.
 */
function comparerCartes(Carte1, Carte2) {
    return Carte1.valeur - Carte2.valeur;
}
exports.comparerCartes = comparerCartes;
