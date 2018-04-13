<template lang="pug">
  .wu-card
    .wu-card__thumb
      img.wu-card__img(:src="thumb")
    .wu-card__content
      .wu-card__row(v-if="title || price !== undefined")
        .wu-card__title(v-if="title") {{ title }}
        .wu-card__price(v-if="price !== undefined") ¥ {{ price }}
      .wu-card__row(v-if="desc || num !== undefined")
        .wu-card__desc(v-if="desc") {{ desc }}
        .wu-card__num(v-if="num !== undefined") x {{ num }}
    .wu-card__footer
      slot
</template>

<script>

export default {
  name: 'wuCard',

  props: {
    thumb: String,
    title: String,
    desc: String,
    centered: Boolean,
    num: [Number, String],
    price: [Number, String]
  }
}

</script>
