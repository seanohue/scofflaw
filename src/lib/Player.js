import GameObject from '@/lib/GameObject'

export default class Player extends GameObject {
  constructor(x, y) {
    super(x, y, '@')
  }
}
