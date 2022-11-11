window.onload = function(){
	var slolc = document.getElementById("slolc");
	var liarr = slolc.getElementsByTagName("li");
	var bg = document.getElementById("second");
	var div1 = document.getElementsByClassName("rel");
	var homeP1 = document.getElementById("home_p1");
	var homeP2 = document.getElementById("home_p2");
	for(var i=0; i<liarr.length;i++){
		div1[i].style.display = "none";
		div1[0].style.display = "block";
		liarr[i].style.transition = ".4s";
		liarr[i].index = i;
		liarr[i].onmouseover = function(){
			// console.log(i);
			console.log(this.index);
			if(this.index==0){
				homeP1.innerHTML = "达利食品集团";
				homeP2.innerHTML = "利食品集团1989年创立至今，已30年，建立了达利园、好吃点、可比克、乐虎、和其正、豆本豆、美焙辰七大知名品牌。";
			}
			if(this.index==1){
				homeP1.innerHTML = "董事长寄语";
				homeP2.innerHTML = "以产业定位品牌，实施多品牌战略。缔造品质生活，引领行业发展，建立综合性现代化食品企业集团；这是达利的未来愿景，也是时代赋予达利的使命；我们将以国际化的眼光和标准，用心把品质做好，用心把品牌做强，用心把企业做大。";
			}
			if(this.index==2){
				homeP1.innerHTML = "发展历程";
				homeP2.innerHTML = "达利食品集团1989年创立至今，已30年。2015年，在香港港股上市。";
			}
			if(this.index==3){
				homeP1.innerHTML = "企业文化";
				homeP2.innerHTML = "用心创品质，达利集团用心苛求品质，诚信经营，把质量作为企业对消费者的承诺，用心使消费者安心，用心使消费者称心";
			}
			for(var i=0; i<div1.length;i++){
				div1[i].style.display = "none";
				liarr[i].style.transform = "translateY(0)";
			}
			this.style.transform = "translateY(-10px)";
			div1[this.index].style.display = "block";
		}
	}
}