"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
var express_1 = __importDefault(require("express"));
/**
 * // if you want to use more specific type def
 *
 * interface LoginRequest extends Request {
 *   body: { email: string | undefined }
 * }
 *
 */
var router = express_1.default.Router();
exports.loginRoutes = router;
router.get("/", function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <input placeholder=\"Email\" type=\"email\" name=\"email\"/>\n      <input placeholder=\"Password\" type=\"password\" name=\"password\"/>\n      <button type=\"submit\">Login</button>\n    </form>\n  ");
});
router.post("/", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + " and " + password);
});
