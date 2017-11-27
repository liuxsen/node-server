# user


- [user](#user)
  - [接口列表](#%E6%8E%A5%E5%8F%A3%E5%88%97%E8%A1%A8)
    - [1、用户注册](#1%E3%80%81%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C)
      - [请求URL:](#%E8%AF%B7%E6%B1%82url)
      - [请求方法](#%E8%AF%B7%E6%B1%82%E6%96%B9%E6%B3%95)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
      - [请求示例](#%E8%AF%B7%E6%B1%82%E7%A4%BA%E4%BE%8B)
      - [返回](#%E8%BF%94%E5%9B%9E)
    - [2、登录](#2%E3%80%81%E7%99%BB%E5%BD%95)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [3、回答问题](#3%E3%80%81%E5%9B%9E%E7%AD%94%E9%97%AE%E9%A2%98)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [4、查看问题详情](#4%E3%80%81%E6%9F%A5%E7%9C%8B%E9%97%AE%E9%A2%98%E8%AF%A6%E6%83%85)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
      - [返回](#%E8%BF%94%E5%9B%9E)
    - [5、关注一个问题](#5%E3%80%81%E5%85%B3%E6%B3%A8%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [6、赞同回答](#6%E3%80%81%E8%B5%9E%E5%90%8C%E5%9B%9E%E7%AD%94)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [7、问题列表](#7%E3%80%81%E9%97%AE%E9%A2%98%E5%88%97%E8%A1%A8)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [8、新建收藏夹](#8%E3%80%81%E6%96%B0%E5%BB%BA%E6%94%B6%E8%97%8F%E5%A4%B9)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [9、删除收藏夹](#9%E3%80%81%E5%88%A0%E9%99%A4%E6%94%B6%E8%97%8F%E5%A4%B9)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [10、删除收藏夹内容](#10%E3%80%81%E5%88%A0%E9%99%A4%E6%94%B6%E8%97%8F%E5%A4%B9%E5%86%85%E5%AE%B9)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [11、收藏 内容 到 文件夹](#11%E3%80%81%E6%94%B6%E8%97%8F-%E5%86%85%E5%AE%B9-%E5%88%B0-%E6%96%87%E4%BB%B6%E5%A4%B9)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [12、查看文件夹list](#12%E3%80%81%E6%9F%A5%E7%9C%8B%E6%96%87%E4%BB%B6%E5%A4%B9list)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [13、查看某个文件夹中的资源](#13%E3%80%81%E6%9F%A5%E7%9C%8B%E6%9F%90%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E4%B8%AD%E7%9A%84%E8%B5%84%E6%BA%90)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)
    - [14、查看文件夹list](#14%E3%80%81%E6%9F%A5%E7%9C%8B%E6%96%87%E4%BB%B6%E5%A4%B9list)
      - [api](#api)
      - [参数类型](#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B)

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

| 参数        | 是否必选 | 类型     | 说明     |
|-----------|------|--------|--------|
| page_size | y    | string | 答案分页大小 |
| page      | y    | string | 答案当前页码 |

#### 返回
```js
{
    "question": {
        "_id": "5a197eddb334d641dc84559d",
        "question_title": "hello,js",
        "question_description": "hello,js des",
        "question_author": {
            "_id": "5a17c0dc6e81a84e0cbc4837",
            "user_name": "hehehhehehehhe",
            "user_phone": "18295718145",
            "user_password": "202cb962ac59075b964b07152d234b70",
            "user_avatar": "slkdfjlskdfjlasjflasdf",
            "__v": 0,
            "user_education": [
                {
                    "school": "a",
                    "domain": "bb",
                    "_id": "5a17c0dc6e81a84e0cbc4838"
                }
            ]
        },
        "__v": 0,
        "question_follows": [],
        "question_anonymous": false,
        "question_topic": [
            {
                "_id": "5a17c5220fc99444ccf5e238",
                "topic_name": "js",
                "topic_user": "5a17c0dc6e81a84e0cbc4837",
                "__v": 0,
                "topic_create_at": "2017-11-24T07:07:12.787Z"
            }
        ]
    },
    "answers": [
        {
            "_id": "5a198109693c854640146cc4",
            "answer_question_id": "5a197eddb334d641dc84559d",
            "answer_content": "如今手机已经成为人们的主要沟通工具了，在互联网发展的现阶段，人们也越来越依赖于移动设备，那么对于程序员来说，我们要做的产品、项目最多的也是移动端的app，那么在开发阶段中，我们如何测试移动端网页呢？有人说在手机上直接测试，这样的操作对于程序员来说是很麻烦的，也比较浪费效率，因为我们要修改一个语法就要启动一次手机测试，效率相对就比较低，那么如何在pc上进行移动端网页的测试呢，今天给大家提供以下几种方法：\n\n作者：千锋教育\n链接：https://www.zhihu.com/question/20322475/answer/264998038\n来源：知乎\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。",
            "answer_user_id": "5a17c0dc6e81a84e0cbc4837",
            "answer_praise": 0,
            "__v": 0,
            "answer_agree": [],
            "answer_creat_at": "2017-11-25T14:41:13.179Z"
        }
    ]
}
```

### 5、关注一个问题

#### api
/question/follow

#### 参数类型

| 参数          | 是否必选 | 类型     | 说明   |
|-------------|------|--------|------|
| question_id | y    | string | 问题id |

### 6、赞同回答

#### api
/answer/follow

#### 参数类型

| 参数        | 是否必选 | 类型     | 说明              |
|-----------|------|--------|-----------------|
| answer_id | y    | string | 答案id            |
| agree     | y    | string | 1: 同意答案 2： 反对答案 |


### 7、问题列表

#### api
/question/list

#### 参数类型

| 参数        | 是否必选 | 类型     | 说明     |
|-----------|------|--------|--------|
| page_size | y    | string | 答案分页大小 |
| page      | y    | string | 答案当前页码 |



### 8、新建收藏夹

#### api
/bookMark/add

#### 参数类型

| 参数                    | 是否必选 | 类型     | 说明      |
|-----------------------|------|--------|---------|
| booksMark_name        | y    | string | 收藏夹名字   |
| booksMark_description | y    | string | 收藏夹描述   |
| booksMark_isSecret    | y    | string | 收藏夹是否私密 |

### 9、删除收藏夹

#### api
/bookMark/delFolder

#### 参数类型

| 参数           | 是否必选 | 类型     | 说明    |
|--------------|------|--------|-------|
| booksMark_id | y    | string | 收藏夹id |

### 10、删除收藏夹内容

#### api
/bookMark/delete

#### 参数类型

| 参数           | 是否必选 | 类型     | 说明    |
|--------------|------|--------|-------|
| booksMark_id | y    | string | 收藏夹id |

### 11、收藏 内容 到 文件夹
#### api
/bookMark/delFolder

#### 参数类型

| 参数           | 是否必选 | 类型     | 说明                   |
|--------------|------|--------|----------------------|
| refLink      | y    | Number | 收藏的资源的类型，0: 答案 1: 文章 |
| source_id | y    | string | 收藏内容id              |
| booksMark_id | y    | string | 收藏夹id              |

### 12、查看文件夹list
#### api
/bookMark/

#### 参数类型

| 参数           | 是否必选 | 类型     | 说明                   |
|--------------|------|--------|----------------------|

### 13、查看某个文件夹中的资源
#### api
/bookMark/f/:id

#### 参数类型

| 参数           | 是否必选 | 类型     | 说明                   |
|--------------|------|--------|----------------------|

### 14、查看文件夹list
#### api
/bookMark/list

#### 参数类型

| 参数           | 是否必选 | 类型     | 说明                   |
|--------------|------|--------|----------------------|

