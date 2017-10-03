export default class EntityManager {
  constructor(type, entities = []) {
    this.type = type
    this.entities = []
  }

  drawAll(display) {
    this.entities.forEach(entity => entity.draw(display));
  }

  spawnNew(...args) {
    const freshEntity = (new this.type(...args))
    this.entities.push(freshEntity)
  }

  *[Symbol.iterator] () {
    for (const e of entities) {
      yield e
    }
  }

}
