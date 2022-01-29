/**
 * Ensemble de fonctions, interface et enumération qui définissent les cartes.
 *
 * @packageDocumentation
 */

/**
 * Représente les types possibles des cartes.
 */
enum typeCarte {
    pique, // ♠️
    carreau, // ♦️
    trefle, // ♣️
    coeur // ♥️
}
export default typeCarte;

/**
 * Représente les caractéres d'une carte.
 */
export interface Carte{
     /**
     * Le type de la carte.
     */
    type: typeCarte,

     /**
     * La valeur de la carte.
     */
    valeur: number,
}

/**
 * Créer une carte à partir d'un type et sa valeur.
 * @param typ Le type de la carte.
 * @param val La valeur de la carte.
 * @returns Les caractéristiques de la carte.
 */
export function creerCarte(typ: typeCarte, val: number):Carte{

    if(val>=2 && val<=14){
     let cartePret: Carte = {type: typ, valeur: val};
       return cartePret;
    }
}

/**
 * Affichage des caractéristiques des cartes.
 * @param typ Le type de la carte.
 * @param val La valeur de la carte.
 * @returns Afficher les caractéristiques de la carte.
 */
export function afficherCarte(typ: typeCarte, val: number):string{
    let symbole: string;
    let nom: string;

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
/**
 * Comparer deux cartes par ses valeurs.
 * @param Carte1 La première carte.
 * @param Carte2 La deuxième carte.
 * @returns Le valeur de la soustraction de la première carte par la deuxième.
 */
export function comparerCartes(Carte1: Carte, Carte2: Carte):number{
    return Carte1.valeur - Carte2.valeur;
}