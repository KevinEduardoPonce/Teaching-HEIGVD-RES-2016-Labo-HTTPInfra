$(function(){
	console.log("Charge dollar");
	function chargeDollar(){
		$.getJSON("/api/salut/",function(dollars){
			console.log(dollars);
			var message = "Erreur";
			if(dollars.length > 0){
				message = dollars[5];
			}
			$(".intro-lead-in").text("You win : " + message);
		});
	};
	chargeDollar();
	setInterval(chargeDollar,2000);	
});
