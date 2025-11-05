import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir:
// router.get('/', userController.index); // Lista Usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * Regra dos Nomes dos métodos para controllers :
 * index ->  lista todos usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga  um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH(altera um único valor) ou PUT(Altera objeto inteiro)
 *
 */
