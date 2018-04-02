<template>
  <div class="wu-card">
    <div class="wu-card__thumb">
      <img :src="thumb" class="wu-card__img" >
    </div>
    <div class="wu-card__content">
      <div class="wu-card__row" v-if="title || price !== undefined">
        <div v-if="title" class="wu-card__title">{{ title }}</div>
        <div v-if="price !== undefined" class="wu-card__price">¥ {{ price }}</div>
      </div>
      <div class="wu-card__row" v-if="desc || num !== undefined">
        <div v-if="desc" class="wu-card__desc">{{ desc }}</div>
        <div v-if="num !== undefined" class="wu-card__num">x {{ num }}</div>
      </div>
    </div>
    <div class="wu-card__footer">
      <slot></slot>
    </div>
  </div>
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
