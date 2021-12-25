<script>
	import '../global.css';
	import SideBar from '../components/SideBar/SideBar.svelte';
</script>

<div class="flex">
	<SideBar />
	<div class="container mx-auto my-6 max-w-lg">
		<slot />
	</div>
</div>
