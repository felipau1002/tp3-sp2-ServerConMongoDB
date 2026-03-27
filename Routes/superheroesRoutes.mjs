import express from 'express';
import { obtenerSuperheroesMayoresA30Controller, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, buscarSuperheroesPorIDController } from '../controllers/superHeroController.mjs';


const router = express.Router();


router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/edad/mayoresA30', obtenerSuperheroesMayoresA30Controller);
router.get('/heroes/atributos/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/:id', buscarSuperheroesPorIDController);


export default router;