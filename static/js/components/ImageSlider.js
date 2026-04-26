export class ImageSlider {
  constructor(container, images) {
    this.container = container;
    this.images = images;
    this.currentIndex = 0;
    this.render();
    this.bindEvents();
  }

  render() {
    if (!this.container) return;

    const mainImg = this.container.querySelector('.product-main-img');
    const thumbs = this.container.querySelectorAll('.product-gallery-thumb');

    if (mainImg) {
      mainImg.src = this.images[this.currentIndex];
    }

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle('border-orange-600', i === this.currentIndex);
      thumb.classList.toggle('border-gray-200', i !== this.currentIndex);
    });
  }

  bindEvents() {
    const prevBtn = this.container.querySelector('.product-gallery-prev');
    const nextBtn = this.container.querySelector('.product-gallery-next');
    const thumbs = this.container.querySelectorAll('.product-gallery-thumb');

    prevBtn?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.render();
    });

    nextBtn?.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.render();
    });

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        this.currentIndex = i;
        this.render();
      });
    });
  }
}