# git commond

## 설정
 commond 창에서 편집기 실행 
 >code . 

 설정 보기
> git config --global core.editor "code"<br>
> git config --global -e

window/os 줄바꿈
> git config --global core.autocrlf true (window)<br>
> git config --global core.autocrlf input (mac)

 ## 초기화
 >git init <br>
 >get-item -force .보기(win)

## .git 보기
> code .git

## 단축키 만들기 
>git config --global alias.st status    status => st 으로 단축

## 추가하고 싶지 않은 파일
>.gitignore에  파일을 추가
>
