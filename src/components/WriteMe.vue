<i18n>
{
  "ru": {
    "success-message": "Ваше сообщение отправлено",
    "placeholder-message": "Сообщение",
    "button-sent": "Отправить"
  },
  "en": {
    "success-message": "Message sent successfully",
    "placeholder-message": "Message",
    "button-sent": "Sent"
  }
}
</i18n>
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
      <span>{{ $t('success-message') }}!🥰</span>
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
                  {{ $t('placeholder-message') }}
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
              {{ $t('button-sent') }}
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import axios from 'axios';

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
        email: [(val) => (val || '').length > 0 || '❗❗❗',
          (val) => emailRegExp.test(val) || '❌'],
        message: [(val) => (val || '').length > 0 || '❗❗❗'],
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
    async validate() {
      await axios
        .post(`${this.$httpRequest}/sentMessage`, {
          mail: this.form.email,
          message: this.form.message,
        });
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
