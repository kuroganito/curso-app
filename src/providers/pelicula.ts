import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IPelicula {
    titulo: string;
    imagen: string;
    calificacion: number;
    sinopsis: string;
}

 interface IPeliculaService {
    obtenerPeliculas(): Array<IPelicula>
}

@Injectable()
export class PeliculaService implements IPeliculaService {
    constructor() {}

    obtenerPeliculas(): Array<IPelicula> {
        let peliculas: Array<IPelicula>;
        peliculas = [{
            titulo: "xXx: Reactivado",
            imagen: "assets/p1.jpg",
            calificacion: 4,
            sinopsis: "Lo bueno, lo extremo y lo completamente desquiciado... Esto es xXx."
        },
        {
            titulo: "Un Monstruo Viene a Verme",
           imagen: "assets/p2.jpg",
            calificacion: 4,
            sinopsis: "Tras la separación de sus padres, Connor, un chico de 12 años, tendrá que ocuparse de llevar las riendas de la casa, pues su madre tiene cáncer. El niño intentará superar sus miedos y fobias con la ayuda de un monstruo, pero sus fantasías tendrán que enfrentarse no sólo con la realidad, sino con su fría y calculadora abuela."
        },
        {
            titulo: "Perdidos",
            imagen: "assets/p3.jpg",
            calificacion: 2,
            sinopsis: "En 2012, cuatro estudiantes de cine desaparecieron misteriosamente mientras realizaban un documental en un edificio abandonado en el centro de la Ciudad de México. Este es el material recuperado de la filmación"
        },
        {
            titulo: "Acapulco, la vida va",
            imagen: "assets/p4.jpg",
            calificacion: 0,
            sinopsis: "Tres setentotes deciden ir a Acapulco como lo hacían 50 años atrás. Antolín, felizmente casado, es hipocondriaco y lleva una maleta llena de medicamentos; Justo, es un solterón empedernido que anda detrás de jovencitas todo el tiempo, y Mariano, un arquitecto exitoso ya retirado, que va en busca de Carmen, la acapulqueña de la que siempre vivido enamorado, pero lleva una pistola y tres balas en su equipaje."
        },
        {
            titulo: "La la land: Una Historia de Amor",
            imagen: "assets/p5.jpg",
            calificacion: 5,
            sinopsis: "Narra un tempestuoso romance, desde el tierno comienzo del amor juvenil hasta los sacrificios de una gran ambición. Dos jóvenes soñadores luchan por perseguir sus sueños en una ciudad conocida por destruir esperanzas y romper corazones. Mia, una aspirante a actriz, sirve café a estrellas de cine y Sebastián, un músico de jazz se gana la vida tocando en sucios bares. Tras algunos encuentros inesperados, las chispas entre Mia y Sebastián estallan. Pero la lucha por conseguir lo que quieren amenaza con separarlos."
        },
        {
            titulo: "Resident Evil: Capítulo Final",
            imagen: "assets/p6.jpg",
            calificacion: 5,
            sinopsis: "La humanidad está agonizando tras la traición sufrida por Alice a manos de Wesker. Alice deberá regresar a donde la comenzó la pesadilla -Raccoon City-, ya que allí la Corporación Umbrella está reuniendo fuerzas antes de un último ataque a los últimos supervivientes del apocalipsis. En una carrera contra el tiempo, Alice tendrá que unir fuerzas con viejos y con un inesperado aliado en una batalla contra hordas de zombis y nuevos monstruos mutantes. Será la aventura más difícil de Alice para salvar a la humanidad, que está al borde de la extinción."
        },
        {
            titulo: "La Razón de Estar Contigo",
            imagen: "assets/p7.jpg",
            calificacion: 5,
            sinopsis: "Un perro intenta descubrir su propósito en la vida a medida que va pasando por distintos dueños."
        },
        {
            titulo: "Sing: ¡Ven Y Canta!",
            imagen: "assets/p8.jpg",
            calificacion: 4,
            sinopsis: "Situada en un mundo como el nuestro, pero habitada totalmente por animales, SING ¡Ven y canta! Es protagonizada por Buster Moon, un koala quien está al frente del que alguna vez fuera uno de los teatros más importantes de la ciudad, pero que actualmente pasa por tiempos difíciles. Buster es un eterno optimista, bueno quizás hasta un poco sinvergüenza, pero ama tanto a su teatro que hará hasta lo imposible por conservarlo. Poco a poco ve como su sueño se desmorona, y es ahí cuando tiene la idea de revivir la gloria de su teatro a través del más grande concurso de canto del mundo."
        },
        {
            titulo: "El Tamaño Sí Importa",
            imagen: "assets/p9.jpg",
            calificacion: 1,
            sinopsis: "Una típica joven promedio alejada de los estándares de belleza establecidos por los medios de comunicación, intentará conquistar a su exjefe, un apuesto y carismático socialité que está acostumbrado a relacionarse con bellas actrices y modelos. Una historia de amor disparejo e impredecible."
        },
        {
            titulo: "Monster Trucks",
            imagen: "assets/p10.jpg",
            calificacion: 3,
            sinopsis: "Basada en la línea de juguetes de Hasbro, esta adaptación ha sido descrita como un cruce entre Los Goonies y Transformers."
            }
        ];
        return peliculas;
    }


}
