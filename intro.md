- node -v : version de node


- npm create vite@latest : création du projet

- npm i : installe les dépendances

- npm run 

    - npm run dev : lance le projet


- UN Composant est une fonction javascript qui renvoie du JSX

- Dans une fonction react il est possible de : 
    - déclarer : 
                - des variables
                - des fonctions
    - appeler : 
                - un composant 


- par défaut la page ne sera rendu qu'une fois 
    - react utilise un DOM virtuel qui permet de modifier le contenu du DOM 

    - pour voir une valeur changer pendant l'execution on utilise les Hooks : 
    useState(value) : 
        - const [valeur , modificateur] = useState(defaut)


- le Style peut être global ( index.css ) ou propre à un composant ( inline ou objet style) 