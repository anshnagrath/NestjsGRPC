"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let PermutationService = class PermutationService {
    constructor() {
        this.keypad = {
            2: ["A", "B", "B"],
            3: ["D", "E", "F"],
            4: ["G", "H", "I"],
            5: ["J", "K", "L"],
            6: ["M", "N", "O"],
            7: ["P", "Q", "R", "S"],
            8: ["T", "U", "V"],
            9: ["W", "X", "Y", "Z"]
        };
        this.superHeros = ["SUPERMAN", "THOR", "ROBIN", "IRONMAN", "GHOSTRIDER", "CAPTAINAMERICA", "FLASH", "WOLVERINE", "BATMAN", "HULK", "BLADE", "PHANTOM", "SPIDERMAN", "BLACKWIDOW", "HELLBOY", "PUNISHER"];
    }
    decodeSuperHeroName(data) {
        let keysPressed = data.split('');
        let accumalator = [];
        let superHerosToCall = '';
        if (parseInt(keysPressed[0]) == 0 && keysPressed[1] == " ") {
            keysPressed = keysPressed.splice(2);
            keysPressed.forEach((key) => {
                let tempArr = [];
                let keyAlphabats = this.keypad[key];
                keyAlphabats.forEach(alpha => {
                    if (accumalator.length == 0) {
                        tempArr.push(alpha);
                    }
                    else {
                        accumalator.forEach(alphabet => { tempArr.push(alphabet + alpha); });
                    }
                });
                accumalator = [...tempArr];
            });
            accumalator.forEach((permutaion) => {
                let superHero = this.superHeros.find(superhero => superhero == permutaion);
                if (superHero && superHero != undefined) {
                    superHerosToCall = superHero;
                }
            });
            return { decodedPermutation: accumalator, superHeroName: superHerosToCall };
        }
        else {
            return { decodedPermutation: [], superHeroName: '' };
        }
    }
};
PermutationService = __decorate([
    common_1.Injectable()
], PermutationService);
exports.PermutationService = PermutationService;
//# sourceMappingURL=permutation.service.js.map