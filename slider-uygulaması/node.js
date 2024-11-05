var models = [
  {
    name: "Mercedes-Benz coupe",
    image: "img/coupe.jpeg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mercedes-benz.com.tr%2Fpassengercars%2Fmodels%2Fcoupe%2Fcle%2Foverview.html&psig=AOvVaw1Mioge3WL3zpU58avBx_8p&ust=1730637906901000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCGgevWvYkDFQAAAAAdAAAAABAP",
  },
  {
    name: "Lamborgini Cabrio",
    image: "img/cabrio.jpeg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcabriomagazyn.pl%2Fen%2Flamborghini-huracan-evo-rwd-spyder%2F&psig=AOvVaw2nJ67Xv0DIXIGIcD4xVXji&ust=1730641466050000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDh54DkvYkDFQAAAAAdAAAAABAE",
  },
  {
    name: "Rolls-Royce",
    image: "img/rolls.jpg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.motor1.com%2Fnews%2F730609%2Frolls-royce-phantom-scintilla%2F&psig=AOvVaw3ve9_MhhTFGlA6fTZG7PRM&ust=1730641411413000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiQp-bjvYkDFQAAAAAdAAAAABAE",
  },
  {
    name: "Porsche Taycan",
    image: "img/taycan.jpeg",
    link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teknoburada.net%2F2024-model-porsche-taycan-tanitildi-en-hizlisi%2F&psig=AOvVaw0P9G2NHgic8lJQ_9q2RhRH&ust=1730641490304000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi3oY_kvYkDFQAAAAAdAAAAABAE",
  },
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
  duration: "4000",
  random: true,
};

init(settings);

document.querySelector(".fa-circle-chevron-left").addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document.querySelector(".fa-circle-chevron-right").addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

  document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
  })

  document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
  })

function init(settings) {
  var prev;
  interval= setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
        if(slaytCount== index+1){
            index = -1;
        }
        slowslide(index);
        console.log(index);
        index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-tittle").textContent = models[index].name;

  document.querySelector(".card-img-top").setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
