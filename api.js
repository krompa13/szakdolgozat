const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

//angol bajnokság lekérés
 router.route('/angol').get((request,response)=>{

    dboperations.getAngol().then(result => {
       response.json(result[0]);
    })

})
//magyar bajnokság lekérés

router.route('/magyar').get((request,response)=>{

   dboperations.getMagyar().then(result => {
      response.json(result[0]);
   })

})


router.route('/spanyol').get((request,response)=>{

   dboperations.getSpanyol().then(result => {
      response.json(result[0]);
   })

})

router.route('/nemet').get((request,response)=>{

   dboperations.getNemet().then(result => {
      response.json(result[0]);
   })

})



router.route('/magyarcsapat').get((request,response)=>{

   dboperations.getMagyarcsapat().then(result => {
      response.json(result[0]);
   })

})
router.route('/angolcsapat').get((request,response)=>{

   dboperations.getAngolcsapat().then(result => {
      response.json(result[0]);
   })

})
router.route('/nemetcsapat').get((request,response)=>{

   dboperations.getNemetcsapat().then(result => {
      response.json(result[0]);
   })

})
router.route('/spanyolcsapat').get((request,response)=>{

   dboperations.getSpanyolcsapat().then(result => {
      response.json(result[0]);
   })

})


router.route('/ferencvaros').get((request,response)=>{

   dboperations.getFerencvaros().then(result => {
      response.json(result[0]);
   })

})

router.route('/mtk').get((request,response)=>{

   dboperations.getMtk().then(result => {
      response.json(result[0]);
   })

})
router.route('/gyirmot').get((request,response)=>{

   dboperations.getGyirmot().then(result => {
      response.json(result[0]);
   })

})
router.route('/pafc').get((request,response)=>{

   dboperations.getPafc().then(result => {
      response.json(result[0]);
   })

})

router.route('/kisvarda').get((request,response)=>{

   dboperations.getKisvarda().then(result => {
      response.json(result[0]);
   })

})

router.route('/zte').get((request,response)=>{

   dboperations.getZte().then(result => {
      response.json(result[0]);
   })

})
router.route('/ujpest').get((request,response)=>{

   dboperations.getUjpest().then(result => {
      response.json(result[0]);
   })

})

router.route('/fehervar').get((request,response)=>{

   dboperations.getFehervar().then(result => {
      response.json(result[0]);
   })

})

router.route('/paks').get((request,response)=>{

   dboperations.getPaks().then(result => {
      response.json(result[0]);
   })

})
router.route('/honved').get((request,response)=>{

   dboperations.getHonved().then(result => {
      response.json(result[0]);
   })

})
router.route('/dvsc').get((request,response)=>{

   dboperations.getDVSC().then(result => {
      response.json(result[0]);
   })

})
router.route('/mezokovesd').get((request,response)=>{

   dboperations.getMezokovesd().then(result => {
      response.json(result[0]);
   })

})
router.route('/mancity').get((request,response)=>{

   dboperations.getMancity().then(result => {
      response.json(result[0]);
   })

})
router.route('/liverpool').get((request,response)=>{

   dboperations.getLiverpool().then(result => {
      response.json(result[0]);
   })

})
router.route('/chelsea').get((request,response)=>{

   dboperations.getChelsea().then(result => {
      response.json(result[0]);
   })

})
router.route('/arsenal').get((request,response)=>{

   dboperations.getArsenal().then(result => {
      response.json(result[0]);
   })

})
router.route('/manunited').get((request,response)=>{

   dboperations.getManunited().then(result => {
      response.json(result[0]);
   })

})
router.route('/tottenham').get((request,response)=>{

   dboperations.getTottenham().then(result => {
      response.json(result[0]);
   })

})
router.route('/westham').get((request,response)=>{

   dboperations.getWestham().then(result => {
      response.json(result[0]);
   })

})
router.route('/wolves').get((request,response)=>{

   dboperations.getWolves().then(result => {
      response.json(result[0]);
   })

})
router.route('/crystalpalace').get((request,response)=>{

   dboperations.getCrystalpalace().then(result => {
      response.json(result[0]);
   })

})
router.route('/leicester').get((request,response)=>{

   dboperations.getLeicester().then(result => {
      response.json(result[0]);
   })

})
router.route('/brighton').get((request,response)=>{

   dboperations.getBrighton().then(result => {
      response.json(result[0]);
   })

})
router.route('/astonvilla').get((request,response)=>{

   dboperations.getAstonvilla().then(result => {
      response.json(result[0]);
   })

})
router.route('/southampton').get((request,response)=>{

   dboperations.getSouthampton().then(result => {
      response.json(result[0]);
   })

})
router.route('/newcastle').get((request,response)=>{

   dboperations.getNewcastle().then(result => {
      response.json(result[0]);
   })

})
router.route('/brentford').get((request,response)=>{

   dboperations.getBrentford().then(result => {
      response.json(result[0]);
   })

})
router.route('/leeds').get((request,response)=>{

   dboperations.getLeeds().then(result => {
      response.json(result[0]);
   })

})
router.route('/everton').get((request,response)=>{

   dboperations.getEverton().then(result => {
      response.json(result[0]);
   })

})
router.route('/burnley').get((request,response)=>{

   dboperations.getBurnley().then(result => {
      response.json(result[0]);
   })

})
router.route('/watford').get((request,response)=>{

   dboperations.getWatford().then(result => {
      response.json(result[0]);
   })

})
router.route('/norwich').get((request,response)=>{

   dboperations.getNorwich().then(result => {
      response.json(result[0]);
   })

})
router.route('/bayern').get((request,response)=>{

   dboperations.getBayern().then(result => {
      response.json(result[0]);
   })

})
router.route('/dortmund').get((request,response)=>{

   dboperations.getDortmund().then(result => {
      response.json(result[0]);
   })

})
router.route('/leipzig').get((request,response)=>{

   dboperations.getLeipzig().then(result => {
      response.json(result[0]);
   })

})
router.route('/leverkusen').get((request,response)=>{

   dboperations.getLeverkusen().then(result => {
      response.json(result[0]);
   })

})
router.route('/freiburg').get((request,response)=>{

   dboperations.getFreiburg().then(result => {
      response.json(result[0]);
   })

})
router.route('/unionb').get((request,response)=>{

   dboperations.getUnionb().then(result => {
      response.json(result[0]);
   })

})
router.route('/furth').get((request,response)=>{

   dboperations.getFurth().then(result => {
      response.json(result[0]);
   })

})
router.route('/bielefeld').get((request,response)=>{

   dboperations.getBielefeld().then(result => {
      response.json(result[0]);
   })

})
router.route('/stuttgart').get((request,response)=>{

   dboperations.getStuttgart().then(result => {
      response.json(result[0]);
   })

})
router.route('/gladbach').get((request,response)=>{

   dboperations.getGladbach().then(result => {
      response.json(result[0]);
   })

})




 var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);