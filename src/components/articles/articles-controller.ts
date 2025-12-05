import express, { Request, Response, NextFunction } from 'express';
// import { items, Item } from '../../models/item';

import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
// import * as handlerRequest from "../services/handlerRequest"

import { Article } from './articles-dal';

const article = new Article();

// export const getTestPage = (req: Request, res: Response, next: NextFunction) => {
//   res.send(handlerRequest.readItem('readItem'))
// }

// Get index page
export const getIndexPage = (req: Request, res: Response, next: NextFunction) => {

  try {

    // console.log(handlerRequest.createItem('createItem'));
    // console.log(handlerRequest.updateItem('updateItem'));
    // console.log(handlerRequest.deleteItem('deleteItem'));
    // console.log(handlerRequest.readItem('readItem'));

    const app = createSSRApp({
      data: () => ({ count: 1 }),
      template: `<button @click="count++">{{ count }}</button>`,
    });

    renderToString(app).then((html) => {
      res.send(`
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>Vue SSR Example</title>
                  </head>
                  <body>
                    <div id="app">${html}</div>
                  </body>
                </html>
            `);
    });
  } catch (error) {
    next(error);
  }
};

// Create an item
export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {

    // console.log(req.body);
    // console.log(req.params);
    // console.log(req.query);

    const { name } = req.body;

    const newItem = article.create({ id: Date.now(), name })


    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

// Read all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.json(article.read());
  } catch (error) {
    next(error);
  }
};

// Read single item
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    const {qwe} = req.query;
    console.log(qwe);


    const id = parseInt(req.params.id, 10);
    const item = article.read().find((i) => i.id === id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    console.log(item);
    res.json(item);
    // res.json(article.read());
  } catch (error) {
    next(error);
  }
};

// Update an item
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    // const id = parseInt(req.params.id, 10);
    // const { name } = req.body;
    // const itemIndex = items.findIndex((i) => i.id === id);
    // if (itemIndex === -1) {
    //   res.status(404).json({ message: 'Item not found' });
    //   return;
    // }
    // items[itemIndex].name = name;
    // res.json(items[itemIndex]);
    res.json(article.read());
  } catch (error) {
    next(error);
  }
};

// Delete an item
export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    // const id = parseInt(req.params.id, 10);
    // const itemIndex = items.findIndex((i) => i.id === id);
    // if (itemIndex === -1) {
    //   res.status(404).json({ message: 'Item not found' });
    //   return;
    // }
    // const deletedItem = items.splice(itemIndex, 1)[0];
    // res.json(deletedItem);

    res.json(article.read());
  } catch (error) {
    next(error);
  }
};