<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h2>Quotes added</h2>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{ width: quotesAdded* 10 + '%'}" :aria-valuenow="quotesAdded" aria-valuemin="0" :aria-valuemax="maxQuotes"> {{ quotesAdded }} / {{ maxQuotes }} </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Quote</label>
          <textarea class="form-control"
                    rows="3"
                    v-model="newQuote"
                    :placeholder="quotesAdded > 9 ? 'Please, remove some quotes to add new' : 'Add new quote'">
         </textarea>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary mb-2" @click="addNewQuote">Add your quote</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="quote in quoteList" @click="removeQuote(quote)">
        <div class="card">
          <div class="card-body">{{ quote }}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="alert alert-info col-md-12" role="alert">
        Info: click on quote to remove it!
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    data() {
      return {
        quoteList: [],
        maxQuotes: 10,
        newQuote: ''
      };
    },
    computed: {
      quotesAdded() {
        return this.quoteList.length;
      }
    },
    methods: {
      addNewQuote() {
        if (this.newQuote !== '' && this.quoteList.length < this.maxQuotes ) {
          this.quoteList.push(this.newQuote);
          this.newQuote = '';
        }
      },
      removeQuote(quote) {
        this.quoteList = this.quoteList.filter(item => item !== quote );
      }
    }
  }
</script>
