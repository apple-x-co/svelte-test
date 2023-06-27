<script>
    import { goto } from "$app/navigation";
    import { answer } from '../stores.js';

    async function handleSubmit () {
        await　goto('/quiz/step2');
    }
</script>

<h2>Quiz / step1</h2>

<div>
    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <lable>
            Name: <input required minlength="1" maxlength="6" bind:value={$answer.nickname} />
        </lable>
        <button>Next</button>
    </form>
</div>
