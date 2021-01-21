"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.loginRoutes = router;
router.get("/", function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <input placeholder=\"Email\" type=\"email\"/>\n      <input placeholder=\"Password\" type=\"password\"/>\n      <button type=\"submit\">Login</button>\n    </form>\n  ");
});
