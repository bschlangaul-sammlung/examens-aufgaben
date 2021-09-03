#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kommando_zeile_1 = __importDefault(require("./kommando-zeile"));
kommando_zeile_1.default.parse(process.argv);
