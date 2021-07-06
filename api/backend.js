const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

let axios = require("axios").default;

let optionsHero = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/hero',
  headers: {
    'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

app.get('/typesHero', function(req, res){
    axios.request(optionsHero).then(function (response) {
        let resp = response.data;
        resp = resp.splice(0,29);
        console.log(resp.length)
        res.json(resp)
        
    }).catch(function (error) {
        console.error(error);        
    });
});

let optionsMinion = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/minion',
  headers: {
    'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

app.get('/typesMinion', function(req, res){
    axios.request(optionsMinion).then(function (response) {
        const resp = response.data;
        res.json(resp)
        
    }).catch(function (error) {
        console.error(error);        
    });
});

let optionsSpell = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/spell',
  headers: {
    'x-rapidapi-key': '5dbee0d520mshda247591d161b4ap12c278jsn6924d09fa87a',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
};

app.get('/typesSpell', function(req, res){
    axios.request(optionsSpell).then(function (response) {
        const resp = response.data;
        res.json(resp)
        
    }).catch(function (error) {
        console.error(error);        
    });
});



app.listen(3000, function(){
    console.log('Server is running! Run Bitch, Run')
});



