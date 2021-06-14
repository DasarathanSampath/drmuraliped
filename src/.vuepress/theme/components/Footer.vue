<template>
    <footer class="nav-links footer-links">
        <div class="nav-item" v-for="footerLink in footerLinks" :key="footerLink.key">
            <NavLink class="footer-text"
                :item="footerLink"
            />
        </div>
        <div style="text-align: center;">
            <i class="footer-slogan"> {{footerSlogan}} </i>
        </div>
    </footer>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
    components: {
        NavLink
    },
    computed: {
        footerLinks(){
            return this.$themeConfig.locales[this.$localePath].foot
        },
        footerSlogan() {
            return this.$themeConfig.locales[this.$localePath].footSlohan
        }
    }
}
</script>

<style lang="stylus" scoped>

.footer-links
     float center
     padding-bottom 1rem
     border-bottom 1px solid gray     
@media screen and (max-width $MQNarrow) {
  .footer-links{
    padding-left 0
  }
}

.footer-text
    padding 1em 2em 0 2em
    color #1C205B
    font-size 1.1rem
@media screen and (max-width $MQNarrow) {
  .footer-text{
    padding 1em 1em 0 1em    
  }
}
.footer-text:hover, .footer-text:active {
    text-decoration underline
    text-decoration-style double
}

.footer-slogan
    font-size: 0.9rem; 
    background: #f1f5f7; 
    font-weight: bold; 
    border-radius 2px
    padding 0 1rem 0 1rem

</style>