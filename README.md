# My Helper

---

## 0. Introduce

- My Helper는 일상 생활 중 있으면 좋을것 같은데 라고 막연하게 생각했던 것들을 기능으로 만든 유틸리티 페이지입니다.

## 1. Stack

- Next14
- Tailwind CSS

## 2. Feature

- 기프티콘 사용 시 최적 조합 메이커
    - 기프티콘 사용하거나 할인을 받아 구매 시 최적의 조합을 찾아주는 기능입니다
    - 예시 케이스
        - 12700원짜리 스타벅스 기프티콘을 사용하고자 할때
            - 60% (약 7600원) 사용시 환불 가능
            - 아메리카노가 4500원, 마카롱이 2300원, 샌드위치가 4400원일때
            - 최적의 조합은 샌드위치1 + 마카롱 1 같이 알려주는 기능
        - 30% 할인쿠폰이 있고, 기프티콘이 3900원 짜리가 있을때
            - 5572원 이상 물건을 구매 해야 기프티콘을 온전히 사용 가능
            - 아메리카노가 2000원, 햄버거가 3800원, 쿠키가 2200원 있을때
                - 아메리카노1 + 햄버거 1을 구매하는 조합이 최적
- 이제 할인율 계산기를 사용할 수 있어요
    - 정가와 실제 결제한 금액을 입력받으면 내가 몇 % 할인받았는지를 알 수 있어요
        - 정가 2만원, 결제 1.9만원을 했다면 할인율은 5%에요
    - 정가와 할인 %를 입력하면 총 얼마를 할인받아 실제 얼마를 결제하는 지 알 수 있어요
        - 정가 2만원, 할인율이 5%라면 총 1천원을 할인받아 실제 결제는 1.9만원이에요
- 앞으로 더 많은 기능이 추가 될 예정입니다…

## 3. Optimization Point

- 최적화 적용시 반영될 예정입니다

## 4. log

- v0.1.0 24.10.09
    - 기프티콘 최적 조합 기능 최초 릴리즈
- v0.2.0 24.10.09
    - html 구조 리펙토링 (div → table)
    - 할인율 계산기 추가
