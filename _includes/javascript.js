<script>
var p=document.getElementsByTagName("li");
document.getElementById("list").insertBefore(p[1],p[0]);
var newp=document.createElement("p");
var moreContent=document.createTextNode("yooo");
newp.appendChild(moreContent);
document.body.appendChild(newp);
document.body.appendChild(document.createElement("button"));
function turnBlue() {
  document.getElementsByTagName("h1")[0].style.color="blue";
};
newp.onclick=turnBlue;
document.getElementsByTagName("button")[0].onclick=turnBlue;
</script>
