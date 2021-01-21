"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var login_1 = require("./routes/login");
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("\n    <div>\n      <h1>Express server</>\n    </div>\n  ");
});
app.use("/login", login_1.loginRoutes);
app.listen(5000, function () {
    console.log("Started at 5000");
});
