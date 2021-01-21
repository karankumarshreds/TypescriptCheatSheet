"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var body_parser_1 = __importDefault(require("body-parser"));
var login_1 = require("./routes/login");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ["test@123"] }));
app.get("/", function (req, res) {
    if (req.session.loggedIn == true) {
        res.send("\n      <div>\n        <h1>You are logged in</>\n      </div>\n  ");
    }
    res.send("\n    <div>\n      <h1>Express server</>\n    </div>\n  ");
});
app.use("/login", login_1.loginRoutes);
app.listen(5000, function () {
    console.log("Started at 5000");
});
