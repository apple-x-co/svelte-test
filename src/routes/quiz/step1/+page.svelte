<script>
    import { goto } from "$app/navigation";
    import { nickname } from '../stores.js';

    let name = $nickname;

    async function handleSubmit () {
        // console.log(name);
        nickname.set(name);
        goto('/quiz/step2');
    }
</script>

<h2>Quiz / step1</h2>

<div>
    <form method="post" on:submit|preventDefault="{handleSubmit}">
        Name: <input name="name" required minlength="1" maxlength="6" bind:value={name} />
        <button>Next</button>
    </form>
</div>
