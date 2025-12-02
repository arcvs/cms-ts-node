"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/api/items', itemRoutes_1.default);
// Global error handler (should be after routes)
app.use(errorHandler_1.errorHandler);
exports.default = app;
