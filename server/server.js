const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const  https = require("https");
// const Mailchimp = require('mailchimp-api');

require('dotenv').config();
// const port = 4000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use(express.json());

// const mailchimp = new Mailchimp('4b4a99c9204947181a63c9525c34ead0-us6');
app.get('/',(req,res)=>{
res.send('hi');
})

app.post('/mailchimp', async (req,res) => {
  const {input} = req.body;
  const [name,dirt] = input.split("@");
  var data = {
    members:[
      {
        email_address: input,
        status: "subscribed",
        merge_fields:{
          FNAME: name,
          LNAME: ''
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);

  const url =  "https://us6.api.mailchimp.com/3.0/lists/1a3b72f584";

  const options = {
    method: "POST",
    auth: "Resume:f1a75c1938bf3ad415a8041bee411d1e-us6"
  }
  request = https.request(url,options,function(response){
    response.on("data",function(data){
      console.log(JSON.parse(data));
    })
  });
  request.write(jsonData);
  request.end();
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
