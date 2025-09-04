
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
let d2 = new DataSet("네이버 영화 감성 리뷰 이진분류 예측")//메인타이틀
d2.set_content("2.1 데이터 수집 및 전처리")//서브 타이틀
d2.set_img(0, { imgtitle: "1. 한글 형태소 분류등 필요 라이브러리", imgurl: "https://drive.google.com/file/d/1BoxFRj0XV34hT--GEc9AOeZ-e102g8Nv/view?usp=drive_link", imglog: "Konlp및 필요 라이브러리 설치 및 import", sourceurl: ""})
d2.set_img(0, { imgtitle: "2. 데이터 수집 및 읽어오기", imgurl: "https://drive.google.com/file/d/15eDRcLdwMqwJ3Dg71I6rrkigSpIDIVP7/view?usp=drive_link", imglog: "네이버 영화 감상평 리뷰 수집 및 판다스로 읽어오기", sourceurl: ""})
d2.set_img(0, { imgtitle: "3. 데이터 수량 및 정보 확인", imgurl: "https://drive.google.com/file/d/1vwrTXdpQs18mny6PBAFLXD66cHmUANwI/view?usp=drive_link", imglog: "판다스로 데이터 수량 파악과 데이터의 타입등을 확인", sourceurl: ""})
d2.set_img(0, { imgtitle: "4. 결측 데이터 보정", imgurl: "https://drive.google.com/file/d/1ETdL7DnSDzC_me26hqboshaqqwIn0F-9/view?usp=drive_link", imglog: "결측 데이터 수량 확인 및 제거 후 수량 확인", sourceurl: ""})
d2.set_img(0, { imgtitle: "5. 중복 데이터 처리", imgurl: "https://drive.google.com/file/d/1xe1ncmsAA8DudhvllcgKe0YZDnIbjfpL/view?usp=drive_link", imglog: "중복 된 데이터 확인과 제거", sourceurl: ""})
d2.set_img(0, { imgtitle: "6. 한글 데이터 처리", imgurl: "https://drive.google.com/file/d/17Bjwu_JKrp2bG-zRxf27DeoJ2vEQcFau/view?usp=drive_link", imglog: "한글과 공백을 제외한 모든 문자 제거", sourceurl: ""})
d2.set_img(0, { imgtitle: "7. 한글 형태소 분리", imgurl: "https://drive.google.com/file/d/1P5bm1tY_0MAdizRnkUU3GtPNmUq3eQP0/view?usp=drive_link", imglog: "사용하지 않는 불용어 처리와 Konlp를 활용한 형태소 분리", sourceurl: ""})
d2.set_img(0, { imgtitle: "8. 단어 사이즈 분석", imgurl: "https://drive.google.com/file/d/1Ms6tP2hQsyUPuN39RsKcm3C25asFv9_U/view?usp=drive_link", imglog: "단어의 출현 빈도에 따른 단어 사전 사이즈 분석 및 결정", sourceurl: ""})
d2.set_img(0, { imgtitle: "9. 문장의 길이 분석", imgurl: "https://drive.google.com/file/d/1V-jZE9U9h60fCaqB2hWhLJy0h0Scl7To/view?usp=drive_link", imglog: "Histogram에 의한 문장의 길이 분석 후 적절한 최대 문장 길이 선정", sourceurl: ""})
d2.set_img(0, { imgtitle: "10. 단어 사전 생성", imgurl: "https://drive.google.com/file/d/1blwaU9RA4STXvJVO-DCc120fyYhxjLwI/view?usp=drive_link", imglog: "단어 사이즈와 문장 사이즈를 설정하여 TextVectorize layer를 활용한 단어 사전 생성", sourceurl: ""})
d2.set_img(0, { imgtitle: "11. 환경 저장", imgurl: "https://drive.google.com/file/d/1N1EHkK_gQyXphLmmt_p31L6GD_ClhiPq/view?usp=drive_link", imglog: "단어 사이즈, 문장 길이, 단어 사전을 환경 설정 파일로 저장", sourceurl: ""})
d2.set_content("2.2 LSTM 모델 구성 및 훈련")//서브 타이틀
d2.set_img(1, { imgtitle: "12. 희소텐서 및 임베딩", imgurl: "https://drive.google.com/file/d/16k7aw3LQ2jR-rRDenlTl_9nUJ3LMFaBn/view?usp=drive_link", imglog: "TextVectorize를 활용한 단어 정수 변환과 Embedding layer를 활용한 밀집텐서(부동소수점) 변환 테스트", sourceurl: ""})
d2.set_img(1, { imgtitle: "13. 모델 구성", imgurl: "https://drive.google.com/file/d/1Y3o1uKubEK2OFOqW8QFd9wqrl6xju-JM/view?usp=drive_link", imglog: "Embedding layer 및 LSTM layer를 주축으로 이진분류 모델 구성 및 컴파일", sourceurl: ""})
d2.set_img(1, { imgtitle: "14. 모델 훈련", imgurl: "https://drive.google.com/file/d/1qvyKRDsOxPmsQLFVWidikMUWuuFauDYo/view?usp=drive_link", imglog: "조기 종료 콜백 함수를 탑재한 모델을 훈련", sourceurl: ""})
d2.set_content("2.3 모델 훈련 평가")//서브 타이틀
d2.set_img(2, { imgtitle: "15. 훈련 결과 그래프", imgurl: "https://drive.google.com/file/d/1mCELi5i3fkQzkSe3nb4RTGI3c1fbuPBN/view?usp=drive_link", imglog: "훈련 데이터와 검증 데이터의 손실률, 정확률 시각화 판단", sourceurl: ""})
d2.set_img(2, { imgtitle: "16. 서비스를 위한 리팩토링", imgurl: "https://drive.google.com/file/d/1MbkpwxKneGDfMiwBqGf4UQgeOL9c6oqO/view?usp=drive_link", imglog: "모델 서비스를 위한 코드 리팩토링", sourceurl: ""})
d2.set_content("2.4 서비스 페이지 네이버 쇼핑 리뷰 탑재")//서브 타이틀
//d2.set_img(0, { imgtitle: "", imgurl: "", imglog: "", sourceurl: ""})
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("네이버 쇼핑 상품 감성 리뷰 이진분류 예측")//메인타이틀
d3.set_content("3.1 상품 리뷰 데이터 수집 및 전처리")//서브 타이틀
d3.set_img(0, { imgtitle: "1. 데이터 수집하기", imgurl: "https://drive.google.com/file/d/17AwGrK0rqUmfvZafKfjQTzMx5BkS_WyG/view?usp=drive_link", imglog: "네이버 쇼핑 상품 리뷰 수집 및 pandas data 변환", sourceurl: ""})
d3.set_img(0, { imgtitle: "2. 정답 데이터 범위 수정", imgurl: "https://drive.google.com/file/d/194zrexKBvyCHs7kA2CK-ZZLlrv6xTRgY/view?usp=drive_link", imglog: "이진 분류를 위한 별점의 수량에 따른 긍정과 부정 분류", sourceurl: ""})
d3.set_img(0, { imgtitle: "3. 결측치 및 중복 제거", imgurl: "https://drive.google.com/file/d/1FtYZrQsYeDPaOqhk4qY6ilHNHRkGjEkU/view?usp=drive_link", imglog: "결측 데이터 및 중복 데이터 확인과 제거", sourceurl: ""})
d3.set_img(0, { imgtitle: "4. 데이터 분할", imgurl: "https://drive.google.com/file/d/1AHS0DIz1PY2-YSW1-sM55MQ7k2wcPe1j/view?usp=drive_link", imglog: "훈련 데이터, 검증 데이터, 테스트 데이터 분할", sourceurl: ""})
d3.set_img(0, { imgtitle: "5. 한글 영문 공백 외 제거", imgurl: "https://drive.google.com/file/d/171fZuvRJrrETIvw5v0H1jNJq77IbzwEn/view?usp=drive_link", imglog: "Normalization을 이용한 한글 및 영문, 공백을 제외한 모든 문자 제거", sourceurl: ""})
d3.set_img(0, { imgtitle: "6. 불용어 처리 및 형태소 분리", imgurl: "https://drive.google.com/file/d/13G6mTxZ9U9G0CcJZOjsNwP-D1oXCPlq-/view?usp=drive_link", imglog: "불용어 처리와 Konlp를 이용한 한글 형태소를 분리", sourceurl: ""})
d3.set_img(0, { imgtitle: "7. 단어 사이즈 결정", imgurl: "https://drive.google.com/file/d/1_8kZOY7vvoHZadct-xLG1dlVfrrSQGGk/view?usp=drive_link", imglog: "단어의 출현 빈도를 계산한 사전 사이즈 결정", sourceurl: ""})
d3.set_img(0, { imgtitle: "8. 문장 사이즈 결정", imgurl: "https://drive.google.com/file/d/1rYKIIo_7r9Ncr0KtUHFgBhwRK1a8XsnJ/view?usp=drive_link", imglog: "문장 길이별 Histogram Analyze으로 최대 문장의 길이 결정", sourceurl: ""})
d3.set_img(0, { imgtitle: "9. 문장 정확성 확인과 정수 변경", imgurl: "https://drive.google.com/file/d/1PltuShW9Zl9ozVuXMdWPdgPR1tLnlWQx/view?usp=drive_link", imglog: "TextVectorize를 이용한 문장의 정수 변경 및 zero 패딩 수행", sourceurl: ""})
d3.set_img(0, { imgtitle: "10. 변경 데이터 확인", imgurl: "https://drive.google.com/file/d/1mlAWt0csaAGsCl7vj7ob5ODyJcxKzl6z/view?usp=drive_link", imglog: "정수로 변경 된 데이터와 zero 패딩 된 데이터 확인", sourceurl: ""})
d3.set_content("3.2 Conv1DLSTM 모델 구성 및 훈련")//서브 타이틀
d3.set_img(1, { imgtitle: "11. 밀집 수로 변경", imgurl: "https://drive.google.com/file/d/10LEuHFZUl9rs-xgUgCu0e3j5qemo_Dhi/view?usp=drive_link", imglog: "정수로 변경된 데이터를 Embedding layer를 이용한 밀집 값으로 변경 여부 확인", sourceurl: ""})
d3.set_img(1, { imgtitle: "12. 모델 구성", imgurl: "https://drive.google.com/file/d/11tLGZBW8CU6svC5c0lEU8JtAfG2Au4ez/view?usp=drive_link", imglog: "Embedding layer와 Conv1DLSTM layer를 활용한 모델 구성", sourceurl: ""})
d3.set_img(1, { imgtitle: "13. 모델 훈련", imgurl: "https://drive.google.com/file/d/1vUtnGgYrtB4xiw3Ha7XUKvqMu5HdWijZ/view?usp=drive_link", imglog: "조기 종료 콜백 함수를 탑재한 후 모델 훈련", sourceurl: ""})
d3.set_img(1, { imgtitle: "14. 훈련 결과 시각화", imgurl: "https://drive.google.com/file/d/1V3S2G0SoTg-vgtsED_WOZcT4dGDuE0z7/view?usp=drive_link", imglog: "분류 모델의 손실률 및 정확률 훈련 결과 그래프 시각화", sourceurl: ""})
d3.set_content("3.3  모델 훈련 평가")//서브 타이틀
d3.set_img(2, { imgtitle: "15. 모델 평가", imgurl: "https://drive.google.com/file/d/1O5RGq0ZslGFNB2x5Uki-DtiM27nfsT4J/view?usp=drive_link", imglog: "테스트 데이터와 evaluate 메소드를 이용한 훈련된 모델의 최종 평가", sourceurl: ""})
d3.set_img(2, { imgtitle: "16. 혼동 행렬", imgurl: "https://drive.google.com/file/d/10Pm30ZhsGN0-NMXfRlYXRU9XzxOOExO5/view?usp=drive_link", imglog: "분류 모델 평가를 위한 혼동 행렬 그래프 출력", sourceurl: ""})
d3.set_img(2, { imgtitle: "17. F1 스코어", imgurl: "https://drive.google.com/file/d/1WLneEOKNONywEmvFReOen3KOROzgT5Bh/view?usp=drive_link", imglog: "최종 F1 스코어로 정밀도, 재현율, F1-score 모델 성능 판별", sourceurl: ""})
d3.set_content("3.4  서비스 구현")//서브 타이틀
d3.set_img(3, { imgtitle: "18. 모델의 저장 및 확인", imgurl: "https://drive.google.com/file/d/1BxqwbeGphAjVUnWVxB6oe9VZ9DZjpHjj/view?usp=drive_link", imglog: "모델 저장 후 저장된 모델 불러오기", sourceurl: ""})
d3.set_img(3, { imgtitle: "19. 실제 데이터 입력 및 처리 구현", imgurl: "https://drive.google.com/file/d/1OCPqlzgD5PZDk8QZCyr--RpSqxrxFi7D/view?usp=drive_link", imglog: "가상의 실제 데이터를 입력하여 최종 결과물 처리 구현", sourceurl: ""})
d3.set_img(3, { imgtitle: "20. 서비스를 위한 리팩토링", imgurl: "https://drive.google.com/file/d/1mCPHFFGOOyo9artCe6B7pb-65y4DTmoT/view?usp=drive_link", imglog: "최종 서비스를 위한 모델 함수 리팩토링", sourceurl: ""})
d3.set_img(3, { imgtitle: "21. 최종 서비스 페이지", imgurl: "https://drive.google.com/file/d/1IlRy70vH7QJz1fIOYhn2TBJ3QpS3t8z3/view?usp=drive_link", imglog: "최종 서비스 페이지 결과 화면", sourceurl: ""})
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

data_sets.push(d4)
