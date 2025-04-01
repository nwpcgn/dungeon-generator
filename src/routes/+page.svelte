<script lang="ts">
	import { dungeon } from '../lib/dunfeon/generator.svelte.ts'
	const set1 = new Set()

	$effect(() => {
		if (dungeon.map.length) {
			console.log({ map: dungeon.map })
		}
	})

	$inspect(dungeon)
</script>

<section class="container mx-auto w-full p-8">
	<article class="content">
		<hgroup>
			<h1>Welcome to your library project</h1>
			<div>
				<pre>{dungeon?.style}</pre>
			</div>
			<p>
				Create your package using @sveltejs/package and preview/showcase your
				work with SvelteKit
			</p>
			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read
				the documentation
			</p>
		</hgroup>
		<div>
			<div class="rogue-grid" style={dungeon?.style}>
				{#if dungeon?.map.length}
					{#each dungeon.map as row, y}
						{#each row as col, x}
							<div class="rogue-tile t-{col}">
								<span class="text-xs font-thin">{col}</span>
							</div>
						{/each}
					{/each}
				{/if}
			</div>
		</div>
	</article>
	<div class="content">
		<div class="flex justify-between gap-4">
			<button class="btn" onclick={() => dungeon.create()}>Create</button>
		</div>
	</div>
</section>
