<template>
    <v-card
    class="myCard">
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="purple lighten-3"
    >
      <span>Message sent successfully!🥰</span>
    </v-snackbar>
    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="submit"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              type="email"
              color="purple lighten-2"
              label="E-mail"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.message"
              :rules="rules.message"
              color="purple lighten-2"
            >
              <template v-slot:label>
                <div>
                  Message
                </div>
              </template>
            </v-textarea>
          </v-col>
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              text
              color="purple lighten-2"
              type="submit"
              @click="validate"
            >
              Sent
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  name: 'WriteMe',
  data() {
    const defaultForm = Object.freeze({
      email: '',
      message: '',
    });
    return {
      form: { ...defaultForm },
      rules: {
        email: [(val) => (val || '').length > 0 || 'This field is required',
          (val) => emailRegExp.test(val) || 'This field is incorrect'],
        message: [(val) => (val || '').length > 0 || 'This field is required'],
      },
      snackbar: false,
      valid: true,
      defaultForm,
    };
  },

  methods: {
    submit() {
      this.snackbar = true;
    },

    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 50%;
}

.myCard {
  max-width: 800px;
}

@media (max-width: 599px) {
  .myCard {
    width: 380px;
  }
}

@media (max-width: 467px) {
  .myCard {
    max-width: 300px;
  }
}

@media (max-width: 399px) {
  .myCard {
    max-width: 290px;
  }
}
</style>
