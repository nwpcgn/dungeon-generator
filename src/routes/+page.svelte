<script lang="ts">
	import Dungeon from '$lib/dungeon/Dungeon.svelte'
	// const set1 = new Set()
	let { data } = $props()
</script>

<svelte:head><title>NWP-Dungeon</title></svelte:head>

<main class="main game-bg">
	<section class="page-layer center nwp">
		<article>
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
			<Dungeon></Dungeon>
		</article>
	</section>
</main>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
