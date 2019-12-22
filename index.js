var imgs = [
    "img/adeolu-eletu-ohh8ROaQSJg-unsplash.jpg",
    "img/alexandru-zdrobau-_STvosrG-pw-unsplash.jpg",
    "img/asoggetti-uR6dIgDnt38-unsplash.jpg",
    "img/daniel-mirlea-_7IUgAL60nc-unsplash.jpg",
    "img/eduard-militaru-Q4PvX80itZ0-unsplash.jpg",
    "img/ipet-photo-T-0EW-SEbsE-unsplash.jpg",
    "img/jamie-street-UtrE5DcgEyg-unsplash.jpg",
    "img/jf-brou-915UJQaxtrk-unsplash.jpg",
    "img/joe-caione-qO-PIF84Vxg-unsplash.jpg",
    "img/john-price-wzRQfEw9CMc-unsplash.jpg",
    "img/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
    "img/kote-puerto-so5nsYDOdxw-unsplash.jpg",
    "img/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg",
    "img/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg",
    "img/payson-wick-B8VbQj7Y9WI-unsplash.jpg",
    "img/petter-rudwall-Q9shDPeMgOA-unsplash.jpg",
    "img/piyush-kashikar-qbfGZy5GBJI-unsplash.jpg",
    "img/r-mo-w-_iZqdviAo-unsplash.jpg",
    "img/rob-wingate-Fd9tUmRBJzk-unsplash.jpg",
    "img/roya-ann-miller-E2_k8SsuS7s-unsplash.jpg",
    "img/sereja-ris-g3B53PbBfwU-unsplash.jpg",
    "img/tomas-malik-ANCoz0JMhiQ-unsplash.jpg"
];
var num=0;
function pre(){
    var slide = document.getElementById("slide");
    num--;
    if(num < 0)
    {
        num = imgs.length -1;
    }
    slide.src = imgs[num];
}

function next(){
    var slide = document.getElementById("slide");
    num++;
    if(num >= imgs.length)
    {
        num = 0;
    }
    slide.src = imgs[num];
}
