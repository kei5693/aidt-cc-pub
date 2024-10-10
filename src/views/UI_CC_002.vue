<template>
  <div class="settingBoxWrap">
    <div class="topMenu">
      <div class="title">
        <button type="button" class="btnBack"><span>뒤로 가기</span></button>
        <h2>[수학 5-2] 코스웨어</h2>
      </div>

      <div class="subMenu">
        <div class="btnWrap">
          <button type="button" class="commonBtn buttonSizeM transparentBg"><span>임시저장</span></button>
          <button type="button" class="commonBtn buttonSizeM grayBg"><span>최종저장</span></button>
          <button type="button" class="commonBtn buttonSizeM primaryBg"><span>배포</span></button>
        </div>
      </div>
    </div>

    <div class="tabMenuWrap">
      <div class="tabTitleWrap">
        <div class="innerWrap" ref="tabTitleWrap">
          <ul class="tabs" ref="tabs">
            <li ref="tabItem" class="tabItem" v-for="(tab, index) in tabItems" :key="index" @click="switchTab(index)"
              :class="{active: tab.isActive }">
              <button type="button">{{tab.title}}</button>
            </li>
          </ul>
        </div>
        <div class="btnWrap" :class="{
            first: currentIdx == 0,
            limit: currentIdx == limitIdx && currentIdx != 0
          }">
          <button type="button" class="btnPrev" @click="btnEvent('prev')"
            :disabled="currentIdx == 0"><span>이전</span></button>
          <button type="button" class="btnNext" @click="btnEvent('next')"
            :disabled="currentIdx == limitIdx && currentIdx != 0"><span>다음</span></button>
        </div>
      </div>

      <div class="tabContentWrap">
        <div class="stickyMenu" ref="stickyMenu" @scroll="scrollEvent(0)">
          <ul>
            <li></li>
            <li class="color height160">학습목표</li>
            <li>사전학습</li>
            <li>진단평가</li>
            <li>교실수업</li>
            <li>실습</li>
            <li>활동</li>
            <li>형성평가</li>
            <li>총괄평가</li>
            <li>보충/심화</li>
            <li class="color height140">에듀테크</li>
            <li class="color"></li>
          </ul>
        </div>
        <div class="scrollMenu" ref="scrollMenu" @scroll="scrollEvent(1)">
          <div class="settingListWrap">
            <!-- 1 -->
            <!-- 수정 완료 상태: complete -->
            <ul class="complete">
              <li>
                <h3>컴퓨팅 시스템의 이해 하드웨어</h3>
              </li>
              <li>
                <div class="scrollCont">
                  <ol>
                    <li>컴퓨팅 시스템이 무엇인지 설명할 수 있습니다.</li>
                    <li>다양한 형태의 컴퓨팅 시스템의 역할을 탐색할 수 있습니다.</li>
                    <li>컴퓨팅 시스템이 무엇인지 설명할 수 있습니다.</li>
                    <li>다양한 형태의 컴퓨팅 시스템의 역할을 탐색할 수 있습니다.</li>
                    <li>컴퓨팅 시스템이 무엇인지 설명할 수 있습니다.</li>
                    <li>다양한 형태의 컴퓨팅 시스템의 역할을 탐색할 수 있습니다.</li>
                    <li>컴퓨팅 시스템이 무엇인지 설명할 수 있습니다.</li>
                    <li>다양한 형태의 컴퓨팅 시스템의 역할을 탐색할 수 있습니다.</li>
                    <li>컴퓨팅 시스템이 무엇인지 설명할 수 있습니다.</li>
                    <li>다양한 형태의 컴퓨팅 시스템의 역할을 탐색할 수 있습니다.</li>
                    <li>컴퓨팅 시스템이 무엇인지 설명할 수 있습니다.</li>
                    <li>다양한 형태의 컴퓨팅 시스템의 역할을 탐색할 수 있습니다.</li>
                  </ol>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="edited">
                <div class="checkBoxWrap">
                  <strong>사전학습 자료</strong>
                  <p class="count">4개</p>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="edited">
                <div class="checkBoxWrap">
                  <strong>진단평가 문제지</strong>
                  <p class="count">1개</p>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="edited">
                <div class="checkBoxWrap">
                  <strong>수업자료</strong>
                  <p class="count">20개</p>
                </div>
              </li>
              <li>

              </li>
              <li>

              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="edited">
                <div class="checkBoxWrap">
                  <strong class="aiTitle">AI 형성평가</strong>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>

              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="edited">
                <div class="checkBoxWrap">
                  <strong>수준별 학습</strong>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="productListWrap">
                  <ul class="productList scrollCont">
                    <li><strong>[마타수학]</strong> <span>삼각자</span></li>
                    <li><strong>[매쓰이야기]</strong> <span>계산기</span></li>
                    <li><strong>[마타수학]</strong> <span>삼각자</span></li>
                    <li><strong>[매쓰이야기]</strong> <span>계산기</span></li>
                    <li><strong>[마타수학]</strong> <span>삼각자</span></li>
                    <li><strong>[매쓰이야기]</strong> <span>계산기</span></li>
                    <li><strong>[마타수학]</strong> <span>삼각자</span></li>
                    <li><strong>[매쓰이야기]</strong> <span>계산기</span></li>
                  </ul>

                  <div>
                    <button type="button" @click="this.modalShow = !this.modalShow"><span>상품추가</span></button>
                  </div>
                </div>
              </li>
              <li>
                <div class="btnWrap">
                  <button type="button" class="commonBtn buttonSizeL grayBg"><span>수정</span></button>
                  <button type="button" class="commonBtn buttonSizeL skyBg"><span>미리보기</span></button>
                </div>
              </li>
            </ul>
            <!-- 2 -->
            <ul>
              <li>
                <h3>컴퓨팅 시스템의 이해 하드웨어와 소프트웨어에 대해 알아봅시다.(1.1.2)</h3>
              </li>
              <li>
                <div class="tempCont">
                  <p class="notiTxt">설계할때 학습목표를 입력할 수 있어요.</p>
                  <DropDown :optionName="selectData[0].select" :items="selectData[0].samplelist" dropdownId="d0" style="width:360px"></DropDown>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="checked">
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox1" label="사전학습 자료 제공" checked></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox2" label="진단평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="checked">
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox3" label="수업자료 제공" checked></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="checked">
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox4" label="실습자료 제공" checked></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox5" label="활동자료/평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="checked">
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox6" label="형성평가 제공" checked></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox7" label="총괄평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <!--
                edited: 설계완료
                checked: count show
              -->
              <li class="checked">
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox8" label="수준별 학습 제공" checked></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <p class="notiTxt2">마켓플레이스에 담긴<br>에듀테크 상품을 추가 해 보세요</p>
              </li>
              <li>
                <div class="btnWrap">
                  <button type="button" class="commonBtn buttonSizeL primaryBg"><span>설계하기</span></button>
                </div>
              </li>
            </ul>
            <!-- 3 -->
            <ul>
              <li>
                <h3>컴퓨팅 시스템의 이해 하드웨어와 소프트웨어에 대해 알아봅시다.(1.1.2)</h3>
              </li>
              <li>
                <div class="tempCont">
                  <p class="notiTxt">설계할때 학습목표를 입력할 수 있어요.</p>
                  <DropDown :optionName="selectData[1].select" :items="selectData[1].samplelist" dropdownId="d1" style="width:360px"></DropDown>
                </div>
              </li>
              <li>
                <!-- checked: count show -->
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox1" label="사전학습 자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox2" label="진단평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox3" label="수업자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox4" label="실습자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox5" label="활동자료/평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox6" label="형성평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox7" label="총괄평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox8" label="수준별 학습 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <p class="notiTxt2">마켓플레이스에 담긴<br>에듀테크 상품을 추가 해 보세요</p>
              </li>
              <li>
                <div class="btnWrap">
                  <button type="button" class="commonBtn buttonSizeL primaryBg"><span>설계하기</span></button>
                </div>
              </li>
            </ul>
            <!-- 4 -->
            <ul>
              <li>
                <h3>컴퓨팅 시스템의 이해 하드웨어와 소프트웨어에 대해 알아봅시다.(1.1.2)</h3>
              </li>
              <li>
                <div class="tempCont">
                  <p class="notiTxt">설계할때 학습목표를 입력할 수 있어요.</p>
                  <DropDown :optionName="selectData[2].select" :items="selectData[2].samplelist" dropdownId="d2" style="width:360px"></DropDown>
                </div>
              </li>
              <li>
                <!-- checked: count show -->
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox1" label="사전학습 자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox2" label="진단평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox3" label="수업자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox4" label="실습자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox5" label="활동자료/평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox6" label="형성평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox7" label="총괄평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox8" label="수준별 학습 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <p class="notiTxt2">마켓플레이스에 담긴<br>에듀테크 상품을 추가 해 보세요</p>
              </li>
              <li>
                <div class="btnWrap">
                  <button type="button" class="commonBtn buttonSizeL primaryBg"><span>설계하기</span></button>
                </div>
              </li>
            </ul>
            <!-- 5 -->
            <ul>
              <li>
                <h3>컴퓨팅 시스템의 이해 하드웨어와 소프트웨어에 대해 알아봅시다.(1.1.2)</h3>
              </li>
              <li>
                <div class="tempCont">
                  <p class="notiTxt">설계할때 학습목표를 입력할 수 있어요.</p>
                  <DropDown :optionName="selectData[3].select" :items="selectData[3].samplelist" dropdownId="d3" style="width:360px"></DropDown>
                </div>
              </li>
              <li>
                <!-- checked: count show -->
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox1" label="사전학습 자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox2" label="진단평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox3" label="수업자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox4" label="실습자료 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox5" label="활동자료/평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox6" label="형성평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox7" label="총괄평가 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <div class="checkBoxWrap">
                  <checkboxArea checkId="checkbox8" label="수준별 학습 제공"></checkboxArea>
                  <p class="count">4개</p>
                </div>
              </li>
              <li>
                <p class="notiTxt2">마켓플레이스에 담긴<br>에듀테크 상품을 추가 해 보세요</p>
              </li>
              <li>
                <div class="btnWrap">
                  <button type="button" class="commonBtn buttonSizeL primaryBg"><span>설계하기</span></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ModalArea v-if="this.modalShow" @modalClose="modalClose">
      <template #header>
        <h4>에듀테크 마켓 상품보기</h4>
      </template>

      <template #body>
        <div class="modal-info">
          <ul class="productCheckList">
            <li><input type="checkbox" id="chk1" checked="checked" /><label for="chk1"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk2" /><label for="chk2"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk3" /><label for="chk3"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk4" /><label for="chk4"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk5" /><label for="chk5"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk6" /><label for="chk6"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk7" /><label for="chk7"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk8" /><label for="chk8"><strong>[마타수학]</strong><span>계산기</span></label></li>
            <li><input type="checkbox" id="chk9" /><label for="chk9"><strong>[마타수학]</strong><span>계산기</span></label></li>
          </ul>


        </div>
        <div class="areaFlexRow contBtnArea">
          <button type="button" class="commonBtn buttonSizeM primaryBg" @click="this.modalShow = false">
            <span>확인</span>
          </button>
        </div>
      </template>
    </ModalArea>


  </div>
</template>

<script>
import DropDown from '@/components/DropDown'
import SearchArea from '@/components/SearchArea'
import gridPaging from '@/components/gridPaging'
import checkboxArea from '@/components/checkboxArea'
import ModalArea from '@/components/ModalArea'

export default {
  name: 'UI_CC_002',
  components: {
    DropDown,
    SearchArea,
    gridPaging,
    checkboxArea,
    ModalArea
  },
  data(){
    return {
      currentIdx: 0,
      limitIdx: 0,
      tabItems: [
        {isActive: true,title: 'Ⅰ 컴퓨팅 시스템'},
        {isActive: false,title: 'Ⅱ 데이터'},
        {isActive: false,title: 'Ⅲ 알고리즘과 프로그래밍'},
        {isActive: false,title: 'Ⅳ 인공지능'},
        {isActive: false,title: 'Ⅴ 디지털문화'},
        {isActive: false,title: 'Ⅰ 컴퓨팅 시스템'},
        {isActive: false,title: 'Ⅱ 데이터'},
        {isActive: false,title: 'Ⅲ 알고리즘과 프로그래밍'},
        {isActive: false,title: 'Ⅳ 인공지능'},
        {isActive: false,title: 'Ⅴ 디지털문화'},
      ],
      selectData: [
        {
          select: '템플릿을 선택해 빠르고 쉽게 설계하세요.',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택3', value: '' },
          ],
        },
        {
          select: '템플릿을 선택해 빠르고 쉽게 설계하세요.',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택3', value: '' },
          ],
        },
        {
          select: '템플릿을 선택해 빠르고 쉽게 설계하세요.',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택3', value: '' },
          ],
        },
        {
          select: '템플릿을 선택해 빠르고 쉽게 설계하세요.',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택3', value: '' },
          ],
        },
        {
          select: '템플릿을 선택해 빠르고 쉽게 설계하세요.',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택3', value: '' },
          ],
        },
        {
          select: '템플릿을 선택해 빠르고 쉽게 설계하세요.',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택3', value: '' },
          ],
        },
      ],
      placeholder01: '제목, 키워드, 메타데이터 검색',
      scrollTop: 0,
      modalShow : false,
    }
  },
  mounted() {

  },
  methods: {
    getTabWidth(){
      let tabs = this.$refs.tabs;
      let tabsList = tabs.querySelectorAll(':scope > li');
      let total = 0;
      let gap = 0;
      let length = tabsList.length

      tabsList.forEach((list, index)=>{
        if(index != 0){
          total += 4;
        }
        total += list.clientWidth + gap;
      });

      this.limitIdx = length-1;

      return total
    },
    switchTab(n){
      this.currentIdx = n;

      let tabTitleWrap  = this.$refs.tabTitleWrap;
      let tabItem       = this.$refs.tabItem;
      let posCenter     = tabTitleWrap.clientWidth / 2;
      let pos           = 0;
      let posLimit      = this.getTabWidth().total - tabTitleWrap.offsetWidth;

      // active 변경
      this.tabItems.forEach((tab, index) => {
        index === n ? tab.isActive = true : tab.isActive = false;
      });

      // 스크롤 값 계산
      if( tabItem[n].offsetLeft + tabItem[n].offsetWidth / 2 <= posCenter ){
        pos = 0;
      } else {
        pos = (tabItem[n].offsetLeft + tabItem[n].offsetWidth / 2) - posCenter;
        if (pos > posLimit) {
          pos = posLimit
        }
      }

      // 스크롤 이동
      tabTitleWrap.scrollTo({
        left: pos,
        behavior: 'smooth'
      });
    },
    btnEvent(value){
      let idx = 0;

      if(value == 'next'){
        idx = this.currentIdx+1;
        if(idx > this.limitIdx){
          idx = this.limitIdx
        }
      } else {
        idx = this.currentIdx-1;
        if(idx < 0){
          idx = 0;
        }
      }

      this.switchTab(idx);
    },
    scrollEvent(value){
      let target = [this.$refs.stickyMenu, this.$refs.scrollMenu];
      value == 0 ? target[1].scrollTop = target[0].scrollTop : target[0].scrollTop = target[1].scrollTop;
    },
    modalClose() {
      this.modalShow = false;
    },
    popupOpen(index) {
      const target = document.querySelectorAll('.modal_layer_popup')[index - 1];
      target.classList.add('active');
    },
    closePopup(e) {
      e.target.closest('.modal_layer_popup').classList.remove('active');
    },
  }
}
</script>
