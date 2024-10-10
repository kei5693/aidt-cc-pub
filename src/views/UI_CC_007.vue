<template>
  <div class="designBoxWrap">
    <h2>[수학 5-2] 코스웨어 설계</h2>

    <div class="titleWrap">
      <button type="button" class="btnBack"><span>뒤로 가기</span></button>
      <ul>
        <li>초등학교 5학년 2학기 수학</li>
        <li><strong>1. 분수의 나눗셈 [2차시]</strong> </li>
      </ul>
    </div>

    <div class="draggableListWrap">
      <!-- left -->
      <div class="dragWrap">
        <div class="titleWrap">
          <h3>차시 학습 목록</h3>
          <p>
            선택한 학습모듈에 맞게 학습/평가자료가 연결되었습니다. 자료를 확인하고 추가 또는 삭제를 진행할 수 있어요.<br>
            제공할 코스웨어의 학습순서를 변경하거나 자료에 따른 분기옵션을 설정해주세요.
          </p>
          <div class="moduleCount">
            <h4><strong>[형성평가]</strong> 모듈 자료탐색 <span>0</span> 건</h4>
            <p>우측에서 자료를 탐색하고 원하는 위치에 직접 추가해보세요!</p>
          </div>
        </div>
        <div class="draggableList">
          <div class="innerWrap">
            <textarea placeholder="학습목표를입력해주세요"></textarea>
            <draggable class="list-group" :list="list1" group="people" @change="log" itemKey="name">
              <template #item="{ element, index }">
                <div class="list-group-item" :class="{saveOption: element.status == 'saveOption', setOption: element.type == '1' || element.type == '3'}">
                  <span>
                    {{ index+1 }}
                    <div class="optionTit">
                      <span>옵션설정</span>
                    </div>
                  </span>
                  <div class="innerCont">
                    <!-- learningData -->
                    <div class="learningData">
                      <!-- left -->
                      <div>
                        <dl>
                          <dt>{{ element.name }}</dt>
                          <dd>
                            <span>{{ element.category }}</span>
                            <div v-if="element.type == '4'" class="inp">
                              <div>
                                <input type="text" value="50" />
                                <div>-</div>
                                <input type="text" value="100" />
                                <span>점</span>
                              </div>
                              <span>학습자에게 제공</span>
                            </div>
                          </dd>
                        </dl>
                        <button type="button" @click="modalOpen" v-if="element.category == 'AI 형성평가'">
                          <span>옵션설정</span>
                        </button>
                      </div>
                      <!-- right -->
                      <button type="button" @click="removeAt(index)"><span>닫기</span></button>
                    </div>
                    <!-- fluidContent -->
                    <div class="fluidContent">
                      <!-- 심화학습자료 -->
                      <div v-if="element.type == '1'" class="setOptionWrap">
                        <ul>
                          <li><strong>연계평가</strong>
                            <DropDown :optionName="selectData[1].select" :items="selectData[0].samplelist" dropdownId="d2" style="width:170px"></DropDown>
                          </li>
                          <li><strong>학습분기</strong>
                            <checkboxArea checkId="checkbox1" checked></checkboxArea>
                            <div class="inp">
                              <div>
                                <input type="text" value="50" />
                                <div>-</div>
                                <input type="text" value="100" />
                                <span>점</span>
                              </div>
                              <span>학습자에게 제공</span>
                            </div>
                          </li>
                        </ul>
                        <button type="button" class="commonBtn buttonSizeM grayBg"><span>설정옵션 저장</span></button>
                      </div>

                      <!-- 자기평가/동료평가 -->
                      <div v-if="element.type == '3'" class="setOptionWrap">
                        <ul>
                          <li>
                            <strong>연계평가</strong>
                            <DropDown :optionName="selectData[2].select" :items="selectData[0].samplelist" dropdownId="d3" style="width:170px"></DropDown>
                          </li>
                        </ul>
                        <button type="button" class="commonBtn buttonSizeM grayBg"><span>설정옵션 저장</span></button>
                      </div>

                      <!-- 진단평가/형성평가/총괄평가 문제지 -->
                      <div v-if="element.type == '2'" class="recommendWrap">
                        <p>평가 진행 후 결과에 따른 AI 추천학습 제공</p>
                        <span class="inp_checkbox">
                          <input type="checkbox" id="inpAi"><label for="inpAi"><span></span></label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>

          <div class="btnWrap">
            <button type="button" class="commonBtn buttonSizeL primaryBg"><span>저장</span></button>
            <button type="button" class="commonBtn buttonSizeL grayBg"><span>미리보기</span></button>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="listWrap">
        <!-- listHeader -->
        <div class="listHeader">
          <h3>모든 자료 보기</h3>
          <!-- dataList -->
          <div class="dataListTab">
            <div class="tabMenu">
              <button type="button" class="commonBtn buttonSizeL primaryBg" @click="tabEvent(0)"><span>LCMS</span></button>
              <button type="button" class="commonBtn buttonSizeL whiteGrayBg" @click="tabEvent(1)"><span>문제은행</span></button>
            </div>
            <button type="button" class="btnAi" @click="modalOpen"><span>AI평가 추가하기</span></button>
          </div>
          <!-- searchBox -->
          <div class="searchBoxWrap">
            <DropDown :optionName="selectData[0].select" :items="selectData[0].samplelist" dropdownId="d1"
              style="width:128px"></DropDown>
            <div class="inpbox">
              <input type="text" placeholder="제목, 키워드, 메타데이터 검색" />
              <button type="button"><span>검색</span></button>
            </div>
            <button type="button" class="btnRefresh"><span>새로고침</span></button>
          </div>
        </div>
        <!-- listBody -->
        <div class="listBody" ref="listBody">
          <!-- lcms -->
          <div v-if="currentIndex == 0">
            <draggable class="list-group rightMenu" :list="list2" group="people" @change="log" itemKey="name">
              <template #item="{ element, index }">
                <div class="list-group-item">
                  <div class="innerCont">
                    <!-- learningData -->
                    <div class="learningData">
                      <!-- left -->
                      <div>
                        <dl>
                          <dt>{{ element.name }}</dt>
                          <dd>
                            <span>{{ element.category }}</span>
                            <button type="button">미리보기</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
          <!-- 문제은행 -->
          <div v-else-if="currentIndex == 1">
            <draggable class="list-group rightMenu" :list="list3" group="people" @change="log" itemKey="name">
              <template #item="{ element, index }">
                <div class="list-group-item">
                  <div class="innerCont">
                    <!-- learningData -->
                    <div class="learningData">
                      <!-- left -->
                      <div>
                        <dl>
                          <dt>{{ element.name }}</dt>
                          <dd>
                            <span>{{ element.category }}</span>
                            <button type="button">미리보기</button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
          <!-- nodata -->
          <div v-else class="nodata">
            <p>등록된 자료가 없습니다.</p>
          </div>
        </div>
        <!-- listFooter -->
        <div class="listFooter">
          <p>찾으시는 자료가 없으신가요? <a href="#" target="_blank">LCMS로 이동</a>해 자료를 추가로 연결해 보세요.</p>
        </div>

        <div class="setSharedOption" :class="{active: modalShow == true}">
          <div class="optionHeader">
            <h3>AI평가 공유 옵션 설정</h3>
            <button type="button" @click="modalClose">닫기</button>
          </div>
          <div class="optionBody">
            <div class="form_list_wrap">
              <ul class="form_list">
                <li>
                  <strong>평가유형</strong>
                  <div class="content">
                    <div class="radio_grid">
                      <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-1"><label for="rdo1-1">진단평가</label></span>
                      <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-2"><label for="rdo1-2">형성평가</label></span>
                      <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-3"><label for="rdo1-3">총괄평가</label></span>
                    </div>
                  </div>
                </li>
                <li>
                  <strong>평가지명</strong>
                  <div class="content">
                    <input type="text" placeholder="1차시 형성평가 2회차" />
                  </div>
                </li>
                <li>
                  <strong>제공방식</strong>
                  <div class="content">
                    <div class="radio_grid">
                      <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-4"><label for="rdo1-4">동일문항</label></span>
                      <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-5"><label for="rdo1-5">수준 별 문항</label></span>
                    </div>
                  </div>
                </li>
                <li>
                  <strong>평가시간</strong>
                  <div class="content">
                    <div class="radio_grid inp_layout">
                      <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-6"><label for="rdo1-6">제한없음</label></span>
                      <span class="common_radio">
                        <input type="radio" name="rdo1-3" id="rdo1-7">
                        <label for="rdo1-7">
                          <!-- <input type="text" value="5" disabled />분 으로 제한 -->
                          <input type="text" value="5" />분 으로 제한
                        </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li class="align_items">
                  <strong>평가구성</strong>
                  <div class="content">
                    <div class="tree_menu_list">
                      <ul>
                        <li>
                          <p>대단원</p>
                          <ul class="check_list">
                            <li>
                              <checkboxArea checkId="checkbox1-1" label="지식체계1"></checkboxArea>
                              <DropDown :optionName="selectData[3].select" :items="selectData[0].samplelist" dropdownId="o1" class="disabled"></DropDown>
                            </li>
                            <li>
                              <checkboxArea checkId="checkbox1-2" label="지식체계2"></checkboxArea>
                              <DropDown :optionName="selectData[4].select" :items="selectData[0].samplelist" dropdownId="o2"></DropDown>
                            </li>
                            <li>
                              <checkboxArea checkId="checkbox1-3" label="지식체계3"></checkboxArea>
                              <DropDown :optionName="selectData[5].select" :items="selectData[0].samplelist" dropdownId="o3"></DropDown>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <span class="common_checkbox tree"><input type="checkbox" id="inp11" /><label for="inp11">중단원1</label></span>
                          <ul class="check_list">
                            <li>
                              <checkboxArea checkId="checkbox2-1" label="지식체계지식체계지식체계1"></checkboxArea>
                              <DropDown :optionName="selectData[6].select" :items="selectData[0].samplelist" dropdownId="o4" class="disabled"></DropDown>
                            </li>
                            <li>
                              <checkboxArea checkId="checkbox2-2" label="지식체계2"></checkboxArea>
                              <DropDown :optionName="selectData[7].select" :items="selectData[0].samplelist" dropdownId="o5"></DropDown>
                            </li>
                          </ul>
                          <!-- div 안에 있으면 2뎁스 -->
                          <div>
                            <p>소단원</p>
                            <ul class="check_list">
                              <li>
                                <checkboxArea checkId="checkbox3-1" label="지식체계지식체계지식체계1"></checkboxArea>
                                <DropDown :optionName="selectData[7].select" :items="selectData[0].samplelist" dropdownId="o6" class="disabled"></DropDown>
                              </li>
                              <li>
                                <checkboxArea checkId="checkbox3-2" label="지식체계2"></checkboxArea>
                                <DropDown :optionName="selectData[8].select" :items="selectData[0].samplelist" dropdownId="o7"></DropDown>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <span class="common_checkbox tree"><input type="checkbox" id="inp22" /><label for="inp22">중단원2</label></span>
                        </li>
                        <li>
                          <span class="common_checkbox tree"><input type="checkbox" id="inp33" /><label for="inp33">중단원3</label></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="optionFooter">
            <button type="button" class="commonBtn buttonSizeM primaryBg"><span>설정옵션 저장</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '@/components/DropDown'
import SearchArea from '@/components/SearchArea'
import gridPaging from '@/components/gridPaging'
import checkboxArea from '@/components/checkboxArea'
import ModalArea from '@/components/ModalArea'
import draggable from "vuedraggable";
import radioArea from '@/components/radioArea'

export default {
  name: 'UI_CC_007',
  order: 1,
  components: {
    DropDown,
    SearchArea,
    gridPaging,
    checkboxArea,
    ModalArea,
    draggable,
    radioArea,
  },
  data(){
    return {
      selectData: [
        {
          select: '자료구분',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '1차시 형성평가',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '삼각형활동',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '2문항',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
      ],
      modalShow : false,
      currentIndex: 0,
      list1: [
        {
          name: '1-1.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: ''
        },
        {
          name: '1-2.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: ''
        },
        {
          name: '1-3.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: ''
        },
        {
          name: '1-4.분수를 알아볼까요? 분수를 알아볼까요? 분수를 알아볼까요? 분수를 알아볼까요?',
          category: 'AI 형성평가',
          type: '',
          status: ''
        },
      ],
      list2: [
        {
          name: '2-1.(자연수)÷(자연수)를 하나의 수로 나타내기 (자연수)÷(자연수)를 하나의 수로 나타내기', category: '사전학습자료', type: '' },
        {
          name: '2-2.(자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '심화학습자료',
          type: '',
          status: ''
        },
        {
          name: '2-3.(자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '수업자료',
          type: '',
          status: ''
        },
        {
          name: '2-4.(자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '수업자료',
          type: '',
          status: ''
        },
        {
          name: '2-5.(자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '수업자료',
          type: '',
          status: ''
        },
        {
          name: '2-6.(자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '수업자료',
          type: '',
          status: ''
        },
      ],
      list3: [
        {
          name: '3-1.분수를 알아볼까요?',
          category: '사전학습자료',
          type: '',
          status: ''
        },
        {
          name: '3-2.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: ''
        },
        {
          name: '3-3.분수를 알아볼까요?',
          category: '수업자료',
          type: '',
          status: ''
        },
        {
          name: '3-4.분수를 알아볼까요?',
          category: '수업자료',
          type: '',
          status: ''
        },
      ]
    }
  },
  mounted() {

  },
  methods: {
    modalOpen() {
      this.modalShow = true;
    },
    modalClose() {
      this.modalShow = false;
    },
    tabEvent(index){
      this.currentIndex = index;
    },
    removeAt(idx) {
      this.list1.splice(idx, 1);
    },

    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
  }
}
</script>