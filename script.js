function startQuiz() {
  const quizArea = document.getElementById('quiz-area');
  quizArea.innerHTML = `
    <p>Q1. 정보보안의 3대 요소는?</p>
    <button onclick="alert('정답: 기밀성, 무결성, 가용성')">정답 보기</button>
  `;
}