"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getItems = exports.createItem = void 0;
const item_1 = require("../models/item");
// Create an item
const createItem = (req, res, next) => {
    try {
        const { name } = req.body;
        const newItem = { id: Date.now(), name };
        item_1.items.push(newItem);
        res.status(201).json(newItem);
    }
    catch (error) {
        next(error);
    }
};
exports.createItem = createItem;
// Read all items
const getItems = (req, res, next) => {
    try {
        res.json(item_1.items);
    }
    catch (error) {
        next(error);
    }
};
exports.getItems = getItems;
// Read single item
const getItemById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const item = item_1.items.find((i) => i.id === id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        res.json(item);
    }
    catch (error) {
        next(error);
    }
};
exports.getItemById = getItemById;
// Update an item
const updateItem = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name } = req.body;
        const itemIndex = item_1.items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        item_1.items[itemIndex].name = name;
        res.json(item_1.items[itemIndex]);
    }
    catch (error) {
        next(error);
    }
};
exports.updateItem = updateItem;
// Delete an item
const deleteItem = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const itemIndex = item_1.items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        const deletedItem = item_1.items.splice(itemIndex, 1)[0];
        res.json(deletedItem);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteItem = deleteItem;
