<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'
    import { nextStep, interview1, answer } from '../stores/stores.js'

    onMount(() => window.scrollTo(0, 0))

    const handleSubmit = () => {
        nextStep()
    }
</script>

<div in:fade>
    <h2>step2</h2>

    <p>Hi, {$answer.nickname} !!</p>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <ul>
            {#each $interview1 as interview}
                <li>
                    <p>
                        {interview.no} {interview.text}
                    </p>
                    <ul>
                        {#each interview.choices as choice}
                            <li>
                                <label>
                                    <input type="radio" name="{interview.name}" value="{choice.id}" required bind:group={$answer[interview.name]}/>
                                    {choice.text}
                                    {#if choice.src}
                                        <img src="{choice.src}" alt="{choice.text}">
                                    {/if}
                                </label>
                            </li>
                        {/each}
                    </ul>
                </li>
            {/each}
        </ul>
        <button>Next</button>
    </form>

    <p>Q1: {$answer.q1}</p>
    <p>Q2: {$answer.q2}</p>
    <p>Q3: {$answer.q3}</p>
    <p>Q4: {$answer.q4}</p>
    <p>Q5: {$answer.q5}</p>
    <p>Q6: {$answer.q6}</p>
</div>

