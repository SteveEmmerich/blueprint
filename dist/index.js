// src/index.ts
"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var import_fs = require("fs");
var import_path = require("path");
var import_simple_git = require("simple-git");
var userBlueprintsDir = "user-blueprints";
var generatorName = process.argv[2];
if (!generatorName) {
    console.error("Please provide a generator name!");
    process.exit(1);
}
function runBlueprint(config) {
    return _runBlueprint.apply(this, arguments);
}
function _runBlueprint() {
    _runBlueprint = _async_to_generator(function(config) {
        var blueprintDir, userRepoUrl, git, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    blueprintDir = (0, import_path.join)(__dirname, userBlueprintsDir, "".concat(generatorName, "-blueprint"));
                    if (!config.repository) return [
                        3,
                        5
                    ];
                    userRepoUrl = config.repository;
                    if (!(0, import_fs.existsSync)(blueprintDir)) return [
                        3,
                        1
                    ];
                    console.log("Using local copy of user-defined blueprint.");
                    return [
                        3,
                        5
                    ];
                case 1:
                    console.log("Downloading user-defined blueprint from ".concat(userRepoUrl));
                    git = new import_simple_git.SimpleGit(blueprintDir);
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        git.init().addRemote("origin", userRepoUrl).shallow(true).clone()
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    error = _state.sent();
                    console.error("Error downloading user blueprint:", error);
                    process.exit(1);
                    return [
                        3,
                        5
                    ];
                case 5:
                    require((0, import_path.join)(blueprintDir, "Plopfile.ts"));
                    return [
                        2
                    ];
            }
        });
    });
    return _runBlueprint.apply(this, arguments);
}
_async_to_generator(function() {
    var userBlueprintDir, blueprintConfig;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                userBlueprintDir = (0, import_path.join)(__dirname, userBlueprintsDir, "".concat(generatorName, "-blueprint"));
                if (!((0, import_fs.existsSync)(userBlueprintDir) && (0, import_fs.existsSync)((0, import_path.join)(userBlueprintDir, "Plopfile.ts")))) return [
                    3,
                    2
                ];
                blueprintConfig = JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(userBlueprintDir, "blueprint.json"), "utf-8"));
                return [
                    4,
                    runBlueprint(blueprintConfig)
                ];
            case 1:
                _state.sent();
                return [
                    3,
                    3
                ];
            case 2:
                console.error("User blueprint '".concat(generatorName, "' not found!"));
                process.exit(1);
                _state.label = 3;
            case 3:
                return [
                    2
                ];
        }
    });
})();
