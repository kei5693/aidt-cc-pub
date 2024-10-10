<template>
  <div class="searchBoxWrap">
    <h2>AI코스웨어조합</h2>

    <div class="searchMenu">
      <DropDown :optionName="selectData[0].select" :items="selectData[0].samplelist" dropdownId="d1" style="width:128px"></DropDown>
      <DropDown :optionName="selectData[1].select" :items="selectData[0].samplelist" dropdownId="d2" style="width:128px"></DropDown>
      <DropDown :optionName="selectData[2].select" :items="selectData[0].samplelist" dropdownId="d3" style="width:128px"></DropDown>
      <DropDown :optionName="selectData[3].select" :items="selectData[0].samplelist" dropdownId="d4" style="width:128px"></DropDown>
      <DropDown :optionName="selectData[4].select" :items="selectData[0].samplelist" dropdownId="d5" style="width:160px"></DropDown>
      <SearchArea :placeholder="placeholder01"></SearchArea>
    </div>

    <div class="viewContentBox">
      <div class="sortMenu">
        <p>총 1,999개의 리소스가 있습니다.</p>
        <div>
          <checkboxArea checkId="checkbox1" label="코스웨어" checked></checkboxArea>
          <DropDown :optionName="selectData[5].select" :items="selectData[0].samplelist" dropdownId="d6" style="width:128px"></DropDown>
          <span>상태만 모아보기</span>
        </div>
      </div>

      <div class="viewMenu">
        <table>
          <caption></caption>
          <colgroup>
            <col style="width: 7.65%;" />
            <col style="width: 6.37%;" />
            <col style="width: 6.37%;" />
            <col style="width: 6.37%;" />
            <col />
            <col style="width: 10.2%;" />
            <col style="width: 12.75%;" />
            <col style="width: 6.37%;" />
            <col style="width: 12.75%;" />
            <col style="width: 7.65%;" />
            <col style="width: 7.65%;" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">학교급</th>
              <th scope="col">학년</th>
              <th scope="col">학기</th>
              <th scope="col">교과</th>
              <th scope="col">교과서</th>
              <th scope="col">발행일</th>
              <th scope="col">편찬자 (저자)</th>
              <th scope="col">구성</th>
              <th scope="col">상태</th>
              <th scope="col">설계자</th>
              <th scope="col">배포자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">코스웨어코스웨어코스웨어코스웨어코스웨어코스웨어코스웨어코스웨어코스웨어코스웨어</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td><span>미설계</span></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateTemp"><span>임시저장</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>-</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateSave"><span>최종저장</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>-</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
            <tr>
              <td>초등학교</td>
              <td>5학년</td>
              <td>2학기</td>
              <td>수학</td>
              <td><a href="#">교과서</a></td>
              <td>2023-01-01</td>
              <td>홍길동 (김한화)</td>
              <td>20</td>
              <td class="stateComp"><span>배포완료</span>
                <p>2023-01-01 12:23:34</p>
              </td>
              <td>김한화</td>
              <td>홍길동</td>
            </tr>
          </tbody>
        </table>

        <gridPaging />
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '@/components/DropDown'
import SearchArea from '@/components/SearchArea'
import gridPaging from '@/components/gridPaging'
import checkboxArea from '@/components/checkboxArea'

export default {
  name: 'UI_CC_001',
  components: {
    DropDown,
    SearchArea,
    gridPaging,
    checkboxArea
  },
  data(){
    return {
      selectData: [
        {
          select: '학교급 선택',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '학년 선택',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '학기 선택',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '교과구분',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '교과서',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
        {
          select: '미설계',
          samplelist: [
            { name: '선택1', value: '' },
            { name: '선택2', value: '' },
            { name: '선택1', value: '' },
          ],
        },
      ],
      placeholder01: '제목, 키워드, 메타데이터 검색',
    }
  }
}
</script>
