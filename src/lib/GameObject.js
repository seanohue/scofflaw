export default class GameObject {
  constructor(x, y, glyph, color) {
    this.x = x
    this.y = y
    this.glyph = glyph || "="
    this.color = color || "#ff0"
  }

  draw(display) {
    display.draw(this.x, this.y, this.glyph, this.color)
  }
}
