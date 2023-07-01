<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { answer, resetAnswer } from '../stores/stores.js'
    import Composite from './Composite.svelte'

    onMount(() => window.scrollTo(0, 0))

    const handleReset = () => {
        resetAnswer()
    }
</script>

<div in:fade>
    <h2>step4</h2>

    <Composite answer="{$answer}"/>

    <button type="button" on:click={handleReset}>Reset</button>
</div>
