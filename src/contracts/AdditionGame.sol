pragma solidity >=0.4.25;

contract AdditionGame {
    //배포하는 순간 운영자 계좌를 저장할 수 있는 상태 변수 생성

    // 생성자를 생성
    // 그전에 보통 생성자는 어떤 역할을 할까?
    // -> 주로 초기화를 담당한다.
    // 솔리디티 같은 경우에는 특히 배포할때 가장 먼저 불러오는 것이 생성자이다.
    // 그이후에는 생성자를 생성하거나 불러올수 없다.
    // 이 이점을 활용하여 컨트랙의 소유자 계정을 정할수 있다.
    //우선 상태 오너를 만든다.
    address public owner;
    //타입은 주소형 타입

    constructor() public {
        // 생성자를 만듦 여기에서 msg.sender는 현 컨트랙을 호출하고 있는 사람을 의미한다.
        owner = msg.sender;
        // owner에 저장해서 블록체인에 영구 반영한다. 이게 초기화 방법   
    }
    
    function getBalance() public view returns (uint){
        // address(this) = 자신 AdditionGame을 뜻함
        return address(this).balance;
    }

    // owner 계정에서 컨트랙트 주소로 송금하는 함수
    function deposit() public payable{
        // require 이 안에 조건문이 맞지 않으면 함수를 종료함
        // msg.sender 이 함수를 호출한 계정
        // -> 상태변수 owner 계정이 아니면 실행 X
        require(msg.sender == owner);
    }

    // 정답을 맞추면 이 함수를 호출해서 돈을 가져가는 함수
    function transfer(uint _value) public returns (bool){
        // 현재 컨트랙의 잔액과 인자로 받은 _value보다 같거나 많으면 통과
        require(getBalance() >=_value);
        
        // msg.sender = 정답을 맞춘 사용자
        // transfet(_value)는 _value만큰 송금
        msg.sender.transfer(_value);

        // 성공 여부 리턴
        return true;
    }
}