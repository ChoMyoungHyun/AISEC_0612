
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}

//d1.set_img(0, { imgtitle: "", imgurl: "", imglog: "", sourceurl: ""})
let d1 = new DataSet("로또번호 예측 선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("LSTM 모델과 ConvLSTM1D 모델의 로또 번호 회귀분석")//서브 타이틀
//https://drive.google.com/file/d/1NxR3L5Egi2NNfLZhZ5vVnCiX3yoTb9u-/view?usp=drive_link
d1.set_img(0, { imgtitle: "1.원천 데이터 수집",imgurl: "https://drive.google.com/file/d/1NxR3L5Egi2NNfLZhZ5vVnCiX3yoTb9u-/view?usp=drive_link", imglog: "로또365페이지를 이용하여 1회차 ~ 1183회차 로또 당첨번호 수집",sourceurl: "https://dhlottery.co.kr/gameResult.do?method=byWin"})
d1.set_img(0, { imgtitle: "2.데이터 변환",imgurl: "https://drive.google.com/file/d/1w5VBxEBmMYnjxOJDItHF-ESZppn49o9z/view?usp=drive_link", imglog: "xlsx 형식의 데이터를 pandas 에서 로딩하기 편리하도록 csv 파일로 변환 ", sourceurl: ""})
d1.set_img(0, { imgtitle: "3.csv파일 읽기와 시계열 데이터 생성 모듈 구성", imgurl: "https://drive.google.com/file/d/1TF-tlNyleGIi-pexSWTSD0WeghnzSokN/view?usp=drive_link", imglog: "DAS에 저장된 csv 파일 불러오는 readFileData모듈과 시간 스텝에 따른 시계열 데이터 생성 모듈 구현", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "4.데이터 전처리", imgurl: "https://drive.google.com/file/d/1WsdwMCb7LPxYtsyPfY_Z6NPZhBbtA1Qv/view?usp=drive_link", imglog: "환경 상수 설정 및 날짜 데이터 변환과 밀리타임 필드 추가", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "5.데이터 분석 및 통계", imgurl: "https://drive.google.com/file/d/1CwSqWXE35S71jSr0PQLOSPcpRqQ58dGm/view?usp=drive_link", imglog: "데이터 박스 플롯과 히스토그램으로 데이터 분포 및 이상치 데이터 시각화 확인 후 통계 출력", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "6.데이터 분석 시각화 및 통계", imgurl: "https://drive.google.com/file/d/1t5AGHRcoI0O1061XtGMFN7eY8NUETRkC/view?usp=drive_link", imglog: "데이터 박스 플롯과 히스토그램으로 데이터 분포 및 이상치 데이터 시각화 확인 후 통계 출력", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀

data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

data_sets.push(d4)
