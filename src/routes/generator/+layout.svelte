<script lang="ts">
	import { dungeon } from '$lib'

	let { children } = $props()
	let winW = $state(0)
	let winH = $state(0)
	let area = $state(0)
	$effect(() => {
		if (winH && winW) {
			const saveSize = Math.floor(Math.min(winW, winH)  * 0.8)
			area = saveSize
		}
	})
</script>

<main class="main game-bg" style="--size: {area}px;" bind:clientHeight={winH} bind:clientWidth={winW}>
	{@render children()}
</main>
