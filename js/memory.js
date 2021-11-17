//mise en place des données
//Instanciation d'un tableau contenan le nom des images servant de carte dans le jeu.
//chaque image esst déclarée 2 fois dans le tableau pour avoir des paires.
var listeCartes =[
    "dromadaire.png",
    "dromadaire.png",
    "hyenne2.jpg",
    "hyenne2.jpg",
    "lion2.png",
    "lion2.png",
    "ours2.jpg",
    "ours2.jpg",
    "renard2.jpg",
    "renard2.jpg",
    "scorpion2.png",
    "scorpion2.png",
    "tigre2.jpg",
    "tigre2.jpg",
    "toucan2.png",
    "toucan2.png",
]
//on declare une méthode qui procede au tirage au sort d'image dans le tableau des cartes. A chaque tirage le nom de l'image selectionnée est supprimée du panneau

function tirage(){
    //on tire au hasard un numéro de colonne dans le tableau
    //Math est une classe native du JS qui donne accès a differentes méthodes ou fonctions permettant la manipulation de chiffre
    //math.floor= arrondi le resulat vers le bas 4.2555 deviens 4
    //math.ceil = arrondi le resultat vers le haut 4,6 donne 5
    //math.round fait un arrondi logique (4.3 deviens 4 et 4.51 deviens :=)
    var numeroColonne = Math.floor(Math.random()*listeCartes.length);
    console.log(numeroColonne);
    //on recupere le nom de l'image dans la colonne du tableau tirée au sort.
    var imageName = listeCartes[numeroColonne]
    //listeCartes -> c'est le tableau
    //numeroColonne-> c'est le chiffre aléatoire entre 0 et 15
    //on crée ensuite une colonne html contenant une balise image que l'on injecte dans l'objet html pévu à cet effet.
    //$("zone-cartes") = document.querySelector/querySelectorAll("zone-cartes")
    $("#zone-cartes").append('<div class="col-3"><img class="img-fluid" src="images/'+imageName+'"</div>');
    listeCartes.splice(numeroColonne,1);
    if(listeCartes.length>0) tirage();
}

tirage();