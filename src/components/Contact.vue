<template>
    <div class="form">
        <h1>Contact Us</h1>
        <form action="POST" class="mx-auto" style="width: 50vw">
          <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input class="form-control" type="text" placeholder="Enter name" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Email Address</label>
        <input
          class="form-control"
          type="email"
          placeholder="Enter email address"
        />
      </div>
         <div class="mb-3">
        <label for="" class="form-label">Enquiry</label>
        <textarea
          class="form-control"
          type="textarea"
          placeholder="Enter enquiry"
        ></textarea>
      </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Report',
  props: {
  },
  methods: {
    
  }
}
</script>