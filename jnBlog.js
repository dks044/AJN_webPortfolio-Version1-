console.log('자바스크립트 구동확인');
/*default*/
var navHeight = document.getElementById('nav').offsetHeight;//상단메뉴바 높이
/*default*/
/*nav시작*/
//상단메뉴 배경색바꾸기
function navColorWhite(){
    var nav = document.getElementById('nav')
    var navTitle = document.getElementById('navTitle');
    var navUl = document.getElementById('navUl');
    

    nav.style.backgroundColor='white';
    navTitle.style.color='black';
    navUl.style.color='black';
}
function navColorTransparent(){
    var nav = document.getElementById('nav')
    var navTitle = document.getElementById('navTitle');
    var navUl = document.getElementById('navUl');
    

    nav.style.backgroundColor='transparent';
    navTitle.style.color='darkgrey';
    navUl.style.color='darkgrey';
    
}
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 10){
       navColorWhite();
    }else{
        navColorTransparent();
    }
  })
//상단메뉴 배경색바꾸기
//블로그title 버튼
var navTitle = document.getElementById('navTitle');
navTitle.addEventListener('click',MoveHome);
function MoveHome(){
    window.scrollTo({top:0, behavior:'smooth'});
}

//nav AboutMe버튼(aboutMe2이동)
var navAbout = document.getElementById('navAbout');
navAbout.addEventListener('click',MoveAboutme);

//nav skills 버튼(skills 이동)
var navSkills = document.getElementById('navSkills');
var skills_Location = document.getElementById('skills_Location').offsetTop;
navSkills.addEventListener('click',MoveSkills);
function MoveSkills(){
    window.scrollTo({top:skills_Location-navHeight,behavior:'smooth'});
}
//nav Archiving 버튼(Archiving 이동)
var navArchiving = document.getElementById('navArchiving');
var Archiving_Location = document.getElementById('Archiving_Location').offsetTop;
navArchiving.addEventListener('click',MoveArchiving);
function MoveArchiving(){
    window.scrollTo({top:Archiving_Location-navHeight,behavior:'smooth'});
}
//nav Project 버튼(Project 이동)
var navProject = document.getElementById('navProject');
var Project_Location = document.getElementById('Project_Location').offsetTop;
navProject.addEventListener('click',MoveProject);
function MoveProject(){
    window.scrollTo({top:Project_Location-navHeight,behavior:'smooth'});
}

/*nav끝*/
/*aboutme1시작*/
//더알아보기 스크롤이동(aboutMe2이동)
var aboutme_MoreInfo = document.querySelector('.aboutme_MoreInfo');
var aboutme2_Location =document.getElementById('aboutme2_Location').offsetTop;
aboutme_MoreInfo.addEventListener('click',MoveAboutme);
function MoveAboutme(){
    window.scrollTo({top:aboutme2_Location - navHeight+10, behavior:'smooth'});
}


/*aboutme1끝*/
/*skills 시작*/
//프론트엔드박스 마우스오버아웃
const skills_FrontEnd = document.querySelector('.skills_FrontEnd');
const skills_FrontEnd_stack = document.querySelector('.skills_FrontEnd_stack');
skills_FrontEnd.addEventListener('mouseover',Skills_FrontEnd_mouseOver);
skills_FrontEnd.addEventListener('mouseout',Skills_FrontEnd_mouseOut)
function Skills_FrontEnd_mouseOver() {
    skills_FrontEnd_stack.style.display='block';
}
function Skills_FrontEnd_mouseOut(){
    skills_FrontEnd_stack.style.display='none';
}
//백엔드박스 마우스오버아웃
const skills_BackEnd = document.querySelector('.skills_BackEnd');
const skills_BackEnd_stack = document.querySelector('.skills_BackEnd_stack');
skills_BackEnd.addEventListener('mouseover',Skills_BackEnd_mouseOver);
skills_BackEnd.addEventListener('mouseout',Skills_BackEnd_mouseOut)
function Skills_BackEnd_mouseOver() {
    skills_BackEnd_stack.style.display='block';
}
function Skills_BackEnd_mouseOut(){
    skills_BackEnd_stack.style.display='none';
}
//버전컨트롤박스 마우스오버아웃
const skills_VersionControll = document.querySelector('.skills_VersionControll');
const skills_VersionControll_stack = document.querySelector('.skills_VersionControll_stack');
skills_VersionControll.addEventListener('mouseover',Skills_VersionControll_mouseOver);
skills_VersionControll.addEventListener('mouseout',Skills_VersionControll_mouseOut)
function Skills_VersionControll_mouseOver() {
    skills_VersionControll_stack.style.display='block';
}
function Skills_VersionControll_mouseOut(){
    skills_VersionControll_stack.style.display='none';
}
//toll박스 마우스오버아웃
const skills_Tool = document.querySelector('.skills_Tool');
const skills_Tool_stack = document.querySelector('.skills_Tool_stack');
skills_Tool.addEventListener('mouseover',Skills_Tool_mouseOver);
skills_Tool.addEventListener('mouseout',Skills_Tool_mouseOut)
function Skills_Tool_mouseOver() {
    skills_Tool_stack.style.display='block';
}
function Skills_Tool_mouseOut(){
    skills_Tool_stack.style.display='none';
}

/*skills 끝*/


