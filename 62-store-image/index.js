$(function(){
    var t,i=$("img"),
    a=$('input[type="url"]'),
    n=$('input[type="button"]');
    function e(){
        var t=localStorage.getItem("img");
        t?i.attr("src",t):i.css({display:"none"})
    }
    (t=$("<img>")).attr("crossOrigin","anonymous"),
    e(),
    n.click(function(){
        t.attr("src",a.val()),a.val("")
    }),
    t.load(function(){
        var t=$("<canvas>").get(0),i=t.getContext("2d");
        t.width=this.width,
        t.height=this.height,
        i.drawImage(this,0,0,t.width,t.height);
        var a=t.toDataURL();
        localStorage.setItem("img",a),e()
    }
    )}
);