export class TechIconContainer extends HTMLElement {
  image: HTMLImageElement;
  tooltip: HTMLDivElement;
  constructor() {
    super();
    this.image = this.querySelector("img") as HTMLImageElement;
    this.tooltip = this.querySelector("div") as HTMLDivElement;

    this.image.addEventListener("mousemove", (e) => this.onMouseMove(e));
    this.image.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  getPosition(e: MouseEvent) {
    let rect = this.image.getBoundingClientRect();
    return [
      e.clientX - rect.left - this.tooltip.offsetWidth / 2,
      e.clientY - rect.top + 20,
    ];
  }

  onMouseMove(e: MouseEvent) {
    this.tooltip.style.display = "flex";
    let position = this.getPosition(e);
    this.tooltip.style.left = `${position[0]}px`;
    this.tooltip.style.top = `${position[1]}px`;
  }

  onMouseLeave() {
    this.tooltip.style.display = "none";
  }
}
