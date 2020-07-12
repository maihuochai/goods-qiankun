<template lang="pug">
  div(:class="$style.inner")
    el-select(v-model="user" placeholder="选择玩家类型")
      el-option(
      v-for="(user,index) of users"
      :key="index"
      :label="user.name"
      :value="user.value")
    el-select(v-model="good" placeholder="选择物品")
      el-option(
        v-for="(user,index) of goods"
        :key="index"
        :label="user.name"
        :value="user.id")
    div
      |数量：
      el-input-number(v-model="number" :min="1" :max="64" label="数量")
    div
      |耐久消耗：
      el-input-number(v-model="consume" :min="0" :max="999" label="数量")
    el-checkbox-group(:class="$style.enchanting" v-model="selectedEnchanting")
      div(v-for="enchanting of enchantings" :key="enchanting.id")
        el-checkbox(:label="enchanting.id" :class="$style.checkBox") {{enchanting.name}}
        el-tooltip( effect="dark" :content="enchanting.desc" placement="top")
          el-input-number(v-model="enchanting.level" :min="0" :max="9999999" label="描述文字" size="medium")
    el-input(
      type="textarea"
      :class="$style.textarea"
      placeholder="请输入内容"
      v-model="instructions"
      maxlength="256"
      show-word-limit)
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Enchanting, Good, User } from '@/typings/enchanting'
import { enchantings, goods, users } from '@/data/data'
import { namespace, State } from 'vuex-class'

interface EnchantingLevel{
  id: string;
  lvl: number;
}

const globaldata = namespace('globalData')

@Component
export default class Home extends Vue {
  user=users[0].value
  good=goods[0].id
  number=1
  consume=1
  selectedEnchanting: Array<string>=[]
  enchantings: Array<Enchanting>=enchantings
  users: Array<User>=users
  goods: Array<Good>=goods
  list: {[index: string]: Blob} = {}

  @Watch('instructions')
  onInstructions (value:string) {
    const date = new Date()
    const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
    this.setRecord({
      fromType: 'MICRO_APPLICATION',
      record: `${dateStr}     ${value}`
    })
  }

  set instructions (value: string) {
    console.log(value)
  }

  get instructions () {
    const enchantingData: Array<EnchantingLevel> = []
    for (const id of this.selectedEnchanting) {
      const data = enchantings.find((item: Enchanting) => item.id === id)
      data && enchantingData.push({
        id: data.id,
        lvl: data.level
      })
    }
    const instruct = `/give ${this.user} ${this.good}{Enchantments:${JSON.stringify(enchantingData).replace(/"/g, '')}} ${this.number}`
    return instruct
  }

  @globaldata.Mutation('SET_RECORD') setRecord!:(data:{ record: string | Array<string>; fromType: 'MAIN_APPLICATION' | 'MICRO_APPLICATION' })=>void

  mounted () {
    // history.pushState('', '', '/personal')
    // this.$axios({
    //   url: 'http://192.168.1.222:8081/api/v1/Video/FindPageList?Index=1&Size=10',
    //   method: 'get',
    //   headers: {
    //     Authorization: '38EE9370368933130C1AE44D6B95646D5A6C571B0D624E6CCD54D7027964905C4FFA6AA09E53332EC9F873B6656A2618DED9C4A69FAECC5D63BCD7BB5453CAA0D3CB56074C5FE724A023DF5BD9BDB4F3D4A871D4CA4497569510F754C9B5EEDEE53A14E4CEDDB3092601AFDA9DC98EF815203BD21903AA1A1B95AAB3603A7306B3FC3EBC1321B04745086B6B0B9C5A3D3DFD7215B4BF91D00425BBAA09B72DD7'
    //   }
    // })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" module>
.inner
  width 100%
  height 100%
  overflow hidden
  display grid
  grid-template-columns repeat(4,1fr)
  grid-template-rows 40px auto 200px
  padding 50px 10%
  grid-gap 20px
  box-sizing border-box
  .enchanting
    position relative
    text-align left
    grid-column 1/5
    display grid
    grid-gap 10px
    grid-template-columns repeat(4,1fr)
    overflow hidden auto
    border-radius 5px
    padding 10px
    border 1px solid #409EFF
    &::before
      content '附魔列表'
      position absolute
      top 0
      left 10px
      width 5em
      height 2em
      line-height 2em
      z-index 1
    .checkBox
      margin-right 10px
      width 90px
  .textarea
    grid-column 1/5
    textarea
      height 100%
</style>
