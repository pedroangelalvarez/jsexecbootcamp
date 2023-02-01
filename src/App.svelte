<script>
	import { onMount } from 'svelte';
	let root;
	let text;
	let value;
	let shadowRoot;
	
  
	onMount(() => {
	   const nd = root.querySelectorAll('.forminput');
	   shadowRoot = root.attachShadow({ mode: "open" });
	   shadowRoot.innerHTML = `
			<style>
				ul {
					list-style: none;
					padding: 0;
					margin: 0;
				}
				li {
					display: inline-block;
					margin: 0 0.5em;
				}
			</style>
			<div id="shadow">
                <h1>Perfil profesional</h1>
                <p>Nombre</p>
                <input type="text" id="name" name="name" placeholder="Nombre" required>
                <p>Apellidos</p>
                <input type="text" id="surname" name="surname" placeholder="Apellidos" required>
                <p>Correo electrónico</p>
                <input type="email" id="email" name="email" placeholder="Correo electrónico" required>
                <p>Idiomas</p>
                <div id="listLanguages">
                <input type="range" id="english" name="english" min="0" max="100" value="0">
                <label for="english">Inglés</label>
                <input type="range" id="spanish" name="spanish" min="0" max="100" value="0">
                <label for="spanish">Español</label>
                </div>
				<p>Lenguajes de programación que dominas</p>
				<div id="listLanguages">
				<ul>
					<li>
						<input type="checkbox" id="language-1" name="language" value="JavaScript">
						<label for="language-1">JavaScript</label>
					</li>
					<li>
						<input type="checkbox" id="language-2" name="language" value="Python">
						<label for="language-2">Python</label>
					</li>
					<li>
						<input type="checkbox" id="language-3" name="language" value="Java">
						<label for="language-3">Java</label>
					</li>
					<li>
						<input type="checkbox" id="language-4" name="language" value="C++">
						<label for="language-4">C++</label>
					</li>
					<li>
						<input type="checkbox" id="language-5" name="language" value="C#">
						<label for="language-5">C#</label>
					</li>
					<li>
						<input type="checkbox" id="language-6" name="language" value="PHP">
						<label for="language-6">PHP</label>
					</li>
					<li>
						<input type="checkbox" id="language-7" name="language" value="Ruby">
						<label for="language-7">Ruby</label>
					</li>
					<li>
						<input type="checkbox" id="language-8" name="language" value="Swift">
						<label for="language-8">Swift</label>
					</li>
					<li>
						<input type="checkbox" id="language-9" name="language" value="Go">
						<label for="language-9">Go</label>
					</li>
					<li>
						<input type="checkbox" id="language-10" name="language" value="R">
						<label for="language-10">R</label>
					</li>
					</ul>
				</div>
                <div>
                <p>Adjunta tu CV</p>
                <input type="file" id="cv" name="cv" accept="application/pdf">
                </div>
                <div>
                <input type="submit" value="Enviar">
                </div>
			</div>
		`;
	});
</script>
  
<div id="root" bind:this={root}>
</div>