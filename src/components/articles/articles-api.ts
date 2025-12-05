import { NextFunction, Request, Response, Router } from 'express';
import {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem
} from './articles-controller';

const router = Router();

router.get('/', getItems);
// router.get('/:id', getItemById);

router.get('/:id', (req, res, next) => handlerRequest);


router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


export default router;

type ArticleDtoApi = {
  id: string;
}

const CRUD = {
  create: (params: ArticleDtoApi, cb: void) => { console.log('create'); },
  delete: () => { console.log('deleteItem'); }
}


type article = {
  id: number,
  name: string
}

function handlerRequest(req: Request, res: Response, next: NextFunction) {
  try {
    // res.status(404).json({ message: 'Item not found' });
    res.json(controller());
  } catch (error) {
    next(error);
  }
}

function controller(params?: article[]) {
  const item: article = { id: 1, name: 'John1' }
  console.log(item);
  return item
}