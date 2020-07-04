var express 		= require("express"),
	app 			= express();


app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
	res.render("index");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("The SoundAPP Server Has Started!");
});