<template>
	<div ref="dropdownBox" :id="dropdownId" class="dropdownList"
		:class="{ open: dropdownBox, required: required ? 'required' : '' }">
		<button type="button" class="dropdownBtn" title="항목선택" @click="dropdownBtn(dropdownId)">
			<span ref="dropdownSelected">
				{{ this.optionName }}
			</span>
		</button>

		<div class="dropdownCont">
			<ul>
				<li v-for="(option, index) in this.items" :value="option.value" :key="index" :class="option.className">
					<button type="button" title="선택" @click="dropdownView">
						{{ option.name }}
					</button>
				</li>
			</ul>
		</div>
		<p v-if="this.required">{{ requiredText }}</p>
	</div>
</template>

<script>
export default {
	name: 'DropDown',
	props: {
		items: {
			default: []
		},
		required: {
			type: Boolean,
			default: false,
		},
		requiredText: {
			type: String,
			default: '필수입력사항입니다.'
		},
		dropdownId: {
			type: String
		},
		optionName: null,
	},
	data: function () {
		return {
			dropdownBox: false,
			result: '',
		};
	},
	methods: {
		dropdownBtn(selectedId) {
			const dropdownList = document.querySelectorAll('.dropdownList')
			dropdownList.forEach((ele) => {
				const id = ele.getAttribute('id')
				const isOpen = id === selectedId && !ele.classList.contains('open')
				ele.classList.toggle('open', isOpen)
			})
		},
		dropdownView(e) {
			const selectedOption = this.$refs.dropdownSelected
			selectedOption.innerText = e.target.innerText
			this.dropdownBtn()
		},
		dropdownTouch(e) {
			const dropdownBox = this.$refs.dropdownBox
			if (e.target.closest('.dropdownList') === null) {
				const isOpen = dropdownBox.classList.contains('open')
				if (isOpen) {
					dropdownBox.classList.remove('open')
				}
			}
		},
	},
	mounted() {
		// const scrollBox = document.querySelector(".containerArea");
		// scrollBox.addEventListener("scroll", this.dropdownTouch);
		document.addEventListener("click", this.dropdownTouch);
	},
	unmounted() {
		// const scrollBox = document.querySelector(".containerArea");
		// scrollBox.removeEventListener("scroll", this.dropdownTouch);
		document.removeEventListener("click", this.dropdownTouch);
	},
}
</script>
