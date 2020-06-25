import { Boek } from "./Boek"
import { Laptop } from "./Laptop"

import { MijnWinkelmandje } from "./MijnWinkelmandje"

let laptop1: Laptop = new Laptop('001', 'Toshiba', 'Satelitte', 999.99, 10);
let boek1: Boek = new Boek('1765343536', '"A little Life"', 'Hanya Yanagihara', 39.99, 1);
let mijnWinkelmandje: MijnWinkelmandje = new MijnWinkelmandje();
mijnWinkelmandje.voegToe(laptop1);
mijnWinkelmandje.voegToe(boek1);
mijnWinkelmandje.toonMandje();