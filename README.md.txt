# Escenas Bases en Phaser 3
## Tutorial creado por Ms Bot SAS 

Las escenas en Phaser 3 nos permiten manejar los distintos niveles, pantallas al usuario y cualquier cambio relevante en la lógica del videojuego hecho en phaser 3.

Los pasos de creación son los siguientes:

- Crear un archivo Index Html que se enlacen tantos los scripts de phaser (npm) como las escenas (clases)
- Se crea una clase de tipo escena con class [Nombre de la Escena] extends Phaser.Scene
- Recuerda que la escena debe tener los métodos preload(), create(), update(time,delta)
- puedes crear una alerta o un console.log() para identificar que las escenas hayan sido creadas correctamente
- Se debe instanciar la escena dentro de la configuración inicial de Phaser por medio de un arreglo en JS scene: []

 # Notas

Recuerda que las escenas pueden cambiar en el tiempo, acá te muestro un poco cómo pueden verse las instancias dentro de Html
> <script src="./node_modules/phaser/dist/phaser.js"> </script>
> <script src="./js/sceneA1.js"></script>
> <script src="./js/inicio.js"></script>


La constante de configuración del juego (que inicia la creación de un objeto new Phaser.Game(config)) puede lucir similar a la siguiente sección:

> const config ={
>	width:800,
> 	height:600,
> 	parent:"container",
> 	type: Phaser.AUTO,
> 	backgroundColor: "#392542",
> 	physics: {
>         default: 'arcade',
>         arcade: { debug: true }
>     },
> 	scene:[SceneA1]
> }

Y la creación de la clase objeto debe lucir similar a la siguiente sección:

> class SceneA1 extends Phaser.Scene{
>constructor(){ super({key:"SceneA1"}); }
> preload(){}
> create(){}
> update(time,delta){}
>}


## Tech

Este tutorial utiliza las siguientes tecnologías:

- [Phaser 3] - Crear videojuegos para Html!
- [Node JS] - awesome web-based text editor



   [Phaser 3]: <https://phaser.io/phaser3>
   [Node JS]: <https://nodejs.org/es/>

