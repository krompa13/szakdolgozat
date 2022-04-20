var  config = require('./dbconfig');
const  sql = require('mssql');

async function getAngol() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Angol order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getMagyar() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Magyar order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getSpanyol() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Spanyol order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getNemet() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Nemet order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getMagyarcsapat() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT team from Magyar order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getAngolcsapat() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT team from Angol order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getNemetcsapat() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT team from Nemet order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getSpanyolcsapat() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT team from Spanyol order by helyezes");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getFerencvaros() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from FTC ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getMtk() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from MTK ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getGyirmot() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Gyirmot ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getPafc() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from PAFC ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getKisvarda() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Kisvarda ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getZte() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from ZTE ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getUjpest() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Ujpest ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getFehervar() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Fehervar ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getPaks() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Paks ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getHonved() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Honved ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getDVSC() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from DVSC ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getMezokovesd() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Mezokovesd ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getMancity() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Mancity ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getLiverpool() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Liverpool ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getChelsea() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Chelsea ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getTottenham() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Tottenham ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getArsenal() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Arsenal ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getManunited() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Manunited ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getWestham() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Westham ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getWolves() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Wolves ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getCrystalpalace() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Crystalpalace ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getLeicester() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Leicester ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getBrighton() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Brighton ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getAstonvilla() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Astonvilla ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getSouthampton() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Southampton ");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getNewcastle() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Newcastle");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getBrentford() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Brentford");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getLeeds() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Leeds");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getEverton() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Everton");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getBurnley() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Burnley");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getWatford() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Watford");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getNorwich() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Norwich");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getBayern() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Bayern");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getDortmund() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Dortmund");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getLeipzig() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Leipzig");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getLeverkusen() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Leverkusen");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getFreiburg() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Freiburg");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getUnionb() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Unionberlin");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getFurth() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Furth");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getBielefeld() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Bielefeld");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getStuttgart() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Stuttgart");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getGladbach() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Gladbach");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAngol : getAngol,
    getMagyar : getMagyar,
    getSpanyol : getSpanyol,
    getNemet : getNemet,
    getMagyarcsapat:getMagyarcsapat,
    getAngolcsapat : getAngolcsapat,
    getNemetcsapat : getNemetcsapat,
    getFerencvaros : getFerencvaros,
    getSpanyolcsapat : getSpanyolcsapat,
    getMtk : getMtk,
    getGyirmot : getGyirmot,
    getPafc : getPafc,
    getKisvarda : getKisvarda,
    getZte : getZte,
    getUjpest : getUjpest,
    getFehervar : getFehervar,
    getPaks : getPaks,
    getHonved :  getHonved,
    getDVSC : getDVSC,
    getMezokovesd : getMezokovesd,
    getMancity : getMancity,
    getLiverpool : getLiverpool,
    getChelsea : getChelsea,
    getTottenham : getTottenham,
    getArsenal : getArsenal,
    getManunited : getManunited,
    getWestham : getWestham,
    getWolves : getWolves,
    getCrystalpalace : getCrystalpalace,
    getLeicester : getLeicester,
    getBrighton : getBrighton,
    getAstonvilla : getAstonvilla,
    getSouthampton : getSouthampton,
    getNewcastle : getNewcastle,
    getBrentford : getBrentford,
    getLeeds : getLeeds,
    getEverton : getEverton,
    getBurnley : getBurnley,
    getWatford : getWatford,
    getNorwich : getNorwich,
    getBayern : getBayern,
    getDortmund : getDortmund,
    getLeipzig : getLeipzig,
    getLeverkusen : getLeverkusen,
    getFreiburg : getFreiburg,
    getUnionb : getUnionb,
    getFurth : getFurth,
    getBielefeld : getBielefeld,
    getStuttgart : getStuttgart,
    getGladbach : getGladbach
}


