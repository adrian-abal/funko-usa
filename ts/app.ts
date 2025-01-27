class Slider {
  container: HTMLElement;
  slidesContainer: HTMLElement;
  slideList: NodeListOf<HTMLElement>;
  controlDots: NodeListOf<HTMLButtonElement> | null;
  controlArrows: NodeListOf<HTMLButtonElement> | null;
  step: number;

  constructor(containerSelector: string, slidesContainer: string, slide: string, arrows?: string, dots?: string) {
    this.container = document.querySelector(containerSelector) as HTMLElement
    this.slidesContainer = this.container.querySelector(slidesContainer) as HTMLElement
    this.slideList = this.slidesContainer.querySelectorAll(slide)
    this.controlDots = dots
      ? this.container.querySelectorAll('.dots__control') as NodeListOf<HTMLButtonElement>
      : null
    this.controlArrows = arrows
      ? this.container.querySelectorAll('.arrows__control') as NodeListOf<HTMLButtonElement>
      : null
    this.step = 0

    this.init()
  }

  private init() {
    this.container.addEventListener('click', (e) => this.handleClick(e));
   // this.update();
  }

  public handleClick(e: Event) {
    const target = e.target as HTMLElement;

    // Handle arrows
    const arrow = target.closest('.arrows__control') as HTMLButtonElement;
    if (arrow) {
      const direction = arrow.dataset.direction;
      if (direction) this.moving(direction);
    }

    // Handle dots
    if (target.matches('.dots__control')) {
      const dotSelected = target.dataset.dot;
      if (dotSelected) {
        this.step = parseInt(dotSelected);
        this.update()
      }
    }
  }

  public moving(direction: string) {
    const totalItems = this.slideList.length

    if (direction === 'previous') {
      if (this.step > 0) {
        this.step--
      } else {
        this.step = totalItems - 1
      }
    } 
    
    if (direction === 'next') {
      if (this.step < totalItems - 1) {
        this.step++
      } else {
        this.step = 0
      }
    }

    this.update()
  }

  private update() {
    const move = 100 / this.slideList.length * this.step * -1;
    this.slidesContainer.style.transform = `translateX(${move}%)`;

    if (this.controlDots) {
      this.controlDots.forEach(dot => dot.classList.remove('dots__control--active'));
      this.controlDots[this.step].classList.add('dots__control--active');
    }
  }
}

const announcementsSlider = new Slider('.announcements', '.announcements__slides', '.announcements__slide', '.announcements__arrows');

const heroSlider = new Slider('.hero', '.hero__slides', '.hero__slide', '.hero__arrows', '.hero__dots');

const popDigitalSlider = new Slider('.popdigital', '.popdigital__slides', '.popdigital__slide', '.popdigital__arrows', '.popdigital__dots');

const bannerBtn = document.querySelector('.banner__button') as HTMLButtonElement
const bannerProduct = document.querySelector('.banner__img') as HTMLImageElement
const bannerMore = document.querySelector('.banner__more') as HTMLDivElement

bannerBtn.addEventListener('click', () => {
  if (bannerBtn.getAttribute('aria-expanded') === 'true') {
    bannerBtn.ariaExpanded = 'false'
  } else {
    bannerBtn.ariaExpanded = 'true'
  }

  bannerBtn.classList.toggle('banner__button--expand')
  bannerMore.classList.toggle('banner__more--expand')
  bannerProduct.classList.toggle('banner__img--expand')
})
