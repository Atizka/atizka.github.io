AOS.init();
const html = document.querySelector("html");
const menu = document.getElementById("menu");
const body = document.querySelector('body');
const selengkapnya = document.getElementById('selengkapnya');
const menu_icon = document.querySelector('.menu-icon');

selengkapnya.addEventListener('click', function() {
    document.body.scrollTop = 10;
});


$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.container-nav').addClass('active');
            $('.menu-icon').attr('src', 'assets/image/hamburger.png');
        } else {
            $('.container-nav').removeClass('active');
            $('.menu-icon').attr('src', 'assets/image/hamburger_white.png');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            openpopup();
        }
    });
});

function closemenu() {
    menu.style.top = "-100vh",
    body.style.overflow = "auto";
    body.style.overflowX = "hidden";
  }
  
  function openmenu() {
    menu.style.top = "0",
    body.style.overflow = "hidden";
  }

  menu.addEventListener("click", function (){
    document.html.classList.toggle()
  })

  document.getElementById('video1').addEventListener('mouseover', function() {
    document.getElementById('video1').setAttribute('controls', '');
  });
  
  document.getElementById('video1').addEventListener('mouseout', function() {
    document.getElementById('video1').removeAttribute('controls', '');
  });

  document.getElementById('video2').addEventListener('mouseover', function() {
    document.getElementById('video2').setAttribute('controls', '');
  });
  
  document.getElementById('video2').addEventListener('mouseout', function() {
    document.getElementById('video2').removeAttribute('controls', '');
  });

  function topFunction() {
    document.documentElement.scrollTop = 580;
  }

  function closepopup() {
      document.getElementById('pop-up').style.display = "none";
  }

  function openpopup() {
    document.getElementById('pop-up').style.bottom = "0";
  }

  const player = document.getElementById('player')
  
  if (player.paused) {
    document.getElementById('tombolPause').style.display = "none";
    document.getElementById('tombolPlay').style.display = "block";
    document.getElementById('tombolPlay').addEventListener('click', function() {
      player.play();
      document.getElementById('tombolPause').style.display = "block";
      document.getElementById('tombolPlay').style.display = "none";
    })
    document.getElementById('tombolPause').addEventListener('click', function() {
      player.pause();
      document.getElementById('tombolPause').style.display = "none";
      document.getElementById('tombolPlay').style.display = "block";
    })
  }

  const overlay = document.querySelector('.overlay');

  setTimeout(function() {
    overlay.style.top = "-100%";
    body.style.overflow = "hidden";
  }, 2000);


  const textUmi = document.getElementById('textCharacterUmi');
  const textAzka = document.getElementById('textCharacterAzka');
  const containerUmi = document.getElementById('containerCharacterUmi');
  const containerAzka = document.getElementById('containerCharacterAzka');
  const umi = document.getElementById('characterUmi');
  const azka = document.getElementById('characterAzka');

  containerUmi.addEventListener('mouseover', function() {
    umi.style.transition = '1s';
    textUmi.style.left = '10%';
    azka.style.transition = '1s';
    azka.style.transform = 'translateX(200%)';
  });
  containerUmi.addEventListener('mouseout', function() {
    textUmi.style.left = '-100%';
    azka.style.transition = '1s';
    azka.style.transform = 'translateX(0)';
  });

  containerAzka.addEventListener('mouseover', function() {
    azka.style.transition = '1s';
    textAzka.style.right = '10%';
    umi.style.transition = '1s';
    umi.style.transform = 'translateX(-200%)';
  });
  containerAzka.addEventListener('mouseout', function() {
    textAzka.style.right = '-100%';
    umi.style.transition = '1s';
    umi.style.transform = 'translateX(0)';
  });