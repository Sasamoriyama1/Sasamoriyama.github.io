window.onload = function(){

var star = ["♈牡羊座♈","♉牡牛座♉","♊双子座♊","♋蟹座♋","♌獅子座♌", "♍乙女座♍", "♎天秤座♎","♏蠍座♏","♐射手座♐","♑山羊座♑","♒水瓶座♒","♓魚座♓"];
var items = ["あんぱん","牛乳","藁人形","昆布","ボンゴレビアンコ","麦焼酎","ズッキーニ","エアコン","ダイヤモンド","靴下","新聞紙","パエリア","ガスパチョ","トルティージャ","ピンチョス","アロスコンアルメハス","味噌","トイレットペーパー"];
var message, random_star, random_item;
var btn = document.getElementById("btn");
var output = document.getElementById("output");

btn.onclick = function(){
  random_star = star[ Math.floor( Math.random() * star.length ) ];
  random_item = items[ Math.floor( Math.random() * items.length ) ];

  message = "<h2>" + random_star + "</h2>";
  message += "<p>ラッキーアイテムは " + random_item + "</p>";
  output.innerHTML = message;
}

}