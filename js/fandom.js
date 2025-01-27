"use strict";

var fandoms = [{
  url: '#',
  name: 'Pop! Yourself',
  media: {
    brand: {
      src: 'popyourselfv3-logo-fandom-tile.png',
      width: 200,
      height: 97,
      alt: 'POP! Yourself logo',
      aspectRatio: '200/97'
    },
    product: {
      src: 'Carousel-popyourselfmalea.png',
      width: 97,
      height: 200,
      alt: 'POP! Custom male',
      aspectRatio: '97/200'
    }
  },
  copyright: 'POP! Yourself © 2023'
}, {
  url: '#',
  name: 'Funko Rewind',
  media: {
    brand: {
      src: 'funkorewindv2-logo-fandom-tile.png',
      width: 200,
      height: 97,
      alt: 'Funko Rewind logo',
      aspectRatio: '200/97'
    },
    product: {
      src: 'Carousel-peter-pan.png',
      width: 97,
      height: 200,
      alt: 'POP! Peter Pan',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Funko Rewind © 2023'
}, {
  url: '#',
  name: 'Soda',
  media: {
    brand: {
      src: 'Soda-logo.png',
      width: 200,
      height: 80,
      alt: 'SODA logo',
      aspectRatio: '5/2'
    },
    product: {
      src: 'Carousel-pocahontas.png',
      width: 97,
      height: 200,
      alt: 'POP! Pocahontas',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Soda © 2022'
}, {
  url: '#',
  name: 'Gold',
  media: {
    brand: {
      src: 'Gold-logo.png',
      width: 200,
      height: 97,
      alt: 'Gold logo',
      aspectRatio: '200/97'
    },
    product: {
      src: 'Carousel-Shaq.png',
      width: 97,
      height: 200,
      alt: "POP! Shaquille O'Neal",
      aspectRatio: '97/200'
    }
  },
  copyright: 'Gold © 2022'
}, {
  url: '#',
  name: 'Bitty Pop!',
  media: {
    brand: {
      src: 'fandom-bity-pop.png',
      width: 200,
      height: 97,
      alt: 'Bitty POP! logo',
      aspectRatio: '200/97'
    },
    product: {
      src: 'Carousel-zuko.png',
      width: 97,
      height: 200,
      alt: 'POP! Zuko',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Bitty Pop © 2022'
}, {
  url: '#',
  name: 'Popsies',
  media: {
    brand: {
      src: 'Popsies-logov4.png',
      width: 200,
      height: 97,
      alt: 'Popsies logo',
      aspectRatio: '200/97'
    },
    product: {
      src: 'Carousel-pennywise.png',
      width: 97,
      height: 200,
      alt: 'POP! Pennywise',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Popsies © 2022'
}, {
  url: '#',
  name: 'Funko Games',
  media: {
    brand: {
      src: 'Funko-Games-logo.png',
      width: 200,
      height: 97,
      alt: 'Funko Games logo',
      aspectRatio: '200/97'
    },
    product: {
      src: 'Carousel-fast-and-furious.png',
      width: 97,
      height: 200,
      alt: 'Fast & Furious',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Funko Games © 2022'
}, {
  url: '#',
  name: 'Pop!',
  media: {
    brand: {
      src: 'Pop!-Funko-logo.png',
      width: 200,
      height: 116,
      alt: 'POP! Funko logo',
      aspectRatio: '50/29'
    },
    product: {
      src: 'Carousel-wolverinev2.png',
      width: 97,
      height: 200,
      alt: 'POP! Wolverine',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Pop! © 2022'
}, {
  url: '#',
  name: 'Snaps',
  media: {
    brand: {
      src: 'Snapsies-Logo2010.53.0920PM.png',
      width: 200,
      height: 98,
      alt: 'Snaps logo',
      aspectRatio: '100/49'
    },
    product: {
      src: 'Carousel-vanny.png',
      width: 97,
      height: 200,
      alt: 'POP! Vanny',
      aspectRatio: '97/200'
    }
  },
  copyright: 'Snaps © 2022'
}];
var fandomContainer = document.querySelector('.fandom__ul');
fetch('components/fandom.html').then(function (response) {
  return response.text();
}).then(function (html) {
  var templateContainer = document.createElement('div');
  templateContainer.innerHTML = html;

  // Seleccionar el template
  var template = templateContainer.querySelector('#fandom__template');
  fandoms.forEach(function (item) {
    var li = document.createElement('li');
    li.className = 'fandom__li';
    var fandom = template.content.cloneNode(true);
    var cardLink = fandom.querySelector('.fandom__card');
    var imgLogo = fandom.querySelector('.fandom__logo');
    var imgProduct = fandom.querySelector('.fandom__product');
    var copyright = fandom.querySelector('.fandom__span');
    cardLink.href = item.url;
    cardLink.title = item.name;
    imgLogo.src = "assets/img/fandom/".concat(item.media.brand.src);
    imgLogo.width = item.media.brand.width;
    imgLogo.height = item.media.brand.height;
    imgLogo.alt = item.media.brand.alt;
    imgLogo.style.aspectRatio = item.media.brand.aspectRatio;
    imgProduct.src = "assets/img/fandom/".concat(item.media.product.src);
    imgProduct.width = item.media.product.width;
    imgProduct.height = item.media.product.height;
    imgProduct.alt = item.media.product.alt;
    imgProduct.style.aspectRatio = item.media.product.aspectRatio;
    copyright.textContent = item.copyright;
    li.appendChild(fandom);
    fandomContainer.appendChild(li);

    // LOADING PRODUCT SLIDER MOVE LOGIC
    fandomCarouselMove();
  });
}).catch(function (error) {
  return console.error('Error al cargar el template:', error);
});
var fandomCarouselMove = function fandomCarouselMove() {
  var fandomArrows = document.querySelector('.fandom__arrows');
  var fandomArrowControl = fandomArrows.querySelectorAll('.arrows__control');
  var fandomUl = document.querySelector('.fandom__ul');
  var fandomLi = document.querySelectorAll('.fandom__li');
  var getCardsPerView = function getCardsPerView() {
    var width = window.innerWidth;
    if (width <= 640) return 2;
    if (width <= 768) return 3;
    if (width <= 1024) return 4;
    if (width <= 1280) return 5;
    return 6;
  };
  var handleControls = function handleControls() {
    if (fandomStep === 0) {
      fandomArrowControl[0].disabled = true;
      fandomArrowControl[0].style.visibility = 'hidden';
    } else {
      fandomArrowControl[0].disabled = false;
      fandomArrowControl[0].style.visibility = 'visible';
    }
    if (fandomStep >= fandomLi.length - getCardsPerView()) {
      fandomArrowControl[1].disabled = true;
      fandomArrowControl[1].style.visibility = 'hidden';
    } else {
      fandomArrowControl[1].disabled = false;
      fandomArrowControl[1].style.visibility = 'visible';
    }
  };
  var fandomStep = 0;
  handleControls();
  var handleCards = function handleCards(direction) {
    if (direction === 'previous') {
      if (fandomStep > 0) {
        fandomStep--;
      } else {
        fandomStep = 0;
      }
    }
    if (direction === 'next') {
      if (fandomStep < fandomLi.length - getCardsPerView()) {
        fandomStep++;
      } else {
        fandomStep = fandomLi.length - getCardsPerView();
      }
    }
    var move = 100 / fandomLi.length * fandomStep * -1;
    fandomUl.style.transform = "translateX(".concat(move, "%)");
    handleControls();
  };
  fandomArrows.addEventListener('click', function (e) {
    var target = e.target;
    var arrow = target.closest('.arrows__control');
    if (arrow) {
      var direction = arrow.dataset.direction;
      direction ? handleCards(direction) : '';
    }
  });
};