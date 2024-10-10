<template>
    <div class="searchBox" :class="{ actived : focusIn ? 'actived' : '', btnDisabled : btnDisabled && focusIn ? 'btnDisabled' : '' }">
        <input type="text" 
               class="commonInput"  
               :placeholder="placeholder" 
               :disabled="disabled"
               :btnDisabled="btnDisabled" 
               @focus="this.focusIn = !this.focusIn"  
               @blur="this.focusIn = false" />
        <button type="button" 
                class="searchIcon" 
                title="검색" 
                :disabled="disabled" 
                :btnDisabled="btnDisabled" 
                @focus="this.focusIn = !this.focusIn"  
                @blur="this.focusIn = false">검색
        </button>
    </div>
</template>

<script>
export default {
    name: 'SearchArea',
    props: {
        placeholder : {
            type: String,
            default : '검색어 입력'
        },
        disabled : {
            type: Boolean,
            default : false
        },
        btnDisabled : {
            type: Boolean,
            default : false
        },
	},
    data() {
        return {
            focusIn : false,
        }
    }
}
</script>
