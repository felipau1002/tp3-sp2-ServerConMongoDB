import { buscarSuperheroesPorID, buscarSuperheroesPorAtributo, obtenerTodosLosSuperheroes, buscarSuperheroesMayoresA30 } from "../services/superHeroServices.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";


export async function buscarSuperheroesPorIDController(req, res) {
    try {
        const {id} = req.params;
        const superheroe = await buscarSuperheroesPorID(id);
        if(!superheroe) {
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    }   catch (error) {
        res.status(500).send({mensaje: 'Error al obtener el superheroe', error: error.message});
    }
}


export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroes no encontrados', error: error.message});
    }
}


export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send( {mensaje: 'no se encontraron superheroes con ese atributo'} );
        }


        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }   catch (error) {
        res.status(500).send( {mensaje: 'error al buscar los superheroes', error} );
    }
}


export async function obtenerSuperheroesMayoresA30Controller(req, res) {
    try {
        const superheroes = await buscarSuperheroesMayoresA30();
        if(superheroes.length === 0) {
            return res.status(404).send({mensaje: 'No se encontraron superheroes mayores a 30'});
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }   catch (error) {
        res.status(500).send({mensaje: 'Error al obtener superheroes mayores a 30', error});
    }
}