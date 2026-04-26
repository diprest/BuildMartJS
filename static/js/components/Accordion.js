export class Accordion {
  constructor(container) {
    this.container = container;
    this.toggle = container?.querySelector('.accordion-toggle');
    this.content = container?.querySelector('.accordion-content');
    this.chevron = container?.querySelector('.accordion-chevron');
    this.bindEvents();
  }

  bindEvents() {
    this.toggle?.addEventListener('click', () => {
      const isOpen = !this.content.classList.contains('hidden');
      this.content.classList.toggle('hidden');
      this.toggle.setAttribute('aria-expanded', String(!isOpen));
      this.chevron?.classList.toggle('rotate-180', !isOpen);
    });
  }
}