<script lang="ts">
	import { dungeon, DungeonDrawer } from '$lib'
	// const set1 = new Set()
	let isOpen = $state(false)
</script>





{#snippet pageContent()}
	<section class=" flex flex-col items-center">
		<nav class="flex gap-4">
			<div class="join">
				<button class="btn btn-info" onclick={() => dungeon.create()}
					>Generate</button>
				<span class="join-item input">
					{dungeon.config.width} x {dungeon.config.height}
				</span>
				<label for="my-drawer-4" class="btn-square btn join-item btn-info">
					<svg class="nwp-icon nwp-options" style="--fs: 18px;"
						><use xlink:href="#nwp-options"></use></svg>
				</label>
			</div>
		</nav>
		<div class="bg-base-300 rounded-box p-2">
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
	</section>
{/snippet}

<svelte:head><title>NWP-Dungeon-Generator</title></svelte:head>

<div class="drawer drawer-end">
	<input
		id="my-drawer-4"
		type="checkbox"
		bind:checked={isOpen}
		class="drawer-toggle" />
	<div class="drawer-content">
		<div class="content">
			{@render pageContent()}
		</div>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"
		></label>
		<DungeonDrawer
			close={() => {
				isOpen = false
			}}></DungeonDrawer>
	</div>
</div>
