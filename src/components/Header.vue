<template>
    <div class="row">
        <div class="col-md-12">
            <header>
                <h1>Server Status</h1>
            </header>

            <button @click="currenComponent = 'appQuote'">Quote</button>
            <button @click="currenComponent = 'appAuthor'">Author</button>
            <button @click="currenComponent = 'appNew'">New</button>
            <keep-alive>
              <component :is="currenComponent">
                <h3 slot="title">{{ title }} (from title slot)</h3>
              </component>
            </keep-alive>

            <!-- <app-quote>
              <h3 slot="title">{{ title }} (from title slot)</h3>
              <p slot="content">Here is a wonderful quote! (From content slot)</p>
              <p>This content will go to default unnamed slot</p>


            </app-quote> -->
        </div>
        <hr>
    </div>
</template>

<script>
  import New from './quoteComponent/New';
  import Author from './quoteComponent/Author';
  import Quote from './quoteComponent/Quote';

  export default {
    data() {
      return {
        title: 'The Quote Title',
        currenComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appNew: New,
      appAuthor: Author
    }
  }

</script>
