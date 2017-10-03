export default class MapTile {
  constructor (x, y, glyph) {
    this.x = x
    this.y = y
    this.glyph = glyph || '.'
    this.entities = []
  }

  get priority () {
    return -Infinity
  }

  get highestPriority () {
    return this.entities.reduce((highest, current) => {
      if ((current.priority || 0) > highest.priority) {
        return current
      }
    }, this)
  }

  draw (display) {
    const oneToDraw = this.highestPriority
    if (oneToDraw === this) {
      return display.draw(
        this.x,
        this.y,
        this.glyph
      )
    }

    return oneToDraw.draw(display)
  }
}
