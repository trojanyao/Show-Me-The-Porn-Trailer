import { AddBtn } from './utils/add-video-btn'
import { NA } from './makers/naughty-america'

async function main() {
	AddBtn(NA())
}

main().catch((e) => {
	console.log(e)
})