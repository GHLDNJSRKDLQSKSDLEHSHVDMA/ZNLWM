// 퀴즈 질문과 답변 목록
const questions = [
    {
        question: "개인정보란 무엇인가요?",
        options: [
            "이름, 나이, 주소, 전화번호",
            "사람의 취미, 직업",
            "모든 사람의 고유한 특징"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보를 보호해야 하는 이유는 무엇인가요?",
        options: [
            "해킹이나 악용을 방지하기 위해",
            "정부가 요구하기 때문",
            "사람들이 귀찮아서"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보를 안전하게 보호하는 방법은 무엇인가요?",
        options: [
            "강력한 비밀번호 사용, 이중 인증 활성화",
            "소셜 미디어에 공개하기",
            "인터넷에서 개인정보를 많이 공개하기"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보를 온라인에 올릴 때 어떤 정보를 제외해야 하나요?",
        options: [
            "비밀번호, 주민등록번호",
            "이름, 주소",
            "전화번호, 이메일"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보 보호법의 주요 목적은 무엇인가요?",
        options: [
            "개인정보를 보호하고, 무단 사용을 방지",
            "모든 인터넷 사용자의 정보를 공유하기 위해",
            "회사들이 개인정보를 쉽게 사용할 수 있도록"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "웹사이트에서 개인정보를 안전하게 입력하는 방법은 무엇인가요?",
        options: [
            "HTTPS로 보호된 사이트에서 입력",
            "모든 웹사이트에서 입력",
            "웹사이트 주소를 모를 때도 입력"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보 유출을 방지하기 위해 사용하는 기술은 무엇인가요?",
        options: [
            "암호화 기술",
            "HTML5",
            "이미지 필터링"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보를 유출할 경우, 어떤 일이 발생할 수 있나요?",
        options: [
            "개인정보가 악용될 수 있으며, 피해자가 정신적, 금전적 피해를 입을 수 있다.",
            "그냥 가벼운 일이지만 아무 일도 없다.",
            "대상자의 정보가 바로 유출되어 보안이 강화된다."
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보를 보호하는 가장 중요한 원칙은 무엇인가요?",
        options: [
            "개인정보 최소화, 필요 시에만 수집",
            "모든 정보를 공유하기",
            "기본적으로 모든 사람에게 공개"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보를 다른 사람에게 넘길 때 필요한 것은 무엇인가요?",
        options: [
            "명확한 동의",
            "편리한 시간",
            "간단한 요청"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    // 추가 질문들
    {
        question: "사이버 공격을 예방하려면 무엇을 해야 하나요?",
        options: [
            "정기적으로 비밀번호를 변경하고, 이중 인증을 활성화",
            "비밀번호를 한 번만 변경하고, 그대로 두기",
            "누구에게나 비밀번호를 공유하기"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "모바일 기기에서 개인정보 보호를 강화하는 방법은 무엇인가요?",
        options: [
            "기기 잠금 설정, 보안 앱 사용",
            "모든 앱에 대해 자유롭게 로그인",
            "어떤 기기든 개인정보를 입력"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "암호화된 이메일을 사용하는 이유는 무엇인가요?",
        options: [
            "이메일 내용을 안전하게 보호하고, 외부 공격으로부터 방어",
            "이메일을 더 쉽게 읽을 수 있게 하기 위해",
            "메일의 색상 변경을 위해"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    },
    {
        question: "개인정보 보호에 대한 법적 규제는 무엇인가요?",
        options: [
            "GDPR(일반 데이터 보호 규정)",
            "정보 유출 방지 법",
            "웹사이트 규제법"
        ],
        answer: 0 // 정답: 첫 번째 선택지
    }
];

let currentQuestionIndex = 0;
let score = 0;

// 퀴즈 표시 함수
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');

    quizContainer.innerHTML = `
        <h3 class="font-semibold text-xl text-blue-600 mb-3">${currentQuestion.question}</h3>
        ${currentQuestion.options.map((option, index) => `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="option" id="option${index}" value="${index}">
                <label class="form-check-label" for="option${index}">${option}</label>
            </div>
        `).join('')}
    `;
}

// 다음 문제로 넘어가기
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        Swal.fire({
            title: '선택이 필요합니다!',
            text: '문제를 풀기 전에 답을 선택해주세요.',
            icon: 'warning',
            confirmButtonText: '확인'
        });
        return;
    }

    const selectedAnswer = parseInt(selectedOption.value);
    const currentQuestion = questions[currentQuestionIndex];

    // 정답 체크
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        Swal.fire({
            title: '퀴즈 종료!',
            text: `당신의 점수는 ${score}점입니다.`,
            icon: 'success',
            confirmButtonText: '다시 시작하기'
        }).then(() => {
            score = 0;
            currentQuestionIndex = 0;
            displayQuestion();
        });
    }
}

// 페이지가 로드될 때 퀴즈 표시
window.onload = function() {
    displayQuestion();
};
