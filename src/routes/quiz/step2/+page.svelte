<script>
    import { nickname } from '../stores.js';
    import { goto } from '$app/navigation'

    // console.log($nickname);

    async function handleSubmit () {
        goto('/quiz/step3');
    }

    async function handleBack () {
        goto('/quiz/step1');
    }
</script>

<h2>Quiz / step2</h2>

<p>Hello, {$nickname}</p>

<div>
    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <button type="button" on:click={handleBack}>Prev</button>
        <button>Next</button>
    </form>
</div>
