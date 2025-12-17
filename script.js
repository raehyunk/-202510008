
const quiz=[
{q:'ISMS의 핵심 목적은?',a:['솔루션 도입','리스크 관리','처벌','해킹'],c:1},
{q:'클라우드 보안 책임은?',a:['제공자','사용자','공동','없음'],c:2}
];
let i=0,s=0;
function show(){
question.textContent=quiz[i].q;
answers.innerHTML='';
quiz[i].a.forEach((t,idx)=>{
const b=document.createElement('button');
b.textContent=t;
b.onclick=()=>{
document.querySelectorAll('#answers button').forEach(x=>x.classList.remove('selected'));
b.classList.add('selected');
b.dataset.i=idx;
};
answers.appendChild(b);
});
}
next.onclick=()=>{
const sel=document.querySelector('.selected');
if(!sel)return alert('선택하세요');
if(+sel.dataset.i===quiz[i].c)s++;
i++;
i<quiz.length?show():result.textContent='점수 '+s+'/'+quiz.length;
};
show();
