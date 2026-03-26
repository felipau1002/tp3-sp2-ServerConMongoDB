import SuperHeroRepository from "../Repository/superHeroRepository.mjs";


export async function buscarSuperheroesPorID(id) {
    return await SuperHeroRepository.obtenerPorID(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function buscarSuperheroesMayoresA30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}