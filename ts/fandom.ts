const fandoms = [
  {   
    url: '#',
    name: 'Pop! Yourself',
    media: {
      brand: {
        src:'popyourselfv3-logo-fandom-tile.png',
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
    copyright: 'POP! Yourself © 2023',
  },
  {   
    url: '#',
    name: 'Funko Rewind',
    media: {
      brand: {
        src:'funkorewindv2-logo-fandom-tile.png',
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
    copyright: 'Funko Rewind © 2023',
  },
  {   
    url: '#',
    name: 'Soda',
    media: {
      brand: {
        src:'Soda-logo.png',
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
    copyright: 'Soda © 2022',
  },
  {   
    url: '#',
    name: 'Gold',
    media: {
      brand: {
        src:'Gold-logo.png',
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
    copyright: 'Gold © 2022',
  },
  {   
    url: '#',
    name: 'Bitty Pop!',
    media: {
      brand: {
        src:'fandom-bity-pop.png',
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
    copyright: 'Bitty Pop © 2022',
  },
  {   
    url: '#',
    name: 'Popsies',
    media: {
      brand: {
        src:'Popsies-logov4.png',
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
    copyright: 'Popsies © 2022',
  },
  {   
    url: '#',
    name: 'Funko Games',
    media: {
      brand: {
        src:'Funko-Games-logo.png',
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
    copyright: 'Funko Games © 2022',
  },
  {   
    url: '#',
    name: 'Pop!',
    media: {
      brand: {
        src:'Pop!-Funko-logo.png',
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
    copyright: 'Pop! © 2022',
  },
  {   
    url: '#',
    name: 'Snaps',
    media: {
      brand: {
        src:'Snapsies-Logo2010.53.0920PM.png',
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
    copyright: 'Snaps © 2022',
  }
]

const fandomContainer = document.querySelector('.fandom__ul') as HTMLDivElement

fetch('components/fandom.html')
  .then(response => response.text())
  .then(html => {
    const templateContainer = document.createElement('div')
    templateContainer.innerHTML = html

    // Seleccionar el template
    const template = templateContainer.querySelector('#fandom__template') as 
    HTMLTemplateElement

    fandoms.forEach(item => {
      let li = document.createElement('li')
      li.className = 'fandom__li'

      const fandom = template.content.cloneNode(true) as DocumentFragment

      const cardLink = fandom.querySelector('.fandom__card') as HTMLAnchorElement
      const imgLogo = fandom.querySelector('.fandom__logo') as HTMLImageElement
      const imgProduct = fandom.querySelector('.fandom__product') as HTMLImageElement
      const copyright = fandom.querySelector('.fandom__span') as HTMLSpanElement

      cardLink.href = item.url
      cardLink.title = item.name
      imgLogo.src = `assets/img/fandom/${item.media.brand.src}`
      imgLogo.width = item.media.brand.width
      imgLogo.height = item.media.brand.height
      imgLogo.alt = item.media.brand.alt
      imgLogo.style.aspectRatio = item.media.brand.aspectRatio
      imgProduct.src = `assets/img/fandom/${item.media.product.src}`
      imgProduct.width = item.media.product.width
      imgProduct.height = item.media.product.height
      imgProduct.alt = item.media.product.alt
      imgProduct.style.aspectRatio = item.media.product.aspectRatio
      copyright.textContent = item.copyright
      
      li.appendChild(fandom)
      fandomContainer.appendChild(li)

      // LOADING PRODUCT SLIDER MOVE LOGIC
      fandomCarouselMove()
      
})
}).catch(error => console.error('Error al cargar el template:', error))

const fandomCarouselMove = () => {
  const fandomArrows = document.querySelector('.fandom__arrows') as HTMLDivElement
  const fandomArrowControl = fandomArrows.querySelectorAll('.arrows__control') as NodeListOf<HTMLButtonElement>
  const fandomUl = document.querySelector('.fandom__ul') as HTMLDivElement
  const fandomLi = document.querySelectorAll('.fandom__li') as NodeListOf<HTMLLIElement>

  const getCardsPerView = () => {
    const width = window.innerWidth;

    if (width <= 640) return 2;
    if (width <= 768) return 3;
    if (width <= 1024) return 4;
    if (width <= 1280) return 5;
    return 6;
  }

  const handleControls = () => {
    if (fandomStep === 0) {
      fandomArrowControl[0].disabled = true
      fandomArrowControl[0].style.visibility = 'hidden'
    } else {
      fandomArrowControl[0].disabled = false
      fandomArrowControl[0].style.visibility = 'visible'
    }
    
    if (fandomStep >= fandomLi.length - getCardsPerView()) {
      fandomArrowControl[1].disabled = true
      fandomArrowControl[1].style.visibility = 'hidden'
    } else {
      fandomArrowControl[1].disabled = false
      fandomArrowControl[1].style.visibility = 'visible'
    }
  }

  let fandomStep = 0
  handleControls()

  const handleCards = (direction: string) => {
    if (direction === 'previous') {
      if (fandomStep > 0) {
        fandomStep--
      } else {
        fandomStep = 0
      }
    }
  
    if (direction === 'next') {
      if (fandomStep < fandomLi.length - getCardsPerView()) {
        fandomStep++
      } else {
        fandomStep = fandomLi.length - getCardsPerView()
      }
    }
  
    let move = 100 / fandomLi.length * fandomStep * -1
    fandomUl.style.transform = `translateX(${move}%)`
    
    handleControls()
  }

  fandomArrows.addEventListener('click', function (e) {
    const target = e.target as HTMLElement
  
    const arrow = target.closest('.arrows__control') as HTMLButtonElement
    if (arrow) {
      const direction = arrow.dataset.direction
      direction ? handleCards(direction) : ''
    }
  })
}
