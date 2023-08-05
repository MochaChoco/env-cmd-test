# env-cmd-test
env-cmd 라이브러리를 활용하여 환경 변수를 설정하는 방법입니다.  
여러 대의 서버를 동시에 구축해야 하는 환경에서 각 서버마다 별도로 코드를 분류하지 않고, env 파일로만 환경변수를 관리할 수 있다는 장점이 있습니다.
 
# 빌드 명령어
- 로컬 빌드 : yarn build
- 개발 환경 빌드 : yarn build-development
- 운영 환경 빌드 : yarn build-production
- 빌드된 정적 파일 실행 : yarn serve

# 테스트 방법
- yarn install로 라이브러리를 모두 설치합니다.
- 위에 기재한 명령어로 각각 빌드 후, 각 빌드별로 설정해놓은 환경 변수가 제대로 출력되는지 확인합니다.
