# UX/UI 디자인 스쿨
## 개발환경 설정

1. Chrome 및 Firefox 확장 기능 설치
    * web developer tool
    * headingsmap
    * open wax

2. Git [다운로드](ttps://git-scm.com/downloads) 및 설치  
   Git [시작하기](https://goo.gl/hqYsPC)

3. Visual Studio Code [다운로드](https://code.visualstudio.com/) 및 설치
   확장 항목에서 실습에 필요한 Extension 설치 
   * Live Server 
   * Prettier-Code Formatter
   * Auto Close Tag 
   * Path Autocomplete  
   * Color Picker
   * Monokai-Contrast Theme
   * vscode-icons    

4. NVM [다운로드](https://github.com/creationix/nvm) 및 설치
5. NVM을 사용하여 Nodejs 설치  
   설치할 node [버전](https://nodejs.org/en/) 확인  
   NVM으로 node 설치 후 nvm use 명령을 통해 node 활성화  

6. .bash_profile 설정  
   
```.bash_profile
#alias로 단축명령 설정
alias cls='clear'

#NVM 설정
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# 프롬프트에서 Git 브랜치명 보기
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\u:\w\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```
