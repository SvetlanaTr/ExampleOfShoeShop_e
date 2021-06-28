import Router from 'express';
import { Controller, ResponseObj } from './controller';

const router = Router();
const controller = new Controller();

router.get('/api/sneakers', async(req, res) => {
  const response: ResponseObj = await controller.getAllItems();

  res.status(response.statusCode).send(response.result);
});

router.get('/api/sneakers/:page', async(req, res) => {
  const response: ResponseObj = await controller.getItems(req.params.page);

  res.status(response.statusCode).send(response.result);
});

router.get('/api/sneakers/check/:_page', async(req, res) => {
  const exists: boolean = controller.checkIfPageExists(req.params._page);

  res.status(200).send({ 'exists': exists });
});

export { router };
