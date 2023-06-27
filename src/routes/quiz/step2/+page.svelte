<script>
    import { beforeUpdate } from "svelte";
    import { goto } from '$app/navigation'
    import { answer } from '../stores.js';

    async function handleSubmit () {
        await goto('/quiz/step3');
    }

    async function handleBack () {
        await　goto('/quiz/step1');
    }

    beforeUpdate(() => {
        if ($answer.nickname === null) {
            goto('/quiz/step1');
        }
    });
</script>

<h2>Quiz / step2</h2>

<p>Hello, {$answer.nickname}</p>

<div>
    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <button type="button" on:click={handleBack}>Prev</button>
        <button>Next</button>
    </form>
</div>
