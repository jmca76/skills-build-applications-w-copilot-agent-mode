"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const apiUrl_1 = require("./config/apiUrl");
const database_1 = require("./config/database");
const api_1 = require("./routes/api");
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8000;
app.use(express_1.default.json());
app.use('/api', api_1.apiRouter);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl: apiUrl_1.apiBaseUrl });
});
app.use((error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
});
const startServer = async () => {
    try {
        await mongoose_1.default.connect(database_1.mongoUri);
        console.log(`MongoDB connected: ${database_1.mongoUri}`);
    }
    catch (error) {
        console.warn('MongoDB connection failed; API will still start.');
        console.warn(error);
    }
    app.listen(port, () => {
        console.log(`Backend API running on port ${port}`);
        console.log(`Backend API base URL: ${apiUrl_1.apiBaseUrl}`);
    });
};
void startServer();
//# sourceMappingURL=index.js.map