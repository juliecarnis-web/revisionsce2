
import { Chapter } from './types';

export const INITIAL_CHAPTERS: Chapter[] = [
  {
    id: 'fra-verbe-1',
    title: 'Le Verbe : Infinitif et Groupe',
    subSubjectId: 'etude-langue',
    series: [
      {
        id: 1, title: 'Le lexique du verbe', type: 'cours',
        questions: [
          { id: 'v_lex1', text: 'Qu\'est-ce qu\'un verbe ?', options: ['Un petit mot devant le nom', 'Un mot qui exprime une action ou un état', 'Une grande lettre au début'], correctIndex: 1, hint: 'C\'est le mot qui dit ce que l\'on fait.' },
          { id: 'v_lex2', text: 'Qu\'est-ce que l\'infinitif d\'un verbe ?', options: ['Sa forme non conjuguée (son nom)', 'Sa forme au pluriel', 'Sa place dans la phrase'], correctIndex: 0, hint: 'C\'est le nom "de famille" du verbe.' },
          { id: 'v_lex3', text: 'Qu\'est-ce que le radical d\'un verbe ?', options: ['La fin du verbe qui change', 'Le début du verbe qui ne change pas souvent', 'Le point à la fin'], correctIndex: 1, hint: 'C\'est la racine du verbe.' },
          { id: 'v_lex4', text: 'Qu\'est-ce qu\'une terminaison ?', options: ['La fin du verbe qui change selon la personne', 'La majuscule au début', 'Le sens de l\'action'], correctIndex: 0, hint: 'C\'est le "costume" que le verbe met selon le sujet.' },
          { id: 'v_lex5', text: 'Comment appelle-t-on l\'action de changer le verbe selon la personne ?', options: ['La ponctuation', 'La conjugaison', 'La définition'], correctIndex: 1, hint: 'On conjugue le verbe au présent, futur...' }
        ]
      },
      {
        id: 2, title: 'Reconnaître l\'infinitif', type: 'cours',
        questions: [
          { id: 'q6', text: 'Quel est l\'infinitif de "nous finissons" ?', options: ['Fini', 'Finir', 'Finissant'], correctIndex: 1, hint: 'C\'est un verbe du 2ème groupe.' },
          { id: 'q7', text: 'Lequel est à l\'infinitif ?', options: ['Chante', 'Chanteras', 'Chanter'], correctIndex: 2, hint: 'Cherche la terminaison en -er.' },
          { id: 'q8', text: 'Quel est l\'infinitif de "il va" ?', options: ['Aller', 'Valler', 'Partir'], correctIndex: 0, hint: 'C\'est un verbe très irrégulier.' },
          { id: 'q9', text: 'Quel est l\'infinitif de "tu vends" ?', options: ['Vendu', 'Vendre', 'Venir'], correctIndex: 1, hint: 'Il finit par -re.' },
          { id: 'q10', text: 'Quel est l\'infinitif de "ils ont" ?', options: ['Être', 'Avoir', 'Faire'], correctIndex: 1, hint: 'Verbe auxiliaire de possession.' }
        ]
      },
      {
        id: 3, title: 'Application : Groupes', type: 'application',
        questions: [
          { id: 'q11', text: 'À quel groupe appartient "Sauter" ?', options: ['1er groupe', '2ème groupe', '3ème groupe'], correctIndex: 0, hint: 'Terminaison en -er.' },
          { id: 'q12', text: 'À quel groupe appartient "Finir" ?', options: ['1er groupe', '2ème groupe', '3ème groupe'], correctIndex: 1, hint: 'Terminaison en -ir et nous finissons.' },
          { id: 'q13', text: 'À quel groupe appartient "Prendre" ?', options: ['1er groupe', '2ème groupe', '3ème groupe'], correctIndex: 2, hint: 'Terminaison en -re.' },
          { id: 'q14', text: 'Lequel appartient au 3ème groupe ?', options: ['Danser', 'Grandir', 'Vouloir'], correctIndex: 2, hint: 'C\'est un verbe irrégulier.' },
          { id: 'q15', text: 'Le verbe "Aller" est dans le...', options: ['1er groupe', '2ème groupe', '3ème groupe'], correctIndex: 2, hint: 'Attention au piège ! Il ne finit pas comme les autres en -er.' }
        ]
      },
      {
        id: 4, title: 'Application : Pratique', type: 'application',
        questions: [
          { id: 'q16', text: 'Trouve le verbe : "Le chat dort sur le lit."', options: ['Chat', 'Dort', 'Lit'], correctIndex: 1, hint: 'Quelle est l\'action ?' },
          { id: 'q17', text: 'Trouve l\'infinitif : "Il court vite."', options: ['Couru', 'Courir', 'Court'], correctIndex: 1, hint: 'C\'est l\'action de...' },
          { id: 'q18', text: 'Lequel n\'est pas un verbe du 1er groupe ?', options: ['Jouer', 'Finir', 'Parler'], correctIndex: 1, hint: 'Le 1er groupe finit par -er.' },
          { id: 'q19', text: 'Trouve le verbe : "Demain, nous irons au parc."', options: ['Irons', 'Demain', 'Parc'], correctIndex: 0, hint: 'C\'est l\'action au futur.' },
          { id: 'q20', text: 'Quel verbe est du 2ème groupe ?', options: ['Choisir', 'Partir', 'Venir'], correctIndex: 0, hint: 'Pense à "nous choisissons".' }
        ]
      }
    ]
  },
  {
    id: 'fra-infinitif-1',
    title: 'L\'infinitif des verbes',
    subSubjectId: 'etude-langue',
    series: [
      {
        id: 1, title: 'Le lexique de l\'infinitif', type: 'cours',
        questions: [
          { id: 'inf_lex1', text: 'Comment appelle-t-on le verbe quand il n\'est pas encore conjugué ?', options: ['L\'indicatif', 'L\'infinitif', 'L\'impératif'], correctIndex: 1, hint: 'C\'est la forme de base.' },
          { id: 'inf_lex2', text: 'Dans le dictionnaire, le verbe est écrit sous quelle forme ?', options: ['Au futur', 'À l\'infinitif', 'Au pluriel'], correctIndex: 1, hint: 'C\'est son identité.' },
          { id: 'inf_lex3', text: 'Qu\'est-ce qu\'une terminaison d\'infinitif ?', options: ['La première lettre', 'Les dernières lettres (-er, -ir...)', 'Le point final'], correctIndex: 1, hint: 'Elle indique à quel groupe le verbe appartient.' },
          { id: 'inf_lex4', text: 'Que veut dire "classer les verbes par groupe" ?', options: ['Les ranger selon leur terminaison', 'Les écrire en couleur', 'Les compter dans la phrase'], correctIndex: 0, hint: 'On regarde la fin du mot.' },
          { id: 'inf_lex5', text: 'Comment appelle-t-on un verbe qui ne suit pas les règles habituelles ?', options: ['Un verbe régulier', 'Un verbe irrégulier', 'Un verbe invisible'], correctIndex: 1, hint: 'Comme le verbe "aller" ou "être".' }
        ]
      },
      {
        id: 2, title: 'Trouver l\'infinitif', type: 'cours',
        questions: [
          { id: 'inf6', text: 'Quel est l\'infinitif de "je chante" ?', options: ['Chanter', 'Chanteur', 'Chanté'], correctIndex: 0, hint: 'C\'est l\'action de...' },
          { id: 'inf7', text: 'Quel est l\'infinitif de "tu grandis" ?', options: ['Grand', 'Grandir', 'Grandi'], correctIndex: 1, hint: 'Un verbe qui finit en -ir.' },
          { id: 'inf8', text: 'Quel est l\'infinitif de "nous faisons" ?', options: ['Faisant', 'Faire', 'Faisez'], correctIndex: 1, hint: 'Un verbe du 3ème groupe très courant.' },
          { id: 'inf9', text: 'Quel est l\'infinitif de "elles viennent" ?', options: ['Venu', 'Venir', 'Viennent'], correctIndex: 1, hint: 'C\'est l\'action de...' },
          { id: 'inf10', text: 'Quel est l\'infinitif de "vous avez" ?', options: ['Être', 'Avoir', 'Aller'], correctIndex: 1, hint: 'L\'auxiliaire de possession.' }
        ]
      },
      {
        id: 3, title: 'Les trois groupes', type: 'application',
        questions: [
          { id: 'inf11', text: 'À quel groupe appartiennent les verbes en -er (sauf aller) ?', options: ['1er groupe', '2ème groupe', '3ème groupe'], correctIndex: 0, hint: 'C\'est le groupe le plus numerous.' },
          { id: 'inf12', text: 'Le verbe "finir" appartient au 2ème groupe car on dit...', options: ['Nous finissons', 'Nous finisons', 'Nous finirions'], correctIndex: 0, hint: 'On doit entendre "iss" à nous.' },
          { id: 'inf13', text: 'À quel groupe appartient le verbe "prendre" ?', options: ['1er groupe', '2ème groupe', '3ème groupe'], correctIndex: 2, hint: 'Il finit en -re, c\'est un verbe irrégulier.' },
          { id: 'inf14', text: 'Quel est l\'intrus du 1er groupe ?', options: ['Sauter', 'Parler', 'Aller'], correctIndex: 2, hint: 'Même s\'il finit en -er, il change tout le temps !' },
          { id: 'inf15', text: 'Le verbe "partir" est du 3ème groupe car on dit...', options: ['Nous partissons', 'Nous partons', 'Nous partit'], correctIndex: 1, hint: 'On n\'entend pas "iss", donc ce n\'est pas le 2ème groupe.' }
        ]
      },
      {
        id: 4, title: 'Utiliser l\'infinitif', type: 'application',
        questions: [
          { id: 'inf16', text: 'Dans "Il faut ... une pomme", quel verbe est à l\'infinitif ?', options: ['manger', 'mange', 'manges'], correctIndex: 0, hint: 'Après "il faut", on utilise l\'infinitif.' },
          { id: 'inf17', text: 'Quand deux verbes se suivent, le deuxième est souvent...', options: ['Conjugué', 'À l\'infinitif', 'Au pluriel'], correctIndex: 1, hint: 'Exemple : "Je veux dormir".' },
          { id: 'inf18', text: 'Trouve l\'infinitif dans : "Pour réussir, il faut travailler."', options: ['réussir et travailler', 'réussir uniquement', 'travailler uniquement'], correctIndex: 0, hint: 'Il y en a deux après "pour" et "il faut".' },
          { id: 'inf19', text: 'Dans une recette, on écrit souvent : "... le lait."', options: ['Verser', 'Versez', 'Verse'], correctIndex: 0, hint: 'L\'infinitif sert à donner des instructions.' },
          { id: 'inf20', text: 'Quel mot complète : "Elle commence à ..."', options: ['écrit', 'écrire', 'écris'], correctIndex: 1, hint: 'Après la préposition "à", on met l\'infinitif.' }
        ]
      }
    ]
  },
  {
    id: 'fra-phrase-1',
    title: 'Les limites de la phrase',
    subSubjectId: 'etude-langue',
    series: [
      {
        id: 1, title: 'Définir la phrase', type: 'cours',
        questions: [
          { id: 'ph_lex1', text: 'Qu\'est-ce qu\'une phrase ?', options: ['Une liste de mots au hasard', 'Une suite de mots qui a un sens, une majuscule et un point', 'Un mot écrit en gros'], correctIndex: 1, hint: 'Elle doit raconter quelque chose de compréhensible.' },
          { id: 'ph_lex2', text: 'Qu\'est-ce que la ponctuation ?', options: ['L\'ordre des lettres', 'L\'ensemble des signes ( . , ? ! )', 'La couleur des mots'], correctIndex: 1, hint: 'Ce sont les signes qui aident à lire.' },
          { id: 'ph_lex3', text: 'Comment appelle-t-on la grande lettre au début d\'une phrase ?', options: ['Une minuscule', 'Une majuscule', 'Une voyelle'], correctIndex: 1, hint: 'C\'est la lettre capitale.' },
          { id: 'ph_lex4', text: 'Qu\'est-ce qu\'une phrase déclarative ?', options: ['Une phrase qui pose une question', 'Une phrase qui donne une information', 'Une phrase qui donne un ordre'], correctIndex: 1, hint: 'Elle déclare, elle raconte.' },
          { id: 'ph_lex5', text: 'Qu\'est-ce qu\'une phrase interrogative ?', options: ['Une phrase qui pose une question', 'Une phrase qui exprime la joie', 'Une phrase sans point'], correctIndex: 0, hint: 'Comme une interrogation.' }
        ]
      },
      {
        id: 2, title: 'Les types de phrases', type: 'cours',
        questions: [
          { id: 'ph6', text: 'Quelle phrase donne une information ?', options: ['Interrogative', 'Déclarative', 'Impérative'], correctIndex: 1, hint: 'Elle déclare quelque chose.' },
          { id: 'ph7', text: 'Quelle phrase pose une question ?', options: ['Déclarative', 'Interrogative', 'Exclamative'], correctIndex: 1, hint: 'Comme une interrogation.' },
          { id: 'ph8', text: 'Quelle phrase donne un ordre ou un conseil ?', options: ['Impérative', 'Déclarative', 'Interrogative'], correctIndex: 0, hint: 'C\'est un impératif.' },
          { id: 'ph9', text: 'Quel point utilise-t-on pour une question ?', options: ['.', '?', '!'], correctIndex: 1, hint: 'Le point d\'interrogation.' },
          { id: 'ph10', text: 'Quel point utilise-t-on pour exprimer une émotion forte ?', options: ['.', '?', '!'], correctIndex: 2, hint: 'Le point d\'exclamation.' }
        ]
      },
      {
        id: 3, title: 'Repérer les limites', type: 'application',
        questions: [
          { id: 'ph11', text: 'Combien y a-t-il de phrases ? "Il neige. Je sors mon manteau."', options: ['1 phrase', '2 phrases', '3 phrases'], correctIndex: 1, hint: 'Compte les points finaux.' },
          { id: 'ph12', text: 'Où manque-t-il une majuscule ? "hier, nous sommes allés au zoo."', options: ['hier', 'zoo', 'allés'], correctIndex: 0, hint: 'C\'est le premier mot.' },
          { id: 'ph13', text: 'Quel signe manque ? "Où vas-tu"', options: ['.', '?', '!'], correctIndex: 1, hint: 'C\'est une question.' },
          { id: 'ph14', text: 'Remets dans l\'ordre : "pomme - mange - Lucie - une"', options: ['Mange Lucie une pomme.', 'Lucie mange une pomme.', 'Une Lucie mange pomme.'], correctIndex: 1, hint: 'Sujet + Verbe + Complément.' },
          { id: 'ph15', text: 'C\'est une phrase car...', options: ['Elle est courte', 'Elle commence par une majuscule, finit par un point et a un sens', 'Elle contient le mot "phrase"'], correctIndex: 1, hint: 'Les 3 conditions indispensables.' }
        ]
      },
      {
        id: 4, title: 'Transformer et choisir', type: 'application',
        questions: [
          { id: 'ph16', text: 'Transforme en question : "Tu viens."', options: ['Vient tu !', 'Viens-tu ?', 'Tu viens.'], correctIndex: 1, hint: 'On inverse ou on ajoute un point d\'interrogation.' },
          { id: 'ph17', text: 'Quel type est cette phrase : "Ferme la porte !"', options: ['Déclarative', 'Interrogative', 'Impérative'], correctIndex: 2, hint: 'C\'est un ordre.' },
          { id: 'ph18', text: 'Quel point pour : "Comme ce paysage est beau"', options: ['.', '?', '!'], correctIndex: 2, hint: 'On exprime l\'admiration.' },
          { id: 'ph19', text: 'Lequel n\'est pas un point final ?', options: ['?', '!', ','], correctIndex: 2, hint: 'La virgule sert à faire une pause dans la phrase.' },
          { id: 'ph20', text: 'Une phrase se termine obligatoirement par...', options: ['Un point ( . , ? , ! ou ... )', 'Une virgule', 'Une lettre'], correctIndex: 0, hint: 'Il existe plusieurs sortes de points.' }
        ]
      }
    ]
  },
  {
    id: 'fra-det-1',
    title: 'Les déterminants',
    subSubjectId: 'etude-langue',
    series: [
      {
        id: 1, title: 'Le lexique du déterminant', type: 'cours',
        questions: [
          { id: 'det_lex1', text: 'Qu\'est-ce qu\'un déterminant ?', options: ['Un mot qui remplace le nom', 'Un petit mot placé devant le nom', 'Un mot qui indique une action'], correctIndex: 1, hint: 'Il accompagne le nom.' },
          { id: 'det_lex2', text: 'Comment appelle-t-on le groupe formé par le déterminant et le nom ?', options: ['Le groupe verbal', 'Le groupe nominal', 'La phrase'], correctIndex: 1, hint: 'Il vient du mot "nom".' },
          { id: 'det_lex3', text: 'Qu\'est-ce que le genre d\'un nom ?', options: ['Sa taille', 'Le fait qu\'il soit masculin ou féminin', 'Son sens'], correctIndex: 1, hint: 'C\'est le "sexe" du mot (le ou la).' },
          { id: 'det_lex4', text: 'Qu\'est-ce que le nombre d\'un nom ?', options: ['Le fait qu\'il soit singulier ou pluriel', 'Le chiffre écrit dedans', 'Sa place dans le dictionnaire'], correctIndex: 0, hint: 'C\'est la quantité (un ou plusieurs).' },
          { id: 'det_lex5', text: 'Qu\'est-ce qu\'un article défini ?', options: ['Un mot qui montre un objet précis (le, la, les)', 'Un mot qui montre n\'importe quel objet (un, des)', 'Un mot caché'], correctIndex: 0, hint: 'On sait exactement de quoi on parle.' }
        ]
      },
      {
        id: 2, title: 'Genre et nombre', type: 'cours',
        questions: [
          { id: 'det6', text: 'Lequel de ces déterminants est au féminin singulier ?', options: ['Un', 'La', 'Des'], correctIndex: 1, hint: 'On dit "la table".' },
          { id: 'det7', text: 'Lequel de ces déterminants est au masculin singulier ?', options: ['Une', 'Les', 'Le'], correctIndex: 2, hint: 'On dit "le chat".' },
          { id: 'det8', text: 'Que devient "le" ou "la" devant un mot commençant par une voyelle ?', options: ['Il ne change pas', 'Il devient "l\'"', 'Il devient "les"'], correctIndex: 1, hint: 'Exemple : l\'école, l\'arbre.' },
          { id: 'det9', text: 'Lequel de ces déterminants est toujours au pluriel ?', options: ['Ma', 'Ce', 'Des'], correctIndex: 2, hint: 'On l\'utilise pour plusieurs objets.' },
          { id: 'det10', text: 'Si le nom est au pluriel, comment doit être le déterminant ?', options: ['Au singulier', 'Au pluriel', 'Il ne change pas'], correctIndex: 1, hint: 'Ils doivent être d\'accord.' }
        ]
      },
      {
        id: 3, title: 'Utiliser les articles', type: 'application',
        questions: [
          { id: 'det11', text: 'Choisis le bon article : "___ oiseau s\'envole."', options: ['Le', 'La', 'L\''], correctIndex: 2, hint: 'Oiseau commence par une voyelle.' },
          { id: 'det12', text: 'Trouve le déterminant dans : "Une grande forêt sombre."', options: ['Une', 'grande', 'forêt'], correctIndex: 0, hint: 'C\'est le petit mot qui commence le groupe nominal.' },
          { id: 'det13', text: 'Complète : "Je mange ___ cerises."', options: ['un', 'une', 'des'], correctIndex: 2, hint: 'Il y a plusieurs cerises.' },
          { id: 'det14', text: 'Quel article convient pour le mot "cahier" ?', options: ['le', 'la', 'les'], correctIndex: 0, hint: 'Cahier est un nom masculin singulier.' },
          { id: 'det15', text: 'Trouve l\'article indéfini dans cette liste :', options: ['la', 'une', 'ce'], correctIndex: 1, hint: 'Un, une, des sont des articles indéfinis.' }
        ]
      },
      {
        id: 4, title: 'Possessifs et démonstratifs', type: 'application',
        questions: [
          { id: 'det16', text: 'Complète : "C\'est ___ cartable (à moi)."', options: ['ton', 'mon', 'son'], correctIndex: 1, hint: 'C\'est le mien.' },
          { id: 'det17', text: 'Quel déterminant montre cet objet précis : "___ avion là-haut !"', options: ['Ce', 'Cet', 'Cette'], correctIndex: 1, hint: 'Devant un nom masculin commençant par une voyelle.' },
          { id: 'det18', text: 'Elle cherche ___ clés (les siennes).', options: ['ses', 'ces', 'des'], correctIndex: 0, hint: 'C\'est la possession.' },
          { id: 'det19', text: 'Choisis le bon déterminant démonstratif pour "image" :', options: ['ce', 'cet', 'cette'], correctIndex: 2, hint: 'Image est un nom féminin.' },
          { id: 'det20', text: 'Quel mot est un déterminant possessif pluriel ?', options: ['ma', 'nos', 'ces'], correctIndex: 1, hint: 'Indique que les objets sont à nous.' }
        ]
      }
    ]
  },
  {
    id: 'fra-pluriel-1',
    title: 'Le pluriel des noms',
    subSubjectId: 'etude-langue',
    series: [
      {
        id: 1, title: 'Le lexique du nombre', type: 'cours',
        questions: [
          { id: 'pl_lex1', text: 'Qu\'est-ce que le singulier ?', options: ['Quand il y a plusieurs objets', 'Quand il n\'y a qu\'un seul objet', 'Quand le mot est long'], correctIndex: 1, hint: 'Un seul (seul -> singulier).' },
          { id: 'pl_lex2', text: 'Qu\'est-ce que le pluriel ?', options: ['Quand il y a plusieurs objets (au moins deux)', 'Quand il n\'y a pas d\'objet', 'Quand le mot finit par A'], correctIndex: 0, hint: 'Plusieurs (plusieurs -> pluriel).' },
          { id: 'pl_lex3', text: 'Qu\'est-ce qu\'une marque du pluriel ?', options: ['La couleur du déterminant', 'La lettre que l\'on ajoute (souvent S ou X)', 'Le point final'], correctIndex: 1, hint: 'C\'est le signe visible du pluriel.' },
          { id: 'pl_lex4', text: 'Comment appelle-t-on un mot qui ne change pas de forme ?', options: ['Un mot magique', 'Un mot invariable', 'Un mot transparent'], correctIndex: 1, hint: 'Il ne varie pas (il reste pareil).' },
          { id: 'pl_lex5', text: 'Qu\'est-ce que faire "l\'accord dans le groupe nominal" ?', options: ['Mettre le déterminant et le nom au même nombre', 'Choisir des mots qui riment', 'Écrire sans faute'], correctIndex: 0, hint: 'Si le déterminant est pluriel, le nom l\'est aussi.' }
        ]
      },
      {
        id: 2, title: 'La règle générale', type: 'cours',
        questions: [
          { id: 'p1', text: 'En général, quelle lettre ajoute-t-on à la fin d\'un nom au pluriel ?', options: ['Un X', 'Un S', 'Un Z'], correctIndex: 1, hint: 'C\'est la lettre la plus courante pour le pluriel.' },
          { id: 'p2', text: 'Quel est le pluriel de "le chien" ?', options: ['Les chien', 'Les chiens', 'Le chiens'], correctIndex: 1, hint: 'N\'oublie pas le S et le changement du petit mot devant.' },
          { id: 'p3', text: 'Que devient le déterminant "une" au pluriel ?', options: ['Les', 'Des', 'UneS'], correctIndex: 1, hint: 'Un ou une deviennent "des".' },
          { id: 'p4', text: 'Trouve le nom correctement écrit au pluriel :', options: ['Des pomme', 'Des pommes', 'Des pommex'], correctIndex: 1, hint: 'On ajoute un S à la fin de pomme.' },
          { id: 'p5', text: 'Si un nom finit déjà par S au singulier (ex: une souris), que fait-on au pluriel ?', options: ['On ajoute un S', 'On ne change rien', 'On met un X'], correctIndex: 1, hint: 'Il ne change pas, il est déjà "habillé" pour le pluriel !' }
        ]
      },
      {
        id: 3, title: 'Application : Pratique', type: 'application',
        questions: [
          { id: 'p11', text: 'Mets au pluriel : "le tapis"', options: ['Les tapis', 'Les tapiss', 'Les tapissez'], correctIndex: 0, hint: 'Le mot finit déjà par S, il ne change pas.' },
          { id: 'p12', text: 'Trouve l\'erreur : "des gateaux, des stylos, des caillous"', options: ['gateaux', 'stylos', 'caillous'], correctIndex: 2, hint: 'Caillou fait partie des 7 exceptions en -ou qui prennent un X.' },
          { id: 'p13', text: 'Mets au pluriel : "un nez"', options: ['Des nezes', 'Des nez', 'Des nezs'], correctIndex: 1, hint: 'Les mots en S, X ou Z ne changent pas au pluriel.' },
          { id: 'p14', text: 'Complète : "Il a mangé trois ..."', options: ['pomme', 'pommes', 'pommex'], correctIndex: 1, hint: 'C\'est un pluriel simple.' },
          { id: 'p15', text: 'Mets au pluriel : "la voix"', options: ['Les voixs', 'Les voix', 'Les voiz'], correctIndex: 1, hint: 'Finit par X, donc ne change pas.' }
        ]
      },
      {
        id: 4, title: 'Application : Défis', type: 'application',
        questions: [
          { id: 'p16', text: 'Quel est le pluriel de "un animal" ?', options: ['Des animals', 'Des animaux', 'Des animalx'], correctIndex: 1, hint: 'Les mots en -al deviennent souvent -aux.' },
          { id: 'p17', text: 'Trouve le pluriel de "un travail" :', options: ['Des travails', 'Des travaus', 'Des travaux'], correctIndex: 2, hint: 'C\'est un pluriel très particulier en -aux.' },
          { id: 'p18', text: 'Lequel est mal écrit ?', options: ['Des hiboux', 'Des clous', 'Des genous'], correctIndex: 2, hint: 'Genou prend un X (bijou, caillou, chou, genou...).' },
          { id: 'p19', text: 'Quel est le pluriel de "un cheval" ?', options: ['Des chevals', 'Des chevaux', 'Des chevauxS'], correctIndex: 1, hint: 'Le passage de -al à -aux.' },
          { id: 'p20', text: 'Mets au pluriel : "un trou"', options: ['Des troux', 'Des trous', 'Des trouz'], correctIndex: 1, hint: 'Trou n\'est pas dans la liste des 7 exceptions, il prend donc un S.' }
        ]
      }
    ]
  },
  {
    id: 'fra-alpha-1',
    title: 'L\'ordre alphabétique',
    subSubjectId: 'vocabulaire',
    series: [
      {
        id: 1, title: 'Lexique de l\'ordre', type: 'cours',
        questions: [
          { id: 'alp_lex1', text: 'Qu\'est-ce que l\'ordre alphabétique ?', options: ['Le rangement des nombres', 'L\'ordre des lettres de A à Z', 'Le sens de lecture d\'une phrase'], correctIndex: 1, hint: 'C\'est l\'ordre de l\'alphabet.' },
          { id: 'alp_lex2', text: 'Comment appelle-t-on les lettres A, E, I, O, U, Y ?', options: ['Les consonnes', 'Les voyelles', 'Les majuscules'], correctIndex: 1, hint: 'Ce sont les lettres qui chantent.' },
          { id: 'alp_lex3', text: 'Qu\'est-ce qu\'une consonne ?', options: ['Une lettre qui n\'est pas une voyelle', 'Le point à la fin de la phrase', 'Un mot du dictionnaire'], correctIndex: 0, hint: 'Comme B, C, D, F, G...' },
          { id: 'alp_lex4', text: 'À quoi sert l\'ordre alphabétique ?', options: ['À faire des calculs', 'À ranger des mots dans le dictionnaire', 'À dessiner des formes'], correctIndex: 1, hint: 'Il aide à chercher des définitions.' },
          { id: 'alp_lex5', text: 'Si deux mots ont la même première lettre, que regarde-t-on ?', options: ['Le nombre de lettres', 'La deuxième lettre', 'La dernière lettre'], correctIndex: 1, hint: 'On avance lettre par lettre.' }
        ]
      },
      {
        id: 2, title: 'La première lettre', type: 'cours',
        questions: [
          { id: 'alp6', text: 'Quel mot vient en premier dans l\'alphabet ?', options: ['Zèbre', 'Avion', 'Lion'], correctIndex: 1, hint: 'Quelle lettre est au tout début ?' },
          { id: 'alp7', text: 'Quel mot vient après "Bateau" ?', options: ['Ananas', 'Canard', 'Avion'], correctIndex: 1, hint: 'Cherche une lettre après le B.' },
          { id: 'alp8', text: 'Lequel est le dernier de la liste ?', options: ['Fleur', 'Nuage', 'Soleil'], correctIndex: 2, hint: 'S est plus loin que F et N.' },
          { id: 'alp9', text: 'Range par ordre : Pomme, Banane, Cerise', options: ['Pomme, Cerise, Banane', 'Banane, Cerise, Pomme', 'Cerise, Banane, Pomme'], correctIndex: 1, hint: 'B puis C puis P.' },
          { id: 'alp10', text: 'Quelle lettre manque entre D et F ?', options: ['C', 'E', 'G'], correctIndex: 1, hint: 'A, B, C, D, ..., F.' }
        ]
      },
      {
        id: 3, title: 'La deuxième lettre', type: 'application',
        questions: [
          { id: 'alp11', text: 'Lequel vient avant "Chat" ?', options: ['Chameau', 'Chien', 'Cheval'], correctIndex: 0, hint: 'Compare la 3ème lettre : m (Chameau) vs t (Chat).' },
          { id: 'alp12', text: 'Entre "Manger" et "Mourir", quel mot peut se placer ?', options: ['Marcher', 'Mentir', 'Musique'], correctIndex: 1, hint: 'Man < Men < Mou.' },
          { id: 'alp13', text: 'Quel mot vient en premier ?', options: ['Lion', 'Livre', 'Lune'], correctIndex: 0, hint: 'Li est avant Liv et Lun.' },
          { id: 'alp14', text: 'Classe ces mots : Pont, Porte, Poule', options: ['Pont, Porte, Poule', 'Poule, Pont, Porte', 'Porte, Pont, Poule'], correctIndex: 0, hint: 'Pon (n) < Por (r) < Pou (u).' },
          { id: 'alp15', text: 'Si la 1ère et la 2ème lettre sont identiques, on regarde...', options: ['Le sens', 'La 3ème lettre', 'La longueur'], correctIndex: 1, hint: 'C\'est la règle de progression.' }
        ]
      },
      {
        id: 4, title: 'Utiliser le dictionnaire', type: 'application',
        questions: [
          { id: 'alp16', text: 'Comment sont rangés les mots dans le dictionnaire ?', options: ['Par taille', 'Par ordre alphabétique', 'Par importance'], correctIndex: 1, hint: 'C\'est pour les trouver facilement.' },
          { id: 'alp17', text: 'Qu\'est-ce qu\'un mot-repère ?', options: ['Le mot qu\'on cherche', 'Le mot en haut de page pour aider', 'La définition'], correctIndex: 1, hint: 'Il nous guide dans la page.' },
          { id: 'alp18', text: 'Où chercher le mot "Fusée" ?', options: ['Avant "Avion"', 'Entre "Fleur" et "Futur"', 'Après "Zèbre"'], correctIndex: 1, hint: 'F-l < F-u-s < F-u-t.' },
          { id: 'alp19', text: 'Pour chercher "Mangeons", on doit chercher...', options: ['Mangeons', 'Manger', 'Mangé'], correctIndex: 1, hint: 'On cherche toujours l\'infinitif.' },
          { id: 'alp20', text: 'Quel mot est avant "Soleil" ?', options: ['Soir', 'Sommeil', 'Sortie'], correctIndex: 0, hint: 'Soi < Sol.' }
        ]
      }
    ]
  },
  {
    id: 'fra-famille-1',
    title: 'Les familles de mots',
    subSubjectId: 'vocabulaire',
    series: [
      {
        id: 1, title: 'Lexique de la construction', type: 'cours',
        questions: [
          { id: 'fam_lex1', text: 'Qu\'est-ce qu\'une famille de mots ?', options: ['Des mots qui se ressemblent mais n\'ont pas le même sens', 'Des mots construits sur le même radical et qui partagent le même sens', 'Une liste de verbes'], correctIndex: 1, hint: 'Ils ont un "ancêtre" commun et racontent la même chose.' },
          { id: 'fam_lex2', text: 'Qu\'est-ce que le radical d\'un mot ?', options: ['La partie du mot qui ne change pas et porte le sens', 'La fin du mot', 'Le point final'], correctIndex: 0, hint: 'C\'est la racine du mot.' },
          { id: 'fam_lex3', text: 'Qu\'est-ce qu\'un suffixe ?', options: ['Un élément ajouté après le radical pour former un nouveau mot', 'Un petit mot devant le radical', 'Une lettre majuscule'], correctIndex: 0, hint: 'On le place à la fin (ex: jardiniER).' },
          { id: 'fam_lex4', text: 'Qu\'est-ce qu\'un préfixe ?', options: ['Un élément ajouté avant le radical (ex: RE-jouer)', 'Le sens du mot', 'La ponctuation'], correctIndex: 0, hint: 'Pré veut dire "avant".' },
          { id: 'fam_lex5', text: 'Comment appelle-t-on un mot créé à partir d\'un autre ?', options: ['Un mot dérivé', 'Un mot original', 'Un mot simple'], correctIndex: 0, hint: 'Il dérive de la racine.' }
        ]
      },
      {
        id: 2, title: 'Identifier le radical', type: 'cours',
        questions: [
          { id: 'fam6', text: 'Quel est le radical commun de : dent, dentiste, dentifrice ?', options: ['den', 'dent', 'tiste'], correctIndex: 1, hint: 'C\'est la partie que tu retrouves partout.' },
          { id: 'fam7', text: 'Lequel n\'est pas de la famille de "mer" ?', options: ['marin', 'marée', 'mairie'], correctIndex: 2, hint: 'Le sens doit être lié à l\'océan.' },
          { id: 'fam8', text: 'Trouve le radical de "terrier" et "terrain" :', options: ['terr', 'rier', 'ain'], correctIndex: 0, hint: 'Cela vient du mot "terre".' },
          { id: 'fam9', text: 'Quel mot appartient à la famille de "fleur" ?', options: ['fleuve', 'fleuriste', 'flèche'], correctIndex: 1, hint: 'C\'est celui qui parle de fleurs.' },
          { id: 'fam10', text: 'Deux mots sont de la même famille s\'ils ont...', options: ['Le même nombre de lettres', 'Le même radical et un sens commun', 'La même couleur'], correctIndex: 1, hint: 'C\'est la règle d\'or.' }
        ]
      },
      {
        id: 3, title: 'La ferme vs Fermer', type: 'application',
        questions: [
          { id: 'fam11', text: 'Quel mot appartient à la famille de "ferme" (le lieu) ?', options: ['Fermeture', 'Fermier', 'Refermer'], correctIndex: 1, hint: 'C\'est celui qui travaille à la ferme.' },
          { id: 'fam12', text: 'Quel mot appartient à la famille de "fermer" (l\'action) ?', options: ['Fermette', 'Fermière', 'Fermeture'], correctIndex: 2, hint: 'C\'est l\'action de clore quelque chose.' },
          { id: 'fam13', text: 'Trouve l\'intrus de la famille "fermer" :', options: ['Enfermer', 'Fermette', 'Refermer'], correctIndex: 1, hint: 'La fermette est une petite maison de ferme.' },
          { id: 'fam14', text: 'Une "fermette" est un mot de la famille de :', options: ['fermer la porte', 'la ferme des animaux', 'le fer à repasser'], correctIndex: 1, hint: 'C\'est une petite ferme.' },
          { id: 'fam15', text: 'Identifie le verbe de la famille de "ferme" (le lieu) :', options: ['S\'enfermer', 'Refermer', 'Fermer (les animaux)'], correctIndex: 2, hint: 'Ici on parle de l\'activité agricole.' }
        ]
      },
      {
        id: 4, title: 'Défis de familles', type: 'application',
        questions: [
          { id: 'fam16', text: 'Trouve l\'intrus : long, longueur, longer, longe.', options: ['longueur', 'longer', 'longe'], correctIndex: 2, hint: 'Une longe est une corde, le sens est différent.' },
          { id: 'fam17', text: 'Crée un mot de la famille de "vent" :', options: ['vendre', 'ventiler', 'venir'], correctIndex: 1, hint: 'C\'est l\'action de faire du vent.' },
          { id: 'fam18', text: 'Quel est le mot de base de "camionneur" ?', options: ['camion', 'camionnette', 'camionner'], correctIndex: 0, hint: 'C\'est le mot le plus simple.' },
          { id: 'fam19', text: 'Quelle liste est une vraie famille ?', options: ['main, maintenant, mairie', 'soleil, ensoleillé, parasol', 'chat, château, chapeau'], correctIndex: 1, hint: 'Le radical sol/soleil et le sens de l\'astre sont présents.' },
          { id: 'fam20', text: 'Identifie le suffixe dans "fermeture" :', options: ['ferm', 'ferme', '-ture'], correctIndex: 2, hint: 'C\'est la partie ajoutée à la fin.' }
        ]
      }
    ]
  },
  {
    id: 'fra-categories-1',
    title: 'Les catégories de mots',
    subSubjectId: 'vocabulaire',
    series: [
      {
        id: 1, title: 'Lexique des catégories', type: 'cours',
        questions: [
          { id: 'cat_lex1', text: 'Qu\'est-ce qu\'une catégorie de mots ?', options: ['Un rangement de mots qui partagent des points communs', 'Une liste de courses', 'Le titre d\'un livre'], correctIndex: 0, hint: 'C\'est comme ranger ses vêtements par types (pantalons, pulls...).' },
          { id: 'cat_lex2', text: 'Qu\'est-ce qu\'un synonyme ?', options: ['Un mot qui veut dire le contraire', 'Un mot qui a presque le même sens', 'Un mot qui s\'écrit pareil'], correctIndex: 1, hint: 'Exemple : beau et joli.' },
          { id: 'cat_lex3', text: 'Qu\'est-ce qu\'un antonyme ?', options: ['Un mot qui veut dire la même chose', 'Un mot de sens contraire (opposé)', 'Un mot très long'], correctIndex: 1, hint: 'Exemple : grand et petit.' },
          { id: 'cat_lex4', text: 'Qu\'est-ce qu\'un mot-étiquette (mot générique) ?', options: ['Un mot qui nomme toute une catégorie (ex: fruits)', 'Une étiquette sur un bocal', 'Le premier mot d\'un dictionnaire'], correctIndex: 0, hint: 'Il englobe plusieurs objets précis.' },
          { id: 'cat_lex5', text: 'Pourquoi utilise-t-on des synonymes ?', options: ['Pour écrire plus vite', 'Pour éviter les répétitions et enrichir son texte', 'Pour faire des fautes'], correctIndex: 1, hint: 'C\'est pour ne pas toujours dire le même mot.' }
        ]
      },
      {
        id: 2, title: 'Synonymes et Contraires', type: 'application',
        questions: [
          { id: 'cat6', text: 'Quel est le synonyme de "heureux" ?', options: ['Triste', 'Content', 'Fatigué'], correctIndex: 1, hint: 'C\'est le même sentiment.' },
          { id: 'cat7', text: 'Quel est le contraire (antonyme) de "rapide" ?', options: ['Vite', 'Lent', 'Pressé'], correctIndex: 1, hint: 'C\'est l\'opposé.' },
          { id: 'cat8', text: 'Trouve le synonyme de "maison" :', options: ['Habitation', 'Voiture', 'Jardin'], correctIndex: 0, hint: 'Un autre mot pour dire où l\'on vit.' },
          { id: 'cat9', text: 'Quel est l\'antonyme de "froid" ?', options: ['Glace', 'Chaud', 'Frais'], correctIndex: 1, hint: 'L\'inverse de la température basse.' },
          { id: 'cat10', text: 'Lequel est un synonyme de "terminer" ?', options: ['Commencer', 'Finir', 'Partir'], correctIndex: 1, hint: 'C\'est arriver au bout.' }
        ]
      },
      {
        id: 3, title: 'Les mots-étiquettes', type: 'application',
        questions: [
          { id: 'cat11', text: 'Quel est le mot-étiquette pour : pomme, poire, banane ?', options: ['Légumes', 'Fruits', 'Animaux'], correctIndex: 1, hint: 'Ce sont des choses que l\'on mange au dessert.' },
          { id: 'cat12', text: 'Trouve le mot-étiquette de : chaise, table, armoire.', options: ['Meubles', 'Outils', 'Vêtements'], correctIndex: 0, hint: 'Ils servent à aménager une maison.' },
          { id: 'cat13', text: 'Lequel n\'appartient pas à la catégorie "Animaux" ?', options: ['Chien', 'Tulipe', 'Cheval'], correctIndex: 1, hint: 'L\'un des trois est une fleur.' },
          { id: 'cat14', text: 'Quel mot-étiquette convient pour : marteau, scie, tournevis ?', options: ['Jeux', 'Outils', 'Habits'], correctIndex: 1, hint: 'Ils servent à bricoler.' },
          { id: 'cat15', text: 'Mets un mot-étiquette sur : Paris, Lyon, Marseille.', options: ['Pays', 'Villes', 'Fleuves'], correctIndex: 1, hint: 'Ce sont de grands lieux en France.' }
        ]
      },
      {
        id: 4, title: 'Pratique et Défis', type: 'application',
        questions: [
          { id: 'cat16', text: 'Remplace "petit" par un synonyme dans : "Un petit chat."', options: ['Grand', 'Minuscule', 'Énorme'], correctIndex: 1, hint: 'Il doit garder le même sens.' },
          { id: 'cat17', text: 'Quel est l\'intrus ? (mots de sens voisin)', options: ['Crier', 'Hurler', 'Chuchoter'], correctIndex: 2, hint: 'Deux mots sont forts, l\'un est tout doux.' },
          { id: 'cat18', text: 'Associe le contraire : "Monter" / ...', options: ['Descendre', 'Grimper', 'Sauter'], correctIndex: 0, hint: 'C\'est l\'action inverse.' },
          { id: 'cat19', text: 'Trouve le mot générique pour : rouge, bleu, vert.', options: ['Formes', 'Couleurs', 'Nombres'], correctIndex: 1, hint: 'C\'est ce qu\'on utilise pour peindre.' },
          { id: 'cat20', text: 'Lequel est un antonyme de "allumer" ?', options: ['Éteindre', 'Éclairer', 'Brûler'], correctIndex: 0, hint: 'L\'inverse de mettre la lumière.' }
        ]
      }
    ]
  },
  {
    id: 'fra-sens-1',
    title: 'Les différents sens d\'un mot',
    subSubjectId: 'vocabulaire',
    series: [
      {
        id: 1, title: 'Lexique du sens', type: 'cours',
        questions: [
          { id: 'sens_lex1', text: 'Comment appelle-t-on un mot qui a plusieurs sens ?', options: ['Un mot polygone', 'Un mot polysémique', 'Un mot pluriel'], correctIndex: 1, hint: 'Poly veut dire "plusieurs" et sémie "sens".' },
          { id: 'sens_lex2', text: 'Qu\'est-ce qui nous aide à trouver le bon sens dans une phrase ?', options: ['La taille des lettres', 'Le contexte (les mots autour)', 'La couleur de la page'], correctIndex: 1, hint: 'Il faut regarder l\'histoire racontée par la phrase.' },
          { id: 'sens_lex3', text: 'Où peut-on vérifier tous les sens d\'un mot ?', options: ['Dans le dictionnaire', 'Dans un livre de maths', 'Sur une affiche de cinéma'], correctIndex: 0, hint: 'C\'est l\'outil qui explique les mots.' },
          { id: 'sens_lex4', text: 'Comment sont numérotés les sens dans le dictionnaire ?', options: ['Par des lettres (A, B, C)', 'Par des chiffres (1, 2, 3...)', 'Ils ne sont pas numérotés'], correctIndex: 1, hint: 'Cela aide à séparer chaque définition.' },
          { id: 'sens_lex5', text: 'Qu\'est-ce qu\'une définition ?', options: ['Le titre du livre', 'Le texte qui explique le sens d\'un mot', 'Le nom de l\'auteur'], correctIndex: 1, hint: 'Chaque sens a sa propre explication.' }
        ]
      },
      {
        id: 2, title: 'Identifier les sens', type: 'cours',
        questions: [
          { id: 'sens6', text: 'Que signifie bouton dans : "Le bouton de ma chemise" ?', options: ['Une rougeur sur la peau', 'Un petit objet pour fermer', 'Un bouton de fleur'], correctIndex: 1, hint: 'C\'est lié aux vêtements.' },
          { id: 'sens7', text: 'Que signifie glace dans : "Je mange une glace" ?', options: ['Un miroir', 'De l\'eau gelée', 'Un dessert froid'], correctIndex: 2, hint: 'C\'est quelque chose qui se mange.' },
          { id: 'sens8', text: 'Que signifie vol dans : "Le vol de l\'oiseau" ?', options: ['Le fait de voler un objet', 'Le déplacement dans l\'air', 'Le nom d\'un avion'], correctIndex: 1, hint: 'C\'est l\'action de l\'oiseau.' },
          { id: 'sens9', text: 'Que signifie carte dans : "La carte du restaurant" ?', options: ['Une carte pour jouer', 'Une carte du monde', 'La liste des plats'], correctIndex: 2, hint: 'C\'est ce qu\'on lit pour choisir à manger.' },
          { id: 'sens10', text: 'Que signifie plat dans : "Un plat de pâtes" ?', options: ['Une assiette remplie', 'Le contraire de montagne', 'Une surface lisse'], correctIndex: 0, hint: 'C\'est lié à la cuisine.' }
        ]
      },
      {
        id: 3, title: 'Le sens selon le contexte', type: 'application',
        questions: [
          { id: 'sens11', text: 'Dans "La pièce de théâtre", que veut dire pièce ?', options: ['Une monnaie', 'Un spectacle', 'Une chambre'], correctIndex: 1, hint: 'On va au théâtre pour voir...' },
          { id: 'sens12', text: 'Dans "Une pièce de 2 euros", que veut dire pièce ?', options: ['Une monnaie', 'Un spectacle', 'Une chambre'], correctIndex: 0, hint: 'C\'est pour payer.' },
          { id: 'sens13', text: 'Dans "Une pièce de la maison", que veut dire pièce ?', options: ['Une monnaie', 'Un spectacle', 'Une salle (salon, chambre...)'], correctIndex: 2, hint: 'C\'est une partie de l\'habitation.' },
          { id: 'sens14', text: 'Quel sens pour "voler" dans : "Le voleur vole un sac" ?', options: ['Se déplacer dans l\'air', 'Dérober / prendre sans permission', 'Aller très vite'], correctIndex: 1, hint: 'C\'est une mauvaise action.' },
          { id: 'sens15', text: 'Quel sens pour "avocat" dans : "Je mange un avocat" ?', options: ['Un métier de justice', 'Un fruit', 'Un légume vert'], correctIndex: 1, hint: 'On parle de nourriture.' }
        ]
      },
      {
        id: 4, title: 'Défis et nuances', type: 'application',
        questions: [
          { id: 'sens16', text: '"Une feuille de papier" et "Une feuille d\'arbre" : est-ce le même mot ?', options: ['Oui, mais avec deux sens différents', 'Non, ce sont des mots différents', 'On ne sait pas'], correctIndex: 0, hint: 'C\'est le mot "feuille" qui est polysémique.' },
          { id: 'sens17', text: 'Lequel peut désigner un fruit ET un métier ?', options: ['Tomate', 'Avocat', 'Pompier'], correctIndex: 1, hint: 'Il défend les gens ou se mange en salade.' },
          { id: 'sens18', text: 'Quel mot peut désigner une monnaie ET une partie du corps ?', options: ['Billet', 'Joube', 'Plante'], correctIndex: 2, hint: 'Pense à la "plante des pieds". (Ou "Liquide"?) Utilisons "Liquide": Eau / Argent. Ou "Billet": Papier / Voyage. Prenons "Plante".' },
          { id: 'sens19', text: 'Dans "Il fait une opération de maths", quel est l\'intrus de sens ?', options: ['Calcul', 'Addition', 'Chirurgie'], correctIndex: 2, hint: 'La chirurgie est une opération à l\'hôpital.' },
          { id: 'sens20', text: 'Comment appelle-t-on le sens le plus habituel d\'un mot ?', options: ['Le sens propre', 'Le sens figuré', 'Le sens interdit'], correctIndex: 0, hint: 'C\'est le sens premier, réel.' }
        ]
      }
    ]
  },
  {
    id: 'mat-num-1',
    title: 'Les nombres jusqu\'à 1000',
    subSubjectId: 'numeration',
    series: [
      {
        id: 1, title: 'Le lexique du nombre', type: 'cours',
        questions: [
          { id: 'm_lex1', text: 'Qu\'est-ce qu\'un chiffre ?', options: ['Un signe de 0 à 9 pour écrire les nombres', 'Une grande quantité', 'Le résultat d\'un calcul'], correctIndex: 0, hint: 'C\'est comme une lettre pour les mots.' },
          { id: 'm_lex2', text: 'Qu\'est-ce qu\'un nombre ?', options: ['Une seule lettre', 'Une quantité formée de chiffres', 'Un outil de géométrie'], correctIndex: 1, hint: 'C\'est comme un mot formé de chiffres.' },
          { id: 'm_lex3', text: 'Qu\'est-ce qu\'une dizaine ?', options: ['Un paquet de 1 unité', 'Un paquet de 10 unités', 'Un paquet de 100 unités'], correctIndex: 1, hint: 'Pense au mot "dix".' },
          { id: 'm_lex4', text: 'Qu\'est-ce qu\'une centaine ?', options: ['Un paquet de 10 unités', 'Un paquet de 10 dizaines (100 unités)', 'Un chiffre romain'], correctIndex: 1, hint: 'Pense au mot "cent".' },
          { id: 'm_lex5', text: 'Qu\'est-ce que "décomposer" un nombre ?', options: ['L\'effacer du tableau', 'Le séparer en centaines, dizaines et unités', 'Le multiplier par deux'], correctIndex: 1, hint: 'C\'est le mettre en morceaux.' }
        ]
      },
      {
        id: 2, title: 'Unités, dizaines, centaines', type: 'cours',
        questions: [
          { id: 'm1', text: 'Dans 245, quel est le chiffre des dizaines ?', options: ['2', '4', '5'], correctIndex: 1, hint: 'Centaines-Dizaines-Unités.' },
          { id: 'm2', text: 'Combien d\'unités y a-t-il dans une dizaine ?', options: ['1', '10', '100'], correctIndex: 1, hint: 'Compte tes doigts.' },
          { id: 'm3', text: 'Combien de dizaines y a-t-il dans une centaine ?', options: ['1', '10', '100'], correctIndex: 1, hint: '10 x 10 = 100.' },
          { id: 'm4', text: 'Dans 708, que représente le 0 ?', options: ['Unités', 'Dizaines', 'Centaines'], correctIndex: 1, hint: 'C\'est le chiffre du milieu.' },
          { id: 'm5', text: 'Comment écrit-on "trois cent cinq" ?', options: ['35', '350', '305'], correctIndex: 2, hint: 'Attention au zéro des dizaines.' }
        ]
      },
      {
        id: 3, title: 'Application : Décomposer', type: 'application',
        questions: [
          { id: 'm11', text: 'Décompose 672 :', options: ['600 + 70 + 2', '60 + 70 + 2', '600 + 7 + 2'], correctIndex: 0, hint: 'Sépare les centaines, dizaines et unités.' },
          { id: 'm12', text: '9 centaines et 4 unités, c\'est...', options: ['94', '940', '904'], correctIndex: 2, hint: 'Il n\'y a pas de dizaines.' },
          { id: 'm13', text: 'Lequel est égal à 15 dizaines ?', options: ['15', '150', '105'], correctIndex: 1, hint: '15 x 10.' },
          { id: 'm14', text: 'Trouve l\'intrus :', options: ['200 + 30 + 5', '235', '200 + 350'], correctIndex: 2, hint: 'Calcule chaque somme.' },
          { id: 'm15', text: '5 dizaines et 8 unités, c\'est...', options: ['58', '85', '508'], correctIndex: 0, hint: 'Dizaines puis unités.' }
        ]
      },
      {
        id: 4, title: 'Application : Suites', type: 'application',
        questions: [
          { id: 'm16', text: 'Continue : 100, 200, 300, ...', options: ['301', '400', '1000'], correctIndex: 1, hint: 'On ajoute 100 à chaque fois.' },
          { id: 'm17', text: 'Continue : 150, 160, 170, ...', options: ['180', '171', '200'], correctIndex: 0, hint: 'On ajoute 10 à chaque fois.' },
          { id: 'm18', text: 'Lequel est entre 450 et 460 ?', options: ['449', '455', '461'], correctIndex: 1, hint: 'C\'est au milieu.' },
          { id: 'm19', text: 'Quel nombre manque : 898, ..., 900 ?', options: ['897', '899', '901'], correctIndex: 1, hint: 'C\'est juste avant 900.' },
          { id: 'm20', text: 'Compare : 700 + 20 ... 702', options: ['<', '>', '='], correctIndex: 1, hint: '720 contre 702.' }
        ]
      }
    ]
  }
];
