# user

## 接口列表

### 1、用户注册

#### 请求URL:  

```
/user/add
```

#### 请求方法

post

#### 参数类型

| 参数             | 是否必选 | 类型     | 说明     |
|----------------|------|--------|--------|
| user_name      | y    | string | 用户名字   |
| user_phone     | y    | string | 用户电话   |
| user_password  | y    | string | 密码     |
| user_avatar    | y    | string | 用户头像地址 |
| user_education | y    | array  | 学校     |

#### 请求示例
```
user_name:hehehhehehehhe
user_phone:18295718145
user_password:123
user_avatar:slkdfjlskdfjlasjflasdf
user_education:[{"school": "a","domain": "bb"}]
```

#### 返回

```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTE3ZjVhZGY3YjMzZjZjZDA0YzIwODYiLCJpYXQiOjE1MTE1MTk2NjEsImV4cCI6MTUxMjEyNDQ2MX0.9xiGmsGbyB4ztNZKkND4Be1iQw6aaUuv9VHaaqNl5ls",
    "uid": "5a17f5adf7b33f6cd04c2086",
    "error": 0,
    "msg": "注册成功!"
}
```
### 2、登录

#### api
/user/login

#### 参数类型

| 参数            | 是否必选 | 类型     | 说明   |
|---------------|------|--------|------|
| user_password | y    | string | 密码   |
| user_phone    | y    | string | 手机号码 |

### 3、回答问题

#### api
/answer/add

#### 参数类型

| 参数                 | 是否必选 | 类型     | 说明      |
|--------------------|------|--------|---------|
| answer_question_id | y    | string | 问题id    |
| answer_content     | y    | string | 回答问题的内容 |

### 4、查看问题详情

#### api
/question/detail/5a197eddb334d641dc84559d

#### 参数类型

| 参数                 | 是否必选 | 类型     | 说明      |
|--------------------|------|--------|---------|
| page_size | y    | string | 答案分页大小    |
| page     | y    | string | 答案当前页码 |

### 4、关注一个问题

#### api
/question/follow

#### 参数类型

| 参数                 | 是否必选 | 类型     | 说明      |
|--------------------|------|--------|---------|
| question_id | y    | string | 问题id    |