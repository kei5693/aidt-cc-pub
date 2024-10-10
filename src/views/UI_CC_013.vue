<template>
  <!-- LMS: designBoxWrap popup -->
  <div class="designBoxWrap popup">
    <div class="header">
      <h2>수업재구성</h2>
      <div>
        <button type="button" class="btnPreview">미리보기</button>
        <button type="button" class="btnSave color">저장</button>
        </div>
      <button type="button" class="btnClose"><span>닫기</span></button>
    </div>

    <div class="container">
      <div class="titleWrap">
        <ul class="index">
          <li>수학4-1(<span class="ellipsis1">김철수동오말동</span>)</li>
          <li class="ellipsis2">1. 분수의 글자가 길 경우 말줄임</li>
          <li class="ellipsis3 bold">1차시 (자연수)÷(자연수)글자가 길 경우 말줄임 표시</li>
        </ul>

        <div class="designSupport">
          <dl>
            <dt><span>AI 보조교사</span></dt>
            <dd>학생들이평균적으로 분수 부분에서 높은 이해도를 보이고 있습니다.  이해도가 낮은 학생에게는 보충학습을 통해 복습하게 할 수 있어요.<br>
            학급전반적으로 계산부분에 총괄이 부족합니다. 추가활동으로 연습을 더 시켜보면 어떨까요?학생들이평균적으로 분수 부분에서 높은 이해도를 보이고 있습니다.<br>
            이해도가 낮은 학생에게는 보충학습을 통해 복습하게 할 수 있어요.</dd>
          </dl>
        </div>

      </div>

      <div class="draggableListWrap">
        <!-- left -->
        <div class="dragWrap">
          <div class="titleWrap">
            <h3>수업목록</h3>
            <!-- <button type="button" class=""><span>기본 코스웨어 되돌리기</span></button> -->
            <button type="button" class="themeColor"><span>기본 코스웨어 되돌리기</span></button>
          </div>
          <div class="draggableList">
            <div class="innerWrap">
              <draggable class="list-group" :list="list1" group="people" @change="log" itemKey="name">
                <template #item="{ element, index }">
                  <div class="list-group-item"
                    :class="{
                      saveOption: element.status == 'saveOption',
                      deployComp: element.status == '배포완료',
                      eval: element.status == '평가',
                      evalComp: element.status == '평가완료',
                    }">
                    <span>
                      {{ index+1 }}
                      <div class="tagTit" v-if="element.type == 'tag'">
                        <span>{{ element.tag }}</span>
                      </div>
                    </span>
                    <div class="innerCont">
                      <!-- learningData -->
                      <div class="learningData">
                        <!-- left -->
                        <div>
                          <span class="deploy">배포완료</span>
                          <dl>
                            <dt>{{ element.name }}</dt>
                            <dd>
                              <span>{{ element.category }}</span>
                              <span v-if="element.oneSelf == true" class="oneSelf">스스로하기</span>
                              <span v-if="element.providingAi == true" class="providingAi">AI추천학습제공</span>
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
                        </div>
                        <!-- right -->
                        <div class="btnOption" :class="{toggle: element.toggle == true }">
                          <button type="button" class="sr_only"><span>안내문구 삽입</span></button>
                          <button type="button" @click="toggleEvent(index)"><span>닫기</span></button>
                          <div class="optionCont">
                            <button type="button" @click="toggleEvent(index)"><span>공유옵션 설정</span></button>
                            <button type="button" @click="removeAt(index)"><span>삭제</span></button>
                          </div>
                        </div>
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
          </div>
        </div>
        <!-- right -->
        <div class="listWrap">
          <!-- listHeader -->
          <div class="listHeader">
            <!-- tabMenu -->
            <ul class="tabMenu">
              <li
                v-for="(tab, index) in tabData"
                :key="index"
                @click="tabEvent(index)"
                :class="{active: currentIndex == index}"
              >
                <span>{{ tab }}</span>
              </li>
            </ul>
            <!-- searchBox -->
            <div class="searchBoxWrap">
              <DropDown :optionName="selectData[0].select" :items="selectData[0].samplelist" dropdownId="d1"
                style="width:128px"></DropDown>
              <div class="inpbox">
                <input type="text" placeholder="검색어 입력" />
                <button type="button"><span>검색</span></button>
              </div>
            </div>
          </div>
          <!-- listBody -->
          <div class="listBody" :class="{isNodata: isNodata == true}">
            <!-- 자료 -->
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

                        <!-- right -->
                        <div class="btnOption" :class="{toggle: element.toggle == true }">
                          <button type="button" class="sr_only"><span>안내문구 삽입</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
            <!-- 문제지 -->
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

                        <!-- right -->
                        <div class="btnOption" :class="{toggle: element.toggle == true }">
                          <button type="button" class="sr_only"><span>안내문구 삽입</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
            <!-- 활동 -->
            <div v-else-if="currentIndex == 2">
              <draggable class="list-group rightMenu" :list="list4" group="people" @change="log" itemKey="name">
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

                        <!-- right -->
                        <div class="btnOption" :class="{toggle: element.toggle == true }">
                          <button type="button" class="sr_only"><span>안내문구 삽입</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </draggable>
            </div>
          </div>
          <!-- listFooter -->
          <div class="listFooter">
            <!-- dataToShare -->
            <div v-if="currentIndex == 0 && urlRegist == true" class="dataToShare" :class="{active: shareToggle == true}">
              <div class="selectWrap">
                <div class="radioWrap">
                  <span class="common_radio"><input type="radio" name="share" id="share1"><label for="share1">웹URL</label></span>
                  <span class="common_radio"><input type="radio" name="share" id="share2"><label for="share2">유튜브</label></span>
                </div>

                <div class="btnWrap">
                  <p>참고자료용으로 자료를 연결할 수 있어요.</p>
                  <button type="button"  @click="shareEvent"><span>열기</span></button>
                </div>
              </div>
              <div class="registWrap">
                <div class="inner">
                  <div class="inpWrap">
                    <input type="text" placeholder="공유할 자료의 제목을 입력하세요" />
                    <input type="text" value="https://webdt.net" />
                  </div>
                  <button type="button">등록</button>
                </div>
              </div>
            </div>
            <!-- addAiEval -->
            <div v-if="currentIndex == 1" class="addAiEval">
              <button type="button"><span>AI평가 추가하기</span></button>
            </div>
          </div>

          <div class="setSharedOption" :class="{active: modalShow == true}">
            <!-- 학습 공유옵션 설정 -->
            <div style="display: none;">
              <div class="optionHeader">
                <h3>학습 공유옵션 설정</h3>
                <button type="button" @click="modalClose">닫기</button>
              </div>
              <div class="optionBody">
                <div class="form_list_wrap">
                  <ul class="form_list">
                    <li>
                      <strong>학습방식</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-1"><label for="rdo1-1">수업기반학습</label></span>
                          <span class="common_radio"><input type="radio" name="rdo1-1" id="rdo1-2"><label for="rdo1-2">스스로 하기</label></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>학습일정</strong>
                      <div class="content">
                        <div class="inpDateWrap">
                          <input type="date" value="2023-01-01" />
                          <span>~</span>
                          <input type="date" value="2023-01-01" />
                        </div>
                      </div>
                    </li>
                    <li class="align_items">
                      <strong>공유대상</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo22-2" id="rdo22-3"><label for="rdo22-3">학급전체</label></span>
                          <span class="common_radio"><input type="radio" name="rdo22-2" id="rdo22-4"><label for="rdo22-4">개별학생</label></span>
                        </div>
                        <div class="scroll_content">
                          <ul>
                            <li
                              v-for="(student, index) in studentData"
                              :key="`student${index}`"
                              :class="{active: student.isActive}"
                              @click="selectStudent(index)"
                            >
                              <em>{{ index+1 }}번</em>
                              <span>{{ student.name }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="inp_chk_wrap">
                    <p>평가 진행후 결과에 따른 AI 추천학습 제공</p>
                    <span class="inp_checkbox"><input type="checkbox" id="inp12345"><label for="inp12345"><span></span></label></span>
                  </div>
                </div>
              </div>
              <div class="optionFooter">
                <p class="notiTxt">스스로 하기로 설정한 경우 등록한 일정내에 학생이 스스로 학습을 진행할 수 있도록 안내가 함께 제공됩니다.</p>
                <div class="btnWrap">
                  <button type="button" class="commonBtn"><span>저장</span></button>
                </div>
              </div>
            </div>
            <!-- 수준별학습 공유옵션 설정 -->
            <div style="display: none;">
              <div class="optionHeader">
                <h3>수준별학습 공유옵션 설정</h3>
                <button type="button" @click="modalClose">닫기</button>
              </div>
              <div class="optionBody">
                <div class="form_list_wrap">
                  <ul class="form_list">
                    <li>
                      <strong>연계평가</strong>
                      <div class="content">
                        <DropDown :optionName="selectData[1].select" :items="selectData[0].samplelist" dropdownId="d2"></DropDown>
                      </div>
                    </li>
                    <li>
                      <strong>학습분기</strong>
                      <div class="content">
                        <div class="scoreInpBox">
                          <checkboxArea checkId="checkbox11" checked></checkboxArea>
                          <div class="inp">
                            <input type="text" value="0" />
                            <span>~</span>
                            <input type="text" value="49" />
                            <span>점</span>
                            <span>학습자에게 제공</span>
                          </div>
                          <button type="button"><span>새로고침</span></button>
                        </div>
                      </div>
                    </li>
                    <li class="align_items">
                      <strong>공유대상</strong>
                      <div class="content">
                        <div class="scroll_content">
                          <ul class="score">
                            <li
                              v-for="(student, index) in studentData"
                              :key="`student${index}`"
                              :class="{active: student.isActive}"
                              @click="selectStudent(index)"
                            >
                              <em>{{ index+1 }}번</em>
                              <span>{{ student.name }}</span>
                              <p><strong>{{ student.score }}</strong> 점</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="optionFooter">
                <p class="notiTxt">연계된 평가의 결과(점수)에 따라 학습자가 자동 설정됩니다.<br>학습자를 눌러 공유대상을 변경할 수 있습니다.</p>
                <div class="btnWrap">
                  <button type="button" class="commonBtn"><span>저장</span></button>
                </div>
              </div>
            </div>
            <!-- 활동 공유옵션 설정 -->
            <div style="display: none;">
              <div class="optionHeader">
                <h3>활동 공유옵션 설정</h3>
                <button type="button" @click="modalClose">닫기</button>
              </div>
              <div class="optionBody">
                <div class="form_list_wrap">
                  <ul class="form_list">
                    <li>
                      <strong>활동방식</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo1-11" id="rdo1-11"><label for="rdo1-11">수업기반학습</label></span>
                          <span class="common_radio"><input type="radio" name="rdo1-11" id="rdo1-12"><label for="rdo1-12">스스로 하기</label></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>제출기간</strong>
                      <div class="content">
                        <div class="inpDateWrap">
                          <input type="date" value="2023-01-01" />
                          <span>~</span>
                          <input type="date" value="2023-01-01" />
                        </div>
                      </div>
                    </li>
                    <li class="align_items">
                      <strong>활동유형</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo44-2" id="rdo44-3"><label for="rdo44-3">개인활동</label></span>
                          <span class="common_radio"><input type="radio" name="rdo44-2" id="rdo44-4"><label for="rdo44-4">모둠활동</label></span>
                        </div>

                        <div class="activityTypeBox">
                          <strong>모둠구성</strong>
                          <DropDown :optionName="selectData[9].select" :items="selectData[0].samplelist" dropdownId="d9"></DropDown>
                          <div class="inp">
                            <checkboxArea checkId="checkbox112" checked></checkboxArea>
                            <div>
                              <DropDown :optionName="selectData[10].select" :items="selectData[0].samplelist" dropdownId="d10"></DropDown>
                              <span>개 조로 구성원 랜덤편성</span>
                            </div>
                            <span class="inp_checkbox"><input type="checkbox" id="inp1234"><label for="inp1234"><span></span></label></span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>활동주제</strong>
                      <div class="content">
                        <input type="text" placeholder="몇개의 도형으로 만들수있을까?" />
                      </div>
                    </li>
                    <li>
                      <strong>배경화면</strong>
                      <div class="content">
                        <div class="radio_flex">
                          <span class="common_radio"><input type="radio" name="rdo55-2" id="rdo55-3"><label for="rdo55-3">없음</label></span>
                          <span class="common_radio"><input type="radio" name="rdo55-2" id="rdo55-4"><label for="rdo55-4">활동자료</label></span>
                          <span class="common_radio file_upload">
                            <input type="radio" name="rdo55-2" id="rdo55-5"><label for="rdo55-5">직접등록</label>
                            <div class="common_file_upload icon">
                              <span>
                                <input type="file" id="inpFile" @change="getFileChange" />
                                <label for="inpFile">직접등록</label>
                              </span>
                              <!-- 파일 첨부 시 -->
                              <div class="img_thumbnail">
                                <img src="@/assets/images/dummy/img_thumbnail2.png" alt="" />
                                <button type="button"><span>닫기</span></button>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>자기평가</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo66-2" id="rdo66-3"><label for="rdo66-3">사용</label></span>
                          <span class="common_radio"><input type="radio" name="rdo66-2" id="rdo66-4"><label for="rdo66-4">미사용</label></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>동료평가</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo77-2" id="rdo77-3"><label for="rdo77-3">사용</label></span>
                          <span class="common_radio"><input type="radio" name="rdo77-2" id="rdo77-4"><label for="rdo77-4">미사용</label></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>공유대상</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo88-2" id="rdo88-3"><label for="rdo88-3">학급전체</label></span>
                          <span class="common_radio"><input type="radio" name="rdo88-2" id="rdo88-4"><label for="rdo88-4">개별학생</label></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="optionFooter">
                <p class="notiTxt">연계된 평가의 결과(점수)에 따라 학습자가 자동 설정됩니다.<br>학습자를 눌러 공유대상을 변경할 수 있습니다.</p>
                <div class="btnWrap">
                  <button type="button" class="commonBtn"><span>저장</span></button>
                </div>
              </div>
            </div>
            <!-- AI 평가 공유옵션 설정 -->
            <div>
              <div class="optionHeader">
                <h3>AI평가 공유 옵션 설정</h3>
                <button type="button" @click="modalClose">닫기</button>
              </div>
              <div class="optionBody">
                <div class="form_list_wrap">
                  <ul class="form_list">
                    <li>
                      <strong>학습방식</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo1q-1" id="rdo1q-1"><label for="rdo1q-1">수업기반학습</label></span>
                          <span class="common_radio"><input type="radio" name="rdo1q-1" id="rdo1q-2"><label for="rdo1q-2">스스로 하기</label></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>학습일정</strong>
                      <div class="content">
                        <div class="inpDateWrap">
                          <input type="date" value="2023-01-01" />
                          <span>~</span>
                          <input type="date" value="2023-01-01" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>평가유형</strong>
                      <div class="content">
                        <div class="radio_grid">
                          <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-4"><label for="rdo1-4">진단평가</label></span>
                          <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-5"><label for="rdo1-5">형성평가</label></span>
                          <span class="common_radio"><input type="radio" name="rdo1-2" id="rdo1-6"><label for="rdo1-6">총괄평가</label></span>
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
                          <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-7"><label for="rdo1-7">동일문항</label></span>
                          <span class="common_radio"><input type="radio" name="rdo1-3" id="rdo1-8"><label for="rdo1-8">수준 별 문항</label></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <strong>평가시간</strong>
                      <div class="content">
                        <div class="radio_grid inp_layout">
                          <span class="common_radio"><input type="radio" name="rdo1-4" id="rdo1-9"><label for="rdo1-9">제한없음</label></span>
                          <span class="common_radio">
                            <input type="radio" name="rdo1-4" id="rdo1-10">
                            <label for="rdo1-10">
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
                  <div class="inp_chk_wrap">
                    <p>평가 진행후 결과에 따른 AI 추천학습 제공</p>
                    <span class="inp_checkbox"><input type="checkbox" id="inp123"><label for="inp123"><span></span></label></span>
                  </div>
                </div>
              </div>
              <div class="optionFooter">
                <div class="btnWrap">
                  <button type="button" class="commonBtn"><span>저장</span></button>
                </div>
              </div>
            </div>
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
  name: 'UI_CC_008',
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
      tabData: ['자료', '문제지', '활동'],
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
          select: '최근 등록된 모둠 불러오기',
          samplelist: [
            { name: '2문항', value: '' },
            { name: '3문항', value: '' },
            { name: '4문항', value: '' },
          ],
        },
        {
          select: '4',
          samplelist: [
            { name: '4', value: '' },
            { name: '3', value: '' },
            { name: '2', value: '' },
          ],
        },
      ],
      modalShow : true,
      currentIndex: 0,
      shareToggle: false,
      isNodata: false,
      urlRegist: false,
      studentData: [
        { name: '김강감찬김강감찬', isActive: false, inClass: true, score: 50 },
        { name: '권보아', isActive: false, inClass: true, score: 12 },
        { name: '김남준', isActive: false, inClass: true, score: 90 },
        { name: '김태형', isActive: false, inClass: true, score: 100 },
        { name: '민윤기', isActive: false, inClass: true, score: 53 },
        { name: '박지민', isActive: false, inClass: true, score: 80 },
        { name: '심수봉', isActive: false, inClass: true, score: 70 },
        { name: '안중근', isActive: false, inClass: true, score: 31 },
        { name: '장영실', isActive: false, inClass: false, score: 54 },
        { name: '홍두깨', isActive: false, inClass: false, score: 50 },
        { name: '김석진', isActive: false, inClass: false, score: 12 },
        { name: '김정호', isActive: false, inClass: false, score: 90 },
        { name: '홍길동', isActive: false, inClass: false, score: 53 },
        { name: '박찬호', isActive: false, inClass: false, score: 80 },
        { name: '심순애', isActive: false, inClass: false, score: 70 },
        { name: '정약용', isActive: false, inClass: false, score: 31 }
      ],
      list1: [
        {
          name: '1-1.분수를 알아볼까요?',
          category: '사전학습자료',
          type: '',
          status: '',
          tag: '개별학습',
          oneSelf: false,
          toggle: false,
          providingAi: false,

        },
        {
          name: '1-2.분수를 알아볼까요?',
          category: '심화학습자료',
          type: 'tag',
          status: 'saveOption',
          tag: '개별학습',
          oneSelf: false,
          toggle: false,
          providingAi: false,
        },
        {
          name: '1-3.분수를 알아볼까요?1-3.분수를 알아볼까요?1-3.분수를 알아볼까요?1-3.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: 'saveOption',
          tag: '개별학습',
          oneSelf: false,
          toggle: false,
          providingAi: false,
        },
        {
          name: '1-4.분수의 개념 이해하기',
          category: '보충학습자료',
          type: '',
          status: '',
          tag: '개별학습',
          oneSelf: false,
          toggle: false,
          providingAi: false,
        },
        {
          name: '1-5.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: '',
          tag: '개별학습',
          oneSelf: false,
          toggle: false,
          providingAi: false,
        },
        {
          name: '1-6.분수를 알아볼까요?',
          category: '심화학습자료',
          type: '',
          status: '',
          tag: '개별학습',
          oneSelf: false,
          toggle: false,
          providingAi: false,
        },
      ],
      list2: [
        {
          name: '2-1.(자연수)÷(자연수)를 하나의 수로 나타내기 (자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '수업자료',
          type: '',
          status: ''
        },
        {
          name: '2-2.(자연수)÷(자연수)를 하나의 수로 나타내기',
          category: '수업자료',
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
          category: '형성평가 문제지',
          type: '',
          status: ''
        },
        {
          name: '3-2.분수를 알아볼까요?',
          category: '형성평가 문제지',
          type: '',
          status: ''
        },
        {
          name: '3-3.분수를 알아볼까요?',
          category: '형성평가 문제지',
          type: '',
          status: ''
        },
        {
          name: '3-4.분수를 알아볼까요?',
          category: '형성평가 문제지',
          type: '',
          status: ''
        },
      ],
      list4: [
        {
          name: '4-1.분수를 알아볼까요?',
          category: '모둠활동자료',
          type: '',
          status: ''
        },
        {
          name: '4-2.분수를 알아볼까요?',
          category: '동료평가',
          type: '',
          status: ''
        },
        {
          name: '4-3.분수를 알아볼까요?',
          category: '자기평가',
          type: '',
          status: ''
        },
        {
          name: '4-4.분수를 알아볼까요?',
          category: '과제활동자료',
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
    shareEvent(){
      this.shareToggle = !this.shareToggle;
    },
    selectStudent (currentIndex) {
      this.studentData.forEach((e, index) => {
        if (index === currentIndex) {
          e.isActive ? e.isActive = false : e.isActive = true
        }
      })
    },
    getFileChange (e) {
      const file = e.target.files[0]
      if (file) {
        this.fileInfo = {
          name: file.name,
          size: (file.size / 1024).toFixed(2)
        }
      }
    },
    toggleEvent(idx) {
      this.list1.forEach((el, index) => {
        index === idx ? el.toggle = !el.toggle : el.toggle = false;
      });
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