# MakrDown 사용법 총정리

## 제목

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

## 강조
- 이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_를 사용하세요.
- 두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__를 사용하세요.
**_이텔릭체_와 두껍게**를 같이 사용할 수 있습니다.
취소선은 ~~물결표시(tilde)~~를 사용하세요.
- <u>밑줄</u>은 `<u></u>`를 사용하세요.

## 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
  - 순서가 필요하지 않은 목록(서브) 
  - 순서가 필요하지 않은 목록(서브) 
1. 순서가 필요한 목록
  1. 순서가 필요한 목록(서브)
  1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)

## 링크
[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

## 이미지

![대체 텍스트(alternative text)를 입력하세요!](https://theorydb.github.io/assets/img/think/2019-06-25-think-future-ai-1.png "링크 설명(title)을 작성하세요.")

![Kayak][logo]

[logo]:https://theorydb.github.io/assets/img/think/2019-06-25-think-future-ai-1.png "To go kayaking."

## 이미지에 링크
[![Vue][/images/vue.png](https://kr.vuejs.org/)

## 코드(code) 강조
` 
pre, code로 변환됩니다.
숫자 1번 키 왼쪽에 있는 (Grave)를 입력하세요
`

## 블록(block) 코드 강조
```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = 'AAA';
  return a;
}
```

```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting. 
But let's throw in a tag.
```

## 표(Table)
| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |


## 인용문(BlockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3


## 원시 HTML 
<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며 대부분 잘 동작합니다.

<img width="150" src="https://theorydb.github.io/assets/img/think/2019-06-25-think-future-ai-1.png" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">

![Prunus]("https://theorydb.github.io/assets/img/think/2019-06-25-think-future-ai-1.png)

## 수평선(Horizontal Rule)
각 기호를 3개 이상 입력하세요.
---
(Hyphens)

***
(Asterisks)

___
(Underscores)

## 줄바꿈(Line Breaks)
>동해물과 백두산이 마르고 닳도록   
하느님이 보우하사 우리나라 만세<!--띄어쓰기 2번-->  
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세


## 체크박스
- [X] 사이를 한 칸 띄워 체크박스 만들기