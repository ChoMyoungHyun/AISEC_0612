
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
d1.set_content("1.1 데이터 수집 및 전처리")//서브 타이틀
d1.set_img(0, { imgtitle: "1.원천 데이터 수집",imgurl: "https://drive.google.com/file/d/1NxR3L5Egi2NNfLZhZ5vVnCiX3yoTb9u-/view?usp=drive_link", imglog: "로또365페이지를 이용하여 1회차 ~ 1183회차 로또 당첨번호 수집",sourceurl: "https://dhlottery.co.kr/gameResult.do?method=byWin"})
d1.set_img(0, { imgtitle: "2.데이터 변환",imgurl: "https://drive.google.com/file/d/1w5VBxEBmMYnjxOJDItHF-ESZppn49o9z/view?usp=drive_link", imglog: "xlsx 형식의 데이터를 pandas 에서 로딩하기 편리하도록 csv 파일로 변환 ", sourceurl: ""})
d1.set_img(0, { imgtitle: "3.csv파일 읽기와 시계열 데이터 생성 모듈 구성", imgurl: "https://drive.google.com/file/d/1TF-tlNyleGIi-pexSWTSD0WeghnzSokN/view?usp=drive_link", imglog: "DAS에 저장된 csv 파일 불러오는 readFileData모듈과 시간 스텝에 따른 시계열 데이터 생성 모듈 구현", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "4.데이터 전처리", imgurl: "https://drive.google.com/file/d/1WsdwMCb7LPxYtsyPfY_Z6NPZhBbtA1Qv/view?usp=drive_link", imglog: "환경 상수 설정 및 날짜 데이터 변환과 밀리타임 필드 추가", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "5.데이터 분석 및 통계", imgurl: "https://drive.google.com/file/d/1CwSqWXE35S71jSr0PQLOSPcpRqQ58dGm/view?usp=drive_link", imglog: "판다스 통계를 이용한 데이터 분석", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "6.데이터 분석 시각화 및 통계", imgurl: "https://drive.google.com/file/d/1t5AGHRcoI0O1061XtGMFN7eY8NUETRkC/view?usp=drive_link", imglog: "데이터 박스 플롯과 히스토그램으로 데이터 분포 및 이상치 데이터 시각화 확인 후 통계 출력", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(0, { imgtitle: "7.밀집 데이터 복원 함수", imgurl: "https://drive.google.com/file/d/1PnqCuL-RjzhedgRN8VHA9dPyRORCXDvw/view?usp=drive_link", imglog: "스케일링된 정답 데이터를 원래의 스케일링으로 복원 모듈 생성 및 테스트", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})

d1.set_content("1.2 회귀예측 모델 구성")//서브 타이틀
d1.set_img(1, { imgtitle: "8.시계열 데이터 생성", imgurl: "https://drive.google.com/file/d/1zMfBJZzK4ZVWAhqNMY-BnX_nijW9tHE0/view?usp=drive_link", imglog: "타임스텝에 따른 시계열 훈련 데이터 생성", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(1, { imgtitle: "9.LSTM 및 ConvLSTM1D 순차 모델 구성", imgurl: "https://drive.google.com/file/d/1ysvEnljBby7xtac-PF_-Gq2J6lGkcnut/view?usp=drive_link", imglog: "환경 설정에 따른 LSTM 또는 ConvLSTM1D 모델을 구축 및 컴파일", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(1, { imgtitle: "10.조기종료/출력콜백 함수 훈련 실행", imgurl: "https://drive.google.com/file/d/1lKMb7FB2uQ8sRbpZ6JAhWphvJXcGFRqP/view?usp=drive_link", imglog: "최적값 수렴후 훈련 조기종료와 훈련과정 verbose 콜백 함수 등록 후 훈련 실시", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(1, { imgtitle: "11.훈련 결과 시각화", imgurl: "https://drive.google.com/file/d/1D9Fx9VCS43ZqXnl-ppnFBcu93I0OfrPQ/view?usp=drive_link", imglog: "MSE, MAE LOSS 시각화 그래프", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(1, { imgtitle: "12.모델 오차율 산정", imgurl: "https://drive.google.com/file/d/10uZPpqKUIh3MINJHICstzj8aSaBYcoca/view?usp=drive_link", imglog: "모델의 평균 오차율과 필드별 오차율 산정", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})
d1.set_img(1, { imgtitle: "13.모델 저장 및 실제 예측값 출력", imgurl: "https://drive.google.com/file/d/1vNSgbdBokCvfDajKRfrZfnC6VfjEZ8FK/view?usp=drive_link", imglog: "다음 회촤 번호 예측", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/jupyter_ai/Lotto_rnn.ipynb"})

d1.set_content("1.3 코드 리펙토링")//서브 타이틀
d1.set_img(2, { imgtitle: "14.코드 리펙토링", imgurl: "https://drive.google.com/file/d/1CWaaky2Ylxiq0Yrstpv4nWIKE4vTBOEX/view?usp=drive_link", imglog: "저장된 모델 불러오기, 데이터 전처리, 스케일링 복원, 예측 출력, 모델 업그레이드(미구현), 오차율 출력, 번호 예측 실행 시점 모델", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/lotto_AI/service_model.py"})
d1.set_img(2, { imgtitle: "15.프로젝트 디렉토리 구성", imgurl: "https://drive.google.com/file/d/1ra6wZayx9YbiMjGQAHytnz-2efKzb4fM/view?usp=drive_link", imglog: "모델 디렉터리 및 서비스 페이지 분리", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/tree/main/lotto_AI"})

d1.set_content("1.4 플라스크 미들웨어 구현")//서브 타이틀
d1.set_img(3, { imgtitle: "16.인덱스 페이지 라우팅", imgurl: "https://drive.google.com/file/d/1f8OQwZGZ3SBX8qVkJ6-efp41JvWtpZg1/view?usp=drive_link", imglog: "템플릿츠 디렉터리의 최초 인덱스 페이지 출력 주소 라우팅", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/lotto_AI/WebFlask.py"})
d1.set_img(3, { imgtitle: "17.모델 예측 페이지 라우팅", imgurl: "https://drive.google.com/file/d/1YupYZIOcigd_NTT7DMfrSMreAvJrojBX/view?usp=drive_link", imglog: "예측 날짜, 모델명 파라미터 수신 후 모델의 예측값 형식에 따른 JSON 데이터로 송출", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/lotto_AI/WebFlask.py"})
d1.set_img(3, { imgtitle: "18.플라스크 미들웨어 가동", imgurl: "https://drive.google.com/file/d/1_HDo83JDXHX2SKeQOH82cKdHhE_7cPNP/view?usp=drive_link", imglog: "플라스크 미들웨어 서버 가동 화면 스냅샷(웹서버 연동 미구현)", sourceurl: ""})

d1.set_content("1.5 사용자 UI 구현")//서브 타이틀
d1.set_img(4, { imgtitle: "19.사용자 인덱스 페이지 액세스", imgurl: "https://drive.google.com/file/d/1ZhkWcxheEzSbwX7Uv1Ta8-arDY-BC4sJ/view?usp=drive_link", imglog: "이용자가 접근할 최초 인덱스 페이지 스냅샷(예측 날짜 및 모델 선택 가능)", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/lotto_AI/templates/index.html"})
d1.set_img(4, { imgtitle: "20.모델별 타임스텝별 예측 서비스 선택", imgurl: "https://drive.google.com/file/d/1nu7YrzZPzwIqChr4uXIkU_9but8SPfeL/view?usp=drive_link", imglog: "원하는 날짜와 지정된 모델별 타임스텝별 서비스 항목 선택", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/lotto_AI/templates/index.html"})
d1.set_img(4, { imgtitle: "21.예측 진행중 화면 스냅샷", imgurl: "https://drive.google.com/file/d/1ysWjKAb2wgydzJ7Y7N8wuJ_nYidGnfnU/view?usp=drive_link", imglog: "이용자 서비스 요구시 미들웨어로 부터 예측값 출력 수신 로딩 화면 스냅샷", sourceurl: "https://github.com/ChoMyoungHyun/AISEC_0612/blob/main/lotto_AI/templates/index.html"})

d1.set_content("1.6 로또 예측 서비스 구동")//서브 타이틀
d1.set_img(5, { imgtitle: "22.예측 결과 화면 스냅샷", imgurl: "https://drive.google.com/file/d/1iOdr911scZMJLOl1tILTO8tjm1hq76OX/view?usp=drive_link", imglog: "각 번호별 예측 번호 추출과 오차 확률 출력", sourceurl: ""})
d1.set_img(5, { imgtitle: "23.모델별 다중예측 진행중 화면 스냅샷", imgurl: "https://drive.google.com/file/d/1pME9NO98HuOKW9Kd1O4T1A1b7Vwmr6Bj/view?usp=drive_link", imglog: "기존 예측과 다른 모델의 예측 결과 비교를 위한 다중모델 예측 진행 스냅샷", sourceurl: ""})
d1.set_img(5, { imgtitle: "24.모델별 다중예측 결과 스냅샷", imgurl: "https://drive.google.com/file/d/1-ZCiAho_T95hvQh0qhgM6Leao83PqJqS/view?usp=drive_link", imglog: "원하는 모델 선택 후 예측 결과를 모델별로 비교 분석할 수 있는 다중모델 예측 결과 스냅샷", sourceurl: ""})
d1.set_img(5, { imgtitle: "25.원하는 모델을 선택하여 여러 예측값 출력", imgurl: "https://drive.google.com/file/d/1KhicNY_AX-te-tN80KjEZlNFfdV0sQqr/view?usp=drive_link", imglog: "원하는 모델 선택 후 여러 예측값을 조합하여 번호를 선택할 수 있는 결과 스냅샷", sourceurl: ""})

d1.set_fill("로또 추첨일 날짜로 당첨 번호를 스케일링 한 후 두가지 유형의 모델로 예측값과 오차를 출력, 차후 각 번호의 자리별 다중 분류(softmax) 형태의 예측값 출력 예정")//사용자 에필로그
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
