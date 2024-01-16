"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
var db_1 = __importDefault(require("../../db/db"));
exports.userController = {
    getUserCurrent: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, self, status, dataUser, data, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    user_name = req.params.user;
                    self = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_name;
                    return [4 /*yield*/, exports.userController.getFriendshipStatus(self, user_name)];
                case 1:
                    status = _b.sent();
                    return [4 /*yield*/, db_1.default.user.findUnique({
                            where: {
                                user_name: user_name,
                            },
                        })];
                case 2:
                    dataUser = _b.sent();
                    if (dataUser) {
                        data = __assign(__assign({}, dataUser), { status: status });
                        res.status(200).json({
                            data: data,
                        });
                    }
                    else {
                        res.status(403).json({
                            messenger: "Haven't account !!!",
                        });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    res.status(404).json({
                        messenger: "You're not authorization",
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    deleteUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, userDel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user_name = req.params.user_name;
                    return [4 /*yield*/, db_1.default.user.delete({
                            where: {
                                user_name: user_name,
                            },
                        })];
                case 1:
                    userDel = _a.sent();
                    res.json({
                        messenger: 'You was delete success',
                        infoUser: userDel,
                    });
                    return [2 /*return*/];
            }
        });
    }); },
    updateUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user_name = req.params.user_name;
                    data = req.body;
                    return [4 /*yield*/, db_1.default.user.update({
                            where: {
                                user_name: user_name,
                            },
                            data: data,
                        })];
                case 1:
                    _a.sent();
                    res.status(201).json({
                        messenger: 'Update info success !!!',
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    res.status(500).json({
                        message: 'Have wrong error',
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    isValidExistRequest: function (self, reiceiver) { return __awaiter(void 0, void 0, void 0, function () {
        var isExistRequest, areFriend;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.default.friendRequest.count({
                        where: {
                            OR: [
                                {
                                    invited_name: self,
                                    invition_name: reiceiver,
                                },
                                {
                                    invited_name: reiceiver,
                                    invition_name: self,
                                },
                            ],
                        },
                    })];
                case 1:
                    isExistRequest = !!(_a.sent());
                    return [4 /*yield*/, db_1.default.friendOfUser.findFirst({
                            where: {
                                OR: [
                                    {
                                        friend_name: reiceiver,
                                        user_name: self,
                                    },
                                    {
                                        user_name: reiceiver,
                                        friend_name: self,
                                    },
                                ],
                            },
                        })];
                case 2:
                    areFriend = !!(_a.sent());
                    return [2 /*return*/, isExistRequest || areFriend];
            }
        });
    }); },
    isValidAcceptRequest: function (self, reiceiver) { return __awaiter(void 0, void 0, void 0, function () {
        var isSelf;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.default.friendRequest.count({
                        where: {
                            invition_name: reiceiver,
                            invited_name: self,
                        },
                    })];
                case 1:
                    isSelf = !!(_a.sent());
                    return [2 /*return*/, isSelf];
            }
        });
    }); },
    /**
     *   @type {ADD, ACCEPT, REJECT, DELETE}
     */
    addFriendRequest: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, self, reiceiver, isExistInListInvite, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, self = _a.self, reiceiver = _a.reiceiver;
                    return [4 /*yield*/, exports.userController.isValidExistRequest(self, reiceiver)];
                case 1:
                    isExistInListInvite = _b.sent();
                    if (!!isExistInListInvite) return [3 /*break*/, 3];
                    return [4 /*yield*/, db_1.default.$transaction([
                            db_1.default.user.update({
                                where: {
                                    user_name: self,
                                },
                                data: {
                                    invition_list: {
                                        connectOrCreate: [
                                            {
                                                where: {
                                                    invition_name_invited_name: {
                                                        invition_name: self,
                                                        invited_name: reiceiver,
                                                    },
                                                },
                                                create: {
                                                    invited_name: reiceiver,
                                                    invite_friend_status: 'PENDING',
                                                },
                                            },
                                        ],
                                    },
                                    following: {
                                        connect: [{ user_name: reiceiver }],
                                    },
                                },
                            }),
                            db_1.default.user.update({
                                where: {
                                    user_name: reiceiver,
                                },
                                data: {
                                    invited_list: {
                                        connect: [
                                            {
                                                invition_name_invited_name: {
                                                    invition_name: self,
                                                    invited_name: reiceiver,
                                                },
                                            },
                                        ],
                                    },
                                },
                            }),
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3: throw new Error('Request was exist !');
                case 4:
                    res.status(200).json({
                        messeger: 'Send Request Success. ',
                    });
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    res.status(403).json({
                        message: e_1 === null || e_1 === void 0 ? void 0 : e_1.message,
                    });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); },
    acceptFriendRequest: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, self, reiceiver, isExist, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, self = _a.self, reiceiver = _a.reiceiver;
                    return [4 /*yield*/, exports.userController.isValidAcceptRequest(self, reiceiver)];
                case 1:
                    isExist = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 6, , 7]);
                    if (!isExist) return [3 /*break*/, 4];
                    return [4 /*yield*/, db_1.default.$transaction([
                            db_1.default.user.update({
                                where: {
                                    user_name: self,
                                },
                                data: {
                                    invited_list: {
                                        upsert: [
                                            {
                                                where: {
                                                    invition_name_invited_name: { invition_name: self, invited_name: reiceiver },
                                                },
                                                create: {
                                                    invition_name: self,
                                                    invite_friend_status: 'ACCEPT',
                                                },
                                                update: {
                                                    invition_name: self,
                                                    invite_friend_status: 'ACCEPT',
                                                },
                                            },
                                        ],
                                        deleteMany: {
                                            invition_name: self,
                                        },
                                    },
                                    following: {
                                        connect: [{ user_name: reiceiver }],
                                    },
                                    followed_by: {
                                        connect: [{ user_name: reiceiver }],
                                    },
                                    friends: {
                                        connectOrCreate: {
                                            where: {
                                                user_name_friend_name: {
                                                    user_name: self,
                                                    friend_name: reiceiver,
                                                },
                                            },
                                            create: {
                                                friend_name: reiceiver,
                                            },
                                        },
                                    },
                                },
                            }),
                            db_1.default.user.update({
                                where: {
                                    user_name: reiceiver,
                                },
                                data: {
                                    invition_list: {
                                        upsert: [
                                            {
                                                where: {
                                                    invition_name_invited_name: {
                                                        invition_name: self,
                                                        invited_name: reiceiver,
                                                    },
                                                },
                                                create: {
                                                    invited_name: reiceiver,
                                                    invite_friend_status: 'ACCEPT',
                                                },
                                                update: {
                                                    invited_name: reiceiver,
                                                    invite_friend_status: 'ACCEPT',
                                                },
                                            },
                                        ],
                                        deleteMany: {
                                            invition_name: reiceiver,
                                        },
                                    },
                                    followed_by: {
                                        connect: [{ user_name: self }],
                                    },
                                    following: {
                                        connect: [{ user_name: self }],
                                    },
                                    friends: {
                                        connectOrCreate: {
                                            where: {
                                                user_name_friend_name: {
                                                    user_name: reiceiver,
                                                    friend_name: self,
                                                },
                                            },
                                            create: {
                                                friend_name: self,
                                            },
                                        },
                                    },
                                },
                            }),
                        ])];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4: throw new Error('Acceptance is not allowed or was are friends');
                case 5:
                    res.status(200).json({
                        messenger: 'Add friends Success!',
                    });
                    return [3 /*break*/, 7];
                case 6:
                    e_2 = _b.sent();
                    res.status(403).json({
                        messenger: e_2 === null || e_2 === void 0 ? void 0 : e_2.message,
                    });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); },
    rejectFriendRequest: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, self, reiceiver, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, self = _a.self, reiceiver = _a.reiceiver;
                    return [4 /*yield*/, db_1.default.friendRequest.deleteMany({
                            where: {
                                OR: [
                                    {
                                        invited_name: self,
                                        invition_name: reiceiver,
                                    },
                                    {
                                        invited_name: reiceiver,
                                        invition_name: self,
                                    },
                                ],
                            },
                        })];
                case 1:
                    _b.sent();
                    res.json({
                        messenger: 'Delete success',
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _b.sent();
                    res.status(403).json({
                        messenger: err_3,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteFriendRequest: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, self, reiceiver, isExistFriend, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, self = _a.self, reiceiver = _a.reiceiver;
                    return [4 /*yield*/, db_1.default.user.count({
                            where: {
                                user_name: self,
                                friends: {
                                    some: {
                                        friend_name: reiceiver,
                                    },
                                },
                            },
                        })];
                case 1:
                    isExistFriend = !!(_b.sent());
                    if (!isExistFriend) return [3 /*break*/, 3];
                    return [4 /*yield*/, db_1.default.$transaction([
                            db_1.default.user.update({
                                where: { user_name: self },
                                data: {
                                    followed_by: { disconnect: { user_name: reiceiver } },
                                    following: { disconnect: { user_name: reiceiver } },
                                },
                            }),
                            db_1.default.user.update({
                                where: { user_name: reiceiver },
                                data: {
                                    followed_by: { disconnect: { user_name: self } },
                                    following: { disconnect: { user_name: self } },
                                },
                            }),
                            db_1.default.friendOfUser.deleteMany({
                                where: {
                                    OR: [
                                        {
                                            user_name: reiceiver,
                                            friend_name: self,
                                        },
                                        {
                                            user_name: self,
                                            friend_name: reiceiver,
                                        },
                                    ],
                                },
                            }),
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3: throw new Error('Friend are not exist !!!');
                case 4:
                    res.json({
                        messeger: 'Delete Friend Success',
                    });
                    return [3 /*break*/, 6];
                case 5:
                    e_3 = _b.sent();
                    res.status(403).json({
                        messenger: e_3 === null || e_3 === void 0 ? void 0 : e_3.message,
                    });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); },
    /**
     * @type {GET}
     */
    getFriendOfUser: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, self_1, listFriends, dataListFriend, e_4;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    user_name = req.params.user_name;
                    self_1 = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_name;
                    return [4 /*yield*/, db_1.default.friendOfUser.findMany({
                            where: {
                                user_name: user_name,
                                NOT: {
                                    friend_name: {
                                        equals: self_1,
                                    },
                                },
                            },
                            select: {
                                friend: true,
                            },
                        })];
                case 1:
                    listFriends = _b.sent();
                    return [4 /*yield*/, Promise.all(listFriends.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                            var status, newData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, exports.userController.getFriendshipStatus(self_1, item.friend.user_name)];
                                    case 1:
                                        status = _a.sent();
                                        if (status) {
                                            newData = __assign(__assign({}, item.friend), { status: status });
                                            return [2 /*return*/, newData];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    dataListFriend = _b.sent();
                    res.status(200).json({
                        messenger: 'OK',
                        data: dataListFriend,
                    });
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _b.sent();
                    res.status(403).json({
                        messenger: e_4,
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    getListFriendRequest: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, listInvition, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user_name = req.body.user_name;
                    return [4 /*yield*/, db_1.default.user.findFirst({
                            where: {
                                user_name: user_name,
                            },
                            include: {
                                invition_list: true,
                                invited_list: true,
                            },
                        })];
                case 1:
                    listInvition = _a.sent();
                    if (listInvition) {
                        res.status(200).json({
                            messenger: 'OK',
                            data: listInvition,
                        });
                    }
                    else {
                        throw new Error('Wrong user name or not exist!');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_5 = _a.sent();
                    res.status(403).json({
                        messenger: e_5.message,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getMutualFriend: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, self, others, result, user1, user2_1, commonFriends, e_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, self = _a.self, others = _a.others;
                    return [4 /*yield*/, db_1.default.user.findMany({
                            where: {
                                user_name: {
                                    in: [self, others],
                                },
                            },
                            include: {
                                friends: true,
                            },
                        })];
                case 1:
                    result = _b.sent();
                    user1 = result[0], user2_1 = result[1];
                    commonFriends = user1 === null || user1 === void 0 ? void 0 : user1.friends.filter(function (friend1) { return user2_1 === null || user2_1 === void 0 ? void 0 : user2_1.friends.some(function (friend2) { return friend1.user_name === friend2.user_name; }); });
                    res.status(200).json({
                        messenger: 'OK',
                        data: commonFriends,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_6 = _b.sent();
                    res.status(403).json({
                        messenger: e_6,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getFriendshipStatus: function (self, user_name) {
        return __awaiter(this, void 0, void 0, function () {
            var isFriend, hasPendingInvitation, hasRejectedInvitation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user_name === self) {
                            return [2 /*return*/, 'self'];
                        }
                        return [4 /*yield*/, db_1.default.user.findFirst({
                                where: {
                                    user_name: self,
                                    friends: {
                                        some: {
                                            user_name: self,
                                            friend_name: user_name,
                                        },
                                    },
                                },
                            })];
                    case 1:
                        isFriend = _a.sent();
                        if (isFriend) {
                            return [2 /*return*/, 'friend'];
                        }
                        return [4 /*yield*/, db_1.default.user.findFirst({
                                where: {
                                    user_name: self,
                                    invition_list: {
                                        some: {
                                            invited_name: user_name,
                                            invition_name: self,
                                        },
                                    },
                                },
                            })];
                    case 2:
                        hasPendingInvitation = _a.sent();
                        if (hasPendingInvitation) {
                            return [2 /*return*/, 'pending'];
                        }
                        return [4 /*yield*/, db_1.default.user.findUnique({
                                where: {
                                    user_name: self,
                                    invited_list: {
                                        some: {
                                            invited_name: self,
                                            invition_name: user_name,
                                        },
                                    },
                                },
                            })];
                    case 3:
                        hasRejectedInvitation = _a.sent();
                        if (hasRejectedInvitation) {
                            return [2 /*return*/, 'reject'];
                        }
                        return [2 /*return*/, 'stranger'];
                }
            });
        });
    },
    getListFollower: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, self_2, listFollower, newListFollower, e_7;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    user_name = req.params.user_name;
                    self_2 = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_name;
                    return [4 /*yield*/, db_1.default.user.findUnique({
                            where: {
                                user_name: user_name,
                            },
                            select: {
                                followed_by: true,
                            },
                        })];
                case 1:
                    listFollower = _b.sent();
                    if (listFollower) {
                        newListFollower = listFollower.followed_by.filter(function (item) { return item.user_name !== self_2; });
                        res.status(200).json({
                            messenger: 'OK',
                            data: newListFollower,
                        });
                    }
                    else {
                        throw new Error('User name not exist!');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_7 = _b.sent();
                    res.status(403).json({
                        messenger: e_7.message,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getListFollowing: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var user_name, self_3, listFollowing, newListFollowing, e_8;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    user_name = req.params.user_name;
                    self_3 = (_a = req.user) === null || _a === void 0 ? void 0 : _a.user_name;
                    return [4 /*yield*/, db_1.default.user.findUnique({
                            where: {
                                user_name: user_name,
                            },
                            select: {
                                following: true,
                            },
                        })];
                case 1:
                    listFollowing = _b.sent();
                    if (listFollowing) {
                        newListFollowing = listFollowing.following.filter(function (item) { return item.user_name !== self_3; });
                        res.status(200).json({
                            messenger: 'OK',
                            data: newListFollowing,
                        });
                    }
                    else {
                        throw new Error('User name not exist!');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_8 = _b.sent();
                    res.status(403).json({
                        messenger: e_8.message,
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
//# sourceMappingURL=user.js.map