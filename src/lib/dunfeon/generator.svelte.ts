import NewDungeon from './NewDungeon.js'
const OP = {
	width: 30,
	height: 30,
	minRoomSize: 5,
	maxRoomSize: 20
}

class DungeonGen {
	width = $state(30)
	height = $state(30)
	minRoomSize = $state(5)
	maxRoomSize = $state(20)
	map = $state([])
	style = $derived(`--cols: ${this.width}; --rows: ${this.height};`)

	constructor({ width, height, minRoomSize, maxRoomSize }) {
		this.width = width
		this.height = height
		this.minRoomSize = minRoomSize
		this.maxRoomSize = maxRoomSize
		this.create()
	}

	create() {
		const ops = {
			width: this.width,
			height: this.height,
			minRoomSize: this.minRoomSize,
			maxRoomSize: this.maxRoomSize
		}
		const data = NewDungeon(ops)
		this.map = data
		console.log({ data })
	}
}

export let dungeon = new DungeonGen({ ...OP })
