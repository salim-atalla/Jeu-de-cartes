/**
 * Ensemble de fonctions nécessaire pour créer et manipuler un jeu de cartes.
 *
 * @packageDocumentation
 */

import typeCarte, {creerCarte, afficheCarte, comparerCartes, Carte} from "./Carte"

/**
 * Renvoyer l’ensemble des 52 cartes possibles sous la forme d’un tableau.
 * @returns Le tableau de tous les cartes possibles.
 */
export function creerJeu():Array<Carte>{
    let TabCartes: Array<Carte>;
    let TC: typeCarte;
    let i: number = 0;

    for(let j: number=0; j<4; j++){  // Changer le type de cartes chaque fois.
        for(let k:number=0; k<13; k++){ // Changer le valeur de cartes chaque fois.

            // Créer des cartes et les remplir dans les cases du tableau TabCartes.
            TabCartes[i] = creerCarte(TC[j],k+2);
            i++
        }
    }
    
    return TabCartes;
}

/**
 * Retirer des cartes.
 * @returns Retirer les valeurs des cartes un par un.
 */
export function tirerCarte():number{
    let tabC: Array<Carte> = creerJeu();
    let val: number;
    let cartesRestants: number = 52; // initialiser le nombre de cartes.
    let i: number = 0; // initialiser l'indice de chaque carte retirée.
    
    while (cartesRestants>0){

        val = tabC[cartesRestants-i].valeur;
        i++

        return val;
    }
}