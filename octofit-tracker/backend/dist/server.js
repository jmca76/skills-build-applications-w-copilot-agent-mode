"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.port = exports.app = exports.apiBaseUrl = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const api_1 = require("./routes/api");
const codespaceName = process.env.CODESPACE_NAME;
exports.apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
exports.app = (0, express_1.default)();
exports.port = Number(process.env.PORT) || 8000;
exports.app.use(express_1.default.json());
exports.app.use('/api', api_1.apiRouter);
exports.app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl: exports.apiBaseUrl });
});
exports.app.use((error, _request, response, _next) => {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
});
const startServer = async () => {
    try {
        await (0, database_1.connectToDatabase)();
        console.log(`MongoDB connected: ${database_1.mongoUri}`);
    }
    catch (error) {
        console.warn('MongoDB connection failed; API will still start.');
        console.warn(error);
    }
    exports.app.listen(exports.port, () => {
        console.log(`Backend API running on port ${exports.port}`);
        console.log(`Backend API base URL: ${exports.apiBaseUrl}`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map