<script>
    export let data;
</script>

<h2>Blog Detail</h2>
<h3>{data.post.title}</h3>
<div>{@html data.post.content}</div>
