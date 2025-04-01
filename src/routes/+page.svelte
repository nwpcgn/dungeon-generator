<script lang="ts">
	import { dungeon, DungeonDrawer } from '$lib'
	// const set1 = new Set()
	let { data } = $props()
</script>

<svelte:head><title>NWP-Dungeon</title></svelte:head>

<main class="main">
	<section class="page-layer center nwp game-bg">
		<article class="flex flex-col gap-4">

			<ul class="menu menu-lg bg-base-200 rounded-box w-56">
				<li class="menu-title">Navigation</li>
				{#each data.nav as { name, href, icon }}
					<li>
						
						<a href="#{href}">
							{@render iconT(icon)}
							<span>{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</article>
	</section>
</main>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}



